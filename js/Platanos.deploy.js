smalltalk.addPackage('Platanos');
smalltalk.addClass('Platanos', smalltalk.Object, [], 'Platanos');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.Platanos)})},
messageSends: ["initialize"]}),
smalltalk.Platanos);

smalltalk.addMethod(
smalltalk.method({
selector: "testDocGraphCell",
fn: function (){
var self=this;
var json,doc;
function $Doc(){return smalltalk.Doc||(typeof Doc=="undefined"?nil:Doc)}
function $Component(){return smalltalk.Component||(typeof Component=="undefined"?nil:Component)}
function $DocGraphCell(){return smalltalk.DocGraphCell||(typeof DocGraphCell=="undefined"?nil:DocGraphCell)}
return smalltalk.withContext(function($ctx1) { 
json="{\x22sha1\x22:345436 , \x22csummary\x22: \x22this is my first commit\x22}";
doc=_st($Doc())._json_(json);
_st($DocGraphCell())._connect_at_to_doc_("",(0),_st($Component())._root(),doc);
return self}, function($ctx1) {$ctx1.fill(self,"testDocGraphCell",{json:json,doc:doc},smalltalk.Platanos)})},
messageSends: ["json:", "connect:at:to:doc:", "root"]}),
smalltalk.Platanos);

smalltalk.addMethod(
smalltalk.method({
selector: "testSearchPage",
fn: function (){
var self=this;
var si;
return smalltalk.withContext(function($ctx1) { 
_st((smalltalk.SearchResult || SearchResult))._connect_at_to_with_("1","1",si,"Craig fergusons show breaks all records");
_st((smalltalk.SearchResult || SearchResult))._connect_at_to_with_("1","2",si,"Potatoes at 4 euros a bag, come and get them");
_st((smalltalk.SearchResult || SearchResult))._connect_at_to_with_("1","3",si,"Darren Browns new trick fools viewers");
_st((smalltalk.SearchResult || SearchResult))._connect_at_to_with_("1","4",si,"Chinese noodles at half the price");
return self}, function($ctx1) {$ctx1.fill(self,"testSearchPage",{si:si}, smalltalk.Platanos)})},
messageSends: ["connect:at:to:", "root", "connect:at:to:with:"]}),
smalltalk.Platanos);

smalltalk.addMethod(
smalltalk.method({
selector: "testWikiPage",
fn: function (){
var self=this;
var si;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"testWikiPage",{si:si}, smalltalk.Platanos)})},
messageSends: ["connect:at:to:with:", "root"]}),
smalltalk.Platanos);


