var CryptoJS = require("crypto-js");

var key = CryptoJS.enc.Hex.parse("000102030405060708090a0b0c0d0e0f");

class CyberSecurity {

    public addToEncrypt(message: string) {
        let iv = CryptoJS.lib.WordArray.random(128/8);
        var cipherText = CryptoJS.AES.encrypt(message, key, { iv: iv }).toString();
        console.log(`Estos son los datos encriptados a enviar al cliente: ${cipherText}`);
        let dataToSend = {
            cipherText: cipherText,
            iv: iv
        }
        return dataToSend;
    }

    public addToDecrypt(cipherText: string, iv: string) {
        console.log(`Esto es el ciphertext: ${cipherText}`);
        var message = CryptoJS.AES.decrypt(cipherText, key, { iv: iv }).toString(CryptoJS.enc.Utf8);
        console.log(`Esto es el mensaje recibido desencriptado: ${message}`);
        return message;
    }
}

export const cyberSecurity = new CyberSecurity();