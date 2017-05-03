// Include the library
var nem = require("../../build/index.js").default;

// Create keypair
var kp = nem.crypto.keyPair.create("private key");

// Data to sign
var data = "NEM is awesome !"

// Sign data
var sig = kp.sign(data);

// Review
console.log("Public key: " + kp.publicKey.toString());
console.log("Original data: " + data);
console.log("Signature: " + sig.toString());

// Result
console.log("\nIs signature valid ? ");
console.log(nem.crypto.keyPair.verify(kp.publicKey.toString(), data, sig.toString()));