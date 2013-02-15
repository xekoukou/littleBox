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
"_selector_attr_val_",
smalltalk.method({
selector: "selector:attr:val:",
category: 'css',
fn: function (aSelector,anAttr,aVal){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(_st(self["@pid"]).__comma(" ")).__comma(_st(aSelector)._asJQuery()))._css_to_(anAttr,aVal);
return self}, function($ctx1) {$ctx1.fill(self,"selector:attr:val:",{aSelector:aSelector,anAttr:anAttr,aVal:aVal}, smalltalk.CSSCanvas)})},
args: ["aSelector", "anAttr", "aVal"],
source: "selector: aSelector attr: anAttr val: aVal\x0a\x0apid, ' ', aSelector asJQuery css: anAttr to: aVal.",
messageSends: ["css:to:", ",", "asJQuery"],
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
return smalltalk.withContext(function($ctx1) { _st(_st(self)._new())._component_(aComponent);
return self}, function($ctx1) {$ctx1.fill(self,"new:",{aComponent:aComponent}, smalltalk.CSSCanvas.klass)})},
args: ["aComponent"],
source: "new: aComponent\x0a\x0aself new component:aComponent.",
messageSends: ["component:", "new"],
referencedClasses: []
}),
smalltalk.CSSCanvas.klass);


