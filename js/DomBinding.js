smalltalk.addPackage('DomBinding', {});
smalltalk.addClass('Attr', smalltalk.Object, ['style', 'val', 'attr', 'selector'], 'DomBinding');
smalltalk.addMethod(
"_attr",
smalltalk.method({
selector: "attr",
category: 'accessing',
fn: function (){
var self=this;
return self['@attr'];
return self;},
args: [],
source: "attr\x0a\x0a^attr",
messageSends: [],
referencedClasses: []
}),
smalltalk.Attr);

smalltalk.addMethod(
"_dBind",
smalltalk.method({
selector: "dBind",
category: 'assigning',
fn: function (){
var self=this;
var mutationObserver=nil;
var myObserver=nil;
var config=nil;
var mutationHandler=nil;
(mutationHandler=(function(mutationRecords){return smalltalk.send(mutationRecords, "_do_", [(function(each){var temp=nil;
return ((($receiver = self['@style']).klass === smalltalk.Boolean) ? ($receiver ? (function(){temp=($(each.target).attr(self._attr()));;return smalltalk.send(self, "_is_", [temp]);})() : (function(){temp=($(each.target).css(self._attr()));;return smalltalk.send(self, "_is_", [temp]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){temp=($(each.target).attr(self._attr()));;return smalltalk.send(self, "_is_", [temp]);}), (function(){temp=($(each.target).css(self._attr()));;return smalltalk.send(self, "_is_", [temp]);})]));})]);}));
((($receiver = smalltalk.send((smalltalk.HTMLCanvas || HTMLCanvas), "_isWebkit", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (mutationObserver=smalltalk.send((typeof window == 'undefined' ? nil : window), "_WebKitMutationObserver", []));})() : (function(){return (mutationObserver=smalltalk.send((typeof window == 'undefined' ? nil : window), "_MutationObserver", []));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (mutationObserver=smalltalk.send((typeof window == 'undefined' ? nil : window), "_WebKitMutationObserver", []));}), (function(){return (mutationObserver=smalltalk.send((typeof window == 'undefined' ? nil : window), "_MutationObserver", []));})]));
myObserver= new mutationObserver(mutationHandler);;
((($receiver = (self['@style']=true)).klass === smalltalk.Boolean) ? ($receiver ? (function(){return config={attributes: true, attributeFilter:[self._attr()] };})() : (function(){return config={characterData: true, attributes: true, attributeFilter:[self._attr()] };})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return config={attributes: true, attributeFilter:[self._attr()] };}), (function(){return config={characterData: true, attributes: true, attributeFilter:[self._attr()] };})]));
smalltalk.send(smalltalk.send(smalltalk.send(self['@selector'], "_asJQuery", []), "_toArray", []), "_do_", [(function(each){return smalltalk.send(myObserver, "_observe_with_", [each, config]);})]);
return self;
return self;},
args: [],
source: "dBind\x0a|mutationObserver myObserver config mutationHandler|\x0a\x0amutationHandler:=[:mutationRecords| mutationRecords do:[:each||temp| \x0a                                 (style) ifTrue:[<temp=($(each.target).attr(self._attr()));>. self is:temp.]\x0a                                            ifFalse:[<temp=($(each.target).css(self._attr()));>.self is:temp.]]].\x0a\x0a(HTMLCanvas isWebkit) ifTrue:[mutationObserver:=window WebKitMutationObserver.]\x0a                                            ifFalse:[mutationObserver:=window MutationObserver.].\x0a                                            \x0a \x0a<myObserver= new mutationObserver(mutationHandler);>.\x0a\x0a\x0a(style:=true)ifTrue:[<config={attributes: true, attributeFilter:[self._attr()] }>.]\x0a                       ifFalse:[<config={characterData: true, attributes: true, attributeFilter:[self._attr()] }>.].\x0a                       \x0aselector asJQuery toArray do: [:each| myObserver observe: each with: config.].\x0a           \x0a\x0a^self",
messageSends: ["do:", "ifTrue:ifFalse:", "is:", "isWebkit", "WebKitMutationObserver", "MutationObserver", "toArray", "asJQuery", "observe:with:"],
referencedClasses: ["HTMLCanvas"]
}),
smalltalk.Attr);

smalltalk.addMethod(
"_is_",
smalltalk.method({
selector: "is:",
category: 'assigning',
fn: function (anObject){
var self=this;
((($receiver = smalltalk.send(smalltalk.send(anObject, "_class", []), "__eq_eq", [smalltalk.send(self, "_class", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (self['@val']=smalltalk.send(anObject, "_val", []));})() : (function(){return (self['@val']=anObject);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (self['@val']=smalltalk.send(anObject, "_val", []));}), (function(){return (self['@val']=anObject);})]));
smalltalk.send(self, "_updateSelf", []);
return self;},
args: ["anObject"],
source: "is: anObject\x0a \x22not assigning the reference of the object to the variable.\x0a changing the object that is already referenced by the varriable\x22\x0a\x0a\x09(anObject class == self class) ifTrue:[val:=anObject val]\x0a                                                     ifFalse:[ val:=anObject.].\x0a                                                     \x0a   self updateSelf.",
messageSends: ["ifTrue:ifFalse:", "==", "class", "val", "updateSelf"],
referencedClasses: []
}),
smalltalk.Attr);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
category: 'accessing',
fn: function (){
var self=this;
return self['@selector'];
return self;},
args: [],
source: "selector\x0a\x0a^selector",
messageSends: [],
referencedClasses: []
}),
smalltalk.Attr);

smalltalk.addMethod(
"_updateSelf",
smalltalk.method({
selector: "updateSelf",
category: 'updating',
fn: function (){
var self=this;
((($receiver = self['@style']).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(smalltalk.send(self['@selector'], "_asJQuery", []), "_attr_to_", [self['@attr'], self['@val']]);})() : (function(){return smalltalk.send(smalltalk.send(self['@selector'], "_asJQuery", []), "_css_to_", [self['@attr'], self['@val']]);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){return smalltalk.send(smalltalk.send(self['@selector'], "_asJQuery", []), "_attr_to_", [self['@attr'], self['@val']]);}), (function(){return smalltalk.send(smalltalk.send(self['@selector'], "_asJQuery", []), "_css_to_", [self['@attr'], self['@val']]);})]));
return self;},
args: [],
source: "updateSelf\x0a\x0a(style) ifFalse:[selector asJQuery attr:attr to: val]\x0a            ifTrue:[selector asJQuery css:attr to: val]",
messageSends: ["ifFalse:ifTrue:", "attr:to:", "asJQuery", "css:to:"],
referencedClasses: []
}),
smalltalk.Attr);

smalltalk.addMethod(
"_val",
smalltalk.method({
selector: "val",
category: 'accessing',
fn: function (){
var self=this;
return self['@val'];
return self;},
args: [],
source: "val\x0a\x0a^val",
messageSends: [],
referencedClasses: []
}),
smalltalk.Attr);


smalltalk.addMethod(
"_selector_attr_",
smalltalk.method({
selector: "selector:attr:",
category: 'instance creation',
fn: function (aSelector, anAttr){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_selector_attr_", [aSelector, anAttr]);
return self;},
args: ["aSelector", "anAttr"],
source: "selector: aSelector attr: anAttr\x0a\x0a^ self new selector: aSelector attr: anAttr",
messageSends: ["selector:attr:", "new"],
referencedClasses: []
}),
smalltalk.Attr.klass);

smalltalk.addMethod(
"_selector_styleAttr_",
smalltalk.method({
selector: "selector:styleAttr:",
category: 'instance creation',
fn: function (aSelector, anAttr){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_selector_styleAttr_", [aSelector, anAttr]);
return self;},
args: ["aSelector", "anAttr"],
source: "selector: aSelector styleAttr: anAttr\x0a\x0a^ self new selector: aSelector styleAttr: anAttr",
messageSends: ["selector:styleAttr:", "new"],
referencedClasses: []
}),
smalltalk.Attr.klass);


smalltalk.addClass('AttrNumb', smalltalk.Attr, ['numb', 'unit'], 'DomBinding');
smalltalk.addMethod(
"_&",
smalltalk.method({
selector: "&",
category: 'converting',
fn: function (anObject){
var self=this;
var aNumber=nil;
((($receiver = smalltalk.send(smalltalk.send(anObject, "_class", []), "__eq_eq", [smalltalk.send(self, "_class", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (aNumber=smalltalk.send(anObject, "_numb", []));})() : (function(){return (aNumber=anObject);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (aNumber=smalltalk.send(anObject, "_numb", []));}), (function(){return (aNumber=anObject);})]));
return self._numb() & aNumber;
return self;},
args: ["anObject"],
source: "& anObject\x0a\x0a|aNumber|\x0a\x0a\x09(anObject class == self class) ifTrue:[aNumber:=anObject numb]\x0a                                                     ifFalse:[aNumber:= anObject].\x0a\x09<return self._numb() & aNumber>",
messageSends: ["ifTrue:ifFalse:", "==", "class", "numb"],
referencedClasses: []
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"__star",
smalltalk.method({
selector: "*",
category: 'arithmetic',
fn: function (anObject){
var self=this;
var aNumber=nil;
((($receiver = smalltalk.send(smalltalk.send(anObject, "_class", []), "__eq_eq", [smalltalk.send(self, "_class", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (aNumber=smalltalk.send(anObject, "_numb", []));})() : (function(){return (aNumber=anObject);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (aNumber=smalltalk.send(anObject, "_numb", []));}), (function(){return (aNumber=anObject);})]));
return self._numb() * aNumber;
return self;},
args: ["anObject"],
source: "* anObject\x0a\x0a|aNumber|\x0a\x0a\x09(anObject class == self class) ifTrue:[aNumber:=anObject numb]\x0a                                                     ifFalse:[aNumber:= anObject].\x0a\x0a\x09\x22Inlined in the Compiler\x22\x0a\x09<return self._numb() * aNumber>",
messageSends: ["ifTrue:ifFalse:", "==", "class", "numb"],
referencedClasses: []
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"__plus",
smalltalk.method({
selector: "+",
category: 'arithmetic',
fn: function (anObject){
var self=this;
var aNumber=nil;
((($receiver = smalltalk.send(smalltalk.send(anObject, "_class", []), "__eq_eq", [smalltalk.send(self, "_class", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (aNumber=smalltalk.send(anObject, "_numb", []));})() : (function(){return (aNumber=anObject);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (aNumber=smalltalk.send(anObject, "_numb", []));}), (function(){return (aNumber=anObject);})]));
return self._numb() + aNumber;
return self;},
args: ["anObject"],
source: "+ anObject\x0a\x0a|aNumber|\x0a\x0a\x09(anObject class == self class) ifTrue:[aNumber:=anObject numb]\x0a                                                     ifFalse:[aNumber:= anObject].\x0a                                                     \x0a\x09\x22Inlined in the Compiler\x22\x0a\x09<return self._numb() + aNumber>",
messageSends: ["ifTrue:ifFalse:", "==", "class", "numb"],
referencedClasses: []
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"__minus",
smalltalk.method({
selector: "-",
category: 'arithmetic',
fn: function (anObject){
var self=this;
var aNumber=nil;
((($receiver = smalltalk.send(smalltalk.send(anObject, "_class", []), "__eq_eq", [smalltalk.send(self, "_class", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (aNumber=smalltalk.send(anObject, "_numb", []));})() : (function(){return (aNumber=anObject);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (aNumber=smalltalk.send(anObject, "_numb", []));}), (function(){return (aNumber=anObject);})]));
return self._numb() - aNumber;
return self;},
args: ["anObject"],
source: "-  anObject\x0a\x0a|aNumber|\x0a\x0a\x09(anObject class == self class) ifTrue:[aNumber:=anObject numb]\x0a                                                     ifFalse:[aNumber:= anObject].\x0a\x09\x22Inlined in the Compiler\x22\x0a\x09<return self._numb() - aNumber>",
messageSends: ["ifTrue:ifFalse:", "==", "class", "numb"],
referencedClasses: []
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"__slash",
smalltalk.method({
selector: "/",
category: 'arithmetic',
fn: function (anObject){
var self=this;
var aNumber=nil;
((($receiver = smalltalk.send(smalltalk.send(anObject, "_class", []), "__eq_eq", [smalltalk.send(self, "_class", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (aNumber=smalltalk.send(anObject, "_numb", []));})() : (function(){return (aNumber=anObject);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (aNumber=smalltalk.send(anObject, "_numb", []));}), (function(){return (aNumber=anObject);})]));
return self._numb() / aNumber;
return self;},
args: ["anObject"],
source: "/ anObject\x0a\x0a|aNumber|\x0a\x0a\x09(anObject class == self class) ifTrue:[aNumber:=anObject numb]\x0a                                                     ifFalse:[aNumber:= anObject].\x0a\x09\x22Inlined in the Compiler\x22\x0a\x09<return self._numb() / aNumber>",
messageSends: ["ifTrue:ifFalse:", "==", "class", "numb"],
referencedClasses: []
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"__lt",
smalltalk.method({
selector: "<",
category: 'comparing',
fn: function (anObject){
var self=this;
var aNumber=nil;
((($receiver = smalltalk.send(smalltalk.send(anObject, "_class", []), "__eq_eq", [smalltalk.send(self, "_class", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (aNumber=smalltalk.send(anObject, "_numb", []));})() : (function(){return (aNumber=anObject);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (aNumber=smalltalk.send(anObject, "_numb", []));}), (function(){return (aNumber=anObject);})]));
return self._numb() < aNumber;
return self;},
args: ["anObject"],
source: "< anObject\x0a\x0a|aNumber|\x0a\x0a\x09(anObject class == self class) ifTrue:[aNumber:=anObject numb]\x0a                                                     ifFalse:[aNumber:= anObject].\x0a\x09\x22Inlined in the Compiler\x22\x0a\x09<return self._numb() < aNumber>",
messageSends: ["ifTrue:ifFalse:", "==", "class", "numb"],
referencedClasses: []
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"__lt_eq",
smalltalk.method({
selector: "<=",
category: 'comparing',
fn: function (anObject){
var self=this;
var aNumber=nil;
((($receiver = smalltalk.send(smalltalk.send(anObject, "_class", []), "__eq_eq", [smalltalk.send(self, "_class", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (aNumber=smalltalk.send(anObject, "_numb", []));})() : (function(){return (aNumber=anObject);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (aNumber=smalltalk.send(anObject, "_numb", []));}), (function(){return (aNumber=anObject);})]));
return self._numb() <= aNumber;
return self;},
args: ["anObject"],
source: "<= anObject\x0a\x0a|aNumber|\x0a\x0a\x09(anObject class == self class) ifTrue:[aNumber:=anObject numb]\x0a                                                     ifFalse:[aNumber:= anObject].\x0a\x09\x22Inlined in the Compiler\x22\x0a\x09<return self._numb() <= aNumber>",
messageSends: ["ifTrue:ifFalse:", "==", "class", "numb"],
referencedClasses: []
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"__eq",
smalltalk.method({
selector: "=",
category: 'comparing',
fn: function (anObject){
var self=this;
var $early={};
try{var aNumber=nil;
((($receiver = smalltalk.send(smalltalk.send(anObject, "_class", []), "__eq_eq", [smalltalk.send(self, "_class", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (aNumber=smalltalk.send(anObject, "_numb", []));})() : (function(){return (aNumber=anObject);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (aNumber=smalltalk.send(anObject, "_numb", []));}), (function(){return (aNumber=anObject);})]));
((($receiver = smalltalk.send(aNumber, "_isNumber", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw $early=[false]})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw $early=[false]})();})]));
return Number(self._numb()) == aNumber;
return self;
} catch(e) {if(e===$early)return e[0]; throw e}},
args: ["anObject"],
source: "= anObject\x0a\x0a|aNumber|\x0a\x0a\x09(anObject class == self class) ifTrue:[aNumber:=anObject numb]\x0a                                                     ifFalse:[aNumber:= anObject].\x0a\x09aNumber isNumber ifFalse: [^false]. \x0a\x09<return Number(self._numb()) == aNumber>.",
messageSends: ["ifTrue:ifFalse:", "==", "class", "numb", "ifFalse:", "isNumber"],
referencedClasses: []
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"__gt",
smalltalk.method({
selector: ">",
category: 'comparing',
fn: function (anObject){
var self=this;
var aNumber=nil;
((($receiver = smalltalk.send(smalltalk.send(anObject, "_class", []), "__eq_eq", [smalltalk.send(self, "_class", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (aNumber=smalltalk.send(anObject, "_numb", []));})() : (function(){return (aNumber=anObject);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (aNumber=smalltalk.send(anObject, "_numb", []));}), (function(){return (aNumber=anObject);})]));
return self._numb() > aNumber;
return self;},
args: ["anObject"],
source: ">anObject\x0a\x0a|aNumber|\x0a\x0a\x09(anObject class == self class) ifTrue:[aNumber:=anObject numb]\x0a                                                     ifFalse:[aNumber:= anObject].\x0a\x09\x22Inlined in the Compiler\x22\x0a\x09<return self._numb() >> aNumber>",
messageSends: ["ifTrue:ifFalse:", "==", "class", "numb"],
referencedClasses: []
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"__gt_eq",
smalltalk.method({
selector: ">=",
category: 'comparing',
fn: function (anObject){
var self=this;
var aNumber=nil;
((($receiver = smalltalk.send(smalltalk.send(anObject, "_class", []), "__eq_eq", [smalltalk.send(self, "_class", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (aNumber=smalltalk.send(anObject, "_numb", []));})() : (function(){return (aNumber=anObject);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (aNumber=smalltalk.send(anObject, "_numb", []));}), (function(){return (aNumber=anObject);})]));
return self._numb() >= aNumber;
return self;},
args: ["anObject"],
source: ">= anObject\x0a\x0a|aNumber|\x0a\x0a\x09(anObject class == self class) ifTrue:[aNumber:=anObject numb]\x0a                                                     ifFalse:[aNumber:= anObject].\x0a\x09\x22Inlined in the Compiler\x22\x0a\x09<return self._numb() >>= aNumber>",
messageSends: ["ifTrue:ifFalse:", "==", "class", "numb"],
referencedClasses: []
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_\x5c\x5c",
smalltalk.method({
selector: "\x5c\x5c",
category: 'arithmetic',
fn: function (anObject){
var self=this;
var aNumber=nil;
((($receiver = smalltalk.send(smalltalk.send(anObject, "_class", []), "__eq_eq", [smalltalk.send(self, "_class", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (aNumber=smalltalk.send(anObject, "_numb", []));})() : (function(){return (aNumber=anObject);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (aNumber=smalltalk.send(anObject, "_numb", []));}), (function(){return (aNumber=anObject);})]));
return self.numb() % aNumber;
return self;},
args: ["anObject"],
source: "\x5c\x5c anObject\x0a\x0a|aNumber|\x0a\x0a\x09(anObject class == self class) ifTrue:[aNumber:=anObject numb]\x0a                                                     ifFalse:[aNumber:= anObject].\x0a\x09<return self.numb() % aNumber>",
messageSends: ["ifTrue:ifFalse:", "==", "class", "numb"],
referencedClasses: []
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_abs",
smalltalk.method({
selector: "abs",
category: 'arithmetic',
fn: function (){
var self=this;
return Math.abs(self._numb());;
return self;},
args: [],
source: "abs\x0a\x09^ <Math.abs(self._numb());>",
messageSends: [],
referencedClasses: []
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_asJSON",
smalltalk.method({
selector: "asJSON",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.send(self, "_numb", []);
return self;},
args: [],
source: "asJSON\x0a\x09^self numb",
messageSends: ["numb"],
referencedClasses: []
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_asString",
smalltalk.method({
selector: "asString",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.send(self, "_printString", []);
return self;},
args: [],
source: "asString\x0a\x09^self printString",
messageSends: ["printString"],
referencedClasses: []
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_atRandom",
smalltalk.method({
selector: "atRandom",
category: 'converting',
fn: function (){
var self=this;
return ((($receiver = smalltalk.send(((($receiver = smalltalk.send(smalltalk.send((smalltalk.Random || Random), "_new", []), "_next", [])).klass === smalltalk.Number) ? $receiver *smalltalk.send(self, "_numb", []) : smalltalk.send($receiver, "__star", [smalltalk.send(self, "_numb", [])])), "_truncated", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));
return self;},
args: [],
source: "atRandom\x0a    ^(Random new next * self numb) truncated + 1",
messageSends: ["+", "truncated", "*", "next", "new", "numb"],
referencedClasses: ["Random"]
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_attr",
smalltalk.method({
selector: "attr",
category: 'accessing',
fn: function (){
var self=this;
return self['@attr'];
return self;},
args: [],
source: "attr\x0a\x0a^attr",
messageSends: [],
referencedClasses: []
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_dBind",
smalltalk.method({
selector: "dBind",
category: 'assigning',
fn: function (){
var self=this;
var mutationObserver=nil;
var myObserver=nil;
var config=nil;
var mutationHandler=nil;
(mutationHandler=(function(mutationRecords){return smalltalk.send(mutationRecords, "_do_", [(function(each){var temp=nil;
return ((($receiver = self['@style']).klass === smalltalk.Boolean) ? ($receiver ? (function(){temp=($(each.target).attr(self._attr()));;return smalltalk.send(self, "_is_", [smalltalk.send(smalltalk.send(temp, "_copyFrom_to_", [(0), ((($receiver = smalltalk.send(temp, "_size", [])).klass === smalltalk.Number) ? $receiver -smalltalk.send(self['@unit'], "_size", []) : smalltalk.send($receiver, "__minus", [smalltalk.send(self['@unit'], "_size", [])]))]), "_asNumber", [])]);})() : (function(){temp=($(each.target).css(self._attr()));;return smalltalk.send(self, "_is_", [smalltalk.send(smalltalk.send(temp, "_copyFrom_to_", [(0), ((($receiver = smalltalk.send(temp, "_size", [])).klass === smalltalk.Number) ? $receiver -smalltalk.send(self['@unit'], "_size", []) : smalltalk.send($receiver, "__minus", [smalltalk.send(self['@unit'], "_size", [])]))]), "_asNumber", [])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){temp=($(each.target).attr(self._attr()));;return smalltalk.send(self, "_is_", [smalltalk.send(smalltalk.send(temp, "_copyFrom_to_", [(0), ((($receiver = smalltalk.send(temp, "_size", [])).klass === smalltalk.Number) ? $receiver -smalltalk.send(self['@unit'], "_size", []) : smalltalk.send($receiver, "__minus", [smalltalk.send(self['@unit'], "_size", [])]))]), "_asNumber", [])]);}), (function(){temp=($(each.target).css(self._attr()));;return smalltalk.send(self, "_is_", [smalltalk.send(smalltalk.send(temp, "_copyFrom_to_", [(0), ((($receiver = smalltalk.send(temp, "_size", [])).klass === smalltalk.Number) ? $receiver -smalltalk.send(self['@unit'], "_size", []) : smalltalk.send($receiver, "__minus", [smalltalk.send(self['@unit'], "_size", [])]))]), "_asNumber", [])]);})]));})]);}));
((($receiver = smalltalk.send((smalltalk.HTMLCanvas || HTMLCanvas), "_isWebkit", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (mutationObserver=smalltalk.send((typeof window == 'undefined' ? nil : window), "_WebKitMutationObserver", []));})() : (function(){return (mutationObserver=smalltalk.send((typeof window == 'undefined' ? nil : window), "_MutationObserver", []));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (mutationObserver=smalltalk.send((typeof window == 'undefined' ? nil : window), "_WebKitMutationObserver", []));}), (function(){return (mutationObserver=smalltalk.send((typeof window == 'undefined' ? nil : window), "_MutationObserver", []));})]));
myObserver= new mutationObserver(mutationHandler);;
((($receiver = (self['@style']=true)).klass === smalltalk.Boolean) ? ($receiver ? (function(){return config={attributes: true, attributeFilter:[self._attr()] };})() : (function(){return config={characterData: true, attributes: true, attributeFilter:[self._attr()] };})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return config={attributes: true, attributeFilter:[self._attr()] };}), (function(){return config={characterData: true, attributes: true, attributeFilter:[self._attr()] };})]));
smalltalk.send(smalltalk.send(smalltalk.send(self['@selector'], "_asJQuery", []), "_toArray", []), "_do_", [(function(each){return smalltalk.send(myObserver, "_observe_with_", [each, config]);})]);
return self;
return self;},
args: [],
source: "dBind\x0a|mutationObserver myObserver config mutationHandler|\x0a\x0amutationHandler:=[:mutationRecords| mutationRecords do:[:each||temp| \x0a                                 (style) ifTrue:[<temp=($(each.target).attr(self._attr()));>. self is:(temp copyFrom:0 to: temp size- unit size ) asNumber.]\x0a                                            ifFalse:[<temp=($(each.target).css(self._attr()));>.self is:(temp copyFrom:0 to: temp size- unit size ) asNumber.]]].\x0a\x0a(HTMLCanvas isWebkit) ifTrue:[mutationObserver:=window WebKitMutationObserver.]\x0a                                            ifFalse:[mutationObserver:=window MutationObserver.].\x0a                                            \x0a \x0a<myObserver= new mutationObserver(mutationHandler);>.\x0a\x0a\x0a(style:=true)ifTrue:[<config={attributes: true, attributeFilter:[self._attr()] }>.]\x0a                       ifFalse:[<config={characterData: true, attributes: true, attributeFilter:[self._attr()] }>.].\x0a                       \x0aselector asJQuery toArray do: [:each| myObserver observe: each with: config.].\x0a           \x0a\x0a^self",
messageSends: ["do:", "ifTrue:ifFalse:", "is:", "asNumber", "copyFrom:to:", "-", "size", "isWebkit", "WebKitMutationObserver", "MutationObserver", "toArray", "asJQuery", "observe:with:"],
referencedClasses: ["HTMLCanvas"]
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_even",
smalltalk.method({
selector: "even",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.send((0), "__eq", [smalltalk.send(smalltalk.send(self, "_numb", []), "_\\\\", [(2)])]);
return self;},
args: [],
source: "even\x0a\x09^ 0 = (self numb \x5c\x5c 2)",
messageSends: ["=", "\x5c\x5c\x5c\x5c", "numb"],
referencedClasses: []
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_isZero",
smalltalk.method({
selector: "isZero",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_numb", []), "__eq", [(0)]);
return self;},
args: [],
source: "isZero\x0a\x09^self numb = 0",
messageSends: ["=", "numb"],
referencedClasses: []
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_max_",
smalltalk.method({
selector: "max:",
category: 'arithmetic',
fn: function (anObject){
var self=this;
var aNumber=nil;
((($receiver = smalltalk.send(smalltalk.send(anObject, "_class", []), "__eq_eq", [smalltalk.send(self, "_class", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (aNumber=smalltalk.send(anObject, "_numb", []));})() : (function(){return (aNumber=anObject);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (aNumber=smalltalk.send(anObject, "_numb", []));}), (function(){return (aNumber=anObject);})]));
return Math.max(self._numb(), aNumber);;
return self;},
args: ["anObject"],
source: "max: anObject\x0a\x0a|aNumber|\x0a\x0a\x09(anObject class == self class) ifTrue:[aNumber:=anObject numb]\x0a                                                     ifFalse:[aNumber:= anObject].\x0a\x09<return Math.max(self._numb(), aNumber);>",
messageSends: ["ifTrue:ifFalse:", "==", "class", "numb"],
referencedClasses: []
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_min_",
smalltalk.method({
selector: "min:",
category: 'arithmetic',
fn: function (anObject){
var self=this;
var aNumber=nil;
((($receiver = smalltalk.send(smalltalk.send(anObject, "_class", []), "__eq_eq", [smalltalk.send(self, "_class", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (aNumber=smalltalk.send(anObject, "_numb", []));})() : (function(){return (aNumber=anObject);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (aNumber=smalltalk.send(anObject, "_numb", []));}), (function(){return (aNumber=anObject);})]));
return Math.min(self._numb(), aNumber);;
return self;},
args: ["anObject"],
source: "min: anObject\x0a\x0a|aNumber|\x0a\x0a\x09(anObject class == self class) ifTrue:[aNumber:=anObject numb]\x0a                                                     ifFalse:[aNumber:= anObject].\x0a                                                     \x0a\x09<return Math.min(self._numb(), aNumber);>",
messageSends: ["ifTrue:ifFalse:", "==", "class", "numb"],
referencedClasses: []
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_negated",
smalltalk.method({
selector: "negated",
category: 'arithmetic',
fn: function (){
var self=this;
return (0) - smalltalk.send(self, "_numb", []);
return self;},
args: [],
source: "negated\x0a\x09^0 - self numb.",
messageSends: ["-", "numb"],
referencedClasses: []
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_negative",
smalltalk.method({
selector: "negative",
category: 'testing',
fn: function (){
var self=this;
return ((($receiver = smalltalk.send(self, "_numb", [])).klass === smalltalk.Number) ? $receiver <(0) : smalltalk.send($receiver, "__lt", [(0)]));
return self;},
args: [],
source: "negative\x0a\x09\x22Answer whether the receiver is mathematically negative.\x22\x0a\x0a\x09^ self numb< 0",
messageSends: ["<", "numb"],
referencedClasses: []
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_numb",
smalltalk.method({
selector: "numb",
category: 'accessing',
fn: function (){
var self=this;
return self['@val'];
return self;},
args: [],
source: "numb\x0a\x0a^val",
messageSends: [],
referencedClasses: []
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_odd",
smalltalk.method({
selector: "odd",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_even", []), "_not", []);
return self;},
args: [],
source: "odd\x0a\x09^ self even not",
messageSends: ["not", "even"],
referencedClasses: []
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_positive",
smalltalk.method({
selector: "positive",
category: 'testing',
fn: function (){
var self=this;
return ((($receiver = self).klass === smalltalk.Number) ? $receiver >=(0) : smalltalk.send($receiver, "__gt_eq", [(0)]));
return self;},
args: [],
source: "positive\x0a\x09\x22Answer whether the receiver is positive or equal to 0. (ST-80 protocol).\x22\x0a\x0a\x09^ self >= 0",
messageSends: [">="],
referencedClasses: []
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_rounded",
smalltalk.method({
selector: "rounded",
category: 'converting',
fn: function (){
var self=this;
return Math.round(self._numb());;
return self;},
args: [],
source: "rounded\x0a\x09<return Math.round(self._numb());>",
messageSends: [],
referencedClasses: []
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
category: 'accessing',
fn: function (){
var self=this;
return self['@selector'];
return self;},
args: [],
source: "selector\x0a\x0a^selector",
messageSends: [],
referencedClasses: []
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_selector_attr_",
smalltalk.method({
selector: "selector:attr:",
category: 'initializing',
fn: function (aSelector, anAttr){
var self=this;
(self['@style']=false);
(self['@attr']=anAttr);
(self['@selector']=aSelector);
(self['@unit']="");
return self;},
args: ["aSelector", "anAttr"],
source: "selector:aSelector attr: anAttr\x0a\x0astyle:=false.\x0aattr:=anAttr.\x0aselector:=aSelector.\x0aunit:=''.",
messageSends: [],
referencedClasses: []
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_selector_attr_unit_",
smalltalk.method({
selector: "selector:attr:unit:",
category: 'initializing',
fn: function (aSelector, anAttr, aUnit){
var self=this;
(self['@style']=false);
(self['@attr']=anAttr);
(self['@selector']=aSelector);
(self['@unit']=aUnit);
return self;},
args: ["aSelector", "anAttr", "aUnit"],
source: "selector:aSelector attr: anAttr unit:aUnit\x0a\x0astyle:=false.\x0aattr:=anAttr.\x0aselector:=aSelector.\x0aunit:=aUnit.",
messageSends: [],
referencedClasses: []
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_selector_styleAttr_",
smalltalk.method({
selector: "selector:styleAttr:",
category: 'initializing',
fn: function (aSelector, anAttr){
var self=this;
(self['@style']=true);
(self['@attr']=anAttr);
(self['@selector']=aSelector);
(self['@unit']="");
return self;},
args: ["aSelector", "anAttr"],
source: "selector:aSelector styleAttr: anAttr\x0a\x0astyle:=true.\x0aattr:=anAttr.\x0aselector:=aSelector.\x0aunit:=''.",
messageSends: [],
referencedClasses: []
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_selector_styleAttr_unit_",
smalltalk.method({
selector: "selector:styleAttr:unit:",
category: 'initializing',
fn: function (aSelector, anAttr, aUnit){
var self=this;
(self['@style']=true);
(self['@attr']=anAttr);
(self['@selector']=aSelector);
(self['@unit']=aUnit);
return self;},
args: ["aSelector", "anAttr", "aUnit"],
source: "selector:aSelector styleAttr: anAttr unit:aUnit\x0a\x0astyle:=true.\x0aattr:=anAttr.\x0aselector:=aSelector.\x0aunit:=aUnit.",
messageSends: [],
referencedClasses: []
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_sqrt",
smalltalk.method({
selector: "sqrt",
category: 'arithmetic',
fn: function (){
var self=this;
return Math.sqrt(self._numb());
return self;},
args: [],
source: "sqrt\x0a\x09<return Math.sqrt(self._numb())>",
messageSends: [],
referencedClasses: []
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_squared",
smalltalk.method({
selector: "squared",
category: 'arithmetic',
fn: function (){
var self=this;
return ((($receiver = smalltalk.send(self, "_numb", [])).klass === smalltalk.Number) ? $receiver *smalltalk.send(self, "_numb", []) : smalltalk.send($receiver, "__star", [smalltalk.send(self, "_numb", [])]));
return self;},
args: [],
source: "squared\x0a\x09^self numb * self numb",
messageSends: ["*", "numb"],
referencedClasses: []
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_timesRepeat_",
smalltalk.method({
selector: "timesRepeat:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
var count=nil;
(count=(1));
(function(){while(!(function(){return ((($receiver = count).klass === smalltalk.Number) ? $receiver >smalltalk.send(self, "_numb", []) : smalltalk.send($receiver, "__gt", [smalltalk.send(self, "_numb", [])]));})()) {(function(){smalltalk.send(aBlock, "_value", []);return (count=((($receiver = count).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));})()}})();
return self;},
args: ["aBlock"],
source: "timesRepeat: aBlock\x0a\x09| count |\x0a\x09count := 1.\x0a\x09[count > self numb] whileFalse: [\x0a\x09    aBlock value.\x0a\x09    count := count + 1]",
messageSends: ["whileFalse:", ">", "numb", "value", "+"],
referencedClasses: []
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_to_",
smalltalk.method({
selector: "to:",
category: 'converting',
fn: function (aNumber){
var self=this;
var array=nil;
var first=nil;
var last=nil;
var count=nil;
(first=smalltalk.send(self, "_truncated", []));
(last=((($receiver = smalltalk.send(aNumber, "_truncated", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));
(count=(1));
(array=smalltalk.send((smalltalk.Array || Array), "_new", []));
smalltalk.send(((($receiver = last).klass === smalltalk.Number) ? $receiver -first : smalltalk.send($receiver, "__minus", [first])), "_timesRepeat_", [(function(){smalltalk.send(array, "_at_put_", [count, first]);(count=((($receiver = count).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));return (first=((($receiver = first).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));})]);
return array;
return self;},
args: ["aNumber"],
source: "to: aNumber\x0a\x09| array first last count |\x0a\x09first := self truncated.\x0a\x09last := aNumber truncated + 1.\x0a\x09count := 1.\x0a\x09array := Array new.\x0a\x09(last - first) timesRepeat: [\x0a\x09    array at: count put: first.\x0a\x09    count := count + 1.\x0a\x09    first := first + 1].\x0a\x09^array",
messageSends: ["truncated", "+", "new", "timesRepeat:", "-", "at:put:"],
referencedClasses: ["Array"]
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_to_by_",
smalltalk.method({
selector: "to:by:",
category: 'converting',
fn: function (stop, step){
var self=this;
var array=nil;
var value=nil;
var pos=nil;
(value=smalltalk.send(self, "_numb", []));
(array=smalltalk.send((smalltalk.Array || Array), "_new", []));
(pos=(1));
((($receiver = smalltalk.send(step, "__eq", [(0)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_error_", ["step must be non-zero"]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_error_", ["step must be non-zero"]);})]));
((($receiver = ((($receiver = step).klass === smalltalk.Number) ? $receiver <(0) : smalltalk.send($receiver, "__lt", [(0)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){while((function(){return ((($receiver = value).klass === smalltalk.Number) ? $receiver >=stop : smalltalk.send($receiver, "__gt_eq", [stop]));})()) {(function(){smalltalk.send(array, "_at_put_", [pos, value]);(pos=((($receiver = pos).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));return (value=((($receiver = value).klass === smalltalk.Number) ? $receiver +step : smalltalk.send($receiver, "__plus", [step])));})()}})();})() : (function(){return (function(){while((function(){return ((($receiver = value).klass === smalltalk.Number) ? $receiver <=stop : smalltalk.send($receiver, "__lt_eq", [stop]));})()) {(function(){smalltalk.send(array, "_at_put_", [pos, value]);(pos=((($receiver = pos).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));return (value=((($receiver = value).klass === smalltalk.Number) ? $receiver +step : smalltalk.send($receiver, "__plus", [step])));})()}})();})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (function(){while((function(){return ((($receiver = value).klass === smalltalk.Number) ? $receiver >=stop : smalltalk.send($receiver, "__gt_eq", [stop]));})()) {(function(){smalltalk.send(array, "_at_put_", [pos, value]);(pos=((($receiver = pos).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));return (value=((($receiver = value).klass === smalltalk.Number) ? $receiver +step : smalltalk.send($receiver, "__plus", [step])));})()}})();}), (function(){return (function(){while((function(){return ((($receiver = value).klass === smalltalk.Number) ? $receiver <=stop : smalltalk.send($receiver, "__lt_eq", [stop]));})()) {(function(){smalltalk.send(array, "_at_put_", [pos, value]);(pos=((($receiver = pos).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));return (value=((($receiver = value).klass === smalltalk.Number) ? $receiver +step : smalltalk.send($receiver, "__plus", [step])));})()}})();})]));
return array;
return self;},
args: ["stop", "step"],
source: "to: stop by: step\x0a\x09| array value pos |\x0a\x09value := self numb.\x0a\x09array := Array new.\x0a\x09pos := 1.\x0a\x09step = 0 ifTrue: [self error: 'step must be non-zero'].\x0a\x09step < 0\x0a\x09\x09ifTrue: [[ value >= stop ] whileTrue: [\x0a\x09    \x09\x09\x09array at: pos put: value.\x0a\x09    \x09\x09\x09pos := pos + 1.\x0a\x09    \x09\x09\x09value := value + step]]\x0a\x09\x09ifFalse: [[ value <= stop ] whileTrue: [\x0a\x09    \x09\x09\x09array at: pos put: value.\x0a\x09  \x09\x09\x09pos := pos + 1.\x0a\x09    \x09\x09\x09value := value + step]].\x0a\x09^array",
messageSends: ["numb", "new", "ifTrue:", "=", "error:", "ifTrue:ifFalse:", "<", "whileTrue:", ">=", "at:put:", "+", "<="],
referencedClasses: ["Array"]
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_to_by_do_",
smalltalk.method({
selector: "to:by:do:",
category: 'enumerating',
fn: function (stop, step, aBlock){
var self=this;
var value=nil;
(value=smalltalk.send(self, "_numb", []));
((($receiver = smalltalk.send(step, "__eq", [(0)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_error_", ["step must be non-zero"]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_error_", ["step must be non-zero"]);})]));
((($receiver = ((($receiver = step).klass === smalltalk.Number) ? $receiver <(0) : smalltalk.send($receiver, "__lt", [(0)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){while((function(){return ((($receiver = value).klass === smalltalk.Number) ? $receiver >=stop : smalltalk.send($receiver, "__gt_eq", [stop]));})()) {(function(){smalltalk.send(aBlock, "_value_", [value]);return (value=((($receiver = value).klass === smalltalk.Number) ? $receiver +step : smalltalk.send($receiver, "__plus", [step])));})()}})();})() : (function(){return (function(){while((function(){return ((($receiver = value).klass === smalltalk.Number) ? $receiver <=stop : smalltalk.send($receiver, "__lt_eq", [stop]));})()) {(function(){smalltalk.send(aBlock, "_value_", [value]);return (value=((($receiver = value).klass === smalltalk.Number) ? $receiver +step : smalltalk.send($receiver, "__plus", [step])));})()}})();})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (function(){while((function(){return ((($receiver = value).klass === smalltalk.Number) ? $receiver >=stop : smalltalk.send($receiver, "__gt_eq", [stop]));})()) {(function(){smalltalk.send(aBlock, "_value_", [value]);return (value=((($receiver = value).klass === smalltalk.Number) ? $receiver +step : smalltalk.send($receiver, "__plus", [step])));})()}})();}), (function(){return (function(){while((function(){return ((($receiver = value).klass === smalltalk.Number) ? $receiver <=stop : smalltalk.send($receiver, "__lt_eq", [stop]));})()) {(function(){smalltalk.send(aBlock, "_value_", [value]);return (value=((($receiver = value).klass === smalltalk.Number) ? $receiver +step : smalltalk.send($receiver, "__plus", [step])));})()}})();})]));
return self;},
args: ["stop", "step", "aBlock"],
source: "to: stop by: step do: aBlock\x0a\x09| value |\x0a\x09value := self numb.\x0a\x09step = 0 ifTrue: [self error: 'step must be non-zero'].\x0a\x09step < 0\x0a\x09\x09ifTrue: [[ value >= stop ] whileTrue: [\x0a\x09    \x09\x09\x09aBlock value: value.\x0a\x09    \x09\x09\x09value := value + step]]\x0a\x09\x09ifFalse: [[ value <= stop ] whileTrue: [\x0a\x09    \x09\x09\x09aBlock value: value.\x0a\x09    \x09\x09\x09value := value + step]]",
messageSends: ["numb", "ifTrue:", "=", "error:", "ifTrue:ifFalse:", "<", "whileTrue:", ">=", "value:", "+", "<="],
referencedClasses: []
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_to_do_",
smalltalk.method({
selector: "to:do:",
category: 'enumerating',
fn: function (stop, aBlock){
var self=this;
var nextValue=nil;
(nextValue=smalltalk.send(self, "_numb", []));
(function(){while((function(){return ((($receiver = nextValue).klass === smalltalk.Number) ? $receiver <=stop : smalltalk.send($receiver, "__lt_eq", [stop]));})()) {(function(){smalltalk.send(aBlock, "_value_", [nextValue]);return (nextValue=((($receiver = nextValue).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));})()}})();
return self;},
args: ["stop", "aBlock"],
source: "to: stop do: aBlock\x0a\x09\x22Evaluate aBlock for each number from self to aNumber.\x22\x0a\x09| nextValue |\x0a\x09nextValue := self numb.\x0a\x09[nextValue <= stop]\x0a\x09\x09whileTrue: \x0a\x09\x09\x09[aBlock value: nextValue.\x0a\x09\x09\x09nextValue := nextValue + 1]",
messageSends: ["numb", "whileTrue:", "<=", "value:", "+"],
referencedClasses: []
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_truncated",
smalltalk.method({
selector: "truncated",
category: 'converting',
fn: function (){
var self=this;
var result=nil;
((($receiver = ((($receiver = smalltalk.send(self, "_numb", [])).klass === smalltalk.Number) ? $receiver >=(0) : smalltalk.send($receiver, "__gt_eq", [(0)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return result = Math.floor(self.val);;})() : (function(){return result = (Math.floor(self.val * (-1)) * (-1));;})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return result = Math.floor(self.val);;}), (function(){return result = (Math.floor(self.val * (-1)) * (-1));;})]));
return result;
return self;},
args: [],
source: "truncated\x0a|result|\x0a\x0a    self numb >= 0 \x0a        ifTrue: [<result = Math.floor(self.val);>]\x0a        ifFalse: [<result = (Math.floor(self.val * (-1)) * (-1));>].\x0a\x0a    ^ result",
messageSends: ["ifTrue:ifFalse:", ">=", "numb"],
referencedClasses: []
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_updateSelf",
smalltalk.method({
selector: "updateSelf",
category: 'assigning',
fn: function (){
var self=this;
((($receiver = self['@style']).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(smalltalk.send(self['@selector'], "_asJQuery", []), "_attr_to_", [self['@attr'], smalltalk.send(smalltalk.send(self['@val'], "_asString", []), "__comma", [self['@unit']])]);})() : (function(){return smalltalk.send(smalltalk.send(self['@selector'], "_asJQuery", []), "_css_to_", [self['@attr'], smalltalk.send(smalltalk.send(self['@val'], "_asString", []), "__comma", [self['@unit']])]);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){return smalltalk.send(smalltalk.send(self['@selector'], "_asJQuery", []), "_attr_to_", [self['@attr'], smalltalk.send(smalltalk.send(self['@val'], "_asString", []), "__comma", [self['@unit']])]);}), (function(){return smalltalk.send(smalltalk.send(self['@selector'], "_asJQuery", []), "_css_to_", [self['@attr'], smalltalk.send(smalltalk.send(self['@val'], "_asString", []), "__comma", [self['@unit']])]);})]));
return self;},
args: [],
source: "updateSelf\x0a\x0a(style) ifFalse:[selector asJQuery attr:attr to: val asString,unit]\x0a            ifTrue:[selector asJQuery css:attr to: val asString,unit]",
messageSends: ["ifFalse:ifTrue:", "attr:to:", "asJQuery", ",", "asString", "css:to:"],
referencedClasses: []
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_|",
smalltalk.method({
selector: "|",
category: 'converting',
fn: function (anObject){
var self=this;
var aNumber=nil;
((($receiver = smalltalk.send(smalltalk.send(anObject, "_class", []), "__eq_eq", [smalltalk.send(self, "_class", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (aNumber=smalltalk.send(anObject, "_numb", []));})() : (function(){return (aNumber=anObject);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (aNumber=smalltalk.send(anObject, "_numb", []));}), (function(){return (aNumber=anObject);})]));
return self.val | aNumber;
return self;},
args: ["anObject"],
source: "| anObject\x0a\x0a|aNumber|\x0a\x0a\x09(anObject class == self class) ifTrue:[aNumber:=anObject numb]\x0a                                                     ifFalse:[aNumber:= anObject].\x0a\x09<return self.val | aNumber>",
messageSends: ["ifTrue:ifFalse:", "==", "class", "numb"],
referencedClasses: []
}),
smalltalk.AttrNumb);


smalltalk.addMethod(
"_selector_attr_unit_",
smalltalk.method({
selector: "selector:attr:unit:",
category: 'instance creation',
fn: function (aSelector, anAttr, aUnit){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_selector_attr_unit_", [aSelector, anAttr, aUnit]);
return self;},
args: ["aSelector", "anAttr", "aUnit"],
source: "selector: aSelector attr: anAttr unit:aUnit\x0a\x0a^ self new selector: aSelector attr: anAttr unit:aUnit",
messageSends: ["selector:attr:unit:", "new"],
referencedClasses: []
}),
smalltalk.AttrNumb.klass);

smalltalk.addMethod(
"_selector_styleAttr_unit_",
smalltalk.method({
selector: "selector:styleAttr:unit:",
category: 'instance creation',
fn: function (aSelector, anAttr, aUnit){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_selector_styleAttr_unit_", [aSelector, anAttr, aUnit]);
return self;},
args: ["aSelector", "anAttr", "aUnit"],
source: "selector: aSelector styleAttr: anAttr unit:aUnit\x0a\x0a^ self new selector: aSelector styleAttr: anAttr unit:aUnit",
messageSends: ["selector:styleAttr:unit:", "new"],
referencedClasses: []
}),
smalltalk.AttrNumb.klass);


smalltalk.addClass('AttrString', smalltalk.Attr, ['numb', 'prop'], 'DomBinding');
smalltalk.addMethod(
"_attr",
smalltalk.method({
selector: "attr",
category: 'accessing',
fn: function (){
var self=this;
return self['@attr'];
return self;},
args: [],
source: "attr\x0a\x0a^attr",
messageSends: [],
referencedClasses: []
}),
smalltalk.AttrString);

smalltalk.addMethod(
"_dBind",
smalltalk.method({
selector: "dBind",
category: 'assigning',
fn: function (){
var self=this;
var mutationObserver=nil;
var myObserver=nil;
var config=nil;
var mutationHandler=nil;
(mutationHandler=(function(mutationRecords){return smalltalk.send(mutationRecords, "_do_", [(function(each){var temp=nil;
return ((($receiver = self['@prop']).klass === smalltalk.Boolean) ? ($receiver ? (function(){temp=($(each.target).prop(self._attr()));;return smalltalk.send(self, "_is_", [temp]);})() : (function(){return ((($receiver = self['@style']).klass === smalltalk.Boolean) ? ($receiver ? (function(){temp=($(each.target).attr(self._attr()));;return smalltalk.send(self, "_is_", [temp]);})() : (function(){temp=($(each.target).css(self._attr()));;return smalltalk.send(self, "_is_", [temp]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){temp=($(each.target).attr(self._attr()));;return smalltalk.send(self, "_is_", [temp]);}), (function(){temp=($(each.target).css(self._attr()));;return smalltalk.send(self, "_is_", [temp]);})]));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){temp=($(each.target).prop(self._attr()));;return smalltalk.send(self, "_is_", [temp]);}), (function(){return ((($receiver = self['@style']).klass === smalltalk.Boolean) ? ($receiver ? (function(){temp=($(each.target).attr(self._attr()));;return smalltalk.send(self, "_is_", [temp]);})() : (function(){temp=($(each.target).css(self._attr()));;return smalltalk.send(self, "_is_", [temp]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){temp=($(each.target).attr(self._attr()));;return smalltalk.send(self, "_is_", [temp]);}), (function(){temp=($(each.target).css(self._attr()));;return smalltalk.send(self, "_is_", [temp]);})]));})]));})]);}));
((($receiver = smalltalk.send((smalltalk.HTMLCanvas || HTMLCanvas), "_isWebkit", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (mutationObserver=smalltalk.send((typeof window == 'undefined' ? nil : window), "_WebKitMutationObserver", []));})() : (function(){return (mutationObserver=smalltalk.send((typeof window == 'undefined' ? nil : window), "_MutationObserver", []));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (mutationObserver=smalltalk.send((typeof window == 'undefined' ? nil : window), "_WebKitMutationObserver", []));}), (function(){return (mutationObserver=smalltalk.send((typeof window == 'undefined' ? nil : window), "_MutationObserver", []));})]));
myObserver= new mutationObserver(mutationHandler);;
((($receiver = (self['@style']=true)).klass === smalltalk.Boolean) ? ($receiver ? (function(){return config={attributes: true, attributeFilter:[self._attr()] };})() : (function(){return config={characterData: true, attributes: true, attributeFilter:[self._attr()] };})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return config={attributes: true, attributeFilter:[self._attr()] };}), (function(){return config={characterData: true, attributes: true, attributeFilter:[self._attr()] };})]));
smalltalk.send(smalltalk.send(smalltalk.send(self['@selector'], "_asJQuery", []), "_toArray", []), "_do_", [(function(each){return smalltalk.send(myObserver, "_observe_with_", [each, config]);})]);
return self;
return self;},
args: [],
source: "dBind\x0a|mutationObserver myObserver config mutationHandler|\x0a\x0amutationHandler:=[:mutationRecords| mutationRecords do:[:each||temp| \x0a                                  (prop) ifTrue:[ <temp=($(each.target).prop(self._attr()));>. self is:temp. ]\x0a                                              ifFalse:[\x0a                                 (style) ifTrue:[<temp=($(each.target).attr(self._attr()));>. self is:temp.]\x0a                                            ifFalse:[<temp=($(each.target).css(self._attr()));>.self is:temp.]]]].\x0a(HTMLCanvas isWebkit) ifTrue:[mutationObserver:=window WebKitMutationObserver.]\x0a                                            ifFalse:[mutationObserver:=window MutationObserver.].\x0a                                            \x0a \x0a<myObserver= new mutationObserver(mutationHandler);>.\x0a\x0a\x0a(style:=true)ifTrue:[<config={attributes: true, attributeFilter:[self._attr()] }>.]\x0a                       ifFalse:[<config={characterData: true, attributes: true, attributeFilter:[self._attr()] }>.].\x0a                       \x0aselector asJQuery toArray do: [:each| myObserver observe: each with: config.].\x0a           \x0a\x0a^self",
messageSends: ["do:", "ifTrue:ifFalse:", "is:", "isWebkit", "WebKitMutationObserver", "MutationObserver", "toArray", "asJQuery", "observe:with:"],
referencedClasses: ["HTMLCanvas"]
}),
smalltalk.AttrString);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
category: 'accessing',
fn: function (){
var self=this;
return self['@selector'];
return self;},
args: [],
source: "selector\x0a\x0a^selector",
messageSends: [],
referencedClasses: []
}),
smalltalk.AttrString);

smalltalk.addMethod(
"_selector_attr_",
smalltalk.method({
selector: "selector:attr:",
category: 'initializing',
fn: function (aSelector, anAttr){
var self=this;
(self['@style']=false);
(self['@attr']=anAttr);
(self['@selector']=aSelector);
return self;},
args: ["aSelector", "anAttr"],
source: "selector:aSelector attr: anAttr\x0a\x0astyle:=false.\x0aattr:=anAttr.\x0aselector:=aSelector.",
messageSends: [],
referencedClasses: []
}),
smalltalk.AttrString);

smalltalk.addMethod(
"_selector_prop_",
smalltalk.method({
selector: "selector:prop:",
category: 'initializing',
fn: function (aSelector, aProp){
var self=this;
(self['@style']=false);
(self['@attr']=aProp);
(self['@selector']=aSelector);
(self['@prop']=true);
return self;},
args: ["aSelector", "aProp"],
source: "selector:aSelector prop: aProp\x0a\x0a\x22one such Aprop is textContent\x22\x0a\x0astyle:=false.\x0aattr:=aProp.\x0aselector:=aSelector.\x0aprop:=true.",
messageSends: [],
referencedClasses: []
}),
smalltalk.AttrString);

smalltalk.addMethod(
"_selector_styleAttr_",
smalltalk.method({
selector: "selector:styleAttr:",
category: 'initializing',
fn: function (aSelector, anAttr){
var self=this;
(self['@style']=true);
(self['@attr']=anAttr);
(self['@selector']=aSelector);
return self;},
args: ["aSelector", "anAttr"],
source: "selector:aSelector styleAttr: anAttr\x0a\x0astyle:=true.\x0aattr:=anAttr.\x0aselector:=aSelector.",
messageSends: [],
referencedClasses: []
}),
smalltalk.AttrString);

smalltalk.addMethod(
"_string",
smalltalk.method({
selector: "string",
category: 'accessing',
fn: function (){
var self=this;
return self['@val'];
return self;},
args: [],
source: "string\x0a\x0a^val",
messageSends: [],
referencedClasses: []
}),
smalltalk.AttrString);

smalltalk.addMethod(
"_updateSelf",
smalltalk.method({
selector: "updateSelf",
category: 'assigning',
fn: function (){
var self=this;
((($receiver = self['@prop']).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(self['@selector'], "_asJQuery", []), "_prop_to_", [self['@attr'], self['@val']]);})() : (function(){return ((($receiver = self['@style']).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(smalltalk.send(self['@selector'], "_asJQuery", []), "_attr_to_", [self['@attr'], self['@val']]);})() : (function(){return smalltalk.send(smalltalk.send(self['@selector'], "_asJQuery", []), "_css_to_", [self['@attr'], self['@val']]);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){return smalltalk.send(smalltalk.send(self['@selector'], "_asJQuery", []), "_attr_to_", [self['@attr'], self['@val']]);}), (function(){return smalltalk.send(smalltalk.send(self['@selector'], "_asJQuery", []), "_css_to_", [self['@attr'], self['@val']]);})]));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(self['@selector'], "_asJQuery", []), "_prop_to_", [self['@attr'], self['@val']]);}), (function(){return ((($receiver = self['@style']).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(smalltalk.send(self['@selector'], "_asJQuery", []), "_attr_to_", [self['@attr'], self['@val']]);})() : (function(){return smalltalk.send(smalltalk.send(self['@selector'], "_asJQuery", []), "_css_to_", [self['@attr'], self['@val']]);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){return smalltalk.send(smalltalk.send(self['@selector'], "_asJQuery", []), "_attr_to_", [self['@attr'], self['@val']]);}), (function(){return smalltalk.send(smalltalk.send(self['@selector'], "_asJQuery", []), "_css_to_", [self['@attr'], self['@val']]);})]));})]));
return self;},
args: [],
source: "updateSelf\x0a\x0a(prop) ifTrue:[  selector asJQuery prop:attr to: val]\x0aifFalse:[\x0a(style) ifFalse:[selector asJQuery attr:attr to: val]\x0a            ifTrue:[selector asJQuery css:attr to: val]\x0a          ]",
messageSends: ["ifTrue:ifFalse:", "prop:to:", "asJQuery", "ifFalse:ifTrue:", "attr:to:", "css:to:"],
referencedClasses: []
}),
smalltalk.AttrString);


smalltalk.addMethod(
"_selector_attr_",
smalltalk.method({
selector: "selector:attr:",
category: 'instance creation',
fn: function (aSelector, anAttr){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_selector_attr_", [aSelector, anAttr]);
return self;},
args: ["aSelector", "anAttr"],
source: "selector: aSelector attr: anAttr\x0a\x0a^ self new selector: aSelector attr: anAttr",
messageSends: ["selector:attr:", "new"],
referencedClasses: []
}),
smalltalk.AttrString.klass);

smalltalk.addMethod(
"_selector_prop_",
smalltalk.method({
selector: "selector:prop:",
category: 'instance creation',
fn: function (aSelector, aProp){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_selector_prop_", [aSelector, aProp]);
return self;},
args: ["aSelector", "aProp"],
source: "selector: aSelector prop: aProp\x0a\x0a^ self new selector: aSelector prop: aProp",
messageSends: ["selector:prop:", "new"],
referencedClasses: []
}),
smalltalk.AttrString.klass);

smalltalk.addMethod(
"_selector_styleAttr_",
smalltalk.method({
selector: "selector:styleAttr:",
category: 'instance creation',
fn: function (aSelector, anAttr){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_selector_styleAttr_", [aSelector, anAttr]);
return self;},
args: ["aSelector", "anAttr"],
source: "selector: aSelector styleAttr: anAttr\x0a\x0a^ self new selector: aSelector styleAttr: anAttr",
messageSends: ["selector:styleAttr:", "new"],
referencedClasses: []
}),
smalltalk.AttrString.klass);


smalltalk.addClass('Var', smalltalk.Object, ['val'], 'DomBinding');
smalltalk.addMethod(
"_is_",
smalltalk.method({
selector: "is:",
category: 'assigning',
fn: function (anObject){
var self=this;
((($receiver = smalltalk.send(smalltalk.send(anObject, "_class", []), "__eq_eq", [smalltalk.send(self, "_class", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (self['@val']=smalltalk.send(anObject, "_val", []));})() : (function(){return (self['@val']=anObject);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (self['@val']=smalltalk.send(anObject, "_val", []));}), (function(){return (self['@val']=anObject);})]));
smalltalk.send(self, "_updateSelf", []);
return self;},
args: ["anObject"],
source: "is: anObject\x0a \x22not assigning the reference of the object to the variable.\x0a changing the object that is already referenced by the varriable\x22\x0a\x0a\x09(anObject class == self class) ifTrue:[val:=anObject val]\x0a                                                     ifFalse:[ val:=anObject.].\x0a                                                     \x0a   self updateSelf.",
messageSends: ["ifTrue:ifFalse:", "==", "class", "val", "updateSelf"],
referencedClasses: []
}),
smalltalk.Var);

smalltalk.addMethod(
"_val",
smalltalk.method({
selector: "val",
category: 'accessing',
fn: function (){
var self=this;
return self['@val'];
return self;},
args: [],
source: "val\x0a\x0a^val",
messageSends: [],
referencedClasses: []
}),
smalltalk.Var);


smalltalk.addMethod(
"_selector_attr_",
smalltalk.method({
selector: "selector:attr:",
category: 'instance creation',
fn: function (aSelector, anAttr){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_selector_attr_", [aSelector, anAttr]);
return self;},
args: ["aSelector", "anAttr"],
source: "selector: aSelector attr: anAttr\x0a\x0a^ self new selector: aSelector attr: anAttr",
messageSends: ["selector:attr:", "new"],
referencedClasses: []
}),
smalltalk.Var.klass);

smalltalk.addMethod(
"_selector_styleAttr_",
smalltalk.method({
selector: "selector:styleAttr:",
category: 'instance creation',
fn: function (aSelector, anAttr){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_selector_styleAttr_", [aSelector, anAttr]);
return self;},
args: ["aSelector", "anAttr"],
source: "selector: aSelector styleAttr: anAttr\x0a\x0a^ self new selector: aSelector styleAttr: anAttr",
messageSends: ["selector:styleAttr:", "new"],
referencedClasses: []
}),
smalltalk.Var.klass);


smalltalk.addClass('VarBool', smalltalk.Var, [], 'DomBinding');
smalltalk.addMethod(
"_&",
smalltalk.method({
selector: "&",
category: 'controlling',
fn: function (anObject){
var self=this;
var aBoolean=nil;
((($receiver = smalltalk.send(smalltalk.send(anObject, "_class", []), "__eq_eq", [smalltalk.send(self, "_class", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (aBoolean=smalltalk.send(anObject, "_bool", []));})() : (function(){return (aBoolean=anObject);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (aBoolean=smalltalk.send(anObject, "_bool", []));}), (function(){return (aBoolean=anObject);})]));

	    if(self._bool() == true) {
		return aBoolean;
	    } else {
		return false;
	    }
	;
return self;},
args: ["anObject"],
source: "& anObject\x0a\x0a|aBoolean|\x0a\x0a\x09(anObject class == self class) ifTrue:[aBoolean:=anObject bool]\x0a                                                     ifFalse:[aBoolean:= anObject].\x0a\x0a\x09<\x0a\x09    if(self._bool() == true) {\x0a\x09\x09return aBoolean;\x0a\x09    } else {\x0a\x09\x09return false;\x0a\x09    }\x0a\x09>",
messageSends: ["ifTrue:ifFalse:", "==", "class", "bool"],
referencedClasses: []
}),
smalltalk.VarBool);

smalltalk.addMethod(
"__eq",
smalltalk.method({
selector: "=",
category: 'comparing',
fn: function (anObject){
var self=this;
var $early={};
try{var aBoolean=nil;
((($receiver = smalltalk.send(smalltalk.send(anObject, "_class", []), "__eq_eq", [smalltalk.send(self, "_class", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (aBoolean=smalltalk.send(anObject, "_bool", []));})() : (function(){return (aBoolean=anObject);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (aBoolean=smalltalk.send(anObject, "_bool", []));}), (function(){return (aBoolean=anObject);})]));
((($receiver = smalltalk.send(smalltalk.send(aBoolean, "_class", []), "__eq", [smalltalk.send(smalltalk.send(self, "_bool", []), "_class", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw $early=[false]})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw $early=[false]})();})]));
return Boolean(self._bool() == true) == aBoolean;
return self;
} catch(e) {if(e===$early)return e[0]; throw e}},
args: ["anObject"],
source: "= anObject\x0a\x0a|aBoolean|\x0a\x0a\x09(anObject class == self class) ifTrue:[aBoolean:=anObject bool]\x0a                                                     ifFalse:[aBoolean:= anObject].\x0a\x0a\x0a\x09aBoolean class = self bool class ifFalse: [^false].\x0a\x09<return Boolean(self._bool() == true) == aBoolean>",
messageSends: ["ifTrue:ifFalse:", "==", "class", "bool", "ifFalse:", "="],
referencedClasses: []
}),
smalltalk.VarBool);

smalltalk.addMethod(
"__eq_eq",
smalltalk.method({
selector: "==",
category: 'comparing',
fn: function (anObject){
var self=this;
return smalltalk.send(self, "__eq", [anObject]);
return self;},
args: ["anObject"],
source: "== anObject\x0a\x09^self = anObject",
messageSends: ["="],
referencedClasses: []
}),
smalltalk.VarBool);

smalltalk.addMethod(
"_and_",
smalltalk.method({
selector: "and:",
category: 'controlling',
fn: function (aBlock){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self, "_bool", []), "__eq", [true]), "_ifTrue_ifFalse_", [aBlock, (function(){return false;})]);
return self;},
args: ["aBlock"],
source: "and: aBlock\x0a\x09^self bool = true\x0a\x09    ifTrue: aBlock\x0a\x09    ifFalse: [false]",
messageSends: ["ifTrue:ifFalse:", "=", "bool"],
referencedClasses: []
}),
smalltalk.VarBool);

smalltalk.addMethod(
"_bool",
smalltalk.method({
selector: "bool",
category: 'accessing',
fn: function (){
var self=this;
return self['@val'];
return self;},
args: [],
source: "bool\x0a\x0a^val",
messageSends: [],
referencedClasses: []
}),
smalltalk.VarBool);

smalltalk.addMethod(
"_ifFalse_",
smalltalk.method({
selector: "ifFalse:",
category: 'controlling',
fn: function (aBlock){
var self=this;
return smalltalk.send(smalltalk.send(self, "_bool", []), "_ifTrue_ifFalse_", [(function(){return nil;}), aBlock]);
return self;},
args: ["aBlock"],
source: "ifFalse: aBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^self bool ifTrue: [] ifFalse: aBlock",
messageSends: ["ifTrue:ifFalse:", "bool"],
referencedClasses: []
}),
smalltalk.VarBool);

smalltalk.addMethod(
"_ifFalse_ifTrue_",
smalltalk.method({
selector: "ifFalse:ifTrue:",
category: 'controlling',
fn: function (aBlock, anotherBlock){
var self=this;
return smalltalk.send(smalltalk.send(self, "_bool", []), "_ifTrue_ifFalse_", [anotherBlock, aBlock]);
return self;},
args: ["aBlock", "anotherBlock"],
source: "ifFalse: aBlock ifTrue: anotherBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^self bool ifTrue: anotherBlock ifFalse: aBlock",
messageSends: ["ifTrue:ifFalse:", "bool"],
referencedClasses: []
}),
smalltalk.VarBool);

smalltalk.addMethod(
"_ifTrue_",
smalltalk.method({
selector: "ifTrue:",
category: 'controlling',
fn: function (aBlock){
var self=this;
return smalltalk.send(smalltalk.send(self, "_bool", []), "_ifTrue_ifFalse_", [aBlock, (function(){return nil;})]);
return self;},
args: ["aBlock"],
source: "ifTrue: aBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^self bool ifTrue: aBlock ifFalse: []",
messageSends: ["ifTrue:ifFalse:", "bool"],
referencedClasses: []
}),
smalltalk.VarBool);

smalltalk.addMethod(
"_ifTrue_ifFalse_",
smalltalk.method({
selector: "ifTrue:ifFalse:",
category: 'controlling',
fn: function (aBlock, anotherBlock){
var self=this;

	    if(self._bool() == true) {
		return aBlock();
	    } else {
		return anotherBlock();
	    }
	;
return self;},
args: ["aBlock", "anotherBlock"],
source: "ifTrue: aBlock ifFalse: anotherBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09<\x0a\x09    if(self._bool() == true) {\x0a\x09\x09return aBlock();\x0a\x09    } else {\x0a\x09\x09return anotherBlock();\x0a\x09    }\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.VarBool);

smalltalk.addMethod(
"_not",
smalltalk.method({
selector: "not",
category: 'controlling',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_bool", []), "__eq", [false]);
return self;},
args: [],
source: "not\x0a\x09^self bool = false",
messageSends: ["=", "bool"],
referencedClasses: []
}),
smalltalk.VarBool);

smalltalk.addMethod(
"_or_",
smalltalk.method({
selector: "or:",
category: 'controlling',
fn: function (aBlock){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self, "_bool", []), "__eq", [true]), "_ifTrue_ifFalse_", [(function(){return true;}), aBlock]);
return self;},
args: ["aBlock"],
source: "or: aBlock\x0a\x09^self bool = true\x0a\x09    ifTrue: [true]\x0a\x09    ifFalse: aBlock",
messageSends: ["ifTrue:ifFalse:", "=", "bool"],
referencedClasses: []
}),
smalltalk.VarBool);

smalltalk.addMethod(
"_|",
smalltalk.method({
selector: "|",
category: 'controlling',
fn: function (aBoolean){
var self=this;

	    if(self._bool() == true) {
		return true;
	    } else {
		return aBoolean;
	    }
	;
return self;},
args: ["aBoolean"],
source: "| aBoolean\x0a\x09<\x0a\x09    if(self._bool() == true) {\x0a\x09\x09return true;\x0a\x09    } else {\x0a\x09\x09return aBoolean;\x0a\x09    }\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.VarBool);



smalltalk.addClass('AttrBool', smalltalk.VarBool, ['style', 'selector', 'attr'], 'DomBinding');
smalltalk.addMethod(
"_attr",
smalltalk.method({
selector: "attr",
category: 'accessing',
fn: function (){
var self=this;
return self['@attr'];
return self;},
args: [],
source: "attr\x0a\x0a^attr",
messageSends: [],
referencedClasses: []
}),
smalltalk.AttrBool);

smalltalk.addMethod(
"_bool",
smalltalk.method({
selector: "bool",
category: 'accessing',
fn: function (){
var self=this;
return self['@val'];
return self;},
args: [],
source: "bool\x0a\x0a^val",
messageSends: [],
referencedClasses: []
}),
smalltalk.AttrBool);

smalltalk.addMethod(
"_dBind",
smalltalk.method({
selector: "dBind",
category: 'assigning',
fn: function (){
var self=this;
var $1,$2,$3,$4;
var mutationObserver;
var myObserver;
var config;
var mutationHandler;
mutationHandler=(function(mutationRecords){
return smalltalk.send(mutationRecords,"_do_",[(function(each){
var temp;
$1=self["@style"];
if(smalltalk.assert($1)){
temp=($(each.target).attr(self._attr()));;
;
return smalltalk.send(self,"_is_",[temp]);
} else {
temp=($(each.target).css(self._attr()));;
;
return smalltalk.send(self,"_is_",[temp]);
};
})]);
});
$2=smalltalk.send((smalltalk.HTMLCanvas || HTMLCanvas),"_isWebkit",[]);
if(smalltalk.assert($2)){
mutationObserver=smalltalk.send(window,"_WebKitMutationObserver",[]);
mutationObserver;
} else {
mutationObserver=smalltalk.send(window,"_MutationObserver",[]);
mutationObserver;
};
myObserver= new mutationObserver(mutationHandler);;
;
$3=self["@style"];
if(smalltalk.assert($3)){
config={attributes: true, attributeFilter:[self._attr()] };
;
} else {
config={characterData: true, attributes: true, attributeFilter:[self._attr()] };
;
};
smalltalk.send(smalltalk.send(smalltalk.send(self["@selector"],"_asJQuery",[]),"_toArray",[]),"_do_",[(function(each){
return smalltalk.send(myObserver,"_observe_with_",[each,config]);
})]);
$4=self;
return $4;
},
args: [],
source: "dBind\x0a|mutationObserver myObserver config mutationHandler|\x0a\x0amutationHandler:=[:mutationRecords| mutationRecords do:[:each||temp| \x0a                                 (style) ifTrue:[<temp=($(each.target).attr(self._attr()));>. self is:temp.]\x0a                                            ifFalse:[<temp=($(each.target).css(self._attr()));>.self is:temp.]]].\x0a\x0a(HTMLCanvas isWebkit) ifTrue:[mutationObserver:=window WebKitMutationObserver.]\x0a                                            ifFalse:[mutationObserver:=window MutationObserver.].\x0a                                            \x0a \x22mutation observer is native code, thus it is not a BlockClosure\x22\x0a<myObserver= new mutationObserver(mutationHandler);>.\x0a\x0a\x0a(style)ifTrue:[<config={attributes: true, attributeFilter:[self._attr()] }>.]\x0a                       ifFalse:[<config={characterData: true, attributes: true, attributeFilter:[self._attr()] }>.].\x0a                       \x0aselector asJQuery toArray do: [:each| myObserver observe: each with: config.].\x0a           \x0a\x0a^self",
messageSends: ["do:", "ifTrue:ifFalse:", "is:", "WebKitMutationObserver", "MutationObserver", "isWebkit", "observe:with:", "toArray", "asJQuery"],
referencedClasses: ["HTMLCanvas"]
}),
smalltalk.AttrBool);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
category: 'accessing',
fn: function (){
var self=this;
return self['@selector'];
return self;},
args: [],
source: "selector\x0a\x0a^selector",
messageSends: [],
referencedClasses: []
}),
smalltalk.AttrBool);

smalltalk.addMethod(
"_selector_attr_",
smalltalk.method({
selector: "selector:attr:",
category: 'initializing',
fn: function (aSelector, anAttr){
var self=this;
(style=false);
(self['@attr']=anAttr);
(self['@selector']=aSelector);
return self;},
args: ["aSelector", "anAttr"],
source: "selector:aSelector attr: anAttr\x0a\x0astyle:=false.\x0aattr:=anAttr.\x0aselector:=aSelector.",
messageSends: [],
referencedClasses: []
}),
smalltalk.AttrBool);

smalltalk.addMethod(
"_selector_styleAttr_",
smalltalk.method({
selector: "selector:styleAttr:",
category: 'initializing',
fn: function (aSelector, anAttr){
var self=this;
(style=true);
(self['@attr']=anAttr);
(self['@selector']=aSelector);
return self;},
args: ["aSelector", "anAttr"],
source: "selector:aSelector styleAttr: anAttr\x0a\x0astyle:=true.\x0aattr:=anAttr.\x0aselector:=aSelector.",
messageSends: [],
referencedClasses: []
}),
smalltalk.AttrBool);


smalltalk.addMethod(
"_selector_attr_",
smalltalk.method({
selector: "selector:attr:",
category: 'instance creation',
fn: function (aSelector, anAttr){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_selector_attr_", [aSelector, anAttr]);
return self;},
args: ["aSelector", "anAttr"],
source: "selector: aSelector attr: anAttr\x0a\x0a^ self new selector: aSelector attr: anAttr",
messageSends: ["selector:attr:", "new"],
referencedClasses: []
}),
smalltalk.AttrBool.klass);

smalltalk.addMethod(
"_selector_styleAttr_",
smalltalk.method({
selector: "selector:styleAttr:",
category: 'instance creation',
fn: function (aSelector, anAttr){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_selector_styleAttr_", [aSelector, anAttr]);
return self;},
args: ["aSelector", "anAttr"],
source: "selector: aSelector styleAttr: anAttr\x0a\x0a^ self new selector: aSelector styleAttr: anAttr",
messageSends: ["selector:styleAttr:", "new"],
referencedClasses: []
}),
smalltalk.AttrBool.klass);


