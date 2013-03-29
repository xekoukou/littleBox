smalltalk.addPackage('Platanos_Graph');
smalltalk.addClass('DocGraph', smalltalk.Component, ['doc'], 'Platanos_Graph');
smalltalk.addMethod(
smalltalk.method({
selector: "doc:",
fn: function (aDoc){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@doc"]=aDoc;
return self}, function($ctx1) {$ctx1.fill(self,"doc:",{aDoc:aDoc},smalltalk.DocGraph)})},
messageSends: []}),
smalltalk.DocGraph);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.Component.fn.prototype._initialize.apply(_st(self), []);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.DocGraph)})},
messageSends: ["initialize"]}),
smalltalk.DocGraph);

smalltalk.addMethod(
smalltalk.method({
selector: "paintOn:",
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
messageSends: ["selector:attr:val:", ","]}),
smalltalk.DocGraph);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(html)._div())._with_(_st(self["@doc"])._at_("csummary"));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.DocGraph)})},
messageSends: ["with:", "at:", "div"]}),
smalltalk.DocGraph);


smalltalk.addMethod(
smalltalk.method({
selector: "connect:at:to:json:",
fn: function (anElementId,aPosition,aParent,aJson){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self)._new();
_st($1)._json_(aJson);
$2=_st($1)._connect_at_to_(anElementId,aPosition,aParent);
return self}, function($ctx1) {$ctx1.fill(self,"connect:at:to:json:",{anElementId:anElementId,aPosition:aPosition,aParent:aParent,aJson:aJson},smalltalk.DocGraph.klass)})},
messageSends: ["json:", "new", "connect:at:to:"]}),
smalltalk.DocGraph.klass);


smalltalk.addClass('DocGraphCell', smalltalk.Component, ['doc'], 'Platanos_Graph');
smalltalk.addMethod(
smalltalk.method({
selector: "doc:",
fn: function (aDoc){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@doc"]=aDoc;
return self}, function($ctx1) {$ctx1.fill(self,"doc:",{aDoc:aDoc},smalltalk.DocGraphCell)})},
messageSends: []}),
smalltalk.DocGraphCell);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.Component.fn.prototype._initialize.apply(_st(self), []);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.DocGraphCell)})},
messageSends: ["initialize"]}),
smalltalk.DocGraphCell);

smalltalk.addMethod(
smalltalk.method({
selector: "paintOn:",
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
messageSends: ["selector:attr:val:", ","]}),
smalltalk.DocGraphCell);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(html)._div())._with_(_st(self["@doc"])._at_("csummary"));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.DocGraphCell)})},
messageSends: ["with:", "at:", "div"]}),
smalltalk.DocGraphCell);


smalltalk.addMethod(
smalltalk.method({
selector: "connect:at:to:doc:",
fn: function (anElementId,aPosition,aParent,aDoc){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self)._new();
_st($1)._doc_(aDoc);
$2=_st($1)._connect_at_to_(anElementId,aPosition,aParent);
return self}, function($ctx1) {$ctx1.fill(self,"connect:at:to:doc:",{anElementId:anElementId,aPosition:aPosition,aParent:aParent,aDoc:aDoc},smalltalk.DocGraphCell.klass)})},
messageSends: ["doc:", "new", "connect:at:to:"]}),
smalltalk.DocGraphCell.klass);


