CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    body TEXT NOT NULL,
    user_id INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

INSERT INTO users (name) VALUES ('Jane Smith');
INSERT INTO users (name)VALUES ('Alice Johnson');

INSERT INTO posts (title, body, user_id) VALUES ('Another Post', 'This is another post.', 2);
INSERT INTO posts (title, body, user_id) VALUES ('Third Post', 'This is the third post.', 1);

