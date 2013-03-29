smalltalk.addPackage('Platanos_Doc');
smalltalk.addClass('Doc', smalltalk.HashedCollection, [], 'Platanos_Doc');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.HashedCollection.fn.prototype._initialize.apply(_st(self), []);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.Doasd)})},
messageSends: ["initialize"]}),
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


