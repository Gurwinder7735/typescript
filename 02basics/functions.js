"use strict";
exports.__esModule = true;
function addTwo(num) {
    // num.toUpperCase()
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isSubscribed) {
}
function loginUser(name, email, deviceToken) {
    if (deviceToken === void 0) { deviceToken = ""; }
}
addTwo(3);
getUpper("abc");
signUpUser("Guri", "gurwinder7735@gmail.com", false);
loginUser("Guri", "gurwinder7735@gmail.com");
