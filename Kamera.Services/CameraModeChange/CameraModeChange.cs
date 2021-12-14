using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Security.Cryptography;
using System.Text.RegularExpressions;
using System.Net;
using System.IO;
using Camera.Services.CameraClientService;
using System.Net.Http;
using System.Threading.Tasks;
using System.Text.Json;
using RestSharp;
using Newtonsoft.Json;
using Camera.Services.Models;
using Camera.Services.CameraLogin;

namespace Camera.Services.CameraModeChange
{
    //tu będzie obsługa zmiany trybu 
    public class CameraModeChange
    {
        private string _user;
        private string _password;
        private string _path;
        private string _host;
        private CameraClient cameraClient;
        private CameraLoginService cameraLogin;
        public static string _modeChangeEndPoint = "/cgi-x/digitalio";
        public static string _nightModePath = "/requests/nightmode.json";
        public static string _dayModePath = "/requests/daymode.json";
        public CameraModeChange(string rootPath)
        {
            _path = rootPath;
            cameraLogin = new CameraLoginService(_path);
        }
        private void fillCredentials(CredentialsModel model)
        {
            _user = model.username;
            _password = model.password;
            _host = "http://" +  model.ipAdress;
            cameraClient = new CameraClient(_host, _user, _password);
        }
        public async Task<bool> getMode(int id)
        {
            fillCredentials(cameraLogin.getCredentialsById(id));
            var response = await cameraClient.GetFromCamera(_modeChangeEndPoint);
            dynamic Json = JsonConvert.DeserializeObject(await response.Content.ReadAsStringAsync());
            var dayTimeMode = Json["inputs"][0]["idleState"].Value;
            if(dayTimeMode == "0")
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        public async Task changeMode(int id)
        {
            fillCredentials(cameraLogin.getCredentialsById(id));
            var response = await cameraClient.GetFromCamera(_modeChangeEndPoint);
            dynamic Json = JsonConvert.DeserializeObject(await response.Content.ReadAsStringAsync());
            var dayTimeMode = Json["inputs"][0]["idleState"];
            string body = "";
            if (dayTimeMode.Value=="0")
            {
                body = File.ReadAllText(_path + _dayModePath);
            }
            else
            {
                body = File.ReadAllText(_path + _nightModePath);
            }

            await cameraClient.PostToCamera(_modeChangeEndPoint, body);
            
            return;
        }
        public async Task putIntoNightMode(int id)
        {
            fillCredentials(cameraLogin.getCredentialsById(id));
            string body = File.ReadAllText(_path + _nightModePath);
            await cameraClient.PostToCamera(_modeChangeEndPoint, body);
        }
        public async Task putIntoDayMode(int id)
        {
            fillCredentials(cameraLogin.getCredentialsById(id));
            string body = File.ReadAllText(_path + _dayModePath);
            await cameraClient.PostToCamera(_modeChangeEndPoint, body);
        }
        public async Task updateTime(string time)
        {
            var JsonFile = File.ReadAllText(_path + "/credentials/Credentials.json");
            var JsonList = JsonConvert.DeserializeObject<List<CredentialsModel>>(JsonFile);
            foreach (var model in JsonList)
            {
                if(String.Equals(model.nightModeStart, time, StringComparison.OrdinalIgnoreCase))
                {
                    await putIntoNightMode(model.id);
                }
                if(String.Equals(model.nightModeEnd, time, StringComparison.OrdinalIgnoreCase))
                {
                    await putIntoDayMode(model.id);
                }
            }
        }
    }
}
