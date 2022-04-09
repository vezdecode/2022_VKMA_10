import React from 'react';
import LOCATIONS from '../shared/consts/locations';

const MainPage = (): JSX.Element => {
	return(
		<div className='p-8'>
			<h1 className='font-bold text-3xl'>
				Находка для шпиона / Локации
			</h1>
			<ul className='mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
				{LOCATIONS.map((item, i) => (
					<h2 key={i} className='font-semibold'>
						{item}
					</h2>
				))}
			</ul>
		</div>
	);
};

export default MainPage;
