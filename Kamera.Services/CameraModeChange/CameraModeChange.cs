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
        public static string _modeChangeEndPoint = "/cgi-x/digitalio";
        public static string _nightModePath = "/requests/nightmode.json";
        public static string _dayModePath = "/requests/daymode.json";
        public CameraModeChange(string rootPath)
        {
            _path = rootPath;
        }
        public void fillVariables(string user, string password, string host)
        {
            _user = user;
            _password = password;
            _host = host;
            cameraClient = new CameraClient(_host, _user, _password);
        }
        public async Task changeMode()
        {
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
        public async Task putIntoNightMode()
        {
            string body = File.ReadAllText(_path + _nightModePath);
            await cameraClient.PostToCamera(_modeChangeEndPoint, body);
        }
        public async Task putIntoDayMode()
        {
            string body = File.ReadAllText(_path + _dayModePath);
            await cameraClient.PostToCamera(_modeChangeEndPoint, body);
        }
    }
}
