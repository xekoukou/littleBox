smalltalk.addPackage('Platanos-Search', {});
smalltalk.addClass('SearchInput', smalltalk.Component, [], 'Platanos-Search');
smalltalk.addMethod(
"_function",
smalltalk.method({
selector: "function",
category: 'subclassing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"function",{}, smalltalk.SearchInput)})},
args: [],
source: "function",
messageSends: [],
referencedClasses: []
}),
smalltalk.SearchInput);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initializing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.Component.fn.prototype._initialize.apply(_st(self), []);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.SearchInput)})},
args: [],
source: "initialize\x0a\x0asuper initialize.",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.SearchInput);

smalltalk.addMethod(
"_paintOn_",
smalltalk.method({
selector: "paintOn:",
category: 'subclassing',
fn: function (css){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"paintOn:",{css:css}, smalltalk.SearchInput)})},
args: ["css"],
source: "paintOn: css\x0a",
messageSends: [],
referencedClasses: []
}),
smalltalk.SearchInput);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'subclassing',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(html)._form())._with_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(html)._input())._type_("search");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html}, smalltalk.SearchInput)})},
args: ["html"],
source: "renderOn: html\x0a\x0ahtml form with:[html input type:'search'].",
messageSends: ["with:", "type:", "input", "form"],
referencedClasses: []
}),
smalltalk.SearchInput);

smalltalk.addMethod(
"_setConnectors",
smalltalk.method({
selector: "setConnectors",
category: 'subclassing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"setConnectors",{}, smalltalk.SearchInput)})},
args: [],
source: "setConnectors",
messageSends: [],
referencedClasses: []
}),
smalltalk.SearchInput);

smalltalk.addMethod(
"_setEquations",
smalltalk.method({
selector: "setEquations",
category: 'subclassing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"setEquations",{}, smalltalk.SearchInput)})},
args: [],
source: "setEquations",
messageSends: [],
referencedClasses: []
}),
smalltalk.SearchInput);

smalltalk.addMethod(
"_setVariables",
smalltalk.method({
selector: "setVariables",
category: 'subclassing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"setVariables",{}, smalltalk.SearchInput)})},
args: [],
source: "setVariables\x0a",
messageSends: [],
referencedClasses: []
}),
smalltalk.SearchInput);



