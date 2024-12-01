- Typescripts are more and less javascript with only difference which typescript prioritize the data type .
- Reference type can not be assigned to another variable since both of the variable(original and assigned) will reference to the same address
  for example : [],{},()
- In typescript if we declare the data type of the variable ,its data type can't be changed further
- **tuple**

```ts
let arr: [string, number] = ["harsh", 22];
```

- Enumerations

  ```ts
  enum UserRoles {
    ADMIN = "admin",
    GUEST = "guest",
    SUPER_ADMIN = "super_admin",
  }
  UserRoles.ADMIN;
  ```

- When we declare the type ,we can not assign any kind of data type value to that variable.

- If we don't declare the data type ,we can assign anything and also update with any data type value (Any)

```ts
let z: number; //type declaring
z = 12;
let y; //Any
y = 12;
y = "str";
```

- Type Narrowing
  - unknown
  ```ts
  let a: unknown;
  a = 12;
  a = "harsh";
  if (typeof a === "string") a.toUpperCase();
  ```
- `unknown` obeys typescript wheres `any` mean typescripts off
- `void`:
  - like a return type