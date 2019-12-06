insert into users_table(username, password, first_name, last_name) values (${username}, ${password}, ${first_name}, ${last_name})
returning id, username, first_name, last_name