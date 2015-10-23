class: center,middle
##Control Flow - Iteration
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
##Ranges ( Part I )

Let's add a new class to our increasing repertoire: **Ranges**

A **Range** is an object that represents a range between two numbers
hence the name, to create a range we can use the folowing
syntax, since a range is an object it contains methods
we can call on them

```ruby
one_to_ten = 1..10
one_to_ten.min
one_to_ten.max
one_to_ten.member? 5
one_to_ten.member? 10
one_to_ten.member? 15
```

Notices the method method **member?** the question mark is part
of the method name, as a convention ( meaning there is no rule,
we just do it) methods that end with `?` return boolean
values meaning **true** or **false**


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
##Ranges ( Part II )

Ranges can be exclusive meaning that the last element,
is not part of the range, by using `...` instead of `..`

```ruby
one_to_ten = 1...10
one_to_ten.min
one_to_ten.max
one_to_ten.member? 10
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

##1. Create a Program that sings the song 99 bottles of beer on the wall

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
