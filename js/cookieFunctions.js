//------------------------------ S E T   C O O K I E --------------------------------------//

/* 
	The setCookie() function takes in the values of cname, cvalue, and exdays. 
	When ran, the setCookie() function first creates a new date variable, which sets the current time plus the time of the exdays variables, creating the Expiration Date of the cookie.
	The expiration date of the cookie is put into the proper time format.
	The cookie is created using the gathered cname, cvalue, and expiration date, and adds the default path of the cookie.
*/

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

//------------------------------ S E T   S E C U R E   C O O K I E --------------------------------------//
/* 
	The setSecureCookie() function takes in the values of cname, cvalue, and exdays. 
	When ran, the setSecureCookie() function first creates a new date variable, which sets the current time plus the time of the exdays variables, creating the Expiration Date of the cookie.
	The expiration date of the cookie is put into the proper time format.
	The cookie is created using the gathered cname, cvalue, and expiration date, and adds the default path of the cookie and a secure flag so the cookie will only be created if the webpage is secure.
*/

function setSecureCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/" + ";secure";
}

//------------------------------ G E T   C O O K I E --------------------------------------//
/*
	The getCookie() function takes in a value for cname.
	When ran, the getCookie function makes a variable of the cookie name using the cname value plus the = sign.
	The uniform resource identifier(uri) of a cookie is decoded.
	The decoded cookie string is split at the ; symbol.
	A loop is ran for the length of the decoded and split cookie string, and the substring of the cookie name's value is returned.
*/

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}