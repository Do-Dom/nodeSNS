const express = require('express');
const router = express.Router();

router.get('/profile', (req, res) => {
	res.render('profile', {title : 'My Info - NodeSNS', user:null });
});

router.get('/join', (req, res) => {
	res.render('join', {
		title : 'Start With Us! - NodeSNS',
		user: null,
		joinError: req.flash('joinError'),
	});
});

router.get('/', (req, res, next) => {
	res.render('main', {
		title: 'NodeSNS',
		twits: [],
		user: null,
		loginError: req.flash('loginError'),
	});
});

module.exports = router;
