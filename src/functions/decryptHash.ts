import CryptoJS from "crypto-js";
import key from "@/crypto";

export default function decryptHash(id: string) {
  return CryptoJS.AES.decrypt(id, key).toString(CryptoJS.enc.Utf8);
}
