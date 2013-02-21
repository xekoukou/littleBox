smalltalk.addPackage('Platanos', {});
smalltalk.addClass('Platanos', smalltalk.Object, [], 'Platanos');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
var si;
return smalltalk.withContext(function($ctx1) { si=_st((smalltalk.SearchInput || SearchInput))._connect_at_to_("",(0),_st((smalltalk.Component || Component))._root());
_st((smalltalk.SearchResult || SearchResult))._connect_to_("1",si);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{si:si}, smalltalk.Platanos)})}
}),
smalltalk.Platanos);



