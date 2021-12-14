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
        [HttpGet("updateTime")]
        public void updateTime(string time)
        {
            try
            {
                time = time.Split(' ').First();
                time = time.Remove(time.Length - 3,3);
                cameraModeChanger.updateTime(time).GetAwaiter().GetResult();
            }
            catch (Exception ex)
            {
                _logger.LogError("", ex);
                throw new Exception("", ex);
            }
        }
        [HttpGet("manualModeChange")]
        public void manualModeChange(int id)
        {
            cameraModeChanger.changeMode(id).GetAwaiter().GetResult();
        }
        [HttpGet("putIntoNightMode")]
        public void putIntoNightMode(int id)
        {
            cameraModeChanger.putIntoNightMode(id).GetAwaiter().GetResult();
        }
        [HttpGet("putIntoDayMode")]
        public void putIntoDayMode(int id)
        {
            cameraModeChanger.putIntoDayMode(id).GetAwaiter().GetResult();
        }
        [HttpGet("getCurrentMode")]
        public bool getCurrentMode(int id)
        {
            try
            {
                return cameraModeChanger.getMode(id).GetAwaiter().GetResult();
            }
            catch (Exception ex)
            {
                _logger.LogError("", ex);
                throw new Exception("", ex);
            }
        }
        [HttpPost("findCredentialsByIp")]
        public CredentialsModel findCredentialsByIp(string ip)
        {
            try
            {
                return cameraLoginService.findCredentials(ip);
            }
            catch (Exception ex)
            {
                _logger.LogError("", ex);
                throw new Exception("", ex);
            }
        }
        [HttpPost("addNewCredentials")]
        public CredentialsModel addNewCredentials(CredentialsModel credentials)
        {
            try
            {
                return cameraLoginService.addNewCredentials(credentials.ipAdress, credentials.username, credentials.password);
            }
            catch (Exception)
            {

                throw;
            }
        }
        [HttpPost("findCredentialsById")]
        public CredentialsModel findCredentialsById(int id)
        {
            try
            {
                return cameraLoginService.getCredentialsById(id);
            }
            catch (Exception ex)
            {
                _logger.LogError("", ex);
                throw new Exception("", ex);
            }
        }
        [HttpPost("updateHours")]
        public void updateHours(CredentialsModel credentials)
        {
            try
            {
                cameraLoginService.putModeChangeHours(credentials);
            }
            catch (Exception ex)
            {
                _logger.LogError("", ex);
                throw new Exception("", ex);
            }
        }
        [HttpPost("updateCredentials")]
        public void updateCredentials(CredentialsModel credentials)
        {
            try
            {
                cameraLoginService.updateCredentials(credentials.id, credentials.username, credentials.password);
            }
            catch (Exception ex)
            {
                _logger.LogError("", ex);
                throw new Exception("", ex);
            }
        }
        [HttpDelete("deleteCredentials")]
        public void deleteCredentials(string ip)
        {
            try
            {
                cameraLoginService.deleteCredentials(ip);
            }
            catch (Exception ex)
            {
                _logger.LogError("", ex);
                throw new Exception("", ex);
            }
        }
    }
}
