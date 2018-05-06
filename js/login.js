var attempt = 5;
var url = "beranda.html#";
function validate() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	if (username == "Gambino" && password == "fresh") {
		alert ("Login benar! Selamat!");
		window.location = url;
		return false;
	}
	else {
		attempt --;
		alert ("Kesempatan salah Anda tinggal " +attempt+ " kali. Gunakan dengan bijak.")
		if (attempt == 0){
			document.getElementById("username").disabled = true;
			document.getElementById("password").disabled = true;
			document.getElementById("submit").disabled = true;
			return false;
		}
	}
}