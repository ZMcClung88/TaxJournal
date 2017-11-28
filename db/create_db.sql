DROP TABLE IF EXISTS entries;

CREATE TABLE entries (
  id serial primary key,
  user_id int,
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

INSERT INTO entries(user_id, who, location, why, breakfast, lunch, dinner, home, golf, cocktails, other, total1, total2, total3) VALUES(
  '1',
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
