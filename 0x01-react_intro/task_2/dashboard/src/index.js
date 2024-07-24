import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import Notifications from './Notifications.css';

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

ReactDOM.render(
	<React.StrictMode>
		<Notifications />
	</React.StrictMode>,
	document.getElementById('root-notifications')
);