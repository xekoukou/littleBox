smalltalk.addPackage('Platanos_Doc');
smalltalk.addClass('Doc', smalltalk.HashedCollection, [], 'Platanos_Doc');
smalltalk.addMethod(
smalltalk.method({
selector: "addAsc:",
category: 'not yet classified',
fn: function (aSha1){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._at_includes_("asc",aSha1);
if(! smalltalk.assert($1)){
_st(self)._at_add_("asc",aSha1);
};
return self}, function($ctx1) {$ctx1.fill(self,"addAsc:",{aSha1:aSha1},smalltalk.Doc)})},
args: ["aSha1"],
source: "addAsc: aSha1\x0a\x0a(self at:'asc' includes: aSha1) ifFalse:[self at:'asc' add:aSha1].",
messageSends: ["ifFalse:", "at:add:", "at:includes:"],
referencedClasses: []
}),
smalltalk.Doc);

smalltalk.addMethod(
smalltalk.method({
selector: "ascDetect:",
category: 'not yet classified',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._at_detect_("asc",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"ascDetect:",{aBlock:aBlock},smalltalk.Doc)})},
args: ["aBlock"],
source: "ascDetect: aBlock\x0a\x0aself at:'asc' detect: aBlock.",
messageSends: ["at:detect:"],
referencedClasses: []
}),
smalltalk.Doc);

smalltalk.addMethod(
smalltalk.method({
selector: "ascDo:",
category: 'not yet classified',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._at_do_("asc",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"ascDo:",{aBlock:aBlock},smalltalk.Doc)})},
args: ["aBlock"],
source: "ascDo: aBlock\x0a\x0aself at:'asc' do: aBlock.",
messageSends: ["at:do:"],
referencedClasses: []
}),
smalltalk.Doc);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
function $Set(){return smalltalk.Set||(typeof Set=="undefined"?nil:Set)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.HashedCollection.fn.prototype._initialize.apply(_st(self), []);
_st(self)._at_put_("asc",_st($Set())._new());
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.Doc)})},
args: [],
source: "initialize\x0a\x0asuper initialize.\x0aself at:'asc' put: (Set new).",
messageSends: ["initialize", "at:put:", "new"],
referencedClasses: ["Set"]
}),
smalltalk.Doc);

smalltalk.addMethod(
smalltalk.method({
selector: "myPosition:",
category: 'not yet classified',
fn: function (aDocGraph){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
var $early={};
try {
_st(_st(aDocGraph)._lines())._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx2) {
$1=_st(value)._includes_at_(self,"sha1");
if(smalltalk.assert($1)){
$2=key;
throw $early=[$2];
};
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1)})}));
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"myPosition:",{aDocGraph:aDocGraph},smalltalk.Doc)})},
args: ["aDocGraph"],
source: "myPosition: aDocGraph\x0a\x0aaDocGraph lines keysAndValuesDo:[:key :value|  (value includes: self at:'sha1') ifTrue:[^key.]].",
messageSends: ["keysAndValuesDo:", "ifTrue:", "includes:at:", "lines"],
referencedClasses: []
}),
smalltalk.Doc);


smalltalk.addMethod(
smalltalk.method({
selector: "json:",
category: 'not yet classified',
fn: function (aJsonString){
var self=this;
var a,b,temp;
function $JSON(){return smalltalk.JSON||(typeof JSON=="undefined"?nil:JSON)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
a=_st(self)._new();
b=_st($JSON())._parse_(aJsonString);
_st(a)._at_put_("sha1",_st(b)._at_("sha1"));
temp=_st(b)._at_("summary");
$1=temp;
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(a)._at_put_("summary",temp);
};
temp=_st(b)._at_("csummary");
$2=temp;
if(($receiver = $2) == nil || $receiver == undefined){
$2;
} else {
_st(a)._at_put_("csummary",temp);
};
temp=_st(b)._at_("content");
$3=temp;
if(($receiver = $3) == nil || $receiver == undefined){
$3;
} else {
_st(a)._at_put_("content",temp);
};
temp=_st(b)._at_("psha1");
$4=temp;
if(($receiver = $4) == nil || $receiver == undefined){
$4;
} else {
_st(a)._at_put_("psha1",temp);
};
$5=a;
return $5;
}, function($ctx1) {$ctx1.fill(self,"json:",{aJsonString:aJsonString,a:a,b:b,temp:temp},smalltalk.Doc.klass)})},
args: ["aJsonString"],
source: "json: aJsonString\x0a\x0a|a b temp|\x0a\x0aa := self new.\x0ab := JSON parse: aJsonString.\x0aa at:'sha1' put: (b at: 'sha1'). \x22the sha1 of all all the below\x22\x0atemp := (b at: 'summary').\x0atemp ifNotNil: [a at:'summary' put: temp].\x0atemp := (b at: 'csummary').\x0atemp ifNotNil: [a at:'csummary' put: temp].\x0atemp := (b at: 'content').\x0atemp ifNotNil: [a at:'content' put: temp].\x0atemp := (b at: 'psha1').\x0atemp ifNotNil: [a at:'psha1' put: temp].   \x22an Array of the previous sha1\x22\x0a\x0a^a",
messageSends: ["new", "parse:", "at:put:", "at:", "ifNotNil:"],
referencedClasses: ["JSON"]
}),
smalltalk.Doc.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "jsono:",
category: 'not yet classified',
fn: function (aJson){
var self=this;
var a,b,temp;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
a=_st(self)._new();
b=aJson;
_st(a)._at_put_("sha1",_st(b)._at_("sha1"));
temp=_st(b)._at_("summary");
$1=temp;
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(a)._at_put_("summary",temp);
};
temp=_st(b)._at_("csummary");
$2=temp;
if(($receiver = $2) == nil || $receiver == undefined){
$2;
} else {
_st(a)._at_put_("csummary",temp);
};
temp=_st(b)._at_("content");
$3=temp;
if(($receiver = $3) == nil || $receiver == undefined){
$3;
} else {
_st(a)._at_put_("content",temp);
};
temp=_st(b)._at_("psha1");
$4=temp;
if(($receiver = $4) == nil || $receiver == undefined){
$4;
} else {
_st(a)._at_put_("psha1",temp);
};
$5=a;
return $5;
}, function($ctx1) {$ctx1.fill(self,"jsono:",{aJson:aJson,a:a,b:b,temp:temp},smalltalk.Doc.klass)})},
args: ["aJson"],
source: "jsono: aJson\x0a\x0a|a b temp|\x0a\x0aa := self new.\x0ab := aJson.\x0aa at:'sha1' put: (b at: 'sha1'). \x22the sha1 of all all the below\x22\x0atemp := (b at: 'summary').\x0atemp ifNotNil: [a at:'summary' put: temp].\x0atemp := (b at: 'csummary').\x0atemp ifNotNil: [a at:'csummary' put: temp].\x0atemp := (b at: 'content').\x0atemp ifNotNil: [a at:'content' put: temp].\x0atemp := (b at: 'psha1').\x0atemp ifNotNil: [a at:'psha1' put: temp].   \x22an Array of the previous sha1\x22\x0a\x0a^a",
messageSends: ["new", "at:put:", "at:", "ifNotNil:"],
referencedClasses: []
}),
smalltalk.Doc.klass);


