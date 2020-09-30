import { Express } from "express"
import axios, { AxiosRequestConfig } from "axios";
import { ILexUtteranceResponse } from '../Model/Utterance';

export const registerUtterances = ( app: Express) => app.get("/api/utterances", (req, res) => {
    const utterance = req.query.utterance;
    var data = JSON.stringify({ "utterance": utterance });

    var config: AxiosRequestConfig = {
        method: 'get',
        url: 'https://f09q5x5wah.execute-api.us-west-2.amazonaws.com/test/transaction',
        headers: {
            'X-Amz-Content-Sha256': 'beaead3198f7da1e70d03ab969765e0821b24fc913697e929e726aeaebf0eba3',
            'X-Amz-Date': '20200930T050815Z',
            'Authorization': 'AWS4-HMAC-SHA256 Credential=AKIAZG4ZPTK3HM27KI7A/20200930/us-west-2/execute-api/aws4_request, SignedHeaders=host;x-amz-content-sha256;x-amz-date, Signature=2ba399a1d6fdf359c567a754aa1e33c89b9638df0d2e1259f05adc75dcb8128f',
            'Content-Type': 'application/json'
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            const lexReq: ILexUtteranceResponse = response.data as ILexUtteranceResponse;
            res.send(lexReq)
        })
        .catch(function (error) {
            console.log(error);
            res.sendStatus(500)
            res.send(error)
        });

    
})