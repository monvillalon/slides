class: center,middle
##Control Flow - Branching
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
###Boolean Logic ( Part II )

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

Using ranges we can write this even more clearly, notice that we now
are passing the variable age into the case.

```ruby
age = -1
until age >= 0
    puts "Tell me your age?"
    age = gets.chomp.to_i
end

*case age
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
