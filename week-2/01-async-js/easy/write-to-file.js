const fs = require("fs");

const data = "Writing Some data to file\n";

fs.writeFile("4-write-to-file.md",data,{flag:'a+'},(err)=>{

    if(err)
    {
        throw err;
    }
    else
    {
        console.log("Files have been Updated");
    }

});