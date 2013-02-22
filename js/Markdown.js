smalltalk.addPackage('Markdown', {});
smalltalk.addClass('Latex', smalltalk.Object, [], 'Markdown');

smalltalk.addMethod(
"_convert_",
smalltalk.method({
selector: "convert:",
category: 'not yet classified',
fn: function (aSelector){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st((smalltalk.MathJax || MathJax))._Hub())._Queue_(["Typeset",(smalltalk.MathJax || MathJax),(smalltalk.Hub || Hub),aSelector]);
return self}, function($ctx1) {$ctx1.fill(self,"convert:",{aSelector:aSelector}, smalltalk.Latex.klass)})},
args: ["aSelector"],
source: "convert: aSelector\x0a\x0aMathJax Hub Queue: {'Typeset'. MathJax.Hub. aSelector}.",
messageSends: ["Queue:", "Hub"],
referencedClasses: ["MathJax", "Hub"]
}),
smalltalk.Latex.klass);


smalltalk.addClass('Pagedown', smalltalk.Object, ['converter'], 'Markdown');
smalltalk.addMethod(
"_convert_",
smalltalk.method({
selector: "convert:",
category: 'not yet classified',
fn: function (markdownText){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self["@converter"])._makeHtml_(markdownText);
return $1;
}, function($ctx1) {$ctx1.fill(self,"convert:",{markdownText:markdownText}, smalltalk.Pagedown)})},
args: ["markdownText"],
source: "convert: markdownText\x0a\x0a^ converter makeHtml: markdownText .",
messageSends: ["makeHtml:"],
referencedClasses: []
}),
smalltalk.Pagedown);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@converter"]=_st((smalltalk.Markdown || Markdown))._getSanitizingConverter();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.Pagedown)})},
args: [],
source: "initialize\x0a\x0aconverter := Markdown getSanitizingConverter.",
messageSends: ["getSanitizingConverter"],
referencedClasses: ["Markdown"]
}),
smalltalk.Pagedown);



