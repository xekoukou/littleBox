smalltalk.addPackage('Platanos_Doc');
smalltalk.addClass('Doc', smalltalk.HashedCollection, [], 'Platanos_Doc');
smalltalk.addMethod(
smalltalk.method({
selector: "addAsc:",
fn: function (aSha1){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._at_includes_("asc",aSha1);
if(! smalltalk.assert($1)){
_st(self)._at_add_("asc",aSha1);
};
return self}, function($ctx1) {$ctx1.fill(self,"addAsc:",{aSha1:aSha1},smalltalk.Doc)})},
messageSends: ["ifFalse:", "at:add:", "at:includes:"]}),
smalltalk.Doc);

smalltalk.addMethod(
smalltalk.method({
selector: "ascDetect:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._at_detect_("asc",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"ascDetect:",{aBlock:aBlock},smalltalk.Doc)})},
messageSends: ["at:detect:"]}),
smalltalk.Doc);

smalltalk.addMethod(
smalltalk.method({
selector: "ascDo:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._at_do_("asc",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"ascDo:",{aBlock:aBlock},smalltalk.Doc)})},
messageSends: ["at:do:"]}),
smalltalk.Doc);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $Set(){return smalltalk.Set||(typeof Set=="undefined"?nil:Set)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.HashedCollection.fn.prototype._initialize.apply(_st(self), []);
_st(self)._at_put_("asc",_st($Set())._new());
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.Doc)})},
messageSends: ["initialize", "at:put:", "new"]}),
smalltalk.Doc);

smalltalk.addMethod(
smalltalk.method({
selector: "myPosition:",
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
messageSends: ["keysAndValuesDo:", "ifTrue:", "includes:at:", "lines"]}),
smalltalk.Doc);


smalltalk.addMethod(
smalltalk.method({
selector: "json:",
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
messageSends: ["new", "parse:", "at:put:", "at:", "ifNotNil:"]}),
smalltalk.Doc.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "jsono:",
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
messageSends: ["new", "at:put:", "at:", "ifNotNil:"]}),
smalltalk.Doc.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "sha1:csummary:psha1:",
fn: function (aSha1,aCSummary,aPsha1){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._sha1_summary_content_csummary_psha1_(aSha1,nil,nil,aCSummary,aPsha1);
return $1;
}, function($ctx1) {$ctx1.fill(self,"sha1:csummary:psha1:",{aSha1:aSha1,aCSummary:aCSummary,aPsha1:aPsha1},smalltalk.Doc.klass)})},
messageSends: ["sha1:summary:content:csummary:psha1:"]}),
smalltalk.Doc.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "sha1:summary:",
fn: function (aSha1,aSummary){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._sha1_summary_content_csummary_psha1_(aSha1,aSummary,nil,nil,nil);
return $1;
}, function($ctx1) {$ctx1.fill(self,"sha1:summary:",{aSha1:aSha1,aSummary:aSummary},smalltalk.Doc.klass)})},
messageSends: ["sha1:summary:content:csummary:psha1:"]}),
smalltalk.Doc.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "sha1:summary:content:",
fn: function (aSha1,aSummary,aContent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._sha1_summary_content_csummary_psha1_(aSha1,aSummary,aContent,nil,nil);
return $1;
}, function($ctx1) {$ctx1.fill(self,"sha1:summary:content:",{aSha1:aSha1,aSummary:aSummary,aContent:aContent},smalltalk.Doc.klass)})},
messageSends: ["sha1:summary:content:csummary:psha1:"]}),
smalltalk.Doc.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "sha1:summary:content:csummary:psha1:",
fn: function (aSha1,aSummary,aContent,aCSummary,aPsha1){
var self=this;
var a;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
a=_st(self)._new();
_st(a)._at_put_("sha1",aSha1);
$1=aSummary;
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(a)._at_put_("summary",aSummary);
};
$2=aCSummary;
if(($receiver = $2) == nil || $receiver == undefined){
$2;
} else {
_st(a)._at_put_("csummary",aCSummary);
};
$3=aContent;
if(($receiver = $3) == nil || $receiver == undefined){
$3;
} else {
_st(a)._at_put_("content",aContent);
};
$4=aPsha1;
if(($receiver = $4) == nil || $receiver == undefined){
$4;
} else {
_st(a)._at_put_("psha1",aPsha1);
};
$5=a;
return $5;
}, function($ctx1) {$ctx1.fill(self,"sha1:summary:content:csummary:psha1:",{aSha1:aSha1,aSummary:aSummary,aContent:aContent,aCSummary:aCSummary,aPsha1:aPsha1,a:a},smalltalk.Doc.klass)})},
messageSends: ["new", "at:put:", "ifNotNil:"]}),
smalltalk.Doc.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "sha1:summary:psha1:",
fn: function (aSha1,aSummary,aPsha1){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._sha1_summary_content_csummary_psha1_(aSha1,aSummary,nil,nil,aPsha1);
return $1;
}, function($ctx1) {$ctx1.fill(self,"sha1:summary:psha1:",{aSha1:aSha1,aSummary:aSummary,aPsha1:aPsha1},smalltalk.Doc.klass)})},
messageSends: ["sha1:summary:content:csummary:psha1:"]}),
smalltalk.Doc.klass);


