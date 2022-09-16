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

function tyhjenna() {
  var otsikko = 1;
  var table = document.getElementById("mytable");
  var maara = table.rows.length;

  for (var i = otsikko; i < maara; i++) {
    table.deleteRow(maara);
  }
}

var lomakeNappi = document.getElementById("lomake");
var tyhjennysNappi = document.getElementById("tyhjennysnappi");

lomakeNappi.addEventListener("click", function () {
  lisaa();
});

tyhjennysNappi.addEventListener("click", function () {
  tyhjenna();
});
