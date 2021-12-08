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
        private string rootPath;
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;
        readonly IHostingEnvironment environment;
        public WeatherForecastController(ILogger<WeatherForecastController> logger,IHostingEnvironment environment)
        {
            _logger = logger;
            this.environment = environment;
        }
        [HttpGet("modeChange")]
        public void modeChange()
        {
            rootPath = environment.ContentRootPath;
            var modechange = new CameraModeChange(rootPath,"user","user", "http://192.168.1.25/");
            modechange.changeMode().GetAwaiter().GetResult();
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
