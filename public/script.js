$(document).ready(() => {
  // DOMContent is loaded, now we can start checking HTML Elements
  // If we dont "wait" for document to be ready, we cannot access HTML elements
  // for testing purposes, you can use a "debugger;" statement or also "console.log(element)"
  console.log("DOM is ready!");

  
  const form = $("#hft-shoutbox-form");
  const alertBox = $("#hft-shoutbox-alert");


  //$("#hft-shoutbox-form-input-name").on("keyup", event => toggleAlertBox(event, 3));
  //$("#hft-shoutbox-form-textarea").on("keyup", event => toggleAlertBox(event, 10));
 
  //New
  form.on("keyup", (event) => {
    const formData = new FormData(event.currentTarget);
    const usernameLength = formData.get("username").length;
    const messageLength = formData.get("message").length;
    var btn = document.getElementById("hft-shoutbox-form-submit");
    console.log(usernameLength, messageLength, usernameLength < 3 , messageLength < 10);
    if(usernameLength < 3 || messageLength < 10) {
      alertBox.removeClass("d-none");
      //document.getElementById("hft-shoutbox-form-submit").style.visibility="hidden";
      btn.style.display = "hidden";
    }
    else { 
      alertBox.addClass("d-none");
      //document.getElementById("hft-shoutbox-form-submit").style.visibility="visible";
      btn.style.display = "visible";
    }
  });
});

//Old
function toggleAlertBox (event, threshold){
  const elementValue = $(event.currentTarget).val()
  const alertBox = $("#hft-shoutbox-alert");

  if(elementValue.length < threshold) {
    alertBox.removeClass("d-none");
  } else{
    alertBox.addClass("d-none");
  }
}
