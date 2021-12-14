using Camera.Services.CameraModeChange;
using Camera.Services.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Camera.Services.CameraLogin;

namespace Kamera.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private readonly ILogger<WeatherForecastController> _logger;
        readonly IHostingEnvironment environment;
        private string _rootPath;
        private CameraModeChange cameraModeChanger;
        private CameraLoginService cameraLoginService;
        public WeatherForecastController(ILogger<WeatherForecastController> logger,IHostingEnvironment environment)
        {
            _logger = logger;
            this.environment = environment;
            _rootPath = environment.ContentRootPath;
            cameraModeChanger = new CameraModeChange(_rootPath);
            cameraModeChanger.fillVariables("user", "user", "http://192.168.1.25/");
            cameraLoginService = new CameraLoginService(_rootPath);
        }
        [HttpGet("manualModeChange")]
        public void manualModeChange()
        {
            cameraModeChanger.changeMode().GetAwaiter().GetResult();
        }
        [HttpGet("putIntoNightMode")]
        public void putIntoNightMode()
        {
            cameraModeChanger.putIntoNightMode().GetAwaiter().GetResult();
        }
        [HttpGet("putIntoDayMode")]
        public void putIntoDayMode()
        {
            cameraModeChanger.putIntoDayMode().GetAwaiter().GetResult();
        }
        [HttpGet("findCredentialsByIp")]
        public CredentialsModel findCredentialsByIp(string ip)
        {
            try
            {
                return cameraLoginService.findCredentials(ip);
            }
            catch (Exception ex)
            {
                _logger.LogError("", ex);
                throw new Exception("",ex);
            }
        }
    }
}
