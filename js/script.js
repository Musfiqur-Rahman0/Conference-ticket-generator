fileUpload.addEventListener("change", (e) => {
  const file = e.target.files[0];
  const fileName = file.name;
  let extentsion = fileName.split(".").pop().toLowerCase();
  const fileSize = Number((file.size / 1024).toFixed(2)); // converted this in kb
  const maxFileSize = 500; // in kb

  if (file) {
    const allowedTypes = ["png", "jpg"];
    if (!allowedTypes.includes(extentsion)) {
      tooltipContainer.classList.add("text-red-500");
      tooltipText.classList.remove("text-gray-400");
      tooltipText.innerText = "Please select a png or jpg file to upload!";
      return;
    } else if (fileSize > maxFileSize) {
      tooltipContainer.classList.add("text-red-500");
      tooltipText.classList.remove("text-gray-400");
      tooltipText.innerText =
        "File too large. Please upload a photo under 500kb!";
    } else {
      tooltipContainer.classList.remove("text-red-500");
      tooltipText.classList.add("text-gray-400");
      imagePreview.src = URL.createObjectURL(file);
      fileTextInfo.style.display = "none";
      seletedFileBtnsCtn.classList.remove("hidden");
      seletedFileBtnsCtn.addEventListener("click", (e) => {
        const targetedElement = e.target;
        if (targetedElement === removeBtn) {
          imagePreview.src = "assets/images/icon-upload.svg";
          fileTextInfo.style.display = "block";
          seletedFileBtnsCtn.classList.add("hidden");
        } else if (targetedElement === changeBtn) {
          fileUpload.click();
        }
      });
    }
  }
});

function isValidEmail(email) {
  if (typeof email !== "string") {
    return "Invalid";
  }
  const speacialChar = ".-_+@";
  const emailExtension = ".com";

  for (let char of speacialChar) {
    if (email[0].includes(char)) {
      return false;
    }
  }

  if (
    email.includes("@") &&
    !email.includes(" ") &&
    email.slice(-4) === emailExtension
  ) {
    return true;
  }

  return false;
}

const tooltip = document.createElement("div");
tooltip.innerHTML = `
  <div  class="flex items-center gap-2 mt-2 ">
      <img src="assets/images/icon-info.svg" alt="" height="20">
     <p  class="text-xs text-red-500 ">Please enter a valid email address.
    </p>
  </div>
`;

gmailInput.addEventListener("change", (e) => {
  e.preventDefault();
  const userGmail = gmailInput.value;
  const gmail = isValidEmail(userGmail);
  if (!gmail) {
    errorMassage.classList.remove("hidden");
    errorMassage.appendChild(tooltip);
  } else {
    errorMassage.remove();
  }
});

generateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const userData = {};
  const keys = ["img", "name", "email", "github"];
  inputs.forEach((input, index) => {
    if (keys[index] === "img") {
      const file = input.files[0];
      const url = URL.createObjectURL(file);
      userData[keys[index]] = url;
    } else {
      userData[keys[index]] = input.value;
    }
  });
  formContainer.style.display = "none";
  console.log(userData);
});
