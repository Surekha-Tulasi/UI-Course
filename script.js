function loan() {
  let name = document.getElementById("name").value;
  let cibil = document.getElementById("cibil").value;
  let salary = document.getElementById("salary").value;

  if (cibil > 700 && salary > 10000) {
    alert(name + "You are elgible for 2l");
  } else if (cibil > 800 && salary > 20000) {
    alert(name + "You are elgible for 3l");
  } else if (cibil > 900 && salary > 30000) {
    alert(name + "You are elgible for 5l");
  } else {
    alert("Better Luck Next Time");
  }
}
