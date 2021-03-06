import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import './slider.scss';

const App = () => {
	const [darkTheme, setDarkTheme] = useState(false);
	return (
		<div className={darkTheme ? 'darkContainer' : 'lightContainer'}>
			<div className='header'>
				<i className='fa fa-moon-o'></i>
				<label className='switch'>
					<input type='checkbox' onChange={() => setDarkTheme(!darkTheme)} />
					<span className='slider round'></span>
				</label>
				<i className='fa fa-sun-o'></i>
			</div>
			<div className='main-content'>
				<div className='profile-picture'>
					<img src='src/profile.jpg' alt='Girl in a jacket' />
				</div>
				<div className='text-container'>
					<h1>Shantanu Sengupta</h1>
					<p>
						Front End Engineer @ AWS &nbsp; | &nbsp;Competitive Coding Enthusiast &nbsp; | &nbsp;Data visualization extraordinaire &nbsp; |
						&nbsp;Amateur chef &nbsp; | &nbsp;Voracious reader &nbsp; | &nbsp;Video game noob &nbsp; | &nbsp;Photography dabbler
					</p>
				</div>
			</div>
		</div>
	);
};

ReactDOM.render(<App />, document.body);
