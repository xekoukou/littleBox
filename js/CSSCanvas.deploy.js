smalltalk.addPackage('CSSCanvas', {});
smalltalk.addClass('CSSCanvas', smalltalk.Object, [], 'CSSCanvas');
smalltalk.addMethod(
"_selector_attr_val_",
smalltalk.method({
selector: "selector:attr:val:",
fn: function (aSelector,anAttr,aVal){
var self=this;
smalltalk.send(smalltalk.send(aSelector,"_asJQuery",[]),"_css_to_",[anAttr,aVal]);
return self}
}),
smalltalk.CSSCanvas);



