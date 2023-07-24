# node-mixer

## Introduction

`node-mixer` is a Node.js library that allows you to run multiple files at once. It provides a simple way to require and execute multiple files in a single call.

## Installation

You can install the library via npm:

```bash
npm install node-mixer
```

## Usage

1. Create your Node.js project and install the `node-mixer` library.

2. Import the `node-mixer` library into your project:

```js
const mixer = require("node-mixer");
```

3. Use the `mixer` function to run multiple files at once:

```js
mixer("./file1.js", "./file2.js", "./file3.js", /* add as many files as you want */);
```

The `mixer` function will require each file specified in the arguments, executing their code in the order they are listed.

## Example

Let's say you have three files, `file1.js`, `file2.js`, and `file3.js`, with the following content:

**file1.js**
```js
console.log("Hello from file1.js");
```

**file2.js**
```js
console.log("Hello from file2.js");
```

**file3.js**
```js
console.log("Hello from file3.js");
```

In your main Node.js file, you can use `node-mixer` to execute all these files together:

```js
const mixer = require("node-mixer");

mixer("./file1.js", "./file2.js", "./file3.js");
```

When you run your main file, you will see the following output:

```
Hello from file1.js
Hello from file2.js
Hello from file3.js
```

## License

This project is licensed under the [MIT License](LICENSE).