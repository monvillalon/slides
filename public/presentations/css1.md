class: left,top
##What is CSS

CSS stands for **C**ascading **S**tyle**s**heets

> CSS is a style sheet language used for describing the presentation of a 
document written in a markup language

HTML defines the content of the document, CSS helps
us style de documents
---
class: left,top
##Why use CSS ( Part I )

Before CSS all styling was done directly via a set of tags
or attributes directly on the html.

```html
<b>I will be bold </b>
```

```html
<font size="36" color="red"> I'm big and red </font>
```

```html
<body bgcolor='black'>
```

---
class: left,top
##Why use CSS ( Part I )

This had several drawbacks

1. Our markup now had two jobs, sematics and styling
2. There was a lot of duplication, since every element
   had to define its own style
3. There was no way to share style between several documents

CSS was created to address all this problems
---
class: left,top
#CSS Rules ( Part I )

CSS allow us to define a set of rules to style our document.
Each CSS rule follows the following syntax:

<span style='display:block;text-align:center'>
![HTML Tag](/assets/uploads/css-rule.png)
</span>
---
class: left,top
#CSS Rules ( Part II )

##Selectors

```css
body{
  color: #333333;
}
```

The selector defines, what this rule applies to. In this
case the selector applies to the **body** element

##Declaration

A css rule allows to group, one or more declarations
separated by a colon (`;`). Each css declaration
contains two parts a **Property** and a **Value**

---
class: left,top
#CSS Rules ( Part III )

```css
body{
  color: #333333;
}
```

##Declaration

Once we have something we want to apply a rule to
( with a selector ). We need to specify what
we want to style about the selector.

Each CSS rule allows to group, one or more declarations
separated by a colon (`;`). Each css declaration
contains two parts a **Property** and a **Value**
---
class: left,top
#CSS Rules ( Part IV )

```css
body{
  color: #333333;
}
```

##Properties

A css property *tells us what to style about an element*.

Once we have something we want to apply a rule to
( with a selector ). We need to specify what
we want to style about the selector.

In this case we we are using the **color** property, it lets
us define the text color of an element.



---
class: left,top
#CSS Rules ( Part V )

There are aproximitely **250** properties defined in CSS, depending
how you count. Here are a few:

| Property             | Effect                                |
|----------------------|---------------------------------------|
| **color**            | Defines the color of the font         |
| **background-color** | Defines the color of the background   |
| **width**            | Defines the width of an element       |
| **border-size**      | Defines the width of an element       |
| **text-align**       | Defines the justification of the text |
---
class: left,top
#CSS Rules ( Part IV )

```css
body{
  background-color: #FF0000;
}
```

Each rule has a set of values it can understand

| Property             | Value Type                                     |
|----------------------|------------------------------------------------|
| **color**            | CSS Color                                      |
| **background-color** | CSS Color                                      |
| **width**            | CSS Length                                     |
| **border-size**      | CSS Length                                     |
| **text-align**       | **left**, **right**, **center** or **justify** |

<br />
In this example we set the background-color property to the **#FF0000**
value, this is a **CSS Color**.



---
class: left,top
#CSS Colors ( Part I )

FF0000 is just another way of saying **red**

###CSS
```css
h1{
  background-color: #FF0000;
}
```

###HTML
```html
<h1> #FF0000 </h1>
```

###OUTPUT
<h1 style="background-color:#FF0000;">
#FF0000
</h1>
---
class: left,top
#CSS Colors ( Part II )

All this rules are equivalent and make all `<h1>` tags
red

```css
h1{ background-color: red; }
```

```css
h1{ background-color: #ff0000; }
```

```css
h1{ background-color: rgb(255,0,0); }
```

```css
h1{ background-color: rgba(255,0,0,1); }
```

```css
h1{ background-color: hsl(358, 100%, 49%); }
```

```css
h1{ background-color: hsla(358, 100%, 49% , 1); }
```
---
class: left,top
#CSS Colors ( Part III )

There a several ways to specify colors for computers. The 
most common is the RGB model

<span style='display:block;text-align:center'>
![HTML Tag](/assets/uploads/rgb.gif)
</span>

The basic idea is that we can get any color by mixing different
levels of <span style='color:red'>Red</span>, <span style='color:green'>Green</span> 
and <span style='color:blue'>Blue</span>, each of this
three we call a component.

We give a value between 0-255 for each component.
---
class: left,top
#CSS Colors ( Part IV )

<span style='display:block;text-align:center'>
![HTML Tag](/assets/uploads/rgb.gif)
</span>

<div style="border:1px solid black;padding:5px;font-weight:bold;text-align:center;color:white;background-color:rgb( 255 , 0 , 0)">
rgb( 255 , 0 , 0)
</div>
<div style="border:1px solid black;padding:5px;font-weight:bold;text-align:center;color:white;background-color:rgb( 0 , 255 , 0)">
rgb( 0 , 255 , 0)
</div>
<div style="border:1px solid black;padding:5px;font-weight:bold;text-align:center;color:white;background-color:rgb( 0 , 0 , 255)">
rgb( 0 , 0 , 255)
</div>
<div style="border:1px solid black;padding:5px;font-weight:bold;text-align:center;color:white;background-color:rgb( 255 , 0 , 255)">
rgb( 255 , 0 , 255)
</div>
<div style="border:1px solid black;padding:5px;font-weight:bold;text-align:center;color:black;background-color:rgb( 0 , 255 , 255)">
rgb( 0 , 255 , 255)
</div>
<div style="border:1px solid black;padding:5px;font-weight:bold;text-align:center;color:black;background-color:rgb( 255 , 255 , 0)">
rgb( 255 , 255 , 0)
</div>
<div style="border:1px solid black;padding:5px;font-weight:bold;text-align:center;color:black;background-color:rgb( 255 , 255 , 255)">
rgb( 255 , 255 , 255)
</div>
<div style="border:1px solid black;padding:5px;font-weight:bold;text-align:center;color:white;background-color:rgb( 0 , 0 , 0)">
rgb( 0 , 0 , 0)
</div>
---
class: left,top
#CSS Colors ( Part VI )

Hexadecimal is just another way of writing down numbers.
Instead of 9 digits we have 16 

> 0 1 2 3 4 5 6 7 8 9 A B C D E F 

In Hexadecimal **A **stands for 10 and **F** stands for 16.

The normal rules of counting still work, when adding
1 to a number and we are out of digits to use we carry over
and add a new column

###In Decimal
```text
9  + 1 = 10
19 + 1 = 20
```

###In Hexadecimal
```text
9 + 1 = A
F + 1 = 10
```




---
class: left,top
#CSS Colors ( Part V )

This is a partial table of conversion between Decimal and Hexadecimal

| Dec | **Hex** | Dec | **Hex** | Dec | **Hex** |  *......* | Dec | **Hex** | Dec | **Hex** |
|:---:|:-------:|:---:|:-------:|:---:|:-------:|:---------:|:---:|:-------:|:---:|:-------:|
|  0  |  **00** |  10 |  **0A** |  20 |  **14** |  *......* | 236 |  **EC** | 246 |  **F6** |
|  1  |  **01** |  11 |  **0B** |  21 |  **15** |  *......* | 237 |  **ED** | 247 |  **F7** |
|  2  |  **02** |  12 |  **0C** |  22 |  **16** |  *......* | 238 |  **EE** | 248 |  **F8** |
|  3  |  **03** |  13 |  **0D** |  23 |  **17** |  *......* | 239 |  **EF** | 249 |  **F9** |
|  4  |  **04** |  14 |  **0E** |  24 |  **18** |  *......* | 240 |  **F0** | 250 |  **FA** |
|  5  |  **05** |  15 |  **0F** |  25 |  **19** |  *......* | 241 |  **F1** | 251 |  **FB** |
|  6  |  **06** |  16 |  **10** |  26 |  **1A** |  *......* | 242 |  **F2** | 252 |  **FC** |
|  7  |  **07** |  17 |  **11** |  27 |  **1B** |  *......* | 243 |  **F3** | 253 |  **FD** |
|  8  |  **08** |  18 |  **12** |  28 |  **1C** | *... ...* | 244 |  **F4** | 254 |  **FE** |
|  9  |  **09** |  19 |  **13** |  29 |  **1D** |  *......* | 245 |  **F5** | 255 |  **FF** |

---
class: left,top
#CSS Colors ( Part VI )

As we learned earlier **#FF0000** is another way of saying red.

To read we sepearte the numbers in pairs of two. The first
pair represents the <span style='color:red'>red</span> component,
the others <span style='color:green'>green</span> and 
<span style='color:blue'>blue</span> respectively.

#\#<span style='color:red'>FF</span><span style='color:green'>00</span><span style='color:blue'>00</span>

can be read as 255 red, 0 green and 0 blue. Or all red

---
class: left,top
#CSS Colors ( Part VII )

Just like RGB there is another model to specify colors
**HSL**. HSL is closer as how we think about colors.
It has three components the HUE, Saturation and Luminance.

<span style='display:block;text-align:center'>
![HTML Tag](/assets/uploads/hsl.jpg)
</span>

Suffice to say is that both RHB and HSL are equivalent.


---
class: left,top
#CSS Colors ( Part VIII )

The last two color declarations are **rgba** and **hsla**.
This are the same as **rgb** and **hsl** but with
an extra alpha component.

Alpha is just a fancy way of saying transparency

In both **rgba** and **hsla** the fourth component
is a floating point value between 0 and 1.


So both this examples are plain red, because of the 1
```css
h1{ background-color: rgba(255,0,0,1); }
```

```css
h1{ background-color: hsla(358, 100%, 49% , 1); }
```

But this means red, 50% transparent
```css
h1{ background-color: rgba(255,0,0,0.5); }
```


---
class: left,top
##Adding CSS to a Document

There are several ways to add CSS to our
documents, but the best way is to create another
file and link it to our document with the `<link>` tag.

The link tag, creates a relationship between this document
and another ( our css document in this case ). Since we
can link different types of documents we need
to specify what kind of document we are linking, in this case
**stylesheet**, by using the `rel` attribute.


```html
<!DOCTYPE html>
<html>
  <head>
  <meta charset="UTF-8">
  <title>My Styled Document</title>
*  <link rel="stylesheet" href="style1.css">
  </head>
  <body>
        <h1> This is the Title </h1>
        <p>
           This is the content
        </p>
  </body>
</html>
```
---
class: left,top
##Trying it out!

```html
<h1> All about puppies </h1>
<p>
   <strong>Puppies</strong>  are <em> Young Dogs </em>. <br /> 
   They are cute, fuzzy and awesome.
</p>
```

```css
body{
    color:            #FFFFFF;
    background-color: #000000;
    text-align:       center;
    font-size:        24px;
}

h1{ font-size:   36px; }

p{ color: #C1D1FF; }

strong{ color: #4F75FF; }

em{ color: #4F75FF; }

```
---
class: left,top
##Default Styles and Cascading

You may have noticed several things about the last example

Nowhere we specified that
   1. **h1** and **strong** should be bold ( `font-weight: bold` )
   2. **em** should be italic ( `font-style: italic` )

This because every HTML element has a default styling
specified by the browser.  Different browsers have similar
but slightly different default styles.  So **em** will 
be *italic* unless we specify otherwise.

Another thing you might have noticed is that:
We didn't specify that **h1** and **p** should have a white font ( `color: white` ).
Normally the color we see for all elements is black unless
we override it. But somehow they ended up white.

This happens because of cascading, since `<h1>` and `<p>` are 
inside the `<body>` and they didn't specify their own color,
they **inherited** the color of their latest ancestor that did
specify a color, in this case `<body>`.

Most css properties inherit this way. You might think
this is also happening for `background-color`, but this 
is not the case, the default value for `background-color: transparent`
and it only looks black because we can look thru it.
In other words, `background-color` is not **inherited**

   
---
class: left,top
#Selectors

There are three basic selectors

1. **Tag selector**
1. **ID selector**
1. **Class selector**



   

---
class: left,top
#Tag Selector

   This is the one we have been using up until now.
   It targets all elements of a specific tag
   ```css
   h1{ 
     color: green;
   }
   ```
   
   ```html
   <h1> I'm going to be green </h1>
   <p> I don't have a color specified </p>
   <h1> I'm going to be green too </h1>
   <p> I don't have a color specified either </p>
   ```
---
class: left,top
#ID Selector


   Every element can have an ID attribute, that uniquely
   identifies it in a page.  This id has several uses
   like internal links, but we can target an element
   with a specific id by appending the `#` character
   to the selector
   
```html
   <h1 id='title'> This is the title of the page </h1>
   <p id='introduction'>
     This is the introduction to the page
   </p>
```
   
```css
   #title{  color: red; }
   
   #introduction{  color: green; }
```

---
class: left,top
#Class Selector

ID Selectors are great to target a specific element but
sometimes we want to target several ad-hoc elements.
Every element can also a `class` attribute.
We can specify a class selector by adding period at the
start of the selector

```html
<em class='noun'> Bob <em> 
<em class='verb'> called <em> 
<em class='noun'> Alice <em> 
on the
<em class='noun'> phone <em> 
```
   
```css
   .name{ color: blue; }
   
   .verb{ color: red; }
```
---
class: left,top
#Specificity ( Part I )

Let's say we have this HTML and CSS

```html
<h1 id='title' class='heading'>
   Title
</h1> 
```

```css
#title{
    color: red;
}

.heading{
    color: green;
}

h1{
    color: blue;
}
```

We have several rules that specify the color for this specific element

---
class: left,top
#Specificity ( Part II )

When we try it out in browser it will come up red.
The reason for this is that **id selector** is
more specific that a *class selector* that is more
specific than a **tag selector**

<div style='text-align:center'>
<h2>
    #title > .heading > h1
</h2>
</div>



---
class: left,top
#Specificity ( Part III )

In the event of a tie, the last specified declaration
wins.

```html
<h1> I will be red </h1> 
```

```css
h1{
    color: blue;
}

h1{
    color: red;
}
```
---
class: left,top
#Grouped Selectors

```css
h1, h2, h3, h4, h5, h6{
    font-weight: bold;
}

h1{
   font-size: 24px;
}

h2{
   font-size: 18px;
}

h3{
   font-size: 14px;
}

h4 ,h5, h6 {
   font-size: 12px;
}

```
---
class: left,top
#Nested Elements

```css
#introduction em{
    color: blue;
}
```


---
class: left,top
#CSS Dimensions ( Part I )

1. Pixels
1. Inches
1. Centimeters
1. em

> 0 is zero in all units so we can forgo the unit
---
class: left,top
#Text Properties

1. font-size
1. font-family
1. font-weight
1. line-height
1. font-style
1. color
1. text-decoration
1. text-transform
1. text-indent
1. word-spacing

---
class: left,top
#Background Properties

1. background-color
1. background-image
1. background-repeat
1. background-attachment
1. background-position
1. background-size
1. background-clip
---
class: left,top
#Border Properties

1. border-style: solid;
1. border-color: red;
1. border-width: 1px;
1. border-radius: 4px;
---
class: left,top
#Box Model ( Part I )

<br />
<span style='display:block;text-align:center'>
![HTML Tag](/assets/uploads/box-model.gif)
</span>
---
class: left,top
#Box Model ( Part II )

1. padding
1. margin
1. width
1. height
1. min-width
1. max-width
1. min-height
1. max-height

---
class: left,top
#Shorthand Properties
---
class: left,top
#Vocabulary

1. CSS
1. DOM
1. Selector
1. CSS Rule
1. CSS Property
1. CSS Value
1. CSS Declaration
1. RGB
1. Hexadecimal
1. HSL
1. Link
1. ID Selector
1. Class Selector
1. Tag Selector
1. Specificity