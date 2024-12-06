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
let coordinates: [number, number, number] = [10, 20, 30];
//Any ,Unknown,Void ,Null, Undefined,Never
let z: number; //type declaring
z = 12;
let y; //Any

// unknown
let a: unknown;
a = 12;
a = "harsh";
if (typeof a === "string") a.toUpperCase();

// Void
function abcd(): void {
  console.log("hey");
}

// Null
let d = null;
let dd: null | string;
dd = null;
dd = "hello";
// dd=11; error

//Undefined
let aaa: undefined;

//Never
// function def(): never {
//   while (true) {}
// }
// def();
// console.log("hey");

//type inference
let e = 12; //typescript can infer that e is number
//Type Annotation
let f: number | boolean | string; //Declaring the type of the variable in advance

// Interface
interface User {
  name: string;
  email: string;
  password: string;
  gender?: string; //gender is not required type(Optional)
}
function Employed(obj: User) {}
//extend interface
interface Admin extends User {
  admin: boolean;
}

//Type aliases
//It used to create new type of variable with the help of conditional operator
type value = string | number | null;
let v: value;

function fgh(obj: value) {}

//Intersection
type User1 = {
  name: string;
  email: string;
};
type Admin1 = User1 & {
  getDetails(user: string): void;
};
//Admin1 will possess User1's property along with getDetails function
//  difference between interface ,type- * type keep merging if it is declared more than once .* Interface defines shape of object

//class
class Bottle {
  radius = 120;
  price = 100;
  color = "white";
}
let b1 = new Bottle(); //Object created
//constructor
class BottleMakerOld {
  public name;
  public price;
  public isNew;
  constructor(name: string, price: number, isNew: boolean = true) {
    this.name = name;
    this.price = price;
    this.isNew = isNew;
  }
}
//constructor shorthands
class BottleMaker {
  constructor(
    public name: string,
    public price: number,
    public isNew: boolean = true
  ) {}
}
let b3 = new BottleMaker("glass bottle", 120);
//Arrays
let numArray: number[] = [1, 2, 34, 4];
let charArray: string[] = ["a", "b"];

// charArray.forEach((val) => val.length);
//after applying the '.', string-related methods will pop-up
// Type Narrowing
function print(id: string | number) {
  if (typeof id === "string") {
    console.log("id is a string");
  } else {
    console.log("number");
  }
}
// optional field
interface optional {
  name: string;
  ph_no?: number;
}
let opt: optional = {
  name: "Anna",
};
// Function
