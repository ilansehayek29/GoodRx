import { Express } from "express"
import { getUtteranceIntent } from '../Clients/LexClient';

export const registerUtterances = ( app: Express) => app.get("/api/utterances", (req, res) => {
    const utterance = req.query.utterance;
    var data = JSON.stringify({ "utterance": utterance });

    getUtteranceIntent(data)
        .then(function (response) {
            res.send(response)
        })
        .catch(function (error) {
            console.log(error);
            res.sendStatus(500)
            res.send(error)
        });

    
})