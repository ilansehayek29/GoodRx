import axios, { AxiosRequestConfig } from "axios";

export interface IGoodRxSearchResponse {
    type:string;
    slug:string;
}

//searchTerm is the term searched in GoodRx searchbar
export const getSearchDetails = (searchTerm:string) => {

    var config: AxiosRequestConfig = {
        method: 'get',
        url: `https://www.goodrx.com/api/v4/search/classify?term=${searchTerm}`,
    };

   return axios(config).then((response) => response.data as IGoodRxSearchResponse);
}

//searchTerm is the term searched in GoodRx searchbar
//slug is the slug returned from getSearchDetails
export const getConditionDetails = (searchTerm:string, slug:string) => {
    var config: AxiosRequestConfig = {
        method:'get',
        url: `https://www.goodrx.com/api/v4/conditions/${searchTerm}?slug=${slug}`
    }

    return axios(config).then((response) => response.data)
}

//slug is the slug returned from getSearchDetails for a drug
export const getDrugConcept = (slug:string) => {
    var config: AxiosRequestConfig = {
        method:'get',
        url: `https://www.goodrx.com/api/v4/drug_concepts/${slug}/`
    }

    return axios(config).then((response) => response.data)
}