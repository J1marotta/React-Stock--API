import React from 'react';

	const Error = ({error}) => {
		if (error === true) {
			return (
				<div>
					That Symbol is unknown, please try another.
				</div>
			)
		} else {
			return(
				<div>
				</div>
			)
		}
	}

export default Error;
