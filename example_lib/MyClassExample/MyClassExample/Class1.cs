using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyClassExample
{
    public class MyClass
    {
        public async Task<object> AddNumbers(dynamic input)
        {
            int num1 = (int)input.num1;
            int num2 = (int)input.num2;
            int result = num1 + num2;

            return result;
        }

        public async Task<object> Log(dynamic input)
        {
            // Perform some action
            return "Hello from C# method!";
        }

        public async Task<object> PrintString(dynamic input)
        {
            string str = (string)input.str;
            System.Console.WriteLine("I am C# " + str);
            return Task.FromResult<object>(null);
        }
    }

    public class Person
    {
        public int anInteger = 1;
        public double aNumber = 3.1415;
        public string aString = "foo";
        public bool aBoolean = true;
        public byte[] aBuffer = new byte[10];
        public object[] anArray = new object[] { 1, "foo" };
        public object anObject = new { a = "foo", b = 12 };

        public void ChangeString()
        {
            aString = "chaged";
        }
    }

    public class Startup
    {
        public async Task<object> Invoke(dynamic input)
        {
            Person person = new Person();
            person.ChangeString();
            return person;
        }
    }
}
