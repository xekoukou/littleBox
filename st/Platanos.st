Smalltalk current createPackage: 'Platanos'!
Object subclass: #Platanos
	instanceVariableNames: ''
	package: 'Platanos'!

!Platanos methodsFor: 'not yet classified'!

initialize

super initialize
!

testDocGraphCell

|json doc|

json := '{"sha1":345436 , "csummary": "this is my first commit"}'.
doc := Doc json: json.
DocGraphCell connect: '' at: 0 to: (Component root:'https://127.0.0.1:8000') doc: doc.
!

testSearchPage

|si|

si:=SearchInput connect: '' at: 0 to: (Component root:'http://127.0.0.1:4000/platanos.html').

SearchResult connect:'1' at:'1' to: si with:'Craig fergusons show breaks all records'.
SearchResult connect:'1' at:'2' to: si with:'Potatoes at 4 euros a bag, come and get them'.
SearchResult connect:'1' at:'3' to: si with:'Darren Browns new trick fools viewers'.
SearchResult connect:'1' at:'4' to: si with:'Chinese noodles at half the price'.
!

testWikiPage

|si|

si:=WikiPage connect: '' at: 0 to: (Component root:'http://127.0.0.1:4000/platanos.html') with: 'I need some help with properly written `.htaccess` file. I did try my best but it doesnt work always as expected. What I want to achieve is this:

 - first of all, if browser requests `favicon.ico`, it immediately gets 404, no exceptions, no rewrites/redirects (my current code still rewrites it, and then returns 404),
 - if subdomain is `admin.`, rewrite traffic to `/admin/` folder (leaving `admin.` in URL), otherwise rewrite to `www.`
 - check if URL has `www.` in front of domain, even if on any subfolder (ex.: domain.com/en/sub1/sub2/), otherwise redirect,
 - check if language is selected (en|sl), otherwise choose default `sl` and redirect
other requests to index.php in root dir (with lang code included, ex.: www.domain.com/en/example/#selection, ?a=b doesnt need to be sent, I wont use it)

**Current `.htaccess`:**

$$x=y+67$$

    

**Problems:**

 - when accessing `admin.domain.com` I get `500 Internal Server Error`,
 - `favicon.ico` isnt returned with 404 at first instance,
 - everything else works, but if you have recommendation on how to improve it, I would appreciate it.

**SOLUTION:**

I removed the `RedirectMatch` rule and just go with `Redirect 404 /favicon.ico`, but in addition I had to add almost everywhere `RewriteCond %{REQUEST_FILENAME} !!favicon.ico` to get proper 404 response (without any rewrite/redirection).

About admin subdomain: I leaved exactly the same rules, but I have created additional `.htaccess` in /admin folder, which sorts out traffic that gets there. '
! !

