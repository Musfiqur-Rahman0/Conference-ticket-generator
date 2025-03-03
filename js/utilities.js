const generateBtn = document.querySelector("#generateBtn");
// console.log(generateBtn);
const inputs = document.querySelectorAll(".input");
// console.log(inputs);
const tooltipContainer = document.getElementById("tooltip");
const tooltipText = document.getElementById("tooltip-text");
const gmailInput = document.getElementById("gmail-input");
const fileUpload = document.getElementById("file-upload");

const errorMassage = document.getElementById("error-massage");
const imagePreview = document.getElementById("image-preview");
const fileTextInfo = document.getElementById("upload-file-info");
const fileInputContainer = document.getElementById("file-input-container");
const seletedFileBtnsCtn = document.getElementById(
  "selected-file-buttons-container"
);
const removeBtn = document.getElementById("remove-image-btn");
const changeBtn = document.getElementById("change-image-btn");
const formContainer = document.getElementById("form-container");
const userName = document.getElementById("user-name");
const userEmail = document.getElementById("user-gmail");
const userAvatar = document.getElementById("user-image");
const userGithub = document.getElementById("github ");
const ticketId = document.getElementById("ticket-no");
const currentDate = document.getElementById("date");
const ticketContainer = document.getElementById("ticket-container");
const titleBox = document.getElementById("title-box");
const userName2 = document.getElementById("user-name-2");

function addClass(element, className) {
  element.classList.add(className);
}
function removeClass(element, className) {
  element.classList.remove(className);
}
