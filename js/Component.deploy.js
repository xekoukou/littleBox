smalltalk.addPackage('Component');
smalltalk.addClass('Connectors', smalltalk.Dictionary, [], 'Component');
smalltalk.addMethod(
smalltalk.method({
selector: "addConnectorId:",
fn: function (anElementId){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._at_put_(anElementId,_st((smalltalk.Array || Array))._new());
return self}, function($ctx1) {$ctx1.fill(self,"addConnectorId:",{anElementId:anElementId}, smalltalk.Connectors)})},
messageSends: ["at:put:", "new"]}),
smalltalk.Connectors);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.Dictionary.fn.prototype._initialize.apply(_st(self), []);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.Connector)})},
messageSends: ["initialize"]}),
smalltalk.Connectors);



smalltalk.addClass('Domain', smalltalk.Object, ['url'], 'Component');
smalltalk.addMethod(
smalltalk.method({
selector: "url",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@url"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"url",{},smalltalk.Domain)})},
messageSends: []}),
smalltalk.Domain);

smalltalk.addMethod(
smalltalk.method({
selector: "url:",
fn: function (anUrl){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@url"]=anUrl;
return self}, function($ctx1) {$ctx1.fill(self,"url:",{anUrl:anUrl},smalltalk.Domain)})},
messageSends: []}),
smalltalk.Domain);


smalltalk.addMethod(
smalltalk.method({
selector: "url:",
fn: function (anUrl){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self)._new();
_st($2)._url_(anUrl);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"url:",{anUrl:anUrl},smalltalk.Domain.klass)})},
messageSends: ["url:", "new", "yourself"]}),
smalltalk.Domain.klass);


smalltalk.addClass('Component', smalltalk.Domain, ['connectorId', 'position', 'parent', 'pid', 'mid', 'connectors', 'variables', 'equations'], 'Component');
smalltalk.addMethod(
smalltalk.method({
selector: "assignId",
fn: function (){
var self=this;
var smid;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self["@mid"]=_st(self["@mid"]).__plus((1));
$1=_st(_st(_st(self["@mid"]).__slash((10)))._truncated()).__eq(_st(self["@mid"]).__slash((10)));
if(smalltalk.assert($1)){
self["@mid"]=_st(self["@mid"]).__plus((1));
self["@mid"];
};
smid=_st(_st(self["@pid"]).__comma(_st(self["@mid"])._asString())).__comma("0");
$2=smid;
return $2;
}, function($ctx1) {$ctx1.fill(self,"assignId",{smid:smid},smalltalk.Component)})},
messageSends: ["+", "ifTrue:", "=", "/", "truncated", ",", "asString"]}),
smalltalk.Component);

smalltalk.addMethod(
smalltalk.method({
selector: "bindComp:atCon:atPos:",
fn: function (aComponent,aConnectorId,aPosition){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
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
return self}, function($ctx1) {$ctx1.fill(self,"bindComp:atCon:atPos:",{aComponent:aComponent,aConnectorId:aConnectorId,aPosition:aPosition},smalltalk.Component)})},
messageSends: ["ifNotNil:", "at:put:", "at:", "connectors", "bindVars:conId:pos:", "variables", "equations"]}),
smalltalk.Component);

smalltalk.addMethod(
smalltalk.method({
selector: "bindVars:conId:pos:",
fn: function (aVariables,aConnectorId,aPosition){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
_st(_st(self)._equations())._do_((function(equation){
return smalltalk.withContext(function($ctx2) {
return _st(aVariables)._do_((function(variable){
var vector;
return smalltalk.withContext(function($ctx3) {
vector=_st($Array())._new();
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
return self}, function($ctx1) {$ctx1.fill(self,"bindVars:conId:pos:",{aVariables:aVariables,aConnectorId:aConnectorId,aPosition:aPosition},smalltalk.Component)})},
messageSends: ["do:", "new", "add:", "selector", "ifTrue:ifFalse:", "attr", "isContent", "isStyleAttr", "isIntermediate", "addInputVar:", "equations"]}),
smalltalk.Component);

smalltalk.addMethod(
smalltalk.method({
selector: "connect:at:to:",
fn: function (aConnectorId,aPosition,aParent){
var self=this;
var ids;
return smalltalk.withContext(function($ctx1) { 
self["@url"]=_st(aParent)._url();
self["@connectorId"]=aConnectorId;
self["@parent"]=aParent;
self["@pid"]=_st(self["@parent"])._assignId();
self["@position"]=aPosition;
_st(self)._function();
ids=_st(self)._realize();
_st(self)._setConnectors();
_st(self)._setVariables();
_st(self)._setEquations();
_st(self["@parent"])._bindComp_atCon_atPos_(self,aConnectorId,aPosition);
return self}, function($ctx1) {$ctx1.fill(self,"connect:at:to:",{aConnectorId:aConnectorId,aPosition:aPosition,aParent:aParent,ids:ids},smalltalk.Component)})},
messageSends: ["url", "assignId", "function", "realize", "setConnectors", "setVariables", "setEquations", "bindComp:atCon:atPos:"]}),
smalltalk.Component);

smalltalk.addMethod(
smalltalk.method({
selector: "connect:to:",
fn: function (aConnectorId,aParent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._connect_at_to_(aConnectorId,_st(_st(_st(_st(aParent)._connectors())._at_(aConnectorId))._size()).__plus((1)),aParent);
return self}, function($ctx1) {$ctx1.fill(self,"connect:to:",{aConnectorId:aConnectorId,aParent:aParent},smalltalk.Component)})},
messageSends: ["connect:at:to:", "+", "size", "at:", "connectors"]}),
smalltalk.Component);

smalltalk.addMethod(
smalltalk.method({
selector: "connectors",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@connectors"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"connectors",{},smalltalk.Component)})},
messageSends: []}),
smalltalk.Component);

smalltalk.addMethod(
smalltalk.method({
selector: "disconnectCompAt:at:",
fn: function (aConnectorId,aPosition){
var self=this;
var selector;
return smalltalk.withContext(function($ctx1) { 
selector=_st(_st(_st(_st(_st(self["@pid"]).__comma(aConnectorId)).__comma(" ")).__comma(":nth-child(")).__comma(_st(_st(aPosition).__minus((1)))._asString())).__comma(")");
_st(_st(selector)._asJQuery())._remove();
_st(_st(_st(self)._connectors())._at_(aConnectorId))._remove_ifAbsent_(aPosition,(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st(self)._equations())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._removeCompVarFrom_from_(aConnectorId,aPosition);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"disconnectCompAt:at:",{aConnectorId:aConnectorId,aPosition:aPosition,selector:selector},smalltalk.Component)})},
messageSends: [",", "asString", "-", "remove", "asJQuery", "remove:ifAbsent:", "at:", "connectors", "do:", "removeCompVarFrom:from:", "equations"]}),
smalltalk.Component);

smalltalk.addMethod(
smalltalk.method({
selector: "equations",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@equations"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"equations",{},smalltalk.Component)})},
messageSends: []}),
smalltalk.Component);

smalltalk.addMethod(
smalltalk.method({
selector: "function",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"function",{},smalltalk.Component)})},
messageSends: []}),
smalltalk.Component);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.Domain.fn.prototype._initialize.apply(_st(self), []);
self["@mid"]=(0);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.Component)})},
messageSends: ["initialize"]}),
smalltalk.Component);

smalltalk.addMethod(
smalltalk.method({
selector: "paintOn:",
fn: function (css){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"paintOn:",{css:css},smalltalk.Component)})},
messageSends: []}),
smalltalk.Component);

smalltalk.addMethod(
smalltalk.method({
selector: "pid",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@pid"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"pid",{},smalltalk.Component)})},
messageSends: []}),
smalltalk.Component);

smalltalk.addMethod(
smalltalk.method({
selector: "realize",
fn: function (){
var self=this;
var html,css,selector,jq;
function $HTMLCanvas(){return smalltalk.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
function $CSSCanvas(){return smalltalk.CSSCanvas||(typeof CSSCanvas=="undefined"?nil:CSSCanvas)}
return smalltalk.withContext(function($ctx1) { 
var $1;
jq=_st(_st(_st("#").__comma(_st(self["@parent"])._pid())).__comma(self["@connectorId"]))._asJQuery();
$1=_st(_st(_st(jq)._children())._length()).__eq((0));
if(smalltalk.assert($1)){
selector=_st(_st(_st("#").__comma(_st(self["@parent"])._pid())).__comma(self["@connectorId"])).__comma("0");
selector;
jq=_st(selector)._asJQuery();
jq;
_st(jq)._append_(_st(_st("<div id = ").__comma(self["@pid"])).__comma("></div>"));
} else {
selector=_st(_st(_st(_st(_st(_st("#").__comma(_st(self["@parent"])._pid())).__comma(self["@connectorId"])).__comma("0 ")).__comma(":nth-child(")).__comma(_st(self["@position"])._asString())).__comma(")");
selector;
jq=_st(selector)._asJQuery();
jq;
_st(jq)._after_(_st(_st("<div id = ").__comma(self["@pid"])).__comma("></div>"));
};
html=_st($HTMLCanvas())._onJQuery_(_st(_st("#").__comma(self["@pid"]))._asJQuery());
_st(self)._renderOn_(html);
css=_st($CSSCanvas())._new_(self);
_st(self)._paintOn_(css);
return self}, function($ctx1) {$ctx1.fill(self,"realize",{html:html,css:css,selector:selector,jq:jq},smalltalk.Component)})},
messageSends: ["asJQuery", ",", "pid", "ifTrue:ifFalse:", "append:", "asString", "after:", "=", "length", "children", "onJQuery:", "renderOn:", "new:", "paintOn:"]}),
smalltalk.Component);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.Component)})},
messageSends: []}),
smalltalk.Component);

smalltalk.addMethod(
smalltalk.method({
selector: "root:",
fn: function (anUrl){
var self=this;
function $Connectors(){return smalltalk.Connectors||(typeof Connectors=="undefined"?nil:Connectors)}
return smalltalk.withContext(function($ctx1) { 
self["@url"]=anUrl;
self["@pid"]="";
self["@connectors"]=_st($Connectors())._new();
_st(self["@connectors"])._addConnectorId_("");
_st(_st("body")._asJQuery())._append_("<div id = 0> </div>");
_st(_st(self["@connectors"])._at_(""))._at_put_((0),_st(_st("#0")._asJQuery())._get_((0)));
return self}, function($ctx1) {$ctx1.fill(self,"root:",{anUrl:anUrl},smalltalk.Component)})},
messageSends: ["new", "addConnectorId:", "append:", "asJQuery", "at:put:", "get:", "at:"]}),
smalltalk.Component);

smalltalk.addMethod(
smalltalk.method({
selector: "setConnectors",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"setConnectors",{},smalltalk.Component)})},
messageSends: []}),
smalltalk.Component);

smalltalk.addMethod(
smalltalk.method({
selector: "setEquations",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"setEquations",{},smalltalk.Component)})},
messageSends: []}),
smalltalk.Component);

smalltalk.addMethod(
smalltalk.method({
selector: "setVariables",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"setVariables",{},smalltalk.Component)})},
messageSends: []}),
smalltalk.Component);

smalltalk.addMethod(
smalltalk.method({
selector: "variables",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@variables"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"variables",{},smalltalk.Component)})},
messageSends: []}),
smalltalk.Component);


smalltalk.addMethod(
smalltalk.method({
selector: "connect:at:to:",
fn: function (anElementId,aPosition,aParent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self)._new();
_st($2)._connect_at_to_(anElementId,aPosition,aParent);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"connect:at:to:",{anElementId:anElementId,aPosition:aPosition,aParent:aParent},smalltalk.Component.klass)})},
messageSends: ["connect:at:to:", "new", "yourself"]}),
smalltalk.Component.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "connect:to:",
fn: function (anElementId,aParent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self)._new();
_st($2)._connect_to_(anElementId,aParent);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"connect:to:",{anElementId:anElementId,aParent:aParent},smalltalk.Component.klass)})},
messageSends: ["connect:to:", "new", "yourself"]}),
smalltalk.Component.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "root:",
fn: function (anUrl){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self)._new();
_st($2)._root_(anUrl);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"root:",{anUrl:anUrl},smalltalk.Component.klass)})},
messageSends: ["root:", "new", "yourself"]}),
smalltalk.Component.klass);


smalltalk.addClass('Equation', smalltalk.Object, ['input', 'output'], 'Component');
smalltalk.addMethod(
smalltalk.method({
selector: "addInputVar:",
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
messageSends: ["at:at:ifAbsent:", "at:ifAbsent:", "ifTrue:ifFalse:", "at:", "|", "="]}),
smalltalk.Equation);

smalltalk.addMethod(
smalltalk.method({
selector: "compute",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"compute",{}, smalltalk.Equation)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.Equation);

smalltalk.addMethod(
smalltalk.method({
selector: "defineConnectionRules",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"defineConnectionRules",{}, smalltalk.Equation)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.Equation);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(smalltalk.Object.fn.prototype._initialize.apply(_st(self), []))._self())._defineConnectionRules();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.Equation)})},
messageSends: ["defineConnectionRules", "self", "initialize"]}),
smalltalk.Equation);

smalltalk.addMethod(
smalltalk.method({
selector: "output:",
fn: function (anOutput){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@output"]=anOutput;
return self}, function($ctx1) {$ctx1.fill(self,"output:",{anOutput:anOutput}, smalltalk.Equation)})},
messageSends: []}),
smalltalk.Equation);

smalltalk.addMethod(
smalltalk.method({
selector: "removeCompVarFrom:from:",
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
messageSends: ["at:", "do:", "keysAndValuesDo:", "ifTrue:ifFalse:", "=", "|"]}),
smalltalk.Equation);

smalltalk.addMethod(
smalltalk.method({
selector: "reverseCompute",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"reverseCompute",{}, smalltalk.Equation)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.Equation);


smalltalk.addMethod(
smalltalk.method({
selector: "new:",
fn: function (anOutput){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"new:",{anOutput:anOutput}, smalltalk.Equation.klass)})},
messageSends: ["new"]}),
smalltalk.Equation.klass);


