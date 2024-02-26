## Variables and Data Types:

Variables in JavaScript are containers used to store data values. JavaScript offers three ways to declare variables: `var`, `let`, and `const`.

- `var`:

  - `var` was traditionally used for variable declaration before ES6.
  - Variables declared with `var` have function scope, meaning they are accessible within the function in which they are declared.
  - However, variables declared with `var` are not block-scoped, which can lead to unexpected behavior in some cases.

- `let`:

  - Introduced in ES6, `let` allows for block-scoped variables.
  - Variables declared with `let` are limited in scope to the block, statement, or expression they are declared in.
  - Unlike `var`, `let` variables can be reassigned values.

- `const`:
  - Also introduced in ES6, `const` declares constants that cannot be reassigned.
  - Like `let`, `const` is block-scoped.
  - When using `const` with objects or arrays, the variable itself cannot be reassigned, but the properties or elements of the object or array can be modified.

JavaScript has various data types, categorized as primitive and non-primitive types:

### Primitive Types:

1. `number`: Represents numeric data. It can be an integer or floating-point number.
2. `string`: Represents textual data enclosed within single (' ') or double (" ") quotes.
3. `boolean`: Represents a logical entity and can have two values: `true` or `false`.
4. `null`: Represents an intentional absence of any object value.
5. `undefined`: Represents a variable that has been declared but not assigned a value.
6. `symbol`: Represents a unique identifier, introduced in ES6.

### Non-Primitive Types:

1. `object`: Represents a collection of key-value pairs. Objects can be created using object literals `{}`, constructor functions, or with the `new Object()` syntax.
2. `function`: Represents a reusable block of code. In JavaScript, functions are first-class citizens, meaning they can be assigned to variables, passed as arguments, and returned from other functions.

JavaScript is a dynamically typed language, meaning you don't need to specify the data type of a variable explicitly. Instead, the type of a variable is determined dynamically at runtime based on the value assigned to it.
