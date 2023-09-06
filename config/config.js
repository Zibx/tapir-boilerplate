module.exports = {
  static: ['public', 'src'],
  template: 'template',
  html: 'html/page.html',
  scss: {
    path: '/scss'
  },
  scripts: ['/core/Path.js', '/core/Require.js',
    'https://form.dev/vanilla/build/rDOM_latest.js',
    '/core/Localizer.js', '/core/Random.Seeded.js', '/core/Route.js'

  ]
};
