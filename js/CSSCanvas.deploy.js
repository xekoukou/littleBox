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
"_selector_attr_val_",
smalltalk.method({
selector: "selector:attr:val:",
fn: function (aSelector,anAttr,aVal){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(_st(self["@pid"]).__comma(" ")).__comma(_st(aSelector)._asJQuery()))._css_to_(anAttr,aVal);
return self}, function($ctx1) {$ctx1.fill(self,"selector:attr:val:",{aSelector:aSelector,anAttr:anAttr,aVal:aVal}, smalltalk.CSSCanvas)})}
}),
smalltalk.CSSCanvas);


smalltalk.addMethod(
"_new_",
smalltalk.method({
selector: "new:",
fn: function (aComponent){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._new())._component_(aComponent);
return self}, function($ctx1) {$ctx1.fill(self,"new:",{aComponent:aComponent}, smalltalk.CSSCanvas.klass)})}
}),
smalltalk.CSSCanvas.klass);


