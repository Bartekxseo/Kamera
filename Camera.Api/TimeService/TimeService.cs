using Camera.Services.CameraLogin;
using Camera.Services.CameraModeChange;
using Camera.Services.Models;
using Microsoft.AspNetCore.Hosting;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Camera.Api.TimeService
{
    public class Time : BackgroundService
    {
        readonly IHostingEnvironment environment;
        public Time(IHostingEnvironment environment)
        {
            this.environment = environment;
        }
        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {

            var service = new CameraModeChange(environment.ContentRootPath);
            var Login = new CameraLoginService(environment.ContentRootPath);
            var JsonFile = File.ReadAllText(environment.ContentRootPath + "/credentials/Credentials.json");
            var JsonList = JsonConvert.DeserializeObject<List<CredentialsModel>>(JsonFile);
            if(JsonList==null)
            {
                Login.addNewCredentials(null, null, null);
            }
            var Date = new DateTime();
            var Time = "";
            while (!stoppingToken.IsCancellationRequested)
            {
                Date = DateTime.Now;
                Time = Date.ToString("HH:mm");
                service.updateTime(Time);
                await Task.Delay(60000);

            }
        }

    }
}
