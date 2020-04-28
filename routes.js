const routes = require('next-routes')()
	.add('App', '/', 'Index')
	.add('classes', '/classes', 'Classes')
	.add('liondance', '/liondance', 'LionDance')
	.add('liondancerequest', '/liondance/request', 'LionDanceRequest')
	.add('about', '/about', 'About')
	.add('contact', '/contact', 'Contact')
	.add('article', '/article/:slug', 'Article')
	.add('profile', '/profile/:name', 'Profile')
	.add('events', '/events', 'Events')
	//.add('/:noname/:lang(en|es)/:wow+', 'complex')
	//.add({name: 'beta', pattern: '/v3', page: 'v3'})

module.exports = routes;
