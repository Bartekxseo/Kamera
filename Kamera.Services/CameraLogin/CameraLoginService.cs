using Camera.Services.Models;
using System;
using System.Collections.Generic;
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
            return new CredentialsModel();
        }
    }
}
