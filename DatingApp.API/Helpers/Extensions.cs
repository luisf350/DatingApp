using System;

namespace DatingApp.API.Helpers
{
    public static class Extensions
    {
        public static int CalculateAge (this DateTime dateOfBirth)
        {
            var age = DateTime.Today.Year - dateOfBirth.Year;
            if (dateOfBirth.AddYears(age).DayOfYear > DateTime.Today.DayOfYear)
            {
                age--;
            }
            return age;
        }
    }
}