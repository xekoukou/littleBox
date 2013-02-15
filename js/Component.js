smalltalk.addPackage('Component', {});
smalltalk.addClass('Component', smalltalk.Object, ['attachedCon', 'parent', 'pid', 'mid', 'position', 'connectors', 'variables'], 'Component');
smalltalk.addMethod(
"_assignId",
smalltalk.method({
selector: "assignId",
category: 'initializing',
fn: function (){
var self=this;
var smid;
return smalltalk.withContext(function($ctx1) { var $1;
self["@mid"]=_st(self["@mid"]).__plus((1));
smid=_st(_st(self["@pid"]).__comma(_st(self["@mid"])._asString())).__comma("0");
$1=smid;
return $1;
}, function($ctx1) {$ctx1.fill(self,"assignId",{smid:smid}, smalltalk.Component)})},
args: [],
source: "assignId\x0a\x22returns a unique id to be used by the connected subcomponent\x22\x0a|smid|\x0amid:=mid+1.\x0asmid:=pid,mid asString,'0'.\x0a^smid.",
messageSends: ["+", ",", "asString"],
referencedClasses: []
}),
smalltalk.Component);

smalltalk.addMethod(
"_connect_at_to_",
smalltalk.method({
selector: "connect:at:to:",
category: 'initializing',
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
}, function($ctx1) {$ctx1.fill(self,"connect:at:to:",{aConnector:aConnector,aPosition:aPosition,aParent:aParent,ids:ids}, smalltalk.Component)})},
args: ["aConnector", "aPosition", "aParent"],
source: "connect: aConnector at: aPosition to: aParent\x0a\x0a|ids|\x0a\x0aattachedCon := aConnector.\x0aparent := aParent.\x0apid := parent assignId.\x0amid := 0.\x0aposition:=aPosition.\x0a\x0aaConnector at: 'connected' at:aPosition put: self.\x0a\x0aids:=self realize.\x0aself setConnectorsFrom:ids.\x0aself setVariablesFrom:ids.\x0a\x0a\x0a\x0a\x0a^variables",
messageSends: ["assignId", "at:at:put:", "realize", "setConnectorsFrom:", "setVariablesFrom:"],
referencedClasses: []
}),
smalltalk.Component);

smalltalk.addMethod(
"_connect_to_",
smalltalk.method({
selector: "connect:to:",
category: 'initializing',
fn: function (aConnector,aParent){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._connect_at_to_(aConnector,_st(_st(aConnector)._at_(_st("connected")._size())).__plus((1)),aParent);
return self}, function($ctx1) {$ctx1.fill(self,"connect:to:",{aConnector:aConnector,aParent:aParent}, smalltalk.Component)})},
args: ["aConnector", "aParent"],
source: "connect: aConnector to: aParent\x0a\x0a\x0aself connect: aConnector at: ((aConnector at: 'connected' size)+1) to: aParent",
messageSends: ["connect:at:to:", "+", "at:", "size"],
referencedClasses: []
}),
smalltalk.Component);

smalltalk.addMethod(
"_connectVarTo_to_",
smalltalk.method({
selector: "connectVarTo:to:",
category: 'variable api',
fn: function (aConnectorPosition,aPosition){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._self())._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"connectVarTo:to:",{aConnectorPosition:aConnectorPosition,aPosition:aPosition}, smalltalk.Component)})},
args: ["aConnectorPosition", "aPosition"],
source: "connectVarTo: aConnectorPosition to:aPosition\x0a\x0a\x22position 1 is the position of the connector, position2 is the position inside the connector.\x0aAll variables must be connected or passed to the upper component.\x0a\x22\x0a\x0aself self subclassResponsibility",
messageSends: ["subclassResponsibility", "self"],
referencedClasses: []
}),
smalltalk.Component);

smalltalk.addMethod(
"_paintOn_",
smalltalk.method({
selector: "paintOn:",
category: 'private',
fn: function (css){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"paintOn:",{css:css}, smalltalk.Component)})},
args: ["css"],
source: "paintOn: css\x0a\x22using the CSSCanvas, select attributes from the subtree and paint them\x22\x0a\x0a   self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.Component);

smalltalk.addMethod(
"_pid",
smalltalk.method({
selector: "pid",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@pid"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"pid",{}, smalltalk.Component)})},
args: [],
source: "pid\x0a^pid",
messageSends: [],
referencedClasses: []
}),
smalltalk.Component);

smalltalk.addMethod(
"_realize",
smalltalk.method({
selector: "realize",
category: 'private',
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
}, function($ctx1) {$ctx1.fill(self,"realize",{html:html,css:css,ids:ids}, smalltalk.Component)})},
args: [],
source: "realize\x0a\x0a|html css ids|\x0a\x0aattachedCon at: 'elementId',' ',':nth-child(',position asString,')' asJQuery after: '<div id=',pid,'></div>'.\x0ahtml := HTMLCanvas onJQuery: '#',pid asJQuery.\x0aids:=self renderOn: html.\x0acss := CSSCanvas new:self.\x0aself paintOn:css from: ids.\x0a\x0a^ids.\x0a\x0a\x0a",
messageSends: ["at:after:", ",", "asJQuery", "asString", "onJQuery:", "renderOn:", "new:", "paintOn:from:"],
referencedClasses: ["HTMLCanvas", "CSSCanvas"]
}),
smalltalk.Component);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'private',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html}, smalltalk.Component)})},
args: ["html"],
source: "renderOn: html\x0a\x0a\x22Use the html canvas to render a component\x0aIt should return the unique ids(array) that are created so as to be passed to setVariables and\x0aSetConnectors\x22\x0a\x0aself subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.Component);

smalltalk.addMethod(
"_setConnectorsFrom_",
smalltalk.method({
selector: "setConnectorsFrom:",
category: 'private',
fn: function (anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"setConnectorsFrom:",{anArray:anArray}, smalltalk.Component)})},
args: ["anArray"],
source: "setConnectorsFrom: anArray\x0a\x0a\x22Used to initializing the connectors\x22\x0a\x0aself subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.Component);

smalltalk.addMethod(
"_setVariablesFrom_",
smalltalk.method({
selector: "setVariablesFrom:",
category: 'private',
fn: function (anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"setVariablesFrom:",{anArray:anArray}, smalltalk.Component)})},
args: ["anArray"],
source: "setVariablesFrom: anArray\x0a\x0a\x22Used to initializing the binding Variables\x22\x0a\x0aself subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.Component);

smalltalk.addMethod(
"_variables",
smalltalk.method({
selector: "variables",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@variables"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"variables",{}, smalltalk.Component)})},
args: [],
source: "variables\x0a\x0a^variables",
messageSends: [],
referencedClasses: []
}),
smalltalk.Component);


smalltalk.addMethod(
"_connect_at_to_",
smalltalk.method({
selector: "connect:at:to:",
category: 'not yet classified',
fn: function (aConnector,aPosition,aParent){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._new())._connect_at_to_(aConnector,aPosition,aParent);
return $1;
}, function($ctx1) {$ctx1.fill(self,"connect:at:to:",{aConnector:aConnector,aPosition:aPosition,aParent:aParent}, smalltalk.Component.klass)})},
args: ["aConnector", "aPosition", "aParent"],
source: "connect: aConnector at: aPosition to: aParent\x0a\x0a^ self new connect: aConnector at: aPosition to: aParent",
messageSends: ["connect:at:to:", "new"],
referencedClasses: []
}),
smalltalk.Component.klass);

smalltalk.addMethod(
"_connect_to_",
smalltalk.method({
selector: "connect:to:",
category: 'not yet classified',
fn: function (aConnector,aParent){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._new())._connect_to_(aConnector,aParent);
return $1;
}, function($ctx1) {$ctx1.fill(self,"connect:to:",{aConnector:aConnector,aParent:aParent}, smalltalk.Component.klass)})},
args: ["aConnector", "aParent"],
source: "connect: aConnector to: aParent\x0a\x0a^ self new connect: aConnector to: aParent.",
messageSends: ["connect:to:", "new"],
referencedClasses: []
}),
smalltalk.Component.klass);


smalltalk.addClass('Connector', smalltalk.Dictionary, [], 'Component');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initializing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.Dictionary.fn.prototype._initialize.apply(_st(self), []);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.Connector)})},
args: [],
source: "initialize\x0a\x0asuper initialize",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.Connector);


smalltalk.addMethod(
"_position_elementId_",
smalltalk.method({
selector: "position:elementId:",
category: 'instance creation',
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
}, function($ctx1) {$ctx1.fill(self,"position:elementId:",{anInteger:anInteger,anElementId:anElementId}, smalltalk.Connector.klass)})},
args: ["anInteger", "anElementId"],
source: "position: anInteger elementId:anElementId\x0a\x0a^ self new at: 'position' put: anInteger; at: 'elementId' put: anElementId; at: 'connected' put: Array new; yourself.",
messageSends: ["at:put:", "new", "yourself"],
referencedClasses: ["Array"]
}),
smalltalk.Connector.klass);


