const express = require('express');
const {isLoggedIn, isNotLoggedIn } = require('./middlewares');

const router = express.Router();

router.get('/profile', isLoggedIn,  (req, res) => {
	res.render('profile', {title : 'My Info - NodeSNS', user:req.user  });
});

router.get('/join', isNotLoggedIn, (req, res) => {
	res.render('join', {
		title : 'Start With Us! - NodeSNS',
		user: req.user,
		joinError: req.flash('joinError'),
	});
});

router.get('/', (req, res, next) => {
	res.render('main', {
		title: 'NodeSNS',
		twits: [],
		user: req.user,
		loginError: req.flash('loginError'),
	});
});

module.exports = router;
