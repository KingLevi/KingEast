function check() {
	if (formregister.username.value !="wangdong") {
		document.getElementById("lname").innerHTML = "账号是你名字~▽~";
		return false;
	} else if (formregister.password.value != "0619") {
		document.getElementById("lname").innerHTML = "";
		document.getElementById("lpwd").innerHTML  = "密码是你生日(~▽~)";  
		return false;
	} else {
		document.getElementById("lpwd").innerHTML  = "";
		document.getElementById("login").href="succ.html";
		return true;
	}
}