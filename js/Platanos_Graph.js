smalltalk.addPackage('Platanos_Graph');
smalltalk.addClass('DocGraph', smalltalk.Component, ['pointer', 'docs', 'rposition', 'lines', 'initDoc', 'minPos', 'maxPos'], 'Platanos_Graph');
smalltalk.DocGraph.comment="\x22The Json that is passed to this function has this form:\x0a\x0a\x0a{ ascendants:[docs]}\x0a\x0aor\x0a{ descendants:[docs]}\x0a\x0apointer is the doc that is currently viewed\x0a\x0a\x0a\x0arposition is the position of the first line that is rendered\x0aminPos and maxPos are the min and max position in which we have information\x0a\x22"
smalltalk.addMethod(
smalltalk.method({
selector: "createDocCells",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"createDocCells",{},smalltalk.DocGraph)})},
args: [],
source: "createDocCells\x0a",
messageSends: [],
referencedClasses: []
}),
smalltalk.DocGraph);

smalltalk.addMethod(
smalltalk.method({
selector: "doc:",
category: 'not yet classified',
fn: function (aDoc){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@initDoc"]=aDoc;
return self}, function($ctx1) {$ctx1.fill(self,"doc:",{aDoc:aDoc},smalltalk.DocGraph)})},
args: ["aDoc"],
source: "doc: aDoc\x0a\x0ainitDoc := aDoc.",
messageSends: [],
referencedClasses: []
}),
smalltalk.DocGraph);

smalltalk.addMethod(
smalltalk.method({
selector: "function",
category: 'not yet classified',
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($Array())._new();
_st($1)._add_(self["@initDoc"]);
$2=_st($1)._yourself();
_st(self)._requestGraph_direction_start_($2,(1),(0));
return self}, function($ctx1) {$ctx1.fill(self,"function",{},smalltalk.DocGraph)})},
args: [],
source: "function\x0a\x0aself requestGraph: (Array new add: initDoc; yourself) direction: 1 start: 0.",
messageSends: ["requestGraph:direction:start:", "add:", "new", "yourself"],
referencedClasses: ["Array"]
}),
smalltalk.DocGraph);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
function $HashedCollection(){return smalltalk.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
smalltalk.Component.fn.prototype._initialize.apply(_st(self), []);
self["@docs"]=_st($HashedCollection())._new();
self["@lines"]=_st($Dictionary())._new();
self["@rposition"]=(0);
self["@minPos"]=(0);
self["@maxPos"]=(0);
$1=_st($HashedCollection())._new();
_st($1)._at_put_(_st(self["@initDoc"])._at_("sha1"),self["@initDoc"]);
$2=_st($1)._yourself();
_st(self["@lines"])._at_put_(self["@minPos"],$2);
self["@pointer"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.DocGraph)})},
args: [],
source: "initialize\x0a\x0asuper initialize.\x0a\x0adocs := HashedCollection new.\x0alines := Dictionary new.\x0arposition := 0.\x0aminPos := 0.\x0amaxPos := 0.\x0alines at: minPos put: (HashedCollection new at: (initDoc at: 'sha1') put: initDoc ;yourself).\x0apointer := nil.",
messageSends: ["initialize", "new", "at:put:", "at:", "yourself"],
referencedClasses: ["HashedCollection", "Dictionary"]
}),
smalltalk.DocGraph);

smalltalk.addMethod(
smalltalk.method({
selector: "lines",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@lines"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"lines",{},smalltalk.DocGraph)})},
args: [],
source: "lines\x0a\x0a^lines",
messageSends: [],
referencedClasses: []
}),
smalltalk.DocGraph);

smalltalk.addMethod(
smalltalk.method({
selector: "loadJson:start:",
category: 'not yet classified',
fn: function (aJson,aPosition){
var self=this;
var a,initialDoc,more,direction;
function $JSON(){return smalltalk.JSON||(typeof JSON=="undefined"?nil:JSON)}
function $Doc(){return smalltalk.Doc||(typeof Doc=="undefined"?nil:Doc)}
return smalltalk.withContext(function($ctx1) { 
var $1;
a=_st($JSON())._parse_(aJson);
direction=(1);
more=_st(a)._at_ifAbsent_("ascendants",(function(){
return smalltalk.withContext(function($ctx2) {
more=_st(a)._at_("descendants");
more;
direction=(-1);
return direction;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(more)._do_((function(each){
var doc;
return smalltalk.withContext(function($ctx2) {
doc=_st($Doc())._jsono_(each);
doc;
return _st(self["@docs"])._at_put_(_st(doc)._at_("sha1"),doc);
}, function($ctx2) {$ctx2.fillBlock({each:each,doc:doc},$ctx1)})}));
_st(self["@docs"])._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(self["@docs"])._do_((function(other){
var temp;
return smalltalk.withContext(function($ctx3) {
temp=_st(other)._at_detect_("psha1",(function(psha1){
return smalltalk.withContext(function($ctx4) {
return _st(psha1).__eq(_st(each)._at_("sha1"));
}, function($ctx4) {$ctx4.fillBlock({psha1:psha1},$ctx1)})}));
temp;
$1=temp;
if(($receiver = $1) == nil || $receiver == undefined){
return $1;
} else {
return _st(each)._addAsc_(_st(other)._at_("sha1"));
};
}, function($ctx3) {$ctx3.fillBlock({other:other,temp:temp},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
_st(self)._putInLines_start_(direction,aPosition);
return self}, function($ctx1) {$ctx1.fill(self,"loadJson:start:",{aJson:aJson,aPosition:aPosition,a:a,initialDoc:initialDoc,more:more,direction:direction},smalltalk.DocGraph)})},
args: ["aJson", "aPosition"],
source: "loadJson: aJson start: aPosition\x0a\x0a|a initialDoc more direction|\x0a\x0aa := JSON parse: aJson.\x0a\x0adirection := 1.\x0amore := a at: 'ascendants' ifAbsent:[more := a at: 'descendants'. direction := -1.].\x0a\x22freeing the memory\x22\x0a\x0a\x0amore do: [:each| \x0a\x09|doc|\x09\x0a\x09\x0a\x09doc := Doc jsono: each.\x0a\x09docs at: (doc at:'sha1') put:doc.\x0a].\x0a\x0adocs do:[:each|\x0a\x09docs do:[:other| |temp|\x0a\x09\x09temp := other at:'psha1' detect:[:psha1| \x0a\x09\x09\x09\x09\x09\x09(psha1 = (each at: 'sha1'))].\x0a\x09\x09temp ifNotNil:[each addAsc:(other at:'sha1')].\x0a\x09\x09]\x0a\x09].\x0a\x0a\x0aself putInLines: direction start: aPosition .",
messageSends: ["parse:", "at:ifAbsent:", "at:", "do:", "jsono:", "at:put:", "at:detect:", "=", "ifNotNil:", "addAsc:", "putInLines:start:"],
referencedClasses: ["JSON", "Doc"]
}),
smalltalk.DocGraph);

smalltalk.addMethod(
smalltalk.method({
selector: "paintOn:",
category: 'not yet classified',
fn: function (css){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(css)._selector_attr_val_("","padding","5px");
_st(css)._selector_attr_val_("","box-shadow","1px 1px 3px rgba(0, 0, 0, 0.5)");
_st(css)._selector_attr_val_("","border-radius","2px");
_st(css)._selector_attr_val_("","margin","3px");
_st(css)._selector_attr_val_("","position","fixed");
_st(css)._selector_attr_val_("","left","0px");
_st(css)._selector_attr_val_("","top","0px");
return self}, function($ctx1) {$ctx1.fill(self,"paintOn:",{css:css},smalltalk.DocGraph)})},
args: ["css"],
source: "paintOn: css\x0a\x0acss selector: '' attr: 'padding' val: '5px'.\x0acss selector: '' attr: 'box-shadow' val: '1px 1px 3px rgba(0, 0, 0, 0.5)'.\x0acss selector: '' attr: 'border-radius' val: '2px'.\x0acss selector: '' attr: 'margin' val: '3px'.\x0a\x0acss selector: '' attr:'position' val: 'fixed'.\x0acss selector: '' attr:'left' val: '0px'.\x0acss selector: '' attr:'top' val: '0px'.",
messageSends: ["selector:attr:val:"],
referencedClasses: []
}),
smalltalk.DocGraph);

smalltalk.addMethod(
smalltalk.method({
selector: "putInLines:start:",
category: 'not yet classified',
fn: function (direction,aPosition){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(direction).__eq_eq((-1));
if(smalltalk.assert($1)){
_st(self)._putInLinesDesc_(aPosition);
} else {
_st(self)._putInLinesAsc_(aPosition);
};
return self}, function($ctx1) {$ctx1.fill(self,"putInLines:start:",{direction:direction,aPosition:aPosition},smalltalk.DocGraph)})},
args: ["direction", "aPosition"],
source: "putInLines: direction start: aPosition\x0a\x0a(direction == -1) ifTrue:[ self putInLinesDesc: aPosition]\x0a                         ifFalse:[ self putInLinesAsc: aPosition].",
messageSends: ["ifTrue:ifFalse:", "putInLinesDesc:", "putInLinesAsc:", "=="],
referencedClasses: []
}),
smalltalk.DocGraph);

smalltalk.addMethod(
smalltalk.method({
selector: "putInLinesAsc:",
category: 'not yet classified',
fn: function (aPosition){
var self=this;
var nodes,oldnodes,prevnodes,pos;
function $HashedCollection(){return smalltalk.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
pos=aPosition;
nodes=_st(self["@lines"])._at_(pos);
oldnodes=_st($HashedCollection())._new();
prevnodes=_st($HashedCollection())._new();
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(nodes)._size()).__gt((0));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue_((function(){
var nnodes,all;
return smalltalk.withContext(function($ctx2) {
nnodes=_st($HashedCollection())._new();
nnodes;
_st(nodes)._do_((function(node){
return smalltalk.withContext(function($ctx3) {
return _st(node)._ascDo_((function(each){
var temp;
return smalltalk.withContext(function($ctx4) {
temp=_st(each)._ascDetect_((function(psha1){
return smalltalk.withContext(function($ctx5) {
return _st(_st(nodes)._includes_(psha1))._not();
}, function($ctx5) {$ctx5.fillBlock({psha1:psha1},$ctx1)})}));
temp;
$1=temp;
if(($receiver = $1) == nil || $receiver == undefined){
_st(nnodes)._at_put_(_st(each)._at_("sha1"),each);
} else {
$1;
};
$2=temp;
if(($receiver = $2) == nil || $receiver == undefined){
return $2;
} else {
_st(oldnodes)._at_put_(_st(each)._at_("sha1"),each);
return _st(prevnodes)._at_put_(_st(node)._at_("sha1"),node);
};
}, function($ctx4) {$ctx4.fillBlock({each:each,temp:temp},$ctx1)})}));
}, function($ctx3) {$ctx3.fillBlock({node:node},$ctx1)})}));
all=_st($HashedCollection())._new();
all;
_st(all)._addAll_(nodes);
_st(all)._addAll_(prevnodes);
_st(oldnodes)._do_((function(each){
var temp;
return smalltalk.withContext(function($ctx3) {
temp=_st(each)._ascDetect_((function(psha1){
return smalltalk.withContext(function($ctx4) {
return _st(_st(all)._includes_(psha1))._not();
}, function($ctx4) {$ctx4.fillBlock({psha1:psha1},$ctx1)})}));
temp;
$3=temp;
if(($receiver = $3) == nil || $receiver == undefined){
_st(nnodes)._at_put_(_st(each)._at_("sha1"),each);
_st(each)._ascDo_((function(psha1){
return smalltalk.withContext(function($ctx4) {
return _st(prevnodes)._removeKey_(psha1);
}, function($ctx4) {$ctx4.fillBlock({psha1:psha1},$ctx1)})}));
return _st(oldnodes)._removeKey_at_(each,"sha1");
} else {
return $3;
};
}, function($ctx3) {$ctx3.fillBlock({each:each,temp:temp},$ctx1)})}));
pos=_st(pos).__plus((1));
pos;
_st(self["@lines"])._at_put_(pos,nnodes);
nodes=nnodes;
return nodes;
}, function($ctx2) {$ctx2.fillBlock({nnodes:nnodes,all:all},$ctx1)})}));
self["@maxPos"]=pos;
return self}, function($ctx1) {$ctx1.fill(self,"putInLinesAsc:",{aPosition:aPosition,nodes:nodes,oldnodes:oldnodes,prevnodes:prevnodes,pos:pos},smalltalk.DocGraph)})},
args: ["aPosition"],
source: "putInLinesAsc: aPosition\x0a\x0a| nodes oldnodes prevnodes pos|\x0a\x0apos := aPosition.\x0a\x0anodes := lines at: pos.\x0aoldnodes := HashedCollection new.  \x22nodes that one of their parent hasnt been found yet\x22\x0aprevnodes := HashedCollection new. \x22previous (found) nodes that have at least one oldnode child\x22\x0a\x0a[(nodes size) > 0] whileTrue:[ |nnodes all| \x0a\x09nnodes := HashedCollection new.\x0a\x09nodes do:[:node| node ascDo:[:each| \x0a\x09|temp|\x0a\x09temp := each ascDetect:[:psha1| (nodes includes:psha1) not].\x0a\x09\x0a\x09temp ifNil: [nnodes at:(each at:'sha1') put: each.].\x0a\x09temp ifNotNil:[ oldnodes  at:(each at:'sha1') put: each. \x0a\x09\x09\x09\x09prevnodes at:(node at:'sha1') put: node.\x0a\x09\x09\x09\x09].\x0a\x09]].\x0a\x09all := HashedCollection new.\x0a\x09all addAll: nodes.\x0a\x09all addAll:prevnodes.\x0a\x09oldnodes do:[:each| \x0a\x09|temp|\x0a\x09temp := each ascDetect:[:psha1| (all includes:psha1) not].\x0a\x09\x0a\x09temp ifNil: [nnodes at:(each at:'sha1') put: each.\x0a\x09\x09\x22remove their parents as well.\x22\x0a\x09\x09each ascDo:[:psha1| prevnodes removeKey:psha1].\x0a\x09\x09oldnodes removeKey: each at: 'sha1'.\x0a\x09\x09].\x0a\x09].\x0a\x09\x0a\x09pos := pos + 1.\x0a\x09lines at: pos put:nnodes.\x0a    nodes := nnodes.\x0a].\x0a\x0amaxPos := pos.",
messageSends: ["at:", "new", "whileTrue:", "do:", "ascDo:", "ascDetect:", "not", "includes:", "ifNil:", "at:put:", "ifNotNil:", "addAll:", "removeKey:", "removeKey:at:", "+", ">", "size"],
referencedClasses: ["HashedCollection"]
}),
smalltalk.DocGraph);

smalltalk.addMethod(
smalltalk.method({
selector: "putInLinesDesc:",
category: 'not yet classified',
fn: function (aPosition){
var self=this;
var nodes,oldnodes,prevnodes,pos;
function $HashedCollection(){return smalltalk.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
pos=aPosition;
nodes=_st(self["@lines"])._at_(pos);
oldnodes=_st($HashedCollection())._new();
prevnodes=_st($HashedCollection())._new();
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(nodes)._size()).__gt((0));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue_((function(){
var nnodes,all;
return smalltalk.withContext(function($ctx2) {
nnodes=_st($HashedCollection())._new();
nnodes;
_st(nodes)._do_((function(node){
return smalltalk.withContext(function($ctx3) {
return _st(node)._ascDo_((function(each){
var temp;
return smalltalk.withContext(function($ctx4) {
temp=_st(each)._at_detect_("psha1",(function(psha1){
return smalltalk.withContext(function($ctx5) {
return _st(_st(nodes)._includesKey_(psha1))._not();
}, function($ctx5) {$ctx5.fillBlock({psha1:psha1},$ctx1)})}));
temp;
$1=temp;
if(($receiver = $1) == nil || $receiver == undefined){
_st(nnodes)._at_put_(_st(each)._at_("sha1"),each);
} else {
$1;
};
$2=temp;
if(($receiver = $2) == nil || $receiver == undefined){
return $2;
} else {
_st(oldnodes)._at_put_(_st(each)._at_("sha1"),each);
return _st(prevnodes)._at_put_(_st(node)._at_("sha1"),node);
};
}, function($ctx4) {$ctx4.fillBlock({each:each,temp:temp},$ctx1)})}));
}, function($ctx3) {$ctx3.fillBlock({node:node},$ctx1)})}));
all=_st($HashedCollection())._new();
all;
_st(all)._addAll_(nodes);
_st(all)._addAll_(prevnodes);
_st(oldnodes)._do_((function(each){
var temp;
return smalltalk.withContext(function($ctx3) {
temp=_st(each)._at_detect_("psha1",(function(psha1){
return smalltalk.withContext(function($ctx4) {
return _st(_st(all)._includesKey_(psha1))._not();
}, function($ctx4) {$ctx4.fillBlock({psha1:psha1},$ctx1)})}));
temp;
$3=temp;
if(($receiver = $3) == nil || $receiver == undefined){
_st(nnodes)._at_put_(_st(each)._at_("sha1"),each);
_st(each)._at_do_("psha1",(function(psha1){
return smalltalk.withContext(function($ctx4) {
return _st(prevnodes)._removeKey_(psha1);
}, function($ctx4) {$ctx4.fillBlock({psha1:psha1},$ctx1)})}));
return _st(oldnodes)._removeKey_at_(each,"sha1");
} else {
return $3;
};
}, function($ctx3) {$ctx3.fillBlock({each:each,temp:temp},$ctx1)})}));
pos=_st(pos).__minus((1));
pos;
_st(self["@lines"])._at_put_(pos,nnodes);
nodes=nnodes;
return nodes;
}, function($ctx2) {$ctx2.fillBlock({nnodes:nnodes,all:all},$ctx1)})}));
self["@minPos"]=pos;
return self}, function($ctx1) {$ctx1.fill(self,"putInLinesDesc:",{aPosition:aPosition,nodes:nodes,oldnodes:oldnodes,prevnodes:prevnodes,pos:pos},smalltalk.DocGraph)})},
args: ["aPosition"],
source: "putInLinesDesc: aPosition\x0a\x0a| nodes oldnodes prevnodes pos|\x0a\x0apos := aPosition.\x0a\x0anodes := lines at:pos.\x0aoldnodes := HashedCollection new.  \x22nodes that one of their parent hasnt been found yet\x22\x0aprevnodes := HashedCollection new. \x22previous (found) nodes that have at least one oldnode child\x22\x0a\x0a[(nodes size) > 0] whileTrue:[ |nnodes all| \x0a\x09nnodes := HashedCollection new.\x0a\x09nodes do:[:node| node ascDo:[:each| \x0a\x09|temp|\x0a\x09temp := each at: 'psha1' detect:[:psha1| (nodes includesKey:psha1) not].\x0a\x09\x0a\x09temp ifNil: [nnodes at:(each at:'sha1') put: each.].\x0a\x09temp ifNotNil:[ oldnodes  at:(each at:'sha1') put: each. \x0a\x09\x09\x09\x09prevnodes at:(node at:'sha1') put: node.\x0a\x09\x09\x09\x09].\x0a\x09]].\x0a\x09all := HashedCollection new.\x0a\x09all addAll: nodes.\x0a\x09all addAll:prevnodes.\x0a\x09oldnodes do:[:each| \x0a\x09|temp|\x0a\x09temp := each at: 'psha1' detect:[:psha1| (all includesKey:psha1) not].\x0a\x09\x0a\x09temp ifNil: [nnodes at:(each at:'sha1') put: each.\x0a\x09\x09\x22remove their parents as well.\x22\x0a\x09\x09each at: 'psha1' do:[:psha1| prevnodes removeKey:psha1].\x0a\x09\x09oldnodes removeKey: each at: 'sha1'.\x0a\x09\x09].\x0a\x09].\x0a\x09\x0a\x09pos := pos - 1.\x0a\x09lines at: pos put:nnodes.\x0a    nodes := nnodes.\x0a].\x0a\x0aminPos := pos.",
messageSends: ["at:", "new", "whileTrue:", "do:", "ascDo:", "at:detect:", "not", "includesKey:", "ifNil:", "at:put:", "ifNotNil:", "addAll:", "at:do:", "removeKey:", "removeKey:at:", "-", ">", "size"],
referencedClasses: ["HashedCollection"]
}),
smalltalk.DocGraph);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'not yet classified',
fn: function (html){
var self=this;
var iter,maxLength;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._canvas();
_st($1)._id_(_st(self)._assignId());
_st($1)._width_("20%");
$2=_st($1)._height_("100%");
_st(_st(html)._div())._id_(_st(self)._assignId());
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html,iter:iter,maxLength:maxLength},smalltalk.DocGraph)})},
args: ["html"],
source: "renderOn: html\x0a\x0a|iter maxLength|\x0a\x0ahtml canvas id: self assignId; width:'20%';height:'100%'.\x0a\x0a\x22the docCell connector div\x22\x0ahtml div id: self assignId.",
messageSends: ["id:", "assignId", "canvas", "width:", "height:", "div"],
referencedClasses: []
}),
smalltalk.DocGraph);

smalltalk.addMethod(
smalltalk.method({
selector: "requestGraph:direction:start:",
category: 'not yet classified',
fn: function (nodes,aDirection,aPosition){
var self=this;
var ajax,data;
function $Ajax(){return smalltalk.Ajax||(typeof Ajax=="undefined"?nil:Ajax)}
function $HashedCollection(){return smalltalk.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
ajax=_st($Ajax())._url_(self["@url"]);
data=_st($HashedCollection())._new();
$1=data;
_st($1)._at_put_("request","docGraph");
$3=_st($HashedCollection())._new();
_st($3)._at_put_("direction",aDirection);
_st($3)._at_put_("initNodes",nodes);
$4=_st($3)._yourself();
$2=_st($1)._at_put_("data",$4);
_st(ajax)._send_onResponce_(_st(data)._asJSONString(),(function(resp){
return smalltalk.withContext(function($ctx2) {
_st(self)._loadJSON_start_(resp,aPosition);
return _st(self)._realize();
}, function($ctx2) {$ctx2.fillBlock({resp:resp},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"requestGraph:direction:start:",{nodes:nodes,aDirection:aDirection,aPosition:aPosition,ajax:ajax,data:data},smalltalk.DocGraph)})},
args: ["nodes", "aDirection", "aPosition"],
source: "requestGraph: nodes direction: aDirection start: aPosition\x0a\x0a\x22an Array\x22\x0a\x0a|ajax data|\x0a\x0aajax := Ajax url: url.\x0a\x0adata := HashedCollection new.\x0adata at: 'request' put:'docGraph'; at: 'data' put:(HashedCollection new at: 'direction' put: aDirection; at: 'initNodes' put: nodes; yourself).\x0aajax send: data asJSONString onResponce: [:resp| self loadJSON:resp start: aPosition.\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09self realize.].",
messageSends: ["url:", "new", "at:put:", "yourself", "send:onResponce:", "asJSONString", "loadJSON:start:", "realize"],
referencedClasses: ["Ajax", "HashedCollection"]
}),
smalltalk.DocGraph);

smalltalk.addMethod(
smalltalk.method({
selector: "setConnectors",
category: 'not yet classified',
fn: function (){
var self=this;
function $Connectors(){return smalltalk.Connectors||(typeof Connectors=="undefined"?nil:Connectors)}
return smalltalk.withContext(function($ctx1) { 
self["@connectors"]=_st($Connectors())._new();
_st(self["@connectors"])._addConnectorId_("2");
return self}, function($ctx1) {$ctx1.fill(self,"setConnectors",{},smalltalk.DocGraph)})},
args: [],
source: "setConnectors\x0a\x0aconnectors:= Connectors new.\x0a\x0a\x22DocCell connector\x22\x0aconnectors addConnectorId: '2'.",
messageSends: ["new", "addConnectorId:"],
referencedClasses: ["Connectors"]
}),
smalltalk.DocGraph);


smalltalk.addMethod(
smalltalk.method({
selector: "connect:at:to:doc:",
category: 'not yet classified',
fn: function (anElementId,aPosition,aParent,aDoc){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self)._new();
_st($1)._doc_(aDoc);
$2=_st($1)._connect_at_to_(anElementId,aPosition,aParent);
return self}, function($ctx1) {$ctx1.fill(self,"connect:at:to:doc:",{anElementId:anElementId,aPosition:aPosition,aParent:aParent,aDoc:aDoc},smalltalk.DocGraph.klass)})},
args: ["anElementId", "aPosition", "aParent", "aDoc"],
source: "connect: anElementId at: aPosition to: aParent doc: aDoc\x0a\x0aself new doc: aDoc; connect: anElementId at: aPosition to: aParent.",
messageSends: ["doc:", "new", "connect:at:to:"],
referencedClasses: []
}),
smalltalk.DocGraph.klass);


smalltalk.addClass('DocGraphCell', smalltalk.Component, ['doc'], 'Platanos_Graph');
smalltalk.addMethod(
smalltalk.method({
selector: "doc:",
category: 'not yet classified',
fn: function (aDoc){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@doc"]=aDoc;
return self}, function($ctx1) {$ctx1.fill(self,"doc:",{aDoc:aDoc},smalltalk.DocGraphCell)})},
args: ["aDoc"],
source: "doc: aDoc\x0a\x0adoc := aDoc.",
messageSends: [],
referencedClasses: []
}),
smalltalk.DocGraphCell);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.Component.fn.prototype._initialize.apply(_st(self), []);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.DocGraphCell)})},
args: [],
source: "initialize\x0a\x0asuper initialize.",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.DocGraphCell);

smalltalk.addMethod(
smalltalk.method({
selector: "paintOn:",
category: 'not yet classified',
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
args: ["css"],
source: "paintOn: css\x0a\x0a\x0a\x0acss selector: '' attr: 'padding' val: '5px'.\x0acss selector: '' attr: 'box-shadow' val: '1px 1px 3px rgba(0, 0, 0, 0.5)'.\x0acss selector: '' attr: 'border-radius' val: '2px'.\x0acss selector: '' attr: 'text-align' val: 'left'.\x0acss selector: '' attr: 'margin' val: '3px'.\x0a\x0acss selector: '' attr:'position' val: 'fixed'.\x0a\x0acss selector: '#',pid,'10' attr: 'font' val:'12px/25px Arial, sans-serif'.",
messageSends: ["selector:attr:val:", ","],
referencedClasses: []
}),
smalltalk.DocGraphCell);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'not yet classified',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(html)._div())._with_(_st(self["@doc"])._at_("csummary"));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.DocGraphCell)})},
args: ["html"],
source: "renderOn: html\x0a\x0ahtml div with: (doc at: 'csummary').",
messageSends: ["with:", "at:", "div"],
referencedClasses: []
}),
smalltalk.DocGraphCell);


smalltalk.addMethod(
smalltalk.method({
selector: "connect:at:to:doc:",
category: 'not yet classified',
fn: function (anElementId,aPosition,aParent,aDoc){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self)._new();
_st($1)._doc_(aDoc);
$2=_st($1)._connect_at_to_(anElementId,aPosition,aParent);
return self}, function($ctx1) {$ctx1.fill(self,"connect:at:to:doc:",{anElementId:anElementId,aPosition:aPosition,aParent:aParent,aDoc:aDoc},smalltalk.DocGraphCell.klass)})},
args: ["anElementId", "aPosition", "aParent", "aDoc"],
source: "connect: anElementId at: aPosition to: aParent doc: aDoc\x0a\x0aself new doc: aDoc; connect: anElementId at: aPosition to: aParent.",
messageSends: ["doc:", "new", "connect:at:to:"],
referencedClasses: []
}),
smalltalk.DocGraphCell.klass);


smalltalk.addClass('Vector', smalltalk.Object, [], 'Platanos_Graph');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.Vector)})},
args: [],
source: "initialize\x0a\x0asuper initialize",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.Vector);

smalltalk.addMethod(
smalltalk.method({
selector: "on:start:end:",
category: 'not yet classified',
fn: function (aCanvasId,aStartPoint,anEndPoint){
var self=this;
var ctx;
return smalltalk.withContext(function($ctx1) { 
ctx=_st(_st("#").__comma(_st(aCanvasId)._asJQuery()))._at_((0));
_st(ctx)._beginPath();
_st(ctx)._moveTo_and_(_st(aStartPoint)._x(),_st(aStartPoint)._y());
_st(ctx)._lineTo_and_(_st(anEndPoint)._x(),_st(anEndPoint)._y());
_st(ctx)._stroke();
return self}, function($ctx1) {$ctx1.fill(self,"on:start:end:",{aCanvasId:aCanvasId,aStartPoint:aStartPoint,anEndPoint:anEndPoint,ctx:ctx},smalltalk.Vector)})},
args: ["aCanvasId", "aStartPoint", "anEndPoint"],
source: "on: aCanvasId start: aStartPoint end: anEndPoint\x0a\x0a|ctx|\x0a\x0actx :=  '#',aCanvasId asJQuery at:0.\x0actx beginPath.\x0actx moveTo: (aStartPoint x) and: (aStartPoint y).\x0actx lineTo: (anEndPoint x) and: (anEndPoint y).\x0actx stroke.",
messageSends: ["at:", ",", "asJQuery", "beginPath", "moveTo:and:", "x", "y", "lineTo:and:", "stroke"],
referencedClasses: []
}),
smalltalk.Vector);


smalltalk.addMethod(
smalltalk.method({
selector: "on:start:end:",
category: 'not yet classified',
fn: function (aCanvas,aStart,anEnd){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(_st(_st(self)._new())._on())._aCanvas();
_st($2)._start_end_(aStart,anEnd);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:start:end:",{aCanvas:aCanvas,aStart:aStart,anEnd:anEnd},smalltalk.Vector.klass)})},
args: ["aCanvas", "aStart", "anEnd"],
source: "on: aCanvas start: aStart end: anEnd\x0a\x0a^ self new on aCanvas start:aStart end: anEnd; yourself.",
messageSends: ["start:end:", "aCanvas", "on", "new", "yourself"],
referencedClasses: []
}),
smalltalk.Vector.klass);


