smalltalk.addPackage('CSSCanvas', {});
smalltalk.addClass('CSSCanvas', smalltalk.Object, ['component', 'pid'], 'CSSCanvas');
smalltalk.addMethod(
"_component_",
smalltalk.method({
selector: "component:",
fn: function (aComponent){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@pid"]=_st(aComponent)._pid();
return self}, function($ctx1) {$ctx1.fill(self,"component:",{aComponent:aComponent}, smalltalk.CSSCanvas)})}
}),
smalltalk.CSSCanvas);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.CSSCanvas)})}
}),
smalltalk.CSSCanvas);

smalltalk.addMethod(
"_selector_attr_val_",
smalltalk.method({
selector: "selector:attr:val:",
fn: function (aSelector,anAttr,aVal){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(_st(_st(_st("#").__comma(self["@pid"])).__comma(" ")).__comma(aSelector))._asJQuery())._css_to_(anAttr,aVal);
return self}, function($ctx1) {$ctx1.fill(self,"selector:attr:val:",{aSelector:aSelector,anAttr:anAttr,aVal:aVal}, smalltalk.CSSCanvas)})}
}),
smalltalk.CSSCanvas);


smalltalk.addMethod(
"_new_",
smalltalk.method({
selector: "new:",
fn: function (aComponent){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._component_(aComponent);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"new:",{aComponent:aComponent}, smalltalk.CSSCanvas.klass)})}
}),
smalltalk.CSSCanvas.klass);


