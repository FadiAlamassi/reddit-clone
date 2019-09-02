const dbConnection = require('../config/db_connection');

const text = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia ut repudiandae eos, vel corporis adipisci magnam maxime dolores modi cupiditate voluptas perferendis inventore consequatur, eius mollitia quia.';
const sql = `INSERT INTO member (username,email,password) VALUES
('fadi1','fadi1@gmail.com',123),
('fadi2','fadi2@gmail.com',123),
('fadi3','fadi3@gmail.com',123),
('fadi4','fadi4@gmail.com',123),
('fadi5','fadi5@gmail.com',123),
('fadi6','fadi6@gmail.com',123),
('fadi7','fadi7@gmail.com',123);
INSERT INTO post(post_text,member_id) VALUES
('${text}',1),
('${text}',1),
('${text}',2),
('${text}',2),
('${text}',2),
('${text}',3),
('${text}',3),
('${text}',4),
('${text}',5),
('${text}',6),
('${text}',6),
('${text}',7),
('${text}',7),
('${text}',7);
INSERT INTO comment(comment_text,parent_comment,child_comment,post_id) VALUES
('${text}',NULL,6,1),
('${text}',NULL,NULL,1),
('${text}',NULL,NULL,1),
('${text}',1,7,1),
('${text}',6,8,1),
('${text}',7,9,1),
('${text}',NULL,NULL,1),
('${text}',8,NULL,1),
('${text}',NULL,NULL,1);
`;

module.exports = dbConnection.query(sql);
