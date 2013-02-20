smalltalk.addPackage('Component', {});
smalltalk.addClass('Component', smalltalk.Object, ['connectorId', 'position', 'parent', 'pid', 'mid', 'connectors', 'variables', 'equations'], 'Component');
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
"_bindComp_atCon_atPos_",
smalltalk.method({
selector: "bindComp:atCon:atPos:",
category: 'binding',
fn: function (aComponent,aConnectorId,aPosition){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(self)._connectors();
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(_st(_st(self)._connectors())._at_(aConnectorId))._at_put_(aPosition,aComponent);
};
$2=_st(self)._equations();
if(($receiver = $2) == nil || $receiver == undefined){
$2;
} else {
_st(self)._bindVars_conId_pos_(_st(aComponent)._variables(),aConnectorId,aPosition);
};
return self}, function($ctx1) {$ctx1.fill(self,"bindComp:atCon:atPos:",{aComponent:aComponent,aConnectorId:aConnectorId,aPosition:aPosition}, smalltalk.Component)})},
args: ["aComponent", "aConnectorId", "aPosition"],
source: "bindComp: aComponent atCon: aConnectorId atPos: aPosition\x0a\x0aself connectors ifNotNil: [ (self connectors at: aConnectorId) at:aPosition put: aComponent. ].\x0aself equations ifNotNil: [ self bindVars: aComponent variables conId: aConnectorId pos: aPosition. ]. ",
messageSends: ["ifNotNil:", "at:put:", "at:", "connectors", "bindVars:conId:pos:", "variables", "equations"],
referencedClasses: []
}),
smalltalk.Component);

smalltalk.addMethod(
"_bindVars_conId_pos_",
smalltalk.method({
selector: "bindVars:conId:pos:",
category: 'binding',
fn: function (aVariables,aConnectorId,aPosition){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5;
_st(_st(self)._equations())._do_((function(equation){
return smalltalk.withContext(function($ctx2) {return _st(aVariables)._do_((function(variable){
var vector;
return smalltalk.withContext(function($ctx3) {vector=_st((smalltalk.Array || Array))._new();
vector;
$1=vector;
_st($1)._add_(aConnectorId);
$2=_st($1)._add_(aPosition);
$2;
_st(vector)._add_(_st(variable)._selector());
$3=_st(variable)._isIntermediate();
if(smalltalk.assert($3)){
_st(vector)._add_("intermediate");
_st(vector)._add_(variable);
} else {
$4=_st(variable)._isStyleAttr();
if(smalltalk.assert($4)){
_st(vector)._add_("styleAttr");
_st(vector)._add_(_st(variable)._attr());
} else {
$5=_st(vector)._isContent();
if(smalltalk.assert($5)){
_st(vector)._add_("content");
} else {
_st(vector)._add_("attr");
_st(vector)._add_(_st(variable)._attr());
};
};
_st(vector)._add_(variable);
};
return _st(equation)._addInputVar_(vector);
}, function($ctx3) {$ctx3.fillBlock({variable:variable,vector:vector},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({equation:equation},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"bindVars:conId:pos:",{aVariables:aVariables,aConnectorId:aConnectorId,aPosition:aPosition}, smalltalk.Component)})},
args: ["aVariables", "aConnectorId", "aPosition"],
source: "bindVars: aVariables conId: aConnectorId pos: aPosition\x0a\x0a\x22aPosition is the position of the component as a child of the the connector element\x22\x0a\x0a\x0aself equations do: \x0a\x09[ :equation | aVariables do: \x0a    \x09[ :variable| |vector| vector:= Array new. \x0a   \x09\x09\x09vector add: aConnectorId; add: aPosition. \x0a            vector add: variable selector.\x0a        \x09(variable isIntermediate) \x0a        \x09\x09ifTrue:[vector add: 'intermediate'. vector add: variable.]\x0a    \x09\x09\x09ifFalse: [ \x0a            \x09\x09(variable isStyleAttr) \x0a            \x09\x09\x09ifTrue:[ vector add: 'styleAttr'. \x0a                        \x09vector add:variable attr.] \x0a                   \x09\x09ifFalse:[\x0a                      \x09\x09(vector isContent) \x0a                      \x09\x09\x09 ifTrue: [  vector add: 'content'. ] \x0a                                 ifFalse: [ vector add: 'attr'. vector add:variable attr.] ] .\x0a  \x09\x09  \x09 \x09\x09vector add: variable.] .\x0a \x09\x09\x09\x09equation addInputVar: vector.  ] ].",
messageSends: ["do:", "new", "add:", "selector", "ifTrue:ifFalse:", "attr", "isContent", "isStyleAttr", "isIntermediate", "addInputVar:", "equations"],
referencedClasses: ["Array"]
}),
smalltalk.Component);

smalltalk.addMethod(
"_connect_at_to_",
smalltalk.method({
selector: "connect:at:to:",
category: 'initializing',
fn: function (aConnectorId,aPosition,aParent){
var self=this;
var ids;
return smalltalk.withContext(function($ctx1) { self["@connectorId"]=aConnectorId;
self["@parent"]=aParent;
self["@pid"]=_st(self["@parent"])._assignId();
self["@position"]=aPosition;
ids=_st(self)._realize();
_st(self)._setConnectors();
_st(self)._setVariables();
_st(self)._setEquations();
_st(self["@parent"])._bindComp_atCon_atPos_(self,aConnectorId,aPosition);
return self}, function($ctx1) {$ctx1.fill(self,"connect:at:to:",{aConnectorId:aConnectorId,aPosition:aPosition,aParent:aParent,ids:ids}, smalltalk.Component)})},
args: ["aConnectorId", "aPosition", "aParent"],
source: "connect: aConnectorId at: aPosition to: aParent\x0a\x0a\x22the connectorId is the id of the element that a connector represents wthout the pid of the parent\x22\x0a|ids|\x0a\x0aconnectorId := aConnectorId.\x0aparent := aParent.\x0apid := parent assignId.\x0aposition:=aPosition.\x0a\x0a\x0aids:=self realize.\x0aself setConnectors.\x0aself setVariables.\x0aself setEquations.\x0a\x0aparent bindComp: self atCon: aConnectorId atPos: aPosition\x0a\x0a",
messageSends: ["assignId", "realize", "setConnectors", "setVariables", "setEquations", "bindComp:atCon:atPos:"],
referencedClasses: []
}),
smalltalk.Component);

smalltalk.addMethod(
"_connect_to_",
smalltalk.method({
selector: "connect:to:",
category: 'initializing',
fn: function (aConnectorId,aParent){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._connect_at_to_(aConnectorId,_st(_st(_st(aParent)._connectors())._at_(_st(aConnectorId)._size())).__plus((1)),aParent);
return self}, function($ctx1) {$ctx1.fill(self,"connect:to:",{aConnectorId:aConnectorId,aParent:aParent}, smalltalk.Component)})},
args: ["aConnectorId", "aParent"],
source: "connect: aConnectorId to: aParent\x0a\x0a\x0aself connect: aConnectorId at: ((aParent connectors at: aConnectorId size)+1) to: aParent",
messageSends: ["connect:at:to:", "+", "at:", "size", "connectors"],
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
"_disconnectCompAt_at_",
smalltalk.method({
selector: "disconnectCompAt:at:",
category: 'diconnecting',
fn: function (aConnectorId,aPosition){
var self=this;
var selector;
return smalltalk.withContext(function($ctx1) { selector=_st(_st(_st(_st(_st(self["@pid"]).__comma(aConnectorId)).__comma(" ")).__comma(":nth-child(")).__comma(_st(_st(aPosition).__minus((1)))._asString())).__comma(")");
_st(_st(selector)._asJQuery())._remove();
_st(_st(_st(self)._connectors())._at_(aConnectorId))._remove_ifAbsent_(aPosition,(function(){
return smalltalk.withContext(function($ctx2) {}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st(self)._equations())._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(each)._removeCompVarFrom_from_(aConnectorId,aPosition);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"disconnectCompAt:at:",{aConnectorId:aConnectorId,aPosition:aPosition,selector:selector}, smalltalk.Component)})},
args: ["aConnectorId", "aPosition"],
source: "disconnectCompAt: aConnectorId at: aPosition\x0a\x0a|selector|\x0a\x0a\x22remove from DOM\x22\x0aselector := pid,aConnectorId,' ',':nth-child(',(aPosition - 1) asString,')'.\x0aselector asJQuery remove.\x0a\x0a\x22remove from Connectors\x22\x0a(self connectors at: aConnectorId) remove: aPosition ifAbsent:[].\x0a\x0a\x22disconnect variables\x22\x0aself equations do: [ :each | each removeCompVarFrom: aConnectorId from: aPosition].\x0a\x0a\x0a\x0a",
messageSends: [",", "asString", "-", "remove", "asJQuery", "remove:ifAbsent:", "at:", "connectors", "do:", "removeCompVarFrom:from:", "equations"],
referencedClasses: []
}),
smalltalk.Component);

smalltalk.addMethod(
"_equations",
smalltalk.method({
selector: "equations",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@equations"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"equations",{}, smalltalk.Component)})},
args: [],
source: "equations\x0a\x0a^equations",
messageSends: [],
referencedClasses: []
}),
smalltalk.Component);

smalltalk.addMethod(
"_function",
smalltalk.method({
selector: "function",
category: 'subclassing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"function",{}, smalltalk.Component)})},
args: [],
source: "function\x0a\x0a\x22here is the functionality of the component\x0ahere it sets what to do with input from the user or the server\x0ahere the component can also act as a creator of other components\x22\x0a",
messageSends: [],
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
self["@mid"]=(0);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.Component)})},
args: [],
source: "initialize\x0a\x0asuper initialize.\x0amid := 0.",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.Component);

smalltalk.addMethod(
"_paintOn_",
smalltalk.method({
selector: "paintOn:",
category: 'subclassing',
fn: function (css){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"paintOn:",{css:css}, smalltalk.Component)})},
args: ["css"],
source: "paintOn: css\x0a\x22using the CSSCanvas, select attributes from the subtree and paint them\x22\x0a",
messageSends: [],
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
var html,css,selector,jq;
return smalltalk.withContext(function($ctx1) { var $1;
jq=_st(_st(_st("#").__comma(_st(self["@parent"])._pid())).__comma(self["@connectorId"]))._asJQuery();
$1=_st(_st(_st(jq)._children())._length()).__eq((0));
if(smalltalk.assert($1)){
selector=_st(_st("#").__comma(_st(self["@parent"])._pid())).__comma(self["@connectorId"]);
selector;
jq=_st(selector)._asJQuery();
jq;
_st(jq)._append_(_st(_st("<div id = ").__comma(self["@pid"])).__comma("></div>"));
} else {
selector=_st(_st(_st(_st(_st(_st("#").__comma(_st(self["@parent"])._pid())).__comma(self["@connectorId"])).__comma(" ")).__comma(":nth-child(")).__comma(_st(self["@position"])._asString())).__comma(")");
selector;
jq=_st(selector)._asJQuery();
jq;
_st(jq)._after_(_st(_st("<div id = ").__comma(self["@pid"])).__comma("></div>"));
};
html=_st((smalltalk.HTMLCanvas || HTMLCanvas))._onJQuery_(_st(_st("#").__comma(self["@pid"]))._asJQuery());
_st(self)._renderOn_(html);
css=_st((smalltalk.CSSCanvas || CSSCanvas))._new_(self);
_st(self)._paintOn_(css);
return self}, function($ctx1) {$ctx1.fill(self,"realize",{html:html,css:css,selector:selector,jq:jq}, smalltalk.Component)})},
args: [],
source: "realize\x0a\x0a|html css selector jq|\x0a\x0a jq := ('#',(parent pid),connectorId) asJQuery.\x0a (jq children length = 0)\x0a ifTrue:[\x0a   \x09selector := '#',(parent pid),connectorId.\x0a \x09jq := selector asJQuery.\x0a\x09jq append: '<div id = ', pid ,'></div>'. ]\x0a  ifFalse:[\x0aselector := '#',(parent pid),connectorId,' ',':nth-child(',position asString,')'.\x0ajq := selector asJQuery.\x0ajq after: '<div id = ', pid ,'></div>'.\x0a].\x0ahtml := HTMLCanvas onJQuery: ('#',pid) asJQuery.\x0aself renderOn: html.\x0acss := CSSCanvas new: self.\x0aself paintOn:css\x0a\x0a\x0a",
messageSends: ["asJQuery", ",", "pid", "ifTrue:ifFalse:", "append:", "asString", "after:", "=", "length", "children", "onJQuery:", "renderOn:", "new:", "paintOn:"],
referencedClasses: ["HTMLCanvas", "CSSCanvas"]
}),
smalltalk.Component);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'subclassing',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html}, smalltalk.Component)})},
args: ["html"],
source: "renderOn: html\x0a\x0a\x22Use the html canvas to render a component\x22\x0a",
messageSends: [],
referencedClasses: []
}),
smalltalk.Component);

smalltalk.addMethod(
"_root",
smalltalk.method({
selector: "root",
category: 'initializing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@pid"]="";
self["@connectors"]=_st((smalltalk.Connectors || Connectors))._new();
_st(self["@connectors"])._addConnectorId_("0");
_st(_st(self["@connectors"])._at_("0"))._at_put_((0),_st(_st("body")._asJQuery())._get_((0)));
self["@connectorId"]="0";
return self}, function($ctx1) {$ctx1.fill(self,"root",{}, smalltalk.Component)})},
args: [],
source: "root\x0a\x0apid:=''.\x0aconnectors:=Connectors new.\x0aconnectors addConnectorId: '0'.\x0a(connectors at:'0') at:0 put: ('body' asJQuery get:0).\x0aconnectorId:='0'.",
messageSends: ["new", "addConnectorId:", "at:put:", "get:", "asJQuery", "at:"],
referencedClasses: ["Connectors"]
}),
smalltalk.Component);

smalltalk.addMethod(
"_setConnectors",
smalltalk.method({
selector: "setConnectors",
category: 'subclassing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"setConnectors",{}, smalltalk.Component)})},
args: [],
source: "setConnectors\x0a\x0a\x22Used to initialize the connectors\x22\x0a",
messageSends: [],
referencedClasses: []
}),
smalltalk.Component);

smalltalk.addMethod(
"_setEquations",
smalltalk.method({
selector: "setEquations",
category: 'subclassing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"setEquations",{}, smalltalk.Component)})},
args: [],
source: "setEquations\x0a\x0a\x22Used to initialize the Equations\x22\x0a",
messageSends: [],
referencedClasses: []
}),
smalltalk.Component);

smalltalk.addMethod(
"_setVariables",
smalltalk.method({
selector: "setVariables",
category: 'subclassing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"setVariables",{}, smalltalk.Component)})},
args: [],
source: "setVariables\x0a\x0a\x22Used to initializing the binding Variables\x22\x0a",
messageSends: [],
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
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._connect_at_to_(anElementId,aPosition,aParent);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"connect:at:to:",{anElementId:anElementId,aPosition:aPosition,aParent:aParent}, smalltalk.Component.klass)})},
args: ["anElementId", "aPosition", "aParent"],
source: "connect: anElementId at: aPosition to: aParent\x0a\x0a^ self new connect: anElementId at: aPosition to: aParent ; yourself",
messageSends: ["connect:at:to:", "new", "yourself"],
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
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._connect_to_(anElementId,aParent);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"connect:to:",{anElementId:anElementId,aParent:aParent}, smalltalk.Component.klass)})},
args: ["anElementId", "aParent"],
source: "connect: anElementId to: aParent\x0a\x0a^ self new connect: anElementId to: aParent ;yourself.",
messageSends: ["connect:to:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.Component.klass);

smalltalk.addMethod(
"_root",
smalltalk.method({
selector: "root",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._root();
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"root",{}, smalltalk.Component.klass)})},
args: [],
source: "root\x0a\x0a ^ self new root ; yourself.\x0a ",
messageSends: ["root", "new", "yourself"],
referencedClasses: []
}),
smalltalk.Component.klass);


smalltalk.addClass('Connectors', smalltalk.Dictionary, [], 'Component');
smalltalk.addMethod(
"_addConnectorId_",
smalltalk.method({
selector: "addConnectorId:",
category: 'initializing',
fn: function (anElementId){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._at_put_(anElementId,_st((smalltalk.Array || Array))._new());
return self}, function($ctx1) {$ctx1.fill(self,"addConnectorId:",{anElementId:anElementId}, smalltalk.Connectors)})},
args: ["anElementId"],
source: "addConnectorId: anElementId\x0a\x0a\x22ElementId should be the internal mid of a connector\x22\x0aself at: anElementId put: Array new.",
messageSends: ["at:put:", "new"],
referencedClasses: ["Array"]
}),
smalltalk.Connectors);

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



smalltalk.addClass('Equation', smalltalk.Object, ['input', 'output'], 'Component');
smalltalk.Equation.comment="\x22An equation is a static part of a component that links its variables with the variables of the connected components variables\x0a\x0ainput\x0aDictionary dim 1 mid of parent connector\x0a                  dim 2 child position or -1 that means any position\x0a                  dim 3 selector without the pid of the attached component\x0a                  dim 4 type of attribute/variable (attr, styleAttr, intermediary variable)\x0a                  dim 5 value of attribute (height, etc only if it is not an intermediary variable)\x0a                  dim 6 the actual variable\x0a                  \x0aThe first 5 dimensions are static and play the role of the rules whether an input var is part of the equation or not\x0a\x0aoutput\x0a    Array\x0a    \x0aSince the equation lives inside a component there is no output api. This is static\x0a\x0a\x22"
smalltalk.addMethod(
"_addInputVar_",
smalltalk.method({
selector: "addInputVar:",
category: 'connecting',
fn: function (aVector){
var self=this;
var dim1,dim2,dim3,dim4,dim5;
return smalltalk.withContext(function($ctx1) { var $1;
var $early={};
try {
dim1=_st(self["@input"])._at_at_ifAbsent_(aVector,(1),(function(){
return smalltalk.withContext(function($ctx2) {throw $early=[nil];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
dim2=_st(dim1)._at_at_ifAbsent_(aVector,(2),(function(){
return smalltalk.withContext(function($ctx2) {dim2=_st(dim1)._at_ifAbsent_((-1),(function(){
return smalltalk.withContext(function($ctx3) {throw $early=[nil];
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return dim2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
dim3=_st(dim2)._at_at_ifAbsent_(aVector,(3),(function(){
return smalltalk.withContext(function($ctx2) {throw $early=[nil];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
dim4=_st(dim3)._at_at_ifAbsent_(aVector,(4),(function(){
return smalltalk.withContext(function($ctx2) {throw $early=[nil];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$1=_st(_st(aVector)._at_(_st((4)).__eq("intermediate"))).__or(_st(aVector)._at_(_st((4)).__eq("content")));
if(smalltalk.assert($1)){
dim4=_st(aVector)._at_((5));
dim4;
} else {
dim5=_st(dim4)._at_at_ifAbsent_(aVector,(5),(function(){
return smalltalk.withContext(function($ctx2) {throw $early=[nil];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
dim5;
dim5=_st(aVector)._at_((6));
dim5;
};
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"addInputVar:",{aVector:aVector,dim1:dim1,dim2:dim2,dim3:dim3,dim4:dim4,dim5:dim5}, smalltalk.Equation)})},
args: ["aVector"],
source: "addInputVar: aVector\x0a\x0a\x22aVector is an Array of the input space, the last  dim is the input variable\x22\x0a\x0a|dim1 dim2 dim3 dim4 dim5|\x0a\x0adim1 := input at: aVector at: 1 ifAbsent:[^nil].\x0adim2 := dim1 at: aVector at: 2 ifAbsent:[ dim2 := dim1 at: (-1) ifAbsent:[^nil]].\x0adim3 := dim2 at: aVector at: 3 ifAbsent:[^nil].\x0adim4 := dim3 at: aVector at: 4 ifAbsent:[^nil].\x0a((aVector at: 4 = 'intermediate') |(aVector at: 4 = 'content') ) \x0a\x09ifTrue: [ dim4 := aVector at: 5. ]\x0a   \x09ifFalse:[ dim5 := dim4 at: aVector at: 5  ifAbsent:[^nil].\x0a \x09\x09dim5 := aVector at: 6. ].\x0a\x0a\x0a",
messageSends: ["at:at:ifAbsent:", "at:ifAbsent:", "ifTrue:ifFalse:", "at:", "|", "="],
referencedClasses: []
}),
smalltalk.Equation);

smalltalk.addMethod(
"_compute",
smalltalk.method({
selector: "compute",
category: 'computing',
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
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"defineConnectionRules",{}, smalltalk.Equation)})},
args: [],
source: "defineConnectionRules\x0a\x0a\x22input Dictionary that is used to check whether an input varialbe (obtained through a connection) should be linked to this function \x0aDictionary dim 1 selector\x0a                  dim 2 child position or -1 that means any position\x0a                  dim 3 type of attribute/variable (attr, styleAttr, intermediary variable)\x0a                  dim 4 value of attribute (height, etc only if it is not an intermediary variable)\x0a                  \x0adim4 should contain an Array in which the variables will be put.\x0a(dim3 in case of an intermediary var)\x0a\x22\x0a\x0aself subclassResponsibility",
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
return smalltalk.withContext(function($ctx1) { _st(_st(smalltalk.Object.fn.prototype._initialize.apply(_st(self), []))._self())._defineConnectionRules();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.Equation)})},
args: [],
source: "initialize\x0a\x0asuper initialize\x0a\x0aself defineConnectionRules.\x0a",
messageSends: ["defineConnectionRules", "self", "initialize"],
referencedClasses: []
}),
smalltalk.Equation);

smalltalk.addMethod(
"_output_",
smalltalk.method({
selector: "output:",
category: 'initializing',
fn: function (anOutput){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@output"]=anOutput;
return self}, function($ctx1) {$ctx1.fill(self,"output:",{anOutput:anOutput}, smalltalk.Equation)})},
args: ["anOutput"],
source: "output: anOutput\x0a\x0aoutput:= anOutput.",
messageSends: [],
referencedClasses: []
}),
smalltalk.Equation);

smalltalk.addMethod(
"_removeCompVarFrom_from_",
smalltalk.method({
selector: "removeCompVarFrom:from:",
category: 'connecting',
fn: function (aConnectorId,aPosition){
var self=this;
var dim1,dim2;
return smalltalk.withContext(function($ctx1) { var $1;
dim1=_st(self["@input"])._at_(aConnectorId);
dim2=_st(dim1)._at_(aPosition);
_st(dim2)._do_((function(dim3){
return smalltalk.withContext(function($ctx2) {return _st(dim3)._do_((function(dim4){
return smalltalk.withContext(function($ctx3) {return _st(dim4)._keysAndValuesDo_((function(key,dim5){
return smalltalk.withContext(function($ctx4) {$1=_st(_st(key).__eq("intermediate")).__or(_st(key).__eq("content"));
if(smalltalk.assert($1)){
return _st(dim5).__eq(nil);
} else {
return _st(dim5)._do_((function(each){
return smalltalk.withContext(function($ctx5) {return _st(each).__eq(nil);
}, function($ctx5) {$ctx5.fillBlock({each:each},$ctx1)})}));
};
}, function($ctx4) {$ctx4.fillBlock({key:key,dim5:dim5},$ctx1)})}));
}, function($ctx3) {$ctx3.fillBlock({dim4:dim4},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({dim3:dim3},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"removeCompVarFrom:from:",{aConnectorId:aConnectorId,aPosition:aPosition,dim1:dim1,dim2:dim2}, smalltalk.Equation)})},
args: ["aConnectorId", "aPosition"],
source: "removeCompVarFrom: aConnectorId from: aPosition\x0a\x0a\x0a|dim1 dim2|\x0a\x0adim1 := input at: aConnectorId.\x0adim2 := dim1 at: aPosition.\x0adim2 do:[:dim3| \x0adim3 do: [:dim4| dim4 keysAndValuesDo: [ :key :dim5 | \x0a                ((key = 'intermediate') |(key = 'content') ) \x0a                ifTrue: [dim5 = nil]\x0a              \x09ifFalse: [dim5 do: [:each| each = nil]]\x0a      \x09\x09\x09]]].\x0a    \x0a\x0a\x0a",
messageSends: ["at:", "do:", "keysAndValuesDo:", "ifTrue:ifFalse:", "=", "|"],
referencedClasses: []
}),
smalltalk.Equation);

smalltalk.addMethod(
"_reverseCompute",
smalltalk.method({
selector: "reverseCompute",
category: 'computing',
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


smalltalk.addMethod(
"_new_",
smalltalk.method({
selector: "new:",
category: 'not yet classified',
fn: function (anOutput){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"new:",{anOutput:anOutput}, smalltalk.Equation.klass)})},
args: ["anOutput"],
source: "new: anOutput\x0a\x0a\x22the output space is a static api and is predifined when a component class and the equation class are written.\x0athe component simply initializes the output and passes it at the equation\x22\x0a\x0a^ self new",
messageSends: ["new"],
referencedClasses: []
}),
smalltalk.Equation.klass);


