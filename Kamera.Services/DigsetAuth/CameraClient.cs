using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Security.Cryptography;
using System.Text.RegularExpressions;
using System.Net;
using System.IO;
using System.Text.Json;
using System.Net.Http;
using System.Threading.Tasks;

namespace Camera.Services.CameraClientService
{
    class CameraClient
    {
        private static string _host;
        private static string _user;
        private static string _password;
        private NetworkCredential _networkCredential;
        public CameraClient(string host, string user, string password)
        {
            // TODO: Complete member initialization
            _host = host;
            _user = user;
            _password = password;
            _networkCredential = new NetworkCredential(_user, _password);
        }
        public async Task<HttpResponseMessage> GetFromCamera(string dir)
        {
            var url = _host + dir;
            var credCache = new CredentialCache();
            credCache.Add(new Uri(url), "Digest", _networkCredential);
            var httpClient = new HttpClient(new HttpClientHandler { Credentials = credCache });
            var response = await httpClient.GetAsync(url);
            return response;
        }
        public async Task<string> PostToCamera(string dir,string body)
        {
            var url = _host + dir;
            var credCache = new CredentialCache();
            credCache.Add(new Uri(url), "Digest", _networkCredential);
            var httpClient = new HttpClient(new HttpClientHandler { Credentials = credCache });
            var content = new StringContent(body);
            var response = await httpClient.PostAsync(url,content);
            return response.ToString();
        }
    }
}
