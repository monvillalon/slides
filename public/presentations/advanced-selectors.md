class: center,middle
#Advanced Selectors
---
class: left,top
#Direct Decendant Selector

```css

/* Images but only if its a direct child of a header */
header > img {
  height: 300px;
}
```
---
class: left,top
#Attribute Selectors ( Part I )

```css
/* Has Attribute */
a[title] {
  border-bottom: 1px dotted blue;
}

/* Attribute Value Equals */
a[href="http://google.com"] {
  border-bottom: 1px dotted red;
}

/* Attribute Value Contains */
a[href*="google.com"] {
  border-bottom: 1px dotted purple;
}

/* Attribute Doesn't Contain */
a[href-*="google.com"] {
  border-bottom: 1px dotted yellow;
}

```
---
class: left,top
#Attribute Selectors ( Part II )

```css
/* Attribute Value Starts */
a[href^="https://"] {
  border-bottom: 1px dotted green;
}

/* Attribute Value Ends */
a[href$=".jpg"] {
  border-bottom: 1px dotted orange;
}

/* Contains must it be must be its own word*/
a[class~="highlight"] {
  border-bottom: 1px dotted purple;
}

```
---
class: left,top
#Sibling Selectors

```css
/* p directly after an h1 */
h1 + p {
  background: red;
}

/* p somewhere after an h1, on the same level */
h1 ~ p {
  background: red;
}
```
---
class: left,top
#Link Selectors

```css
/* unvisited link */
a:link   { color: red; }

/* visited link */
a:visted { color: green; }
```
---
class: left,top
#Hover Selector

```css
 /* 
  this style applies only when cursor
  is over an element 
 */
 h1:hover  { 
    background: yellow;
    cursor: pointer;
}
```
---
class: left,top
#Pseudo Elements

```css
/* Applies to only the first letter of a paragraph */
p::first-letter {
    font-size: 3em;
}

/* Applies to the first line of a paragraph */
p::first-line{ 
    font-weight: bold;
}
```
---
class: left,top
#Position Selectors

```css
/* The first li */
li:first-child { color: green; }

/* The last li */
li:last-child { color: blue; }

/* When there is only one li */
li:only-child { color: magenta; }

/* Even positions, ej: 0,2,4,6... */
li:nth-child(even) { color: orange; }

/* Even positions, ej: 1,3,5... */
li:nth-child(odd) { color: yellow; }

/* The li on the 3rd position */
li:nth-child(3) { color: red; }

/* The li on the 2nd position for the end */
li:nth-last-child(2) { color: brown; }

```