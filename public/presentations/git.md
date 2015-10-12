class: center,middle
#Learning Git
---
class: left,top
#About Version Control


###What is "version control"?
Version control is a system that records changes to a file or set of files over 
time so that you can recall specific versions later,
how they changed, when and by whom.

### Why should I care? 
Nobody is forcing you, except maybe me. But it makes
the process of writing software easier.

1. It gives you a timeline, of when things changed and why
2. It allows you to have several versions of the same code
   concurrently, lets say you are working on version 2 of your
   awesome software but in the wild there is version 1. You
   can work on both of them at the same time and share
   work between them
3. It allows collaboration between more than one person
4. It is an essential tool to be great software developer
---
class: left,top
#Installing Git

You can install git by downloading and running
the installer for your platform form

##https://git-scm.com/downloads
---
class: left,top
##Setting up Git

##Lets let git know who we are

The first thing we have to do, is to let
git know who we are.

To do this globally we run the following commands:

```bash
$ git config --global user.name "Your Name"
$ git config --global user.email "your_email@whatever.com"
```

You only have to do this once, if you omit the **--global** flag
you can set this up on per repository basis.
---
class: left,top
#Lets create a git repository ( Part I )

Git uses the term **repository** for a collection of files it manages.
A git repository is just a folder. It just happens that git tracks
information about its changes. In order to convert a regular folder 
into a git repository we need to initialize it.

So lets create a folder so we can "git-isize" it!

```bash
$ cd
$ mkdir git_tutorial
$ cd git_tutorial
```

All interactions with git are done thru the **git** command
so while on the git_tutorial folder, lets try to call git

```bash
$ git status
fatal: Not a git repository (or any of the parent directories): .git
```

We get an error, because git doesn't know about this folder yet.
In other words is not a repository









---
class: left,top
#Lets create a git repository ( Part II )

To make git aware of the folder we need to call this command on it

```bash
$ git init
Initialized empty Git repository in /Users/your_username/git_tutorial/.git/
```

Now we can sucesfully run git commands on it
```bash
$ git status
On branch master

Initial commit

nothing to commit (create/copy files and use "git add" to track)
```

---
class: left,top
#Lets create a git repository ( Part III )

Git doesn't interfere with your files directly, it has a "database" 
of all the revisions of your files in a hidden directory called **.git**
you can see it if you run

```bash
$ ls -la
total 0
drwxr-xr-x   3 monvillalon  staff   102 Oct  4 18:31 .
drwxr-xr-x+ 93 monvillalon  staff  3162 Oct  4 18:33 ..
drwxr-xr-x   9 monvillalon  staff   306 Oct  4 18:32 .git
```

```bash
$ cd .git
$ ls -la
total 24
drwxr-xr-x   9 monvillalon  staff  306 Oct  4 18:32 .
drwxr-xr-x   3 monvillalon  staff  102 Oct  4 18:31 ..
-rw-r--r--   1 monvillalon  staff   23 Oct  4 18:31 HEAD
-rw-r--r--   1 monvillalon  staff  137 Oct  4 18:31 config
-rw-r--r--   1 monvillalon  staff   73 Oct  4 18:31 description
drwxr-xr-x  11 monvillalon  staff  374 Oct  4 18:31 hooks
drwxr-xr-x   3 monvillalon  staff  102 Oct  4 18:31 info
drwxr-xr-x   4 monvillalon  staff  136 Oct  4 18:31 objects
drwxr-xr-x   4 monvillalon  staff  136 Oct  4 18:31 refs
```
---
class: left,top
#Un "git-tting" a folder

There is no reason for you to edit, or change any files in your
**.git** folder but if you ever want to remove git from a folder
you only have to delete the .git hidden directory.


---
class: left,top
#Lets add a file ( Part I )

Now use your favorite editor to create a file named
**COLORS.txt** and save it on the **git_tutorial** folder

For example you can create the file with the following content
```bash
Red
Green
Blue
Yellow
```

After saving the file, return the terminal, 
we should see the file by running 
`ls -la`

```bash
$ ls -la
total 8
drwxr-xr-x   4 monvillalon  staff   136 Oct  4 19:13 .
drwxr-xr-x+ 93 monvillalon  staff  3162 Oct  4 19:15 ..
drwxr-xr-x   9 monvillalon  staff   306 Oct  4 19:13 .git
-rw-r--r--   1 monvillalon  staff     7 Oct  4 19:05 COLORS.txt

```



---
class: left,top
#Lets add a file ( Part II )

Now that we have a file, we can run **git status** again

```bash
$ git status
On branch master

Initial commit

*Untracked files:
  (use "git add <file>..." to include in what will be committed)

*	COLORS.txt

nothing added to commit but untracked files present (use "git add" to track)
```

Git is letting us know there is an **Untracked file** called **COLORS.txt**.

In order for git to manage this file it has to **track it**. 
Helpfully, he tells us how

```bash
$ git add COLORS.txt
```

---
class: left,top
#Lets add a file ( Part III )

Now that git is **tracking the file** we can 
ask git again about our repository.

```bash
$ git status
On branch master

Initial commit

*Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

*	new file:   COLORS.txt

```

Git is telling us that we are not done yet! And that we have
**Changes to be commited**

What we have just done is by running `git add`, is to add the file
to our **staging area**. This is where we prepare to do a **commit**, 
which we will explain shortly.

---
class: left,top
#Commiting ( Part I )

In reality, git doesn't track files. It tracks changes.
A change can span several files in our repository or it can
can be a single line or paragraph inside of any of those files.

That is why we need a **staging area** so we can add as many changes
as we want and wrap them in a **commit** (NOUN).

For git to actually wrap all those changes we have done
( right now its just one, adding the file **COLORS.txt** ),
we need to **commit** (VERB).

All commits have some information asociated with them
1. An uniquely generated identifier ( called the commit hash )
2. When it was done
3. Who did it ( we told this to git, a little while ago )
4. A message explaining the change

All this things, git figure out on its own except for #4 so we need to provide
a message for each commit for git to be happy.


---
class: left,top
#Commiting ( Part II )

To commit, we use **git commit** and use the **-m** 
to provider our commit message. This message should explain
the reason for our change.

```bash
$ git commit -m "Added COLORS.txt"
[master (root-commit) 39522d1] Added COLORS.txt
 1 file changed, 1 insertion(+)
 create mode 100644 COLORS.txt
 ```
 
 If we query git again for the status of our repository
 git tells us everything is done and ready

```bash
$ git status
On branch master
*nothing to commit, working directory clean
```

You can think of it as your folder 
( also refered as your **Working Copy** ) and
the **repository** being in sync
---
class: left,top
#Changing a File ( Part I )

Use your favorite editor, again to add a new color to the
**COLORS.txt** file

For example you can create the file with the following content
```bash
Red
Green
Blue
Yellow
*Purple
```

Running git status

```bash
On branch master
*Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

*	modified:   COLORS.txt

no changes added to commit (use "git add" and/or "git commit -a")
```


---
class: left,top
#Changing a File ( Part II )

Previously, when we created a file; git told us that
it was **untracked**. Now, git tells us that
there are **Changes not staged for commit**. 

This is git way of telling us that our **Working Copy** ( our folder )
and the git repository are no longer in sync.

Since we wan't to persist this change for the future, git tells us what
to do, we need to run `git add` again

This means that `git add` has two purposes
1. To track a file
2. To tell git to add the file to the **Staging Area** 
   for us to do a commit in the near future.
   

---
class: left,top
#Changing a File ( Part III )

Lets oblige
```bash
$ git add COLORS.txt
```

```bash
$ git status
On branch master
*Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

*	modified:   COLORS.txt
```

```bash
$ git commit -m "Added the color purple, not the movie"
[master 6e96c1a] Added the color purple, not the movie
 1 file changed, 1 insertion(+)
```
```bash
$ git status
On branch master
nothing to commit, working directory clean
```
---
class: left,top
#The stages of a file ( Part I )

Basically, every time we do a meaningful unit of work to our **Working Copy** ( folder )
and we want to commit it:

1. We Track any new files, by using `git add`
2. Add changes files to our stagin copy, again using `git add`
3. Then we commit

So a file can be
1. Untracked:  git doesn't know anything about it
2. Unchanged:  is in sync with our repository
3. Changed:    our working copy has a different file than the repository
4. Staged:     we told git, "everything is awesome and we plan to commit it soon"

---
class: left,top
#The stages of a file ( Part II )

Weirdly enough a file can be in more than one stage at once!

Try this:
*the echo commands are just adding a line to the end of the file, quickly*

```bash
$ echo "Orange" >> COLORS.txt
$ git add COLORS.txt
$ echo "Gray" >> COLORS.txt
$ git add COLORS.txt
$ git status
On branch master
*Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

*	modified:   COLORS.txt

*Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

*	modified:   COLORS.txt

```
---
class: left,top
#The stages of a file ( Part III )

You can think of what is happening as if git
created a copy of the file we added at the time
that we added it. 

This new virtual file was added to the **Staging Area**.
When when we changed it, it became another file since
its not the same as it was.

If we were to commit now, the **Staging Area** version is the one that would be stored
in the repository. The other one would keep arround until we stage it.

Is easy to resolve this weirdness, we just run `git add` again
then we can commit all our changes.

```bash
$ git add COLORS.txt
$ git commit -m "Added some more colors"
```

---
class: left,top
#Lets ask Git some questions ( Part I )

We can ask git about the history of our repository with the 
`git log` command

```bash
$ git log -- COLORS.txt
commit 6e96c1ae6636198b35e518e4b6a7b2b2bb890816
Author: Your Name <youremail@email.com>
Date:   Sun Oct 4 19:55:09 2015 -0400

    Added the color purple, not the movie

commit 39522d11ea044e63fb3372bfccd0d575af8ad0a4
Author: Your Name <youremail@email.com>
Date:   Sun Oct 4 19:34:58 2015 -0400

    Added COLORS.txt
```

We can also ask about a specific file, althought right now
the changes are the same 

```bash
$ git log -- COLORS.txt
```

---
class: left,top
#Lets ask Git some questions ( Part II )

This command tells us the difference between or our *Working Copy*
and our next to last commit

```bash
$ git diff HEAD~1
diff --git a/COLORS.txt b/COLORS.txt
index 5836e7e..00b4f8f 100644
<hr />a/COLORS.txt
+++ b/COLORS.txt
@@ -1,2 +1,4 @@
 Red
Green
Blue
Yellow
Purple
*+Orange
*+Gray
```

---
class: left,top
#Lets ask Git some questions ( Part III )

What was that `HEAD~1` all about?

Do you rememeber that every commit in git has an unique identifier, 
that we we call the **commit hash**? 

You can see them when you run `git log`

Well we could have used a command like to get to the same information
```
$ git diff 6e96c1ae6636198b35e518e4b6a7b2b2bb890816
```

But git helps us here by having an alias to the latest 
and greatest commit called `HEAD`

`HEAD~1` stands for the commit before head

`HEAD~2` stands for two commits back
---
class: left,top
#Lets ask Git some questions ( Part IV )

There is another informational command we can run

```bash
git blame COLORS.txt
```

What does it tell you?



---
class: left,top
#Removing and Renaming Files ( Part I )

We remove files diferently depending on where
they are the **Unstaged** or **Staged**

Luckily git tells us what to do if we run
`git status`

```
$ echo "Pink" >> COLORS.txt
$ git add COLORS.txt
$ git status
On branch master
Changes to be committed:
*  (use "git reset HEAD <file>..." to unstage)

	modified:   COLORS.txt

```


---
class: left,top
#Removing and Renaming Files ( Part II )

Running `git reset` unstages the file, here we see that `HEAD` again.
By running the command, we are telling git to reset the file to the version of 
the last know unstaged version.

```
$ git reset HEAD COLORS.txt  
Unstaged changes after reset:
M	COLORS.txt

$ git status
On branch master
*Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   COLORS.txt

no changes added to commit (use "git add" and/or "git commit -a")
```
---
class: left,top
#Removing and Renaming Files ( Part III )

Now that the file is unstaged, we might want to have the version
the last commited version. The one were we didn't have "Pink" in our file
run `git status`, git will tell you what to do.

```
$ git checkout -- COLORS.txt
```

This however doesn't untrack the file, to have git forget about the file
we need to call

```
$ git rm COLORS.txt
$ git status
On branch master
Changes to be committed:
*  (use "git reset HEAD <file>..." to unstage)

*	deleted:    COLORS.txt

$ git reset HEAD COLORS.txt
$ git checkout COLORS.txt
```

Notice that the file is gone, we can unstage the change with `git reset` or commit
and get it back with `git checkout`
---
class: left,top
#Removing and Renaming Files ( Part III )

Renaming a file is the same as removing and adding the file again,
run this commands to see what happens

```bash
$ mv COLORS.txt MYCOLORS.txt
$ git status
$ git add MYCOLORS.txt
$ git status
$ git rm  COLORS.txt
$ git status
$ git commit -m "Renamed file to MYCOLORS.txt"
$ git status
```

Or a little bit simpler with
```
$ git mv COLORS.txt MYCOLORS.txt
```


---
class: left,top
#Replace Local Changes


If you have a file and you want to revert it to the 
last commited version, you can use `git checkout` for 
that

```bash
$ echo "NOT A COLOR" >> COLORS.txt
$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   COLORS.txt

no changes added to commit (use "git add" and/or "git commit -a")
$ git checkout COLORS.txt
```

No we have the lastest commited version
---
class: left,top
#Branching & Merging ( Part I )

In the introdution I mentioned that you can work on more than one 
version of your files at the same time. We do this by using branches

Let say, we want to manipulate several lists. Instead of only colors,
we are now we are also interested in animals, but we
want to have a copy of our files as they now stand in case
we need them.  

We could make a backup, but this get unruly fast.

Intead we will create a branch

First of all, we are already have a branch and its called `master`
we can verify that this is the case by asking git to
give us the list of all our branches

```bash
$ git branch
* * master
```
Every git repository comes equipped with this branch by default.

---
class: left,top
#Branching & Merging ( Part II )

To create a branch is easy
```bash
$ git branch animals
$ git branch
  animals
* * master
```

We created it but we are not there yet.
We know that we are in the master branch
because of the asterisk * besisdes master on the 
git branch output.

Another way to know where we are is to run the handy `git status` 

```bash
$ git status
* On branch master
nothing to commit, working directory clean
```

it has always been there, we just didn't notice

---
class: left,top
#Branching & Merging ( Part III )

To change to a specific branch, we use `git checkout` again

```bash
$ git checkout animals
* Switched to branch 'animals'
```

and we can double check that we moved with `git brach` or `git status`

Right now this branch is identical to `master`
So lets add our new animal list, use your favorite editor
or the following commands

```bash
$ echo "Dog"      >> ANIMALS.txt
$ echo "Cat"      >> ANIMALS.txt
$ echo "Elephant" >> ANIMALS.txt
```

and to stating area and commit
```bash
$ git add ANIMALS.txt
$ git commit -m "Added animal list"
```

---
class: left,top
#Branching & Merging ( Part IV )

Now our `master` and `animals` branch have diverged
lets see what happens when we switch back to master

Lets see our files first
```bash
$ ls 
ANIMALS.txt COLORS.txt
```

```bash
$ git checkout master
```

The file is gone! But only from master

```bash
$ ls
COLORS.txt
```

```bash
$ git checkout animals
$ ls
ANIMALS.txt COLORS.txt
```
---
class: left,top
#Branching & Merging ( V )

We can add more animals to our list and commit it
```bash
$ echo "Zebra"    >> ANIMALS.txt
$ echo "Canary"   >> ANIMALS.txt
$ git add ANIMALS.txt
$ git commit -m "Added some more animals"
```

we can see the difference between the branches, with the 
`git diff` command
```bash
$ git diff master --name-only
```

or to see the changes in the text
```bash
$ git diff master
```

When we feel our list is ready we can `merge` the changes
back to `master`







---
class: left,top
#Branching & Merging ( VI )

There are two branches that are going to be merged, `master` and `animals`
the direction of the merge is important

Are we adding the list of changes of `master` to `animals` or vice-versa?

Since animals is the one with the changes this is the `source`;
master is the `target`

To be that target of a merge you have to be in that branch
so lets do that

```bash
$ git checkout master
```

then we issue the command
```bash
$ git merge animals
Updating 395361a..e8b6cb0
Fast-forward
 ANIMALS.txt | 3 +++
 1 file changed, 3 insertions(+)
 create mode 100644 ANIMALS.txt
```

You can verify that the changes are there with `ls -la`
---
class: left,top
#Branching & Merging ( VII )

Once we we finished working on a feature or list
the branch server no usefull purpose
but to clutter our `git branch` output

to delete it we run
```bash
$ git branch
  animals
** master

$ git branch -d animals
Deleted branch animals (was f074c52).

$ git branch
** master
```

Git will give a warning if the branch has not been fully merged,
so this pretty safe to do. This assures us that our changes
live somewhere.

---
class: left,top
#Branching & Merging ( VIII )

Nothing prevents us of working on more than two or
three branches at a time, one for each "Feature"

Branches are really cheap in the Git world, they take
almost no space and they have almost no performance impact.


---
class: left,top
#Conflicts ( Part I )

Not everything is perfect all the time, sometimes
we change the same thing in two different branches
and git doesn't now how to merge our changes.

This results in a conflict.
Lets create one!

The boss called, and he gave us a list of missing entries
in our lists. Lets create a branch to manage those changes
and `checkout` to it. We can do it, in one go by using the `-b` 
flag

```bash
$ git checkout -b bosschanges
$ git branch
** bosschanges
  master
```

We are going to use another trick and pass `-A` got `git add`
this means add all, basically anithing that can be moved
to the stating area, will.
```bash
Then we can do the changes
echo "Lion"    >> ANIMALS.txt
echo "Magenta" >> COLORS.txt
git add -A
git commit -m "Implemented Boss Changes Part I"
```

---
class: left,top
#Conflicts ( Part II )

We were halfway between adding our boss requests
when he/she calls again. A client has notified us that
they can't believe Raccoons are not in our list.

This needs to be fixed NOW!

We can assume that when things are in master,
the client has access to them.

Since we are in a hurry we can compress `git add -A` and `git commit`
into a big command by using the `-a` flag on commit

```bash
git checkout master
echo "Raccoon"    >> ANIMALS.txt
git commit -a -m "FIX: Added Racoon to animals"
```

Now back to work
```bash
git checkout bosschanges
echo "Fly"    >> ANIMALS.txt
git commit -a -m "Finished Boss Changes"
```

---
class: left,top
#Conflicts ( Part III )

Now we are done and we are ready to release or new list
but we don't want to loose the Racoon change or our
client would really get mad.

No worries, Git will merge it for us, lets try

```bash
$ git checkout master
$ git merge    bosschanges
$ Auto-merging ANIMALS.txt
CONFLICT (content): Merge conflict in ANIMALS.txt
Automatic merge failed; fix conflicts and then commit the result.
```

Well maybe worry a little, but not much.

---
class: left,top
#Conflicts ( Part IV )

So we have a conflict!, it may seem to you that there is none.
But the thing is that there are two possible versions
of the last lines of the ANIMALS.txt. Is it
Raccoon or Fly? To us order isn't important, but git doesn't 
know that.

Lets ask git


```bash
$ git status
On branch master

* You have unmerged paths.
  (fix conflicts and run "git commit")

Changes to be committed:

	modified:   COLORS.txt

Unmerged paths:
  (use "git add <file>..." to mark resolution)

*	both modified:   ANIMALS.txt
```

Notice that we have more than one change, but only ANIMALS.txt 
is conflicted
---
class: left,top
#Conflicts ( Part V )

Lets view the contents of the **ANIMALS.txt**
it should look something like this

```
Dog
Cat
Elephant
<<<<<<< HEAD
Raccoon
=======
Lion
Fly
>>>>>>> bosschanges
```

the `>>>>>>>` and `<<<<<<<` markers are put there by git to 
let us know where the conflict is, and what branch was the origin
of that change

---
class: left,top
#Conflicts ( Part VI )

After fixing the file we end up with something like this

```bash
Dog
Cat
Elephant
Raccoon
Lion
Fly
Raccoon
```

Once we fix the file we can let git know with:
```bash
$ git add ANIMALS.txt
$ git commit -a -m "Merging boss changes" 
```

Notice that we did a commit. A merge is just a big commit,
just that when something goes wrong we have to help
git with it.


---
class: left,top
#Stashing

We did a lot of hard work to do a conflict. Working alone
this is rare, an easier thing we might have done to prevent
the conflict is stashing.

Stashing is reverting the **working copy** to its last commited
state and then stashing the changes somewhere so we 
can add them later.

Normally when we do a change in a branch we can not
change out of it until we commit.  But we can stash the changes

```bash
$ git stash
```

Then git allows us to move to another branch, do something there.
Later we can return and call 

```
$ git stash apply
```

to apply the changes we stashed



---
class: left,top
#Tagging

Tagging is the process of giving a commit a meaningful name.
Nomally this used with a version number

To create a tag, we use
```bash
$ git tag v1.0
```

To view tags we use
```bash
$ git tag
v1.0
```

This is the preferred way of marking a milestone, instead
of leaving branches hanging arround

If we ever need to revert to the point when a tag
was created, we can use `git checkout` as it where a branch

```bash
$ git checkout v1.0
```

---
class: left,top
#Push/Pull/Clone ( Part I )

Up until now we have been working locally and nobody
has helped us with managing our lists. But other
projects are more complex and more than one person
works on them at the same time

So how can we use git to work together?

There are several services that help us with this dilemma 
most noticeably GitHub.com

Github allows us to host a copy of our repository in a way
that is accesible via the internet. Each repository in github
has an url where we can get a copy of it.

---
class: left,top
#Push/Pull/Clone ( Part II )

In order to proceed we need to
1. Create a Github.com account
2. Setup an ssh key
3. Create a new repository

Once we created the repository we can find
the url that github assigned to it
on the sidebar of the repository page.

Please note that unless you have a paid account
all repositories in GitHub are public and anybody can
read them.

To get a copy of the repository locally we run
the command

```bash
$ git clone git@github.com:YOURUSERNAME/YOURREPONAME.git
```

This should create a local repository just like if you used `git init`



---
class: left,top
#Push/Pull/Clone ( Part III )

The repository we just cloned is linked with the github
we can verify this by running

```bash
$ git remote -v
origin	git@github.com:YOURUSERNAME/YOURREPONAME.git (fetch)
origin	git@github.com:YOURUSERNAME/YOURREPONAME.git (push)
```

This output tells us that we have a `remote` called 
*origin* that can be found at **git@github.com:YOURUSERNAME/YOURREPONAME.git**

A remote is like an extension of our local repository. We can commit, 
merge and even diff from it.

To check how this works we need to do some things
1. Create some files
2. Add them
2. Commit them

---
class: left,top
#Push/Pull/Clone ( Part IV )

Once we have some commits under our belt we can share them 
and contacting the mothership like this:

```bash
$ git push origin master
```

To get the latest and greatest, you would need a collaborator
or another repo to test this out, you can call

```bash
$ git pull origin master
```

This is two commands are basically a merge, just that the
other branch is not in your computer. In fact you can shorten this commands to 
```bash
$ git pull
$ git push
```

git push and git pull will fill in the details for you.

The reason I used the longer version was to stress that
you can have more than one remote, origin is just the default. 
And the second master refers another branch is just on the orgin


---
class: left,top
#.gitignore

Some times you don't want git to even bug you
about a file that it isn't tracking. You can
create a **.gitignore** file on any folder
inside the repository and write expressions to 
ignore this files

For example you can add this to ignore
those pesky .DS_STORE files that are everywhere
on a MacOS system

Example:
```
.DS_STORE
```
---
class: left,top
#Getting help

You can ask git about any of this commands
by calling


``git help [command]``

for example:

``git help log``

It will tell you in excrutiating detail all the things
it can do.
---
class: left,top
#Resources

##Git Inteactive tutoial
###https://try.github.io/levels/1/challenges/1

##Learn git branching
###http://pcottle.github.io/learnGitBranching/

##Githug game
###https://github.com/Gazler/githug