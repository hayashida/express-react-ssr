import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../client/components/app';
import template from './template';

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
	const appString = renderToString(<App />);

	res.send(template({
		body: appString,
		title: 'Hello, World'
	}));
});

app.listen(3000, () => {
	console.log('Listening');
});