smalltalk.addPackage('DomBinding', {});
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
"__and",
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
"__or",
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



smalltalk.addClass('AttrBool', smalltalk.VarBool, ['selector', 'attr'], 'DomBinding');
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
var mutationObserver,myObserver,config,mutationHandler;
return smalltalk.withContext(function($ctx1) { var $1,$2;
mutationHandler=(function(mutationRecords){
return smalltalk.withContext(function($ctx2) {return _st(mutationRecords)._do_((function(each){
var temp;
return smalltalk.withContext(function($ctx3) {temp=_st(_st(_st(_st(each)._target())._attr())._self())._attr();
temp;
return _st(self)._is_(temp);
}, function($ctx3) {$ctx3.fillBlock({each:each,temp:temp},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({mutationRecords:mutationRecords},$ctx1)})});
$1=_st((smalltalk.HTMLCanvas || HTMLCanvas))._isWebkit();
if(smalltalk.assert($1)){
mutationObserver="WebKitMutationObserver";
mutationObserver;
} else {
mutationObserver="MutationObserver";
mutationObserver;
};
_st(_st(myObserver).__eq((smalltalk.NativeFunction || NativeFunction)))._class_value_("mutationObserver",mutationHandler);
config=_st((smalltalk.Dictionary || Dictionary))._new();
_st(config)._at_put_("characterData",true);
_st(config)._at_put_("attributes",true);
_st(config)._at_put_add_("attributeFilter",_st((smalltalk.Array || Array))._new(),_st(self)._attr());
_st(_st(_st(self["@selector"])._asJQuery())._toArray())._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(myObserver)._observe_with_(each,config);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$2=self;
return $2;
}, function($ctx1) {$ctx1.fill(self,"dBind",{mutationObserver:mutationObserver,myObserver:myObserver,config:config,mutationHandler:mutationHandler}, smalltalk.AttrBool)})}
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
fn: function (aSelector,anAttr){
var self=this;
self["@attr"]=anAttr;
self["@selector"]=aSelector;
return self}
}),
smalltalk.AttrBool);

smalltalk.addMethod(
"_updateSelf",
smalltalk.method({
selector: "updateSelf",
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self["@selector"],"_asJQuery",[]),"_attr_to_",[self["@attr"],self["@val"]]);
return self}
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


smalltalk.addClass('StyleAttrBool', smalltalk.VarBool, ['selector', 'attr'], 'DomBinding');
smalltalk.addMethod(
"_attr",
smalltalk.method({
selector: "attr",
fn: function (){
var self=this;
var $1;
$1=self["@attr"];
return $1;
}
}),
smalltalk.StyleAttrBool);

smalltalk.addMethod(
"_bool",
smalltalk.method({
selector: "bool",
fn: function (){
var self=this;
var $1;
$1=self["@val"];
return $1;
}
}),
smalltalk.StyleAttrBool);

smalltalk.addMethod(
"_dBind",
smalltalk.method({
selector: "dBind",
fn: function (){
var self=this;
var mutationObserver,myObserver,config,mutationHandler;
return smalltalk.withContext(function($ctx1) { var $1,$2;
mutationHandler=(function(mutationRecords){
return smalltalk.withContext(function($ctx2) {return _st(mutationRecords)._do_((function(each){
var temp;
return smalltalk.withContext(function($ctx3) {temp=_st(_st(each)._target())._css_(_st(self)._attr());
temp;
return _st(self)._is_(temp);
}, function($ctx3) {$ctx3.fillBlock({each:each,temp:temp},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({mutationRecords:mutationRecords},$ctx1)})});
$1=_st((smalltalk.HTMLCanvas || HTMLCanvas))._isWebkit();
if(smalltalk.assert($1)){
mutationObserver="WebKitMutationObserver";
mutationObserver;
} else {
mutationObserver="MutationObserver";
mutationObserver;
};
_st(_st(myObserver).__eq((smalltalk.NativeFunction || NativeFunction)))._class_value_("mutationObserver",mutationHandler);
config=_st((smalltalk.Dictionary || Dictionary))._new();
_st(config)._at_put_("attributes",true);
_st(config)._at_put_add_("attributeFilter",_st((smalltalk.Array || Array))._new(),_st(self)._attr());
_st(_st(_st(self["@selector"])._asJQuery())._toArray())._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(myObserver)._observe_with_(each,config);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$2=self;
return $2;
}, function($ctx1) {$ctx1.fill(self,"dBind",{mutationObserver:mutationObserver,myObserver:myObserver,config:config,mutationHandler:mutationHandler}, smalltalk.StyleAttrBool)})}
}),
smalltalk.StyleAttrBool);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
fn: function (){
var self=this;
var $1;
$1=self["@selector"];
return $1;
}
}),
smalltalk.StyleAttrBool);

smalltalk.addMethod(
"_selector_attr_",
smalltalk.method({
selector: "selector:attr:",
fn: function (aSelector,anAttr){
var self=this;
self["@attr"]=anAttr;
self["@selector"]=aSelector;
return self}
}),
smalltalk.StyleAttrBool);

smalltalk.addMethod(
"_updateSelf",
smalltalk.method({
selector: "updateSelf",
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self["@selector"],"_asJQuery",[]),"_css_to_",[self["@attr"],self["@val"]]);
return self}
}),
smalltalk.StyleAttrBool);


smalltalk.addMethod(
"_selector_attr_",
smalltalk.method({
selector: "selector:attr:",
fn: function (aSelector,anAttr){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_new",[]),"_selector_attr_",[aSelector,anAttr]);
return $1;
}
}),
smalltalk.StyleAttrBool.klass);


smalltalk.addClass('VarNumb', smalltalk.Var, [], 'DomBinding');
smalltalk.addMethod(
"__and",
smalltalk.method({
selector: "&",
fn: function (anObject){
var self=this;
var $1;
var aNumber;
$1=smalltalk.send(smalltalk.send(anObject,"_class",[]),"__eq_eq",[smalltalk.send(self,"_class",[])]);
if(smalltalk.assert($1)){
aNumber=smalltalk.send(anObject,"_numb",[]);
aNumber;
} else {
aNumber=anObject;
aNumber;
};
return self._numb() & aNumber;
;
return self}
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"__star",
smalltalk.method({
selector: "*",
fn: function (anObject){
var self=this;
var $1;
var aNumber;
$1=smalltalk.send(smalltalk.send(anObject,"_class",[]),"__eq_eq",[smalltalk.send(self,"_class",[])]);
if(smalltalk.assert($1)){
aNumber=smalltalk.send(anObject,"_numb",[]);
aNumber;
} else {
aNumber=anObject;
aNumber;
};
return self._numb() * aNumber;
;
return self}
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"__plus",
smalltalk.method({
selector: "+",
fn: function (anObject){
var self=this;
var $1;
var aNumber;
$1=smalltalk.send(smalltalk.send(anObject,"_class",[]),"__eq_eq",[smalltalk.send(self,"_class",[])]);
if(smalltalk.assert($1)){
aNumber=smalltalk.send(anObject,"_numb",[]);
aNumber;
} else {
aNumber=anObject;
aNumber;
};
return self._numb() + aNumber;
;
return self}
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"__minus",
smalltalk.method({
selector: "-",
fn: function (anObject){
var self=this;
var $1;
var aNumber;
$1=smalltalk.send(smalltalk.send(anObject,"_class",[]),"__eq_eq",[smalltalk.send(self,"_class",[])]);
if(smalltalk.assert($1)){
aNumber=smalltalk.send(anObject,"_numb",[]);
aNumber;
} else {
aNumber=anObject;
aNumber;
};
return self._numb() - aNumber;
;
return self}
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"__slash",
smalltalk.method({
selector: "/",
fn: function (anObject){
var self=this;
var $1;
var aNumber;
$1=smalltalk.send(smalltalk.send(anObject,"_class",[]),"__eq_eq",[smalltalk.send(self,"_class",[])]);
if(smalltalk.assert($1)){
aNumber=smalltalk.send(anObject,"_numb",[]);
aNumber;
} else {
aNumber=anObject;
aNumber;
};
return self._numb() / aNumber;
;
return self}
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"__lt",
smalltalk.method({
selector: "<",
fn: function (anObject){
var self=this;
var $1;
var aNumber;
$1=smalltalk.send(smalltalk.send(anObject,"_class",[]),"__eq_eq",[smalltalk.send(self,"_class",[])]);
if(smalltalk.assert($1)){
aNumber=smalltalk.send(anObject,"_numb",[]);
aNumber;
} else {
aNumber=anObject;
aNumber;
};
return self._numb() < aNumber;
;
return self}
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"__lt_eq",
smalltalk.method({
selector: "<=",
fn: function (anObject){
var self=this;
var $1;
var aNumber;
$1=smalltalk.send(smalltalk.send(anObject,"_class",[]),"__eq_eq",[smalltalk.send(self,"_class",[])]);
if(smalltalk.assert($1)){
aNumber=smalltalk.send(anObject,"_numb",[]);
aNumber;
} else {
aNumber=anObject;
aNumber;
};
return self._numb() <= aNumber;
;
return self}
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"__eq",
smalltalk.method({
selector: "=",
fn: function (anObject){
var self=this;
var $1,$2;
var aNumber;
$1=smalltalk.send(smalltalk.send(anObject,"_class",[]),"__eq_eq",[smalltalk.send(self,"_class",[])]);
if(smalltalk.assert($1)){
aNumber=smalltalk.send(anObject,"_numb",[]);
aNumber;
} else {
aNumber=anObject;
aNumber;
};
$2=smalltalk.send(aNumber,"_isNumber",[]);
if(! smalltalk.assert($2)){
return false;
};
return Number(self._numb()) == aNumber;
;
return self}
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"__gt",
smalltalk.method({
selector: ">",
fn: function (anObject){
var self=this;
var $1;
var aNumber;
$1=smalltalk.send(smalltalk.send(anObject,"_class",[]),"__eq_eq",[smalltalk.send(self,"_class",[])]);
if(smalltalk.assert($1)){
aNumber=smalltalk.send(anObject,"_numb",[]);
aNumber;
} else {
aNumber=anObject;
aNumber;
};
return self._numb() > aNumber;
;
return self}
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"__gt_eq",
smalltalk.method({
selector: ">=",
fn: function (anObject){
var self=this;
var $1;
var aNumber;
$1=smalltalk.send(smalltalk.send(anObject,"_class",[]),"__eq_eq",[smalltalk.send(self,"_class",[])]);
if(smalltalk.assert($1)){
aNumber=smalltalk.send(anObject,"_numb",[]);
aNumber;
} else {
aNumber=anObject;
aNumber;
};
return self._numb() >= aNumber;
;
return self}
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"__backslash_backslash",
smalltalk.method({
selector: "\x5c\x5c",
fn: function (anObject){
var self=this;
var $1;
var aNumber;
$1=smalltalk.send(smalltalk.send(anObject,"_class",[]),"__eq_eq",[smalltalk.send(self,"_class",[])]);
if(smalltalk.assert($1)){
aNumber=smalltalk.send(anObject,"_numb",[]);
aNumber;
} else {
aNumber=anObject;
aNumber;
};
return self.numb() % aNumber;
;
return self}
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"_abs",
smalltalk.method({
selector: "abs",
fn: function (){
var self=this;
var $1;
$1=Math.abs(self._numb());;
;
return $1;
}
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"_asJSON",
smalltalk.method({
selector: "asJSON",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_numb",[]);
return $1;
}
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"_asString",
smalltalk.method({
selector: "asString",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_printString",[]);
return $1;
}
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"_atRandom",
smalltalk.method({
selector: "atRandom",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Random || Random),"_new",[]),"_next",[]),"__star",[smalltalk.send(self,"_numb",[])]),"_truncated",[]),"__plus",[(1)]);
return $1;
}
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"_even",
smalltalk.method({
selector: "even",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send((0),"__eq",[smalltalk.send(smalltalk.send(self,"_numb",[]),"_\\\\",[(2)])]);
return $1;
}
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"_isZero",
smalltalk.method({
selector: "isZero",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_numb",[]),"__eq",[(0)]);
return $1;
}
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"_max_",
smalltalk.method({
selector: "max:",
fn: function (anObject){
var self=this;
var $1;
var aNumber;
$1=smalltalk.send(smalltalk.send(anObject,"_class",[]),"__eq_eq",[smalltalk.send(self,"_class",[])]);
if(smalltalk.assert($1)){
aNumber=smalltalk.send(anObject,"_numb",[]);
aNumber;
} else {
aNumber=anObject;
aNumber;
};
return Math.max(self._numb(), aNumber);;
;
return self}
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"_min_",
smalltalk.method({
selector: "min:",
fn: function (anObject){
var self=this;
var $1;
var aNumber;
$1=smalltalk.send(smalltalk.send(anObject,"_class",[]),"__eq_eq",[smalltalk.send(self,"_class",[])]);
if(smalltalk.assert($1)){
aNumber=smalltalk.send(anObject,"_numb",[]);
aNumber;
} else {
aNumber=anObject;
aNumber;
};
return Math.min(self._numb(), aNumber);;
;
return self}
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"_negated",
smalltalk.method({
selector: "negated",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send((0),"__minus",[smalltalk.send(self,"_numb",[])]);
return $1;
}
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"_negative",
smalltalk.method({
selector: "negative",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_numb",[]),"__lt",[(0)]);
return $1;
}
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"_numb",
smalltalk.method({
selector: "numb",
fn: function (){
var self=this;
var $1;
$1=self["@val"];
return $1;
}
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"_odd",
smalltalk.method({
selector: "odd",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_even",[]),"_not",[]);
return $1;
}
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"_positive",
smalltalk.method({
selector: "positive",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"__gt_eq",[(0)]);
return $1;
}
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"_rounded",
smalltalk.method({
selector: "rounded",
fn: function (){
var self=this;
return Math.round(self._numb());;
;
return self}
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"_sqrt",
smalltalk.method({
selector: "sqrt",
fn: function (){
var self=this;
return Math.sqrt(self._numb());
;
return self}
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"_squared",
smalltalk.method({
selector: "squared",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_numb",[]),"__star",[smalltalk.send(self,"_numb",[])]);
return $1;
}
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"_timesRepeat_",
smalltalk.method({
selector: "timesRepeat:",
fn: function (aBlock){
var self=this;
var count;
count=(1);
smalltalk.send((function(){
return smalltalk.send(count,"__gt",[smalltalk.send(self,"_numb",[])]);
}),"_whileFalse_",[(function(){
smalltalk.send(aBlock,"_value",[]);
count=smalltalk.send(count,"__plus",[(1)]);
return count;
})]);
return self}
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"_to_",
smalltalk.method({
selector: "to:",
fn: function (aNumber){
var self=this;
var $1;
var array;
var first;
var last;
var count;
first=smalltalk.send(self,"_truncated",[]);
last=smalltalk.send(smalltalk.send(aNumber,"_truncated",[]),"__plus",[(1)]);
count=(1);
array=smalltalk.send((smalltalk.Array || Array),"_new",[]);
smalltalk.send(smalltalk.send(last,"__minus",[first]),"_timesRepeat_",[(function(){
smalltalk.send(array,"_at_put_",[count,first]);
count=smalltalk.send(count,"__plus",[(1)]);
count;
first=smalltalk.send(first,"__plus",[(1)]);
return first;
})]);
$1=array;
return $1;
}
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"_to_by_",
smalltalk.method({
selector: "to:by:",
fn: function (stop,step){
var self=this;
var $1,$2,$3;
var array;
var value;
var pos;
value=smalltalk.send(self,"_numb",[]);
array=smalltalk.send((smalltalk.Array || Array),"_new",[]);
pos=(1);
$1=smalltalk.send(step,"__eq",[(0)]);
if(smalltalk.assert($1)){
smalltalk.send(self,"_error_",["step must be non-zero"]);
};
$2=smalltalk.send(step,"__lt",[(0)]);
if(smalltalk.assert($2)){
smalltalk.send((function(){
return smalltalk.send(value,"__gt_eq",[stop]);
}),"_whileTrue_",[(function(){
smalltalk.send(array,"_at_put_",[pos,value]);
pos=smalltalk.send(pos,"__plus",[(1)]);
pos;
value=smalltalk.send(value,"__plus",[step]);
return value;
})]);
} else {
smalltalk.send((function(){
return smalltalk.send(value,"__lt_eq",[stop]);
}),"_whileTrue_",[(function(){
smalltalk.send(array,"_at_put_",[pos,value]);
pos=smalltalk.send(pos,"__plus",[(1)]);
pos;
value=smalltalk.send(value,"__plus",[step]);
return value;
})]);
};
$3=array;
return $3;
}
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"_to_by_do_",
smalltalk.method({
selector: "to:by:do:",
fn: function (stop,step,aBlock){
var self=this;
var $1,$2;
var value;
value=smalltalk.send(self,"_numb",[]);
$1=smalltalk.send(step,"__eq",[(0)]);
if(smalltalk.assert($1)){
smalltalk.send(self,"_error_",["step must be non-zero"]);
};
$2=smalltalk.send(step,"__lt",[(0)]);
if(smalltalk.assert($2)){
smalltalk.send((function(){
return smalltalk.send(value,"__gt_eq",[stop]);
}),"_whileTrue_",[(function(){
smalltalk.send(aBlock,"_value_",[value]);
value=smalltalk.send(value,"__plus",[step]);
return value;
})]);
} else {
smalltalk.send((function(){
return smalltalk.send(value,"__lt_eq",[stop]);
}),"_whileTrue_",[(function(){
smalltalk.send(aBlock,"_value_",[value]);
value=smalltalk.send(value,"__plus",[step]);
return value;
})]);
};
return self}
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"_to_do_",
smalltalk.method({
selector: "to:do:",
fn: function (stop,aBlock){
var self=this;
var nextValue;
nextValue=smalltalk.send(self,"_numb",[]);
smalltalk.send((function(){
return smalltalk.send(nextValue,"__lt_eq",[stop]);
}),"_whileTrue_",[(function(){
smalltalk.send(aBlock,"_value_",[nextValue]);
nextValue=smalltalk.send(nextValue,"__plus",[(1)]);
return nextValue;
})]);
return self}
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"_truncated",
smalltalk.method({
selector: "truncated",
fn: function (){
var self=this;
var $1,$2;
var result;
$1=smalltalk.send(smalltalk.send(self,"_numb",[]),"__gt_eq",[(0)]);
if(smalltalk.assert($1)){
result = Math.floor(self._numb());;
;
} else {
result = (Math.floor(self._numb()* (-1)) * (-1));;
;
};
$2=result;
return $2;
}
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"__or",
smalltalk.method({
selector: "|",
fn: function (anObject){
var self=this;
var $1;
var aNumber;
$1=smalltalk.send(smalltalk.send(anObject,"_class",[]),"__eq_eq",[smalltalk.send(self,"_class",[])]);
if(smalltalk.assert($1)){
aNumber=smalltalk.send(anObject,"_numb",[]);
aNumber;
} else {
aNumber=anObject;
aNumber;
};
return self._numb() | aNumber;
;
return self}
}),
smalltalk.VarNumb);



smalltalk.addClass('AttrNumb', smalltalk.VarNumb, ['selector', 'attr', 'unit'], 'DomBinding');
smalltalk.addMethod(
"__and",
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
"__backslash_backslash",
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
var $1;
$1=self["@attr"];
return $1;
}
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_dBind",
smalltalk.method({
selector: "dBind",
fn: function (){
var self=this;
var mutationObserver,myObserver,config,mutationHandler;
return smalltalk.withContext(function($ctx1) { var $1,$2;
mutationHandler=(function(mutationRecords){
return smalltalk.withContext(function($ctx2) {return _st(mutationRecords)._do_((function(each){
var temp;
return smalltalk.withContext(function($ctx3) {temp=_st(_st(each)._target())._attr_(_st(self)._attr());
temp;
return _st(self)._is_(_st(_st(temp)._copyFrom_to_((0),_st(_st(temp)._size()).__minus(_st(self["@unit"])._size())))._asNumber());
}, function($ctx3) {$ctx3.fillBlock({each:each,temp:temp},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({mutationRecords:mutationRecords},$ctx1)})});
$1=_st((smalltalk.HTMLCanvas || HTMLCanvas))._isWebkit();
if(smalltalk.assert($1)){
mutationObserver="WebKitMutationObserver";
mutationObserver;
} else {
mutationObserver="MutationObserver";
mutationObserver;
};
_st(_st(myObserver).__eq((smalltalk.NativeFunction || NativeFunction)))._class_value_("mutationObserver",mutationHandler);
config=_st((smalltalk.Dictionary || Dictionary))._new();
_st(config)._at_put_("characterData",true);
_st(config)._at_put_("attributes",true);
_st(config)._at_put_add_("attributeFilter",_st((smalltalk.Array || Array))._new(),_st(self)._attr());
_st(_st(_st(self["@selector"])._asJQuery())._toArray())._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(myObserver)._observe_with_(each,config);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$2=self;
return $2;
}, function($ctx1) {$ctx1.fill(self,"dBind",{mutationObserver:mutationObserver,myObserver:myObserver,config:config,mutationHandler:mutationHandler}, smalltalk.AttrNumb)})}
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
var $1;
$1=self["@val"];
return $1;
}
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
var $1;
$1=self["@selector"];
return $1;
}
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_selector_attr_",
smalltalk.method({
selector: "selector:attr:",
fn: function (aSelector,anAttr){
var self=this;
self["@attr"]=anAttr;
self["@selector"]=aSelector;
self["@unit"]="";
return self}
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_selector_attr_unit_",
smalltalk.method({
selector: "selector:attr:unit:",
fn: function (aSelector,anAttr,aUnit){
var self=this;
self["@attr"]=anAttr;
self["@selector"]=aSelector;
self["@unit"]=aUnit;
return self}
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
smalltalk.send(smalltalk.send(self["@selector"],"_asJQuery",[]),"_attr_to_",[self["@attr"],smalltalk.send(smalltalk.send(self["@val"],"_asString",[]),"__comma",[self["@unit"]])]);
return self}
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"__or",
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
"_selector_attr_",
smalltalk.method({
selector: "selector:attr:",
fn: function (aSelector,anAttr){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_new",[]),"_selector_attr_",[aSelector,anAttr]);
return $1;
}
}),
smalltalk.AttrNumb.klass);

smalltalk.addMethod(
"_selector_attr_unit_",
smalltalk.method({
selector: "selector:attr:unit:",
fn: function (aSelector,anAttr,aUnit){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_new",[]),"_selector_attr_unit_",[aSelector,anAttr,aUnit]);
return $1;
}
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


smalltalk.addClass('StyleAttrNumb', smalltalk.VarNumb, ['selector', 'attr', 'unit'], 'DomBinding');
smalltalk.addMethod(
"_attr",
smalltalk.method({
selector: "attr",
fn: function (){
var self=this;
var $1;
$1=self["@attr"];
return $1;
}
}),
smalltalk.StyleAttrNumb);

smalltalk.addMethod(
"_dBind",
smalltalk.method({
selector: "dBind",
fn: function (){
var self=this;
var $1,$2;
var mutationObserver;
var myObserver;
var config;
var mutationHandler;
mutationHandler=(function(mutationRecords){
return smalltalk.send(mutationRecords,"_do_",[(function(each){
var temp;
temp=($(each.target).css(self._attr()));;
;
return smalltalk.send(self,"_is_",[smalltalk.send(smalltalk.send(temp,"_copyFrom_to_",[(0),smalltalk.send(smalltalk.send(temp,"_size",[]),"__minus",[smalltalk.send(self["@unit"],"_size",[])])]),"_asNumber",[])]);
})]);
});
$1=smalltalk.send((smalltalk.HTMLCanvas || HTMLCanvas),"_isWebkit",[]);
if(smalltalk.assert($1)){
mutationObserver=smalltalk.send(window,"_WebKitMutationObserver",[]);
mutationObserver;
} else {
mutationObserver=smalltalk.send(window,"_MutationObserver",[]);
mutationObserver;
};
myObserver= new mutationObserver(mutationHandler);;
;
config={attributes: true, attributeFilter:[self._attr()] };
;
smalltalk.send(smalltalk.send(smalltalk.send(self["@selector"],"_asJQuery",[]),"_toArray",[]),"_do_",[(function(each){
return smalltalk.send(myObserver,"_observe_with_",[each,config]);
})]);
$2=self;
return $2;
}
}),
smalltalk.StyleAttrNumb);

smalltalk.addMethod(
"_numb",
smalltalk.method({
selector: "numb",
fn: function (){
var self=this;
var $1;
$1=self["@val"];
return $1;
}
}),
smalltalk.StyleAttrNumb);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
fn: function (){
var self=this;
var $1;
$1=self["@selector"];
return $1;
}
}),
smalltalk.StyleAttrNumb);

smalltalk.addMethod(
"_selector_attr_",
smalltalk.method({
selector: "selector:attr:",
fn: function (aSelector,anAttr){
var self=this;
self["@attr"]=anAttr;
self["@selector"]=aSelector;
self["@unit"]="";
return self}
}),
smalltalk.StyleAttrNumb);

smalltalk.addMethod(
"_selector_attr_unit_",
smalltalk.method({
selector: "selector:attr:unit:",
fn: function (aSelector,anAttr,aUnit){
var self=this;
self["@attr"]=anAttr;
self["@selector"]=aSelector;
self["@unit"]=aUnit;
return self}
}),
smalltalk.StyleAttrNumb);

smalltalk.addMethod(
"_updateSelf",
smalltalk.method({
selector: "updateSelf",
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self["@selector"],"_asJQuery",[]),"_css_to_",[self["@attr"],smalltalk.send(smalltalk.send(self["@val"],"_asString",[]),"__comma",[self["@unit"]])]);
return self}
}),
smalltalk.StyleAttrNumb);


smalltalk.addMethod(
"_selector_attr_",
smalltalk.method({
selector: "selector:attr:",
fn: function (aSelector,anAttr){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_new",[]),"_selector_attr_",[aSelector,anAttr]);
return $1;
}
}),
smalltalk.StyleAttrNumb.klass);

smalltalk.addMethod(
"_selector_attr_unit_",
smalltalk.method({
selector: "selector:attr:unit:",
fn: function (aSelector,anAttr,aUnit){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_new",[]),"_selector_attr_unit_",[aSelector,anAttr,aUnit]);
return $1;
}
}),
smalltalk.StyleAttrNumb.klass);


smalltalk.addClass('VarString', smalltalk.Var, [], 'DomBinding');
smalltalk.addMethod(
"__comma",
smalltalk.method({
selector: ",",
fn: function (aString){
var self=this;
return self._string() + aString;
;
return self}
}),
smalltalk.VarString);

smalltalk.addMethod(
"__lt",
smalltalk.method({
selector: "<",
fn: function (aString){
var self=this;
return String(self._string()) < aString._asString();
;
return self}
}),
smalltalk.VarString);

smalltalk.addMethod(
"__lt_eq",
smalltalk.method({
selector: "<=",
fn: function (aString){
var self=this;
return String(self._string()) <= aString._asString();
;
return self}
}),
smalltalk.VarString);

smalltalk.addMethod(
"__eq",
smalltalk.method({
selector: "=",
fn: function (aString){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(aString,"_class",[]),"__eq",[smalltalk.send(smalltalk.send(self,"_string",[]),"_class",[])]);
if(! smalltalk.assert($1)){
return false;
};
return String(self._string()) === String(aString);
;
return self}
}),
smalltalk.VarString);

smalltalk.addMethod(
"__eq_eq",
smalltalk.method({
selector: "==",
fn: function (aString){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_string",[]),"__eq",[aString]);
return $1;
}
}),
smalltalk.VarString);

smalltalk.addMethod(
"__gt",
smalltalk.method({
selector: ">",
fn: function (aString){
var self=this;
return String(self._string()) > aString._asString();
;
return self}
}),
smalltalk.VarString);

smalltalk.addMethod(
"__gt_eq",
smalltalk.method({
selector: ">=",
fn: function (aString){
var self=this;
return String(self._string()) >= aString._asString();
;
return self}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_asJSON",
smalltalk.method({
selector: "asJSON",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_string",[]);
return $1;
}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_asJavaScriptSelector",
smalltalk.method({
selector: "asJavaScriptSelector",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self,"_string",[]),"_asSelector",[]),"_replace_with_",["^_",""]),"_replace_with_",["_.*",""]);
return $1;
}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_asJavascript",
smalltalk.method({
selector: "asJavascript",
fn: function (){
var self=this;

		if(self._string().search(/^[a-zA-Z0-9_:.$ ]*$/) == -1)
			return "\"" + self.replace(/[\x00-\x1f"\\\x7f-\x9f]/g, function(ch){var c=ch.charCodeAt(0);return "\\x"+("0"+c.toString(16)).slice(-2)}) + "\"";
		else
			return "\"" + self._string() + "\"";
	;
;
return self}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_asLowercase",
smalltalk.method({
selector: "asLowercase",
fn: function (){
var self=this;
return self._string().toLowerCase();
;
return self}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_asNumber",
smalltalk.method({
selector: "asNumber",
fn: function (){
var self=this;
return Number(self._string());
;
return self}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_asSelector",
smalltalk.method({
selector: "asSelector",
fn: function (){
var self=this;
var $1;
var selector;
selector=smalltalk.send("_","__comma",[smalltalk.send(self,"_string",[])]);
selector=smalltalk.send(selector,"_replace_with_",[":","_"]);
selector=smalltalk.send(selector,"_replace_with_",["[+]","_plus"]);
selector=smalltalk.send(selector,"_replace_with_",["-","_minus"]);
selector=smalltalk.send(selector,"_replace_with_",["[*]","_star"]);
selector=smalltalk.send(selector,"_replace_with_",["[/]","_slash"]);
selector=smalltalk.send(selector,"_replace_with_",[">","_gt"]);
selector=smalltalk.send(selector,"_replace_with_",["<","_lt"]);
selector=smalltalk.send(selector,"_replace_with_",["=","_eq"]);
selector=smalltalk.send(selector,"_replace_with_",[",","_comma"]);
selector=smalltalk.send(selector,"_replace_with_",["[@]","_at"]);
$1=selector;
return $1;
}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_asString",
smalltalk.method({
selector: "asString",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_string",[]);
return $1;
}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_asSymbol",
smalltalk.method({
selector: "asSymbol",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send((smalltalk.Symbol || Symbol),"_lookup_",[smalltalk.send(self,"_string",[])]);
return $1;
}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_asUppercase",
smalltalk.method({
selector: "asUppercase",
fn: function (){
var self=this;
return self._string().toUpperCase();
;
return self}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_asciiValue",
smalltalk.method({
selector: "asciiValue",
fn: function (){
var self=this;
return self._string().charCodeAt(0);;
;
return self}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_at_ifAbsent_",
smalltalk.method({
selector: "at:ifAbsent:",
fn: function (anIndex,aBlock){
var self=this;
return String(self._string()).charAt(anIndex - 1) || aBlock();
;
return self}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_copyFrom_to_",
smalltalk.method({
selector: "copyFrom:to:",
fn: function (anIndex,anotherIndex){
var self=this;
return self._string().substring(anIndex - 1, anotherIndex);
;
return self}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_do_",
smalltalk.method({
selector: "do:",
fn: function (aBlock){
var self=this;
for(var i=0;i<self._string().length;i++){aBlock(self._string().charAt(i));};
;
return self}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_escaped",
smalltalk.method({
selector: "escaped",
fn: function (){
var self=this;
return escape(self._string());
;
return self}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_includesSubString_",
smalltalk.method({
selector: "includesSubString:",
fn: function (subString){
var self=this;
 return self._string().indexOf(subString) != -1 ;
;
return self}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_isString",
smalltalk.method({
selector: "isString",
fn: function (){
var self=this;
return true;
}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_join_",
smalltalk.method({
selector: "join:",
fn: function (aCollection){
var self=this;
var $1;
$1=smalltalk.send((smalltalk.String || String),"_streamContents_",[(function(stream){
return smalltalk.send(aCollection,"_do_separatedBy_",[(function(each){
return smalltalk.send(stream,"_nextPutAll_",[smalltalk.send(each,"_asString",[])]);
}),(function(){
return smalltalk.send(stream,"_nextPutAll_",[smalltalk.send(self,"_string",[])]);
})]);
})]);
return $1;
}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_lineIndicesDo_",
smalltalk.method({
selector: "lineIndicesDo:",
fn: function (aBlock){
var self=this;
var $1,$2,$3,$4;
var $early={};
try {
var cr;
var lf;
var start;
var sz;
var nextLF;
var nextCR;
start=(1);
sz=smalltalk.send(self,"_size",[]);
cr=smalltalk.send((smalltalk.String || String),"_cr",[]);
nextCR=smalltalk.send(self,"_indexOf_startingAt_",[cr,(1)]);
lf=smalltalk.send((smalltalk.String || String),"_lf",[]);
nextLF=smalltalk.send(self,"_indexOf_startingAt_",[lf,(1)]);
smalltalk.send((function(){
return smalltalk.send(start,"__lt_eq",[sz]);
}),"_whileTrue_",[(function(){
$1=smalltalk.send(smalltalk.send(nextLF,"__eq",[(0)]),"_and_",[(function(){
return smalltalk.send(nextCR,"__eq",[(0)]);
})]);
if(smalltalk.assert($1)){
smalltalk.send(aBlock,"_value_value_value_",[start,sz,sz]);
$2=smalltalk.send(self,"_string",[]);
throw $early=[$2];
};
$3=smalltalk.send(smalltalk.send(nextCR,"__eq",[(0)]),"_or_",[(function(){
return smalltalk.send(smalltalk.send((0),"__lt",[nextLF]),"_and_",[(function(){
return smalltalk.send(nextLF,"__lt",[nextCR]);
})]);
})]);
if(smalltalk.assert($3)){
smalltalk.send(aBlock,"_value_value_value_",[start,smalltalk.send(nextLF,"__minus",[(1)]),nextLF]);
start=smalltalk.send((1),"__plus",[nextLF]);
start;
nextLF=smalltalk.send(self,"_indexOf_startingAt_",[lf,start]);
return nextLF;
} else {
$4=smalltalk.send(smalltalk.send((1),"__plus",[nextCR]),"__eq",[nextLF]);
if(smalltalk.assert($4)){
smalltalk.send(aBlock,"_value_value_value_",[start,smalltalk.send(nextCR,"__minus",[(1)]),nextLF]);
start=smalltalk.send((1),"__plus",[nextLF]);
start;
nextCR=smalltalk.send(self,"_indexOf_startingAt_",[cr,start]);
nextCR;
nextLF=smalltalk.send(self,"_indexOf_startingAt_",[lf,start]);
return nextLF;
} else {
smalltalk.send(aBlock,"_value_value_value_",[start,smalltalk.send(nextCR,"__minus",[(1)]),nextCR]);
start=smalltalk.send((1),"__plus",[nextCR]);
start;
nextCR=smalltalk.send(self,"_indexOf_startingAt_",[cr,start]);
return nextCR;
};
};
})]);
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_lineNumber_",
smalltalk.method({
selector: "lineNumber:",
fn: function (anIndex){
var self=this;
var $1,$2;
var $early={};
try {
var lineCount;
lineCount=(0);
smalltalk.send(self,"_lineIndicesDo_",[(function(start,endWithoutDelimiters,end){
lineCount=smalltalk.send(lineCount,"__plus",[(1)]);
$1=smalltalk.send(lineCount,"__eq",[anIndex]);
if(smalltalk.assert($1)){
$2=smalltalk.send(self,"_copyFrom_to_",[start,endWithoutDelimiters]);
throw $early=[$2];
};
})]);
return nil;
}
catch(e) {if(e===$early)return e[0]; throw e}
}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_lines",
smalltalk.method({
selector: "lines",
fn: function (){
var self=this;
var $1;
var lines;
lines=smalltalk.send((smalltalk.Array || Array),"_new",[]);
smalltalk.send(self,"_linesDo_",[(function(aLine){
return smalltalk.send(lines,"_add_",[aLine]);
})]);
$1=lines;
return $1;
}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_linesDo_",
smalltalk.method({
selector: "linesDo:",
fn: function (aBlock){
var self=this;
smalltalk.send(self,"_lineIndicesDo_",[(function(start,endWithoutDelimiters,end){
return smalltalk.send(aBlock,"_value_",[smalltalk.send(self,"_copyFrom_to_",[start,endWithoutDelimiters])]);
})]);
return self}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_match_",
smalltalk.method({
selector: "match:",
fn: function (aRegexp){
var self=this;
return self._string().search(aRegexp) != -1;
;
return self}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_matchesOf_",
smalltalk.method({
selector: "matchesOf:",
fn: function (aRegularExpression){
var self=this;
return self._string().match(aRegularExpression);
;
return self}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_printNl",
smalltalk.method({
selector: "printNl",
fn: function (){
var self=this;
console.log(self._string());
;
return self}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send("'","__comma",[smalltalk.send(self,"_string",[])]),"__comma",["'"]);
return $1;
}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_replace_with_",
smalltalk.method({
selector: "replace:with:",
fn: function (aString,anotherString){
var self=this;
var $1;
$1=smalltalk.send(self,"_replaceRegexp_with_",[smalltalk.send((smalltalk.RegularExpression || RegularExpression),"_fromString_flag_",[aString,"g"]),anotherString]);
return $1;
}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_replaceRegexp_with_",
smalltalk.method({
selector: "replaceRegexp:with:",
fn: function (aRegexp,aString){
var self=this;
return self._string().replace(aRegexp, aString);
;
return self}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_reversed",
smalltalk.method({
selector: "reversed",
fn: function (){
var self=this;
return self._string().split("").reverse().join("");
;
return self}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_size",
smalltalk.method({
selector: "size",
fn: function (){
var self=this;
return self._string().length;
;
return self}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_string",
smalltalk.method({
selector: "string",
fn: function (){
var self=this;
var $1;
$1=self["@val"];
return $1;
}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_tokenize_",
smalltalk.method({
selector: "tokenize:",
fn: function (aString){
var self=this;
return self._string().split(aString);
;
return self}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_trimBoth",
smalltalk.method({
selector: "trimBoth",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_trimBoth_",["\x5cs"]);
return $1;
}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_trimBoth_",
smalltalk.method({
selector: "trimBoth:",
fn: function (separators){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_trimLeft_",[separators]),"_trimRight_",[separators]);
return $1;
}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_trimLeft",
smalltalk.method({
selector: "trimLeft",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_trimLeft_",["\x5cs"]);
return $1;
}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_trimLeft_",
smalltalk.method({
selector: "trimLeft:",
fn: function (separators){
var self=this;
var $1;
$1=smalltalk.send(self,"_replaceRegexp_with_",[smalltalk.send((smalltalk.RegularExpression || RegularExpression),"_fromString_flag_",[smalltalk.send(smalltalk.send("^[","__comma",[separators]),"__comma",["]+"]),"g"]),""]);
return $1;
}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_trimRight",
smalltalk.method({
selector: "trimRight",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_trimRight_",["\x5cs"]);
return $1;
}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_trimRight_",
smalltalk.method({
selector: "trimRight:",
fn: function (separators){
var self=this;
var $1;
$1=smalltalk.send(self,"_replaceRegexp_with_",[smalltalk.send((smalltalk.RegularExpression || RegularExpression),"_fromString_flag_",[smalltalk.send(smalltalk.send("[","__comma",[separators]),"__comma",["]+$"]),"g"]),""]);
return $1;
}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_unescaped",
smalltalk.method({
selector: "unescaped",
fn: function (){
var self=this;
return unescape(self);
;
return self}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_withIndexDo_",
smalltalk.method({
selector: "withIndexDo:",
fn: function (aBlock){
var self=this;
for(var i=0;i<self._string().length;i++){aBlock(self._string().charAt(i), i+1);};
;
return self}
}),
smalltalk.VarString);


smalltalk.addMethod(
"_cr",
smalltalk.method({
selector: "cr",
fn: function (){
var self=this;
return '\r';
;
return self}
}),
smalltalk.VarString.klass);

smalltalk.addMethod(
"_crlf",
smalltalk.method({
selector: "crlf",
fn: function (){
var self=this;
return '\r\n';
;
return self}
}),
smalltalk.VarString.klass);

smalltalk.addMethod(
"_fromCharCode_",
smalltalk.method({
selector: "fromCharCode:",
fn: function (anInteger){
var self=this;
return String.fromCharCode(anInteger);
;
return self}
}),
smalltalk.VarString.klass);

smalltalk.addMethod(
"_fromString_",
smalltalk.method({
selector: "fromString:",
fn: function (aString){
var self=this;
return new self.fn(aString);
;
return self}
}),
smalltalk.VarString.klass);

smalltalk.addMethod(
"_lf",
smalltalk.method({
selector: "lf",
fn: function (){
var self=this;
return '\n';
;
return self}
}),
smalltalk.VarString.klass);

smalltalk.addMethod(
"_space",
smalltalk.method({
selector: "space",
fn: function (){
var self=this;
return ' ';
;
return self}
}),
smalltalk.VarString.klass);

smalltalk.addMethod(
"_streamClass",
smalltalk.method({
selector: "streamClass",
fn: function (){
var self=this;
var $1;
$1=(smalltalk.StringStream || StringStream);
return $1;
}
}),
smalltalk.VarString.klass);

smalltalk.addMethod(
"_streamContents_",
smalltalk.method({
selector: "streamContents:",
fn: function (blockWithArg){
var self=this;
var $1;
var stream;
stream=smalltalk.send(smalltalk.send(self,"_streamClass",[]),"_on_",[smalltalk.send((smalltalk.String || String),"_new",[])]);
smalltalk.send(blockWithArg,"_value_",[stream]);
$1=smalltalk.send(stream,"_contents",[]);
return $1;
}
}),
smalltalk.VarString.klass);

smalltalk.addMethod(
"_tab",
smalltalk.method({
selector: "tab",
fn: function (){
var self=this;
return '\t';
;
return self}
}),
smalltalk.VarString.klass);

smalltalk.addMethod(
"_value_",
smalltalk.method({
selector: "value:",
fn: function (aUTFCharCode){
var self=this;
return String.fromCharCode(aUTFCharCode);;
;
return self}
}),
smalltalk.VarString.klass);


smalltalk.addClass('AttrString', smalltalk.VarString, ['selector', 'attr'], 'DomBinding');
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
var $1,$2;
var mutationObserver;
var myObserver;
var config;
var mutationHandler;
mutationHandler=(function(mutationRecords){
return smalltalk.send(mutationRecords,"_do_",[(function(each){
var temp;
temp=($(each.target).attr(self._attr()));;
;
return smalltalk.send(self,"_is_",[temp]);
})]);
});
$1=smalltalk.send((smalltalk.HTMLCanvas || HTMLCanvas),"_isWebkit",[]);
if(smalltalk.assert($1)){
mutationObserver=smalltalk.send(window,"_WebKitMutationObserver",[]);
mutationObserver;
} else {
mutationObserver=smalltalk.send(window,"_MutationObserver",[]);
mutationObserver;
};
myObserver= new mutationObserver(mutationHandler);;
;
config={attributes: true, attributeFilter:[self._attr()] };
;
smalltalk.send(smalltalk.send(smalltalk.send(self["@selector"],"_asJQuery",[]),"_toArray",[]),"_do_",[(function(each){
return smalltalk.send(myObserver,"_observe_with_",[each,config]);
})]);
$2=self;
return $2;
}
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
fn: function (aSelector,anAttr){
var self=this;
self["@attr"]=anAttr;
self["@selector"]=aSelector;
return self}
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
smalltalk.send(smalltalk.send(self["@selector"],"_asJQuery",[]),"_attr_to_",[self["@attr"],self["@val"]]);
return self}
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


smalltalk.addClass('ContentString', smalltalk.VarString, ['selector'], 'DomBinding');
smalltalk.addMethod(
"_attr",
smalltalk.method({
selector: "attr",
fn: function (){
var self=this;
var $1;
$1=self["@attr"];
return $1;
}
}),
smalltalk.ContentString);

smalltalk.addMethod(
"_dBind",
smalltalk.method({
selector: "dBind",
fn: function (){
var self=this;
var $1,$2;
var mutationObserver;
var myObserver;
var config;
var mutationHandler;
mutationHandler=(function(mutationRecords){
return smalltalk.send(mutationRecords,"_do_",[(function(each){
var temp;
temp=($(each.target).prop("textContent"));;
;
return smalltalk.send(self,"_is_",[temp]);
})]);
});
$1=smalltalk.send((smalltalk.HTMLCanvas || HTMLCanvas),"_isWebkit",[]);
if(smalltalk.assert($1)){
mutationObserver=smalltalk.send(window,"_WebKitMutationObserver",[]);
mutationObserver;
} else {
mutationObserver=smalltalk.send(window,"_MutationObserver",[]);
mutationObserver;
};
myObserver= new mutationObserver(mutationHandler);;
;
config={characterData: true };
;
smalltalk.send(smalltalk.send(smalltalk.send(self["@selector"],"_asJQuery",[]),"_toArray",[]),"_do_",[(function(each){
return smalltalk.send(myObserver,"_observe_with_",[each,config]);
})]);
$2=self;
return $2;
}
}),
smalltalk.ContentString);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
fn: function (){
var self=this;
var $1;
$1=self["@selector"];
return $1;
}
}),
smalltalk.ContentString);

smalltalk.addMethod(
"_selector_",
smalltalk.method({
selector: "selector:",
fn: function (aSelector){
var self=this;
self["@selector"]=aSelector;
return self}
}),
smalltalk.ContentString);

smalltalk.addMethod(
"_string",
smalltalk.method({
selector: "string",
fn: function (){
var self=this;
var $1;
$1=self["@val"];
return $1;
}
}),
smalltalk.ContentString);

smalltalk.addMethod(
"_updateSelf",
smalltalk.method({
selector: "updateSelf",
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self["@selector"],"_asJQuery",[]),"_prop_to_",["textContent",self["@val"]]);
return self}
}),
smalltalk.ContentString);


smalltalk.addMethod(
"_selector_",
smalltalk.method({
selector: "selector:",
fn: function (aSelector){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_new",[]),"_selector_",[aSelector]);
return $1;
}
}),
smalltalk.ContentString.klass);


smalltalk.addClass('StyleAttrString', smalltalk.VarString, ['selector', 'attr'], 'DomBinding');
smalltalk.addMethod(
"_attr",
smalltalk.method({
selector: "attr",
fn: function (){
var self=this;
var $1;
$1=self["@attr"];
return $1;
}
}),
smalltalk.StyleAttrString);

smalltalk.addMethod(
"_dBind",
smalltalk.method({
selector: "dBind",
fn: function (){
var self=this;
var $1,$2;
var mutationObserver;
var myObserver;
var config;
var mutationHandler;
mutationHandler=(function(mutationRecords){
return smalltalk.send(mutationRecords,"_do_",[(function(each){
var temp;
temp=($(each.target).css(self._attr()));;
;
return smalltalk.send(self,"_is_",[temp]);
})]);
});
$1=smalltalk.send((smalltalk.HTMLCanvas || HTMLCanvas),"_isWebkit",[]);
if(smalltalk.assert($1)){
mutationObserver=smalltalk.send(window,"_WebKitMutationObserver",[]);
mutationObserver;
} else {
mutationObserver=smalltalk.send(window,"_MutationObserver",[]);
mutationObserver;
};
myObserver= new mutationObserver(mutationHandler);;
;
config={attributes: true, attributeFilter:[self._attr()] };
;
smalltalk.send(smalltalk.send(smalltalk.send(self["@selector"],"_asJQuery",[]),"_toArray",[]),"_do_",[(function(each){
return smalltalk.send(myObserver,"_observe_with_",[each,config]);
})]);
$2=self;
return $2;
}
}),
smalltalk.StyleAttrString);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
fn: function (){
var self=this;
var $1;
$1=self["@selector"];
return $1;
}
}),
smalltalk.StyleAttrString);

smalltalk.addMethod(
"_selector_attr_",
smalltalk.method({
selector: "selector:attr:",
fn: function (aSelector,anAttr){
var self=this;
self["@attr"]=anAttr;
self["@selector"]=aSelector;
return self}
}),
smalltalk.StyleAttrString);

smalltalk.addMethod(
"_string",
smalltalk.method({
selector: "string",
fn: function (){
var self=this;
var $1;
$1=self["@val"];
return $1;
}
}),
smalltalk.StyleAttrString);

smalltalk.addMethod(
"_updateSelf",
smalltalk.method({
selector: "updateSelf",
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self["@selector"],"_asJQuery",[]),"_css_to_",[self["@attr"],self["@val"]]);
return self}
}),
smalltalk.StyleAttrString);


smalltalk.addMethod(
"_selector_attr_",
smalltalk.method({
selector: "selector:attr:",
fn: function (aSelector,anAttr){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_new",[]),"_selector_attr_",[aSelector,anAttr]);
return $1;
}
}),
smalltalk.StyleAttrString.klass);


