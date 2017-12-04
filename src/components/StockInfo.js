import React from 'react';

function StockInfo({
	symbol,
	companyName,
	primaryExchange,
	latestPrice,
	latestSource,
	week52High,
	week52Low
}) {
	return (<div>
		<h1>Wolf Of React</h1>
		<sup>
			“Data provided for free by
			<a href="https://iextrading.com/developer/"> IEX
			</a>
		</sup>

		<h2>{symbol}
			: {companyName}</h2>
		<h3>{latestPrice}
			{latestSource}</h3>
		<dl>
			<dt>Week 52 High: {week52High}</dt>
			<dt>&nbsp;</dt>

			<dt>
				Week 52 Low: {week52Low}</dt>
			<dt>&nbsp;</dt>

			<dt>Exchange: {primaryExchange}</dt>
			<dt>&nbsp;</dt>

		</dl>
	</div>);
};

export default StockInfo;
