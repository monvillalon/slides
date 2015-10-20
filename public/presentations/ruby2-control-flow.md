class: center,middle
##Ruby II - Control Flow
---
class: left,top
##What is Control Flow

Up to this point, our programs have been so flat and predictable. Each time we run them, 
we’ll get pretty much the same experience

What we need is a way to change the direction
of the program to achieve different results.

---
class: left,top
##Comparison Methods ( Part I )

We first need to understand the comparison methods.
if we run this program we get

```rub
puts 1 < 2
puts 2 > 1
puts 5 >= 5
puts 4 >= 5
```

```bash
$ ruby comparison.rb
true
false
true
false
```


---
class: left,top
##Comparison Methods ( Part II )

Up until know we known of three classes of objects
**Fixnum**, **Float** and **String**, we just discovered
two more

**TrueClass** and **FalseClass**, both of this classes
have one and only one object of their type. They are always available
and they are **true** and **false**.

```rub
puts true
puts true.to_s
puts false
puts false.to_s
```

This should be no surprise since **1** is an object of
type **Fixnum** and it is also always available.

---
class: left,top
##Comparison Methods ( Part III )

Of course just like arithmetic we can use
the comparisson methods on Strings and Floats

```rub
puts 4.5 < 5.0
puts 'dog' > 'cat'
```

And we can miss and match some types
```rub
puts 4.5 < 5
```

But others give errors
```rub
puts 4 > 'cat'
```
---
class: left,top
##Comparison Methods ( Part IV )

When we compare strings we are using the
Lexicographical order, this means just
the dictionary ordering with one caveat.

```rub
puts 'dog' > 'cat'
puts 'Dog' > 'cat'
```

The first statement evaulutes to **true** while the second
evaluates to **false**

This is because uppercase letters are considered to come
before lower case letters.

Another thing to watch about when comparing strings
is this

```rub
puts '2' > '12'
```

Evaluates to **true** because '12' comes before '2' in the
dictionary
---
class: left,top
##Comparison Methods ( Part V )

There are two more comparisson methods

```rub
puts 1 == 1
puts "cat" != "cat"
```

The first is the equality operator, you have to be carefull
not to confuse it with a single `=` because that is used
for asignment

The second is the inequality operator, and it is the inverse
of the equality operator it gives us **true** if the two
things are not equal
---
class: left,top
##Comparison Methods ( Part VI )

As you might have guessed 

```rub
puts 1 == 1
```

is equivalent to
```rub
puts 1.==(1)
```

meaning that all comparisson methods are just normal
methods in disguise.

**Fixnum** and **Float** use this to redefine 
what equality means between them and although
technically 1 != 1.0 because they are of different
types

```rub
puts 1 == 1.0
puts 1.0 == 1
```

both evalulate to **true**


---
class: left,top
##Comparison Methods ( Part VII )

String comparisson method is a little less forgiving

```rub
puts "Cat" == "cat"
```

evaluates to **false**
---
class: left,top
##Branching ( Part I )

Branching is very simple, what we
need is a true or false value and we
can execute any ammount of code
when the expression is **true**, and
skip it when is **false**.

```ruby
puts "Hello, what's your Name:"
name = gets.chomp
puts "Hello, " + name
if name == "Penguin"
  puts "That can't be right? right?"
end
```

**if** needs a **true** or **false** value
to determine if it will execute the
code between itself and **end**


---
class: left,top
##Branching ( Part II )

Althought not strictly necessary, we indent
the code between **if** and **end** to make
it obvious that this code is inside the **if**

```ruby
puts "Hello, what's your Name:"
name = gets.chomp
puts "Hello, " + name
if name == "Penguin"
*  puts "That can't be right? right?"
end
```


---
class: left,top
##Branching ( Part III )

What if we need to run some code if the statement
is **false** and another if the statement is **true**
We could code it as:

```ruby
puts "Hello, what's your Name:"
name = gets.chomp
puts "Hello, " + name

if name == "Penguin"
  puts "That can't be right? right?"
end

if name != "Penguin"
  puts "Awesome name!"
end

```

But there is a better way, that saves us a few
keystrokes and is easier to see what is happening
---
class: left,top
##Branching ( Part IV )

The previous code could be rewriting as:

```ruby
puts "Hello, what's your Name:"
name = gets.chomp
puts "Hello, " + name

if name == "Penguin"
  puts "That can't be right? right?"
else
  puts "Awesome name!"
end

```

What we are specifying, two paths our code will take
depending on the expression `name == 'Penguin'`
---
class: left,top
##Branching ( Part V )

Ifs can be nested, when nesting indentation becomes
even more important for readability

```ruby
puts "Hello, what's your Name:"
name = gets.chomp
puts "Hello, " + name

if name == "Penguin"

  puts "That can't be right? right?"

  puts   "Are you sure? your name is " + name + "? ( y for yes)"

  answer = gets.chomp
  if answer.upcase == "Y"
    puts "Ok, " + name + " it is"
  else
    puts "I knew, " + name + " coudn't be right"
  end
  
else
  puts "Awesome name!"
end

```
---
class: left,top
##Branching ( Part V )

You can chain if, else to compare more than
one condition

```
if name == "Penguin"
  # do something
else 
    if name == "Zebra"
        # do something
    else
        #Default Action  
    end
end
```

But ruby offers this same thing with a new keyword
**elsif** notice that **e** is missing

```
if name == "Penguin"
  # do something
elsif if name == "Zebra"
  # do something
else
  #Default Action
end
```
---
class: left,top
##Branching ( Part VI )

**A quick trick!**  you are going to be writing if, else
and end a lot and it is easy to loose track of what
else of end belongs where.  Always write
if, else and end in pair before writing the code
inside.
---
class: left,top
##Looping ( Part I )

Often, you’ll want your computer to do the same thing over and over again. After all, that’s what they’re supposed to be good at doing.

When you tell your computer to keep repeating something, you also need to tell it when to stop. 
Computers never get bored, so if you don’t tell it when to stop, it won’t.

while a certain condition is true. It works the way if works:

For this we can use **while** and it works just like **if**
but it doesn't stop until the condition is **false**

```ruby
input = ""
while input.downcase != 'bye'
  puts    input
  input = gets.chomp
end
puts "Thank you for your coperation."
```
---
class: left,top
##Looping ( Part II )

Often, you’ll want your computer to do the same thing over and over again. After all, that’s what they’re supposed to be good at doing.

When you tell your computer to keep repeating something, you also need to tell it when to stop. 
Computers never get bored, so if you don’t tell it when to stop, it won’t.

while a certain condition is true. It works the way if works:

For this we can use **while** and it works just like **if**
but it doesn't stop until the condition is **false**

```ruby
input = ""
while input.downcase != 'bye'
  puts    input
  input = gets.chomp
end
puts "Thank you for your coperation."
```
---
class: left,top
##Looping ( Part III )

You might have noticed that the program starts with
an empty line. We can rewrite the program, to remove
that empty line several ways, but we need to learn
about the **break** statement

```ruby
while true
  input = gets.chomp
  puts input
  if input.downcase == 'bye'
    break
  end
end
puts "Thank you for your coperation."
```

This should be an infinite loop, since the condition
will allways be **true** we can use the **break** statement
to break out of a loop and resume execution after it ends.

---
class: left,top
##Looping ( Part IV )

Ruby has an alternate way of writing, an infinite loop like
**while true**. That makes it clearer what were our
itentions when we wrote the code

The following code is equivalent

```ruby
loop do
  input = gets.chomp
  puts input
  if input.downcase == 'bye'
    break
  end
end
puts "Thank you for your coperation."
```
---
class: left,top
##Boolean Logic ( Part I )

Sometimes we need to branch or do something if more
than one thing happens, we can use boolean logic
to create more complex expressions that evaluate to true or
false

We can use the boolean methods in order to do this

```rub
puts true || false
puts true && true
puts !false
puts true ^ true
```

The following conversion table serves as reference
between the coloquial names **AND**, **OR** and what
ruby calls these operators

| Boolean Operator | Method         |
|:----------------:|:--------------:|
|        AND       |   &&           |
|        OR        |   &#124;&#124; |
|        NOT       |    !           |
|        XOR       |    ^           |

---
class: left,top
##Boolean Logic ( Part II )

Lets rewrite a previous program utilizing our new super powers

```ruby
puts "Hello, what's your Name:"
name = gets.chomp
puts "Hello, " + name

*if name == "Penguin" || name == "Zebra" || name == "Hippo"

  puts "That can't be right? right?"
  puts "Are you sure? your name is " + name + "? ( y or yes)"

  loop
    answer = gets.chomp
*    if answer.upcase == "Y" || answer.upcase == "YES"
        puts "Ok, " + name + " it is"
        break
    elsif answer.upcase == "N" || answer.upcase == "NO"
        puts "I knew, " + name + " coudn't be right"
        break
    else
        puts "Say that again"
    end
  end
 
else
  puts "Awesome name!"
end
```
---
class: left,top
##Boolean Logic ( Part III )

Lets use create a program with a more complex expression

```ruby
puts "Are you human?"
is_human = gets.chomp.upcase == 'Y'
puts "Are you an alien?"
is_alien = gets.chomp.upcase == 'Y'

if !( is_human ^ is_alien)
  puts "You liar!"
else
  puts "Checks out!"
end
```
---
class: left,top
##Alternative Branching Constructs ( Part I )

If you have code like this

```ruby
if name != 'Penguin'
   puts "You are not a Penguin" 
end
```

This is the same as
```ruby
if !(name == 'Penguin')
   puts "You are not a Penguin" 
end
```

Ruby provides an **unless** statement that works
exactly like the if statement but the role of the
**else** is reversed

```ruby
unless name == 'Penguin'
   puts "You are not a Penguin" 
end
```

---
class: left,top
##Alternative Branching Constructs ( Part II )

Ruby also provides something called **statement modifiers**
If the code in our if block is just one line long
we could rewrite

```ruby
if name != 'Penguin'
   puts "You are not a Penguin" 
end
```

to
```ruby
puts "You are not a Penguin" if name != 'Penguin'
```

or
```ruby
puts "You are not a Penguin" unless name == 'Penguin'
```


---
class: left,top
##Alternative Looping Constructs ( Part I )

**while** also has an negation alternative and can be
used as a statement modifier. So all this snippets are
equivalent

```ruby
while gets.chomp.downcase != 'yes'
    puts "Say yes"
end
```

```ruby
until gets.chomp.downcase == 'yes'
    puts "Say yes"
end
```

```ruby
puts "Say yes" while gets.chomp.downcase != 'yes'
```

```ruby
puts "Say yes" until gets.chomp.downcase == 'yes'
```
---
class: left,top
##Ranges ( Part I )

Let's add a new class to our increasing repertoire: **Ranges**

A **Range** is an object that represents a range between two numbers
hence the name, to create a range we can use the folowing
syntax, since a range is an object it contains methods
we can call on them

```ruby
one_to_ten = 1..10
one.min
one.max
one.member? 5
one.member? 10
one.member? 15
```

Notices the method method **member?** the question mark is part
of the method name, as a convention ( meaning there is no rule,
we just do it) methods that end with `?` return boolean
values meaning **true** or **false**


---
class: left,top
##Ranges ( Part II )

Ranges can be exclusive meaning that the last element, 
is not part of the range, by using `...` instead of `..`

```ruby
one_to_ten = 1...10
one.min
one.max
one.member? 10
```
---
class: left,top
##Ranges ( Part III )

We can also create ranges with Strings
but not with **Floats**, since they are not rangeable,
between 1.0 and 1.5 there is an infinite number of
numbers

```ruby
("A".."Z").member? "K"
```


---
class: left,top
#For ( Part I )

Ranges allows to write another way to iterate,
that altough not while widly used in ruby we have
to be aware of

```ruby
for i in 0..5
   puts i
end
```

```ruby
for i in 5..0
   puts i
end
```

```ruby
for i in 0...5
   puts i
end
```

```ruby
for i in "A".."Z"
   puts i
end
```


---
class: left,top
#For ( Part II )

The following code are equivalent

```ruby
for i in 0...5
   puts i
end
```

```ruby
i = 0
while i <= 5
   puts i
   i = i + 1
end
```

The **i** variable is just automatically initialized
and incremented on every iteration
---
class: left,top
#Case ( Part I )

There is also an alternative to an **if** and it has two
forms

```ruby
age = -1
until age >= 0
    puts "Tell me your age?"
    age = gets.chomp.to_i
end

case
    when age <= 0
        puts "You haven't been born"
    when age >= 0 && age < 3
        puts "You are a baby"
    when age >= 3 && age < 6
        puts "You are a toddler"
    when age >= 6 && age < 13
        puts "You are a child"
    when age >= 13 && age <= 19
        puts "You are a teenager"
    else
        puts "You are an adult"
end
```


---
class: left,top
#Case ( Part II )

Using ranges we can write this even more clearly

```ruby
age = -1
until age >= 0
    puts "Tell me your age?"
    age = gets.chomp.to_i
end

case age
    when 0..0
        puts "You haven't been born"
    when 0...3
        puts "You are a baby"
    when 3...6
        puts "You are a toddler"
    when 6...13
        puts "You are a child"
    when 13..19
        puts "You are a teenager"
    else
        puts "You are an adult"
end
```
---
class: left,top
#Thruthyness

In reality if doesn't need a value of **true** or 
**false** to do its thing, it needs a **truthy** or
**falsy** value.

Ruby defines several values as either **truthy** or **falsy**

Ruby defines
1. 1 as **truthy**
1. 0 as **falsy**
1. any string as **truthy** even the empty string `""`

The rules of thruthyness are full of suprises and
you shoudn't rely on a object to be truthy, you should
write your expressions completely.

```ruby
number = 0

#Don't do this
puts "Print when 0" unless number

#Don't this
puts "Print when 0" if number == 0
```




---
class: left,top
##Short Circuiting ( Part I )

Since everything stands for a value, by utlizing truthiness
we can write valid code like this

```ruby
doit = true
if doit && done = true
    puts "Im doing it"
end
puts done == true
```

There is a lot of things going on here, `done = true`
is an expression that stands for the value of `done`
in this case `true`. So `doit && true` is the same thing
as `doit` in this case `true` again.


---
class: left,top
##Short Circuiting ( Part II )

However the following code, don't work as expected

```ruby
doit = true
if doit || (done = true)
    puts "Im doing it"
end
puts done == true
```

What happens is that Ruby noticed that since
`doit` is true it doesn't need to know the value
of the expression `done=true` and that expression
was never evaluated, so `done` never points to the
value `true`
---
class: left,top
#Spaceship Operator

In the interest of completeness there is another
comparisson operator, we didn't mention it since
it doesn't evaluate to true or false

See if you can figure out what it does

```ruby
puts 1 <=> 1
puts 1 <=> 2
puts 2 <=> 1
```

---
class: left,top
##Try it! ( Part I )

##1. Create a Program that sings the song 99 bottles of bear on the wall

---
class: left,top
##Try it! ( Part II )

##1. Deaf grandma

Whatever you say to Grandma (whatever you type in), she should respond with this:

> HUH, SPEAK UP?

Unless you write it in capitals, like "HELLO" instead of "hello"
Then it will say

> NOT SINCE, 1942!

The program should quit when you say "goodbye" to your grandma,
remember you have to shout it!


---
class: left,top
##Try it! ( Part III )

##2. Deaf Grandma II

1. Same as deaf Grandma
1. but Grandma pretends not to hear
you, until you say "goodbye" three times
1.  Make the year be one less everytime, but until
    a point, never less than 1912 since that is the
    year Grandma was born
    
##3. Deaf Grandma III
1. Same as deaf Grandma II
1. Ask what the current year is and
the year Grandma was born, and use
that numbers as base for your responses.
1. Use a loop to make sure that the year
grandma was born is before the current year by at least
50 years.