smalltalk.addPackage('DomBinding', {});
smalltalk.addClass('Attr', smalltalk.Object, ['style', 'val', 'attr', 'selector'], 'DomBinding');
smalltalk.addMethod(
"_attr",
smalltalk.method({
selector: "attr",
fn: function (){
var self=this;
return self['@attr'];
return self;}
}),
smalltalk.Attr);

smalltalk.addMethod(
"_dBind",
smalltalk.method({
selector: "dBind",
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
return self;}
}),
smalltalk.Attr);

smalltalk.addMethod(
"_is_",
smalltalk.method({
selector: "is:",
fn: function (anObject){
var self=this;
((($receiver = smalltalk.send(smalltalk.send(anObject, "_class", []), "__eq_eq", [smalltalk.send(self, "_class", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (self['@val']=smalltalk.send(anObject, "_val", []));})() : (function(){return (self['@val']=anObject);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (self['@val']=smalltalk.send(anObject, "_val", []));}), (function(){return (self['@val']=anObject);})]));
smalltalk.send(self, "_updateSelf", []);
return self;}
}),
smalltalk.Attr);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
fn: function (){
var self=this;
return self['@selector'];
return self;}
}),
smalltalk.Attr);

smalltalk.addMethod(
"_updateSelf",
smalltalk.method({
selector: "updateSelf",
fn: function (){
var self=this;
((($receiver = self['@style']).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(smalltalk.send(self['@selector'], "_asJQuery", []), "_attr_to_", [self['@attr'], self['@val']]);})() : (function(){return smalltalk.send(smalltalk.send(self['@selector'], "_asJQuery", []), "_css_to_", [self['@attr'], self['@val']]);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){return smalltalk.send(smalltalk.send(self['@selector'], "_asJQuery", []), "_attr_to_", [self['@attr'], self['@val']]);}), (function(){return smalltalk.send(smalltalk.send(self['@selector'], "_asJQuery", []), "_css_to_", [self['@attr'], self['@val']]);})]));
return self;}
}),
smalltalk.Attr);

smalltalk.addMethod(
"_val",
smalltalk.method({
selector: "val",
fn: function (){
var self=this;
return self['@val'];
return self;}
}),
smalltalk.Attr);


smalltalk.addMethod(
"_selector_attr_",
smalltalk.method({
selector: "selector:attr:",
fn: function (aSelector, anAttr){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_selector_attr_", [aSelector, anAttr]);
return self;}
}),
smalltalk.Attr.klass);

smalltalk.addMethod(
"_selector_styleAttr_",
smalltalk.method({
selector: "selector:styleAttr:",
fn: function (aSelector, anAttr){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_selector_styleAttr_", [aSelector, anAttr]);
return self;}
}),
smalltalk.Attr.klass);


smalltalk.addClass('AttrNumb', smalltalk.Attr, ['numb', 'unit'], 'DomBinding');
smalltalk.addMethod(
"_&",
smalltalk.method({
selector: "&",
fn: function (anObject){
var self=this;
var aNumber=nil;
((($receiver = smalltalk.send(smalltalk.send(anObject, "_class", []), "__eq_eq", [smalltalk.send(self, "_class", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (aNumber=smalltalk.send(anObject, "_numb", []));})() : (function(){return (aNumber=anObject);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (aNumber=smalltalk.send(anObject, "_numb", []));}), (function(){return (aNumber=anObject);})]));
return self._numb() & aNumber;
return self;}
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"__star",
smalltalk.method({
selector: "*",
fn: function (anObject){
var self=this;
var aNumber=nil;
((($receiver = smalltalk.send(smalltalk.send(anObject, "_class", []), "__eq_eq", [smalltalk.send(self, "_class", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (aNumber=smalltalk.send(anObject, "_numb", []));})() : (function(){return (aNumber=anObject);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (aNumber=smalltalk.send(anObject, "_numb", []));}), (function(){return (aNumber=anObject);})]));
return self._numb() * aNumber;
return self;}
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"__plus",
smalltalk.method({
selector: "+",
fn: function (anObject){
var self=this;
var aNumber=nil;
((($receiver = smalltalk.send(smalltalk.send(anObject, "_class", []), "__eq_eq", [smalltalk.send(self, "_class", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (aNumber=smalltalk.send(anObject, "_numb", []));})() : (function(){return (aNumber=anObject);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (aNumber=smalltalk.send(anObject, "_numb", []));}), (function(){return (aNumber=anObject);})]));
return self._numb() + aNumber;
return self;}
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"__minus",
smalltalk.method({
selector: "-",
fn: function (anObject){
var self=this;
var aNumber=nil;
((($receiver = smalltalk.send(smalltalk.send(anObject, "_class", []), "__eq_eq", [smalltalk.send(self, "_class", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (aNumber=smalltalk.send(anObject, "_numb", []));})() : (function(){return (aNumber=anObject);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (aNumber=smalltalk.send(anObject, "_numb", []));}), (function(){return (aNumber=anObject);})]));
return self._numb() - aNumber;
return self;}
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"__slash",
smalltalk.method({
selector: "/",
fn: function (anObject){
var self=this;
var aNumber=nil;
((($receiver = smalltalk.send(smalltalk.send(anObject, "_class", []), "__eq_eq", [smalltalk.send(self, "_class", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (aNumber=smalltalk.send(anObject, "_numb", []));})() : (function(){return (aNumber=anObject);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (aNumber=smalltalk.send(anObject, "_numb", []));}), (function(){return (aNumber=anObject);})]));
return self._numb() / aNumber;
return self;}
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"__lt",
smalltalk.method({
selector: "<",
fn: function (anObject){
var self=this;
var aNumber=nil;
((($receiver = smalltalk.send(smalltalk.send(anObject, "_class", []), "__eq_eq", [smalltalk.send(self, "_class", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (aNumber=smalltalk.send(anObject, "_numb", []));})() : (function(){return (aNumber=anObject);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (aNumber=smalltalk.send(anObject, "_numb", []));}), (function(){return (aNumber=anObject);})]));
return self._numb() < aNumber;
return self;}
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"__lt_eq",
smalltalk.method({
selector: "<=",
fn: function (anObject){
var self=this;
var aNumber=nil;
((($receiver = smalltalk.send(smalltalk.send(anObject, "_class", []), "__eq_eq", [smalltalk.send(self, "_class", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (aNumber=smalltalk.send(anObject, "_numb", []));})() : (function(){return (aNumber=anObject);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (aNumber=smalltalk.send(anObject, "_numb", []));}), (function(){return (aNumber=anObject);})]));
return self._numb() <= aNumber;
return self;}
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"__eq",
smalltalk.method({
selector: "=",
fn: function (anObject){
var self=this;
var $early={};
try{var aNumber=nil;
((($receiver = smalltalk.send(smalltalk.send(anObject, "_class", []), "__eq_eq", [smalltalk.send(self, "_class", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (aNumber=smalltalk.send(anObject, "_numb", []));})() : (function(){return (aNumber=anObject);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (aNumber=smalltalk.send(anObject, "_numb", []));}), (function(){return (aNumber=anObject);})]));
((($receiver = smalltalk.send(aNumber, "_isNumber", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw $early=[false]})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw $early=[false]})();})]));
return Number(self._numb()) == aNumber;
return self;
} catch(e) {if(e===$early)return e[0]; throw e}}
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"__gt",
smalltalk.method({
selector: ">",
fn: function (anObject){
var self=this;
var aNumber=nil;
((($receiver = smalltalk.send(smalltalk.send(anObject, "_class", []), "__eq_eq", [smalltalk.send(self, "_class", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (aNumber=smalltalk.send(anObject, "_numb", []));})() : (function(){return (aNumber=anObject);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (aNumber=smalltalk.send(anObject, "_numb", []));}), (function(){return (aNumber=anObject);})]));
return self._numb() > aNumber;
return self;}
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"__gt_eq",
smalltalk.method({
selector: ">=",
fn: function (anObject){
var self=this;
var aNumber=nil;
((($receiver = smalltalk.send(smalltalk.send(anObject, "_class", []), "__eq_eq", [smalltalk.send(self, "_class", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (aNumber=smalltalk.send(anObject, "_numb", []));})() : (function(){return (aNumber=anObject);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (aNumber=smalltalk.send(anObject, "_numb", []));}), (function(){return (aNumber=anObject);})]));
return self._numb() >= aNumber;
return self;}
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_\x5c\x5c",
smalltalk.method({
selector: "\x5c\x5c",
fn: function (anObject){
var self=this;
var aNumber=nil;
((($receiver = smalltalk.send(smalltalk.send(anObject, "_class", []), "__eq_eq", [smalltalk.send(self, "_class", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (aNumber=smalltalk.send(anObject, "_numb", []));})() : (function(){return (aNumber=anObject);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (aNumber=smalltalk.send(anObject, "_numb", []));}), (function(){return (aNumber=anObject);})]));
return self.numb() % aNumber;
return self;}
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_abs",
smalltalk.method({
selector: "abs",
fn: function (){
var self=this;
return Math.abs(self._numb());;
return self;}
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_asJSON",
smalltalk.method({
selector: "asJSON",
fn: function (){
var self=this;
return smalltalk.send(self, "_numb", []);
return self;}
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_asString",
smalltalk.method({
selector: "asString",
fn: function (){
var self=this;
return smalltalk.send(self, "_printString", []);
return self;}
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_atRandom",
smalltalk.method({
selector: "atRandom",
fn: function (){
var self=this;
return ((($receiver = smalltalk.send(((($receiver = smalltalk.send(smalltalk.send((smalltalk.Random || Random), "_new", []), "_next", [])).klass === smalltalk.Number) ? $receiver *smalltalk.send(self, "_numb", []) : smalltalk.send($receiver, "__star", [smalltalk.send(self, "_numb", [])])), "_truncated", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));
return self;}
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_attr",
smalltalk.method({
selector: "attr",
fn: function (){
var self=this;
return self['@attr'];
return self;}
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_dBind",
smalltalk.method({
selector: "dBind",
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
return self;}
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_even",
smalltalk.method({
selector: "even",
fn: function (){
var self=this;
return smalltalk.send((0), "__eq", [smalltalk.send(smalltalk.send(self, "_numb", []), "_\\\\", [(2)])]);
return self;}
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_isZero",
smalltalk.method({
selector: "isZero",
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_numb", []), "__eq", [(0)]);
return self;}
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_max_",
smalltalk.method({
selector: "max:",
fn: function (anObject){
var self=this;
var aNumber=nil;
((($receiver = smalltalk.send(smalltalk.send(anObject, "_class", []), "__eq_eq", [smalltalk.send(self, "_class", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (aNumber=smalltalk.send(anObject, "_numb", []));})() : (function(){return (aNumber=anObject);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (aNumber=smalltalk.send(anObject, "_numb", []));}), (function(){return (aNumber=anObject);})]));
return Math.max(self._numb(), aNumber);;
return self;}
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_min_",
smalltalk.method({
selector: "min:",
fn: function (anObject){
var self=this;
var aNumber=nil;
((($receiver = smalltalk.send(smalltalk.send(anObject, "_class", []), "__eq_eq", [smalltalk.send(self, "_class", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (aNumber=smalltalk.send(anObject, "_numb", []));})() : (function(){return (aNumber=anObject);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (aNumber=smalltalk.send(anObject, "_numb", []));}), (function(){return (aNumber=anObject);})]));
return Math.min(self._numb(), aNumber);;
return self;}
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_negated",
smalltalk.method({
selector: "negated",
fn: function (){
var self=this;
return (0) - smalltalk.send(self, "_numb", []);
return self;}
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_negative",
smalltalk.method({
selector: "negative",
fn: function (){
var self=this;
return ((($receiver = smalltalk.send(self, "_numb", [])).klass === smalltalk.Number) ? $receiver <(0) : smalltalk.send($receiver, "__lt", [(0)]));
return self;}
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_numb",
smalltalk.method({
selector: "numb",
fn: function (){
var self=this;
return self['@val'];
return self;}
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_odd",
smalltalk.method({
selector: "odd",
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_even", []), "_not", []);
return self;}
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_positive",
smalltalk.method({
selector: "positive",
fn: function (){
var self=this;
return ((($receiver = self).klass === smalltalk.Number) ? $receiver >=(0) : smalltalk.send($receiver, "__gt_eq", [(0)]));
return self;}
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_rounded",
smalltalk.method({
selector: "rounded",
fn: function (){
var self=this;
return Math.round(self._numb());;
return self;}
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
fn: function (){
var self=this;
return self['@selector'];
return self;}
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_selector_attr_",
smalltalk.method({
selector: "selector:attr:",
fn: function (aSelector, anAttr){
var self=this;
(self['@style']=false);
(self['@attr']=anAttr);
(self['@selector']=aSelector);
(self['@unit']="");
return self;}
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_selector_attr_unit_",
smalltalk.method({
selector: "selector:attr:unit:",
fn: function (aSelector, anAttr, aUnit){
var self=this;
(self['@style']=false);
(self['@attr']=anAttr);
(self['@selector']=aSelector);
(self['@unit']=aUnit);
return self;}
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_selector_styleAttr_",
smalltalk.method({
selector: "selector:styleAttr:",
fn: function (aSelector, anAttr){
var self=this;
(self['@style']=true);
(self['@attr']=anAttr);
(self['@selector']=aSelector);
(self['@unit']="");
return self;}
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_selector_styleAttr_unit_",
smalltalk.method({
selector: "selector:styleAttr:unit:",
fn: function (aSelector, anAttr, aUnit){
var self=this;
(self['@style']=true);
(self['@attr']=anAttr);
(self['@selector']=aSelector);
(self['@unit']=aUnit);
return self;}
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_sqrt",
smalltalk.method({
selector: "sqrt",
fn: function (){
var self=this;
return Math.sqrt(self._numb());
return self;}
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_squared",
smalltalk.method({
selector: "squared",
fn: function (){
var self=this;
return ((($receiver = smalltalk.send(self, "_numb", [])).klass === smalltalk.Number) ? $receiver *smalltalk.send(self, "_numb", []) : smalltalk.send($receiver, "__star", [smalltalk.send(self, "_numb", [])]));
return self;}
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_timesRepeat_",
smalltalk.method({
selector: "timesRepeat:",
fn: function (aBlock){
var self=this;
var count=nil;
(count=(1));
(function(){while(!(function(){return ((($receiver = count).klass === smalltalk.Number) ? $receiver >smalltalk.send(self, "_numb", []) : smalltalk.send($receiver, "__gt", [smalltalk.send(self, "_numb", [])]));})()) {(function(){smalltalk.send(aBlock, "_value", []);return (count=((($receiver = count).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));})()}})();
return self;}
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_to_",
smalltalk.method({
selector: "to:",
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
return self;}
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_to_by_",
smalltalk.method({
selector: "to:by:",
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
return self;}
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_to_by_do_",
smalltalk.method({
selector: "to:by:do:",
fn: function (stop, step, aBlock){
var self=this;
var value=nil;
(value=smalltalk.send(self, "_numb", []));
((($receiver = smalltalk.send(step, "__eq", [(0)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_error_", ["step must be non-zero"]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_error_", ["step must be non-zero"]);})]));
((($receiver = ((($receiver = step).klass === smalltalk.Number) ? $receiver <(0) : smalltalk.send($receiver, "__lt", [(0)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){while((function(){return ((($receiver = value).klass === smalltalk.Number) ? $receiver >=stop : smalltalk.send($receiver, "__gt_eq", [stop]));})()) {(function(){smalltalk.send(aBlock, "_value_", [value]);return (value=((($receiver = value).klass === smalltalk.Number) ? $receiver +step : smalltalk.send($receiver, "__plus", [step])));})()}})();})() : (function(){return (function(){while((function(){return ((($receiver = value).klass === smalltalk.Number) ? $receiver <=stop : smalltalk.send($receiver, "__lt_eq", [stop]));})()) {(function(){smalltalk.send(aBlock, "_value_", [value]);return (value=((($receiver = value).klass === smalltalk.Number) ? $receiver +step : smalltalk.send($receiver, "__plus", [step])));})()}})();})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (function(){while((function(){return ((($receiver = value).klass === smalltalk.Number) ? $receiver >=stop : smalltalk.send($receiver, "__gt_eq", [stop]));})()) {(function(){smalltalk.send(aBlock, "_value_", [value]);return (value=((($receiver = value).klass === smalltalk.Number) ? $receiver +step : smalltalk.send($receiver, "__plus", [step])));})()}})();}), (function(){return (function(){while((function(){return ((($receiver = value).klass === smalltalk.Number) ? $receiver <=stop : smalltalk.send($receiver, "__lt_eq", [stop]));})()) {(function(){smalltalk.send(aBlock, "_value_", [value]);return (value=((($receiver = value).klass === smalltalk.Number) ? $receiver +step : smalltalk.send($receiver, "__plus", [step])));})()}})();})]));
return self;}
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_to_do_",
smalltalk.method({
selector: "to:do:",
fn: function (stop, aBlock){
var self=this;
var nextValue=nil;
(nextValue=smalltalk.send(self, "_numb", []));
(function(){while((function(){return ((($receiver = nextValue).klass === smalltalk.Number) ? $receiver <=stop : smalltalk.send($receiver, "__lt_eq", [stop]));})()) {(function(){smalltalk.send(aBlock, "_value_", [nextValue]);return (nextValue=((($receiver = nextValue).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));})()}})();
return self;}
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_truncated",
smalltalk.method({
selector: "truncated",
fn: function (){
var self=this;
var result=nil;
((($receiver = ((($receiver = smalltalk.send(self, "_numb", [])).klass === smalltalk.Number) ? $receiver >=(0) : smalltalk.send($receiver, "__gt_eq", [(0)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return result = Math.floor(self.val);;})() : (function(){return result = (Math.floor(self.val * (-1)) * (-1));;})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return result = Math.floor(self.val);;}), (function(){return result = (Math.floor(self.val * (-1)) * (-1));;})]));
return result;
return self;}
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_updateSelf",
smalltalk.method({
selector: "updateSelf",
fn: function (){
var self=this;
((($receiver = self['@style']).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(smalltalk.send(self['@selector'], "_asJQuery", []), "_attr_to_", [self['@attr'], smalltalk.send(smalltalk.send(self['@val'], "_asString", []), "__comma", [self['@unit']])]);})() : (function(){return smalltalk.send(smalltalk.send(self['@selector'], "_asJQuery", []), "_css_to_", [self['@attr'], smalltalk.send(smalltalk.send(self['@val'], "_asString", []), "__comma", [self['@unit']])]);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){return smalltalk.send(smalltalk.send(self['@selector'], "_asJQuery", []), "_attr_to_", [self['@attr'], smalltalk.send(smalltalk.send(self['@val'], "_asString", []), "__comma", [self['@unit']])]);}), (function(){return smalltalk.send(smalltalk.send(self['@selector'], "_asJQuery", []), "_css_to_", [self['@attr'], smalltalk.send(smalltalk.send(self['@val'], "_asString", []), "__comma", [self['@unit']])]);})]));
return self;}
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_|",
smalltalk.method({
selector: "|",
fn: function (anObject){
var self=this;
var aNumber=nil;
((($receiver = smalltalk.send(smalltalk.send(anObject, "_class", []), "__eq_eq", [smalltalk.send(self, "_class", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (aNumber=smalltalk.send(anObject, "_numb", []));})() : (function(){return (aNumber=anObject);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (aNumber=smalltalk.send(anObject, "_numb", []));}), (function(){return (aNumber=anObject);})]));
return self.val | aNumber;
return self;}
}),
smalltalk.AttrNumb);


smalltalk.addMethod(
"_selector_attr_unit_",
smalltalk.method({
selector: "selector:attr:unit:",
fn: function (aSelector, anAttr, aUnit){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_selector_attr_unit_", [aSelector, anAttr, aUnit]);
return self;}
}),
smalltalk.AttrNumb.klass);

smalltalk.addMethod(
"_selector_styleAttr_unit_",
smalltalk.method({
selector: "selector:styleAttr:unit:",
fn: function (aSelector, anAttr, aUnit){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_selector_styleAttr_unit_", [aSelector, anAttr, aUnit]);
return self;}
}),
smalltalk.AttrNumb.klass);


smalltalk.addClass('AttrString', smalltalk.Attr, ['numb', 'prop'], 'DomBinding');
smalltalk.addMethod(
"_attr",
smalltalk.method({
selector: "attr",
fn: function (){
var self=this;
return self['@attr'];
return self;}
}),
smalltalk.AttrString);

smalltalk.addMethod(
"_dBind",
smalltalk.method({
selector: "dBind",
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
return self;}
}),
smalltalk.AttrString);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
fn: function (){
var self=this;
return self['@selector'];
return self;}
}),
smalltalk.AttrString);

smalltalk.addMethod(
"_selector_attr_",
smalltalk.method({
selector: "selector:attr:",
fn: function (aSelector, anAttr){
var self=this;
(self['@style']=false);
(self['@attr']=anAttr);
(self['@selector']=aSelector);
return self;}
}),
smalltalk.AttrString);

smalltalk.addMethod(
"_selector_prop_",
smalltalk.method({
selector: "selector:prop:",
fn: function (aSelector, aProp){
var self=this;
(self['@style']=false);
(self['@attr']=aProp);
(self['@selector']=aSelector);
(self['@prop']=true);
return self;}
}),
smalltalk.AttrString);

smalltalk.addMethod(
"_selector_styleAttr_",
smalltalk.method({
selector: "selector:styleAttr:",
fn: function (aSelector, anAttr){
var self=this;
(self['@style']=true);
(self['@attr']=anAttr);
(self['@selector']=aSelector);
return self;}
}),
smalltalk.AttrString);

smalltalk.addMethod(
"_string",
smalltalk.method({
selector: "string",
fn: function (){
var self=this;
return self['@val'];
return self;}
}),
smalltalk.AttrString);

smalltalk.addMethod(
"_updateSelf",
smalltalk.method({
selector: "updateSelf",
fn: function (){
var self=this;
((($receiver = self['@prop']).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(self['@selector'], "_asJQuery", []), "_prop_to_", [self['@attr'], self['@val']]);})() : (function(){return ((($receiver = self['@style']).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(smalltalk.send(self['@selector'], "_asJQuery", []), "_attr_to_", [self['@attr'], self['@val']]);})() : (function(){return smalltalk.send(smalltalk.send(self['@selector'], "_asJQuery", []), "_css_to_", [self['@attr'], self['@val']]);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){return smalltalk.send(smalltalk.send(self['@selector'], "_asJQuery", []), "_attr_to_", [self['@attr'], self['@val']]);}), (function(){return smalltalk.send(smalltalk.send(self['@selector'], "_asJQuery", []), "_css_to_", [self['@attr'], self['@val']]);})]));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(self['@selector'], "_asJQuery", []), "_prop_to_", [self['@attr'], self['@val']]);}), (function(){return ((($receiver = self['@style']).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(smalltalk.send(self['@selector'], "_asJQuery", []), "_attr_to_", [self['@attr'], self['@val']]);})() : (function(){return smalltalk.send(smalltalk.send(self['@selector'], "_asJQuery", []), "_css_to_", [self['@attr'], self['@val']]);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){return smalltalk.send(smalltalk.send(self['@selector'], "_asJQuery", []), "_attr_to_", [self['@attr'], self['@val']]);}), (function(){return smalltalk.send(smalltalk.send(self['@selector'], "_asJQuery", []), "_css_to_", [self['@attr'], self['@val']]);})]));})]));
return self;}
}),
smalltalk.AttrString);


smalltalk.addMethod(
"_selector_attr_",
smalltalk.method({
selector: "selector:attr:",
fn: function (aSelector, anAttr){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_selector_attr_", [aSelector, anAttr]);
return self;}
}),
smalltalk.AttrString.klass);

smalltalk.addMethod(
"_selector_prop_",
smalltalk.method({
selector: "selector:prop:",
fn: function (aSelector, aProp){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_selector_prop_", [aSelector, aProp]);
return self;}
}),
smalltalk.AttrString.klass);

smalltalk.addMethod(
"_selector_styleAttr_",
smalltalk.method({
selector: "selector:styleAttr:",
fn: function (aSelector, anAttr){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_selector_styleAttr_", [aSelector, anAttr]);
return self;}
}),
smalltalk.AttrString.klass);


smalltalk.addClass('Var', smalltalk.Object, ['val'], 'DomBinding');
smalltalk.addMethod(
"_is_",
smalltalk.method({
selector: "is:",
fn: function (anObject){
var self=this;
((($receiver = smalltalk.send(smalltalk.send(anObject, "_class", []), "__eq_eq", [smalltalk.send(self, "_class", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (self['@val']=smalltalk.send(anObject, "_val", []));})() : (function(){return (self['@val']=anObject);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (self['@val']=smalltalk.send(anObject, "_val", []));}), (function(){return (self['@val']=anObject);})]));
smalltalk.send(self, "_updateSelf", []);
return self;}
}),
smalltalk.Var);

smalltalk.addMethod(
"_val",
smalltalk.method({
selector: "val",
fn: function (){
var self=this;
return self['@val'];
return self;}
}),
smalltalk.Var);


smalltalk.addMethod(
"_selector_attr_",
smalltalk.method({
selector: "selector:attr:",
fn: function (aSelector, anAttr){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_selector_attr_", [aSelector, anAttr]);
return self;}
}),
smalltalk.Var.klass);

smalltalk.addMethod(
"_selector_styleAttr_",
smalltalk.method({
selector: "selector:styleAttr:",
fn: function (aSelector, anAttr){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_selector_styleAttr_", [aSelector, anAttr]);
return self;}
}),
smalltalk.Var.klass);


smalltalk.addClass('VarBool', smalltalk.Var, [], 'DomBinding');
smalltalk.addMethod(
"_&",
smalltalk.method({
selector: "&",
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
return self;}
}),
smalltalk.VarBool);

smalltalk.addMethod(
"__eq",
smalltalk.method({
selector: "=",
fn: function (anObject){
var self=this;
var $early={};
try{var aBoolean=nil;
((($receiver = smalltalk.send(smalltalk.send(anObject, "_class", []), "__eq_eq", [smalltalk.send(self, "_class", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (aBoolean=smalltalk.send(anObject, "_bool", []));})() : (function(){return (aBoolean=anObject);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (aBoolean=smalltalk.send(anObject, "_bool", []));}), (function(){return (aBoolean=anObject);})]));
((($receiver = smalltalk.send(smalltalk.send(aBoolean, "_class", []), "__eq", [smalltalk.send(smalltalk.send(self, "_bool", []), "_class", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw $early=[false]})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw $early=[false]})();})]));
return Boolean(self._bool() == true) == aBoolean;
return self;
} catch(e) {if(e===$early)return e[0]; throw e}}
}),
smalltalk.VarBool);

smalltalk.addMethod(
"__eq_eq",
smalltalk.method({
selector: "==",
fn: function (anObject){
var self=this;
return smalltalk.send(self, "__eq", [anObject]);
return self;}
}),
smalltalk.VarBool);

smalltalk.addMethod(
"_and_",
smalltalk.method({
selector: "and:",
fn: function (aBlock){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self, "_bool", []), "__eq", [true]), "_ifTrue_ifFalse_", [aBlock, (function(){return false;})]);
return self;}
}),
smalltalk.VarBool);

smalltalk.addMethod(
"_bool",
smalltalk.method({
selector: "bool",
fn: function (){
var self=this;
return self['@val'];
return self;}
}),
smalltalk.VarBool);

smalltalk.addMethod(
"_ifFalse_",
smalltalk.method({
selector: "ifFalse:",
fn: function (aBlock){
var self=this;
return smalltalk.send(smalltalk.send(self, "_bool", []), "_ifTrue_ifFalse_", [(function(){return nil;}), aBlock]);
return self;}
}),
smalltalk.VarBool);

smalltalk.addMethod(
"_ifFalse_ifTrue_",
smalltalk.method({
selector: "ifFalse:ifTrue:",
fn: function (aBlock, anotherBlock){
var self=this;
return smalltalk.send(smalltalk.send(self, "_bool", []), "_ifTrue_ifFalse_", [anotherBlock, aBlock]);
return self;}
}),
smalltalk.VarBool);

smalltalk.addMethod(
"_ifTrue_",
smalltalk.method({
selector: "ifTrue:",
fn: function (aBlock){
var self=this;
return smalltalk.send(smalltalk.send(self, "_bool", []), "_ifTrue_ifFalse_", [aBlock, (function(){return nil;})]);
return self;}
}),
smalltalk.VarBool);

smalltalk.addMethod(
"_ifTrue_ifFalse_",
smalltalk.method({
selector: "ifTrue:ifFalse:",
fn: function (aBlock, anotherBlock){
var self=this;

	    if(self._bool() == true) {
		return aBlock();
	    } else {
		return anotherBlock();
	    }
	;
return self;}
}),
smalltalk.VarBool);

smalltalk.addMethod(
"_not",
smalltalk.method({
selector: "not",
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_bool", []), "__eq", [false]);
return self;}
}),
smalltalk.VarBool);

smalltalk.addMethod(
"_or_",
smalltalk.method({
selector: "or:",
fn: function (aBlock){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self, "_bool", []), "__eq", [true]), "_ifTrue_ifFalse_", [(function(){return true;}), aBlock]);
return self;}
}),
smalltalk.VarBool);

smalltalk.addMethod(
"_|",
smalltalk.method({
selector: "|",
fn: function (aBoolean){
var self=this;

	    if(self._bool() == true) {
		return true;
	    } else {
		return aBoolean;
	    }
	;
return self;}
}),
smalltalk.VarBool);



smalltalk.addClass('AttrBool', smalltalk.VarBool, ['style', 'selector', 'attr'], 'DomBinding');
smalltalk.addMethod(
"_attr",
smalltalk.method({
selector: "attr",
fn: function (){
var self=this;
return self['@attr'];
return self;}
}),
smalltalk.AttrBool);

smalltalk.addMethod(
"_bool",
smalltalk.method({
selector: "bool",
fn: function (){
var self=this;
return self['@val'];
return self;}
}),
smalltalk.AttrBool);

smalltalk.addMethod(
"_dBind",
smalltalk.method({
selector: "dBind",
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
}
}),
smalltalk.AttrBool);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
fn: function (){
var self=this;
return self['@selector'];
return self;}
}),
smalltalk.AttrBool);

smalltalk.addMethod(
"_selector_attr_",
smalltalk.method({
selector: "selector:attr:",
fn: function (aSelector, anAttr){
var self=this;
(style=false);
(self['@attr']=anAttr);
(self['@selector']=aSelector);
return self;}
}),
smalltalk.AttrBool);

smalltalk.addMethod(
"_selector_styleAttr_",
smalltalk.method({
selector: "selector:styleAttr:",
fn: function (aSelector, anAttr){
var self=this;
(style=true);
(self['@attr']=anAttr);
(self['@selector']=aSelector);
return self;}
}),
smalltalk.AttrBool);


smalltalk.addMethod(
"_selector_attr_",
smalltalk.method({
selector: "selector:attr:",
fn: function (aSelector, anAttr){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_selector_attr_", [aSelector, anAttr]);
return self;}
}),
smalltalk.AttrBool.klass);

smalltalk.addMethod(
"_selector_styleAttr_",
smalltalk.method({
selector: "selector:styleAttr:",
fn: function (aSelector, anAttr){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_selector_styleAttr_", [aSelector, anAttr]);
return self;}
}),
smalltalk.AttrBool.klass);


