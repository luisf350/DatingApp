using DatingApp.API;
using DatingApp.API.Controllers;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DatingApp.Test.Controllers
{
    [TestClass]
    public class WeatherForecastControllerTest
    {
        [TestMethod]
        public void GetTest()
        {
            var controller = new WeatherForecastController(null);

            var result = controller.Get() as WeatherForecast[];
            Assert.AreEqual(5, result.Length);
        }
    }
}
