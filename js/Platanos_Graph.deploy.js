smalltalk.addPackage('Platanos_Graph');
smalltalk.addClass('DocGraph', smalltalk.Component, ['pointer', 'docs', 'rposition', 'lines', 'plines', 'initDoc', 'minPos', 'maxPos'], 'Platanos_Graph');
smalltalk.addMethod(
smalltalk.method({
selector: "afunction",
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($Array())._new();
_st($1)._add_(self["@initDoc"]);
$2=_st($1)._yourself();
_st(self)._requestGraph_direction_start_($2,(1),(0));
return self}, function($ctx1) {$ctx1.fill(self,"afunction",{},smalltalk.DocGraph)})},
messageSends: ["requestGraph:direction:start:", "add:", "new", "yourself"]}),
smalltalk.DocGraph);

smalltalk.addMethod(
smalltalk.method({
selector: "createDocCells",
fn: function (){
var self=this;
function $Point(){return smalltalk.Point||(typeof Point=="undefined"?nil:Point)}
function $DocGraph(){return smalltalk.DocGraph||(typeof DocGraph=="undefined"?nil:DocGraph)}
function $Vector(){return smalltalk.Vector||(typeof Vector=="undefined"?nil:Vector)}
return smalltalk.withContext(function($ctx1) { 
_st(self["@plines"])._withIndexDo_((function(each,index){
return smalltalk.withContext(function($ctx2) {
return _st(each)._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx3) {
_st($DocGraph())._connect_to_doc_point_("2",self,_st(_st(self["@lines"])._at_(index))._at_(key),_st($Point())._x_y_(value,index));
return _st(_st(_st(self["@lines"])._at_(index))._at_(key))._ascDo_((function(other){
var x,y;
return smalltalk.withContext(function($ctx4) {
y=_st(other)._myPosition_(self);
y;
x=_st(_st(self["@plines"])._at_(y))._at_(_st(other)._at_("sha1"));
x;
return _st($Vector())._on_start_end_("10",_st($Point())._x_y_(_st(value).__star((50)),_st(index).__star((50))),_st($Point())._x_y_(_st(x).__star((50)),_st(y).__star((50))));
}, function($ctx4) {$ctx4.fillBlock({other:other,x:x,y:y},$ctx1)})}));
}, function($ctx3) {$ctx3.fillBlock({key:key,value:value},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({each:each,index:index},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"createDocCells",{},smalltalk.DocGraph)})},
messageSends: ["withIndexDo:", "keysAndValuesDo:", "connect:to:doc:point:", "at:", "x:y:", "ascDo:", "myPosition:", "on:start:end:", "*"]}),
smalltalk.DocGraph);

smalltalk.addMethod(
smalltalk.method({
selector: "doc:",
fn: function (aDoc){
var self=this;
function $HashedCollection(){return smalltalk.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self["@initDoc"]=aDoc;
$1=_st($HashedCollection())._new();
_st($1)._at_put_(_st(self["@initDoc"])._at_("sha1"),self["@initDoc"]);
$2=_st($1)._yourself();
_st(self["@lines"])._at_put_(self["@minPos"],$2);
return self}, function($ctx1) {$ctx1.fill(self,"doc:",{aDoc:aDoc},smalltalk.DocGraph)})},
messageSends: ["at:put:", "at:", "new", "yourself"]}),
smalltalk.DocGraph);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $HashedCollection(){return smalltalk.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.Component.fn.prototype._initialize.apply(_st(self), []);
self["@docs"]=_st($HashedCollection())._new();
self["@lines"]=_st($Dictionary())._new();
self["@rposition"]=(0);
self["@minPos"]=(0);
self["@maxPos"]=(0);
self["@pointer"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.DocGraph)})},
messageSends: ["initialize", "new"]}),
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
selector: "loadJson:start:",
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
_st(self)._putInpLines();
return self}, function($ctx1) {$ctx1.fill(self,"loadJson:start:",{aJson:aJson,aPosition:aPosition,a:a,initialDoc:initialDoc,more:more,direction:direction},smalltalk.DocGraph)})},
messageSends: ["parse:", "at:ifAbsent:", "at:", "do:", "jsono:", "at:put:", "at:detect:", "=", "ifNotNil:", "addAsc:", "putInLines:start:", "putInpLines"]}),
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
selector: "putInLines:start:",
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
messageSends: ["ifTrue:ifFalse:", "putInLinesDesc:", "putInLinesAsc:", "=="]}),
smalltalk.DocGraph);

smalltalk.addMethod(
smalltalk.method({
selector: "putInLinesAsc:",
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
messageSends: ["at:", "new", "whileTrue:", "do:", "ascDo:", "ascDetect:", "not", "includes:", "ifNil:", "at:put:", "ifNotNil:", "addAll:", "removeKey:", "removeKey:at:", "+", ">", "size"]}),
smalltalk.DocGraph);

smalltalk.addMethod(
smalltalk.method({
selector: "putInLinesDesc:",
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
messageSends: ["at:", "new", "whileTrue:", "do:", "ascDo:", "at:detect:", "not", "includesKey:", "ifNil:", "at:put:", "ifNotNil:", "addAll:", "at:do:", "removeKey:", "removeKey:at:", "-", ">", "size"]}),
smalltalk.DocGraph);

smalltalk.addMethod(
smalltalk.method({
selector: "putInpLines",
fn: function (){
var self=this;
var iter,pos,current,nodes,siter;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
function $HashedCollection(){return smalltalk.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
iter=nil;
self["@plines"]=_st($Dictionary())._new();
current=_st($Array())._new();
nodes=_st($HashedCollection())._new();
_st(self["@plines"])._at_put_(self["@minPos"],nodes);
siter=(0);
_st(_st(self["@lines"])._at_(self["@minPos"]))._do_((function(each){
return smalltalk.withContext(function($ctx2) {
_st(nodes)._at_put_(_st(each)._at_("sha1"),siter);
_st(current)._at_put_(siter,each);
siter=_st(siter).__plus((1));
return siter;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
pos=_st(self["@minPos"]).__plus((1));
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(pos).__lt_eq(self["@maxPos"]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue_((function(){
var ncurrent;
return smalltalk.withContext(function($ctx2) {
ncurrent=_st($Dictionary())._new();
ncurrent;
siter=(0);
siter;
nodes=_st($HashedCollection())._new();
nodes;
_st(self["@plines"])._at_put_(pos,nodes);
iter=_st(self["@lines"])._at_(pos);
iter;
_st(current)._do_((function(each){
return smalltalk.withContext(function($ctx3) {
return _st(each)._ascDo_((function(other){
return smalltalk.withContext(function($ctx4) {
$1=_st(iter)._includesKey_(_st(other)._at_("sha1"));
if(smalltalk.assert($1)){
$2=_st(nodes)._includesKey_(_st(other)._at_("sha1"));
if(! smalltalk.assert($2)){
_st(nodes)._at_put_(_st(other)._at_("sha1"),siter);
_st(ncurrent)._at_put_(siter,other);
siter=_st(siter).__plus((1));
return siter;
};
} else {
_st(ncurrent)._at_put_(siter,each);
siter=_st(siter).__plus((1));
return siter;
};
}, function($ctx4) {$ctx4.fillBlock({other:other},$ctx1)})}));
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx1)})}));
current=ncurrent;
current;
pos=_st(pos).__plus((1));
return pos;
}, function($ctx2) {$ctx2.fillBlock({ncurrent:ncurrent},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"putInpLines",{iter:iter,pos:pos,current:current,nodes:nodes,siter:siter},smalltalk.DocGraph)})},
messageSends: ["new", "at:put:", "do:", "at:", "+", "whileTrue:", "ascDo:", "ifTrue:ifFalse:", "ifFalse:", "includesKey:", "<="]}),
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
_st($1)._width_("80%");
$2=_st($1)._height_("100%");
_st(_st(html)._div())._id_(_st(self)._assignId());
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html,iter:iter,maxLength:maxLength},smalltalk.DocGraph)})},
messageSends: ["id:", "assignId", "canvas", "width:", "height:", "div"]}),
smalltalk.DocGraph);

smalltalk.addMethod(
smalltalk.method({
selector: "requestGraph:direction:start:",
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
messageSends: ["url:", "new", "at:put:", "yourself", "send:onResponce:", "asJSONString", "loadJSON:start:", "realize"]}),
smalltalk.DocGraph);

smalltalk.addMethod(
smalltalk.method({
selector: "setConnectors",
fn: function (){
var self=this;
function $Connectors(){return smalltalk.Connectors||(typeof Connectors=="undefined"?nil:Connectors)}
return smalltalk.withContext(function($ctx1) { 
self["@connectors"]=_st($Connectors())._new();
_st(self["@connectors"])._addConnectorId_("2");
return self}, function($ctx1) {$ctx1.fill(self,"setConnectors",{},smalltalk.DocGraph)})},
messageSends: ["new", "addConnectorId:"]}),
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


smalltalk.addClass('DocGraphCell', smalltalk.Component, ['doc', 'point'], 'Platanos_Graph');
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
_st(css)._selector_attr_val_("","left",_st(_st(_st(_st(self["@point"])._y()).__star((50)))._asString()).__comma("px"));
_st(css)._selector_attr_val_("","bottom",_st(_st(_st(_st(self["@point"])._y()).__star((50)))._asString()).__comma("px"));
_st(css)._selector_attr_val_(_st(_st("#").__comma(self["@pid"])).__comma("10"),"font","12px/25px Arial, sans-serif");
return self}, function($ctx1) {$ctx1.fill(self,"paintOn:",{css:css},smalltalk.DocGraphCell)})},
messageSends: ["selector:attr:val:", ",", "asString", "*", "y"]}),
smalltalk.DocGraphCell);

smalltalk.addMethod(
smalltalk.method({
selector: "point:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@point"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"point:",{aPoint:aPoint},smalltalk.DocGraphCell)})},
messageSends: []}),
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
selector: "connect:to:doc:point:",
fn: function (anElementId,aParent,aDoc,aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self)._new();
_st($1)._doc_(aDoc);
_st($1)._point_(aPoint);
$2=_st($1)._connect_to_(anElementId,aParent);
return self}, function($ctx1) {$ctx1.fill(self,"connect:to:doc:point:",{anElementId:anElementId,aParent:aParent,aDoc:aDoc,aPoint:aPoint},smalltalk.DocGraphCell.klass)})},
messageSends: ["doc:", "new", "point:", "connect:to:"]}),
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


