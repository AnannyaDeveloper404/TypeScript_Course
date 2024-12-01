//primitive type : number , string , boolean
var aa = 12;
//array reference typw
let b = [1, 2, 3];
let c = b; // b and c referencing same address
//Enums
enum UserRoles {
  ADMIN = "admin",
  GUEST = "guest",
  SUPER_ADMIN = "super_admin",
} //access ENums  =>{UseRoles.ADMIN}
//tuples
let arr: [string, number] = ["harsh", 22];
//Any ,Unknown,Void ,Null, Undefined,Never
let z: number; //type declaring
z = 12;
let y; //Any
// unknown

let a : unknown;
a = 12;
a = "harsh";
if (typeof a === "string") a.toUpperCase();
