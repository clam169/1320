/*
 * Project: COMP1320 Milestone 1
 * File Name: main.js
 * Description: 
 * 
 * Created Date: November 11, 2020
 * Author: Jo Jo Lam
 * 
 */

const { unzip } = require("unzipper");

const IOhandler = require("./IOhandler"),
  zipFilePath = `${__dirname}/myfile.zip`,
  pathUnzipped = `${__dirname}/unzipped`,
  pathProcessed = `${__dirname}/grayscaled`;

IOhandler.unzip(zipFilePath, pathUnzipped)
  .then((pathOut) => IOhandler.readDir(pathOut))
  .then((pngList) => IOhandler.grayScale(pngList, pathProcessed))
  .then((done) => console.log(done))
  .catch((msg) => console.log(msg))
