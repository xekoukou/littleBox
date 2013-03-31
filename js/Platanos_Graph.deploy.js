smalltalk.addPackage('Platanos_Graph');
smalltalk.addClass('DocGraph', smalltalk.Component, ['pointer', 'docs', 'position', 'lines', 'initDoc'], 'Platanos_Graph');
smalltalk.addMethod(
smalltalk.method({
selector: "doc:",
fn: function (aDoc){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@initDoc"]=aDoc;
return self}, function($ctx1) {$ctx1.fill(self,"doc:",{aDoc:aDoc},smalltalk.DocGraph)})},
messageSends: []}),
smalltalk.DocGraph);

smalltalk.addMethod(
smalltalk.method({
selector: "function",
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($Array())._new();
_st($1)._add_(self["@initDoc"]);
$2=_st($1)._yourself();
_st(self)._requestGraph_($2);
return self}, function($ctx1) {$ctx1.fill(self,"function",{},smalltalk.DocGraph)})},
messageSends: ["requestGraph:", "add:", "new", "yourself"]}),
smalltalk.DocGraph);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $HashedCollection(){return smalltalk.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
smalltalk.Component.fn.prototype._initialize.apply(_st(self), []);
self["@docs"]=_st($HashedCollection())._new();
self["@lines"]=_st($Dictionary())._new();
self["@position"]=(0);
$1=_st($HashedCollection())._new();
_st($1)._at_put_(_st(self["@initDoc"])._at_("sha1"),self["@initDoc"]);
$2=_st($1)._yourself();
_st(self["@lines"])._at_put_(self["@position"],$2);
self["@pointer"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.DocGraph)})},
messageSends: ["initialize", "new", "at:put:", "at:", "yourself"]}),
smalltalk.DocGraph);

smalltalk.addMethod(
smalltalk.method({
selector: "lines",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@lines"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"lines",{},smalltalk.DocGraph)})},
messageSends: []}),
smalltalk.DocGraph);

smalltalk.addMethod(
smalltalk.method({
selector: "loadJson:",
fn: function (aJson){
var self=this;
var a,initialDoc,more,direction;
function $JSON(){return smalltalk.JSON||(typeof JSON=="undefined"?nil:JSON)}
function $Doc(){return smalltalk.Doc||(typeof Doc=="undefined"?nil:Doc)}
return smalltalk.withContext(function($ctx1) { 
var $1;
a=_st($JSON())._parse_(self["@json"]);
direction=(1);
more=_st(a)._at_ifAbsent_("ascendants",(function(){
return smalltalk.withContext(function($ctx2) {
more=_st(a)._at_("descendants");
more;
direction=(-1);
return direction;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
self["@json"]=nil;
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
_st(self)._putInLines_(direction);
return self}, function($ctx1) {$ctx1.fill(self,"loadJson:",{aJson:aJson,a:a,initialDoc:initialDoc,more:more,direction:direction},smalltalk.DocGraph)})},
messageSends: ["parse:", "at:ifAbsent:", "at:", "do:", "jsono:", "at:put:", "at:detect:", "=", "ifNotNil:", "addAsc:", "putInLines:"]}),
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
_st(css)._selector_attr_val_("","margin","3px");
_st(css)._selector_attr_val_("","position","fixed");
_st(css)._selector_attr_val_("","left","0px");
_st(css)._selector_attr_val_("","top","0px");
return self}, function($ctx1) {$ctx1.fill(self,"paintOn:",{css:css},smalltalk.DocGraph)})},
messageSends: ["selector:attr:val:"]}),
smalltalk.DocGraph);

smalltalk.addMethod(
smalltalk.method({
selector: "putInLines:",
fn: function (direction){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(direction).__eq_eq((-1));
if(smalltalk.assert($1)){
_st(self)._putInLinesDesc();
} else {
_st(self)._putInLinesAsc();
};
return self}, function($ctx1) {$ctx1.fill(self,"putInLines:",{direction:direction},smalltalk.DocGraph)})},
messageSends: ["ifTrue:ifFalse:", "putInLinesDesc", "putInLinesAsc", "=="]}),
smalltalk.DocGraph);

smalltalk.addMethod(
smalltalk.method({
selector: "putInLinesAsc",
fn: function (){
var self=this;
var nodes,oldnodes,prevnodes;
function $HashedCollection(){return smalltalk.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
nodes=_st(self["@lines"])._at_(self["@position"]);
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
self["@position"]=_st(self["@position"]).__plus((1));
self["@position"];
_st(self["@lines"])._at_put_(self["@position"],nnodes);
nodes=nnodes;
return nodes;
}, function($ctx2) {$ctx2.fillBlock({nnodes:nnodes,all:all},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"putInLinesAsc",{nodes:nodes,oldnodes:oldnodes,prevnodes:prevnodes},smalltalk.DocGraph)})},
messageSends: ["at:", "new", "whileTrue:", "do:", "ascDo:", "ascDetect:", "not", "includes:", "ifNil:", "at:put:", "ifNotNil:", "addAll:", "removeKey:", "removeKey:at:", "+", ">", "size"]}),
smalltalk.DocGraph);

smalltalk.addMethod(
smalltalk.method({
selector: "putInLinesDesc",
fn: function (){
var self=this;
var nodes,oldnodes,prevnodes;
function $HashedCollection(){return smalltalk.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
nodes=_st(self["@lines"])._at_(self["@position"]);
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
self["@position"]=_st(self["@position"]).__minus((1));
self["@position"];
_st(self["@lines"])._at_put_(self["@position"],nnodes);
nodes=nnodes;
return nodes;
}, function($ctx2) {$ctx2.fillBlock({nnodes:nnodes,all:all},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"putInLinesDesc",{nodes:nodes,oldnodes:oldnodes,prevnodes:prevnodes},smalltalk.DocGraph)})},
messageSends: ["at:", "new", "whileTrue:", "do:", "ascDo:", "at:detect:", "not", "includesKey:", "ifNil:", "at:put:", "ifNotNil:", "addAll:", "at:do:", "removeKey:", "removeKey:at:", "-", ">", "size"]}),
smalltalk.DocGraph);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
var iter,maxLength;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._canvas();
_st($1)._id_(_st(self)._assignId());
_st($1)._width_("20%");
$2=_st($1)._height_("100%");
iter=self["@position"];
maxLength=(20);
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@lines"])._includesKey_(_st(maxLength).__plus(self["@position"]));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) {
maxLength=_st(maxLength).__minus((1));
return maxLength;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(iter).__lt_eq(maxLength)).__plus(self["@position"]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {
_st(_st(html)._div())._id_(_st(self)._assignId());
iter=_st(iter).__plus((1));
return iter;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html,iter:iter,maxLength:maxLength},smalltalk.DocGraph)})},
messageSends: ["id:", "assignId", "canvas", "width:", "height:", "whileFalse:", "-", "includesKey:", "+", "whileTrue:", "div", "<="]}),
smalltalk.DocGraph);

smalltalk.addMethod(
smalltalk.method({
selector: "requestGraph:",
fn: function (nodes){
var self=this;
var ajax,string;
function $Ajax(){return smalltalk.Ajax||(typeof Ajax=="undefined"?nil:Ajax)}
function $JSON(){return smalltalk.JSON||(typeof JSON=="undefined"?nil:JSON)}
return smalltalk.withContext(function($ctx1) { 
ajax=_st($Ajax())._url_(self["@url"]);
string=_st($JSON())._stringify_(nodes);
_st(ajax)._send_to_onResponce_(string,"docGraph",(function(data){
return smalltalk.withContext(function($ctx2) {
_st(self)._loadJSON_(data);
return _st(self)._realize();
}, function($ctx2) {$ctx2.fillBlock({data:data},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"requestGraph:",{nodes:nodes,ajax:ajax,string:string},smalltalk.DocGraph)})},
messageSends: ["url:", "stringify:", "send:to:onResponce:", "loadJSON:", "realize"]}),
smalltalk.DocGraph);


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
return self}, function($ctx1) {$ctx1.fill(self,"connect:at:to:doc:",{anElementId:anElementId,aPosition:aPosition,aParent:aParent,aDoc:aDoc},smalltalk.DocGraph.klass)})},
messageSends: ["doc:", "new", "connect:at:to:"]}),
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


smalltalk.addClass('Vector', smalltalk.Object, [], 'Platanos_Graph');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.Vector)})},
messageSends: ["initialize"]}),
smalltalk.Vector);

smalltalk.addMethod(
smalltalk.method({
selector: "on:start:end:",
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
messageSends: ["at:", ",", "asJQuery", "beginPath", "moveTo:and:", "x", "y", "lineTo:and:", "stroke"]}),
smalltalk.Vector);


smalltalk.addMethod(
smalltalk.method({
selector: "on:start:end:",
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
messageSends: ["start:end:", "aCanvas", "on", "new", "yourself"]}),
smalltalk.Vector.klass);


