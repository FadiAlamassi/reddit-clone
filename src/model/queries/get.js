const dbConnection = require('../config/db_connection');

const sql = 'SELECT * FROM post INNER JOIN comment ON post.id = comment.post_id';
exports.get = dbConnection.query(sql);
