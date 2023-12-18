import CryptoJS from "crypto-js";
import key from "../crypto";

export default function createHash(id: string) {
  let hashValue = CryptoJS.AES.encrypt(id, key).toString();

  while (hashValue.includes("/")) {
    hashValue = CryptoJS.AES.encrypt(id, key).toString();
  }

  return hashValue;
}
