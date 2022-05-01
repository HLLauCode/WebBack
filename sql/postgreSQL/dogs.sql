CREATE TABLE public.dogs (
	id serial4 NOT NULL,
	name varchar(32) NOT NULL,
  gender varchar(10) NOT NULL,
  age float NOT NULL,
  breed varchar(40) NOT NULL,
  imageurl varchar(2048) NULL,
  status bool NOT NULL,
  summary text NULL,
	datecreated timestamp NOT NULL DEFAULT now(),
	datemodified timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT articles_pkey PRIMARY KEY (id)
);


INSERT INTO dogs (name, gender, age, breed, status, summary) VALUES
	('Woof', 'female', 1, 'Retrievers (Labrador)', TRUE, 'first summary'),
	('Goofy', 'female', 1.2, 'Retrievers (Golden)', TRUE, 'second summary'),
	('Peanut', 'male', 1.2, 'French Bulldogs', FALSE, 'some summary'),
	('Doge', 'female', 2, 'French Bulldogs', TRUE, 'good summary');
