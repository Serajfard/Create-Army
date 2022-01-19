const axios = require("axios");

const httpHelper = () => {
	let get = (url) => {
		return new Promise(function (resolve, reject) {
			axios
				.get(url)
				.then((r) => {
					if (r.data) {
						resolve(r.data);
					} else {
						reject(new Error("Invalid parameter"));
					}
				})
				.catch((err) => {
					reject(err);
				});
		});
	};

	let post = (url, data) => {
		return new Promise(function (resolve, reject) {
			axios
				.post(url, data)
				.then((r) => {
					if (r.data) {
						resolve(r.data);
					} else {
						reject(new Error("Invalid parameter"));
					}
				})
				.catch((err) => {
					reject(err);
				});
		});
	};

	return {
		get,
		post
	};
};

module.exports = httpHelper;
