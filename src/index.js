import "./styles.css";

function lisaa() {
  var table = document.getElementById("mytable");
  var row = table.insertRow();
  var user = row.insertCell();
  var email = row.insertCell();
  var address = row.insertCell();
  var admin = row.insertCell();

  user.insertCell = document.getElementById("input-username").value;
  email.insertCell = document.getElementById("input-email").value;
  address.insertCell = document.getElementById("input-address").value;
  admin.insertCell = document.getElementById("input-admin").value;
}

var lomakeNappi = document.getElementById("lomake");

lomakeNappi.addEventListener("click", function () {
  lisaa();
});
