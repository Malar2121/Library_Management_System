function validateFormm() {
    var x = document.forms["myForm"]["phone"].value;
    if (x == "") {
      alert("book name must be filled out");
      return false;
    }
}