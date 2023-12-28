let day = "Monday";

switch (day) {
  case "Monday":
    console.log("It's the start of the week");
    break;
  case "Tuesday":
    console.log("It's the second day of the week");
    break;
  case "Wednesday":
    console.log("It's the middle of the week");
    break;
  case "Thursday":
    console.log("It's almost the end of the week");
    break;
  case "Friday":
    console.log("It's the end of the week");
    break;
  default://if any one cant select above one then default msg should display
    console.log("It's the weekend");
}