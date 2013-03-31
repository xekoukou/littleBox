smalltalk.addPackage('Platanos-WikiPage');
smalltalk.addClass('WikiPage', smalltalk.Component, ['markdown', 'converter'], 'Platanos-WikiPage');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@converter"]=_st((smalltalk.Pagedown || Pagedown))._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.WikiPage)})},
args: [],
source: "initialize\x0a\x0asuper initialize.\x0aconverter := Pagedown new.",
messageSends: ["initialize", "new"],
referencedClasses: ["Pagedown"]
}),
smalltalk.WikiPage);

smalltalk.addMethod(
smalltalk.method({
selector: "markdown:",
category: 'not yet classified',
fn: function (markdownText){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"markdown:",{markdownText:markdownText}, smalltalk.WikiPage)})},
args: ["markdownText"],
source: "markdown: markdownText\x0a\x0amarkdown := markdownText.",
messageSends: [],
referencedClasses: []
}),
smalltalk.WikiPage);

smalltalk.addMethod(
smalltalk.method({
selector: "paintOn:",
category: 'not yet classified',
fn: function (css){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(css)._selector_attr_val_(_st(_st("#").__comma(self["@pid"])).__comma("10"),"padding","7px");
_st(css)._selector_attr_val_(_st(_st("#").__comma(self["@pid"])).__comma("10"),"border-width","1px");
_st(css)._selector_attr_val_(_st(_st("#").__comma(self["@pid"])).__comma("10"),"box-shadow","3px 3px 5px rgba(0, 0, 0, 0.5)");
_st(css)._selector_attr_val_(_st(_st("#").__comma(self["@pid"])).__comma("10"),"border-radius","4px");
_st(css)._selector_attr_val_(_st(_st("#").__comma(self["@pid"])).__comma("10"),"width","60%");
_st(css)._selector_attr_val_(_st(_st("#").__comma(self["@pid"])).__comma("10"),"left","20%");
_st(css)._selector_attr_val_(_st(_st("#").__comma(self["@pid"])).__comma("10"),"font","12px/25px Arial, sans-serif");
_st((smalltalk.Latex || Latex))._id_(_st(self["@pid"]).__comma("10"));
return self}, function($ctx1) {$ctx1.fill(self,"paintOn:",{css:css}, smalltalk.WikiPage)})},
args: ["css"],
source: "paintOn: css\x0a\x0a\x0acss selector: '#',pid,'10' attr:'position' val: 'relative'.\x0a\x22css selector: '#',pid,'10' attr: 'border-style' val: 'solid'.\x22\x0acss selector: '#',pid,'10' attr: 'padding' val: '7px'.\x0acss selector: '#',pid,'10' attr: 'border-width' val: '1px'.\x0a\x22css selector: '#',pid,'10' attr: 'border-color' val: 'forestgreen'.\x22\x0acss selector: '#',pid,'10' attr: 'box-shadow' val: '3px 3px 5px rgba(0, 0, 0, 0.5)'.\x0acss selector: '#',pid,'10' attr: 'border-radius' val: '4px'.\x0acss selector: '#',pid,'10' attr: 'width' val: '60%'.\x0acss selector: '#',pid,'10' attr: 'left' val: '20%'.\x0a\x0acss selector: '#',pid,'10' attr: 'font' val:'12px/25px Arial, sans-serif'.\x0a\x0a\x22mathConverter\x22\x0aLatex id: pid,'10'. \x0a",
messageSends: ["selector:attr:val:", ",", "id:"],
referencedClasses: ["Latex"]
}),
smalltalk.WikiPage);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'not yet classified',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(_st(_st("#").__comma(self["@pid"])).__comma("10"))._asJQuery())._append_(_st(self["@converter"])._convert_(self["@markdown"]));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html}, smalltalk.WikiPage)})},
args: ["html"],
source: "renderOn: html\x0a\x0ahtml div id:self assignId.\x0a('#',pid,'10') asJQuery append: (converter convert: markdown).",
messageSends: ["id:", "assignId", "div", "append:", "convert:", "asJQuery", ","],
referencedClasses: []
}),
smalltalk.WikiPage);


smalltalk.addMethod(
smalltalk.method({
selector: "connect:at:to:with:",
category: 'not yet classified',
fn: function (anElementId,aPosition,aParent,markdownText){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self)._new();
_st($2)._markdown_(markdownText);
$3=_st($2)._connect_at_to_(anElementId,aPosition,aParent);
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"connect:at:to:with:",{anElementId:anElementId,aPosition:aPosition,aParent:aParent,markdownText:markdownText},smalltalk.WikiPage.klass)})},
args: ["anElementId", "aPosition", "aParent", "markdownText"],
source: "connect: anElementId at: aPosition to: aParent with: markdownText\x0a\x0a^ self new markdown: markdownText; connect: anElementId at: aPosition to: aParent.\x0a",
messageSends: ["markdown:", "new", "connect:at:to:"],
referencedClasses: []
}),
smalltalk.WikiPage.klass);

