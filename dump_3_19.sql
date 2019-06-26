/* TABLE CREATION */
CREATE TABLE demo_3_19 (
  accesstoken VARCHAR,
  accountbalance NUMERIC,
  accountcurrency VARCHAR,
  accountid VARCHAR,
  accountname VARCHAR,
  accountnumber VARCHAR,
  accountstatus VARCHAR,
  accountsubtype VARCHAR,
  accounttype NUMERIC,
  createddate NUMERIC,
  entityid VARCHAR,
  holderprofilename VARCHAR,
  providerfavicon VARCHAR,
  providerid VARCHAR,
  providerlogo VARCHAR,
  providername VARCHAR,
  providerurl VARCHAR,
  refreshstatuscode NUMERIC,
  refreshstatusmessage VARCHAR,
  serviceid NUMERIC,
  servicegroupid NUMERIC,
  updateddate NUMERIC,
  updateddatelastattempt NUMERIC,
  updateddatescheduled NUMERIC,
  service_name VARCHAR
);
/* FILLING THE DB */
INSERT INTO demo_3_19 (accesstoken, accountbalance, accountcurrency, accountid, accountname, accountnumber, accountstatus, accountsubtype, accounttype, createddate, entityid, holderprofilename, providerfavicon, providerid, providerlogo, providername, providerurl, refreshstatuscode, refreshstatusmessage, serviceid, servicegroupid, updateddate, updateddatelastattempt, updateddatescheduled, service_name) VALUES ('{"password":"A1!UoTl2NTjrD3nG7pbjLFTMJiizj36pZ7G","username":"GXlIqwVCTBvDHlPyNSG58c3H0E91Yalj"}', 203.97, 'GBP', '10019612', 'YOUNG PERSON''S ACCOUNT', 'xxxx8739', 'ACTIVE', 'SAVINGS', 4, 1499179172000, '17_10019612', 'Beck Jarrod Farrington-Wheeler', 'https://192.168.210.234:8743/appscenter/bvtmcappscenter/ytmprod/siteImage.bvtmcfast.do?access_type=APPS_CENTER_PRODUCTION&siteId=4118&imageType=FAVICON', '4118', 'https://192.168.210.234:8743/appscenter/bvtmcappscenter/ytmprod/siteImage.bvtmcfast.do?access_type=APPS_CENTER_PRODUCTION&siteId=4118&imageType=LOGO', 'Barclays', 'https://www.barclays.co.uk/PersonalBanking/', 0, 'OK', 17, 3, 1499179630000, 1499179630000, 2121237472000, 'Finance');