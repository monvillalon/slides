class: left,top
class: center, middle
#Learning the Command Line


---
class: left,top
#Lets run some commands
##and see what happens


```bash
$ echo "Console says what?"
```

<small>This only works on MacOS</small>
```bash
$ say "Hello From the Command Line"
```

```bash
$ telnet towel.blinkenlights.nl
```

*echo* , *say* and *telnet* are **commands** everything else is an argument


---
class: left,top
#Anatomy of a command

```bash
COMMAND [-flags] [argument1] [argument2]
```

A command that does the same thing every time is not very useful.
That is why a command can accept **arguments** to change its
behaviour.

Arguments can take many forms
-  $ echo hello
-  $ echo "hello world"
-  $ cp source target
-  $ ls -l -a
-  $ ls -la
-  $ find . -name "*.txt"
-  $ ruby -v
-  $ ruby --version


---
class: left,top

#Navigating

###Knowing where you are
####Print Working Directory
```bash
$ pwd
/home/your_username/
```

###List folder contents
####Finding out what is available
```bash
$ ls
ANOTHER_FILE.txt     MYFILE.txt           YET_ANOTHER_FILE.txt

$ ls -l
total 0
drwxr-xr-x   5 your_username  staff   170 Oct  1 07:58 .
drwxr-xr-x+ 87 your_username  staff  2958 Oct  1 07:59 ..
-rw-r--r--   1 your_username  staff     0 Oct  1 07:58 ANOTHER_FILE.txt
-rw-r--r--   1 your_username  staff     0 Oct  1 07:58 MYFILE.txt
-rw-r--r--   1 your_username  staff     0 Oct  1 07:58 YET_ANOTHER_FILE.txt
```

---
class: left,top

#Lets create a folder, and move to it

**Create a folder**
```bash
$ mkdir my_folder
```

**Now we can move into it**
```bash
$ cd my_folder

$ pwd
/home/your_username/my_folder
```

**We can always go back**
```bash
$ cd /home/your_username

$ pwd
/Users/your_username/

$ cd test

$ pwd
/home/your_username/my_folder
```

---
class: left,top


#Navigating ( part II )

**Moving to your home**
```bash
$ cd 

$ pwd
/Users/your_username/
```

**Moving up**
```bash
$ cd test

$ pwd
/Users/your_username/test

$ cd ..

$ pwd
/Users/your_username/
```


---
class: left,top


#Working with files ( part I )

**Now lets create a file**
1. Open any editor, like **notes** on MacOS or **notepad** on Windows
1. Create a **MYFILE.txt** and some content to it

**Lets view it in the console**
```bash
$ ls -l
-rw-r--r--  1 your_username  staff  0 Oct  1 09:11 MYFILE.txt
```

**Lets see it's content**
```bash
$ cat MYFILE.txt
THIS IS A TEST
```

**There is more than one way so skin a cat**
```bash
$ less MYFILE.txt
```
to quit press **q**


---
class: left,top

#Working with files ( part II )

**Lets copy the file**
```bash
$ cp MYFILE.txt MYFILECOPY.txt

$ ls -l
-rw-r--r--  1 your_username  staff  15 Oct  1 09:16 MYFILE.txt
-rw-r--r--  1 your_username  staff  15 Oct  1 09:18 MYFILECOPY.txt

$ cat MYFILECOPY.txt
THIS IS A TEST
```


---
class: left,top

#Working with files ( part III )

**Lets rename a file**
```bash
$ ls -l
-rw-r--r--  1 your_username  staff  15 Oct  1 09:16 MYFILE.txt
-rw-r--r--  1 your_username  staff  15 Oct  1 09:18 MYFILECOPY.txt

$ mv MYFILECOPY.txt MYFILERENAMED.txt

$ ls -l
-rw-r--r--  1 your_username  staff  15 Oct  1 09:16 MYFILE.txt
-rw-r--r--  1 your_username  staff  15 Oct  1 09:18 MYFILERENAMED.txt
```


---
class: left,top

#Working with files ( part IV )

**Lets delete a file**
```bash
$ ls -l
-rw-r--r--  1 your_username  staff  15 Oct  1 09:16 MYFILE.txt
-rw-r--r--  1 your_username  staff  15 Oct  1 09:18 MYFILERENAMED.txt

$ rm MYFILERENAMED.txt

$ ls -l
-rw-r--r--  1 your_username  staff  15 Oct  1 09:16 MYFILE.txt
```

.important[Important:] Be careful! there is no Trash or Recycling bin in the console


---
class: left,top

#Working with files ( part V )

**Removing Directories**
```
$ cd 

$ ls -l
...
drwxr-xr-x    2 monvillalon  staff      68 Oct  1 09:33 test
...

$ rm test
rm: test: is a directory

$ rm -r test

$ ls -l
...

```
.important[Important:] Be careful! there is no Trash or Recycling bin in the console


---
class: left,top

#Wildcards

*Most Commands to respond to wildcards, so they work on more than one file at a time*

**List only text files**
```
$ ls -l *.txt
```

**Copy the contents of a directory**
```
$ mkdir backup
$ cp -R *.* backup
```

**Remove all text files**
```
$ rm *.txt
```

.important[Important:] Be careful! there is no Trash or Recycling bin in the console


---
class: left,top

#Hidden files

Hidden files start with a dot character ( **.** )
we can coax them out and see them by modifying
our ls command

```bash
$ cd
$ ls -la
```


---
class: left,top

#More useful commands ( Part I)


| Command                           | Usage                             | Example
|-----------------------------------|-----------------------------------|------------------------------------
| touch                             | Create an empty file              | touch MYFILE.txt
| pushd                             | Remember the current directory    | pushd
| popd                              | Go to the last directory saved    | popd
| exit                              | Exit the command line             | exit
| find                              | Find files                        | grep SEARCHFORTHIS FILE.txt
| grep                              | Search inside the files           | find . -name "*.txt"
| file                              | Find out the type of a file       | file MYTEXT.txt
| history                           | See the commands you have ran     | history
| head                              | See only the begining of a file   | head -n10 test.txt
| tail                              | See only the end of a file        | tail -n10 test.txt
| ln                                | Make a link to a file             | ln -s source.txt target.txt
| du                                | Get the size of a directory/file  | du -h .
| df                                | Get disk usage                    | df -h
| ps                                | See what is running               | ps
| top                               | See what is running, graphically  | top


---
class: left,top

#More useful commands ( Part II)

| Command                           | Usage                             | Example
|-----------------------------------|-----------------------------------|------------------------------------
| kill                              | Stop a program                    | kill PID
| whoami                            | See the current user              | whoami
| tar                               | Handle tar archives               | tar -xvzf mytar.tar
| sudo                              | Become root                       | sudo su
| man                               | Find documentation on a command   | man ls





---
class: left,top

#Pipes & Redirection

- Every thing is a file!!!
	- Files are files
	- Directories are files
	- Your usb thingy is a file
	- The output of a command is a file

- We can send the output of one command into another with pipes

- We can send the output of a file to disk file with redirection

- This what makes simple commands so useful, **composability**

```bash
$ echo "hello world" | grep "hello"
```

```bash
$ echo "LINE1" > test.txt
$ echo "LINE2" >> test.txt
$ cat test.txt
LINE1
LINE2
```


---
class: left,top

#Environment Variables

** Lets play with variables **
```
$ FAVORITE_COLOR=green
$ echo "I really like $FAVORITE_COLOR"
I really like green

$ FAVORITE_COLOR=blue
$ echo "I really like $FAVORITE_COLOR"
I really like blue
```

** See all the Environment variables **
```
$ env
```

---
class: left,top

#Background and Foreground


* This command will never stop, until stop with CTRL+C *
```
$ ping www.google.com
```

* Lets use the console, while it runs *
```
$ ping www.google.com &
```

* Well that didn't work as expected, lets try again *
```
$ ping www.google.com > out.txt &
$ fg
$ CNTR-Z
$ less out.txt
```


---
class: left,top

#We haven't been using the mouse
##Lets turn it up to 11

**CTRL+A** Cursor the start of a line

**CTRL+E** Cursor the end of a line

**CTRL+C** Stop the current program

**TAB**    Auto-completion


---
class: left,top
#Permissions

** Since everything is a file everything has permissions
and an owner **

```
$ ls -l
total 8
-rw-r--r--  1 monvillalon  staff  18 Oct  1 09:45 TEST.txt
```

---
class: left,top
#Resources

##http://cli.learncodethehardway.org/book/