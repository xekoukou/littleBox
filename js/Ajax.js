smalltalk.addPackage('Ajax');
smalltalk.addClass('Ajax', smalltalk.Object, ['url'], 'Ajax');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.Ajax)})},
args: [],
source: "initialize\x0a\x0asuper initialize",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.Ajax);

smalltalk.addMethod(
smalltalk.method({
selector: "send:onResponce:",
category: 'not yet classified',
fn: function (aString,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._send_to_onResponce_(aString,"",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"send:onResponce:",{aString:aString,aBlock:aBlock},smalltalk.Ajax)})},
args: ["aString", "aBlock"],
source: "send: aString onResponce: aBlock\x0a\x0aself send: aString to: '' onResponce: aBlock",
messageSends: ["send:to:onResponce:"],
referencedClasses: []
}),
smalltalk.Ajax);

smalltalk.addMethod(
smalltalk.method({
selector: "send:to:onResponce:",
category: 'not yet classified',
fn: function (aString,responsibleUrl,aBlock){
var self=this;
var turl;
return smalltalk.withContext(function($ctx1) { 
turl=_st(self["@url"]).__comma(responsibleUrl);
_st(jQuery)._ajax_options_(turl,smalltalk.HashedCollection._fromPairs_([_st("type").__minus_gt("POST"),_st("data").__minus_gt(aString),_st("contentType").__minus_gt("text/plain;charset=UTF-8"),_st("success").__minus_gt((function(data,textStatus,jqXHR){
return smalltalk.withContext(function($ctx2) {
return _st(aBlock)._value_(data);
}, function($ctx2) {$ctx2.fillBlock({data:data,textStatus:textStatus,jqXHR:jqXHR},$ctx1)})})),_st("dataType").__minus_gt("text")]));
return self}, function($ctx1) {$ctx1.fill(self,"send:to:onResponce:",{aString:aString,responsibleUrl:responsibleUrl,aBlock:aBlock,turl:turl},smalltalk.Ajax)})},
args: ["aString", "responsibleUrl", "aBlock"],
source: "send: aString to: responsibleUrl onResponce: aBlock\x0a\x0a|turl|\x0a\x0aturl := url,responsibleUrl.\x0a\x0a\x09jQuery\x0a\x09\x09ajax: turl \x0a\x09\x09options: #{ \x0a\x09\x09\x09'type' -> 'POST'.\x0a\x09\x09\x09'data' -> aString.\x0a\x09\x09\x09'contentType' -> 'text/plain;charset=UTF-8'.\x0a\x09\x09\x09'success' -> [:data :textStatus :jqXHR| aBlock value:data].\x0a\x09\x09\x09'dataType' -> 'text'\x0a\x09\x09\x09}",
messageSends: [",", "ajax:options:", "->", "value:"],
referencedClasses: []
}),
smalltalk.Ajax);

smalltalk.addMethod(
smalltalk.method({
selector: "url:",
category: 'not yet classified',
fn: function (anUrl){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@url"]=anUrl;
return self}, function($ctx1) {$ctx1.fill(self,"url:",{anUrl:anUrl},smalltalk.Ajax)})},
args: ["anUrl"],
source: "url: anUrl\x0a\x0aurl := anUrl.",
messageSends: [],
referencedClasses: []
}),
smalltalk.Ajax);


smalltalk.addMethod(
smalltalk.method({
selector: "url:",
category: 'not yet classified',
fn: function (anUrl){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self)._new();
_st($2)._url_(anUrl);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"url:",{anUrl:anUrl},smalltalk.Ajax.klass)})},
args: ["anUrl"],
source: "url: anUrl\x0a\x0a^self new url: anUrl ; yourself.",
messageSends: ["url:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.Ajax.klass);


