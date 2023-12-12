const fs = require("fs")

function ReadFile()
{
    fs.readFile("3-read-from-file.md","utf-8",(err,data)=>
    {
        if(!err)
        {
            console.log("Data found: "+data);
        }
        else{
            console.log("Error: "+err);
        }
        
    });
}
function GenerateSequence()
{
    for(let i=4;i<=40000000;i++)
    {
        console.log("Sequence "+i);
    }
}

console.log("Sequence 1 ");
console.log("Sequence 2");
ReadFile();
GenerateSequence();

