import { strict } from 'assert';
import { Request, Response } from 'express';
import { brotliDecompress } from 'zlib';
import { cyberSecurity } from '../controllers/cyberSecurity';
import axios from 'axios';

let textArray: Array<String> = [];
let cipherTextFromAlice: string;
let ivToDecrypt: string;
let messageFromAlice: string;

class TtpService {

    /* v End Points segundo ecenario (A-T-B) v */

    /* TTP */
    /* Alice o Bob envían el IV a la TTP */
    public postIv(req: Request, res: Response) {
        let { source, iv } = req.body;
        if (source == 'Alice') {
            console.log('IV received from Alice by TTP.');
            if (iv.length != 0) {
                /* La TTP envía el IV a Bob para que pueda descubrir el mensaje que Alice la ha enviado. */
                axios.post("http://localhost:4000/bob/iv", iv).then( response => {
                    res.status(200).json(`IV received correctly. Sending it to Bob...`);
                    console.log(response.data);
                }).catch(function (error) {
                    console.log(error);
                  })
            }
            else {
                res.status(400).json(`Problem receiving the IV.`);
            }
        }
        else {
            // Post del IV a Alice
        }

    }

    /* ^ End Points segundo ecenario (A-T-B) ^ */
}

export const ttpService = new TtpService();