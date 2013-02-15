smalltalk.addPackage('Component', {});
smalltalk.addClass('Component', smalltalk.Object, ['attachedCon', 'parent', 'pid', 'mid', 'position', 'connectors', 'variables'], 'Component');
smalltalk.addMethod(
"_assignId",
smalltalk.method({
selector: "assignId",
fn: function (){
var self=this;
var smid;
return smalltalk.withContext(function($ctx1) { var $1;
self["@mid"]=_st(self["@mid"]).__plus((1));
smid=_st(_st(self["@pid"]).__comma(_st(self["@mid"])._asString())).__comma("0");
$1=smid;
return $1;
}, function($ctx1) {$ctx1.fill(self,"assignId",{smid:smid}, smalltalk.Component)})}
}),
smalltalk.Component);

smalltalk.addMethod(
"_connect_at_to_",
smalltalk.method({
selector: "connect:at:to:",
fn: function (aConnector,aPosition,aParent){
var self=this;
var ids;
return smalltalk.withContext(function($ctx1) { var $1;
self["@attachedCon"]=aConnector;
self["@parent"]=aParent;
self["@pid"]=_st(self["@parent"])._assignId();
self["@mid"]=(0);
self["@position"]=aPosition;
_st(aConnector)._at_at_put_("connected",aPosition,self);
ids=_st(self)._realize();
_st(self)._setConnectorsFrom_(ids);
_st(self)._setVariablesFrom_(ids);
$1=self["@variables"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"connect:at:to:",{aConnector:aConnector,aPosition:aPosition,aParent:aParent,ids:ids}, smalltalk.Component)})}
}),
smalltalk.Component);

smalltalk.addMethod(
"_connect_to_",
smalltalk.method({
selector: "connect:to:",
fn: function (aConnector,aParent){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._connect_at_to_(aConnector,_st(_st(aConnector)._at_(_st("connected")._size())).__plus((1)),aParent);
return self}, function($ctx1) {$ctx1.fill(self,"connect:to:",{aConnector:aConnector,aParent:aParent}, smalltalk.Component)})}
}),
smalltalk.Component);

smalltalk.addMethod(
"_connectVarTo_to_",
smalltalk.method({
selector: "connectVarTo:to:",
fn: function (aConnectorPosition,aPosition){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._self())._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"connectVarTo:to:",{aConnectorPosition:aConnectorPosition,aPosition:aPosition}, smalltalk.Component)})}
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
return smalltalk.withContext(function($ctx1) { var $1;
_st(self["@attachedCon"])._at_after_(_st(_st(_st(_st("elementId").__comma(" ")).__comma(":nth-child(")).__comma(_st(self["@position"])._asString())).__comma(_st(")")._asJQuery()),_st(_st("<div id=").__comma(self["@pid"])).__comma("></div>"));
html=_st((smalltalk.HTMLCanvas || HTMLCanvas))._onJQuery_(_st("#").__comma(_st(self["@pid"])._asJQuery()));
ids=_st(self)._renderOn_(html);
css=_st((smalltalk.CSSCanvas || CSSCanvas))._new_(self);
_st(self)._paintOn_from_(css,ids);
$1=ids;
return $1;
}, function($ctx1) {$ctx1.fill(self,"realize",{html:html,css:css,ids:ids}, smalltalk.Component)})}
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
"_setConnectorsFrom_",
smalltalk.method({
selector: "setConnectorsFrom:",
fn: function (anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"setConnectorsFrom:",{anArray:anArray}, smalltalk.Component)})}
}),
smalltalk.Component);

smalltalk.addMethod(
"_setVariablesFrom_",
smalltalk.method({
selector: "setVariablesFrom:",
fn: function (anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"setVariablesFrom:",{anArray:anArray}, smalltalk.Component)})}
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
fn: function (aConnector,aPosition,aParent){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._new())._connect_at_to_(aConnector,aPosition,aParent);
return $1;
}, function($ctx1) {$ctx1.fill(self,"connect:at:to:",{aConnector:aConnector,aPosition:aPosition,aParent:aParent}, smalltalk.Component.klass)})}
}),
smalltalk.Component.klass);

smalltalk.addMethod(
"_connect_to_",
smalltalk.method({
selector: "connect:to:",
fn: function (aConnector,aParent){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._new())._connect_to_(aConnector,aParent);
return $1;
}, function($ctx1) {$ctx1.fill(self,"connect:to:",{aConnector:aConnector,aParent:aParent}, smalltalk.Component.klass)})}
}),
smalltalk.Component.klass);


smalltalk.addClass('Connector', smalltalk.Dictionary, [], 'Component');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.Dictionary.fn.prototype._initialize.apply(_st(self), []);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.Connector)})}
}),
smalltalk.Connector);


smalltalk.addMethod(
"_position_elementId_",
smalltalk.method({
selector: "position:elementId:",
fn: function (anInteger,anElementId){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._at_put_("position",anInteger);
_st($2)._at_put_("elementId",anElementId);
_st($2)._at_put_("connected",_st((smalltalk.Array || Array))._new());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"position:elementId:",{anInteger:anInteger,anElementId:anElementId}, smalltalk.Connector.klass)})}
}),
smalltalk.Connector.klass);


