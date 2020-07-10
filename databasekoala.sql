CREATE TABLE koalas (
	"id" SERIAL PRIMARY KEY,
	"name" varchar(60), 
	"gender" varchar(1),
	"age" integer,
	"ready_to_transfer" varchar(1),
	"notes" varchar(240)
);

