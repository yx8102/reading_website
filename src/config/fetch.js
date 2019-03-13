import {
	baseUrl
} from './env'

export default async(url = '', data = {}, type = 'GET', method = 'fetch') => {
	type = type.toUpperCase();
	url = baseUrl + url;

	if (type === 'GET') {
		let dataStr = ''; //数据拼接字符串
		Object.keys(data).forEach(key => {
			dataStr += key + '=' + data[key] + '&';
		})

		if (dataStr !== '') {
			dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
			url = url + '?' + dataStr;
		}
    }

	if (window.fetch && method == 'fetch') {
		let requestConfig = {
			credentials: 'include',
			method: type,
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			mode: "cors",
			cache: "force-cache"
		}

		if (type == 'POST') {
			Object.defineProperty(requestConfig, 'body', {
				value: JSON.stringify(data)
			})
		}

		/**
		 * 返回结果状态码
			1001: 成功
			1002: DB错误
			1003: 参数错误
			1004: 服务异常
			1005: 逻辑处理异常
			1006: 服务器内部错误
			1007: 查询失败
			1008: 密码错误
			1009: 邮件发送失败
		*/

		try {
			const response = await fetch(url, requestConfig);
			const responseJson = await response.json();
			if (responseJson.code === 1001) {
				if (responseJson.page) {
					return {
						data: responseJson.data,
						page: responseJson.page
					}
				}
				return responseJson.data;
			}
			else {
				throw new Error(`Opps!Error occured.Error code: ${responseJson.code}.Error msssage: ${responseJson.message}`)
			}
		} catch (error) {
			throw new Error(error)
		}
	} else {
        // 降维度成原本的ajax请求
		return new Promise((resolve, reject) => {
			let requestObj;
			if (window.XMLHttpRequest) {
				requestObj = new XMLHttpRequest();
			} else {
				requestObj = new ActiveXObject;
			}

			let sendData = '';
			if (type == 'POST') {
				sendData = JSON.stringify(data);
			}

			requestObj.open(type, url, true);
			requestObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			requestObj.send(sendData);

			requestObj.onreadystatechange = () => {
				if (requestObj.readyState == 4) {
					if (requestObj.status == 200) {
						let obj = requestObj.response
						if (typeof obj !== 'object') {
							obj = JSON.parse(obj);
						}
						resolve(obj)
					} else {
						reject(requestObj)
					}
				}
			}
		})
	}
}