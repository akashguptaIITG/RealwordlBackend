const { db } = require('./db.js')


/*Extract all functions defination from the models */
const articleTable = require('./articles.model')
const usersTable = require('./user.model')
const tagsTable = require('./tag.model')
const commentTable=require('./comment.model')

/*creating table */
const Article = articleTable(db)
const User = usersTable(db)
const Tag = tagsTable(db)
const Comment = commentTable(db)



/*defeing all the realtion among the models */
User.hasMany(Article)
User.hasMany(Comment)

Article.belongsTo(User)
Article.hasMany(Comment)

Comment.belongsTo(Article)
Comment.belongsTo(User)



/*-------------------------------------------- */

module.exports = { Article,User,Tag,Comment}