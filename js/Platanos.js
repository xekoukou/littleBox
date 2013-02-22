smalltalk.addPackage('Platanos', {});
smalltalk.addClass('Platanos', smalltalk.Object, [], 'Platanos');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.Platanos)})},
args: [],
source: "initialize\x0a\x0asuper initialize\x0a\x0a",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.Platanos);

smalltalk.addMethod(
"_testSearchPage",
smalltalk.method({
selector: "testSearchPage",
category: 'not yet classified',
fn: function (){
var self=this;
var si;
return smalltalk.withContext(function($ctx1) { 
_st((smalltalk.SearchResult || SearchResult))._connect_at_to_with_("1","1",si,"Craig fergusons show breaks all records");
_st((smalltalk.SearchResult || SearchResult))._connect_at_to_with_("1","2",si,"Potatoes at 4 euros a bag, come and get them");
_st((smalltalk.SearchResult || SearchResult))._connect_at_to_with_("1","3",si,"Darren Browns new trick fools viewers");
_st((smalltalk.SearchResult || SearchResult))._connect_at_to_with_("1","4",si,"Chinese noodles at half the price");
return self}, function($ctx1) {$ctx1.fill(self,"testSearchPage",{si:si}, smalltalk.Platanos)})},
args: [],
source: "testSearchPage\x0a\x0a|si|\x0a\x0asi:=SearchInput connect: '' at: 0 to: (Component root).\x0a\x0aSearchResult connect:'1' at:'1' to: si with:'Craig fergusons show breaks all records'.\x0aSearchResult connect:'1' at:'2' to: si with:'Potatoes at 4 euros a bag, come and get them'.\x0aSearchResult connect:'1' at:'3' to: si with:'Darren Browns new trick fools viewers'.\x0aSearchResult connect:'1' at:'4' to: si with:'Chinese noodles at half the price'.\x0a\x0a",
messageSends: ["connect:at:to:", "root", "connect:at:to:with:"],
referencedClasses: ["Component", "SearchInput", "SearchResult"]
}),
smalltalk.Platanos);

smalltalk.addMethod(
"_testWikiPage",
smalltalk.method({
selector: "testWikiPage",
category: 'not yet classified',
fn: function (){
var self=this;
var si;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"testWikiPage",{si:si}, smalltalk.Platanos)})},
args: [],
source: "testWikiPage\x0a\x0a|si|\x0a\x0asi:=WikiPage connect: '' at: 0 to: (Component root) with: 'I need some help with properly written `.htaccess` file. I did try my best but it doesnt work always as expected. What I want to achieve is this:\x0a\x0a - first of all, if browser requests `favicon.ico`, it immediately gets 404, no exceptions, no rewrites/redirects (my current code still rewrites it, and then returns 404),\x0a - if subdomain is `admin.`, rewrite traffic to `/admin/` folder (leaving `admin.` in URL), otherwise rewrite to `www.`\x0a - check if URL has `www.` in front of domain, even if on any subfolder (ex.: domain.com/en/sub1/sub2/), otherwise redirect,\x0a - check if language is selected (en|sl), otherwise choose default `sl` and redirect\x0aother requests to index.php in root dir (with lang code included, ex.: www.domain.com/en/example/#selection, ?a=b doesnt need to be sent, I wont use it)\x0a\x0a**Current `.htaccess`:**\x0a\x0a$$x=y+67$$\x0a\x0a    \x0a\x0a**Problems:**\x0a\x0a - when accessing `admin.domain.com` I get `500 Internal Server Error`,\x0a - `favicon.ico` isnt returned with 404 at first instance,\x0a - everything else works, but if you have recommendation on how to improve it, I would appreciate it.\x0a\x0a**SOLUTION:**\x0a\x0aI removed the `RedirectMatch` rule and just go with `Redirect 404 /favicon.ico`, but in addition I had to add almost everywhere `RewriteCond %{REQUEST_FILENAME} !favicon.ico` to get proper 404 response (without any rewrite/redirection).\x0a\x0aAbout admin subdomain: I leaved exactly the same rules, but I have created additional `.htaccess` in /admin folder, which sorts out traffic that gets there. '\x0a",
messageSends: ["connect:at:to:with:", "root"],
referencedClasses: ["Component", "WikiPage"]
}),
smalltalk.Platanos);


