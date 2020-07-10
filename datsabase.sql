CREATE TABLE koalas 
(id SERIAL PRIMARY KEY, 'name' varchar(120), 
gender varchar(1), age int, 
ready_to_transfer varchar(1), notes varchar(240));


insert into koalas (name, gender, age, ready_to_transfer, notes)
values ('Scotty', 'M', 4, 'Y', 'Born in Guatemala'), 
('Jean', 'F', 5, 'Y', 'Alergic to lots of lava'), 
('Ororo', 'F', 7, 'N', 'Loves listening to Paula (Abdul)');