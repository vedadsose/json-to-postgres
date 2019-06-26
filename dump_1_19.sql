/* TABLE CREATION */
CREATE TABLE demo_1_19 (
  additionalurl VARCHAR,
  bio VARCHAR,
  createddate NUMERIC,
  displayname VARCHAR,
  entityid VARCHAR,
  firstname VARCHAR,
  followerscount NUMERIC,
  followingcount NUMERIC,
  isverified VARCHAR,
  lastname VARCHAR,
  locale VARCHAR,
  personentityid VARCHAR,
  postcount NUMERIC,
  profileid VARCHAR,
  profileprotected VARCHAR,
  profileurl VARCHAR,
  referenceentityid VARCHAR,
  referenceentitytype NUMERIC,
  socialnetworkuserentityid VARCHAR,
  timezone VARCHAR,
  username VARCHAR,
  accountentityid VARCHAR,
  service_name VARCHAR
);
/* FILLING THE DB */
INSERT INTO demo_1_19 (additionalurl, bio, createddate, displayname, entityid, firstname, followerscount, followingcount, isverified, lastname, locale, personentityid, postcount, profileid, profileprotected, profileurl, referenceentityid, referenceentitytype, socialnetworkuserentityid, username, accountentityid, service_name) VALUES ('http://digi.me/', 'Award-winning app allowing you to take control of the personal data powering your personal life and share it on your terms for rewards. Get, see and share it.', 1239881115000, 'digime', '3_31730367', 'digi.me', 5524, 6067, FALSE, 'digi.me', 'en', '3_31730367_31730367', 13747, '31730367', FALSE, 'https://twitter.com/digime', '3_31730367', 15, '3_31730367', 'digime', '3_31730367', 'Twitter');
INSERT INTO demo_1_19 (createddate, displayname, entityid, firstname, followerscount, followingcount, lastname, personentityid, postcount, profileid, profileurl, referenceentityid, referenceentitytype, socialnetworkuserentityid, username, accountentityid, service_name) VALUES (1488407665000, 'jenny_clubb', '9_681240018542422104', 'Jenny', 1, 2, 'Clubb', '9_681240018542422104_681240018542422104', 98, '681240018542422104', 'https://www.pinterest.com/jenny_clubb/', '9_681240018542422104', 15, '9_681240018542422104', 'jenny_clubb', '9_681240018542422104', 'Pinterest');