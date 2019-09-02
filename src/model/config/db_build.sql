BEGIN;

DROP TABLE IF EXISTS "user",member,post,comment,community,follower,following,membercommunity,usercommunity CASCADE;

CREATE TABLE member(
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE community(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE
);
CREATE TABLE post(
  id SERIAL PRIMARY KEY,
  post_text VARCHAR(255) NOT NULL,
  post_media BYTEA,
  upvote INTEGER,
  downvote INTEGER,
  publish DATE NOT NULL DEFAULT NOW(),
  member_id INTEGER REFERENCES member(id),
  community_id INTEGER REFERENCES community(id)
);
CREATE TABLE comment(
  id SERIAL PRIMARY KEY,
  comment_text VARCHAR(255),
  uppoint INTEGER,
  downpoint INTEGER,
  publish DATE NOT NULL DEFAULT NOW(),
  parent_comment INTEGER REFERENCES comment(id),
  child_comment INTEGER REFERENCES comment(id),
  post_id INTEGER REFERENCES post(id)
);

CREATE TABLE follower(
  id SERIAL PRIMARY KEY,
  member_id INTEGER REFERENCES member (id) NOT NULL,
  follower_id INTEGER REFERENCES member (id) NOT NULL
);
CREATE TABLE following(
  id SERIAL PRIMARY KEY,
  member_id INTEGER REFERENCES member (id) NOT NULL,
  following_id INTEGER REFERENCES member (id) NOT NULL
);
CREATE TABLE membercommunity(
  member_id INTEGER REFERENCES member (id),
  community_id INTEGER REFERENCES member (id),
  is_creator BOOLEAN NOT NULL DEFAULT false,
  is_admin BOOLEAN NOT NULL DEFAULT false,
  is_joined BOOLEAN NOT NULL DEFAULT false,
  CONSTRAINT membercommunity_pk PRIMARY KEY (member_id,community_id)
);

COMMIT;