smalltalk.addPackage('CSSCanvas', {});
smalltalk.addClass('CSSCanvas', smalltalk.Object, [], 'CSSCanvas');
smalltalk.addMethod(
"_selector_attr_val_",
smalltalk.method({
selector: "selector:attr:val:",
category: 'not yet classified',
fn: function (aSelector,anAttr,aVal){
var self=this;
smalltalk.send(smalltalk.send(aSelector,"_asJQuery",[]),"_css_to_",[anAttr,aVal]);
return self},
args: ["aSelector", "anAttr", "aVal"],
source: "selector: aSelector attr: anAttr val: aVal\x0a\x0aaSelector asJQuery css: anAttr to:aVal.",
messageSends: ["css:to:", "asJQuery"],
referencedClasses: []
}),
smalltalk.CSSCanvas);



