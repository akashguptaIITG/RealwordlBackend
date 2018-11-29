// api router will mount other routers
module.exports = (app) => {
    // app.get('/', (req, res) => { res.send('hello world') });
    app.use('/api', require('./user.route'));
    app.use('/api/articles', require('./article.route'));
    app.use('/api/tags', require('./tag.route'));
    
  }