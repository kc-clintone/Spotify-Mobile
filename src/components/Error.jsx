import React from 'react';
import { FaExclamationCircle } from 'react-icons/fa';

const Error = () => (
	<div className='w-full flex flex-col justify-center items-center text-center align-middle'>
		<FaExclamationCircle size={70} color='#FFF' />
		<h1 className='font-bold text-2xl text-white'>
			Oops!, Something went wrong, try again.
		</h1>
	</div>
);

export default Error;
