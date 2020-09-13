import axios from 'axios';
import get from 'lodash/get';

import { httpCodes, httpMethods } from "../core/constants";

const restApi = axios.create({
  baseURL: 'http://localhost:5000'
})

const httpRequest  = async (endpoint, method, body = null, headers = {}) => {
  try {
    const response = await restApi({
      data: body,
      method,
      url: endpoint,
      headers,
      timeout: 10000,
    });

    const code = get(response, 'status');
    const data = get(response, 'data');

    if( code=== httpCodes.ok) {
      return data;
    } else {
      return `Something happened, code: ${code}, response ${data}`;
    }

  } catch (error) {
    console.error(error);
    return error;
  }
};

export const httpGet = async (endPoint) => httpRequest(endPoint, httpMethods.get);
export const httpP = async (endPoint) => httpRequest(endPoint, httpMethods.get);
