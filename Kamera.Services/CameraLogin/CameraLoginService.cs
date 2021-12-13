using Camera.Services.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.IO;
using System.Text;

namespace Camera.Services.CameraLogin
{
    //tu będzie logika do logowań razem z zapisywaniem loginów w cashu 
    public class CameraLoginService
    {
        private string _rootPath;
        public CameraLoginService(string rootPath)
        {
            _rootPath = rootPath;
        }
        public CredentialsModel findCredentials(string ip)
        {
            var JsonFile = File.ReadAllText(_rootPath + "/credentials/Credentials.json");
            var JsonList = JsonConvert.DeserializeObject<List<CredentialsModel>>(JsonFile);
            var Credentials = JsonList.Where(x => x.ipAdress == ip).FirstOrDefault() ?? new CredentialsModel();
            return Credentials;
        }
        public CredentialsModel addNewCredentials(string ip,string user, string password)
        {
            var credentials = new CredentialsModel
            {
                ipAdress = ip,
                username = user,
                password = password,
                nightModeStart = "",
                nightModeEnd = ""
            };
            var JsonFile = File.ReadAllText(_rootPath + "/credentials/Credentials.json");
            var JsonList = JsonConvert.DeserializeObject<List<CredentialsModel>>(JsonFile);
            if(JsonList==null)
            {
                JsonList = new List<CredentialsModel>();
            }
            JsonList.Add(credentials);
            var newJson = JsonConvert.SerializeObject(JsonList);
            File.WriteAllText(_rootPath + "/credentials/Credentials.json", newJson);
            return credentials;
        }
        public void putModeChangeHours(string Start,string End)
        {

        }
    }
}
