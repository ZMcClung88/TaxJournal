/* ENTRIES DB */
DROP TABLE IF EXISTS entries;

CREATE TABLE entries (
  id serial primary key,
  date varchar(100),
  who varchar(150),
  location varchar(150),
  why varchar(150),
  breakfast int,
  lunch int,
  dinner int,
  home int,
  golf int,
  cocktails int,
  other varchar(250),
  total1 int,
  total2 int,
  total3 int
);


INSERT INTO entries(date, who, location, why, breakfast, lunch, dinner, home, golf, cocktails, other, total1, total2, total3) VALUES(
  '1/1/2018',
  'J & S Rock',
  'Palm and Kennedy Center',
  'Johnson referral at dinner followed by theater.',
  null,
  null,
  235.00,
  null,
  null,
  15.00,
  '[
    "theater": "120.00",
    "park": "11.00"
  ]',
  null,
  null,
  381.00
);

INSERT INTO entries(date, who, location, why, breakfast, lunch, dinner, home, golf, cocktails, other, total1, total2, total3) VALUES(
  'January 2, 2018',
  'Guy Larson',
  'Classy Country Club',
  'Brunch to discuss new opportunity',
  45.00,
  null,
  null,
  null,
  null,
  10.00,
  null,
  null,
  null,
  55.00
);

INSERT INTO entries(date, who, location, why, breakfast, lunch, dinner, home, golf, cocktails, other, total1, total2, total3) VALUES(
  '01/01/18',
  'Bob Zalenski',
  'Bobbys car wash',
  'washed car fleet',
  null,
  null,
  null,
  null,
  null,
  null,
  250.00,
  null,
  null,
  250.00
);


/* USERS DB */
DROP TABLE IF EXISTS users;

CREATE TABLE users (
  user_id serial primary key,
  first_name varchar(25),
  last_name varchar(25),
  email varchar(75),
  password varchar(50),
  newsletter boolean
)

INSERT INTO users (first_name, last_name, email, password, newsletter) VALUES (
  'Zac',
  'McClung',
  'z@z.com',
  'passphrase',
  true
);

INSERT INTO users (first_name, last_name, email, password, newsletter) VALUES (
  'Courtney',
  'McClung',
  'c@c.com',
  'mayble0829',
  true
);

INSERT INTO users (first_name, last_name, email, password, newsletter) VALUES (
  'Mayble',
  'McClung',
  'm@m.com',
  'password',
  true
);
