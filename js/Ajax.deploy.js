smalltalk.addPackage('Ajax');
smalltalk.addClass('Ajax', smalltalk.Object, ['url'], 'Ajax');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.Ajax)})},
messageSends: ["initialize"]}),
smalltalk.Ajax);

smalltalk.addMethod(
smalltalk.method({
selector: "send:onResponce:",
fn: function (aString,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._send_to_onResponce_(aString,"",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"send:onResponce:",{aString:aString,aBlock:aBlock},smalltalk.Ajax)})},
messageSends: ["send:to:onResponce:"]}),
smalltalk.Ajax);

smalltalk.addMethod(
smalltalk.method({
selector: "send:to:onResponce:",
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
messageSends: [",", "ajax:options:", "->", "value:"]}),
smalltalk.Ajax);

smalltalk.addMethod(
smalltalk.method({
selector: "url:",
fn: function (anUrl){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@url"]=anUrl;
return self}, function($ctx1) {$ctx1.fill(self,"url:",{anUrl:anUrl},smalltalk.Ajax)})},
messageSends: []}),
smalltalk.Ajax);


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
}, function($ctx1) {$ctx1.fill(self,"url:",{anUrl:anUrl},smalltalk.Ajax.klass)})},
messageSends: ["url:", "new", "yourself"]}),
smalltalk.Ajax.klass);


