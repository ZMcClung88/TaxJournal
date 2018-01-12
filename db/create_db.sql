/* ENTRIES DB */
DROP TABLE IF EXISTS entries;

CREATE TABLE entries (
  id serial primary key,
  date varchar(100),
  time varchar(100),
  who varchar(150),
  location varchar(150),
  why varchar(150),
  breakfast int,
  lunch int,
  dinner int,
  golf int,
  cocktails int,
  office_supplies int,
  beg_miles int,
  end_miles int,
  other int
);


INSERT INTO entries(date, time, who, location, why, breakfast, lunch, dinner, golf, cocktails, office_supplies, beg_miles, end_miles, other) VALUES(
  '1/1/2018',
  '1pm-4pm',
  'J & S Rock',
  'Maverick Center',
  'Johnson referral at dinner',
  null,
  null,
  235.00,
  null,
  null,
  15.00,
  2044,
  2082,
  null
);

INSERT INTO entries(date, time, who, location, why, breakfast, lunch, dinner, golf, cocktails, office_supplies, beg_miles, end_miles, other) VALUES(
  '1/2/2018',
  '9am-11am',
  'Bob Marley',
  'Palm and Kennedy Country Club',
  'Brunch with clients',
  125.00,
  null,
  null,
  null,
  null,
  null,
  2088,
  2099,
  null
);

INSERT INTO entries(date, time, who, location, why, breakfast, lunch, dinner, golf, cocktails, office_supplies, beg_miles, end_miles, other) VALUES(
  '1/1/2018',
  '6pm-8pm',
  'Tina Fey',
  'Vivint Smart Home Arena',
  'Client gift for business',
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  80.00
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

/* USER-ENTRIES DB */
DROP TABLE IF EXISTs user_entries;

CREATE TABLE user_entries (
  id serial primary key,
  user_id int references users(user_id),
  date varchar(100),
  time varchar(100),
  who varchar(150),
  location varchar(150),
  why varchar(150),
  breakfast int,
  lunch int,
  dinner int,
  golf int,
  cocktails int,
  office_supplies int,
  beg_miles int,
  end_miles int,
  other int
)

INSERT INTO user_entries(user_id, date, time, who, location, why, breakfast, lunch, dinner, golf, cocktails, office_supplies, beg_miles, end_miles, other) VALUES(
  1,
  '1/1/2018',
  '6pm-8pm',
  'Tina Fey',
  'Vivint Smart Home Arena',
  'Client gift for business',
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  80.00
);
INSERT INTO user_entries(user_id, date, time, who, location, why, breakfast, lunch, dinner, golf, cocktails, office_supplies, beg_miles, end_miles, other) VALUES(
  1,
  '1/1/2018',
  '1pm-4pm',
  'J & S Rock',
  'Maverick Center',
  'Johnson referral at dinner',
  null,
  null,
  235.00,
  null,
  null,
  15.00,
  2044,
  2082,
  null
);
INSERT INTO user_entries(user_id, date, time, who, location, why, breakfast, lunch, dinner, golf, cocktails, office_supplies, beg_miles, end_miles, other) VALUES(
  1,
  '1/2/2018',
  '9am-11am',
  'Bob Marley',
  'Palm and Kennedy Country Club',
  'Brunch with clients',
  125.00,
  null,
  null,
  null,
  null,
  null,
  2088,
  2099,
  null
);
