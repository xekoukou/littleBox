smalltalk.addPackage('Component', {});
smalltalk.addClass('Component', smalltalk.Object, ['elementId', 'position', 'parent', 'pid', 'mid', 'connectors', 'variables'], 'Component');
smalltalk.addMethod(
"_assignId",
smalltalk.method({
selector: "assignId",
fn: function (){
var self=this;
var smid;
return smalltalk.withContext(function($ctx1) { var $1,$2;
self["@mid"]=_st(self["@mid"]).__plus((1));
$1=_st(_st(_st(self["@mid"]).__slash((10)))._truncated()).__eq(_st(self["@mid"]).__slash((10)));
if(smalltalk.assert($1)){
self["@mid"]=_st(self["@mid"]).__plus((1));
self["@mid"];
};
smid=_st(_st(self["@pid"]).__comma(_st(self["@mid"])._asString())).__comma("0");
$2=smid;
return $2;
}, function($ctx1) {$ctx1.fill(self,"assignId",{smid:smid}, smalltalk.Component)})}
}),
smalltalk.Component);

smalltalk.addMethod(
"_connect_at_to_",
smalltalk.method({
selector: "connect:at:to:",
fn: function (anElementId,aPosition,aParent){
var self=this;
var ids;
return smalltalk.withContext(function($ctx1) { self["@elementId"]=anElementId;
self["@parent"]=aParent;
self["@pid"]=_st(self["@parent"])._assignId();
self["@mid"]=(0);
self["@position"]=aPosition;
_st(_st(self["@parent"])._connectors())._at_at_put_(anElementId,aPosition,self);
ids=_st(self)._realize();
_st(self)._setConnectors();
_st(self)._setVariables();
_st(self["@parent"])._connectVarsTo_to_(anElementId,aPosition);
return self}, function($ctx1) {$ctx1.fill(self,"connect:at:to:",{anElementId:anElementId,aPosition:aPosition,aParent:aParent,ids:ids}, smalltalk.Component)})}
}),
smalltalk.Component);

smalltalk.addMethod(
"_connect_to_",
smalltalk.method({
selector: "connect:to:",
fn: function (anElementId,aParent){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._connect_at_to_(anElementId,_st(_st(_st(self["@parent"])._connectors())._at_(_st(anElementId)._size())).__plus((1)),aParent);
return self}, function($ctx1) {$ctx1.fill(self,"connect:to:",{anElementId:anElementId,aParent:aParent}, smalltalk.Component)})}
}),
smalltalk.Component);

smalltalk.addMethod(
"_connectVarsTo_to_",
smalltalk.method({
selector: "connectVarsTo:to:",
fn: function (aConnectorPosition,aPosition){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"connectVarsTo:to:",{aConnectorPosition:aConnectorPosition,aPosition:aPosition}, smalltalk.Component)})}
}),
smalltalk.Component);

smalltalk.addMethod(
"_connectors",
smalltalk.method({
selector: "connectors",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@connectors"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"connectors",{}, smalltalk.Component)})}
}),
smalltalk.Component);

smalltalk.addMethod(
"_disconnect",
smalltalk.method({
selector: "disconnect",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@parent"])._disconnectCompFrom_from_(self["@elementId"],self["@position"]);
return self}, function($ctx1) {$ctx1.fill(self,"disconnect",{}, smalltalk.Component)})}
}),
smalltalk.Component);

smalltalk.addMethod(
"_disconnectCompFrom_from_",
smalltalk.method({
selector: "disconnectCompFrom:from:",
fn: function (anElementId,aPosition){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"disconnectCompFrom:from:",{anElementId:anElementId,aPosition:aPosition}, smalltalk.Component)})}
}),
smalltalk.Component);

smalltalk.addMethod(
"_function",
smalltalk.method({
selector: "function",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"function",{}, smalltalk.Component)})}
}),
smalltalk.Component);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.Component)})}
}),
smalltalk.Component);

smalltalk.addMethod(
"_paintOn_",
smalltalk.method({
selector: "paintOn:",
fn: function (css){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"paintOn:",{css:css}, smalltalk.Component)})}
}),
smalltalk.Component);

smalltalk.addMethod(
"_pid",
smalltalk.method({
selector: "pid",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@pid"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"pid",{}, smalltalk.Component)})}
}),
smalltalk.Component);

smalltalk.addMethod(
"_realize",
smalltalk.method({
selector: "realize",
fn: function (){
var self=this;
var html,css,ids;
return smalltalk.withContext(function($ctx1) { _st(_st(_st(_st(_st(_st(_st(_st(self["@parent"])._pid()).__comma("0")).__comma(self["@elementId"])).__comma(" ")).__comma(":nth-child(")).__comma(_st(self["@position"])._asString())).__comma(_st(")")._asJQuery()))._after_(_st(_st("<div id=").__comma(self["@pid"])).__comma("></div>"));
html=_st((smalltalk.HTMLCanvas || HTMLCanvas))._onJQuery_(_st("#").__comma(_st(self["@pid"])._asJQuery()));
_st(self)._renderOn_(html);
css=_st((smalltalk.CSSCanvas || CSSCanvas))._new_(self);
_st(self)._paintOn_(css);
return self}, function($ctx1) {$ctx1.fill(self,"realize",{html:html,css:css,ids:ids}, smalltalk.Component)})}
}),
smalltalk.Component);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html}, smalltalk.Component)})}
}),
smalltalk.Component);

smalltalk.addMethod(
"_setConnectors",
smalltalk.method({
selector: "setConnectors",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"setConnectors",{}, smalltalk.Component)})}
}),
smalltalk.Component);

smalltalk.addMethod(
"_setVariables",
smalltalk.method({
selector: "setVariables",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"setVariables",{}, smalltalk.Component)})}
}),
smalltalk.Component);

smalltalk.addMethod(
"_variables",
smalltalk.method({
selector: "variables",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@variables"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"variables",{}, smalltalk.Component)})}
}),
smalltalk.Component);


smalltalk.addMethod(
"_connect_at_to_",
smalltalk.method({
selector: "connect:at:to:",
fn: function (anElementId,aPosition,aParent){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._new())._connect_at_to_(anElementId,aPosition,aParent);
return $1;
}, function($ctx1) {$ctx1.fill(self,"connect:at:to:",{anElementId:anElementId,aPosition:aPosition,aParent:aParent}, smalltalk.Component.klass)})}
}),
smalltalk.Component.klass);

smalltalk.addMethod(
"_connect_to_",
smalltalk.method({
selector: "connect:to:",
fn: function (anElementId,aParent){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._new())._connect_to_(anElementId,aParent);
return $1;
}, function($ctx1) {$ctx1.fill(self,"connect:to:",{anElementId:anElementId,aParent:aParent}, smalltalk.Component.klass)})}
}),
smalltalk.Component.klass);


smalltalk.addClass('Connectors', smalltalk.Dictionary, [], 'Component');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.Dictionary.fn.prototype._initialize.apply(_st(self), []);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.Connector)})}
}),
smalltalk.Connectors);


smalltalk.addMethod(
"_elementId_",
smalltalk.method({
selector: "elementId:",
fn: function (anElementId){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._at_put_(anElementId,_st((smalltalk.Array || Array))._new());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"elementId:",{anElementId:anElementId}, smalltalk.Connector.klass)})}
}),
smalltalk.Connectors.klass);


smalltalk.addClass('Equation', smalltalk.Object, ['input', 'output', 'connectionRules'], 'Component');
smalltalk.addMethod(
"_compute",
smalltalk.method({
selector: "compute",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"compute",{}, smalltalk.Equation)})}
}),
smalltalk.Equation);

smalltalk.addMethod(
"_defineConnectionRules",
smalltalk.method({
selector: "defineConnectionRules",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"defineConnectionRules",{}, smalltalk.Equation)})}
}),
smalltalk.Equation);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.Equation)})}
}),
smalltalk.Equation);

smalltalk.addMethod(
"_reverseCompute",
smalltalk.method({
selector: "reverseCompute",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"reverseCompute",{}, smalltalk.Equation)})}
}),
smalltalk.Equation);



