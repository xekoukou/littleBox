smalltalk.addPackage('Platanos', {});
smalltalk.addClass('Platanos', smalltalk.Object, [], 'Platanos');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st("body")._asJQuery())._empty();
_st(_st("body")._asJQuery())._attr_value_("id","0");
_st((smalltalk.SearchInput || SearchInput))._connect_at_to_("0",(0),_st((smalltalk.Component || Component))._root());
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.Platanos)})},
args: [],
source: "initialize\x0a\x0a('body' asJQuery) empty.\x0a\x0a('body' asJQuery) attr: 'id' value: '0'.\x0aSearchInput connect: '0' at: 0 to: (Component root).",
messageSends: ["empty", "asJQuery", "attr:value:", "connect:at:to:", "root"],
referencedClasses: ["Component", "SearchInput"]
}),
smalltalk.Platanos);



