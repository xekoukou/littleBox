smalltalk.addPackage('Platanos', {});
smalltalk.addClass('Platanos', smalltalk.Object, [], 'Platanos');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st("body")._asJQuery())._empty();
_st(_st("body")._asJQuery())._attr_value_("id","0");
_st((smalltalk.SearchInput || SearchInput))._connect_at_to_("0",(0),_st((smalltalk.Component || Component))._root());
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.Platanos)})}
}),
smalltalk.Platanos);



