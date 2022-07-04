set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

 CREATE TABLE "public"."teamMembers" (
	"memberId" integer NOT NULL,
	"name" VARCHAR(255) NOT NULL,
	"title" VARCHAR(255) NOT NULL,
	"picture" TEXT NOT NULL
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."jobs" (
	"jobId" integer NOT NULL,
	"title" VARCHAR(255) NOT NULL,
	"url" TEXT NOT NULL UNIQUE
) WITH (
  OIDS=FALSE
);
