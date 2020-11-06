import { strict } from 'assert';
import { Request, Response } from 'express';
import { brotliDecompress } from 'zlib';
import { cyberSecurity } from '../controllers/cyberSecurity';
import axios from 'axios';

let cipherTextFromAlice: string;
let ivToDecrypt: string;

class BobService {
    /* v End Points segundo ecenario (A-T-B) v */

    /* Bob */
    /* Bob recibe un mensaje de Alice */
    public postFromAlice(req: Request, res: Response) {
        let { Alice, cipherText } = req.body;
        cipherTextFromAlice = cipherText;
        console.log(`An encrypted message received from Alice: ${cipherTextFromAlice}`)
        res.status(200).json(`Message received, I want the IV to decrypt please.`);
        // Aquí se haría la petición a Alice para que la TTP le pase el IV
    }

    /* Bob recibe el IV desde la TTP y descifra el mensaje de Alice */
    public postIvToDecrypt(req: Request, res: Response) {
        console.log(req.body)
        ivToDecrypt = req.body;
        console.log("IV received from the TTP. Going to decrypt...");
        let message: string = cyberSecurity.addToDecrypt(cipherTextFromAlice, ivToDecrypt);
        res.status(200).json(`>> Message correctly received and decrypted by Bob.`);
    }

    /* Bob ha enviado un mensaje a Alice
    * Alice confirma interés por el mensaje */
    public getIvToDecrypt(req: Request, res: Response) {
        res.status(200).json(`Request correctly received. Sending IV to the TTP...`);
        // Aquí iría la petición para que Bob le envíe la IV a la TTP
    }

    /* ^ End Points segundo ecenario (A-T-B) ^ */
}

export const bobService = new BobService();