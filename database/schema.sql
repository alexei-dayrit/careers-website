set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

 CREATE TABLE "public"."team" (
	"id" integer NOT NULL UNIQUE,
	"name" TEXT NOT NULL,
	"title" TEXT NOT NULL,
	"picture" TEXT NOT NULL
) WITH (
  OIDS=FALSE
);

CREATE TABLE "public"."jobs" (
	"jobId" integer NOT NULL UNIQUE,
	"title" TEXT NOT NULL,
	"url" TEXT NOT NULL UNIQUE
) WITH (
  OIDS=FALSE
);

CREATE TABLE "public"."applicants" (
	"jobId" integer NOT NULL,
	"name" TEXT NOT NULL,
	"email" TEXT NOT NULL,
	"linkedIn" TEXT NOT NULL
) WITH (
  OIDS=FALSE
);
