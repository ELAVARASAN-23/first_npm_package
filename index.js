const fs = require("fs");

const path = "./app/model";

const pathCreation = async(path)=>{
    
fs.access(path, (error) => {

    
    if (error) {
        fs.mkdir(path, (error) => {
        if (error) {
            console.log(error);
        } else {
            console.log("New Directory created successfully !!");
        }
        });
    } else {
        console.log("Given Directory already exists !!");
    }
    });
}

const backend_folder_structure = async ()=>{
    const paths = ['app','./app/controller','./app/model','./app/route'];

    for (let count = 0; count < paths.length; count++) {
       await pathCreation(paths[count]);
    }
    const sampleCode = `
    const http = require('http');
    http.createServer(function (req, res) {
        res.write('All the best for project'); 
        res.end(); 
      }).listen(8080); 
    `;
    
    fs.appendFile('server.js', sampleCode, function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
    });
    
}
backend_folder_structure()
