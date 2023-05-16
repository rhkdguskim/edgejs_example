# NodeJS에서 C# DLL 호출하기.
- 개발환경 : .NET Framework 4.7.2

### NodeJS
``` javascript
AddNumber({ num1: 3, num2: 4 }, (err, result) => {
    if(err) throw err;
    console.log(result);  // Should output: 7
});

Log(null, (error, result) => {
    if (error) throw error;
    console.log(result);  // Should output: Hello from C# method!
});

PrintString({str:"Hi"}, (error, result) => {
    if (error) throw error;
    console.log(result);  // Should output: Hello from C# method!
});

getPerson(null, (error, result) => {
    if (error) throw error;
    console.log(result);
})
```

### C#
``` csharp
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
    }

    public class Startup
    {
        public async Task<object> Invoke(dynamic input)
        {
            Person person = new Person();
            return person;
        }
    }
```

### Output
```
7
Hello from C# method!
I am C# Hi
{
  Result: null,
  Id: 1,
  Exception: null,
  Status: 'RanToCompletion',
  IsCanceled: false,
  IsCompleted: true,
  CreationOptions: 'None',
  AsyncState: null,
  IsFaulted: false
}
{
  anInteger: 1,
  aNumber: 3.1415,
  aString: 'chaged',
  aBoolean: true,
  aBuffer: <Buffer 00 00 00 00 00 00 00 00 00 00>,
  anArray: [ 1, 'foo' ],
  anObject: { a: 'foo', b: 12 }
}
```
