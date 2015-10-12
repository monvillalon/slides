class: center,middle
##HTML
---
class: left,top
##What is HTML

HTML stands for **H**yper**T**ext **M**arkup **L**anguage

> Hypertext Markup Language, a standardized system for tagging text files to achieve font, color, graphic, and hyperlink effects on World Wide Web pages.


If HTTP is how we get documents to our web browser thru 
the internet, HTML is what does documents are made of.

---
class: left,top
##What does HTML Look Like

This is the minimal amount of text we need
to create an html page

```html
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        This is my first web page
    </body>
</html>
```



---
class: left,top
##Tags

HTML is a markup language.  **Tags** are our mechanism
to mark part of the text.

A tag just delineates some text, or more tags, to give
its content some meaning.
A tag looks like this:

<span style='display:block;text-align:center'>
![HTML Tag](/assets/uploads/tag.png)
</span>

1. Collectively a starting, ending and content is refered as
an HTML element
1. Each tag has a name, in this case the name is **em**.
1. A tag name is surrounded by `<` and `>`
1. A tag can have a content
1. A closing tag determines where the element finishes and 
aditionally contains a `/` symbol that identifies it as a closing
tag






---
class: left,top
##Doctype

The first thing we find in an HTML document is a Doctype

```html
*<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        This is my first web page
    </body>
</html>
```

There are several versions of HTML, each defines serveral tags 
and have slightly different rules. The current version
of HTML is **HTML 5**. This line lets the browser know
we are using HTML 5.



---
class: left,top
##HTML Tag

All documents are surrounded by the HTML tag and closed
by the corresponding closing tag.

```html
<!DOCTYPE html>
*<html>
    <head>
    </head>
    <body>
        This is my first web page
    </body>
*</html>
```


---
class: left,top
##HEAD Tag

The HEAD tag is where we store, metadata about our
document

```html
<!DOCTYPE html>
<html>
*    <head>
*    </head>
    <body>
        This is my first web page
    </body>
</html>
```

For example, we can use the `title` tag to give a name to our document

```html
<!DOCTYPE html>
<html>
    <head>
*        <title> My First Web Page </title>
    </head>
    <body>
        This is my first web page
    </body>
</html>
```
---
class: left,top
##BODY Tag

The BODY tag holds the meat of our document, This document
justs contains the line "This is my first web page"

```html
<!DOCTYPE html>
<html>
    <head>
    </head>
*    <body>
        This is my first web page
*    </body>
</html>
```

---
class: left,top
##HTML and Whitespace

Whitespace, is everything that separates normal characters:
spaces,tabs and new lines.

In HTML space is collapsed, meaning that consecutive
whitespace is just treated as a single space. This is 
why the following document, will just show in
one line.

```html
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        This is my first web page.
        
        
        
*        And this is it's content.        


    </body>
</html>
```
---
class: left,top
##Self Closing Tags ( Part I )

In order for content to be shown
in another line, we need to explicitly create
a break, in HTML this is done with the `br` tag

```html
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        This is my first web page.
*        <br>
        And this is it's content.        

    </body>
</html>
```

Notice that br doesn't have a matching tag.  This is because
a break ( or enter ) can have no content. `<br>` is one
of the html `self closing tags`.
---
class: left,top
##Self Closing Tags ( Part II )

**br** is one of several self closing tags, but you
can open and close any tag at the same time, by using
the following trick

```html
<!DOCTYPE html>
<html>
*    <head />
    <body>
        This is my first web page.
*        <br />
        And this is it's content.        
    </body>
</html>
```

Notice that the `/`, is now on the other side of the tag 
to where it would normally it would be, in the previous
example:
`<head></head>` and `<head />` are equivalent.

`<br>` doesn't strictly needs to be closed, but we will
be using the `<br />` to explicitly mark that it doesn't
have any content.


---
class: left,top
##Self Closing Tags ( Part III )

Another example of a self closing tag is `<hr>`.
**HR** stands  for horizontal rule.
Just like `<br>` an horizontal rule can't have
content so its self closing.

```html
<!DOCTYPE html>
<html>
*    <head />
    <body>
        This is my first web page.
*        <hr />
        This second line is separated by an horizontal rule
    </body>
</html>
```
---
class: left,top
##Attributes

A tag can also have attributes, in its opening
tag

```html
<!DOCTYPE html>
<html lang="en">
    <head />
    <body>
        This is my first web page.
        <br />
        And this is its content.        
    </body>
</html>
```
In this case we added the attribute `lang` to our `html` tag.
For example can be used by the browser, to offer to translate
from the documents language to the users native language.

Most attributes have a value and we use the equal sign
and quotes to specify it.

---
class: left,top
##Our first tags ( Part I )

##&lt;h1&gt;
The `<h1>` tag marks some content as a heading

##&lt;p&gt;
The `<p>` tag marks some content as a pargraph


---
class: left,top
##Our first tags ( Part II )

```html
<!DOCTYPE html>
<html lang='en'>
    <head></head>
    <body>
    
        <h1> This is my first web page </h1>
    
        <p>
            And this its content. <br />
            I assure you there is more to come.
        </p>
        
        <p>
            I told you there was more! <br />
            As you can see it even has a second paragraph.
        </p>
        

    </body>
</html>
```
---
class: left,top
##More about headings

There is more then one heading, there are **6** in fact
all called helpfully: 

##&lt;h1&gt;
The `<h1>` tag marks some content as a primary heading

##&lt;h2&gt;
The `<h2>` tag marks some content as a secondary heading

##&lt;h3&gt;
The `<h3>` tag marks some content as a tertiary heading

...

##&lt;h6&gt;
The `<h6>` tag marks some content as a senary heading
---
class: left,top
##More about headings ( Part II )

From now on we are going to show the content
of the `<body>` to save space
```html
<h1> All about puppies </h1>
<p>
    Welcome to puppy world, here you will find
    all kinds of information about puppies.
</p>

<h2> Frequently Asked Questions </h2>

<h3> What is a puppy? </h3>
<p> A puppy is a young dog </p>

<h3> Should I get a puppy? </h3>
<p> YES </p>

<h3> Are puppies awesome? </h3>
<p> YES </p>
```
---
class: left,top
##Some more tags ( Part I )

##&lt;em&gt;
The `<em>` tag marks some content for emphasis.
By default the browser makes this text *italic*.

##&lt;strong&gt;
The `<strong>` tag marks some content as important
By default the browser makes this text **bold**.
---
class: left,top
##Some more tags ( Part II )

From now on we are going to show the content
of the `<body>` to save space
```html
<h1> All about puppies </h1>
<p>
    Welcome to puppy world, here you will find
    all kinds of information about puppies.
</p>

<h2> Frequently Asked Questions </h2>

<h3> What is a puppy? </h3>
<p> 
*    A puppy is a <em>young dog</em> 
</p>

<h3> Should I get a puppy? </h3>
<p> 
*    <strong>Yes</strong>, but only if you want one. 
</p>

<h3> Are puppies awesome? </h3>
<p> 
*    <strong>Yes</strong>, they are pretty awesome
</p>
```
---
class: left,top
##Styling vs Semantics

As you might have caught on tags serve two purposes.

##Styling
Gives a distinct look to some content

##Semantics
Gives a some meaning its content.

> Semantics (from Ancient Greek: σημαντικός sēmantikós, "significant") is the study of meaning. It focuses on the relation between signifiers, like words, phrases, signs, and symbols, and what they stand for; their denotation.




---
class: left,top
###HTML Entities

You might have been asking yourself what if I want
to use a character that means something in HTML
like `<` or `>` or even space. HTML lets us specify this characters but with a special
syntax. We can even use entities for more than reserved
characters

| Name              | Html Entity     | Result |
|-------------------|-----------------|------- |
| Greater Than      | **&amp;gt;**    | `>`    |
| Less Than         | **&amp;lt;**    | `<`    |
| Space             | **&amp;nbsp;**  | ` `    |
| Ampersand         | **&amp;amp;**   | `&`    |
| Quote             | **&amp;quot;**  | `"`    |
| Single Quote      | **&amp;apos;**  | `'`    |
| Copyright         | **&amp;copy;**  | `©`    |
| Euro              | **&amp;euro;**  | `€`    |
| Right Angle Quote | **&amp;raquo;** | `»`    |
| Left  Angle Quote | **&amp;laquo;** | `«`    |





---
class: left,top
##HTML Entities ( Part II )

This are some things that you can do
with html entities

```html
No we can write &lt;html&gt; in our html
```

```html
After this sentence there is three spaces.&nbsp;&nbsp;&nbsp;
And then the new setence starts.
```
---
class: left,top
##Even More tags ( Part I )

###&lt;blockquote&gt;
Used to mark a quote, from a book, movie or person

###&lt;ins&gt; and &lt;del&gt;
Used to mark deletions and/or insertions to the
text

###&lt;mark&gt;
Used to mark a content generally, in browsers
is generally shown with a yellow background.

###&lt;sup&gt; and &lt;sub&gt;
Use to create superscripts and subscripts

###&lt;acronym&gt; and &lt;abbr&gt;
Used to mark acronyms and abreviations

---
class: left,top
##Even More tags ( Part II )

```html
<blockquote cite="http://puppiesareawesome.com">
    <p>Puppies are awesome</p>
    <strong> Jose R. Villalon </strong>
</blockquote>
```

```html
Hello <del>Wold</del> <ins>World</ins>
```

```html
Don't forget to buy the <mark>milk</mark>
```

```html
<strong> H<sub>2</sub>O </strong> is water, <br />
<strong> <sup>2</sup>H<sub>2</sub>O </strong> is heavy water
```

```html
We are learning <acronym title="HyperText Markup Language">HTML</acronym>
```

```html
<abbr title="World Health Organization">WHO</abbr>
```



---
class: left,top
##Lists ( Part I )

HTML provides three types of lists

###&lt;dl&gt;
Use for definition lists

###&lt;ul&gt;
Used for unsorted lists

###&lt;ol&gt;
Used for numbered lists




---
class: left,top
##Lists ( Part II )

Definition lists `<dl>` are used to create glossaries of terms
definition lists use the tags `dd` and `dt` to specify a term
and definition respectively.

```html
<dl>
  <dt>Coffee</dt>
  <dd>Black hot drink</dd>
  <dt>Milk</dt>
  <dd>White cold drink</dd>
</dl>
```
---
class: left,top
##Lists ( Part III )

The two other kinds of list are `<ul>` and `<ol>`
They both use the tag `li` to specify its list items

```html
<h1> Types of Fruit </h1>
<ul>
    <li> Bananas  </li>
    <li> Apples   </li>
    <li> Oranges  </li>
</ul>
```

```html
<h1> How to eat a banana </h1>
<ol>
    <li> Check that your banana is ripe  </li>
    <li> Peel the banana </li>
    <li> Get rid of the skin  </li>
    <li> Eat and Enjoy  </li>
</ol>
```
---
class: left,top
###Nesting Lists

List can be nested

```html
<ol>
  <li>
    Colors
    <ul>
        <li> Red </li>
        <li> Green </li>
        <li> Blue </li>
    </ul>
  </li>
  <li>
    Animals
    <ul>
        <li> Dog </li>
        <li> Cat </li>
        <li> Elephants </li>
    </ul>
  </li>
</ol>
```
---
class: left,top
###Tables

Tables are used to show tabular data.

```html
<table>
    <thead>
        <tr>
            <th> Make </th>
            <th> Model </th>
            <th> Country </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td> Toyota </td>
            <td> Camry </td>
            <td> Japan </td>
        </tr>
        <tr>
            <td> Ford  </td>
            <td> Mustang </td>
            <td> USA </td>
        </tr>
    </tbody>
</table>
```

---
class: left,top
##Links

External Links

```html
<a href='http://www.google.com' target='_blank'>
    Google.com
</a>
```

```html
<h2> Menu </h2>
<a href='#introduction'> Introduction </a>
&nbsp;
<a href='#glossary'> Glossary </a>

<h2 id='introduction'> Introduction </h2>
<p> This is the introduction </p>

<br /><br /><br /><br /><br /><br /><br /><br />
<br /><br /><br /><br /><br /><br /><br /><br />

<h2 id='glossary'> Glossary </h2>
<p> This is the glossary </p>


```
---
class: left,top
##Images


```html
<img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Golde33443.jpg" 
     alt="Golden Retriever Puppy" 
     width="400"
     height="482" 
/>
```

---
class: left,top
#Resources

##http://www.w3schools.com/tags/