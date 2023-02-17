import {
	HOST_CORE,
	getRequest,
    postRequest,
} from '../lib/ApiHelper';

const service = HOST_CORE;

export const getTransactions = (next: any, param: any) => {
	getRequest(service, '', next, param);
}

export const postCsv = (next: any, param: any) => {
	postRequest(service, '', next, param)
}