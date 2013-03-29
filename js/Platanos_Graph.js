smalltalk.addPackage('Platanos_Graph');
smalltalk.addClass('DocGraph', smalltalk.Component, ['doc'], 'Platanos_Graph');
smalltalk.DocGraph.comment="\x22The Json that is passed to this function has this form:\x0a\x0a\x0a{initialDoc:dsff , descendants:[docs]}\x22"
smalltalk.addMethod(
smalltalk.method({
selector: "doc:",
category: 'not yet classified',
fn: function (aDoc){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@doc"]=aDoc;
return self}, function($ctx1) {$ctx1.fill(self,"doc:",{aDoc:aDoc},smalltalk.DocGraph)})},
args: ["aDoc"],
source: "doc: aDoc\x0a\x0adoc := aDoc.",
messageSends: [],
referencedClasses: []
}),
smalltalk.DocGraph);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.Component.fn.prototype._initialize.apply(_st(self), []);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.DocGraph)})},
args: [],
source: "initialize\x0a\x0asuper initialize.",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.DocGraph);

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
return self}, function($ctx1) {$ctx1.fill(self,"paintOn:",{css:css},smalltalk.DocGraph)})},
args: ["css"],
source: "paintOn: css\x0a\x0a\x0a\x0acss selector: '' attr: 'padding' val: '5px'.\x0acss selector: '' attr: 'box-shadow' val: '1px 1px 3px rgba(0, 0, 0, 0.5)'.\x0acss selector: '' attr: 'border-radius' val: '2px'.\x0acss selector: '' attr: 'text-align' val: 'left'.\x0acss selector: '' attr: 'margin' val: '3px'.\x0a\x0acss selector: '' attr:'position' val: 'fixed'.\x0a\x0acss selector: '#',pid,'10' attr: 'font' val:'12px/25px Arial, sans-serif'.",
messageSends: ["selector:attr:val:", ","],
referencedClasses: []
}),
smalltalk.DocGraph);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'not yet classified',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(html)._div())._with_(_st(self["@doc"])._at_("csummary"));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.DocGraph)})},
args: ["html"],
source: "renderOn: html\x0a\x0ahtml div with: (doc at: 'csummary').",
messageSends: ["with:", "at:", "div"],
referencedClasses: []
}),
smalltalk.DocGraph);


smalltalk.addMethod(
smalltalk.method({
selector: "connect:at:to:json:",
category: 'not yet classified',
fn: function (anElementId,aPosition,aParent,aJson){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self)._new();
_st($1)._json_(aJson);
$2=_st($1)._connect_at_to_(anElementId,aPosition,aParent);
return self}, function($ctx1) {$ctx1.fill(self,"connect:at:to:json:",{anElementId:anElementId,aPosition:aPosition,aParent:aParent,aJson:aJson},smalltalk.DocGraph.klass)})},
args: ["anElementId", "aPosition", "aParent", "aJson"],
source: "connect: anElementId at: aPosition to: aParent json: aJson\x0a\x0aself new json: aJson; connect: anElementId at: aPosition to: aParent.",
messageSends: ["json:", "new", "connect:at:to:"],
referencedClasses: []
}),
smalltalk.DocGraph.klass);


smalltalk.addClass('DocGraphCell', smalltalk.Component, ['doc'], 'Platanos_Graph');
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
_st(_st(html)._div())._with_(_st(self["@doc"])._at_("csummary"));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.DocGraphCell)})},
args: ["html"],
source: "renderOn: html\x0a\x0ahtml div with: (doc at: 'csummary').",
messageSends: ["with:", "at:", "div"],
referencedClasses: []
}),
smalltalk.DocGraphCell);


smalltalk.addMethod(
smalltalk.method({
selector: "connect:at:to:doc:",
category: 'not yet classified',
fn: function (anElementId,aPosition,aParent,aDoc){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self)._new();
_st($1)._doc_(aDoc);
$2=_st($1)._connect_at_to_(anElementId,aPosition,aParent);
return self}, function($ctx1) {$ctx1.fill(self,"connect:at:to:doc:",{anElementId:anElementId,aPosition:aPosition,aParent:aParent,aDoc:aDoc},smalltalk.DocGraphCell.klass)})},
args: ["anElementId", "aPosition", "aParent", "aDoc"],
source: "connect: anElementId at: aPosition to: aParent doc: aDoc\x0a\x0aself new doc: aDoc; connect: anElementId at: aPosition to: aParent.",
messageSends: ["doc:", "new", "connect:at:to:"],
referencedClasses: []
}),
smalltalk.DocGraphCell.klass);


