const { Router } = require('express')
const route = Router()
const Auth = require('../auth/auth')
const articleController =require('../controllers/article.controller');
/*
*get all aricles data api
   path ---- /api/articles 
*/
route.get('/',articleController.getAllArticles )
/**
 * create article 
 * /api/articles
 * body -articles json
 */
route.post('/',Auth.required, articleController.postArticle)

/**
 * get article deatils for particular article 
 * GET /api/articles/:slug
 * 
 */
route.get('/:slug', articleController.getSingleArticle)
/**
 * add comments to article
 * :slug/comments
 * 
 */

route.post('/:slug/comments',Auth.required,articleController.postComment)

/**
 * retrive comments to one article
 * :slug/comments
 * 
 */

route.get('/:slug/comments', articleController.getComments)

/**
 * 
 * delete article
 * /articles/:slug
 */
route.delete('/:slug',Auth.required, articleController.deleteArticle)

/**
 * 
 * delete comment
 * /api/articles/:slug/comments/:id
 */
route.delete('/:slug/comments/:id',Auth.required, articleController.deleteComment)


module.exports = route