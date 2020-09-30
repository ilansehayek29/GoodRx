
export interface IUtteranceRequest {
    utterance: string
}

export interface ILexUtteranceResponse {
    
    intentName?: string,
    nluIntentConfidence?: {
        score?: number
    },
    alternativeIntents?: [
        {
            intentName?: string,
            nluIntentConfidence?: {
                score?: number
            },
            slots?: {
                drug_name?: string
            }
        }
    ],
    slots?: {
        dosage?: string,
        drug_name?: string,
        tablet?: string
    }
}