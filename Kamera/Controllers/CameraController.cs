using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Camera.Services.CameraLogin;

namespace Kamera.Controllers
{
    //kontroler do obsługi całości funkcjonalności kamerowych
    public class CameraController : Controller
    {
        readonly ICameraLoginService cameraLoginService;
        public CameraController(ICameraLoginService cameraLoginService)
        {
            this.cameraLoginService = cameraLoginService;
        }
        public IActionResult Index()
        {
            
            return View();
        }
    }
}
