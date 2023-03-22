// import * as fs from "fs/promises";
const fs = require("fs/promises");

const currentPath =
  "/Users/it012305/Documents/HTML CSS and JavaScript January/March/20.03.23 -24.03.23/21.03.23/weatherApp2/data/contactData.csv";

const writeData = async (data) => {
  await fs.writeFile(currentPath, data, (err) => {
    return err;
  });
};

module.exports(writeData);
