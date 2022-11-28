CREATE SCHEMA P2;
GO

--///////////////////DROP TABLES////////////////////
--Remove comments if you want to start with fresh tables
--DROP TABLE P2.Acct_Transact_Log;
--DROP TABLE P2.Account;
--DROP TABLE P2.User;

-- ////////////////////TABLES///////////////////////
CREATE TABLE P2.User (
	ID INT NOT NULL IDENTITY(0,1),
	Email NVARCHAR(255) UNIQUE NOT NULL,
	Password BINARY(20) NOT NULL,
	CHECK (Email LIKE '%@%.%'),
	PRIMARY KEY (ID)
);

CREATE TABLE P2.Account (
	AcctID INT NOT NULL IDENTITY(1,1),
	UserID INT NOT NULL,
	Balance DECIMAL(19,2),
	PRIMARY KEY (AcctID)
);

CREATE TABLE P2.Acct_Transact_Log (
	RefNum INT NOT NULL IDENTITY(1,1),
	SrcAcct INT NOT NULL,
	DstAcct INT NOT NULL,
	Status VARCHAR(8) NOT NULL,
	Amount DECIMAL(19,2) NOT NULL,
	PRIMARY KEY (RefNum)
);

--////////////////////FK CONSTRAINTS////////////////
ALTER TABLE P2.Account
	ADD CONSTRAINT FK__Account__UserID FOREIGN KEY (UserID)
	REFERENCES P2.User (ID);

ALTER TABLE P2.Acct_Transact_Log 
	ADD CONSTRAINT FK__Acct_Transact_Log__SrcAcct FOREIGN KEY (SrcAcct)
	REFERENCES P2.Account (AcctID);
ALTER TABLE P2.Acct_Transact_Log 
	ADD CONSTRAINT FK__Acct_Transact_Log__DstAcct FOREIGN KEY (DstAcct)
	REFERENCES P2.Account (AcctID);


--///////////////////Initial Inserts?///////////////
INSERT INTO P2.User (Email, Password) VALUES (
	'atm@server.net',
	CONVERT(BINARY(20), '0x5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8', 1));
