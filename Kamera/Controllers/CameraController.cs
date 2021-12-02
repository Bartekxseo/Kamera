using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Kamera.Controllers
{
    //kontroler do obsługi całości funkcjonalności kamerowych

    public class CameraController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
