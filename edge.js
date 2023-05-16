const edge = require('edge-js');

const AddNumber = edge.func({
    assemblyFile: './example_lib/MyClassExample/MyClassExample/bin/x64/Debug/MyClassExample.dll',
    typeName: 'MyClassExample.MyClass',
    methodName: 'AddNumbers'
});

const Log = edge.func({
    assemblyFile: './example_lib/MyClassExample/MyClassExample/bin/x64/Debug/MyClassExample.dll',
    typeName: 'MyClassExample.MyClass',
    methodName: 'Log'
});

const PrintString = edge.func({
    assemblyFile: './example_lib/MyClassExample/MyClassExample/bin/x64/Debug/MyClassExample.dll',
    typeName: 'MyClassExample.MyClass',
    methodName: 'PrintString'
});

const getPerson = edge.func({
    assemblyFile: './example_lib/MyClassExample/MyClassExample/bin/x64/Debug/MyClassExample.dll',
    typeName: 'MyClassExample.Startup',
    methodName: 'Invoke'
});

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