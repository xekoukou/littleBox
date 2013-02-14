smalltalk.addPackage('DomBinding', {});
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
"__and",
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
"__or",
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



smalltalk.addClass('AttrBool', smalltalk.VarBool, ['selector', 'attr'], 'DomBinding');
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
"_bool_",
smalltalk.method({
selector: "bool:",
category: 'accessing',
fn: function (aBool){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@val"]=aBool;
return self}, function($ctx1) {$ctx1.fill(self,"bool:",{aBool:aBool}, smalltalk.AttrBool)})},
args: ["aBool"],
source: "bool:aBool\x0a\x0aval:=aBool.",
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
var mutationObserver,myObserver,config,mutationHandler;
return smalltalk.withContext(function($ctx1) { var $1,$2;
mutationHandler=(function(mutationRecords){
return smalltalk.withContext(function($ctx2) {return _st(mutationRecords)._do_((function(each){
var temp;
return smalltalk.withContext(function($ctx3) {temp=_st(_st(_st(each)._target())._asJQuery())._attr_(_st(self)._attr());
temp;
return _st(self)._bool_(temp);
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
myObserver=_st((smalltalk.NativeFunction || NativeFunction))._class_value_(mutationObserver,mutationHandler);
config=_st((smalltalk.HashedCollection || HashedCollection))._new();
_st(config)._at_put_("characterData",true);
_st(config)._at_put_("attributes",true);
_st(config)._at_put_("attributeFilter",_st(_st((smalltalk.Array || Array))._new())._add_(_st(self)._attr()));
_st(_st(_st(self["@selector"])._asJQuery())._toArray())._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(myObserver)._observe_with_(each,config);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$2=self;
return $2;
}, function($ctx1) {$ctx1.fill(self,"dBind",{mutationObserver:mutationObserver,myObserver:myObserver,config:config,mutationHandler:mutationHandler}, smalltalk.AttrBool)})},
args: [],
source: "dBind\x0a|mutationObserver myObserver config mutationHandler|\x0a\x0amutationHandler:=[:mutationRecords| mutationRecords do:[:each||temp| \x0a                                 temp:=each target asJQuery attr: self attr. self bool:temp.\x0a                                        ]].\x0a\x0a(HTMLCanvas isWebkit) ifTrue:[mutationObserver:='WebKitMutationObserver'.]\x0a                                            ifFalse:[mutationObserver:='MutationObserver'.].\x0a                                            \x0a \x22mutation observer is native code, thus it is not a BlockClosure\x22\x0amyObserver:= NativeFunction class:mutationObserver value:mutationHandler.\x0a\x0aconfig:=HashedCollection new.\x0aconfig at:'characterData' put:true.\x0aconfig at:'attributes' put:true.\x0aconfig at:'attributeFilter' put: (Array new add: self attr).\x0a                       \x0aselector asJQuery toArray do: [:each| myObserver observe: each with: config.].\x0a           \x0a\x0a^self",
messageSends: ["do:", "attr:", "attr", "asJQuery", "target", "bool:", "ifTrue:ifFalse:", "isWebkit", "class:value:", "new", "at:put:", "add:", "observe:with:", "toArray"],
referencedClasses: ["HTMLCanvas", "NativeFunction", "HashedCollection", "Array"]
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
fn: function (aSelector,anAttr){
var self=this;
self["@attr"]=anAttr;
self["@selector"]=aSelector;
return self},
args: ["aSelector", "anAttr"],
source: "selector:aSelector attr: anAttr\x0a\x0aattr:=anAttr.\x0aselector:=aSelector.",
messageSends: [],
referencedClasses: []
}),
smalltalk.AttrBool);

smalltalk.addMethod(
"_updateSelf",
smalltalk.method({
selector: "updateSelf",
category: 'updating',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self["@selector"],"_asJQuery",[]),"_attr_to_",[self["@attr"],self["@val"]]);
return self},
args: [],
source: "updateSelf\x0a\x0aselector asJQuery attr:attr to: val.\x0a",
messageSends: ["attr:to:", "asJQuery"],
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


smalltalk.addClass('StyleAttrBool', smalltalk.VarBool, ['selector', 'attr'], 'DomBinding');
smalltalk.addMethod(
"_attr",
smalltalk.method({
selector: "attr",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@attr"];
return $1;
},
args: [],
source: "attr\x0a\x0a^attr",
messageSends: [],
referencedClasses: []
}),
smalltalk.StyleAttrBool);

smalltalk.addMethod(
"_bool",
smalltalk.method({
selector: "bool",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@val"];
return $1;
},
args: [],
source: "bool\x0a\x0a^val",
messageSends: [],
referencedClasses: []
}),
smalltalk.StyleAttrBool);

smalltalk.addMethod(
"_bool_",
smalltalk.method({
selector: "bool:",
category: 'accessing',
fn: function (aBool){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@val"]=aBool;
return self}, function($ctx1) {$ctx1.fill(self,"bool:",{aBool:aBool}, smalltalk.StyleAttrBool)})},
args: ["aBool"],
source: "bool:aBool\x0a\x0aval:=aBool.",
messageSends: [],
referencedClasses: []
}),
smalltalk.StyleAttrBool);

smalltalk.addMethod(
"_dBind",
smalltalk.method({
selector: "dBind",
category: 'assigning',
fn: function (){
var self=this;
var mutationObserver,myObserver,config,mutationHandler;
return smalltalk.withContext(function($ctx1) { var $1,$2;
mutationHandler=(function(mutationRecords){
return smalltalk.withContext(function($ctx2) {return _st(mutationRecords)._do_((function(each){
var temp;
return smalltalk.withContext(function($ctx3) {temp=_st(_st(_st(each)._target())._asJQuery())._css_(_st(self)._attr());
temp;
return _st(self)._bool_(temp);
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
myObserver=_st((smalltalk.NativeFunction || NativeFunction))._class_value_(mutationObserver,mutationHandler);
config=_st((smalltalk.HashedCollection || HashedCollection))._new();
_st(config)._at_put_("attributes",true);
_st(config)._at_put_("attributeFilter",_st(_st((smalltalk.Array || Array))._new())._add_(_st(self)._attr()));
_st(_st(_st(self["@selector"])._asJQuery())._toArray())._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(myObserver)._observe_with_(each,config);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$2=self;
return $2;
}, function($ctx1) {$ctx1.fill(self,"dBind",{mutationObserver:mutationObserver,myObserver:myObserver,config:config,mutationHandler:mutationHandler}, smalltalk.StyleAttrBool)})},
args: [],
source: "dBind\x0a|mutationObserver myObserver config mutationHandler|\x0a\x0amutationHandler:=[:mutationRecords| mutationRecords do:[:each||temp| \x0a                                temp:=each target asJQuery css: self attr.self bool:temp.]].\x0a\x0a(HTMLCanvas isWebkit) ifTrue:[mutationObserver:='WebKitMutationObserver'.]\x0a                                            ifFalse:[mutationObserver:='MutationObserver'.].\x0a                                            \x0a \x22mutation observer is native code, thus it is not a BlockClosure\x22\x0amyObserver:= NativeFunction class:mutationObserver value:mutationHandler.\x0a\x0aconfig:=HashedCollection new.\x0aconfig at:'attributes' put:true.\x0aconfig at:'attributeFilter' put: (Array new add: self attr).\x0a\x0a                       \x0aselector asJQuery toArray do: [:each| myObserver observe: each with: config.].\x0a           \x0a\x0a^self",
messageSends: ["do:", "css:", "attr", "asJQuery", "target", "bool:", "ifTrue:ifFalse:", "isWebkit", "class:value:", "new", "at:put:", "add:", "observe:with:", "toArray"],
referencedClasses: ["HTMLCanvas", "NativeFunction", "HashedCollection", "Array"]
}),
smalltalk.StyleAttrBool);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@selector"];
return $1;
},
args: [],
source: "selector\x0a\x0a^selector",
messageSends: [],
referencedClasses: []
}),
smalltalk.StyleAttrBool);

smalltalk.addMethod(
"_selector_attr_",
smalltalk.method({
selector: "selector:attr:",
category: 'initializing',
fn: function (aSelector,anAttr){
var self=this;
self["@attr"]=anAttr;
self["@selector"]=aSelector;
return self},
args: ["aSelector", "anAttr"],
source: "selector:aSelector attr: anAttr\x0a\x0aattr:=anAttr.\x0aselector:=aSelector.",
messageSends: [],
referencedClasses: []
}),
smalltalk.StyleAttrBool);

smalltalk.addMethod(
"_updateSelf",
smalltalk.method({
selector: "updateSelf",
category: 'updating',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self["@selector"],"_asJQuery",[]),"_css_to_",[self["@attr"],self["@val"]]);
return self},
args: [],
source: "updateSelf\x0a\x0aselector asJQuery css:attr to: val.",
messageSends: ["css:to:", "asJQuery"],
referencedClasses: []
}),
smalltalk.StyleAttrBool);


smalltalk.addMethod(
"_selector_attr_",
smalltalk.method({
selector: "selector:attr:",
category: 'instance creation',
fn: function (aSelector,anAttr){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_new",[]),"_selector_attr_",[aSelector,anAttr]);
return $1;
},
args: ["aSelector", "anAttr"],
source: "selector: aSelector attr: anAttr\x0a\x0a^ self new selector: aSelector attr: anAttr",
messageSends: ["selector:attr:", "new"],
referencedClasses: []
}),
smalltalk.StyleAttrBool.klass);


smalltalk.addClass('VarNumb', smalltalk.Var, [], 'DomBinding');
smalltalk.addMethod(
"__and",
smalltalk.method({
selector: "&",
category: 'converting',
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
return self},
args: ["anObject"],
source: "& anObject\x0a\x0a|aNumber|\x0a\x0a\x09(anObject class == self class) ifTrue:[aNumber:=anObject numb]\x0a                                                     ifFalse:[aNumber:= anObject].\x0a\x09<return self._numb() & aNumber>",
messageSends: ["ifTrue:ifFalse:", "numb", "==", "class"],
referencedClasses: []
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"__star",
smalltalk.method({
selector: "*",
category: 'arithmetic',
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
return self},
args: ["anObject"],
source: "* anObject\x0a\x0a|aNumber|\x0a\x0a\x09(anObject class == self class) ifTrue:[aNumber:=anObject numb]\x0a                                                     ifFalse:[aNumber:= anObject].\x0a\x0a\x09\x22Inlined in the Compiler\x22\x0a\x09<return self._numb() * aNumber>",
messageSends: ["ifTrue:ifFalse:", "numb", "==", "class"],
referencedClasses: []
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"__plus",
smalltalk.method({
selector: "+",
category: 'arithmetic',
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
return self},
args: ["anObject"],
source: "+ anObject\x0a\x0a|aNumber|\x0a\x0a\x09(anObject class == self class) ifTrue:[aNumber:=anObject numb]\x0a                                                     ifFalse:[aNumber:= anObject].\x0a                                                     \x0a\x09\x22Inlined in the Compiler\x22\x0a\x09<return self._numb() + aNumber>",
messageSends: ["ifTrue:ifFalse:", "numb", "==", "class"],
referencedClasses: []
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"__minus",
smalltalk.method({
selector: "-",
category: 'arithmetic',
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
return self},
args: ["anObject"],
source: "-  anObject\x0a\x0a|aNumber|\x0a\x0a\x09(anObject class == self class) ifTrue:[aNumber:=anObject numb]\x0a                                                     ifFalse:[aNumber:= anObject].\x0a\x09\x22Inlined in the Compiler\x22\x0a\x09<return self._numb() - aNumber>",
messageSends: ["ifTrue:ifFalse:", "numb", "==", "class"],
referencedClasses: []
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"__slash",
smalltalk.method({
selector: "/",
category: 'arithmetic',
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
return self},
args: ["anObject"],
source: "/ anObject\x0a\x0a|aNumber|\x0a\x0a\x09(anObject class == self class) ifTrue:[aNumber:=anObject numb]\x0a                                                     ifFalse:[aNumber:= anObject].\x0a\x09\x22Inlined in the Compiler\x22\x0a\x09<return self._numb() / aNumber>",
messageSends: ["ifTrue:ifFalse:", "numb", "==", "class"],
referencedClasses: []
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"__lt",
smalltalk.method({
selector: "<",
category: 'comparing',
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
return self},
args: ["anObject"],
source: "< anObject\x0a\x0a|aNumber|\x0a\x0a\x09(anObject class == self class) ifTrue:[aNumber:=anObject numb]\x0a                                                     ifFalse:[aNumber:= anObject].\x0a\x09\x22Inlined in the Compiler\x22\x0a\x09<return self._numb() < aNumber>",
messageSends: ["ifTrue:ifFalse:", "numb", "==", "class"],
referencedClasses: []
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"__lt_eq",
smalltalk.method({
selector: "<=",
category: 'comparing',
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
return self},
args: ["anObject"],
source: "<= anObject\x0a\x0a|aNumber|\x0a\x0a\x09(anObject class == self class) ifTrue:[aNumber:=anObject numb]\x0a                                                     ifFalse:[aNumber:= anObject].\x0a\x09\x22Inlined in the Compiler\x22\x0a\x09<return self._numb() <= aNumber>",
messageSends: ["ifTrue:ifFalse:", "numb", "==", "class"],
referencedClasses: []
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"__eq",
smalltalk.method({
selector: "=",
category: 'comparing',
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
return self},
args: ["anObject"],
source: "= anObject\x0a\x0a|aNumber|\x0a\x0a\x09(anObject class == self class) ifTrue:[aNumber:=anObject numb]\x0a                                                     ifFalse:[aNumber:= anObject].\x0a\x09aNumber isNumber ifFalse: [^false]. \x0a\x09<return Number(self._numb()) == aNumber>.",
messageSends: ["ifTrue:ifFalse:", "numb", "==", "class", "ifFalse:", "isNumber"],
referencedClasses: []
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"__gt",
smalltalk.method({
selector: ">",
category: 'comparing',
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
return self},
args: ["anObject"],
source: ">anObject\x0a\x0a|aNumber|\x0a\x0a\x09(anObject class == self class) ifTrue:[aNumber:=anObject numb]\x0a                                                     ifFalse:[aNumber:= anObject].\x0a\x09\x22Inlined in the Compiler\x22\x0a\x09<return self._numb() >> aNumber>",
messageSends: ["ifTrue:ifFalse:", "numb", "==", "class"],
referencedClasses: []
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"__gt_eq",
smalltalk.method({
selector: ">=",
category: 'comparing',
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
return self},
args: ["anObject"],
source: ">= anObject\x0a\x0a|aNumber|\x0a\x0a\x09(anObject class == self class) ifTrue:[aNumber:=anObject numb]\x0a                                                     ifFalse:[aNumber:= anObject].\x0a\x09\x22Inlined in the Compiler\x22\x0a\x09<return self._numb() >>= aNumber>",
messageSends: ["ifTrue:ifFalse:", "numb", "==", "class"],
referencedClasses: []
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"__backslash_backslash",
smalltalk.method({
selector: "\x5c\x5c",
category: 'arithmetic',
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
return self},
args: ["anObject"],
source: "\x5c\x5c anObject\x0a\x0a|aNumber|\x0a\x0a\x09(anObject class == self class) ifTrue:[aNumber:=anObject numb]\x0a                                                     ifFalse:[aNumber:= anObject].\x0a\x09<return self.numb() % aNumber>",
messageSends: ["ifTrue:ifFalse:", "numb", "==", "class"],
referencedClasses: []
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"_abs",
smalltalk.method({
selector: "abs",
category: 'arithmetic',
fn: function (){
var self=this;
var $1;
$1=Math.abs(self._numb());;
;
return $1;
},
args: [],
source: "abs\x0a\x09^ <Math.abs(self._numb());>",
messageSends: [],
referencedClasses: []
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"_asJSON",
smalltalk.method({
selector: "asJSON",
category: 'converting',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_numb",[]);
return $1;
},
args: [],
source: "asJSON\x0a\x09^self numb",
messageSends: ["numb"],
referencedClasses: []
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"_asString",
smalltalk.method({
selector: "asString",
category: 'converting',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_printString",[]);
return $1;
},
args: [],
source: "asString\x0a\x09^self printString",
messageSends: ["printString"],
referencedClasses: []
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"_atRandom",
smalltalk.method({
selector: "atRandom",
category: 'converting',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Random || Random),"_new",[]),"_next",[]),"__star",[smalltalk.send(self,"_numb",[])]),"_truncated",[]),"__plus",[(1)]);
return $1;
},
args: [],
source: "atRandom\x0a    ^(Random new next * self numb) truncated + 1",
messageSends: ["+", "truncated", "*", "numb", "next", "new"],
referencedClasses: ["Random"]
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"_even",
smalltalk.method({
selector: "even",
category: 'testing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send((0),"__eq",[smalltalk.send(smalltalk.send(self,"_numb",[]),"_\\\\",[(2)])]);
return $1;
},
args: [],
source: "even\x0a\x09^ 0 = (self numb \x5c\x5c 2)",
messageSends: ["=", "\x5c\x5c\x5c\x5c", "numb"],
referencedClasses: []
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"_isZero",
smalltalk.method({
selector: "isZero",
category: 'testing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_numb",[]),"__eq",[(0)]);
return $1;
},
args: [],
source: "isZero\x0a\x09^self numb = 0",
messageSends: ["=", "numb"],
referencedClasses: []
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"_max_",
smalltalk.method({
selector: "max:",
category: 'arithmetic',
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
return self},
args: ["anObject"],
source: "max: anObject\x0a\x0a|aNumber|\x0a\x0a\x09(anObject class == self class) ifTrue:[aNumber:=anObject numb]\x0a                                                     ifFalse:[aNumber:= anObject].\x0a\x09<return Math.max(self._numb(), aNumber);>",
messageSends: ["ifTrue:ifFalse:", "numb", "==", "class"],
referencedClasses: []
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"_min_",
smalltalk.method({
selector: "min:",
category: 'arithmetic',
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
return self},
args: ["anObject"],
source: "min: anObject\x0a\x0a|aNumber|\x0a\x0a\x09(anObject class == self class) ifTrue:[aNumber:=anObject numb]\x0a                                                     ifFalse:[aNumber:= anObject].\x0a                                                     \x0a\x09<return Math.min(self._numb(), aNumber);>",
messageSends: ["ifTrue:ifFalse:", "numb", "==", "class"],
referencedClasses: []
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"_negated",
smalltalk.method({
selector: "negated",
category: 'arithmetic',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send((0),"__minus",[smalltalk.send(self,"_numb",[])]);
return $1;
},
args: [],
source: "negated\x0a\x09^0 - self numb.",
messageSends: ["-", "numb"],
referencedClasses: []
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"_negative",
smalltalk.method({
selector: "negative",
category: 'testing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_numb",[]),"__lt",[(0)]);
return $1;
},
args: [],
source: "negative\x0a\x09\x22Answer whether the receiver is mathematically negative.\x22\x0a\x0a\x09^ self numb< 0",
messageSends: ["<", "numb"],
referencedClasses: []
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"_numb",
smalltalk.method({
selector: "numb",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@val"];
return $1;
},
args: [],
source: "numb\x0a\x0a^val",
messageSends: [],
referencedClasses: []
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"_odd",
smalltalk.method({
selector: "odd",
category: 'testing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_even",[]),"_not",[]);
return $1;
},
args: [],
source: "odd\x0a\x09^ self even not",
messageSends: ["not", "even"],
referencedClasses: []
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"_positive",
smalltalk.method({
selector: "positive",
category: 'testing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"__gt_eq",[(0)]);
return $1;
},
args: [],
source: "positive\x0a\x09\x22Answer whether the receiver is positive or equal to 0. (ST-80 protocol).\x22\x0a\x0a\x09^ self >= 0",
messageSends: [">="],
referencedClasses: []
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"_rounded",
smalltalk.method({
selector: "rounded",
category: 'converting',
fn: function (){
var self=this;
return Math.round(self._numb());;
;
return self},
args: [],
source: "rounded\x0a\x09<return Math.round(self._numb());>",
messageSends: [],
referencedClasses: []
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"_sqrt",
smalltalk.method({
selector: "sqrt",
category: 'arithmetic',
fn: function (){
var self=this;
return Math.sqrt(self._numb());
;
return self},
args: [],
source: "sqrt\x0a\x09<return Math.sqrt(self._numb())>",
messageSends: [],
referencedClasses: []
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"_squared",
smalltalk.method({
selector: "squared",
category: 'arithmetic',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_numb",[]),"__star",[smalltalk.send(self,"_numb",[])]);
return $1;
},
args: [],
source: "squared\x0a\x09^self numb * self numb",
messageSends: ["*", "numb"],
referencedClasses: []
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"_timesRepeat_",
smalltalk.method({
selector: "timesRepeat:",
category: 'enumerating',
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
return self},
args: ["aBlock"],
source: "timesRepeat: aBlock\x0a\x09| count |\x0a\x09count := 1.\x0a\x09[count > self numb] whileFalse: [\x0a\x09    aBlock value.\x0a\x09    count := count + 1]",
messageSends: ["whileFalse:", "value", "+", ">", "numb"],
referencedClasses: []
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"_to_",
smalltalk.method({
selector: "to:",
category: 'converting',
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
},
args: ["aNumber"],
source: "to: aNumber\x0a\x09| array first last count |\x0a\x09first := self truncated.\x0a\x09last := aNumber truncated + 1.\x0a\x09count := 1.\x0a\x09array := Array new.\x0a\x09(last - first) timesRepeat: [\x0a\x09    array at: count put: first.\x0a\x09    count := count + 1.\x0a\x09    first := first + 1].\x0a\x09^array",
messageSends: ["truncated", "+", "new", "timesRepeat:", "at:put:", "-"],
referencedClasses: ["Array"]
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"_to_by_",
smalltalk.method({
selector: "to:by:",
category: 'converting',
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
},
args: ["stop", "step"],
source: "to: stop by: step\x0a\x09| array value pos |\x0a\x09value := self numb.\x0a\x09array := Array new.\x0a\x09pos := 1.\x0a\x09step = 0 ifTrue: [self error: 'step must be non-zero'].\x0a\x09step < 0\x0a\x09\x09ifTrue: [[ value >= stop ] whileTrue: [\x0a\x09    \x09\x09\x09array at: pos put: value.\x0a\x09    \x09\x09\x09pos := pos + 1.\x0a\x09    \x09\x09\x09value := value + step]]\x0a\x09\x09ifFalse: [[ value <= stop ] whileTrue: [\x0a\x09    \x09\x09\x09array at: pos put: value.\x0a\x09  \x09\x09\x09pos := pos + 1.\x0a\x09    \x09\x09\x09value := value + step]].\x0a\x09^array",
messageSends: ["numb", "new", "ifTrue:", "error:", "=", "ifTrue:ifFalse:", "whileTrue:", "at:put:", "+", ">=", "<=", "<"],
referencedClasses: ["Array"]
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"_to_by_do_",
smalltalk.method({
selector: "to:by:do:",
category: 'enumerating',
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
return self},
args: ["stop", "step", "aBlock"],
source: "to: stop by: step do: aBlock\x0a\x09| value |\x0a\x09value := self numb.\x0a\x09step = 0 ifTrue: [self error: 'step must be non-zero'].\x0a\x09step < 0\x0a\x09\x09ifTrue: [[ value >= stop ] whileTrue: [\x0a\x09    \x09\x09\x09aBlock value: value.\x0a\x09    \x09\x09\x09value := value + step]]\x0a\x09\x09ifFalse: [[ value <= stop ] whileTrue: [\x0a\x09    \x09\x09\x09aBlock value: value.\x0a\x09    \x09\x09\x09value := value + step]]",
messageSends: ["numb", "ifTrue:", "error:", "=", "ifTrue:ifFalse:", "whileTrue:", "value:", "+", ">=", "<=", "<"],
referencedClasses: []
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"_to_do_",
smalltalk.method({
selector: "to:do:",
category: 'enumerating',
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
return self},
args: ["stop", "aBlock"],
source: "to: stop do: aBlock\x0a\x09\x22Evaluate aBlock for each number from self to aNumber.\x22\x0a\x09| nextValue |\x0a\x09nextValue := self numb.\x0a\x09[nextValue <= stop]\x0a\x09\x09whileTrue: \x0a\x09\x09\x09[aBlock value: nextValue.\x0a\x09\x09\x09nextValue := nextValue + 1]",
messageSends: ["numb", "whileTrue:", "value:", "+", "<="],
referencedClasses: []
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"_truncated",
smalltalk.method({
selector: "truncated",
category: 'converting',
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
},
args: [],
source: "truncated\x0a|result|\x0a\x0a    self numb >= 0 \x0a        ifTrue: [<result = Math.floor(self._numb());>]\x0a        ifFalse: [<result = (Math.floor(self._numb()* (-1)) * (-1));>].\x0a\x0a    ^ result",
messageSends: ["ifTrue:ifFalse:", ">=", "numb"],
referencedClasses: []
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"__or",
smalltalk.method({
selector: "|",
category: 'converting',
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
return self},
args: ["anObject"],
source: "| anObject\x0a\x0a|aNumber|\x0a\x0a\x09(anObject class == self class) ifTrue:[aNumber:=anObject numb]\x0a                                                     ifFalse:[aNumber:= anObject].\x0a\x09<return self._numb() | aNumber>",
messageSends: ["ifTrue:ifFalse:", "numb", "==", "class"],
referencedClasses: []
}),
smalltalk.VarNumb);



smalltalk.addClass('AttrNumb', smalltalk.VarNumb, ['selector', 'attr', 'unit'], 'DomBinding');
smalltalk.addMethod(
"_attr",
smalltalk.method({
selector: "attr",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@attr"];
return $1;
},
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
var mutationObserver,myObserver,config,mutationHandler;
return smalltalk.withContext(function($ctx1) { var $1,$2;
mutationHandler=(function(mutationRecords){
return smalltalk.withContext(function($ctx2) {return _st(mutationRecords)._do_((function(each){
var temp;
return smalltalk.withContext(function($ctx3) {temp=_st(_st(_st(each)._target())._asJQuery())._attr_(_st(self)._attr());
temp;
return _st(self)._numb_(_st(_st(temp)._copyFrom_to_((0),_st(_st(temp)._size()).__minus(_st(self["@unit"])._size())))._asNumber());
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
myObserver=_st((smalltalk.NativeFunction || NativeFunction))._class_value_(mutationObserver,mutationHandler);
config=_st((smalltalk.HashedCollection || HashedCollection))._new();
_st(config)._at_put_("characterData",true);
_st(config)._at_put_("attributes",true);
_st(config)._at_put_("attributeFilter",_st(_st((smalltalk.Array || Array))._new())._add_(_st(self)._attr()));
_st(_st(_st(self["@selector"])._asJQuery())._toArray())._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(myObserver)._observe_with_(each,config);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$2=self;
return $2;
}, function($ctx1) {$ctx1.fill(self,"dBind",{mutationObserver:mutationObserver,myObserver:myObserver,config:config,mutationHandler:mutationHandler}, smalltalk.AttrNumb)})},
args: [],
source: "dBind\x0a|mutationObserver myObserver config mutationHandler|\x0a\x0amutationHandler:=[:mutationRecords| mutationRecords do:[:each||temp|\x0a temp:=each target asJQuery attr: self attr. self numb:(temp copyFrom:0 to: temp size- unit size ) asNumber.\x0a                     ]].\x0a\x0a(HTMLCanvas isWebkit) ifTrue:[mutationObserver:='WebKitMutationObserver'.]\x0a                                            ifFalse:[mutationObserver:='MutationObserver'.].\x0a                                            \x0a \x22mutation observer is native code, thus it is not a BlockClosure\x22\x0amyObserver:= NativeFunction class:mutationObserver value:mutationHandler.\x0a\x0aconfig:=HashedCollection new.\x0aconfig at:'characterData' put:true.\x0aconfig at:'attributes' put:true.\x0aconfig at:'attributeFilter' put: (Array new add: self attr).\x0a                       \x0aselector asJQuery toArray do: [:each| myObserver observe: each with: config.].\x0a           \x0a\x0a^self",
messageSends: ["do:", "attr:", "attr", "asJQuery", "target", "numb:", "asNumber", "copyFrom:to:", "-", "size", "ifTrue:ifFalse:", "isWebkit", "class:value:", "new", "at:put:", "add:", "observe:with:", "toArray"],
referencedClasses: ["HTMLCanvas", "NativeFunction", "HashedCollection", "Array"]
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_numb",
smalltalk.method({
selector: "numb",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@val"];
return $1;
},
args: [],
source: "numb\x0a\x0a^val",
messageSends: [],
referencedClasses: []
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_numb_",
smalltalk.method({
selector: "numb:",
category: 'accessing',
fn: function (aNumb){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@val"]=aNumb;
return self}, function($ctx1) {$ctx1.fill(self,"numb:",{aNumb:aNumb}, smalltalk.AttrNumb)})},
args: ["aNumb"],
source: "numb: aNumb\x0a\x0aval:=aNumb.",
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
var $1;
$1=self["@selector"];
return $1;
},
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
fn: function (aSelector,anAttr){
var self=this;
self["@attr"]=anAttr;
self["@selector"]=aSelector;
self["@unit"]="";
return self},
args: ["aSelector", "anAttr"],
source: "selector:aSelector attr: anAttr\x0a\x0a\x0aattr:=anAttr.\x0aselector:=aSelector.\x0aunit:=''.",
messageSends: [],
referencedClasses: []
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_selector_attr_unit_",
smalltalk.method({
selector: "selector:attr:unit:",
category: 'initializing',
fn: function (aSelector,anAttr,aUnit){
var self=this;
self["@attr"]=anAttr;
self["@selector"]=aSelector;
self["@unit"]=aUnit;
return self},
args: ["aSelector", "anAttr", "aUnit"],
source: "selector:aSelector attr: anAttr unit:aUnit\x0a\x0a\x0aattr:=anAttr.\x0aselector:=aSelector.\x0aunit:=aUnit.",
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
"_updateSelf",
smalltalk.method({
selector: "updateSelf",
category: 'assigning',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self["@selector"],"_asJQuery",[]),"_attr_to_",[self["@attr"],smalltalk.send(smalltalk.send(self["@val"],"_asString",[]),"__comma",[self["@unit"]])]);
return self},
args: [],
source: "updateSelf\x0a\x0aselector asJQuery attr:attr to: val asString,unit.\x0a",
messageSends: ["attr:to:", ",", "asString", "asJQuery"],
referencedClasses: []
}),
smalltalk.AttrNumb);


smalltalk.addMethod(
"_selector_attr_",
smalltalk.method({
selector: "selector:attr:",
category: 'instance creation',
fn: function (aSelector,anAttr){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_new",[]),"_selector_attr_",[aSelector,anAttr]);
return $1;
},
args: ["aSelector", "anAttr"],
source: "selector: aSelector attr: anAttr\x0a^ self new selector: aSelector attr: anAttr.",
messageSends: ["selector:attr:", "new"],
referencedClasses: []
}),
smalltalk.AttrNumb.klass);

smalltalk.addMethod(
"_selector_attr_unit_",
smalltalk.method({
selector: "selector:attr:unit:",
category: 'instance creation',
fn: function (aSelector,anAttr,aUnit){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_new",[]),"_selector_attr_unit_",[aSelector,anAttr,aUnit]);
return $1;
},
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


smalltalk.addClass('StyleAttrNumb', smalltalk.VarNumb, ['selector', 'attr', 'unit'], 'DomBinding');
smalltalk.addMethod(
"_attr",
smalltalk.method({
selector: "attr",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@attr"];
return $1;
},
args: [],
source: "attr\x0a\x0a^attr",
messageSends: [],
referencedClasses: []
}),
smalltalk.StyleAttrNumb);

smalltalk.addMethod(
"_dBind",
smalltalk.method({
selector: "dBind",
category: 'assigning',
fn: function (){
var self=this;
var mutationObserver,myObserver,config,mutationHandler;
return smalltalk.withContext(function($ctx1) { var $1,$2;
mutationHandler=(function(mutationRecords){
return smalltalk.withContext(function($ctx2) {return _st(mutationRecords)._do_((function(each){
var temp;
return smalltalk.withContext(function($ctx3) {temp=_st(_st(_st(each)._target())._asJQuery())._css_(_st(self)._attr());
temp;
return _st(self)._numb_(_st(_st(temp)._copyFrom_to_((0),_st(_st(temp)._size()).__minus(_st(self["@unit"])._size())))._asNumber());
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
myObserver=_st((smalltalk.NativeFunction || NativeFunction))._class_value_(mutationObserver,mutationHandler);
config=_st((smalltalk.HashedCollection || HashedCollection))._new();
_st(config)._at_put_("attributes",true);
_st(config)._at_put_("attributeFilter",_st(_st((smalltalk.Array || Array))._new())._add_(_st(self)._attr()));
_st(_st(_st(self["@selector"])._asJQuery())._toArray())._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(myObserver)._observe_with_(each,config);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$2=self;
return $2;
}, function($ctx1) {$ctx1.fill(self,"dBind",{mutationObserver:mutationObserver,myObserver:myObserver,config:config,mutationHandler:mutationHandler}, smalltalk.StyleAttrNumb)})},
args: [],
source: "dBind\x0a|mutationObserver myObserver config mutationHandler|\x0a\x0amutationHandler:=[:mutationRecords| mutationRecords do:[:each||temp| \x0atemp:=each target asJQuery css: self attr.self numb:(temp copyFrom:0 to: temp size- unit size ) asNumber.]].\x0a\x0a(HTMLCanvas isWebkit) ifTrue:[mutationObserver:='WebKitMutationObserver'.]\x0a                                            ifFalse:[mutationObserver:='MutationObserver'.].\x0a                                            \x0a \x22mutation observer is native code, thus it is not a BlockClosure\x22\x0amyObserver:= NativeFunction class:mutationObserver value:mutationHandler.\x0a\x0aconfig:=HashedCollection new.\x0aconfig at:'attributes' put:true.\x0aconfig at:'attributeFilter' put: (Array new add: self attr).\x0a\x0a\x0aselector asJQuery toArray do: [:each| myObserver observe: each with: config.].\x0a           \x0a\x0a^self",
messageSends: ["do:", "css:", "attr", "asJQuery", "target", "numb:", "asNumber", "copyFrom:to:", "-", "size", "ifTrue:ifFalse:", "isWebkit", "class:value:", "new", "at:put:", "add:", "observe:with:", "toArray"],
referencedClasses: ["HTMLCanvas", "NativeFunction", "HashedCollection", "Array"]
}),
smalltalk.StyleAttrNumb);

smalltalk.addMethod(
"_numb",
smalltalk.method({
selector: "numb",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@val"];
return $1;
},
args: [],
source: "numb\x0a\x0a^val",
messageSends: [],
referencedClasses: []
}),
smalltalk.StyleAttrNumb);

smalltalk.addMethod(
"_numb_",
smalltalk.method({
selector: "numb:",
category: 'accessing',
fn: function (aNumb){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@val"]=aNumb;
return self}, function($ctx1) {$ctx1.fill(self,"numb:",{aNumb:aNumb}, smalltalk.StyleAttrNumb)})},
args: ["aNumb"],
source: "numb:aNumb\x0a\x0aval:=aNumb",
messageSends: [],
referencedClasses: []
}),
smalltalk.StyleAttrNumb);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@selector"];
return $1;
},
args: [],
source: "selector\x0a\x0a^selector",
messageSends: [],
referencedClasses: []
}),
smalltalk.StyleAttrNumb);

smalltalk.addMethod(
"_selector_attr_",
smalltalk.method({
selector: "selector:attr:",
category: 'initializing',
fn: function (aSelector,anAttr){
var self=this;
self["@attr"]=anAttr;
self["@selector"]=aSelector;
self["@unit"]="";
return self},
args: ["aSelector", "anAttr"],
source: "selector:aSelector attr: anAttr\x0a\x0a\x0aattr:=anAttr.\x0aselector:=aSelector.\x0aunit:=''.",
messageSends: [],
referencedClasses: []
}),
smalltalk.StyleAttrNumb);

smalltalk.addMethod(
"_selector_attr_unit_",
smalltalk.method({
selector: "selector:attr:unit:",
category: 'initializing',
fn: function (aSelector,anAttr,aUnit){
var self=this;
self["@attr"]=anAttr;
self["@selector"]=aSelector;
self["@unit"]=aUnit;
return self},
args: ["aSelector", "anAttr", "aUnit"],
source: "selector:aSelector attr: anAttr unit:aUnit\x0a\x0a\x0aattr:=anAttr.\x0aselector:=aSelector.\x0aunit:=aUnit.",
messageSends: [],
referencedClasses: []
}),
smalltalk.StyleAttrNumb);

smalltalk.addMethod(
"_updateSelf",
smalltalk.method({
selector: "updateSelf",
category: 'assigning',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self["@selector"],"_asJQuery",[]),"_css_to_",[self["@attr"],smalltalk.send(smalltalk.send(self["@val"],"_asString",[]),"__comma",[self["@unit"]])]);
return self},
args: [],
source: "updateSelf\x0a\x0a\x0aselector asJQuery css:attr to: val asString,unit.",
messageSends: ["css:to:", ",", "asString", "asJQuery"],
referencedClasses: []
}),
smalltalk.StyleAttrNumb);


smalltalk.addMethod(
"_selector_attr_",
smalltalk.method({
selector: "selector:attr:",
category: 'instance creation',
fn: function (aSelector,anAttr){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_new",[]),"_selector_attr_",[aSelector,anAttr]);
return $1;
},
args: ["aSelector", "anAttr"],
source: "selector: aSelector attr: anAttr\x0a\x0a^ self new selector: aSelector attr: anAttr.",
messageSends: ["selector:attr:", "new"],
referencedClasses: []
}),
smalltalk.StyleAttrNumb.klass);

smalltalk.addMethod(
"_selector_attr_unit_",
smalltalk.method({
selector: "selector:attr:unit:",
category: 'instance creation',
fn: function (aSelector,anAttr,aUnit){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_new",[]),"_selector_attr_unit_",[aSelector,anAttr,aUnit]);
return $1;
},
args: ["aSelector", "anAttr", "aUnit"],
source: "selector: aSelector attr: anAttr unit:aUnit\x0a\x0a^ self new selector: aSelector attr: anAttr unit:aUnit",
messageSends: ["selector:attr:unit:", "new"],
referencedClasses: []
}),
smalltalk.StyleAttrNumb.klass);


smalltalk.addClass('VarString', smalltalk.Var, [], 'DomBinding');
smalltalk.addMethod(
"__comma",
smalltalk.method({
selector: ",",
category: 'copying',
fn: function (aString){
var self=this;
return self._string() + aString;
;
return self},
args: ["aString"],
source: ", aString\x0a\x09<return self._string() + aString>",
messageSends: [],
referencedClasses: []
}),
smalltalk.VarString);

smalltalk.addMethod(
"__lt",
smalltalk.method({
selector: "<",
category: 'comparing',
fn: function (aString){
var self=this;
return String(self._string()) < aString._asString();
;
return self},
args: ["aString"],
source: "< aString\x0a\x09<return String(self._string()) < aString._asString()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.VarString);

smalltalk.addMethod(
"__lt_eq",
smalltalk.method({
selector: "<=",
category: 'comparing',
fn: function (aString){
var self=this;
return String(self._string()) <= aString._asString();
;
return self},
args: ["aString"],
source: "<= aString\x0a\x09<return String(self._string()) <= aString._asString()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.VarString);

smalltalk.addMethod(
"__eq",
smalltalk.method({
selector: "=",
category: 'comparing',
fn: function (aString){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(aString,"_class",[]),"__eq",[smalltalk.send(smalltalk.send(self,"_string",[]),"_class",[])]);
if(! smalltalk.assert($1)){
return false;
};
return String(self._string()) === String(aString);
;
return self},
args: ["aString"],
source: "= aString\x0a\x09aString class = self string class ifFalse: [^false].\x0a\x09<return String(self._string()) === String(aString)>",
messageSends: ["ifFalse:", "=", "class", "string"],
referencedClasses: []
}),
smalltalk.VarString);

smalltalk.addMethod(
"__eq_eq",
smalltalk.method({
selector: "==",
category: 'comparing',
fn: function (aString){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_string",[]),"__eq",[aString]);
return $1;
},
args: ["aString"],
source: "== aString\x0a\x09^self string = aString",
messageSends: ["=", "string"],
referencedClasses: []
}),
smalltalk.VarString);

smalltalk.addMethod(
"__gt",
smalltalk.method({
selector: ">",
category: 'comparing',
fn: function (aString){
var self=this;
return String(self._string()) > aString._asString();
;
return self},
args: ["aString"],
source: "> aString\x0a\x09<return String(self._string()) >> aString._asString()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.VarString);

smalltalk.addMethod(
"__gt_eq",
smalltalk.method({
selector: ">=",
category: 'comparing',
fn: function (aString){
var self=this;
return String(self._string()) >= aString._asString();
;
return self},
args: ["aString"],
source: ">= aString\x0a\x09<return String(self._string()) >>= aString._asString()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.VarString);

smalltalk.addMethod(
"_asJSON",
smalltalk.method({
selector: "asJSON",
category: 'converting',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_string",[]);
return $1;
},
args: [],
source: "asJSON\x0a\x09^self string.",
messageSends: ["string"],
referencedClasses: []
}),
smalltalk.VarString);

smalltalk.addMethod(
"_asJavaScriptSelector",
smalltalk.method({
selector: "asJavaScriptSelector",
category: 'converting',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self,"_string",[]),"_asSelector",[]),"_replace_with_",["^_",""]),"_replace_with_",["_.*",""]);
return $1;
},
args: [],
source: "asJavaScriptSelector\x0a\x09^(self string asSelector replace: '^_' with: '') replace: '_.*' with: ''.",
messageSends: ["replace:with:", "asSelector", "string"],
referencedClasses: []
}),
smalltalk.VarString);

smalltalk.addMethod(
"_asJavascript",
smalltalk.method({
selector: "asJavascript",
category: 'converting',
fn: function (){
var self=this;

		if(self._string().search(/^[a-zA-Z0-9_:.$ ]*$/) == -1)
			return "\"" + self.replace(/[\x00-\x1f"\\\x7f-\x9f]/g, function(ch){var c=ch.charCodeAt(0);return "\\x"+("0"+c.toString(16)).slice(-2)}) + "\"";
		else
			return "\"" + self._string() + "\"";
	;
;
return self},
args: [],
source: "asJavascript\x0a\x09<\x0a\x09\x09if(self._string().search(/^[a-zA-Z0-9_:.$ ]*$/) == -1)\x0a\x09\x09\x09return \x22\x5c\x22\x22 + self.replace(/[\x5cx00-\x5cx1f\x22\x5c\x5c\x5cx7f-\x5cx9f]/g, function(ch){var c=ch.charCodeAt(0);return \x22\x5c\x5cx\x22+(\x220\x22+c.toString(16)).slice(-2)}) + \x22\x5c\x22\x22;\x0a\x09\x09else\x0a\x09\x09\x09return \x22\x5c\x22\x22 + self._string() + \x22\x5c\x22\x22;\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.VarString);

smalltalk.addMethod(
"_asLowercase",
smalltalk.method({
selector: "asLowercase",
category: 'converting',
fn: function (){
var self=this;
return self._string().toLowerCase();
;
return self},
args: [],
source: "asLowercase\x0a\x09<return self._string().toLowerCase()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.VarString);

smalltalk.addMethod(
"_asNumber",
smalltalk.method({
selector: "asNumber",
category: 'converting',
fn: function (){
var self=this;
return Number(self._string());
;
return self},
args: [],
source: "asNumber\x0a\x09<return Number(self._string())>",
messageSends: [],
referencedClasses: []
}),
smalltalk.VarString);

smalltalk.addMethod(
"_asSelector",
smalltalk.method({
selector: "asSelector",
category: 'converting',
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
},
args: [],
source: "asSelector\x0a\x09\x22If you change this method, change smalltalk.convertSelector too (see js/boot.js file)\x22\x0a\x0a\x09| selector |\x0a\x09selector := '_', self string.\x0a\x09selector := selector replace: ':' with: '_'.\x0a\x09selector := selector replace: '[+]' with: '_plus'.\x0a\x09selector := selector replace: '-' with: '_minus'.\x0a\x09selector := selector replace: '[*]' with: '_star'.\x0a\x09selector := selector replace: '[/]' with: '_slash'.\x0a\x09selector := selector replace: '>' with: '_gt'.\x0a\x09selector := selector replace: '<' with: '_lt'.\x0a\x09selector := selector replace: '=' with: '_eq'.\x0a\x09selector := selector replace: ',' with: '_comma'.\x0a\x09selector := selector replace: '[@]' with: '_at'.\x0a\x09^selector",
messageSends: [",", "string", "replace:with:"],
referencedClasses: []
}),
smalltalk.VarString);

smalltalk.addMethod(
"_asString",
smalltalk.method({
selector: "asString",
category: 'converting',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_string",[]);
return $1;
},
args: [],
source: "asString\x0a\x09^self string.",
messageSends: ["string"],
referencedClasses: []
}),
smalltalk.VarString);

smalltalk.addMethod(
"_asSymbol",
smalltalk.method({
selector: "asSymbol",
category: 'converting',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send((smalltalk.Symbol || Symbol),"_lookup_",[smalltalk.send(self,"_string",[])]);
return $1;
},
args: [],
source: "asSymbol\x0a\x09^Symbol lookup: self string.",
messageSends: ["lookup:", "string"],
referencedClasses: ["Symbol"]
}),
smalltalk.VarString);

smalltalk.addMethod(
"_asUppercase",
smalltalk.method({
selector: "asUppercase",
category: 'converting',
fn: function (){
var self=this;
return self._string().toUpperCase();
;
return self},
args: [],
source: "asUppercase\x0a\x09<return self._string().toUpperCase()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.VarString);

smalltalk.addMethod(
"_asciiValue",
smalltalk.method({
selector: "asciiValue",
category: 'accessing',
fn: function (){
var self=this;
return self._string().charCodeAt(0);;
;
return self},
args: [],
source: "asciiValue\x0a\x09<return self._string().charCodeAt(0);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.VarString);

smalltalk.addMethod(
"_at_ifAbsent_",
smalltalk.method({
selector: "at:ifAbsent:",
category: 'accessing',
fn: function (anIndex,aBlock){
var self=this;
return String(self._string()).charAt(anIndex - 1) || aBlock();
;
return self},
args: ["anIndex", "aBlock"],
source: "at: anIndex ifAbsent: aBlock\x0a\x09<return String(self._string()).charAt(anIndex - 1) || aBlock()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.VarString);

smalltalk.addMethod(
"_copyFrom_to_",
smalltalk.method({
selector: "copyFrom:to:",
category: 'copying',
fn: function (anIndex,anotherIndex){
var self=this;
return self._string().substring(anIndex - 1, anotherIndex);
;
return self},
args: ["anIndex", "anotherIndex"],
source: "copyFrom: anIndex to: anotherIndex\x0a\x09<return self._string().substring(anIndex - 1, anotherIndex)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.VarString);

smalltalk.addMethod(
"_do_",
smalltalk.method({
selector: "do:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
for(var i=0;i<self._string().length;i++){aBlock(self._string().charAt(i));};
;
return self},
args: ["aBlock"],
source: "do: aBlock\x0a\x09<for(var i=0;i<self._string().length;i++){aBlock(self._string().charAt(i));}>",
messageSends: [],
referencedClasses: []
}),
smalltalk.VarString);

smalltalk.addMethod(
"_escaped",
smalltalk.method({
selector: "escaped",
category: 'accessing',
fn: function (){
var self=this;
return escape(self._string());
;
return self},
args: [],
source: "escaped\x0a\x09<return escape(self._string())>",
messageSends: [],
referencedClasses: []
}),
smalltalk.VarString);

smalltalk.addMethod(
"_includesSubString_",
smalltalk.method({
selector: "includesSubString:",
category: 'testing',
fn: function (subString){
var self=this;
 return self._string().indexOf(subString) != -1 ;
;
return self},
args: ["subString"],
source: "includesSubString: subString\x0a\x09< return self._string().indexOf(subString) != -1 >",
messageSends: [],
referencedClasses: []
}),
smalltalk.VarString);

smalltalk.addMethod(
"_isString",
smalltalk.method({
selector: "isString",
category: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isString\x0a\x09^true",
messageSends: [],
referencedClasses: []
}),
smalltalk.VarString);

smalltalk.addMethod(
"_join_",
smalltalk.method({
selector: "join:",
category: 'split join',
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
},
args: ["aCollection"],
source: "join: aCollection \x0a\x09^ String\x0a\x09\x09streamContents: [:stream | aCollection\x0a\x09\x09\x09\x09do: [:each | stream nextPutAll: each asString] \x0a\x09\x09\x09\x09separatedBy: [stream nextPutAll: self string]]",
messageSends: ["streamContents:", "do:separatedBy:", "nextPutAll:", "asString", "string"],
referencedClasses: ["String"]
}),
smalltalk.VarString);

smalltalk.addMethod(
"_lineIndicesDo_",
smalltalk.method({
selector: "lineIndicesDo:",
category: 'split join',
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
},
args: ["aBlock"],
source: "lineIndicesDo: aBlock\x0a\x09\x22execute aBlock with 3 arguments for each line:\x0a\x09- start index of line\x0a\x09- end index of line without line delimiter\x0a\x09- end index of line including line delimiter(s) CR, LF or CRLF\x22\x0a\x09\x0a\x09| cr lf start sz nextLF nextCR |\x0a\x09start := 1.\x0a\x09sz := self size.\x0a\x09cr := String cr.\x0a\x09nextCR := self indexOf: cr startingAt: 1.\x0a\x09lf := String lf.\x0a\x09nextLF := self indexOf: lf startingAt: 1.\x0a\x09[ start <= sz ] whileTrue: [\x0a\x09\x09(nextLF = 0 and: [ nextCR = 0 ])\x0a\x09\x09\x09ifTrue: [ \x22No more CR, nor LF, the string is over\x22\x0a\x09\x09\x09\x09\x09aBlock value: start value: sz value: sz.\x0a\x09\x09\x09\x09\x09^self string].\x0a\x09\x09(nextCR = 0 or: [ 0 < nextLF and: [ nextLF < nextCR ] ])\x0a\x09\x09\x09ifTrue: [ \x22Found a LF\x22\x0a\x09\x09\x09\x09\x09aBlock value: start value: nextLF - 1 value: nextLF.\x0a\x09\x09\x09\x09\x09start := 1 + nextLF.\x0a\x09\x09\x09\x09\x09nextLF := self indexOf: lf startingAt: start ]\x0a\x09\x09\x09ifFalse: [ 1 + nextCR = nextLF\x0a\x09\x09\x09\x09ifTrue: [ \x22Found a CR-LF pair\x22\x0a\x09\x09\x09\x09\x09aBlock value: start value: nextCR - 1 value: nextLF.\x0a\x09\x09\x09\x09\x09start := 1 + nextLF.\x0a\x09\x09\x09\x09\x09nextCR := self indexOf: cr startingAt: start.\x0a\x09\x09\x09\x09\x09nextLF := self indexOf: lf startingAt: start ]\x0a\x09\x09\x09\x09ifFalse: [ \x22Found a CR\x22\x0a\x09\x09\x09\x09\x09aBlock value: start value: nextCR - 1 value: nextCR.\x0a\x09\x09\x09\x09\x09start := 1 + nextCR.\x0a\x09\x09\x09\x09\x09nextCR := self indexOf: cr startingAt: start ]]]",
messageSends: ["size", "cr", "indexOf:startingAt:", "lf", "whileTrue:", "ifTrue:", "value:value:value:", "string", "and:", "=", "ifTrue:ifFalse:", "-", "+", "or:", "<", "<="],
referencedClasses: ["String"]
}),
smalltalk.VarString);

smalltalk.addMethod(
"_lineNumber_",
smalltalk.method({
selector: "lineNumber:",
category: 'split join',
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
},
args: ["anIndex"],
source: "lineNumber: anIndex\x0a\x09\x22Answer a string containing the characters in the given line number.\x22\x0a\x0a\x09| lineCount |\x0a\x09lineCount := 0.\x0a\x09self lineIndicesDo: [:start :endWithoutDelimiters :end |\x0a\x09\x09(lineCount := lineCount + 1) = anIndex ifTrue: [^self copyFrom: start to: endWithoutDelimiters]].\x0a\x09^nil",
messageSends: ["lineIndicesDo:", "ifTrue:", "copyFrom:to:", "=", "+"],
referencedClasses: []
}),
smalltalk.VarString);

smalltalk.addMethod(
"_lines",
smalltalk.method({
selector: "lines",
category: 'split join',
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
},
args: [],
source: "lines\x0a\x09\x22Answer an array of lines composing this receiver without the line ending delimiters.\x22\x0a\x0a\x09| lines |\x0a\x09lines := Array new.\x0a\x09self linesDo: [:aLine | lines add: aLine].\x0a\x09^lines",
messageSends: ["new", "linesDo:", "add:"],
referencedClasses: ["Array"]
}),
smalltalk.VarString);

smalltalk.addMethod(
"_linesDo_",
smalltalk.method({
selector: "linesDo:",
category: 'split join',
fn: function (aBlock){
var self=this;
smalltalk.send(self,"_lineIndicesDo_",[(function(start,endWithoutDelimiters,end){
return smalltalk.send(aBlock,"_value_",[smalltalk.send(self,"_copyFrom_to_",[start,endWithoutDelimiters])]);
})]);
return self},
args: ["aBlock"],
source: "linesDo: aBlock\x0a\x09\x22Execute aBlock with each line in this string. The terminating line\x0a\x09delimiters CR, LF or CRLF pairs are not included in what is passed to aBlock\x22\x0a\x0a\x09self lineIndicesDo: [:start :endWithoutDelimiters :end |\x0a\x09\x09aBlock value: (self copyFrom: start to: endWithoutDelimiters)]",
messageSends: ["lineIndicesDo:", "value:", "copyFrom:to:"],
referencedClasses: []
}),
smalltalk.VarString);

smalltalk.addMethod(
"_match_",
smalltalk.method({
selector: "match:",
category: 'regular expressions',
fn: function (aRegexp){
var self=this;
return self._string().search(aRegexp) != -1;
;
return self},
args: ["aRegexp"],
source: "match: aRegexp\x0a\x09<return self._string().search(aRegexp) != -1>",
messageSends: [],
referencedClasses: []
}),
smalltalk.VarString);

smalltalk.addMethod(
"_matchesOf_",
smalltalk.method({
selector: "matchesOf:",
category: 'regular expressions',
fn: function (aRegularExpression){
var self=this;
return self._string().match(aRegularExpression);
;
return self},
args: ["aRegularExpression"],
source: "matchesOf: aRegularExpression\x0a      <return self._string().match(aRegularExpression)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.VarString);

smalltalk.addMethod(
"_printNl",
smalltalk.method({
selector: "printNl",
category: 'printing',
fn: function (){
var self=this;
console.log(self._string());
;
return self},
args: [],
source: "printNl\x0a\x09<console.log(self._string())>",
messageSends: [],
referencedClasses: []
}),
smalltalk.VarString);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
category: 'printing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send("'","__comma",[smalltalk.send(self,"_string",[])]),"__comma",["'"]);
return $1;
},
args: [],
source: "printString\x0a\x09^'''', self string, ''''",
messageSends: [",", "string"],
referencedClasses: []
}),
smalltalk.VarString);

smalltalk.addMethod(
"_replace_with_",
smalltalk.method({
selector: "replace:with:",
category: 'regular expressions',
fn: function (aString,anotherString){
var self=this;
var $1;
$1=smalltalk.send(self,"_replaceRegexp_with_",[smalltalk.send((smalltalk.RegularExpression || RegularExpression),"_fromString_flag_",[aString,"g"]),anotherString]);
return $1;
},
args: ["aString", "anotherString"],
source: "replace: aString with: anotherString\x0a\x09^self replaceRegexp: (RegularExpression fromString: aString flag: 'g') with: anotherString",
messageSends: ["replaceRegexp:with:", "fromString:flag:"],
referencedClasses: ["RegularExpression"]
}),
smalltalk.VarString);

smalltalk.addMethod(
"_replaceRegexp_with_",
smalltalk.method({
selector: "replaceRegexp:with:",
category: 'regular expressions',
fn: function (aRegexp,aString){
var self=this;
return self._string().replace(aRegexp, aString);
;
return self},
args: ["aRegexp", "aString"],
source: "replaceRegexp: aRegexp with: aString\x0a\x09<return self._string().replace(aRegexp, aString)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.VarString);

smalltalk.addMethod(
"_reversed",
smalltalk.method({
selector: "reversed",
category: 'converting',
fn: function (){
var self=this;
return self._string().split("").reverse().join("");
;
return self},
args: [],
source: "reversed\x0a\x09<return self._string().split(\x22\x22).reverse().join(\x22\x22)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.VarString);

smalltalk.addMethod(
"_size",
smalltalk.method({
selector: "size",
category: 'accessing',
fn: function (){
var self=this;
return self._string().length;
;
return self},
args: [],
source: "size\x0a\x09<return self._string().length>",
messageSends: [],
referencedClasses: []
}),
smalltalk.VarString);

smalltalk.addMethod(
"_string",
smalltalk.method({
selector: "string",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@val"];
return $1;
},
args: [],
source: "string\x0a\x0a^val",
messageSends: [],
referencedClasses: []
}),
smalltalk.VarString);

smalltalk.addMethod(
"_tokenize_",
smalltalk.method({
selector: "tokenize:",
category: 'converting',
fn: function (aString){
var self=this;
return self._string().split(aString);
;
return self},
args: ["aString"],
source: "tokenize: aString\x0a\x09<return self._string().split(aString)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.VarString);

smalltalk.addMethod(
"_trimBoth",
smalltalk.method({
selector: "trimBoth",
category: 'regular expressions',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_trimBoth_",["\x5cs"]);
return $1;
},
args: [],
source: "trimBoth\x0a\x09^self trimBoth: '\x5cs'",
messageSends: ["trimBoth:"],
referencedClasses: []
}),
smalltalk.VarString);

smalltalk.addMethod(
"_trimBoth_",
smalltalk.method({
selector: "trimBoth:",
category: 'regular expressions',
fn: function (separators){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_trimLeft_",[separators]),"_trimRight_",[separators]);
return $1;
},
args: ["separators"],
source: "trimBoth: separators\x0a\x0a\x09^(self trimLeft: separators) trimRight: separators",
messageSends: ["trimRight:", "trimLeft:"],
referencedClasses: []
}),
smalltalk.VarString);

smalltalk.addMethod(
"_trimLeft",
smalltalk.method({
selector: "trimLeft",
category: 'regular expressions',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_trimLeft_",["\x5cs"]);
return $1;
},
args: [],
source: "trimLeft\x0a\x09^self trimLeft: '\x5cs'",
messageSends: ["trimLeft:"],
referencedClasses: []
}),
smalltalk.VarString);

smalltalk.addMethod(
"_trimLeft_",
smalltalk.method({
selector: "trimLeft:",
category: 'regular expressions',
fn: function (separators){
var self=this;
var $1;
$1=smalltalk.send(self,"_replaceRegexp_with_",[smalltalk.send((smalltalk.RegularExpression || RegularExpression),"_fromString_flag_",[smalltalk.send(smalltalk.send("^[","__comma",[separators]),"__comma",["]+"]),"g"]),""]);
return $1;
},
args: ["separators"],
source: "trimLeft: separators\x0a\x0a\x09^self replaceRegexp: (RegularExpression fromString: '^[', separators, ']+' flag: 'g') with: ''",
messageSends: ["replaceRegexp:with:", "fromString:flag:", ","],
referencedClasses: ["RegularExpression"]
}),
smalltalk.VarString);

smalltalk.addMethod(
"_trimRight",
smalltalk.method({
selector: "trimRight",
category: 'regular expressions',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_trimRight_",["\x5cs"]);
return $1;
},
args: [],
source: "trimRight\x0a\x09^self trimRight: '\x5cs'",
messageSends: ["trimRight:"],
referencedClasses: []
}),
smalltalk.VarString);

smalltalk.addMethod(
"_trimRight_",
smalltalk.method({
selector: "trimRight:",
category: 'regular expressions',
fn: function (separators){
var self=this;
var $1;
$1=smalltalk.send(self,"_replaceRegexp_with_",[smalltalk.send((smalltalk.RegularExpression || RegularExpression),"_fromString_flag_",[smalltalk.send(smalltalk.send("[","__comma",[separators]),"__comma",["]+$"]),"g"]),""]);
return $1;
},
args: ["separators"],
source: "trimRight: separators\x0a\x0a\x09^self replaceRegexp: (RegularExpression fromString: '[', separators, ']+$' flag: 'g') with: ''",
messageSends: ["replaceRegexp:with:", "fromString:flag:", ","],
referencedClasses: ["RegularExpression"]
}),
smalltalk.VarString);

smalltalk.addMethod(
"_unescaped",
smalltalk.method({
selector: "unescaped",
category: 'accessing',
fn: function (){
var self=this;
return unescape(self);
;
return self},
args: [],
source: "unescaped\x0a\x09<return unescape(self)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.VarString);

smalltalk.addMethod(
"_withIndexDo_",
smalltalk.method({
selector: "withIndexDo:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
for(var i=0;i<self._string().length;i++){aBlock(self._string().charAt(i), i+1);};
;
return self},
args: ["aBlock"],
source: "withIndexDo: aBlock\x0a\x09<for(var i=0;i<self._string().length;i++){aBlock(self._string().charAt(i), i+1);}>",
messageSends: [],
referencedClasses: []
}),
smalltalk.VarString);


smalltalk.addMethod(
"_cr",
smalltalk.method({
selector: "cr",
category: 'accessing',
fn: function (){
var self=this;
return '\r';
;
return self},
args: [],
source: "cr\x0a\x09<return '\x5cr'>",
messageSends: [],
referencedClasses: []
}),
smalltalk.VarString.klass);

smalltalk.addMethod(
"_crlf",
smalltalk.method({
selector: "crlf",
category: 'accessing',
fn: function (){
var self=this;
return '\r\n';
;
return self},
args: [],
source: "crlf\x0a\x09<return '\x5cr\x5cn'>",
messageSends: [],
referencedClasses: []
}),
smalltalk.VarString.klass);

smalltalk.addMethod(
"_fromCharCode_",
smalltalk.method({
selector: "fromCharCode:",
category: 'instance creation',
fn: function (anInteger){
var self=this;
return String.fromCharCode(anInteger);
;
return self},
args: ["anInteger"],
source: "fromCharCode: anInteger\x0a\x09<return String.fromCharCode(anInteger)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.VarString.klass);

smalltalk.addMethod(
"_fromString_",
smalltalk.method({
selector: "fromString:",
category: 'instance creation',
fn: function (aString){
var self=this;
return new self.fn(aString);
;
return self},
args: ["aString"],
source: "fromString: aString\x0a\x09    <return new self.fn(aString)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.VarString.klass);

smalltalk.addMethod(
"_lf",
smalltalk.method({
selector: "lf",
category: 'accessing',
fn: function (){
var self=this;
return '\n';
;
return self},
args: [],
source: "lf\x0a\x09<return '\x5cn'>",
messageSends: [],
referencedClasses: []
}),
smalltalk.VarString.klass);

smalltalk.addMethod(
"_space",
smalltalk.method({
selector: "space",
category: 'accessing',
fn: function (){
var self=this;
return ' ';
;
return self},
args: [],
source: "space\x0a\x09<return ' '>",
messageSends: [],
referencedClasses: []
}),
smalltalk.VarString.klass);

smalltalk.addMethod(
"_streamClass",
smalltalk.method({
selector: "streamClass",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=(smalltalk.StringStream || StringStream);
return $1;
},
args: [],
source: "streamClass\x0a\x09    ^StringStream",
messageSends: [],
referencedClasses: ["StringStream"]
}),
smalltalk.VarString.klass);

smalltalk.addMethod(
"_streamContents_",
smalltalk.method({
selector: "streamContents:",
category: 'instance creation',
fn: function (blockWithArg){
var self=this;
var $1;
var stream;
stream=smalltalk.send(smalltalk.send(self,"_streamClass",[]),"_on_",[smalltalk.send((smalltalk.String || String),"_new",[])]);
smalltalk.send(blockWithArg,"_value_",[stream]);
$1=smalltalk.send(stream,"_contents",[]);
return $1;
},
args: ["blockWithArg"],
source: "streamContents: blockWithArg\x0a\x09|stream|\x0a\x09stream := (self streamClass on: String new).\x0a\x09blockWithArg value: stream.\x0a\x09^ stream contents",
messageSends: ["on:", "new", "streamClass", "value:", "contents"],
referencedClasses: ["String"]
}),
smalltalk.VarString.klass);

smalltalk.addMethod(
"_tab",
smalltalk.method({
selector: "tab",
category: 'accessing',
fn: function (){
var self=this;
return '\t';
;
return self},
args: [],
source: "tab\x0a\x09<return '\x5ct'>",
messageSends: [],
referencedClasses: []
}),
smalltalk.VarString.klass);

smalltalk.addMethod(
"_value_",
smalltalk.method({
selector: "value:",
category: 'instance creation',
fn: function (aUTFCharCode){
var self=this;
return String.fromCharCode(aUTFCharCode);;
;
return self},
args: ["aUTFCharCode"],
source: "value: aUTFCharCode\x0a\x0a\x09<return String.fromCharCode(aUTFCharCode);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.VarString.klass);


smalltalk.addClass('AttrString', smalltalk.VarString, ['selector', 'attr'], 'DomBinding');
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
var mutationObserver,myObserver,config,mutationHandler;
return smalltalk.withContext(function($ctx1) { var $1,$2;
mutationHandler=(function(mutationRecords){
return smalltalk.withContext(function($ctx2) {return _st(mutationRecords)._do_((function(each){
var temp;
return smalltalk.withContext(function($ctx3) {temp=_st(_st(_st(each)._target())._asJQuery())._attr_(_st(self)._attr());
temp;
return _st(self)._string_(temp);
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
myObserver=_st((smalltalk.NativeFunction || NativeFunction))._class_value_(mutationObserver,mutationHandler);
config=_st((smalltalk.HashedCollection || HashedCollection))._new();
_st(config)._at_put_("attributes",true);
_st(config)._at_put_("attributeFilter",_st(_st((smalltalk.Array || Array))._new())._add_(_st(self)._attr()));
_st(_st(_st(self["@selector"])._asJQuery())._toArray())._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(myObserver)._observe_with_(each,config);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$2=self;
return $2;
}, function($ctx1) {$ctx1.fill(self,"dBind",{mutationObserver:mutationObserver,myObserver:myObserver,config:config,mutationHandler:mutationHandler}, smalltalk.AttrString)})},
args: [],
source: "dBind\x0a|mutationObserver myObserver config mutationHandler|\x0a\x0amutationHandler:=[:mutationRecords| mutationRecords do:[:each||temp| \x0atemp:=each target asJQuery attr: self attr. self string:temp.\x0a                                      ]].\x0a(HTMLCanvas isWebkit) ifTrue:[mutationObserver:='WebKitMutationObserver'.]\x0a                                            ifFalse:[mutationObserver:='MutationObserver'.].\x0a                                            \x0a \x22mutation observer is native code, thus it is not a BlockClosure\x22\x0amyObserver:= NativeFunction class:mutationObserver value:mutationHandler.\x0a\x0aconfig:=HashedCollection new.\x0aconfig at:'attributes' put:true.\x0aconfig at:'attributeFilter' put: (Array new add: self attr).\x0a\x0a                  \x0aselector asJQuery toArray do: [:each| myObserver observe: each with: config.].\x0a           \x0a\x0a^self",
messageSends: ["do:", "attr:", "attr", "asJQuery", "target", "string:", "ifTrue:ifFalse:", "isWebkit", "class:value:", "new", "at:put:", "add:", "observe:with:", "toArray"],
referencedClasses: ["HTMLCanvas", "NativeFunction", "HashedCollection", "Array"]
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
fn: function (aSelector,anAttr){
var self=this;
self["@attr"]=anAttr;
self["@selector"]=aSelector;
return self},
args: ["aSelector", "anAttr"],
source: "selector:aSelector attr: anAttr\x0a\x0a\x0aattr:=anAttr.\x0aselector:=aSelector.",
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
"_string_",
smalltalk.method({
selector: "string:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@val"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"string:",{aString:aString}, smalltalk.AttrString)})},
args: ["aString"],
source: "string: aString\x0a\x0aval:=aString",
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
smalltalk.send(smalltalk.send(self["@selector"],"_asJQuery",[]),"_attr_to_",[self["@attr"],self["@val"]]);
return self},
args: [],
source: "updateSelf\x0a\x0aselector asJQuery attr:attr to: val.\x0a",
messageSends: ["attr:to:", "asJQuery"],
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


smalltalk.addClass('ContentString', smalltalk.VarString, ['selector'], 'DomBinding');
smalltalk.addMethod(
"_attr",
smalltalk.method({
selector: "attr",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@attr"];
return $1;
},
args: [],
source: "attr\x0a\x0a^attr",
messageSends: [],
referencedClasses: []
}),
smalltalk.ContentString);

smalltalk.addMethod(
"_dBind",
smalltalk.method({
selector: "dBind",
category: 'assigning',
fn: function (){
var self=this;
var mutationObserver,myObserver,config,mutationHandler;
return smalltalk.withContext(function($ctx1) { var $1,$2;
mutationHandler=(function(mutationRecords){
return smalltalk.withContext(function($ctx2) {return _st(mutationRecords)._do_((function(each){
var temp;
return smalltalk.withContext(function($ctx3) {temp=_st(_st(_st(each)._target())._asJQuery())._prop_("textContent");
temp;
return _st(self)._string_(temp);
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
myObserver=_st((smalltalk.NativeFunction || NativeFunction))._class_value_(mutationObserver,mutationHandler);
config=_st((smalltalk.HashedCollection || HashedCollection))._new();
_st(config)._at_put_("characterData",true);
_st(_st(_st(self["@selector"])._asJQuery())._toArray())._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(myObserver)._observe_with_(each,config);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$2=self;
return $2;
}, function($ctx1) {$ctx1.fill(self,"dBind",{mutationObserver:mutationObserver,myObserver:myObserver,config:config,mutationHandler:mutationHandler}, smalltalk.ContentString)})},
args: [],
source: "dBind\x0a|mutationObserver myObserver config mutationHandler|\x0a\x0amutationHandler:=[:mutationRecords| mutationRecords do:[:each||temp| \x0a                                  temp:=each target asJQuery prop: 'textContent'. self string:temp. \x0a                                    ]].\x0a(HTMLCanvas isWebkit) ifTrue:[mutationObserver:='WebKitMutationObserver'.]\x0a                                            ifFalse:[mutationObserver:='MutationObserver'.].\x0a                                            \x0a \x22mutation observer is native code, thus it is not a BlockClosure\x22\x0amyObserver:= NativeFunction class:mutationObserver value:mutationHandler.\x0a\x0aconfig:=HashedCollection new.\x0aconfig at:'characterData' put:true.\x0a\x0a                       \x0aselector asJQuery toArray do: [:each| myObserver observe: each with: config.].\x0a           \x0a\x0a^self",
messageSends: ["do:", "prop:", "asJQuery", "target", "string:", "ifTrue:ifFalse:", "isWebkit", "class:value:", "new", "at:put:", "observe:with:", "toArray"],
referencedClasses: ["HTMLCanvas", "NativeFunction", "HashedCollection"]
}),
smalltalk.ContentString);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@selector"];
return $1;
},
args: [],
source: "selector\x0a\x0a^selector",
messageSends: [],
referencedClasses: []
}),
smalltalk.ContentString);

smalltalk.addMethod(
"_selector_",
smalltalk.method({
selector: "selector:",
category: 'initializing',
fn: function (aSelector){
var self=this;
self["@selector"]=aSelector;
return self},
args: ["aSelector"],
source: "selector:aSelector\x0a\x0aselector:=aSelector.\x0a",
messageSends: [],
referencedClasses: []
}),
smalltalk.ContentString);

smalltalk.addMethod(
"_string",
smalltalk.method({
selector: "string",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@val"];
return $1;
},
args: [],
source: "string\x0a\x0a^val",
messageSends: [],
referencedClasses: []
}),
smalltalk.ContentString);

smalltalk.addMethod(
"_string_",
smalltalk.method({
selector: "string:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@val"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"string:",{aString:aString}, smalltalk.ContentString)})},
args: ["aString"],
source: "string: aString\x0a\x0aval:=aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.ContentString);

smalltalk.addMethod(
"_updateSelf",
smalltalk.method({
selector: "updateSelf",
category: 'assigning',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self["@selector"],"_asJQuery",[]),"_prop_to_",["textContent",self["@val"]]);
return self},
args: [],
source: "updateSelf\x0a\x0aselector asJQuery prop:'textContent' to: val.\x0a",
messageSends: ["prop:to:", "asJQuery"],
referencedClasses: []
}),
smalltalk.ContentString);


smalltalk.addMethod(
"_selector_",
smalltalk.method({
selector: "selector:",
category: 'instance creation',
fn: function (aSelector){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_new",[]),"_selector_",[aSelector]);
return $1;
},
args: ["aSelector"],
source: "selector: aSelector \x0a\x0a^ self new selector: aSelector.",
messageSends: ["selector:", "new"],
referencedClasses: []
}),
smalltalk.ContentString.klass);


smalltalk.addClass('StyleAttrString', smalltalk.VarString, ['selector', 'attr'], 'DomBinding');
smalltalk.addMethod(
"_attr",
smalltalk.method({
selector: "attr",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@attr"];
return $1;
},
args: [],
source: "attr\x0a\x0a^attr",
messageSends: [],
referencedClasses: []
}),
smalltalk.StyleAttrString);

smalltalk.addMethod(
"_dBind",
smalltalk.method({
selector: "dBind",
category: 'assigning',
fn: function (){
var self=this;
var mutationObserver,myObserver,config,mutationHandler;
return smalltalk.withContext(function($ctx1) { var $1,$2;
mutationHandler=(function(mutationRecords){
return smalltalk.withContext(function($ctx2) {return _st(mutationRecords)._do_((function(each){
var temp;
return smalltalk.withContext(function($ctx3) {temp=_st(_st(each)._target())._css_(_st(self)._attr());
temp;
return _st(self)._string_(temp);
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
myObserver=_st((smalltalk.NativeFunction || NativeFunction))._class_value_(mutationObserver,mutationHandler);
config=_st((smalltalk.HashedCollection || HashedCollection))._new();
_st(config)._at_put_("attributes",true);
_st(config)._at_put_("attributeFilter",_st(_st((smalltalk.Array || Array))._new())._add_(_st(self)._attr()));
_st(_st(_st(self["@selector"])._asJQuery())._toArray())._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(myObserver)._observe_with_(each,config);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$2=self;
return $2;
}, function($ctx1) {$ctx1.fill(self,"dBind",{mutationObserver:mutationObserver,myObserver:myObserver,config:config,mutationHandler:mutationHandler}, smalltalk.StyleAttrString)})},
args: [],
source: "dBind\x0a|mutationObserver myObserver config mutationHandler|\x0a\x0amutationHandler:=[:mutationRecords| mutationRecords do:[:each||temp| \x0a                               temp:=each target css: self attr.self string:temp.]].\x0a(HTMLCanvas isWebkit) ifTrue:[mutationObserver:='WebKitMutationObserver'.]\x0a                                            ifFalse:[mutationObserver:='MutationObserver'.].\x0a                                            \x0a \x22mutation observer is native code, thus it is not a BlockClosure\x22\x0amyObserver:= NativeFunction class:mutationObserver value:mutationHandler.\x0a\x0aconfig:=HashedCollection new.\x0aconfig at:'attributes' put:true.\x0aconfig at:'attributeFilter' put: (Array new add: self attr).\x0a\x0a                       \x0aselector asJQuery toArray do: [:each| myObserver observe: each with: config.].\x0a           \x0a\x0a^self",
messageSends: ["do:", "css:", "attr", "target", "string:", "ifTrue:ifFalse:", "isWebkit", "class:value:", "new", "at:put:", "add:", "observe:with:", "toArray", "asJQuery"],
referencedClasses: ["HTMLCanvas", "NativeFunction", "HashedCollection", "Array"]
}),
smalltalk.StyleAttrString);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@selector"];
return $1;
},
args: [],
source: "selector\x0a\x0a^selector",
messageSends: [],
referencedClasses: []
}),
smalltalk.StyleAttrString);

smalltalk.addMethod(
"_selector_attr_",
smalltalk.method({
selector: "selector:attr:",
category: 'initializing',
fn: function (aSelector,anAttr){
var self=this;
self["@attr"]=anAttr;
self["@selector"]=aSelector;
return self},
args: ["aSelector", "anAttr"],
source: "selector:aSelector attr: anAttr\x0a\x0a\x0aattr:=anAttr.\x0aselector:=aSelector.",
messageSends: [],
referencedClasses: []
}),
smalltalk.StyleAttrString);

smalltalk.addMethod(
"_string",
smalltalk.method({
selector: "string",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@val"];
return $1;
},
args: [],
source: "string\x0a\x0a^val",
messageSends: [],
referencedClasses: []
}),
smalltalk.StyleAttrString);

smalltalk.addMethod(
"_string_",
smalltalk.method({
selector: "string:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@val"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"string:",{aString:aString}, smalltalk.StyleAttrString)})},
args: ["aString"],
source: "string: aString\x0a\x0aval:=aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.StyleAttrString);

smalltalk.addMethod(
"_updateSelf",
smalltalk.method({
selector: "updateSelf",
category: 'assigning',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self["@selector"],"_asJQuery",[]),"_css_to_",[self["@attr"],self["@val"]]);
return self},
args: [],
source: "updateSelf\x0a\x0a\x0aselector asJQuery css:attr to: val.\x0a ",
messageSends: ["css:to:", "asJQuery"],
referencedClasses: []
}),
smalltalk.StyleAttrString);


smalltalk.addMethod(
"_selector_attr_",
smalltalk.method({
selector: "selector:attr:",
category: 'instance creation',
fn: function (aSelector,anAttr){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_new",[]),"_selector_attr_",[aSelector,anAttr]);
return $1;
},
args: ["aSelector", "anAttr"],
source: "selector: aSelector attr: anAttr\x0a\x0a^ self new selector: aSelector attr: anAttr",
messageSends: ["selector:attr:", "new"],
referencedClasses: []
}),
smalltalk.StyleAttrString.klass);


