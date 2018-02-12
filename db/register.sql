INSERT IF NOT EXISTS INTO users
(first_name, last_name, email, password, newsletter)
VALUES
($1, $2, $3, $4, $5);
