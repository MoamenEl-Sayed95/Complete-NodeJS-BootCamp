const fs = require("fs");
const crypto = require("crypto");

const start = Date.now();

setTimeout(() => console.log("Timer I Fininshed"), 0);
setImmediate(() => console.log("Immediate I Fininshed"));

fs.readFile("test-file.text", () => {
  console.log("I/O finished");
  console.log("----------------");

  setTimeout(() => console.log("Timer 2 Fininshed"), 0);
  setTimeout(() => console.log("Timer 3 Fininshed"), 3000);
  setImmediate(() => console.log("Immediate 2 Fininshed"));

  process.nextTick(() => console.log("Process.nevtTick"));

  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password Encrypted");
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password Encrypted");
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password Encrypted");
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password Encrypted");
  });
});

console.log("Hello from the top-level code");
