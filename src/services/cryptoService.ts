import { strict } from 'assert';
import { Request, Response } from 'express';
import { brotliDecompress } from 'zlib';
import { cyberSecurity } from '../controllers/cyberSecurity';
import axios from 'axios';

let textArray: Array<String> = [];
let cipherTextFromAlice: string;
let ivToDecrypt: string;
let messageFromAlice: string;

class CryptoService {

    /* v End Points primer ecenario (A-B) v */

    public getPrueba(req: Request, res: Response) {
        res.status(200).json("Todo okay");
    }

    public getTexts(req: Request, res: Response) {
        console.log("ESTO ES EL TAMAÑO DEL ARRAY: " + textArray.length);
        if (textArray.length > 0) {
            let dataToSend: object = cyberSecurity.addToEncrypt(textArray.toString());
            res.status(200).json(dataToSend);
            console.log(`Sending the array of messages to the client...`);
        }
        else
            res.status(409).json("Error, no text found yet on the array.");
    }

    public addText(req: Request, res: Response) {
        console.log("LO QUE LLEGAAA: " + req.body);
        let { cipherText, iv } = req.body;
        let message: string = cyberSecurity.addToDecrypt(cipherText, iv);
        textArray.push(message);
        console.log(`Imprimiendo contenido de la lista... ${textArray}`);
        res.status(200).json(`Message correctly received and decrypted. ${message}`);
    }

    /* ^ End Points primer ecenario ^ */
}

export const cryptoService = new CryptoService();