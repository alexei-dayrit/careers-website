-- DANGER: this is NOT how to do it in the real world.
-- You should NEVER EVER check user data into Git!

-- TEAM MEMBERS
insert into "team" ("id", "name", "title", "picture")
     values (1, 'Adam', 'Founder & CEO', '/images/adam.jpeg');

insert into "team" ("id", "name", "title", "picture")
     values (2, 'John', 'Founder & CEO', '/images/adam.jpeg');

insert into "team" ("id", "name", "title", "picture")
     values (3, 'Cathy', 'Founder & CEO', '/images/adam.jpeg');

insert into "team" ("id", "name", "title", "picture")
     values (4, 'Cassie', 'Founder & CEO', '/images/adam.jpeg');

-- JOBS
insert into "jobs" ("jobId", "title", "url")
     values (1, 'Front-end Engineer', 'https://careers/jobs/1');
