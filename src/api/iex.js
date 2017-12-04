import axios from 'axios';

const api = axios.create({
	baseURL: "https://api.iextrading.com/1.0"
});

// take a symbol and run a promise.
export function loadQuoteForStock(symbol) {
	return api.get(`/stock/${symbol}/quote`)
	.then(res => res.data);
	};
