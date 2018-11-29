const { Router } = require('express')
const route = Router()
const tagController =require('../controllers/tag.controller')

/*define various api for tags  here
 
*/
/**
 * /api/tags
 * get all tags name
 */
route.get('/', tagController.getAllTags)
module.exports = route