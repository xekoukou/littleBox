smalltalk.addPackage('Platanos-Search', {});
smalltalk.addClass('SearchInput', smalltalk.Component, [], 'Platanos-Search');
smalltalk.addMethod(
"_function",
smalltalk.method({
selector: "function",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"function",{}, smalltalk.SearchInput)})}
}),
smalltalk.SearchInput);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.Component.fn.prototype._initialize.apply(_st(self), []);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.SearchInput)})}
}),
smalltalk.SearchInput);

smalltalk.addMethod(
"_paintOn_",
smalltalk.method({
selector: "paintOn:",
fn: function (css){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"paintOn:",{css:css}, smalltalk.SearchInput)})}
}),
smalltalk.SearchInput);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(html)._form())._with_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(html)._input())._type_("search");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html}, smalltalk.SearchInput)})}
}),
smalltalk.SearchInput);

smalltalk.addMethod(
"_setConnectors",
smalltalk.method({
selector: "setConnectors",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"setConnectors",{}, smalltalk.SearchInput)})}
}),
smalltalk.SearchInput);

smalltalk.addMethod(
"_setEquations",
smalltalk.method({
selector: "setEquations",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"setEquations",{}, smalltalk.SearchInput)})}
}),
smalltalk.SearchInput);

smalltalk.addMethod(
"_setVariables",
smalltalk.method({
selector: "setVariables",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"setVariables",{}, smalltalk.SearchInput)})}
}),
smalltalk.SearchInput);



