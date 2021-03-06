const { Tag } = require('../models/index')

/*define various api for tags  here
 
*/
/**
 * /api/tags
 * get all tags name
 */
exports.getAllTags=async(req, res) => {
    const tag = await Tag.findAll();
    const tags = []
    tag.forEach(element => {
        tags.push(element.tagName);
    });
    res.status(200).json({tags:tags});
};