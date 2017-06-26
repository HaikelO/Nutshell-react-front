import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './_services/navigation';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<Navigation />, document.getElementById('root'));
registerServiceWorker();
