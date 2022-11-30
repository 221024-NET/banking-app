CREATE SCHEMA P2;
GO

--///////////////////DROP TABLES////////////////////
-- Remove comments if you want to start with fresh tables
--DROP TABLE [P2].[Transaction];
--DROP TABLE [P2].[Account];
--DROP TABLE [P2].[User];

-- ////////////////////TABLES///////////////////////
CREATE TABLE [P2].[User] (
    [user_ID]    INT            IDENTITY (1, 1) NOT NULL,
    [email]      NVARCHAR (255) NOT NULL,
    [first_name] NVARCHAR (255) NULL,
    [last_name]  NVARCHAR (255) NULL,
    [address]    NVARCHAR (255) NULL,
    [password]   BINARY (20)    NOT NULL,
    PRIMARY KEY CLUSTERED ([user_ID] ASC),
    CHECK ([Email] like '%@%.%'),
    UNIQUE NONCLUSTERED ([email] ASC)
);

CREATE TABLE [P2].[Account] (
    [acct_ID] INT             IDENTITY (1, 1) NOT NULL,
    [user_ID] INT             NOT NULL,
    [type]    VARCHAR (20)    NOT NULL,
    [balance] DECIMAL (19, 2) NULL,
    PRIMARY KEY CLUSTERED ([acct_ID] ASC),
    CONSTRAINT [FK__Account__UserID] FOREIGN KEY ([user_ID]) REFERENCES [P2].[User] ([user_ID])
);

CREATE TABLE [P2].[Transaction] (
    [ref_ID]   INT             IDENTITY (1, 1) NOT NULL,
    [src_acct] INT             NULL,
    [dst_acct] INT             NULL,
    [status]   VARCHAR (8)     NOT NULL DEFAULT 'PENDING',
    [amount]   DECIMAL (19, 2) NOT NULL,
    PRIMARY KEY CLUSTERED ([ref_ID] ASC),
    CONSTRAINT [FK__Transaction__DstAcct] FOREIGN KEY ([dst_acct]) REFERENCES [P2].[Account] ([acct_ID]),
    CONSTRAINT [FK__Transaction__SrcAcct] FOREIGN KEY ([src_acct]) REFERENCES [P2].[Account] ([acct_ID])
);

--////////////////////FK CONSTRAINTS////////////////
-- ALTER TABLE P2.Account
-- 	ADD CONSTRAINT FK__Account__UserID FOREIGN KEY (user_ID)
-- 	REFERENCES P2.[User] (user_ID);

-- ALTER TABLE P2.[Transaction]
-- 	ADD CONSTRAINT FK__Transaction__SrcAcct FOREIGN KEY (src_acct)
-- 	REFERENCES P2.Account (acct_ID);
-- ALTER TABLE P2.[Transaction]
-- 	ADD CONSTRAINT FK__Transaction__DstAcct FOREIGN KEY (dst_acct)
-- 	REFERENCES P2.Account (acct_ID);
