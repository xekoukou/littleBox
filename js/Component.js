smalltalk.addPackage('Component', {});
smalltalk.addClass('Component', smalltalk.Object, ['elementId', 'position', 'parent', 'pid', 'mid', 'connectors', 'variables'], 'Component');
smalltalk.Component.comment="\x22\x0aVariables\x0aDictionary\x0a\x09check output format\x0a\x22"
smalltalk.addMethod(
"_assignId",
smalltalk.method({
selector: "assignId",
category: 'initializing',
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
}, function($ctx1) {$ctx1.fill(self,"assignId",{smid:smid}, smalltalk.Component)})},
args: [],
source: "assignId\x0a\x22returns a unique id to be used by the connected subcomponent\x22\x0a|smid|\x0a\x0amid := mid + 1.\x0a( ( mid/10 ) truncated = (mid/10)) ifTrue: [mid := mid + 1.].\x0asmid := pid , mid asString, '0'.\x0a^ smid.",
messageSends: ["+", "ifTrue:", "=", "/", "truncated", ",", "asString"],
referencedClasses: []
}),
smalltalk.Component);

smalltalk.addMethod(
"_connect_at_to_",
smalltalk.method({
selector: "connect:at:to:",
category: 'initializing',
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
return self}, function($ctx1) {$ctx1.fill(self,"connect:at:to:",{anElementId:anElementId,aPosition:aPosition,aParent:aParent,ids:ids}, smalltalk.Component)})},
args: ["anElementId", "aPosition", "aParent"],
source: "connect: anElementId at: aPosition to: aParent\x0a\x0a\x22the ElementId is the internal to the parent mid of the element we want\x22\x0a|ids|\x0a\x0aelementId := anElementId.\x0aparent := aParent.\x0apid := parent assignId.\x0amid := 0.\x0aposition:=aPosition.\x0a\x0aparent connectors at: anElementId at:aPosition put: self.\x0a\x0aids:=self realize.\x0aself setConnectors.\x0aself setVariables.\x0a\x0a\x0a\x0aparent connectVarsTo: anElementId to: aPosition.",
messageSends: ["assignId", "at:at:put:", "connectors", "realize", "setConnectors", "setVariables", "connectVarsTo:to:"],
referencedClasses: []
}),
smalltalk.Component);

smalltalk.addMethod(
"_connect_to_",
smalltalk.method({
selector: "connect:to:",
category: 'initializing',
fn: function (anElementId,aParent){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._connect_at_to_(anElementId,_st(_st(_st(self["@parent"])._connectors())._at_(_st(anElementId)._size())).__plus((1)),aParent);
return self}, function($ctx1) {$ctx1.fill(self,"connect:to:",{anElementId:anElementId,aParent:aParent}, smalltalk.Component)})},
args: ["anElementId", "aParent"],
source: "connect: anElementId to: aParent\x0a\x0a\x0aself connect: anElementId at: ((parent connectors at: anElementId size)+1) to: aParent",
messageSends: ["connect:at:to:", "+", "at:", "size", "connectors"],
referencedClasses: []
}),
smalltalk.Component);

smalltalk.addMethod(
"_connectVarsTo_to_",
smalltalk.method({
selector: "connectVarsTo:to:",
category: 'connecting variables',
fn: function (aConnectorPosition,aPosition){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"connectVarsTo:to:",{aConnectorPosition:aConnectorPosition,aPosition:aPosition}, smalltalk.Component)})},
args: ["aConnectorPosition", "aPosition"],
source: "connectVarsTo: aConnectorPosition to:aPosition\x0a\x0a\x22position 1 is the position of the connector, position2 is the position inside the connector.\x0aAll variables must be connected or passed to the upper component.\x0a\x22\x0a\x0aself subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.Component);

smalltalk.addMethod(
"_connectors",
smalltalk.method({
selector: "connectors",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@connectors"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"connectors",{}, smalltalk.Component)})},
args: [],
source: "connectors\x0a\x0a^connectors",
messageSends: [],
referencedClasses: []
}),
smalltalk.Component);

smalltalk.addMethod(
"_disconnect",
smalltalk.method({
selector: "disconnect",
category: 'diconnecting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@parent"])._disconnectCompFrom_from_(self["@elementId"],self["@position"]);
return self}, function($ctx1) {$ctx1.fill(self,"disconnect",{}, smalltalk.Component)})},
args: [],
source: "disconnect\x0a\x0a\x22needs to remove element from DOM tree first\x22\x0a\x0aparent disconnectCompFrom: elementId from: position.",
messageSends: ["disconnectCompFrom:from:"],
referencedClasses: []
}),
smalltalk.Component);

smalltalk.addMethod(
"_disconnectCompFrom_from_",
smalltalk.method({
selector: "disconnectCompFrom:from:",
category: 'diconnecting',
fn: function (anElementId,aPosition){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"disconnectCompFrom:from:",{anElementId:anElementId,aPosition:aPosition}, smalltalk.Component)})},
args: ["anElementId", "aPosition"],
source: "disconnectCompFrom: anElementId from: aPosition\x0a\x0a",
messageSends: [],
referencedClasses: []
}),
smalltalk.Component);

smalltalk.addMethod(
"_function",
smalltalk.method({
selector: "function",
category: 'functioning',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"function",{}, smalltalk.Component)})},
args: [],
source: "function\x0a\x0a\x22here is the functionality of the component\x0ahere it sets what to do with input from the user or the server\x0ahere the component can also act as a creator of other components\x22\x0a\x0aself subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.Component);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initializing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.Component)})},
args: [],
source: "initialize\x0a\x0asuper initialize",
messageSends: ["initialize"],
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
return smalltalk.withContext(function($ctx1) { _st(_st(_st(_st(_st(_st(_st(_st(self["@parent"])._pid()).__comma("0")).__comma(self["@elementId"])).__comma(" ")).__comma(":nth-child(")).__comma(_st(self["@position"])._asString())).__comma(_st(")")._asJQuery()))._after_(_st(_st("<div id=").__comma(self["@pid"])).__comma("></div>"));
html=_st((smalltalk.HTMLCanvas || HTMLCanvas))._onJQuery_(_st("#").__comma(_st(self["@pid"])._asJQuery()));
_st(self)._renderOn_(html);
css=_st((smalltalk.CSSCanvas || CSSCanvas))._new_(self);
_st(self)._paintOn_(css);
return self}, function($ctx1) {$ctx1.fill(self,"realize",{html:html,css:css,ids:ids}, smalltalk.Component)})},
args: [],
source: "realize\x0a\x0a|html css ids|\x0a\x0aparent pid,'0',elementId,' ',':nth-child(',position asString,')' asJQuery after: '<div id=',pid,'></div>'.\x0ahtml := HTMLCanvas onJQuery: '#',pid asJQuery.\x0aself renderOn: html.\x0acss := CSSCanvas new:self.\x0aself paintOn:css\x0a\x0a\x0a",
messageSends: ["after:", ",", "asJQuery", "asString", "pid", "onJQuery:", "renderOn:", "new:", "paintOn:"],
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
source: "renderOn: html\x0a\x0a\x22Use the html canvas to render a component\x22\x0a\x0aself subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.Component);

smalltalk.addMethod(
"_setConnectors",
smalltalk.method({
selector: "setConnectors",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"setConnectors",{}, smalltalk.Component)})},
args: [],
source: "setConnectors\x0a\x0a\x22Used to initializing the connectors\x22\x0a\x0aself subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.Component);

smalltalk.addMethod(
"_setVariables",
smalltalk.method({
selector: "setVariables",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"setVariables",{}, smalltalk.Component)})},
args: [],
source: "setVariables\x0a\x0a\x22Used to initializing the binding Variables\x22\x0a\x0aself subclassResponsibility",
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
fn: function (anElementId,aPosition,aParent){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._new())._connect_at_to_(anElementId,aPosition,aParent);
return $1;
}, function($ctx1) {$ctx1.fill(self,"connect:at:to:",{anElementId:anElementId,aPosition:aPosition,aParent:aParent}, smalltalk.Component.klass)})},
args: ["anElementId", "aPosition", "aParent"],
source: "connect: anElementId at: aPosition to: aParent\x0a\x0a^ self new connect: anElementId at: aPosition to: aParent",
messageSends: ["connect:at:to:", "new"],
referencedClasses: []
}),
smalltalk.Component.klass);

smalltalk.addMethod(
"_connect_to_",
smalltalk.method({
selector: "connect:to:",
category: 'not yet classified',
fn: function (anElementId,aParent){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._new())._connect_to_(anElementId,aParent);
return $1;
}, function($ctx1) {$ctx1.fill(self,"connect:to:",{anElementId:anElementId,aParent:aParent}, smalltalk.Component.klass)})},
args: ["anElementId", "aParent"],
source: "connect: anElementId to: aParent\x0a\x0a^ self new connect: anElementId to: aParent.",
messageSends: ["connect:to:", "new"],
referencedClasses: []
}),
smalltalk.Component.klass);


smalltalk.addClass('Connectors', smalltalk.Dictionary, [], 'Component');
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
smalltalk.Connectors);


smalltalk.addMethod(
"_elementId_",
smalltalk.method({
selector: "elementId:",
category: 'instance creation',
fn: function (anElementId){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._at_put_(anElementId,_st((smalltalk.Array || Array))._new());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"elementId:",{anElementId:anElementId}, smalltalk.Connector.klass)})},
args: ["anElementId"],
source: "elementId: anElementId\x0a\x0a\x22ElementId should be the internal mid of a connector\x22\x0a^ self new at: anElementId put: Array new; yourself.",
messageSends: ["at:put:", "new", "yourself"],
referencedClasses: ["Array"]
}),
smalltalk.Connectors.klass);


smalltalk.addClass('Equation', smalltalk.Object, ['input', 'output', 'connectionRules'], 'Component');
smalltalk.Equation.comment="\x22An equation is a static part of a component that links its variables with the variables of the connected components variables\x0a\x0ainput\x0aDictionary dim 1 selector\x0a                  dim 2 child position or -1 that means any position\x0a                  dim 3 type of attribute/variable (attr, styleAttr, intermediary variable)\x0a                  dim 4 value of attribute (height, etc only if it is not an intermediary variable)\x0a                  dim 5 the actual variable\x0a\x0aoutput\x0aDictionary dim 1 selector\x0a                  dim 3 type of attribute/variable (attr, styleAttr, intermediary variable)\x0a                  dim 4 value of attribute (height, etc only if it is not an intermediary variable)\x0a                  dim 5 the actual variable\x0a\x0a\x22"
smalltalk.addMethod(
"_compute",
smalltalk.method({
selector: "compute",
category: 'initializing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"compute",{}, smalltalk.Equation)})},
args: [],
source: "compute\x0a\x0a\x22static function definition\x22\x0a\x0aself subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.Equation);

smalltalk.addMethod(
"_defineConnectionRules",
smalltalk.method({
selector: "defineConnectionRules",
category: 'initializing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"defineConnectionRules",{}, smalltalk.Equation)})},
args: [],
source: "defineConnectionRules\x0a\x0a\x22input Dictionary that is used to check whether an input varialbe (obtained through a connection) should be linked to this function \x0aDictionary dim 1 selector\x0a                  dim 2 child position or -1 that means any position\x0a                  dim 3 type of attribute/variable (attr, styleAttr, intermediary variable)\x0a                  dim 4 value of attribute (height, etc only if it is not an intermediary variable)\x0a\x22\x0a\x0aself subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.Equation);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initializing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.Equation)})},
args: [],
source: "initialize\x0a\x0asuper initialize",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.Equation);

smalltalk.addMethod(
"_reverseCompute",
smalltalk.method({
selector: "reverseCompute",
category: 'initializing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"reverseCompute",{}, smalltalk.Equation)})},
args: [],
source: "reverseCompute\x0a\x0a\x22static function definition\x22\x0a\x0aself subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.Equation);



