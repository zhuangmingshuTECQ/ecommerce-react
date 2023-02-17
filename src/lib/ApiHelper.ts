import axios, { AxiosResponse } from 'axios';

export const HOST_CORE = 'core';
export const HTTP_403_REDIRECT = '/xxx/403';
export const HTTP_404_REDIRECT = '/xxx/404';
export const HTTP_500_REDIRECT = '/xxx/500';

export const determineCoreHost = () => {
	return window.location.protocol + `//${process.env.REACT_APP_APIIP}:${process.env.REACT_APP_APIPORT}${process.env.REACT_APP_CONTEXT_PATH}`;
};

export const determineHost = (service: string) => {
	if (service === HOST_CORE) {
		return determineCoreHost();
	} else {
		return '';
	}
};


function success(response: AxiosResponse<any, any>, next: (arg0: { error: boolean; data: any; }) => void) {
	if (next) {
		if (response.data.result === 'Success') {
			// console.log('sucess next -<> ', response.data)
			next({
				error: false,
				data: response.data.data,
			});
		} else {
			if (response.data.errorCode === '403') {
				window.location.href = HTTP_403_REDIRECT;
			}

			next({
				error: true,
				data: {
					errorCode: response.data.errorCode,
					errorMessage: response.data.errorMessage,
				},
			});
		}
	}
}

function fail(err: { response: { status: number; }; }, next: (arg0: { error: boolean; data: any; }) => void) {
	console.log(err);
	try {
		if (err.response.status === 403) {
			console.log('err.response.status is 403');
			window.location.href = HTTP_403_REDIRECT;
		} else if (err.response.status === 404) {
			console.log('err.response.status is 404');
			window.location.href = HTTP_404_REDIRECT;
		} else if (err.response.status === 500) {
			console.log('err.response.status is 500');
		}
		if (next) {
			next({
				error: true,
				data: err,
			});
		}
	} catch (error) {
		console.log('error occured', error);
	}
}

export const getRequest = (service: any, path: string, next: any, param: any) => {
	const headers = {
		'Content-Type': 'application/json',
	};

	let host = determineHost(service);
	axios
		.get(host + path, {
			params: param,
			headers: headers,
			withCredentials: false,
		})
		.then((response) => {
			return success(response, next);
		})
		.catch((err) => {
			console.log('Error for GET Request - ' + path);
			return fail(err, next);
		});
};

export const postRequest = (service: any, path: string, next: any, body: any) => {
	const headers = {
		'Content-Type': 'application/json',
	};

	let host = determineHost(service);

	axios
		.post(host + path, body, { headers: headers, withCredentials: false })
		.then((response) => {
			// console.log('this is in API UITLS -> ', response)
			return success(response, next);
		})
		.catch((err) => {
			console.log('Error for POST Request - ' + path);
			return fail(err, next);
		});
};