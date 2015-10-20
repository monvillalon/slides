class: center,middle
#Boolean Logic
---
class: left,top
#What is boolean logic ( Part I )

Boolean Logic was invented by George Boole in the 19th century.

The idea is simple let's say you have a statement ( which in boolean
logic is called a predicate):

> John has a dog

boolean logic concerns itself to the rules we can use to know if this statement
is **true** or **false**

A predicate alone can be either **true** or **false**, but never both.
In this predicate we can't know until we get to meet John and ask him. 
The important bit is that it can't be 
50% **true** or 75% **false**.

You might be tempted to day for example: 
"it depends on the John" or "It depends on when you ask the question. John's
dog is pretty old"



---
class: left,top
#What is Boolean logic ( Part II )

Since predicates can be **true** or **false** Boolean logic is more
about what happens when we combine predicates with a set of
fundamental operators.

They are exactly 16 boolean binary operators, and four unary
boolean operators. This just a fancy way of saying 20 is the only way
we kind combine one or two predicates.

In practice we only need to know about 4 operators

---
class: left,top
#AND ( Part I )

If we have two predicates (A, B) we say that
the compound predicate **A AND B** is true
if and only if both (A,B) are true


For example:

- I am a human  **AND** I have two legs, is **TRUE**
- I am a human  **AND** I am an alien,   is **FALSE**
- I am an alien **AND** I am a human,    is **FALSE**
- I am an otter **AND** I am an alien,   is **FALSE**


---
class: left,top
#AND ( Part II )


| A     | B     | A *AND* B   |
|-------|-------|-------------|
| T     | T     | T           |
| T     | F     | F           |
| F     | T     | F           |
| F     | F     | F           |

<br />
<span style='display:block;text-align:center'>
![HTML Tag](/assets/uploads/and.png)
</span>
---
class: left,top
#OR ( Part I )

If we have two predicates (A, B) we say that
the compound predicate **A OR B** is true
if at least of the two is predicates is true.

> - I am a human  **OR** I have two legs, is **TRUE**
> - I am a human  **OR** I am an alien,   is **TRUE**
> - I am an alien **OR** I am a human,    is **TRUE**
> - I am an otter **OR** I am an alien,   is **FALSE**

You have to be very careful about OR because
in english, or implies an exclusion between the predicates
For example:

> At 9:15pm, I went to the movies **OR** I ate at the restaurant

Can be considered **FALSE** if I went to the movies and
ate at the restaurant at the same time, since I can't be
in two places at once. But logically this is true if I 
did either of those things.
---
class: left,top
#OR ( Part II )

| A     | B     | A *OR* B    |
|-------|-------|-------------|
| T     | T     | T           |
| T     | F     | T           |
| F     | T     | T           |
| F     | F     | F           |

<br />
<span style='display:block;text-align:center'>
![HTML Tag](/assets/uploads/or.png)
</span>
---
class: left,top
#NOT ( Part I )

Not is an unary operator, meaning that
operates on one predicate instead of two, like AND
and OR.


Not is a very simple operator.

If we have a predicates (A) we say that
the predicate **NOT A** is true if **A** is false
---
class: left,top
#NOT ( Part II )

| A     | NOT A |
|-------|-------|
| T     | F     |
| F     | T     |

<br />
<span style='display:block;text-align:center'>
![HTML Tag](/assets/uploads/not.png)
</span>
---
class: left,top
#XOR ( Part I )

XOR is closer to what we say when we say **OR** in english.
It implies exclusivity between the two predicates it
operates on.

If we have two predicates (A, B) we say that
the compound predicate **A XOR B** is true
if one of the predicates is true but not both.

> - I am a human  **XOR** I have two legs, is **FALSE**
> - I am a human  **XOR** I am an alien,   is **TRUE**
> - I am an alien **XOR** I am a human,    is **TRUE**
> - I am an otter **XOR** I am an alien,   is **FALSE**

You have to be very careful about OR because
in english, or implies an exclusion between the predicates
For example:

> At 9:15pm, I went to the movies **OR** I ate at the restaurant

Can be considered **FALSE** if I went to the movies and
ate at the restaurant at the same time, since I can't be
in two places at once. But logically this is true if I 
did either of those things.
---
class: left,top
#XOR ( Part II )

| A     | B     | A *XOR* B   |
|-------|-------|-------------|
| T     | T     | F           |
| T     | F     | T           |
| F     | T     | T           |
| F     | F     | F           |

<br />
<span style='display:block;text-align:center'>
![HTML Tag](/assets/uploads/xor.png)
</span>


---
class: left,top
#XOR ( Part III )

You can specify XOR in terms of ANDs, ORs and NOTs

<div style='font-size:36px'>
( A <b>OR</b> B ) <b>AND</b> ( <b>NOT</b> ( A <b>AND</b> B ))
</div>
<br />


| A     | B     | A *OR* B | A *AND* B | NOT (A AND B) | (A *OR* B) *AND* *NOT* ( A *AND* B ) |
|:-----:|:-----:|:--------:|:---------:|:-------------:|:------------------------------------:|
| T     | T     | T        | T         | F             | F                                    |
| T     | F     | T        | F         | T             | T                                    |
| F     | T     | T        | F         | T             | T                                    |
| F     | F     | F        | F         | T             | F                                    |
---
class: left,top
#Precendence

Just like addition, division and mutiplication have an
order of precedence, boolean operators also.

###Precedence Highest to Lowest
- NOT
- XOR
- AND
- OR


We can allways use parenthesis to disambiguate or
change the order of operations.
---
class: left,top
#Boolean Algebra Rules

There several equivalence rules between, the operators,
as we saw with XOR. This are the general rules of boolean
algebra.

1. A OR TRUE     = TRUE 
2. A OR FALSE    = FALSE
3. A OR A        = A
3. A OR (NOT A)  = TRUE
4. A AND TRUE    = TRUE
5. A AND FALSE   = FALSE
6. A AND A       = A
7. A AND (NOT A) = FALSE 
8. A AND B       = B AND A
9. A OR  C       = C OR B
10. NOT (NOT A)  = A



---
class: left,top
#De Morgan

There several equivalence rules between, the operators,
as we saw with XOR.

Two of the most usefull ones are the De Morgan's laws
that allow us to convert between ANDs and ORs.

<div style='font-size:36px'>
<b>not</b> (A <b>AND</b> B) = ( <b>NOT</b> A ) <b>OR</b> (<b>not</b> B )
</div>

<div style='font-size:36px'>
<b>not</b> (A <b>OR</b> B) = ( <b>NOT</b> A ) <b>AND</b> (<b>not</b> B )
</div>
---
class: left,top
#Resources

##http://www.wolframalpha.com/
##http://www.wolframalpha.com/input/?i=A+AND+B
##http://www.wolframalpha.com/input/?i=Truth+Table+A+AND+B

---
class: left,top
#Try it

Create the truth tables for the following predicates

##NOT A OR B
##NOT ( A XOR B )
##A AND (NOT B OR A )
##A AND NOT (B AND A)