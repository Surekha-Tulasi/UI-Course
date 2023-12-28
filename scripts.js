function va() {
  let username = document.getElementById("username").value;
  userStatus = false;
  let alphaExp = /^[a-z]+$/;

  let mobile = document.getElementById("mobile").value;
  let mobStatus = false;
  let mobExp = /^[0-9]+$/;

  let mailExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let mail = document.getElementById("mail").value;
  let mailStatus = false;



  //username
  if (username === "") {
    document.getElementById("nameNote").innerHTML = "Please Enter Username";
    userStatus = false;
  } else {
    if (username.match(alphaExp)) {
      document.getElementById("nameNote").innerHTML = "";
      userStatus = true;
    } else {
      document.getElementById("nameNote").innerHTML = "Please Enter Alphabets";
      userStatus = false;
    }
  }


  //mobile
  if (mobile === "") {
    document.getElementById("mobNote").innerHTML = "Please Enter MobileNumber";
    mobStatus = false;
  } else {
    if (mobile.match(mobExp)) {
      if (mobile.length === 10) {
        document.getElementById("mobNote").innerHTML = "";
        mobStatus = true;
      } else {
        document.getElementById("mobNote").innerHTML = "Please Enter 10 digits";
        mobStatus = false;
      }
    } else {
      document.getElementById("mobNote").innerHTML = "Please Enter  digits";
      mobStatus = false;
    }
  }


  
  //mail
  if (mail === "") {
    document.getElementById("mailNote").innerHTML = "Please enter Mail";
    mailStatus = false;
  } else {
    if (mail.match(mailExp)) {
      document.getElementById("mailNote").innerHTML = "";
      mailStatus = true;
    } else {
      document.getElementById("mailNote").innerHTML =
        "Please give correct Format";
    }
  }
  
  if (userStatus === true && mobStatus === true && mailStatus === true) {
    return true;
  } else {
    return false;
  }
}
