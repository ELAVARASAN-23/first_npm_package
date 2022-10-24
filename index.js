#!/usr/bin/env node

const fs = require("fs");

const pathCreation = async (path) => {
  fs.access(path, (error) => {
    if (error) {
      fs.mkdir(path, (error) => {
        if (error) {
          console.log(error);
        } 
      });
    } else {
      console.log("Given Directory already exists !!");
    }
  });
  
};

const backend_folder_structure = async () => {
  const paths = ["app", "./app/controller", "./app/model", "./app/route"];

  for (let count = 0; count < paths.length; count++) {
    await pathCreation(paths[count]);
  }
  const sampleCode = `
    const http = require('http');
    http.createServer(function (req, res) {
        res.write('All the best for project'); 
        res.end(); 
      }).listen(8080,()=>{
        console.log("server is Running at 8080");
      }); 
    `;

  fs.appendFile("server.js", sampleCode, function (err) {
    if (err) throw err;
    console.log("Express Backend Structure Created")
  });
};

backend_folder_structure()