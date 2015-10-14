class: center,middle
##Ruby I
---
class: left,top
##First Ruby Program

```rub
puts 1 + 1
```

###This is the same as 

```rub
puts 2
```

puts writes whatever is after it

---
class: left,top
##Numbers ( Part I )

In programming, there are two kinds of numbers

###Integers
- 1
- 91
- 9999
- 1241120101
- 124182321019199111833111131451

###Floats

- 0.1222
- 99.11
- 1011.11

In practice floats are rarer, that doesn't mean we don't use them.
An email client shows you have 3 unread emails, not 3.3 emails.
---
class: left,top
##Numbers ( Part II )

###1120101 is hard to read

Ruby allows us to give write numbers like this to increase readability

###1_120_101 
---
class: left,top
##Numbers ( Part III )

###You can do arithmetic with numbers

```rub
puts 1.0 + 2.0
puts 2.0 * 3.0
puts 5.0 - 8.0
puts 9.0 / 2.0
```

```rub
puts 1 + 2
puts 2 * 3
puts 5 - 8
puts 9 / 2
```

1. Working with floats gives you a float
1. Working with integers gives you integers
1. What happened with 9/2?
---
class: left,top
##Numbers ( Part IV )

###What is integer division good for

You need to go to the movies and have **$9**,
tickets cost **$2** how many tickets can you
buy?

**9/2 = 4**

If you want to know what the remainder is, or how much money
is left, you can use the modulo operator % to know

```rub
puts 9 % 2
```

---
class: left,top
##Intermission: Whitespace

Whitespace gets collapsed, a million spaces are considered the same
as single space.

This three lines of code are equivalent

```rub
puts 1 + 1
puts 1+1
puts         1           +             1
```

---
class: left,top
##Numbers ( Part V )

Just like math we can create more complex expressions

```rub
puts (360 / 7 ) + 1
```

Operators in ruby follow the same laws of precedence
that you are  from math. Just as in math
we can use parenthesis to disambiguate expressions

```rub
puts (360 / 7) + 1
puts 360 / (7 + 1)
```
---
class: left,top
##Intermission: Expressions

You can think of an expression as something that stands for a value

Examples of expressions are:

- 1 + 1
- 2 * 2
- ((2 * 5) / 3) + 1

In ruby, everything is an expression, in other words, everything
stands in for a value. For know just keep this in mind, it will
become relevant soon.

---
class: left,top
##Try it! ( Part I )

###How can we use ruby to determine the number of hours in a year?

1. A year has 365 days
2. A day has 24 hours
---
class: left,top
##Try it! ( Part II )

###How can we use ruby to determine the number of hours in a year?

1. A year has 365 days
2. A day has 24 hours

```rub
puts 365 * 24
```
---
class: left,top
##Strings ( Part I )

We learned about numbers, but what about text?
In programming, we call a list of letters a *string* ( it is just
a bunch of letters strung together )

We can represent a string by enclosing it in quotes

```rub
puts 'Hello World'
puts ''
puts 'Goodbye!'
```

A string can have, letters, punctuation, spaces, numbers and even be empty. 
We call that a string that contains nothing an *empty string*
---
class: left,top
##Strings ( Part II )

What if you need to use the quote character in a string?
You can do this

```ruby
puts 'It\'s Raining'
```

We call this escaping, a slash in a string means that the next
character is special.

What if you need to use the slash?
```ruby
puts 'red\\green'
```

Ruby understands several escaped characters

| Escape Code | Result        |
|-------------|---------------|
| \\          | Slash         |
| \'          | Single Quote  |
| \"          | Double Quote  |
| \n          | New Line      |
| \t          | Tab           |
---
class: left,top
##Strings ( Part III )

Up until now we have been using single quotes
to delimit our strings but ruby offers
several ways. The two most commons are
single and double quotes

```ruby
puts "Hello"
puts 'Hello'
```

But in reality we can use any delimiter we want

```ruby
puts %!This is my String!
puts %?This is my String?
puts %(This is my String)
puts %[This is my String]
```

If we use a character that has a natural counterpart, we use that
to close the string.


---
class: left,top
##Strings ( Part IV )

Just as you can do arithmetic on numbers, you can also do arithmetic on strings! 
Well, sort o you can add strings, anyway. 
Let’s try to add two strings and see what puts does with that:

```rub
puts 'I like' + 'apple pie.'
```

Noticed something wrong? We are missing a space
```rub
puts 'I like ' + 'apple pie.'
```

Another name for adding strings is concatenation

---
class: left,top
##Strings ( Part V )

Let us try to multiply strings

```ruby
puts 'The pig goes: '
puts "Oink! " * 3
```

This makes sense since after all if you think about it, multiplication is just
adding repeatedly
```ruby
puts "Oink! " + "Oink! " + "Oink! "
```


---
class: left,top
##Strings And Numbers ( Part I )

We just learn that there is a difference between
```ruby
puts 12 + 12
puts "12" + "12"
```

What happens if we try this?
```ruby
puts "12" + 12
```
You should get an error:

> **no implicit conversion of Fixnum into String**

This is just ruby letting you know that adding a string and a number
doesn't make sense

---
class: left,top
##Strings And Numbers ( Part II )

Other things that don't make sense
```ruby
puts 'Fred' * 'John'
puts 3 * 'Oink! '
```
---
class: left,top
##Variables ( Part I )

Up until know if we wanted to print something twice
we had to type it twice

```ruby
puts "Hello World"
puts "Hello World"
```

It would be nice if we can type it once, and hang on to it.
To store something in the memory of the computer you have
to give it a name. We call the names variables

```ruby
message = "Hello World"
puts message
puts message
```

Whenever you want to do something with the value (**"Hello World"**)
we can use the variable (**message**) instead

We say that the variable **message** is pointing to the value **Hello World**
---
class: left,top
##Variables ( Part II )

We call them variables because the value they are pointing can change

```ruby
composer = "Mozart"
puts composer + " was awesome!"

composer = "Beethoven"
puts "But I prefer " + composer
```

Variables can point to any kind of object, not only strings. In fact they
can change type midway a program

```ruby
my_variable = "Hello "
puts my_variable

my_variable = 10
puts my_variable
```
---
class: left,top
##Variables ( Part III )

Variables point to values, not to other variables. Let's try this

```ruby
var1 = "One"
var2 = var1

puts var1
puts var2

puts ""

var1 = 1
puts var1
puts var2

```

The value of two, didn't change because it is still pointing to its previous
value of "One"
---
class: left,top
##Classes and Objects

We know of three types of values
1. Integers
2. Floating Point Numbers
3. Strings

We call this things **classes** or **types** and a thing of that 
type an **object** or **instance**

1. We say that **3** is an object of the class **Fixnum** ( rubies name for integers)
2. We way that **3.0** is an object of the class **Float**
3. We way that **"3"** is an object of the class **String**




---
class: left,top
##Converting ( Part I )

Previously we got an error when trying to run a code like this

```ruby
puts "My Age is " + 34
```

**TypeError: no implicit conversion of Fixnum into String**

This means that it makes no sense to add **Fixnums** and **Strings**

What we need is the **String** version of an object and we do that
by adding **.to_s** after it.

```ruby
puts "My Age is " + 34.to_s
```

---
class: left,top
##Converting ( Part II )

Similarly, we can get the Float and Integer versions of an object
with **to_i** and **to_f** respectively

```ruby
puts 7.to_f
puts "15".to_f
puts "99.99".to_i
puts "5 is the coolest number".to_i
puts "The coolest number is 5".to_i
puts "A stringy string".to_i
puts "A stringy string".to_f
puts "A stringy string".to_s
```
---
class: left,top
##Revisiting Puts

The following three lines all do the same thing
```ruby
puts 20
puts 20.to_s
puts '20'
```

This is is because the **s** in put**s** stands for string.
Puts uses the .to_s method of the object you are giving it
to put it in the console.

Eventually, we will be creating our own classes, maybe
to represent a Song or a Car. And we can use this trick
to print them to the console.
---
class: left,top
##Gets ( Part I )

If **puts** means *put string*, **gets** means *get string*

Let's try this
```ruby
puts gets
```
---
class: left,top
##Intermission: Expressions II

Remembered that everything is an expression?
in the previous program **gets** stands for an object.
**puts** needs an object to work with.
---
class: left,top
##Gets ( Part II )

Let's try the following program

```ruby
puts "Hello there, What is your name?"
name = gets
puts "Hello, " + name
puts "It was " + name + " wasn't it?"
```

---
class: left,top
##Gets ( Part III )


You might have noticed, that the last line has an extra line on it.
This is because the string that gets gave us contains a new line at the
end of it. We can fix it

```ruby
puts "Hello there, What is your name?"
*name = gets.chomp
puts "Hello, " + name
puts "It was " + name + " wasn't it?"
```

Just like adding **.to_s** at the end of an object gives us the string version.
Adding **.chomp** at the end of a String gives us the 
**without newline at the end version**

We call **.to_s** and **.chomp** methods.

Some methods work on all objects, like **.to_s** and some like **.chomp**
only work on strings.

---
class: left,top
##Try it! ( Part II )

###Full name greeting, create a program that asks for the first name and last name separately and prints it

###Write a program that asks for a person’s favorite number, and then add one to it, and suggest that as a new favorite number since it's bigger
---
class: left,top
##Methods ( Part I )

A method is: "Something that does something". We've seen some
methods like **puts** and **gets** but really we have been using
a lot more.

Let us say we have a new kind of object of type **"clock"**

In English we would say
> The Clock ticks

In ruby we would write
> clock.tick

If objects are *nouns* methods are **verbs**
and we say that we called the tick method on clock
---
class: left,top
##Methods ( Part II )

This are some of the methods we have seen so far:
1. puts
1. gets
1. chomp
1. to_s
2. to_i
3. to_f


---
class: left,top
##Methods ( Part III )

Just like every verb needs a noun, every method needs an object.

When we wrote
```ruby
puts 3 + 4
```

Ruby translated that for us to
```ruby
puts 3.+( 4 )
```

Or in other words for the object **3** call the method **+** with the object
**4**

It isn’t very pretty, so we won’t ever write it like that; 
however, it’s important to understand what is really happening

---
class: left,top
##Methods ( Part IV )

This also explains why this works

```ruby
puts "Oink , " * 3
puts "Oink".*( 3 ) 
```

and this doesn't
```ruby
puts 3 * "Oink "
puts 3.*( "Oink" ) 
```

The String class knows how to replicate itself by a number, but the Fixnum
class doesn't know how to multiply itself with a string.
---
class: left,top
##Methods ( Part V )

If all the methods need an object, what about **puts** and **gets**
There is always an object, in this case, is just implied.
Even your program is an object. 
You can always tell on what object you are ( more on this later)
by using self.

```ruby
puts self
```
---
class: left,top
##String Methods ( Part I )

```ruby
puts "Hello World".reverse
puts "Hello World".length
puts "Hello World".upcase
puts "Hello World".swapcase
puts "Hello World".downcase
puts "hello world".capitalize
```
---
class: left,top
##Try it! ( Part III )

###Angry boss program: write a program that echoes whatever you tell him capitalized, and with "YOU ARE FIRED!" concatenated
```bash
Did you want to tell me something?
> Can I get a raise?
CAN I GET A RAISE?! YOU ARE FIRED!
```
---
class: left,top
##String Methods ( Part II )

```ruby
line_width = 40
puts "Hello World".center( line_width )
puts "Hello World".ljust( line_width )
puts "Hello World".rjust( line_width )
```
---
class: left,top
##Try it! ( Part IV )

###Lets write a program that prints a Table of Contents
```bash
                     Table of Contents                      

Chapter 1: Get Started                                Page 1
Chapter 2: All about cats                             Page 3
Chapter 3: The parts of a bicycle                     Page 4
```
The contents of the table of contents are not important, just the alignment
