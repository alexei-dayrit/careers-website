-- DANGER: this is NOT how to do it in the real world.
-- You should NEVER EVER check user data into Git!

insert into "team" ("memberId", "name", "title", "picture")
     values (1, 'Sara', 'Founder & CEO', '/images/image-1650997140946.jpeg');

insert into "jobs" ("jobId", "title", "url")
     values (1, 'Front-end Engineer', 'https://careers/jobs/1');
