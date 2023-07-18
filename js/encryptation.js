export function encrypt(message) {
  const replacements = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat",
  };

  const encrypted = message
    .split("")
    .map((char) => replacements[char] || char)
    .join("");

  return encrypted;
}

export function decrypt(encryptedMessage) {
  const replacements = {
    ai: "a",
    enter: "e",
    imes: "i",
    ober: "o",
    ufat: "u",
  };

  const decrypted = encryptedMessage
    .split(/(ai|enter|imes|ober|ufat)/)
    .map((part) => replacements[part] || part)
    .join("");

  return decrypted;
}
