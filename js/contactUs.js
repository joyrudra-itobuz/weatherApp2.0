// import * as dataFxn from "../modules/storeData.mjs";

// const dataFxn = require("../modules/storeData.js");

const submitBtn = document.querySelector(".contact-submit-btn");
const userName = document.querySelector(".user-name");
const userEmail = document.querySelector(".user-email");
const usermessage = document.querySelector(".user-message");

submitBtn.onclick = () => {
  let data = `Name : ${userName.value} `;
  data += `Email : ${userEmail.value} `;
  data += `Message : ${usermessage.value}`;
  console.log(data);
  dataFxn.writeData(data);
};
