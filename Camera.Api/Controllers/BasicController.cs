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

namespace Camera.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BasicController : ControllerBase
    {
        private readonly ILogger<BasicController> _logger;
        readonly IHostingEnvironment environment;
        private string _rootPath;
        private CameraModeChange cameraModeChanger;
        private CameraLoginService cameraLoginService;
        public BasicController(ILogger<BasicController> logger, IHostingEnvironment environment)
        {
            _logger = logger;
            this.environment = environment;
            _rootPath = environment.ContentRootPath;
            cameraModeChanger = new CameraModeChange(_rootPath);
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
                var credentials = cameraLoginService.findCredentials(ip);
                if(credentials.password !="" && credentials.username != "")
                {
                    cameraModeChanger.fillVariables(credentials.username, credentials.password, ip);
                }
                return credentials;
            }
            catch (Exception ex)
            {
                _logger.LogError("", ex);
                throw new Exception("", ex);
            }
        }
        [HttpPut("addNewCredentials")]
        public CredentialsModel addNewCredentials(string ip,string user,string password)
        {
            try
            {
                cameraModeChanger.fillVariables(user, password, ip);
                return cameraLoginService.addNewCredentials(ip, user, password);
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
