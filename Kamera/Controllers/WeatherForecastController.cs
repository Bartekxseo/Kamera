using Camera.Services.CameraModeChange;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;

namespace Kamera.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;
        readonly IHostingEnvironment environment;
        private string _rootPath;
        private CameraModeChange cameraModeChanger;
        public WeatherForecastController(ILogger<WeatherForecastController> logger,IHostingEnvironment environment)
        {
            _logger = logger;
            this.environment = environment;
            _rootPath = environment.ContentRootPath;
            cameraModeChanger = new CameraModeChange(_rootPath);
            cameraModeChanger.fillVariables("user", "user", "http://192.168.1.25/");
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
        [HttpGet("Get")] 
        public IEnumerable<WeatherForecast> Get()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            })
            .ToArray();
        }
    }
}
