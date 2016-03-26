module.exports = {
	'use': [
		'postcss-import-url',
		'postcss-import',
		'postcss-nested',
		'autoprefixer',
		'postcss-mq-keyframes',
		'postcss-url',
		'postcss-cachebuster',
		'cssnano',
		'postcss-reporter'
	],
	'cssnano':             { autoprefixer: false },
	'postcss-cachebuster': { imagesPath: '/www' },
	'postcss-import':      { glob: true },
	'postcss-reporter':    { clearMessages: true },
	'postcss-url':         {
		url:      'inline',
		fallback: 'copy'
	}
};
