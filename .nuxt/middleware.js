const middleware = {}

middleware['redirection'] = require('..\\src\\middleware\\redirection.js')
middleware['redirection'] = middleware['redirection'].default || middleware['redirection']

export default middleware
