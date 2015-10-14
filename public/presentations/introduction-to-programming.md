class: center,middle
#Introduction to Programming
---
class: left,top
##What is Programming

We can always ask Wikipedia: 
>  Is a process that leads from an original formulation of a computing problem to 
   executable computer programs. Programming involves activities such as analysis, developing understanding, 
   generating algorithms, verification of requirements of algorithms including their correctness 
   and resources consumption, and implementation of algorithms in a target programming language

That is a handful! So let's simplify: 

> Programming is everything that we need to make a computer do our bidding. ***mwa·ha·ha·ha!***


Everything about the programming process is important, but when we you talk to
a programmer about programming ( also colloquially called coding) , what they are thinking about is code.

---
class: left,top
## What is code? ( Part I )

A computer is just a fancy clock. I mean this literally. 
A computer has a big TODO list somewhere in its bowels and every time
the clock ticks it does one thing. We call the thing the computer does a **instruction**.
Every computer has its own set of instructions determined by its
**architecture**. In fact, flip that over, the set of instructions
is what it determines the architecture of the computer.

You might already have heard the terms x86, i64 or ARM. These are architectures and they determine
the instructions the computer is capable of doing.

If you are reading this in any kind of desktop or laptop, chances are that you are using
x86 or a superset ( read as backward compatible with x86 ). An iPad or iPhone uses ARM.

---
class: left,top
## What is code? ( Part II )

Some imaginary instructions for a made up architecture might look like this


| Instruction  | Description                                     |
|--------------|-------------------------------------------------|
| ADD  X Y Z   | Add the value of X to Y and save it in Z
| MULT X Y Z   | Multiply the value of X to Y and save it in Z
| SUB X Y Z    | Subtract the value of X to Y and save it in Z
| DIV X Y Z    | Divide the value of X to Y and save it in Z
| MOV  X Y     | Make a copy of the value of X and store it in Y    

<br/>
There would be many more, for example, x86 has 663 instructions.
What the instructions do is not as important as that you
understand this are basic things. You can think of them as them
atoms of the computing world.
---
class: left,top
## What is code? ( Part III )

In fact, I cheated a bit. We have no way of telling the computer "MOV"
or "ADD" the computer only understands binary ( Those elusive one(s) and
zeros you keep hearing about). For now you only need to know
that every instruction can be represented as an integer, and every integer can be specified in binary.
We will learn how later.

So we need to assign numbers to every instruction we can come up with.
For a mockup architecture we have the following conversion table.
<br />

| Instruction  | Decimal Value  | Binary Value                   |
|--------------|-------------------------------------------------|
| ADD          | 1              | 0001
| MULT         | 2              | 0010
| SUB          | 3              | 0011
| DIV          | 4              | 0100
| MOV          | 5              | 0101
---
class: left,top
## What is code? ( Part IV )

Now we can start talking with our computer. We just tell her:

	01010100 01101000 01101001 01110011 
	00100000 01101001 01110011 00100000 
	01101110 01101111 01110100 00100000 
	01110010 01100101 01100001 01101100 
	01101100 01111001 00100000 01100011 
	01101111 01100100 01100101

And she will do something, not sure what, but something
---
class: left,top
## Lower and Higher Level Languages ( Part I )

###So Coding is writing a lot of 1 and 0?

Well yes and no. There are a lot of 1 and 0 but not much writing them.
If you look at a blob of 1 and 0 you can write them in a more human way
like ADD or MULT and we give it to a software called an **assembler**
that does the translation for us. We call what we give to the assembler
*assembler language* and the 1 and 0 it generates our program.

But writing assembly it's still too complicated and error prone, that is why 
we call it a **low-level language**. What we need to make our life easier is, 
you guessed it, a **high-level language**

A high language transforms the code, via a program called a 
**compiler**, into a lower-level language 
that then is transformed into machine language ( ones and zeroes),
and voalá we have an executable that the machine can understand.

Sometimes programming languages take another route, instead of writing
one and zeroes for a specific machine. They provide a virtual machine
and compile down to a language that that machine can understand.
We generally call this new language **bytecode**.


---
class: left,top
## Lower and Higher Level Languages ( Part II )

This what assembler would look like
```asm
    org  0x100
    mov  dx, msg
    mov  ah, 9
    int  0x21
    mov  ah, 0x4c
    int  0x21
    msg  db 'Hello, World!', 0x0d, 0x0a, '$'
```

And this is the same code in a higher level language
called ruby:
```ruby
	puts "Hello World"
```
---
class: left,top
##How to think like a programmer

1. **Always Have a Plan**: *"plans are useless, but planning is essential"*
2. **Restate the Problem**: *Programming is just a big, math word problem,
   half the battle is to consolidate what the problem really is*
3. **Divide the Problem**: *A problem can generally be divided into smaller
   problems. When you divide a problem, each part of the problem is easier 
   to tackle, and the overall complexity goes down*
4. **Reduce the Problem**: *When a program seems too complicated, you can
   remove constraints, it may lead to an insight that can be used
   in the bigger problem*
5. **Look for Analogies**: *A lot of solutions have things in common, look
   for problems that look alike the one you are solving and they
   might provide insight.  But to be able to do this you need
   to create a database of problems in your head so don't take
   shortcuts*
6. **Experiment**: *If you don't know something, experiment. But don't guess!
   create a hypothesis, test it and refine"*
7. **Don’t Get Frustrated**: *A frustrated programmer, can't think clearly*
8. **Start with what you know**: There is always something you know about a problem
   start with that to get the ball rolling
---
class: left,top
##General Principles

###The thing about software is that: 
> "Software is not build, is grown!"
Because a program is always growing and always changing, it must be written with change in mind

This three  will make it easier to cope with change

1. **KISS** Keep it Simple Stupid
1. **DRY** Don't repeat yourself
1. **YAGNI** You Aren’t Gonna Need It
---
class: left,top
## TLDR;

1. Programming is everything we need to do to make the computer do useful stuff
2. Code is how we tell the computer what to do
3. Code is generally written in a high-level language that translates into the ones and zeros the computer can understand
4. The translation process is done by a software called the compiler
5. Some languages provide their own virtual machine that the compiler
   targets.

