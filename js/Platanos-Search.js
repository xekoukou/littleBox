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
return smalltalk.withContext(function($ctx1) { _st(css)._selector_attr_val_("input","position","absolute");
_st(css)._selector_attr_val_("input","top","20px");
_st(css)._selector_attr_val_("input","left","40%");
_st(css)._selector_attr_val_("input","width","20%");
_st(css)._selector_attr_val_(_st(_st("#").__comma(self["@pid"])).__comma("10"),"position","absolute");
_st(css)._selector_attr_val_(_st(_st("#").__comma(self["@pid"])).__comma("10"),"top","50px");
_st(css)._selector_attr_val_(_st(_st("#").__comma(self["@pid"])).__comma("10"),"text-align","center");
return self}, function($ctx1) {$ctx1.fill(self,"paintOn:",{css:css}, smalltalk.SearchInput)})},
args: ["css"],
source: "paintOn: css\x0a\x0acss selector: 'input' attr:'position' val: 'absolute'.\x0acss selector: 'input' attr:'top' val: '20px'.\x0acss selector: 'input' attr:'left' val: '40%'.\x0acss selector: 'input' attr:'width' val: '20%'.\x0a\x0acss selector: '#',pid,'10' attr:'position' val: 'absolute'.\x0acss selector: '#',pid,'10' attr:'top' val: '50px'.\x0acss selector: '#',pid,'10' attr:'text-align' val: 'center'.\x0a",
messageSends: ["selector:attr:val:", ","],
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
_st(_st(html)._div())._id_(_st(self)._assignId());
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html}, smalltalk.SearchInput)})},
args: ["html"],
source: "renderOn: html\x0a\x0ahtml form with:[html input type:'search'.].\x0ahtml div id: self assignId.",
messageSends: ["with:", "type:", "input", "form", "id:", "assignId", "div"],
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
return smalltalk.withContext(function($ctx1) { self["@connectors"]=_st((smalltalk.Connectors || Connectors))._new();
_st(self["@connectors"])._addConnectorId_("1");
return self}, function($ctx1) {$ctx1.fill(self,"setConnectors",{}, smalltalk.SearchInput)})},
args: [],
source: "setConnectors\x0a\x0aconnectors:= Connectors new.\x0a\x0a\x22searchResult connector\x22\x0aconnectors addConnectorId: '1'.",
messageSends: ["new", "addConnectorId:"],
referencedClasses: ["Connectors"]
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



smalltalk.addClass('SearchResult', smalltalk.Component, [], 'Platanos-Search');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.Component.fn.prototype._initialize.apply(_st(self), []);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.SearchResult)})},
args: [],
source: "initialize\x0a\x0asuper initialize.",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.SearchResult);

smalltalk.addMethod(
"_paintOn_",
smalltalk.method({
selector: "paintOn:",
category: 'not yet classified',
fn: function (css){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"paintOn:",{css:css}, smalltalk.SearchResult)})},
args: ["css"],
source: "paintOn: css",
messageSends: [],
referencedClasses: []
}),
smalltalk.SearchResult);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'not yet classified',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(html)._ol())._with_((function(){
return smalltalk.withContext(function($ctx2) {return _st(html)._li_("search result 1");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html}, smalltalk.SearchResult)})},
args: ["html"],
source: "renderOn: html\x0a\x0ahtml ol with: [html li:'search result 1']",
messageSends: ["with:", "li:", "ol"],
referencedClasses: []
}),
smalltalk.SearchResult);



