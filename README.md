# SETUP

copy env.sample to .env and edit the environment variables

# RUNNING

```
bundle install
bundle exec rake db:create
bundle exec rake db:schema:load
shotgun config.ru
```

#ADMINISTRATION

Currently there is no administrative interface.
But you can add/edit presentations on a course with
a graphical interface

1. First create a new course in the db
2. Then you can add a presentation to it on
   https://localhost:port/#/courses/:courseid/presentations/new
3. To edit a presentation you can go this url
   https://localhost:port/#/courses/:courseid/presentations/edit/:presentationid

#TODO

1. Add/Edit/Delete courses
2. Security
3. There is no asset management, images have to be hosted elsewhere
4. Tons of small bugs

# NOTES

If you are having problems on MacOS and Hombrew you may need to run this commands

```
brew install mysql
brew install openssl
bundle config build.mysql2 --with-mysql-config=/usr/local/Cellar/mysql/5.7.17/bin/mysql_config --with-ldflags=-L/usr/local/opt/openssl/lib --with-cppflags=-I/usr/local/opt/openssl/include
```
