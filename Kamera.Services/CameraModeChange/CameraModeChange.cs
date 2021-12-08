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
        public CameraModeChange(string rootPath,string user,string password,string host)
        {
            _path = rootPath;
            _user = user;
            _password = password;
            _host = host;
        }
        public async Task changeMode()
        {
            var cameraClient = new CameraClient(_host, _user, _password);
            var response = await cameraClient.GetFromCamera("/cgi-x/digitalio");
            dynamic Json = JsonConvert.DeserializeObject(await response.Content.ReadAsStringAsync());
            var dayTimeMode = Json["inputs"][0]["idleState"];
            string body = "";
            if (dayTimeMode.Value=="0")
            {
                body = File.ReadAllText(_path+"/requests/daymode.json");
            }
            else
            {
                body = File.ReadAllText(_path + "/requests/nightmode.json");
            }

            await cameraClient.PostToCamera("/cgi-x/digitalio", body);
            
            return;
        }
    }
}
