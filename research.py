 # What is the difference between a dictionary in python, an object in javascript and a json data when dealing with APIs
#1. JSON (JavaScript Object Notation)

   # Role: A language-independent data interchange format (essentially a string) used to send data over a network.
  #  Structure: Very strict. Keys must be double-quoted strings (e.g., "name": "Alice"), and values can only be basic types like strings, numbers, booleans (true/false), arrays, or null.
  #  Limitation: It cannot store logic, functions, or complex language-specific objects. 

#2. Python Dictionary

    #Role: A native, in-memory data structure (hash map) used within Python programs.
   # Structure: More flexible than JSON. Keys can be any hashable object (integers, tuples, etc.), and values can be any Python object.
    #API Interaction: You must serialize a dictionary into a JSON string (using json.dumps()) before sending it to an API. 

#3. JavaScript Object

   # Role: The core data structure of JavaScript. It is what JSON was originally modeled after.
   # Structure: Keys can be identifiers (without quotes) or strings, and values can include functions or methods (unlike JSON).
    #API Interaction: JavaScript provides JSON.stringify() to convert an object into a JSON string for API requests and JSON.parse() to turn an API's JSON response back into a usable object