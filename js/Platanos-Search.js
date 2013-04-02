smalltalk.addPackage('Platanos-Search');
smalltalk.addClass('DocGraphCell', smalltalk.Component, ['doc'], 'Platanos-Graph');
smalltalk.addMethod(
smalltalk.method({
selector: "doc:",
category: 'not yet classified',
fn: function (aDoc){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@doc"]=aDoc;
return self}, function($ctx1) {$ctx1.fill(self,"doc:",{aDoc:aDoc},smalltalk.DocGraphCell)})},
args: ["aDoc"],
source: "doc: aDoc\x0a\x0adoc := aDoc.",
messageSends: [],
referencedClasses: []
}),
smalltalk.DocGraphCell);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.Component.fn.prototype._initialize.apply(_st(self), []);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.DocGraphCell)})},
args: [],
source: "initialize\x0a\x0asuper initialize.",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.DocGraphCell);

smalltalk.addMethod(
smalltalk.method({
selector: "paintOn:",
category: 'not yet classified',
fn: function (css){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(css)._selector_attr_val_("","padding","5px");
_st(css)._selector_attr_val_("","box-shadow","1px 1px 3px rgba(0, 0, 0, 0.5)");
_st(css)._selector_attr_val_("","border-radius","2px");
_st(css)._selector_attr_val_("","text-align","left");
_st(css)._selector_attr_val_("","margin","3px");
_st(css)._selector_attr_val_("","position","fixed");
_st(css)._selector_attr_val_(_st(_st("#").__comma(self["@pid"])).__comma("10"),"font","12px/25px Arial, sans-serif");
return self}, function($ctx1) {$ctx1.fill(self,"paintOn:",{css:css},smalltalk.DocGraphCell)})},
args: ["css"],
source: "paintOn: css\x0a\x0a\x0a\x0acss selector: '' attr: 'padding' val: '5px'.\x0acss selector: '' attr: 'box-shadow' val: '1px 1px 3px rgba(0, 0, 0, 0.5)'.\x0acss selector: '' attr: 'border-radius' val: '2px'.\x0acss selector: '' attr: 'text-align' val: 'left'.\x0acss selector: '' attr: 'margin' val: '3px'.\x0a\x0acss selector: '' attr:'position' val: 'fixed'.\x0a\x0acss selector: '#',pid,'10' attr: 'font' val:'12px/25px Arial, sans-serif'.",
messageSends: ["selector:attr:val:", ","],
referencedClasses: []
}),
smalltalk.DocGraphCell);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'not yet classified',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(html)._text_(_st(self["@doc"])._at_("csummary"));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.DocGraphCell)})},
args: ["html"],
source: "renderOn: html\x0a\x0ahtml text: (doc at: 'csummary').",
messageSends: ["text:", "at:"],
referencedClasses: []
}),
smalltalk.DocGraphCell);


smalltalk.addMethod(
smalltalk.method({
selector: "connect:at:to:with:",
category: 'not yet classified',
fn: function (anElementId,aPosition,aParent,aDoc){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self)._new();
_st($1)._doc_(aDoc);
$2=_st($1)._connect_at_to_(anElementId,aPosition,aParent);
return self}, function($ctx1) {$ctx1.fill(self,"connect:at:to:with:",{anElementId:anElementId,aPosition:aPosition,aParent:aParent,aDoc:aDoc},smalltalk.DocGraphCell.klass)})},
args: ["anElementId", "aPosition", "aParent", "aDoc"],
source: "connect: anElementId at: aPosition to: aParent with: aDoc\x0a\x0aself new doc: aDoc; connect: anElementId at: aPosition to: aParent.",
messageSends: ["doc:", "new", "connect:at:to:"],
referencedClasses: []
}),
smalltalk.DocGraphCell.klass);


smalltalk.addClass('SearchInput', smalltalk.Component, [], 'Platanos-Search');
smalltalk.addMethod(
smalltalk.method({
selector: "function",
category: 'subclassing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
args: [],
source: "function",
messageSends: [],
referencedClasses: []
}),
smalltalk.SearchInput);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initializing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.SearchInput)})},
args: [],
source: "initialize\x0a\x0asuper initialize.",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.SearchInput);

smalltalk.addMethod(
smalltalk.method({
selector: "paintOn:",
category: 'subclassing',
fn: function (css){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(css)._selector_attr_val_("input","top","60px");
_st(css)._selector_attr_val_("input","left","40%");
_st(css)._selector_attr_val_("input","width","20%");
_st(css)._selector_attr_val_("input","box-shadow","inset 2px 2px 5px black");
_st(css)._selector_attr_val_(_st(_st("#").__comma(self["@pid"])).__comma("10"),"position","relative");
_st(css)._selector_attr_val_(_st(_st("#").__comma(self["@pid"])).__comma("10"),"top","120px");
_st(css)._selector_attr_val_(_st(_st("#").__comma(self["@pid"])).__comma("10"),"left","35%");
_st(css)._selector_attr_val_("ol","width","30%");
_st(css)._selector_attr_val_("ol","list-style","none inside");
return self}, function($ctx1) {$ctx1.fill(self,"paintOn:",{css:css}, smalltalk.SearchInput)})},
args: ["css"],
source: "paintOn: css\x0a\x0acss selector: 'input' attr:'position' val: 'relative'.\x0acss selector: 'input' attr:'top' val: '60px'.\x0acss selector: 'input' attr:'left' val: '40%'.\x0acss selector: 'input' attr:'width' val: '20%'.\x0acss selector: 'input' attr:'box-shadow' val: 'inset 2px 2px 5px black'.\x0a\x0acss selector: '#',pid,'10' attr:'position' val: 'relative'.\x0acss selector: '#',pid,'10' attr:'top' val: '120px'.\x0acss selector: '#',pid,'10' attr:'left' val: '35%'.\x0acss selector: 'ol' attr: 'width' val: '30%'.\x0a\x0acss selector: 'ol' attr: 'list-style' val: 'none inside'.\x0a",
messageSends: ["selector:attr:val:", ","],
referencedClasses: []
}),
smalltalk.SearchInput);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'subclassing',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(html)._form())._with_((function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$1=_st(html)._ol();
_st($1)._id_(_st(self)._assignId());
$2=_st($1)._with_("results:");
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html}, smalltalk.SearchInput)})},
args: ["html"],
source: "renderOn: html\x0a\x0ahtml form with:[html input type:'search'.].\x0ahtml ol  id: self assignId; with:'results:'",
messageSends: ["with:", "type:", "input", "form", "id:", "assignId", "ol"],
referencedClasses: []
}),
smalltalk.SearchInput);

smalltalk.addMethod(
smalltalk.method({
selector: "setConnectors",
category: 'subclassing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@connectors"])._addConnectorId_("1");
return self}, function($ctx1) {$ctx1.fill(self,"setConnectors",{}, smalltalk.SearchInput)})},
args: [],
source: "setConnectors\x0a\x0aconnectors:= Connectors new.\x0a\x0a\x22searchResult connector\x22\x0aconnectors addConnectorId: '1'.",
messageSends: ["new", "addConnectorId:"],
referencedClasses: ["Connectors"]
}),
smalltalk.SearchInput);

smalltalk.addMethod(
smalltalk.method({
selector: "setEquations",
category: 'subclassing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
args: [],
source: "setEquations",
messageSends: [],
referencedClasses: []
}),
smalltalk.SearchInput);

smalltalk.addMethod(
smalltalk.method({
selector: "setVariables",
category: 'subclassing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
args: [],
source: "setVariables\x0a",
messageSends: [],
referencedClasses: []
}),
smalltalk.SearchInput);



smalltalk.addClass('SearchResult', smalltalk.Component, ['text'], 'Platanos-Search');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.SearchResult)})},
args: [],
source: "initialize\x0a\x0asuper initialize.",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.SearchResult);

smalltalk.addMethod(
smalltalk.method({
selector: "paintOn:",
category: 'not yet classified',
fn: function (css){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(css)._selector_attr_val_("li","border-color","forestgreen");
_st(css)._selector_attr_val_("li","box-shadow","1px 1px 3px rgba(0, 0, 0, 0.5)");
_st(css)._selector_attr_val_("li","border-radius","2px");
_st(css)._selector_attr_val_("li","text-align","left");
_st(css)._selector_attr_val_("li","margin","3px");
_st(css)._selector_attr_val_("li","position","relative");
_st(css)._selector_attr_val_("li","left","-40px");
_st(css)._selector_attr_val_(_st(_st("#").__comma(self["@pid"])).__comma("10"),"font","12px/25px Arial, sans-serif");
return self}, function($ctx1) {$ctx1.fill(self,"paintOn:",{css:css}, smalltalk.SearchResult)})},
args: ["css"],
source: "paintOn: css\x0a\x0a\x0a\x22css selector: 'li' attr: 'border-style' val: 'solid'.\x0acss selector: 'li' attr: 'border-width' val: '1px'.\x22\x0acss selector: 'li' attr: 'padding' val: '5px'.\x0acss selector: 'li' attr: 'border-color' val: 'forestgreen'.\x0acss selector: 'li' attr: 'box-shadow' val: '1px 1px 3px rgba(0, 0, 0, 0.5)'.\x0acss selector: 'li' attr: 'border-radius' val: '2px'.\x0acss selector: 'li' attr: 'text-align' val: 'left'.\x0acss selector: 'li' attr: 'margin' val: '3px'.\x0a\x0acss selector: 'li' attr:'position' val: 'relative'.\x0acss selector: 'li' attr:'left' val: '-40px'.\x0a\x0acss selector: '#',pid,'10' attr: 'font' val:'12px/25px Arial, sans-serif'.\x0a",
messageSends: ["selector:attr:val:", ","],
referencedClasses: []
}),
smalltalk.SearchResult);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'not yet classified',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(html)._li())._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st($1)._id_(_st(self)._assignId());
$2=_st($1)._with_(self["@text"]);
return $2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html}, smalltalk.SearchResult)})},
args: ["html"],
source: "renderOn: html\x0a\x0ahtml li with: [html div id:self assignId ;with:text.].",
messageSends: ["with:", "id:", "assignId", "div", "li"],
referencedClasses: []
}),
smalltalk.SearchResult);

smalltalk.addMethod(
smalltalk.method({
selector: "text:",
category: 'not yet classified',
fn: function (aText){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"text:",{aText:aText}, smalltalk.SearchResult)})},
args: ["aText"],
source: "text: aText\x0a\x0atext := aText.",
messageSends: [],
referencedClasses: []
}),
smalltalk.SearchResult);


smalltalk.addMethod(
smalltalk.method({
selector: "connect:at:to:with:",
category: 'not yet classified',
fn: function (anElementId,aPosition,aParent,aText){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(self)._new();
_st($1)._text_(aText);
$2=_st($1)._connect_at_to_(anElementId,aPosition,aParent);
return self}, function($ctx1) {$ctx1.fill(self,"connect:at:to:with:",{anElementId:anElementId,aPosition:aPosition,aParent:aParent,aText:aText}, smalltalk.SearchResult.klass)})},
args: ["anElementId", "aPosition", "aParent", "aText"],
source: "connect: anElementId at: aPosition to: aParent with: aText\x0a\x0aself new text: aText; connect: anElementId at: aPosition to: aParent.\x0a\x0a",
messageSends: ["text:", "new", "connect:at:to:"],
referencedClasses: []
}),
smalltalk.SearchResult.klass);

