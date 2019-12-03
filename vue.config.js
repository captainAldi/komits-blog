module.exports = {
		publicPath: process.env.NODE_ENV === 'production'
			? '/komits-blog/'
			: '/',
  "transpileDependencies": [
    "vuetify"
  ]
}