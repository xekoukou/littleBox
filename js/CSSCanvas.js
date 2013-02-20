smalltalk.addPackage('CSSCanvas', {});
smalltalk.addClass('CSSCanvas', smalltalk.Object, ['component', 'pid'], 'CSSCanvas');
smalltalk.addMethod(
"_component_",
smalltalk.method({
selector: "component:",
category: 'initializing',
fn: function (aComponent){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@pid"]=_st(aComponent)._pid();
return self}, function($ctx1) {$ctx1.fill(self,"component:",{aComponent:aComponent}, smalltalk.CSSCanvas)})},
args: ["aComponent"],
source: "component: aComponent \x0a\x22the id of the component that was given by th parent\x22\x0a\x0apid:=aComponent pid.",
messageSends: ["pid"],
referencedClasses: []
}),
smalltalk.CSSCanvas);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initializing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.CSSCanvas)})},
args: [],
source: "initialize\x0a\x0asuper initialize",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.CSSCanvas);

smalltalk.addMethod(
"_selector_attr_val_",
smalltalk.method({
selector: "selector:attr:val:",
category: 'css',
fn: function (aSelector,anAttr,aVal){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(_st(_st(self["@pid"]).__comma(" ")).__comma(aSelector))._asJQuery())._css_to_(anAttr,aVal);
return self}, function($ctx1) {$ctx1.fill(self,"selector:attr:val:",{aSelector:aSelector,anAttr:anAttr,aVal:aVal}, smalltalk.CSSCanvas)})},
args: ["aSelector", "anAttr", "aVal"],
source: "selector: aSelector attr: anAttr val: aVal\x0a\x0a(pid, ' ', aSelector) asJQuery css: anAttr to: aVal.",
messageSends: ["css:to:", "asJQuery", ","],
referencedClasses: []
}),
smalltalk.CSSCanvas);


smalltalk.addMethod(
"_new_",
smalltalk.method({
selector: "new:",
category: 'not yet classified',
fn: function (aComponent){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._component_(aComponent);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"new:",{aComponent:aComponent}, smalltalk.CSSCanvas.klass)})},
args: ["aComponent"],
source: "new: aComponent\x0a\x0a^ self new component:aComponent ; yourself.",
messageSends: ["component:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.CSSCanvas.klass);


