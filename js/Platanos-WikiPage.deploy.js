smalltalk.addPackage('Platanos-WikiPage', {});
smalltalk.addClass('WikiPage', smalltalk.Component, ['markdown', 'converter'], 'Platanos-WikiPage');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.Component.fn.prototype._initialize.apply(_st(self), []);
self["@converter"]=_st((smalltalk.Pagedown || Pagedown))._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.WikiPage)})}
}),
smalltalk.WikiPage);

smalltalk.addMethod(
"_markdown_",
smalltalk.method({
selector: "markdown:",
fn: function (markdownText){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@markdown"]=markdownText;
return self}, function($ctx1) {$ctx1.fill(self,"markdown:",{markdownText:markdownText}, smalltalk.WikiPage)})}
}),
smalltalk.WikiPage);

smalltalk.addMethod(
"_paintOn_",
smalltalk.method({
selector: "paintOn:",
fn: function (css){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(css)._selector_attr_val_(_st(_st("#").__comma(self["@pid"])).__comma("10"),"position","relative");
_st(css)._selector_attr_val_(_st(_st("#").__comma(self["@pid"])).__comma("10"),"padding","7px");
_st(css)._selector_attr_val_(_st(_st("#").__comma(self["@pid"])).__comma("10"),"border-width","1px");
_st(css)._selector_attr_val_(_st(_st("#").__comma(self["@pid"])).__comma("10"),"box-shadow","3px 3px 5px rgba(0, 0, 0, 0.5)");
_st(css)._selector_attr_val_(_st(_st("#").__comma(self["@pid"])).__comma("10"),"border-radius","4px");
_st(css)._selector_attr_val_(_st(_st("#").__comma(self["@pid"])).__comma("10"),"width","60%");
_st(css)._selector_attr_val_(_st(_st("#").__comma(self["@pid"])).__comma("10"),"left","20%");
_st(css)._selector_attr_val_(_st(_st("#").__comma(self["@pid"])).__comma("10"),"font","12px/25px Arial, sans-serif");
_st((smalltalk.Latex || Latex))._id_(_st(self["@pid"]).__comma("10"));
return self}, function($ctx1) {$ctx1.fill(self,"paintOn:",{css:css}, smalltalk.WikiPage)})}
}),
smalltalk.WikiPage);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(html)._div())._id_(_st(self)._assignId());
_st(_st(_st(_st("#").__comma(self["@pid"])).__comma("10"))._asJQuery())._append_(_st(self["@converter"])._convert_(self["@markdown"]));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html}, smalltalk.WikiPage)})}
}),
smalltalk.WikiPage);


smalltalk.addMethod(
"_connect_at_to_with_",
smalltalk.method({
selector: "connect:at:to:with:",
fn: function (anElementId,aPosition,aParent,markdownText){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(self)._new();
_st($1)._markdown_(markdownText);
$2=_st($1)._connect_at_to_(anElementId,aPosition,aParent);
return self}, function($ctx1) {$ctx1.fill(self,"connect:at:to:with:",{anElementId:anElementId,aPosition:aPosition,aParent:aParent,markdownText:markdownText}, smalltalk.WikiPage.klass)})}
}),
smalltalk.WikiPage.klass);


