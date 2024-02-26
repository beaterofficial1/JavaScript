# JavaScript Notes

## Introduction

JavaScript is a popular programming language primarily used for creating interactive and dynamic content on web pages. It's a versatile language that can be run in a browser as well as on the server-side with the help of platforms like Node.js.

# JavaScript Operators

## Arithmetic Operators

Arithmetic operators are used to perform arithmetic operations on numbers.

- **Addition (+)**: Adds two operands.
- **Subtraction (-)**: Subtracts the right operand from the left operand.
- **Multiplication (\*)**: Multiplies two operands.
- **Division (/)**: Divides the left operand by the right operand.
- **Modulus (%)**: Returns the division remainder.

## Comparison Operators

Comparison operators are used to compare two values and return a Boolean result.

- **Equal (==)**: Returns true if the operands are equal.
- **Not Equal (!=)**: Returns true if the operands are not equal.
- **Strict Equal (===)**: Returns true if the operands are equal and of the same type.
- **Strict Not Equal (!==)**: Returns true if the operands are not equal and/or not of the same type.
- **Greater Than (>)**: Returns true if the left operand is greater than the right operand.
- **Less Than (<)**: Returns true if the left operand is less than the right operand.
- **Greater Than or Equal To (>=)**: Returns true if the left operand is greater than or equal to the right operand.
- **Less Than or Equal To (<=)**: Returns true if the left operand is less than or equal to the right operand.

## Logical Operators

Logical operators are used to combine conditional statements.

- **Logical AND (&&)**: Returns true if both operands are true.
- **Logical OR (||)**: Returns true if at least one of the operands is true.
- **Logical NOT (!)**: Returns the opposite of the operand's Boolean value.

## Assignment Operators

Assignment operators are used to assign values to JavaScript variables.

- **Assignment (=)**: Assigns the value of the right operand to the left operand.
- **Addition Assignment (+=)**: Adds the value of the right operand to the left operand and assigns the result to the left operand.
- **Subtraction Assignment (-=)**: Subtracts the value of the right operand from the left operand and assigns the result to the left operand.
- **Multiplication Assignment (\*=)**: Multiplies the value of the right operand by the left operand and assigns the result to the left operand.
- **Division Assignment (/=)**: Divides the value of the left operand by the right operand and assigns the result to the left operand.
- **Modulus Assignment (%=)**: Divides the value of the left operand by the right operand and assigns the remainder to the left operand.

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

## Control Flow:

JavaScript supports various control flow statements for decision-making and looping:

### Conditional Statements:

1. `if` statement: Executes a block of code if a specified condition is true.
2. `else if` statement: Allows you to specify a new condition if the first condition is false.
3. `else` statement: Executes a block of code if none of the specified conditions are true.
4. `switch` statement: Evaluates an expression, matching the expression's value to a case clause, and executes the associated statements.

```javascript
const age = 20;
const status = age >= 18 ? "Adult" : "Minor";

console.log(status); // Output: 'Adult'

// Falsy values
if (false || 0 || -0 || 0n || "" || null || undefined || NaN) {
  console.log("This will not be printed.");
}

// Truthy values
if (true || 1 || -1 || "string" || "0" || [] || {} || function () {}) {
  console.log("This will be printed.");
}
```

### Looping Statements:

1. `for` loop: Executes a block of code a specified number of times.
2. `while` loop: Executes a block of code while a specified condition is true.
3. `do...while` loop: Similar to a `while` loop, but the block of code is executed at least once before the condition is tested.
4. `for...in` loop: Iterates over the enumerable properties of an object.
5. `for...of` loop: Iterates over iterable objects like arrays, strings, maps, sets, etc.

### Jump Statements:

1. `break` statement: Terminates the current loop, switch, or label statement and transfers program control to the statement following the terminated statement.
2. `continue` statement: Skips the current iteration of a loop and continues with the next iteration.
3. `return` statement: Exits from the current function and returns a value.

## Functions:

Functions in JavaScript are blocks of code that can be defined and then called for execution. They offer code reusability and modularization. Functions can be declared using the `function` keyword or as arrow functions introduced in ES6.

### Function Declaration:

```javascript
function name(parameters) {
  // function body
}

//Arrow Funtion
const functionName = (parameters) => {
  // function body
};
```

### Funtion Execution

```javascript
name(argument);
```

# DOM Note

## Introduction

In web development, the DOM (Document Object Model) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects, allowing programming languages, such as JavaScript, to manipulate the structure and style of the document dynamically.

## Key Concepts

### Nodes

- **Element Nodes:** Represent HTML elements.
- **Text Nodes:** Contain the text within elements.
- **Attribute Nodes:** Represent attributes of elements.
- **Document Nodes:** Represent the entire document.

### Tree Structure

The DOM represents the document as a tree structure with nodes. Each node can have children, siblings, and a parent, forming a hierarchical structure.

## Manipulating the DOM

JavaScript provides methods to manipulate the DOM dynamically. Some common operations include:

- **Accessing Elements:** Selecting elements by ID, class, tag name, etc.
- **Modifying Content:** Changing text, attributes, or HTML content of elements.
- **Manipulating Styles:** Changing CSS styles of elements.
- **Adding or Removing Elements:** Dynamically adding or removing elements from the document.

## Conclusion

Understanding the DOM is crucial for web developers as it enables dynamic and interactive web pages. By manipulating the DOM, developers can create rich user experiences and responsive web applications.
