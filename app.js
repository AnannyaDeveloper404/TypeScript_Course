"use strict";
//primitive type : number , string , boolean
var aa = 12;
//array reference typw
let b = [1, 2, 3];
let c = b; // b and c referencing same address
//Enums
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "admin";
    UserRoles["GUEST"] = "guest";
    UserRoles["SUPER_ADMIN"] = "super_admin";
})(UserRoles || (UserRoles = {})); //access ENums  =>{UseRoles.ADMIN}
//tuples
let arr = ["harsh", 22];
//Any ,Unknown,Void ,Null, Undefined,Never
let z; //type declaring
z = 12;
let y; //Any
// unknown
let a;
a = 12;
a = "harsh";
if (typeof a === "string")
    a.toUpperCase();
