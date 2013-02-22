smalltalk.addPackage('Markdown', {});
smalltalk.addClass('Latex', smalltalk.Object, [], 'Markdown');

smalltalk.addMethod(
"_id_",
smalltalk.method({
selector: "id:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { MathJax.Hub.Queue(["Typeset",MathJax.Hub,aString]);;
return self}, function($ctx1) {$ctx1.fill(self,"id:",{aString:aString}, smalltalk.Latex.klass)})}
}),
smalltalk.Latex.klass);


smalltalk.addClass('Pagedown', smalltalk.Object, ['converter'], 'Markdown');
smalltalk.addMethod(
"_convert_",
smalltalk.method({
selector: "convert:",
fn: function (markdownText){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
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
return smalltalk.withContext(function($ctx1) { self["@converter"]=_st((smalltalk.Markdown || Markdown))._getSanitizingConverter();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.Pagedown)})}
}),
smalltalk.Pagedown);



