class: center,middle
#Introduction to Web
---
class: left,top
#What is the web

> The World Wide Web is a collection of **interlinked** **documents**
> identified by **URLs** and accessible thru the **internet**.
> Colloquilally referred as the **Web**

In more human terms, the Web is just the platform
for the web pages we know and use every day.








---
class: left,top
#What is an URL ( Part I )

Every page we use is a document that lives somewhere, generally
a computer somewhere in the world, we called this computer 
a **server** because it *"serves us the document"*.

To identify where a document lives we use its **URL** or
**Uniform Resource Location** its a string of characters that
dermines the location of a document.

URLs are all about finding stuff by giving them a name.

Examples for url are:

- http://www.amazon.com/books-used-books-textbooks/
- https://www.google.com

A more complex URL might look something like this, we will break
it down into parts in the next section

###`http://domain.com:80/index.html?page=1&size=10#anchor`

---
class: left,top
#What is an URL ( Part II )

###`http://domain.com:80/index.html?page=1&size=10#anchor`

The first thing an url defines is a `protocol` in this case 
we are using `http`. 

###`http://....`

A protocol is just a set of rules on how computers are going to 
communicate. Like when humans say *hello* when we me meet and 
*goodbye* when they part,
computers need a set of rules to exchange information. HTTP
defines those rules.  

HTTP stands for **H**yper**T**ext **T**ransport **P**rotocol.
So you can read this as a set of rules to transfer `HyperText`,
which will learn about soon.

The web is exclusively comprimised of two protocols **http** and
**https** the diference between them is that **https** changes our
data ( encrypts ) our data in such a way that makes it
almost imposible for a third party, neither you or the server,
to read your communications making it ideal to share sensitive
data like credit card information.

The protocol defines **HOW** a document is going to be served.




---
class: left,top
#What is an URL ( Part III )

###`http://domain.com:80/index.html?page=1&size=10#anchor`

The second thing an url defines is a `domain` in this case 
we are using `domain.com`

###`http://domain.com...`

You can thing of a domain as a user friendly name 
for a server on the internet. 

They generally end with things like **.com** or **.net**
but this is not necesary.  You have your own domain:
**localhost**, using this domain means that the document
resides in your computer. 

The domain defines from **WHERE** the document is going to be served.
---
class: left,top
#What is an URL ( Part IV )

###`http://domain.com:80/index.html?page=1&size=10#anchor`

The second thing an url defines is a `port` in this case 
we are using `80`

###`http://domain.com:80...`

Every communication over the network is done over a port.
You can think of ports as mailboxes. A webpage can
be accessible both via the http and https protocols
but in order to served from the same machine they
have to listen to different ports, or following
the analogy different mailboxes.

You normaly don't see :80 hanging arround your URLs all
that often because by convention HTTP implies the 80 port. 
HTTPs uses port 443 by default.

Meaning that `http://google.com` and `http://google.com:80` are 
equivalent

A port defines **WHO** in the server is going to return the document.
---
class: left,top
#What is an URL ( Part V )

###`http://domain.com:80/index.html?page=1&size=10#anchor`

After the domain/port an url has a `path` in this case 
we are using `/index.html`

###`http://domain.com:80/index.html`

The path is an actual document to be recieved.
A path follows the same logic as any other file
in a unix/linux/macos file system.

Things can be separated into folders, separated by `/`

A folder can have a default file asociated with it
usally `index.html`

Meaning that requesting
`http://domain.com`, `http://domain.com/` , `http://domain.com:80/index.html` 
are usually equivalent, but it depends
on the configuration of the server

However a file doesn't have to be a "real" file, for
example google doesn't have a file for every possible
search request, files can be generated on the fly as needed
to suit our needs.

A path defines **WHAT** document are we are refering to.






---
class: left,top
#What is an URL ( Part VI )

###`http://domain.com:80/index.html?page=1&size=10#anchor`

After the path an url can define a set of options for the document.
This are called query arguments, query options or query parameters.

###`http://domain.com:80/index.html?page=1&size=10`

If the we are questing a "virtual" file one that doesn't really
exists but its generated on the fly. We could use this
query options to only show the first 10 results of our
cat picture website.



---
class: left,top
#What is an URL ( Part VII )

###`http://domain.com:80/index.html?page=1&size=10#anchor`

At last we get to the `anchor`. An anchor is a reference to place
inside the document.

Wikipedia uses this extensively to give a reference
to each part of the document ej: summary, details, references

---
class: left,top
#HTTP(s)

HTTP/HTTPS are the protocols that power the web. 
Luckily is a fairly simple protocol

The basis of HTTP is the Request/Response

<span style='display:block;text-align:center'>
![Request/Response](/assets/uploads/http-request-response2.png)
</span>

1. A client, usually a browser, makes a request and at least
   provides two bits of information, the **URL** and the **VERB**
2. The server responds with the **Message Body**, the content of the
   file and a **Status Code** that determines the type of
   the response. Ex: If it was sucessful or not
   
   
   
---
class: left,top
#HTTP(s) Verbs ( Part I )

HTTP defines serveral VERBS, but the two most used
ones are 

###GET

Used to get a resource


###POST

Used to send data to the server, probably to create or
update a resource, generally handled by some custom
software.
    
This gives us an idea of what the VERBS are used for:

> The URL defines what we are operating on, the VERB defines
> what we want to do with resource
    
---
class: left,top
#HTTP(s) Verbs ( Part II )

This are not the only HTTP verbs, there are many
this is a partial list

1. OPTIONS
1. HEAD
1. PUT
1. DELETE
1. TRACE
1. CONNECT
1. LINK
1. PATCH




---
class: left,top
#HTTP(s) Status Codes

Once we've asked the server for something, with our HTTP request,
we get a response. But how do we know that we got what we asked for?
Status codes is the way the server lets us know by giving us
a 3 digit number along with the resource. Status codes come in families

**Informational 100 - 199**

This just are used to send information, to the client and rarer in
practice

**Successful    200 - 299**

The most famous is `200` that we define as `OK`, this means
everything was you guess it: OK

**Redirection   300 - 399**

This was not the droid you were looking for! A status codeof `301`
tells the client, that a thing moved and should be requested from somewhere else

**Client Error  400 - 499**

The client did something something wrong must famous is `404` 
that means `Not Found`

**Server Error  500 - 599**
Something went wrong in the server, `500` that means `Internal Server Error` 

---
class: left,top
#HTTP(s) Message Body

Of course the response also has the thing we requested, this is the 
message body
---
class: left,top
#HTTP(s) Headers ( Part I )

There is another piece of information that gets exchanged on every
http request/response.

Both Request and Reponse can have `HTTP Headers`, this are pieces of 
information that tag along and they are used for a myriad fo reasons.

For example when we request a web page the server not only gives
us the web page but appends the header `Content-Type: text/html` along
many others. This tells the client that the response it just got
was a HTML response. An JPEG image would have a `Content-Type: image/jpeg`

A request can also have headers, for example Chrome can append a header
like this to let the server know is talking to a Chrome browser.

`User-Agent: Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36`

It's a little convoluted, and the reason why is so long is a weird one, but
all headers follow the same pattern:

`Header-Name: Header-Value`

---
class: left,top
#HTTP(s) Headers ( Part II )

Headers are used for lots of things

1. Identifying Content-Type
2. Content-Negotiation,   if a resource can have more than one representation
3. Metadata, usefull good to know information but not necesarily used
4. Cache, The server can let the client via headers that a resource
doesn't need to be asked for again for a time span, reducing network
usage.
---
class: left,top
##Trying it out

You can simulate being a web browser from your console
by using `curl`

```bash
curl http://www.google.com
```

You should get the content the message body of the response

To make care print out the full response, with status
code and headers we can use

```bash
curl -I http://www.google.com
```

CURL is making is contructing the request itself, in order
to do it ourselves we can use the command `nc`, this lets use 
create a network connection and pipe the request a browser
would do to it.

```
echo "GET / HTTP/1.1\n\n" | nc www.google.com 80
```

