// Read on arrow function with and without parameters.


//Arrow functions in JavaScript provide a compact way to write functions, with specific syntax rules based on the number of parameters they accept
// 1. Arrow Functions Without Parameters

const sayHi = () => "Hello!"; 

//2. Arrow Functions With Parameters
        // Single Parameter: If there is exactly one parameter, the parentheses are optional.

const double = x => x * 2;

        // Multiple Parameters: If there are two or more parameters, parentheses are required
const add = (a, b) => a + b;

// research on modules in Javascript.

// JavaScript modules allow you to break up code into separate, reusable files, helping manage complexity as applications grow
// There are two primary systems used today:
        //ES Modules (ESM): The modern, official standard for both browsers and Node.js. It uses import and export statements and supports asynchronous loading.
        //CommonJS (CJS): The legacy system used primarily in Node.js. it uses require() and module.exports and is strictly synchronous.

//Key ESM Features & Syntax

//Named Exports: Use these to export multiple values. They must be imported using their exact names inside curly braces.

// math.js
export const PI = 3.14;
export function add(a, b) { return a + b; }

// main.js
import { add, PI } from './math.js';

// Default Exports: Each file can have exactly one default export, which can be imported without curly braces using any name you choose.

// logger.js
export default function log(msg) { console.log(msg); }

// main.js
import myLogger from './logger.js';

//Renaming (Aliasing): Use the as keyword to avoid naming conflicts.
import { add as sum } from './math.js';

//Dynamic Import: You can load modules on demand using import() which returns a promise.
if (condition) {
  const module = await import('./extra-feature.js');
}
