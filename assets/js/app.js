const { remote } = require('electron');
window.$ = window.jQuery = require('jquery');
const moment = require('moment');
const axios = require('axios');

let data = {}

const renderPage = () => {

};

axios.post('https://videorepo.hannahap.com/api/data', { token: 34725250033 })
	.then((response) => {
		data = response.data;
		console.log(data);
	}).catch((err) => {
		console.error(err);
	});

window.$('#navbar-close-icn').click(() => {
	const window = remote.getCurrentWindow();
	window.close();
});