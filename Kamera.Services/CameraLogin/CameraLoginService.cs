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
                credentials.id = 1;
            }
            else
            {
                credentials.id = JsonList.OrderBy(x => x.id).Last().id + 1;
            }
            JsonList.Add(credentials);
            var newJson = JsonConvert.SerializeObject(JsonList);
            File.WriteAllText(_rootPath + "/credentials/Credentials.json", newJson);
            return credentials;
        }
        public void putModeChangeHours(CredentialsModel credentials)
        {
            var JsonFile = File.ReadAllText(_rootPath + "/credentials/Credentials.json");
            var JsonList = JsonConvert.DeserializeObject<List<CredentialsModel>>(JsonFile);
            var Credentials = JsonList.Where(x => x.id == credentials.id).FirstOrDefault() ?? new CredentialsModel();
            JsonList.Remove(Credentials);
            Credentials.nightModeStart = credentials.nightModeStart;
            Credentials.nightModeEnd = credentials.nightModeEnd;
            JsonList.Add(Credentials);
            var newJson = JsonConvert.SerializeObject(JsonList);
            File.WriteAllText(_rootPath + "/credentials/Credentials.json", newJson);
        }

        public CredentialsModel getCredentialsById(int id)
        {
            var JsonFile = File.ReadAllText(_rootPath + "/credentials/Credentials.json");
            var JsonList = JsonConvert.DeserializeObject<List<CredentialsModel>>(JsonFile);
            var Credentials = JsonList.Where(x => x.id == id).FirstOrDefault() ?? new CredentialsModel();
            return Credentials;
        }
        public void updateCredentials(int id,string user,string password)
        {
            var JsonFile = File.ReadAllText(_rootPath + "/credentials/Credentials.json");
            var JsonList = JsonConvert.DeserializeObject<List<CredentialsModel>>(JsonFile);
            var Credentials = JsonList.Where(x => x.id == id).FirstOrDefault() ?? new CredentialsModel();
            JsonList.Remove(Credentials);
            Credentials.password = password;
            Credentials.username = user;
            JsonList.Add(Credentials);
            var newJson = JsonConvert.SerializeObject(JsonList);
            File.WriteAllText(_rootPath + "/credentials/Credentials.json", newJson);
        }
    }
}
