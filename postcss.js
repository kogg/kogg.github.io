module.exports = {
	'use': [
		'postcss-nested',
		'autoprefixer',
		'postcss-mq-keyframes',
		'cssnano',
		'postcss-reporter'
	],
	'cssnano':          { autoprefixer: false },
	'postcss-reporter': { clearMessages: true }
};
