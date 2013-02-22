smalltalk.addPackage('Markdown', {});
smalltalk.addClass('Pagedown', smalltalk.Object, ['converter'], 'Markdown');
smalltalk.addMethod(
"_convert_",
smalltalk.method({
selector: "convert:",
fn: function (markdownText){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(self["@converter"])._makeHtml_(markdownText);
return $1;
}, function($ctx1) {$ctx1.fill(self,"convert:",{markdownText:markdownText}, smalltalk.Pagedown)})}
}),
smalltalk.Pagedown);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.Markdown)})}
}),
smalltalk.Pagedown);


