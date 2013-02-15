smalltalk.addPackage('DomBinding', {});
smalltalk.addClass('Var', smalltalk.Object, ['val'], 'DomBinding');
smalltalk.addMethod(
"_is_",
smalltalk.method({
selector: "is:",
category: 'assigning',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(anObject)._class()).__eq_eq(_st(self)._class());
if(smalltalk.assert($1)){
self["@val"]=_st(anObject)._val();
self["@val"];
} else {
self["@val"]=anObject;
self["@val"];
};
_st(self)._updateSelf();
return self}, function($ctx1) {$ctx1.fill(self,"is:",{anObject:anObject}, smalltalk.Var)})},
args: ["anObject"],
source: "is: anObject\x0a \x22not assigning the reference of the object to the variable.\x0a changing the object that is already referenced by the varriable\x22\x0a\x0a\x09(anObject class == self class) ifTrue:[val:=anObject val]\x0a                                                     ifFalse:[ val:=anObject.].\x0a                                                     \x0a   self updateSelf.",
messageSends: ["ifTrue:ifFalse:", "val", "==", "class", "updateSelf"],
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@val"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"val",{}, smalltalk.Var)})},
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
fn: function (aSelector,anAttr){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._new())._selector_attr_(aSelector,anAttr);
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector:attr:",{aSelector:aSelector,anAttr:anAttr}, smalltalk.Var.klass)})},
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
fn: function (aSelector,anAttr){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._new())._selector_styleAttr_(aSelector,anAttr);
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector:styleAttr:",{aSelector:aSelector,anAttr:anAttr}, smalltalk.Var.klass)})},
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
var aBoolean;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
$1=_st(_st(anObject)._class()).__eq_eq(_st(self)._class());
if(smalltalk.assert($1)){
aBoolean=_st(anObject)._bool();
aBoolean;
} else {
aBoolean=anObject;
aBoolean;
};
$2=_st(_st(self)._bool()).__eq_eq(true);
if(smalltalk.assert($2)){
$3=aBoolean;
return $3;
} else {
return false;
};
return self}, function($ctx1) {$ctx1.fill(self,"&",{anObject:anObject,aBoolean:aBoolean}, smalltalk.VarBool)})},
args: ["anObject"],
source: "& anObject\x0a\x0a|aBoolean|\x0a\x0a\x09(anObject class == self class) ifTrue:[aBoolean:=anObject bool]\x0a                                       \x09\x09              ifFalse:[aBoolean:= anObject].\x0a \x09(self bool == true) ifTrue:[^ aBoolean]\x0a      \x09\x09\x09\x09\x09\x09\x09\x09\x09ifFalse:[^false]\x0a",
messageSends: ["ifTrue:ifFalse:", "bool", "==", "class"],
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
return smalltalk.withContext(function($ctx1) { 
var aBoolean;
if(anObject._class() == self._class()) 
	{aBoolean = anObject._bool()}
    else{aBoolean = anObject}
if(! aBoolean._isBoolean || ! aBoolean._isBoolean()) {
        	return false;
            }
	return Boolean(self._bool() == true) == aBoolean;
return self}, function($ctx1) {$ctx1.fill(self,"=",{anObject:anObject}, smalltalk.VarBool)})},
args: ["anObject"],
source: "= anObject\x0a\x0a<\x0avar aBoolean;\x0aif(anObject._class() == self._class()) \x0a\x09{aBoolean = anObject._bool()}\x0a    else{aBoolean = anObject}\x0aif(! aBoolean._isBoolean || ! aBoolean._isBoolean()) {\x0a        \x09return false;\x0a            }\x0a\x09return Boolean(self._bool() == true) == aBoolean>",
messageSends: [],
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self).__eq(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"==",{anObject:anObject}, smalltalk.VarBool)})},
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
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=_st(_st(self)._bool()).__eq(true);
$1=_st($2)._ifTrue_ifFalse_(aBlock,(function(){
return smalltalk.withContext(function($ctx2) {return false;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"and:",{aBlock:aBlock}, smalltalk.VarBool)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@val"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"bool",{}, smalltalk.VarBool)})},
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
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=_st(self)._bool();
$1=_st($2)._ifTrue_ifFalse_((function(){
return smalltalk.withContext(function($ctx2) {}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifFalse:",{aBlock:aBlock}, smalltalk.VarBool)})},
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
fn: function (aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=_st(self)._bool();
$1=_st($2)._ifTrue_ifFalse_(anotherBlock,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifFalse:ifTrue:",{aBlock:aBlock,anotherBlock:anotherBlock}, smalltalk.VarBool)})},
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
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=_st(self)._bool();
$1=_st($2)._ifTrue_ifFalse_(aBlock,(function(){
return smalltalk.withContext(function($ctx2) {}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifTrue:",{aBlock:aBlock}, smalltalk.VarBool)})},
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
fn: function (aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
	    if(self._bool() == true) {
		return aBlock();
	    } else {
		return anotherBlock();
	    }
	;
return self}, function($ctx1) {$ctx1.fill(self,"ifTrue:ifFalse:",{aBlock:aBlock,anotherBlock:anotherBlock}, smalltalk.VarBool)})},
args: ["aBlock", "anotherBlock"],
source: "ifTrue: aBlock ifFalse: anotherBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09<\x0a\x09    if(self._bool() == true) {\x0a\x09\x09return aBlock();\x0a\x09    } else {\x0a\x09\x09return anotherBlock();\x0a\x09    }\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.VarBool);

smalltalk.addMethod(
"_isBoolean",
smalltalk.method({
selector: "isBoolean",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"isBoolean",{}, smalltalk.VarBool)})},
args: [],
source: "isBoolean\x0a\x0a^true",
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._bool()).__eq(false);
return $1;
}, function($ctx1) {$ctx1.fill(self,"not",{}, smalltalk.VarBool)})},
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
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=_st(_st(self)._bool()).__eq(true);
$1=_st($2)._ifTrue_ifFalse_((function(){
return smalltalk.withContext(function($ctx2) {return true;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"or:",{aBlock:aBlock}, smalltalk.VarBool)})},
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
return smalltalk.withContext(function($ctx1) { 
	    if(self._bool() == true) {
		return true;
	    } else {
		return aBoolean;
	    }
	;
return self}, function($ctx1) {$ctx1.fill(self,"|",{aBoolean:aBoolean}, smalltalk.VarBool)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@attr"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"attr",{}, smalltalk.AttrBool)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@val"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"bool",{}, smalltalk.AttrBool)})},
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
myObserver=_st((smalltalk.NativeFunction || NativeFunction))._constructor_value_(mutationObserver,mutationHandler);
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
source: "dBind\x0a|mutationObserver myObserver config mutationHandler|\x0a\x0amutationHandler:=[:mutationRecords| mutationRecords do:[:each||temp| \x0a                                 temp:=each target asJQuery attr: self attr. self bool:temp.\x0a                                        ]].\x0a\x0a(HTMLCanvas isWebkit) ifTrue:[mutationObserver:='WebKitMutationObserver'.]\x0a                                            ifFalse:[mutationObserver:='MutationObserver'.].\x0a                                            \x0a \x22mutation observer is native code, thus it is not a BlockClosure\x22\x0amyObserver:= NativeFunction constructor: mutationObserver value: mutationHandler.\x0a\x0aconfig:=HashedCollection new.\x0aconfig at:'characterData' put:true.\x0aconfig at:'attributes' put:true.\x0aconfig at:'attributeFilter' put: (Array new add: self attr).\x0a                       \x0aselector asJQuery toArray do: [:each| myObserver observe: each with: config.].\x0a           \x0a\x0a^self",
messageSends: ["do:", "attr:", "attr", "asJQuery", "target", "bool:", "ifTrue:ifFalse:", "isWebkit", "constructor:value:", "new", "at:put:", "add:", "observe:with:", "toArray"],
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@selector"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector",{}, smalltalk.AttrBool)})},
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
return smalltalk.withContext(function($ctx1) { self["@attr"]=anAttr;
self["@selector"]=aSelector;
return self}, function($ctx1) {$ctx1.fill(self,"selector:attr:",{aSelector:aSelector,anAttr:anAttr}, smalltalk.AttrBool)})},
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
return smalltalk.withContext(function($ctx1) { _st(_st(self["@selector"])._asJQuery())._attr_to_(self["@attr"],self["@val"]);
return self}, function($ctx1) {$ctx1.fill(self,"updateSelf",{}, smalltalk.AttrBool)})},
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
fn: function (aSelector,anAttr){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._new())._selector_attr_(aSelector,anAttr);
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector:attr:",{aSelector:aSelector,anAttr:anAttr}, smalltalk.AttrBool.klass)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@attr"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"attr",{}, smalltalk.StyleAttrBool)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@val"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"bool",{}, smalltalk.StyleAttrBool)})},
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
myObserver=_st((smalltalk.NativeFunction || NativeFunction))._constructor_value_(mutationObserver,mutationHandler);
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
source: "dBind\x0a|mutationObserver myObserver config mutationHandler|\x0a\x0amutationHandler:=[:mutationRecords| mutationRecords do:[:each||temp| \x0a                                temp:=each target asJQuery css: self attr.self bool:temp.]].\x0a\x0a(HTMLCanvas isWebkit) ifTrue:[mutationObserver:='WebKitMutationObserver'.]\x0a                                            ifFalse:[mutationObserver:='MutationObserver'.].\x0a                                            \x0a \x22mutation observer is native code, thus it is not a BlockClosure\x22\x0amyObserver:= NativeFunction constructor: mutationObserver value: mutationHandler.\x0a\x0aconfig:=HashedCollection new.\x0aconfig at:'attributes' put:true.\x0aconfig at:'attributeFilter' put: (Array new add: self attr).\x0a\x0a                       \x0aselector asJQuery toArray do: [:each| myObserver observe: each with: config.].\x0a           \x0a\x0a^self",
messageSends: ["do:", "css:", "attr", "asJQuery", "target", "bool:", "ifTrue:ifFalse:", "isWebkit", "constructor:value:", "new", "at:put:", "add:", "observe:with:", "toArray"],
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@selector"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector",{}, smalltalk.StyleAttrBool)})},
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
return smalltalk.withContext(function($ctx1) { self["@attr"]=anAttr;
self["@selector"]=aSelector;
return self}, function($ctx1) {$ctx1.fill(self,"selector:attr:",{aSelector:aSelector,anAttr:anAttr}, smalltalk.StyleAttrBool)})},
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
return smalltalk.withContext(function($ctx1) { _st(_st(self["@selector"])._asJQuery())._css_to_(self["@attr"],self["@val"]);
return self}, function($ctx1) {$ctx1.fill(self,"updateSelf",{}, smalltalk.StyleAttrBool)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._new())._selector_attr_(aSelector,anAttr);
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector:attr:",{aSelector:aSelector,anAttr:anAttr}, smalltalk.StyleAttrBool.klass)})},
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
return smalltalk.withContext(function($ctx1) { var aNumber;
if(anObject._class() == self._class()) 
	{aNumber = anObject._numbl()}
    else{aNumber = anObject}
	return self._numb() & aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"&",{anObject:anObject}, smalltalk.VarNumb)})},
args: ["anObject"],
source: "& anObject\x0a                                                     \x0a<var aNumber;\x0aif(anObject._class() == self._class()) \x0a\x09{aNumber = anObject._numbl()}\x0a    else{aNumber = anObject}\x0a\x09return self._numb() & aNumber>",
messageSends: [],
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
return smalltalk.withContext(function($ctx1) { var aNumber;
if(anObject._class() == self._class()) 
	{aNumber = anObject._numbl()}
    else{aNumber = anObject}
	"Inlined in the Compiler"
	return self._numb() * aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"*",{anObject:anObject}, smalltalk.VarNumb)})},
args: ["anObject"],
source: "* anObject\x0a\x0a<var aNumber;\x0aif(anObject._class() == self._class()) \x0a\x09{aNumber = anObject._numbl()}\x0a    else{aNumber = anObject}\x0a\x09\x22Inlined in the Compiler\x22\x0a\x09return self._numb() * aNumber>",
messageSends: [],
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
return smalltalk.withContext(function($ctx1) { var aNumber;
if(anObject._class() == self._class()) 
	{aNumber = anObject._numbl()}
    else{aNumber = anObject}
	"Inlined in the Compiler"
	return self._numb() + aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"+",{anObject:anObject}, smalltalk.VarNumb)})},
args: ["anObject"],
source: "+ anObject\x0a\x0a<var aNumber;\x0aif(anObject._class() == self._class()) \x0a\x09{aNumber = anObject._numbl()}\x0a    else{aNumber = anObject}\x0a\x09\x22Inlined in the Compiler\x22\x0a\x09return self._numb() + aNumber>",
messageSends: [],
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
return smalltalk.withContext(function($ctx1) { var aNumber;
if(anObject._class() == self._class()) 
	{aNumber = anObject._numbl()}
    else{aNumber = anObject}
	"Inlined in the Compiler"
	return self._numb() - aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"-",{anObject:anObject}, smalltalk.VarNumb)})},
args: ["anObject"],
source: "-  anObject\x0a\x0a<var aNumber;\x0aif(anObject._class() == self._class()) \x0a\x09{aNumber = anObject._numbl()}\x0a    else{aNumber = anObject}\x0a\x09\x22Inlined in the Compiler\x22\x0a\x09return self._numb() - aNumber>",
messageSends: [],
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
return smalltalk.withContext(function($ctx1) { var aNumber;
if(anObject._class() == self._class()) 
	{aNumber = anObject._numbl()}
    else{aNumber = anObject}
	"Inlined in the Compiler"
	return self._numb() / aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"/",{anObject:anObject}, smalltalk.VarNumb)})},
args: ["anObject"],
source: "/ anObject\x0a\x0a<var aNumber;\x0aif(anObject._class() == self._class()) \x0a\x09{aNumber = anObject._numbl()}\x0a    else{aNumber = anObject}\x0a\x09\x22Inlined in the Compiler\x22\x0a\x09return self._numb() / aNumber>",
messageSends: [],
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
return smalltalk.withContext(function($ctx1) { var aNumber;
if(anObject._class() == self._class()) 
	{aNumber = anObject._numbl()}
    else{aNumber = anObject}
	"Inlined in the Compiler"
	return self._numb() < aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"<",{anObject:anObject}, smalltalk.VarNumb)})},
args: ["anObject"],
source: "< anObject\x0a\x0a<var aNumber;\x0aif(anObject._class() == self._class()) \x0a\x09{aNumber = anObject._numbl()}\x0a    else{aNumber = anObject}\x0a\x09\x22Inlined in the Compiler\x22\x0a\x09return self._numb() < aNumber>",
messageSends: [],
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
return smalltalk.withContext(function($ctx1) { var aNumber;
if(anObject._class() == self._class()) 
	{aNumber = anObject._numbl()}
    else{aNumber = anObject}
	"Inlined in the Compiler"
	return self._numb() <= aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"<=",{anObject:anObject}, smalltalk.VarNumb)})},
args: ["anObject"],
source: "<= anObject\x0a\x0a<var aNumber;\x0aif(anObject._class() == self._class()) \x0a\x09{aNumber = anObject._numbl()}\x0a    else{aNumber = anObject}\x0a\x09\x22Inlined in the Compiler\x22\x0a\x09return self._numb() <= aNumber>",
messageSends: [],
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
return smalltalk.withContext(function($ctx1) { var aNumber;
if(anObject._class() == self._class()) 
	{aNumber = anObject._numbl()}
    else{aNumber = anObject}
    	if(! aNumber._isNumber || ! aNumber._isNumber()) {
        	return false;
        }
	return Number(self._numb()) == aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"=",{anObject:anObject}, smalltalk.VarNumb)})},
args: ["anObject"],
source: "= anObject\x0a\x0a<var aNumber;\x0aif(anObject._class() == self._class()) \x0a\x09{aNumber = anObject._numbl()}\x0a    else{aNumber = anObject}\x0a    \x09if(! aNumber._isNumber || ! aNumber._isNumber()) {\x0a        \x09return false;\x0a        }\x0a\x09return Number(self._numb()) == aNumber>",
messageSends: [],
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
return smalltalk.withContext(function($ctx1) { var aNumber;
if(anObject._class() == self._class()) 
	{aNumber = anObject._numbl()}
    else{aNumber = anObject}
	"Inlined in the Compiler"
	return self._numb() > aNumber;
return self}, function($ctx1) {$ctx1.fill(self,">",{anObject:anObject}, smalltalk.VarNumb)})},
args: ["anObject"],
source: ">anObject\x0a\x0a<var aNumber;\x0aif(anObject._class() == self._class()) \x0a\x09{aNumber = anObject._numbl()}\x0a    else{aNumber = anObject}\x0a\x09\x22Inlined in the Compiler\x22\x0a\x09return self._numb() >> aNumber>",
messageSends: [],
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
return smalltalk.withContext(function($ctx1) { var aNumber;
if(anObject._class() == self._class()) 
	{aNumber = anObject._numbl()}
    else{aNumber = anObject}
	"Inlined in the Compiler"
	return self._numb() >= aNumber;
return self}, function($ctx1) {$ctx1.fill(self,">=",{anObject:anObject}, smalltalk.VarNumb)})},
args: ["anObject"],
source: ">= anObject\x0a\x0a<var aNumber;\x0aif(anObject._class() == self._class()) \x0a\x09{aNumber = anObject._numbl()}\x0a    else{aNumber = anObject}\x0a\x09\x22Inlined in the Compiler\x22\x0a\x09return self._numb() >>= aNumber>",
messageSends: [],
referencedClasses: []
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"__backslash",
smalltalk.method({
selector: "\x5c",
category: 'arithmetic',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { var aNumber;
if(anObject._class() == self._class()) 
	{aNumber = anObject._numbl()}
    else{aNumber = anObject}
	return self.numb() % aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"\x5c\x5c",{anObject:anObject}, smalltalk.VarNumb)})},
args: ["anObject"],
source: "\x5c\x5c anObject\x0a\x0a<var aNumber;\x0aif(anObject._class() == self._class()) \x0a\x09{aNumber = anObject._numbl()}\x0a    else{aNumber = anObject}\x0a\x09return self.numb() % aNumber>",
messageSends: [],
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
return smalltalk.withContext(function($ctx1) { return Math.abs(self._numb());;
return self}, function($ctx1) {$ctx1.fill(self,"abs",{}, smalltalk.VarNumb)})},
args: [],
source: "abs\x0a\x09<return Math.abs(self._numb());>",
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._numb();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJSON",{}, smalltalk.VarNumb)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._printString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asString",{}, smalltalk.VarNumb)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(_st(_st((smalltalk.Random || Random))._new())._next()).__star(_st(self)._numb()))._truncated()).__plus((1));
return $1;
}, function($ctx1) {$ctx1.fill(self,"atRandom",{}, smalltalk.VarNumb)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((0)).__eq(_st(_st(self)._numb()).__backslash_backslash((2)));
return $1;
}, function($ctx1) {$ctx1.fill(self,"even",{}, smalltalk.VarNumb)})},
args: [],
source: "even\x0a\x09^ 0 = (self numb \x5c\x5c 2)",
messageSends: ["=", "\x5c\x5c", "numb"],
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._numb()).__eq((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"isZero",{}, smalltalk.VarNumb)})},
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
return smalltalk.withContext(function($ctx1) { var aNumber;
if(anObject._class() == self._class()) 
	{aNumber = anObject._numbl()}
    else{aNumber = anObject}
	return Math.max(self._numb(), aNumber);;
return self}, function($ctx1) {$ctx1.fill(self,"max:",{anObject:anObject}, smalltalk.VarNumb)})},
args: ["anObject"],
source: "max: anObject\x0a\x0a<var aNumber;\x0aif(anObject._class() == self._class()) \x0a\x09{aNumber = anObject._numbl()}\x0a    else{aNumber = anObject}\x0a\x09return Math.max(self._numb(), aNumber);>",
messageSends: [],
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
return smalltalk.withContext(function($ctx1) { var aNumber;
if(anObject._class() == self._class()) 
	{aNumber = anObject._numbl()}
    else{aNumber = anObject}
	return Math.min(self._numb(), aNumber);;
return self}, function($ctx1) {$ctx1.fill(self,"min:",{anObject:anObject}, smalltalk.VarNumb)})},
args: ["anObject"],
source: "min: anObject\x0a\x0a<var aNumber;\x0aif(anObject._class() == self._class()) \x0a\x09{aNumber = anObject._numbl()}\x0a    else{aNumber = anObject}\x0a\x09return Math.min(self._numb(), aNumber);>",
messageSends: [],
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((0)).__minus(_st(self)._numb());
return $1;
}, function($ctx1) {$ctx1.fill(self,"negated",{}, smalltalk.VarNumb)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._numb()).__lt((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"negative",{}, smalltalk.VarNumb)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@val"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"numb",{}, smalltalk.VarNumb)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._even())._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"odd",{}, smalltalk.VarNumb)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self).__gt_eq((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"positive",{}, smalltalk.VarNumb)})},
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
return smalltalk.withContext(function($ctx1) { return Math.round(self._numb());;
return self}, function($ctx1) {$ctx1.fill(self,"rounded",{}, smalltalk.VarNumb)})},
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
return smalltalk.withContext(function($ctx1) { return Math.sqrt(self._numb());
return self}, function($ctx1) {$ctx1.fill(self,"sqrt",{}, smalltalk.VarNumb)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._numb()).__star(_st(self)._numb());
return $1;
}, function($ctx1) {$ctx1.fill(self,"squared",{}, smalltalk.VarNumb)})},
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
return smalltalk.withContext(function($ctx1) { count=(1);
_st((function(){
return smalltalk.withContext(function($ctx2) {return _st(count).__gt(_st(self)._numb());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) {_st(aBlock)._value();
count=_st(count).__plus((1));
return count;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"timesRepeat:",{aBlock:aBlock,count:count}, smalltalk.VarNumb)})},
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
var array,first,last,count;
return smalltalk.withContext(function($ctx1) { var $1;
first=_st(self)._truncated();
last=_st(_st(aNumber)._truncated()).__plus((1));
count=(1);
array=_st((smalltalk.Array || Array))._new();
_st(_st(last).__minus(first))._timesRepeat_((function(){
return smalltalk.withContext(function($ctx2) {_st(array)._at_put_(count,first);
count=_st(count).__plus((1));
count;
first=_st(first).__plus((1));
return first;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$1=array;
return $1;
}, function($ctx1) {$ctx1.fill(self,"to:",{aNumber:aNumber,array:array,first:first,last:last,count:count}, smalltalk.VarNumb)})},
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
var array,value,pos;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
value=_st(self)._numb();
array=_st((smalltalk.Array || Array))._new();
pos=(1);
$1=_st(step).__eq((0));
if(smalltalk.assert($1)){
_st(self)._error_("step must be non-zero");
};
$2=_st(step).__lt((0));
if(smalltalk.assert($2)){
_st((function(){
return smalltalk.withContext(function($ctx2) {return _st(value).__gt_eq(stop);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {_st(array)._at_put_(pos,value);
pos=_st(pos).__plus((1));
pos;
value=_st(value).__plus(step);
return value;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
} else {
_st((function(){
return smalltalk.withContext(function($ctx2) {return _st(value).__lt_eq(stop);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {_st(array)._at_put_(pos,value);
pos=_st(pos).__plus((1));
pos;
value=_st(value).__plus(step);
return value;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
};
$3=array;
return $3;
}, function($ctx1) {$ctx1.fill(self,"to:by:",{stop:stop,step:step,array:array,value:value,pos:pos}, smalltalk.VarNumb)})},
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
var value;
return smalltalk.withContext(function($ctx1) { var $1,$2;
value=_st(self)._numb();
$1=_st(step).__eq((0));
if(smalltalk.assert($1)){
_st(self)._error_("step must be non-zero");
};
$2=_st(step).__lt((0));
if(smalltalk.assert($2)){
_st((function(){
return smalltalk.withContext(function($ctx2) {return _st(value).__gt_eq(stop);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {_st(aBlock)._value_(value);
value=_st(value).__plus(step);
return value;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
} else {
_st((function(){
return smalltalk.withContext(function($ctx2) {return _st(value).__lt_eq(stop);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {_st(aBlock)._value_(value);
value=_st(value).__plus(step);
return value;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
};
return self}, function($ctx1) {$ctx1.fill(self,"to:by:do:",{stop:stop,step:step,aBlock:aBlock,value:value}, smalltalk.VarNumb)})},
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
return smalltalk.withContext(function($ctx1) { nextValue=_st(self)._numb();
_st((function(){
return smalltalk.withContext(function($ctx2) {return _st(nextValue).__lt_eq(stop);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {_st(aBlock)._value_(nextValue);
nextValue=_st(nextValue).__plus((1));
return nextValue;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"to:do:",{stop:stop,aBlock:aBlock,nextValue:nextValue}, smalltalk.VarNumb)})},
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
return smalltalk.withContext(function($ctx1) { 
    	if(self._numb() >= 0) {
        	return Math.floor(self._numb());
        } else {
        	return Math.floor(self._numb() * (-1)) * (-1);
        };
    ;
return self}, function($ctx1) {$ctx1.fill(self,"truncated",{}, smalltalk.VarNumb)})},
args: [],
source: "truncated\x0a\x0a\x0a\x09<\x0a    \x09if(self._numb() >>= 0) {\x0a        \x09return Math.floor(self._numb());\x0a        } else {\x0a        \x09return Math.floor(self._numb() * (-1)) * (-1);\x0a        };\x0a    >",
messageSends: [],
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
return smalltalk.withContext(function($ctx1) { var aNumber;
if(anObject._class() == self._class()) 
	{aNumber = anObject._numbl()}
    else{aNumber = anObject}
	return self._numb() | aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"|",{anObject:anObject}, smalltalk.VarNumb)})},
args: ["anObject"],
source: "| anObject\x0a\x0a<var aNumber;\x0aif(anObject._class() == self._class()) \x0a\x09{aNumber = anObject._numbl()}\x0a    else{aNumber = anObject}\x0a\x09return self._numb() | aNumber>",
messageSends: [],
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@attr"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"attr",{}, smalltalk.AttrNumb)})},
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
myObserver=_st((smalltalk.NativeFunction || NativeFunction))._constructor_value_(mutationObserver,mutationHandler);
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
source: "dBind\x0a|mutationObserver myObserver config mutationHandler|\x0a\x0amutationHandler:=[:mutationRecords| mutationRecords do:[:each||temp|\x0a temp:=each target asJQuery attr: self attr. self numb:(temp copyFrom:0 to: temp size- unit size ) asNumber.\x0a                     ]].\x0a\x0a(HTMLCanvas isWebkit) ifTrue:[mutationObserver:='WebKitMutationObserver'.]\x0a                                            ifFalse:[mutationObserver:='MutationObserver'.].\x0a                                            \x0a \x22mutation observer is native code, thus it is not a BlockClosure\x22\x0amyObserver:= NativeFunction constructor: mutationObserver value: mutationHandler.\x0a\x0aconfig:=HashedCollection new.\x0aconfig at:'characterData' put:true.\x0aconfig at:'attributes' put:true.\x0aconfig at:'attributeFilter' put: (Array new add: self attr).\x0a                       \x0aselector asJQuery toArray do: [:each| myObserver observe: each with: config.].\x0a           \x0a\x0a^self",
messageSends: ["do:", "attr:", "attr", "asJQuery", "target", "numb:", "asNumber", "copyFrom:to:", "-", "size", "ifTrue:ifFalse:", "isWebkit", "constructor:value:", "new", "at:put:", "add:", "observe:with:", "toArray"],
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@val"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"numb",{}, smalltalk.AttrNumb)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@selector"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector",{}, smalltalk.AttrNumb)})},
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
return smalltalk.withContext(function($ctx1) { self["@attr"]=anAttr;
self["@selector"]=aSelector;
self["@unit"]="";
return self}, function($ctx1) {$ctx1.fill(self,"selector:attr:",{aSelector:aSelector,anAttr:anAttr}, smalltalk.AttrNumb)})},
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
return smalltalk.withContext(function($ctx1) { self["@attr"]=anAttr;
self["@selector"]=aSelector;
self["@unit"]=aUnit;
return self}, function($ctx1) {$ctx1.fill(self,"selector:attr:unit:",{aSelector:aSelector,anAttr:anAttr,aUnit:aUnit}, smalltalk.AttrNumb)})},
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
fn: function (aSelector,anAttr){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@attr"]=anAttr;
self["@selector"]=aSelector;
self["@unit"]="";
return self}, function($ctx1) {$ctx1.fill(self,"selector:styleAttr:",{aSelector:aSelector,anAttr:anAttr}, smalltalk.AttrNumb)})},
args: ["aSelector", "anAttr"],
source: "selector:aSelector styleAttr: anAttr\x0a\x0aattr:=anAttr.\x0aselector:=aSelector.\x0aunit:=''.",
messageSends: [],
referencedClasses: []
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_selector_styleAttr_unit_",
smalltalk.method({
selector: "selector:styleAttr:unit:",
category: 'initializing',
fn: function (aSelector,anAttr,aUnit){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@attr"]=anAttr;
self["@selector"]=aSelector;
self["@unit"]=aUnit;
return self}, function($ctx1) {$ctx1.fill(self,"selector:styleAttr:unit:",{aSelector:aSelector,anAttr:anAttr,aUnit:aUnit}, smalltalk.AttrNumb)})},
args: ["aSelector", "anAttr", "aUnit"],
source: "selector:aSelector styleAttr: anAttr unit:aUnit\x0a\x0aattr:=anAttr.\x0aselector:=aSelector.\x0aunit:=aUnit.",
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
return smalltalk.withContext(function($ctx1) { _st(_st(self["@selector"])._asJQuery())._attr_to_(self["@attr"],_st(_st(self["@val"])._asString()).__comma(self["@unit"]));
return self}, function($ctx1) {$ctx1.fill(self,"updateSelf",{}, smalltalk.AttrNumb)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._new())._selector_attr_(aSelector,anAttr);
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector:attr:",{aSelector:aSelector,anAttr:anAttr}, smalltalk.AttrNumb.klass)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._new())._selector_attr_unit_(aSelector,anAttr,aUnit);
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector:attr:unit:",{aSelector:aSelector,anAttr:anAttr,aUnit:aUnit}, smalltalk.AttrNumb.klass)})},
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
fn: function (aSelector,anAttr,aUnit){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._new())._selector_styleAttr_unit_(aSelector,anAttr,aUnit);
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector:styleAttr:unit:",{aSelector:aSelector,anAttr:anAttr,aUnit:aUnit}, smalltalk.AttrNumb.klass)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@attr"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"attr",{}, smalltalk.StyleAttrNumb)})},
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
myObserver=_st((smalltalk.NativeFunction || NativeFunction))._constructor_value_(mutationObserver,mutationHandler);
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
source: "dBind\x0a|mutationObserver myObserver config mutationHandler|\x0a\x0amutationHandler:=[:mutationRecords| mutationRecords do:[:each||temp| \x0atemp:=each target asJQuery css: self attr.self numb:(temp copyFrom:0 to: temp size- unit size ) asNumber.]].\x0a\x0a(HTMLCanvas isWebkit) ifTrue:[mutationObserver:='WebKitMutationObserver'.]\x0a                                            ifFalse:[mutationObserver:='MutationObserver'.].\x0a                                            \x0a \x22mutation observer is native code, thus it is not a BlockClosure\x22\x0amyObserver:= NativeFunction constructor: mutationObserver value: mutationHandler.\x0a\x0aconfig:=HashedCollection new.\x0aconfig at:'attributes' put:true.\x0aconfig at:'attributeFilter' put: (Array new add: self attr).\x0a\x0a\x0aselector asJQuery toArray do: [:each| myObserver observe: each with: config.].\x0a           \x0a\x0a^self",
messageSends: ["do:", "css:", "attr", "asJQuery", "target", "numb:", "asNumber", "copyFrom:to:", "-", "size", "ifTrue:ifFalse:", "isWebkit", "constructor:value:", "new", "at:put:", "add:", "observe:with:", "toArray"],
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@val"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"numb",{}, smalltalk.StyleAttrNumb)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@selector"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector",{}, smalltalk.StyleAttrNumb)})},
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
return smalltalk.withContext(function($ctx1) { self["@attr"]=anAttr;
self["@selector"]=aSelector;
self["@unit"]="";
return self}, function($ctx1) {$ctx1.fill(self,"selector:attr:",{aSelector:aSelector,anAttr:anAttr}, smalltalk.StyleAttrNumb)})},
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
return smalltalk.withContext(function($ctx1) { self["@attr"]=anAttr;
self["@selector"]=aSelector;
self["@unit"]=aUnit;
return self}, function($ctx1) {$ctx1.fill(self,"selector:attr:unit:",{aSelector:aSelector,anAttr:anAttr,aUnit:aUnit}, smalltalk.StyleAttrNumb)})},
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
return smalltalk.withContext(function($ctx1) { _st(_st(self["@selector"])._asJQuery())._css_to_(self["@attr"],_st(_st(self["@val"])._asString()).__comma(self["@unit"]));
return self}, function($ctx1) {$ctx1.fill(self,"updateSelf",{}, smalltalk.StyleAttrNumb)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._new())._selector_attr_(aSelector,anAttr);
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector:attr:",{aSelector:aSelector,anAttr:anAttr}, smalltalk.StyleAttrNumb.klass)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._new())._selector_attr_unit_(aSelector,anAttr,aUnit);
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector:attr:unit:",{aSelector:aSelector,anAttr:anAttr,aUnit:aUnit}, smalltalk.StyleAttrNumb.klass)})},
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
return smalltalk.withContext(function($ctx1) { return self._string() + aString;
return self}, function($ctx1) {$ctx1.fill(self,",",{aString:aString}, smalltalk.VarString)})},
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
return smalltalk.withContext(function($ctx1) { return String(self._string()) < aString._asString();
return self}, function($ctx1) {$ctx1.fill(self,"<",{aString:aString}, smalltalk.VarString)})},
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
return smalltalk.withContext(function($ctx1) { return String(self._string()) <= aString._asString();
return self}, function($ctx1) {$ctx1.fill(self,"<=",{aString:aString}, smalltalk.VarString)})},
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
return smalltalk.withContext(function($ctx1) { 
    	if(! aString._isString || ! aString._isString()) {
        	return false;
        }
	return String(self._string()) === String(aString);
return self}, function($ctx1) {$ctx1.fill(self,"=",{aString:aString}, smalltalk.VarString)})},
args: ["aString"],
source: "= aString\x0a\x09\x09<\x0a    \x09if(! aString._isString || ! aString._isString()) {\x0a        \x09return false;\x0a        }\x0a\x09return String(self._string()) === String(aString)>",
messageSends: [],
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._string()).__eq(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"==",{aString:aString}, smalltalk.VarString)})},
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
return smalltalk.withContext(function($ctx1) { return String(self._string()) > aString._asString();
return self}, function($ctx1) {$ctx1.fill(self,">",{aString:aString}, smalltalk.VarString)})},
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
return smalltalk.withContext(function($ctx1) { return String(self._string()) >= aString._asString();
return self}, function($ctx1) {$ctx1.fill(self,">=",{aString:aString}, smalltalk.VarString)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._string();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJSON",{}, smalltalk.VarString)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(_st(self)._string())._asSelector())._replace_with_("^_",""))._replace_with_("_.*","");
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJavaScriptSelector",{}, smalltalk.VarString)})},
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
return smalltalk.withContext(function($ctx1) { 
		if(self._string().search(/^[a-zA-Z0-9_:.$ ]*$/) == -1)
			return "\"" + self.replace(/[\x00-\x1f"\\\x7f-\x9f]/g, function(ch){var c=ch.charCodeAt(0);return "\\x"+("0"+c.toString(16)).slice(-2)}) + "\"";
		else
			return "\"" + self._string() + "\"";
	;
return self}, function($ctx1) {$ctx1.fill(self,"asJavascript",{}, smalltalk.VarString)})},
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
return smalltalk.withContext(function($ctx1) { return self._string().toLowerCase();
return self}, function($ctx1) {$ctx1.fill(self,"asLowercase",{}, smalltalk.VarString)})},
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
return smalltalk.withContext(function($ctx1) { return Number(self._string());
return self}, function($ctx1) {$ctx1.fill(self,"asNumber",{}, smalltalk.VarString)})},
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
var selector;
return smalltalk.withContext(function($ctx1) { var $1;
selector=_st("_").__comma(_st(self)._string());
selector=_st(selector)._replace_with_(":","_");
selector=_st(selector)._replace_with_("[+]","_plus");
selector=_st(selector)._replace_with_("-","_minus");
selector=_st(selector)._replace_with_("[*]","_star");
selector=_st(selector)._replace_with_("[/]","_slash");
selector=_st(selector)._replace_with_(">","_gt");
selector=_st(selector)._replace_with_("<","_lt");
selector=_st(selector)._replace_with_("=","_eq");
selector=_st(selector)._replace_with_(",","_comma");
selector=_st(selector)._replace_with_("[@]","_at");
$1=selector;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asSelector",{selector:selector}, smalltalk.VarString)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._string();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asString",{}, smalltalk.VarString)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.Symbol || Symbol))._lookup_(_st(self)._string());
return $1;
}, function($ctx1) {$ctx1.fill(self,"asSymbol",{}, smalltalk.VarString)})},
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
return smalltalk.withContext(function($ctx1) { return self._string().toUpperCase();
return self}, function($ctx1) {$ctx1.fill(self,"asUppercase",{}, smalltalk.VarString)})},
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
return smalltalk.withContext(function($ctx1) { return self._string().charCodeAt(0);;
return self}, function($ctx1) {$ctx1.fill(self,"asciiValue",{}, smalltalk.VarString)})},
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
return smalltalk.withContext(function($ctx1) { return String(self._string()).charAt(anIndex - 1) || aBlock();
return self}, function($ctx1) {$ctx1.fill(self,"at:ifAbsent:",{anIndex:anIndex,aBlock:aBlock}, smalltalk.VarString)})},
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
return smalltalk.withContext(function($ctx1) { return self._string().substring(anIndex - 1, anotherIndex);
return self}, function($ctx1) {$ctx1.fill(self,"copyFrom:to:",{anIndex:anIndex,anotherIndex:anotherIndex}, smalltalk.VarString)})},
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
return smalltalk.withContext(function($ctx1) { for(var i=0;i<self._string().length;i++){aBlock(self._string().charAt(i));};
return self}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock}, smalltalk.VarString)})},
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
return smalltalk.withContext(function($ctx1) { return escape(self._string());
return self}, function($ctx1) {$ctx1.fill(self,"escaped",{}, smalltalk.VarString)})},
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
return smalltalk.withContext(function($ctx1) {  return self._string().indexOf(subString) != -1 ;
return self}, function($ctx1) {$ctx1.fill(self,"includesSubString:",{subString:subString}, smalltalk.VarString)})},
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
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"isString",{}, smalltalk.VarString)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.String || String))._streamContents_((function(stream){
return smalltalk.withContext(function($ctx2) {return _st(aCollection)._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx3) {return _st(stream)._nextPutAll_(_st(each)._asString());
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx3) {return _st(stream)._nextPutAll_(_st(self)._string());
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"join:",{aCollection:aCollection}, smalltalk.VarString)})},
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
var cr,lf,start,sz,nextLF,nextCR;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4;
var $early={};
try {
start=(1);
sz=_st(self)._size();
cr=_st((smalltalk.String || String))._cr();
nextCR=_st(self)._indexOf_startingAt_(cr,(1));
lf=_st((smalltalk.String || String))._lf();
nextLF=_st(self)._indexOf_startingAt_(lf,(1));
_st((function(){
return smalltalk.withContext(function($ctx2) {return _st(start).__lt_eq(sz);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {$1=_st(_st(nextLF).__eq((0)))._and_((function(){
return smalltalk.withContext(function($ctx3) {return _st(nextCR).__eq((0));
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
if(smalltalk.assert($1)){
_st(aBlock)._value_value_value_(start,sz,sz);
$2=_st(self)._string();
throw $early=[$2];
};
$3=_st(_st(nextCR).__eq((0)))._or_((function(){
return smalltalk.withContext(function($ctx3) {return _st(_st((0)).__lt(nextLF))._and_((function(){
return smalltalk.withContext(function($ctx4) {return _st(nextLF).__lt(nextCR);
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
if(smalltalk.assert($3)){
_st(aBlock)._value_value_value_(start,_st(nextLF).__minus((1)),nextLF);
start=_st((1)).__plus(nextLF);
start;
nextLF=_st(self)._indexOf_startingAt_(lf,start);
return nextLF;
} else {
$4=_st(_st((1)).__plus(nextCR)).__eq(nextLF);
if(smalltalk.assert($4)){
_st(aBlock)._value_value_value_(start,_st(nextCR).__minus((1)),nextLF);
start=_st((1)).__plus(nextLF);
start;
nextCR=_st(self)._indexOf_startingAt_(cr,start);
nextCR;
nextLF=_st(self)._indexOf_startingAt_(lf,start);
return nextLF;
} else {
_st(aBlock)._value_value_value_(start,_st(nextCR).__minus((1)),nextCR);
start=_st((1)).__plus(nextCR);
start;
nextCR=_st(self)._indexOf_startingAt_(cr,start);
return nextCR;
};
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"lineIndicesDo:",{aBlock:aBlock,cr:cr,lf:lf,start:start,sz:sz,nextLF:nextLF,nextCR:nextCR}, smalltalk.VarString)})},
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
var lineCount;
return smalltalk.withContext(function($ctx1) { var $1,$2;
var $early={};
try {
lineCount=(0);
_st(self)._lineIndicesDo_((function(start,endWithoutDelimiters,end){
return smalltalk.withContext(function($ctx2) {lineCount=_st(lineCount).__plus((1));
$1=_st(lineCount).__eq(anIndex);
if(smalltalk.assert($1)){
$2=_st(self)._copyFrom_to_(start,endWithoutDelimiters);
throw $early=[$2];
};
}, function($ctx2) {$ctx2.fillBlock({start:start,endWithoutDelimiters:endWithoutDelimiters,end:end},$ctx1)})}));
return nil;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"lineNumber:",{anIndex:anIndex,lineCount:lineCount}, smalltalk.VarString)})},
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
var lines;
return smalltalk.withContext(function($ctx1) { var $1;
lines=_st((smalltalk.Array || Array))._new();
_st(self)._linesDo_((function(aLine){
return smalltalk.withContext(function($ctx2) {return _st(lines)._add_(aLine);
}, function($ctx2) {$ctx2.fillBlock({aLine:aLine},$ctx1)})}));
$1=lines;
return $1;
}, function($ctx1) {$ctx1.fill(self,"lines",{lines:lines}, smalltalk.VarString)})},
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
return smalltalk.withContext(function($ctx1) { _st(self)._lineIndicesDo_((function(start,endWithoutDelimiters,end){
return smalltalk.withContext(function($ctx2) {return _st(aBlock)._value_(_st(self)._copyFrom_to_(start,endWithoutDelimiters));
}, function($ctx2) {$ctx2.fillBlock({start:start,endWithoutDelimiters:endWithoutDelimiters,end:end},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"linesDo:",{aBlock:aBlock}, smalltalk.VarString)})},
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
return smalltalk.withContext(function($ctx1) { return self._string().search(aRegexp) != -1;
return self}, function($ctx1) {$ctx1.fill(self,"match:",{aRegexp:aRegexp}, smalltalk.VarString)})},
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
return smalltalk.withContext(function($ctx1) { return self._string().match(aRegularExpression);
return self}, function($ctx1) {$ctx1.fill(self,"matchesOf:",{aRegularExpression:aRegularExpression}, smalltalk.VarString)})},
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
return smalltalk.withContext(function($ctx1) { console.log(self._string());
return self}, function($ctx1) {$ctx1.fill(self,"printNl",{}, smalltalk.VarString)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st("'").__comma(_st(self)._string())).__comma("'");
return $1;
}, function($ctx1) {$ctx1.fill(self,"printString",{}, smalltalk.VarString)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._replaceRegexp_with_(_st((smalltalk.RegularExpression || RegularExpression))._fromString_flag_(aString,"g"),anotherString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"replace:with:",{aString:aString,anotherString:anotherString}, smalltalk.VarString)})},
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
return smalltalk.withContext(function($ctx1) { return self._string().replace(aRegexp, aString);
return self}, function($ctx1) {$ctx1.fill(self,"replaceRegexp:with:",{aRegexp:aRegexp,aString:aString}, smalltalk.VarString)})},
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
return smalltalk.withContext(function($ctx1) { return self._string().split("").reverse().join("");
return self}, function($ctx1) {$ctx1.fill(self,"reversed",{}, smalltalk.VarString)})},
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
return smalltalk.withContext(function($ctx1) { return self._string().length;
return self}, function($ctx1) {$ctx1.fill(self,"size",{}, smalltalk.VarString)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@val"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"string",{}, smalltalk.VarString)})},
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
return smalltalk.withContext(function($ctx1) { return self._string().split(aString);
return self}, function($ctx1) {$ctx1.fill(self,"tokenize:",{aString:aString}, smalltalk.VarString)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._trimBoth_("\x5cs");
return $1;
}, function($ctx1) {$ctx1.fill(self,"trimBoth",{}, smalltalk.VarString)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._trimLeft_(separators))._trimRight_(separators);
return $1;
}, function($ctx1) {$ctx1.fill(self,"trimBoth:",{separators:separators}, smalltalk.VarString)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._trimLeft_("\x5cs");
return $1;
}, function($ctx1) {$ctx1.fill(self,"trimLeft",{}, smalltalk.VarString)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._replaceRegexp_with_(_st((smalltalk.RegularExpression || RegularExpression))._fromString_flag_(_st(_st("^[").__comma(separators)).__comma("]+"),"g"),"");
return $1;
}, function($ctx1) {$ctx1.fill(self,"trimLeft:",{separators:separators}, smalltalk.VarString)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._trimRight_("\x5cs");
return $1;
}, function($ctx1) {$ctx1.fill(self,"trimRight",{}, smalltalk.VarString)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._replaceRegexp_with_(_st((smalltalk.RegularExpression || RegularExpression))._fromString_flag_(_st(_st("[").__comma(separators)).__comma("]+$"),"g"),"");
return $1;
}, function($ctx1) {$ctx1.fill(self,"trimRight:",{separators:separators}, smalltalk.VarString)})},
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
return smalltalk.withContext(function($ctx1) { return unescape(self);
return self}, function($ctx1) {$ctx1.fill(self,"unescaped",{}, smalltalk.VarString)})},
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
return smalltalk.withContext(function($ctx1) { for(var i=0;i<self._string().length;i++){aBlock(self._string().charAt(i), i+1);};
return self}, function($ctx1) {$ctx1.fill(self,"withIndexDo:",{aBlock:aBlock}, smalltalk.VarString)})},
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
return smalltalk.withContext(function($ctx1) { return '\r';
return self}, function($ctx1) {$ctx1.fill(self,"cr",{}, smalltalk.VarString.klass)})},
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
return smalltalk.withContext(function($ctx1) { return '\r\n';
return self}, function($ctx1) {$ctx1.fill(self,"crlf",{}, smalltalk.VarString.klass)})},
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
return smalltalk.withContext(function($ctx1) { return String.fromCharCode(anInteger);
return self}, function($ctx1) {$ctx1.fill(self,"fromCharCode:",{anInteger:anInteger}, smalltalk.VarString.klass)})},
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
return smalltalk.withContext(function($ctx1) { return new self.fn(aString);
return self}, function($ctx1) {$ctx1.fill(self,"fromString:",{aString:aString}, smalltalk.VarString.klass)})},
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
return smalltalk.withContext(function($ctx1) { return '\n';
return self}, function($ctx1) {$ctx1.fill(self,"lf",{}, smalltalk.VarString.klass)})},
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
return smalltalk.withContext(function($ctx1) { return ' ';
return self}, function($ctx1) {$ctx1.fill(self,"space",{}, smalltalk.VarString.klass)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=(smalltalk.StringStream || StringStream);
return $1;
}, function($ctx1) {$ctx1.fill(self,"streamClass",{}, smalltalk.VarString.klass)})},
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
var stream;
return smalltalk.withContext(function($ctx1) { var $1;
stream=_st(_st(self)._streamClass())._on_(_st((smalltalk.String || String))._new());
_st(blockWithArg)._value_(stream);
$1=_st(stream)._contents();
return $1;
}, function($ctx1) {$ctx1.fill(self,"streamContents:",{blockWithArg:blockWithArg,stream:stream}, smalltalk.VarString.klass)})},
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
return smalltalk.withContext(function($ctx1) { return '\t';
return self}, function($ctx1) {$ctx1.fill(self,"tab",{}, smalltalk.VarString.klass)})},
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
return smalltalk.withContext(function($ctx1) { return String.fromCharCode(aUTFCharCode);;
return self}, function($ctx1) {$ctx1.fill(self,"value:",{aUTFCharCode:aUTFCharCode}, smalltalk.VarString.klass)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@attr"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"attr",{}, smalltalk.AttrString)})},
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
myObserver=_st((smalltalk.NativeFunction || NativeFunction))._constructor_value_(mutationObserver,mutationHandler);
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
source: "dBind\x0a|mutationObserver myObserver config mutationHandler|\x0a\x0amutationHandler:=[:mutationRecords| mutationRecords do:[:each||temp| \x0atemp:=each target asJQuery attr: self attr. self string:temp.\x0a                                      ]].\x0a(HTMLCanvas isWebkit) ifTrue:[mutationObserver:='WebKitMutationObserver'.]\x0a                                            ifFalse:[mutationObserver:='MutationObserver'.].\x0a                                            \x0a \x22mutation observer is native code, thus it is not a BlockClosure\x22\x0amyObserver:= NativeFunction constructor: mutationObserver value: mutationHandler.\x0a\x0aconfig:=HashedCollection new.\x0aconfig at:'attributes' put:true.\x0aconfig at:'attributeFilter' put: (Array new add: self attr).\x0a\x0a                  \x0aselector asJQuery toArray do: [:each| myObserver observe: each with: config.].\x0a           \x0a\x0a^self",
messageSends: ["do:", "attr:", "attr", "asJQuery", "target", "string:", "ifTrue:ifFalse:", "isWebkit", "constructor:value:", "new", "at:put:", "add:", "observe:with:", "toArray"],
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@selector"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector",{}, smalltalk.AttrString)})},
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
return smalltalk.withContext(function($ctx1) { self["@attr"]=anAttr;
self["@selector"]=aSelector;
return self}, function($ctx1) {$ctx1.fill(self,"selector:attr:",{aSelector:aSelector,anAttr:anAttr}, smalltalk.AttrString)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@val"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"string",{}, smalltalk.AttrString)})},
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
return smalltalk.withContext(function($ctx1) { _st(_st(self["@selector"])._asJQuery())._attr_to_(self["@attr"],self["@val"]);
return self}, function($ctx1) {$ctx1.fill(self,"updateSelf",{}, smalltalk.AttrString)})},
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
fn: function (aSelector,anAttr){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._new())._selector_attr_(aSelector,anAttr);
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector:attr:",{aSelector:aSelector,anAttr:anAttr}, smalltalk.AttrString.klass)})},
args: ["aSelector", "anAttr"],
source: "selector: aSelector attr: anAttr\x0a\x0a^ self new selector: aSelector attr: anAttr",
messageSends: ["selector:attr:", "new"],
referencedClasses: []
}),
smalltalk.AttrString.klass);


smalltalk.addClass('ContentString', smalltalk.VarString, ['selector'], 'DomBinding');
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
myObserver=_st((smalltalk.NativeFunction || NativeFunction))._constructor_value_(mutationObserver,mutationHandler);
config=_st((smalltalk.HashedCollection || HashedCollection))._new();
_st(config)._at_put_("characterData",true);
_st(_st(_st(self["@selector"])._asJQuery())._toArray())._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(myObserver)._observe_with_(each,config);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$2=self;
return $2;
}, function($ctx1) {$ctx1.fill(self,"dBind",{mutationObserver:mutationObserver,myObserver:myObserver,config:config,mutationHandler:mutationHandler}, smalltalk.ContentString)})},
args: [],
source: "dBind\x0a|mutationObserver myObserver config mutationHandler|\x0a\x0amutationHandler:=[:mutationRecords| mutationRecords do:[:each||temp| \x0a                                  temp:=each target asJQuery prop: 'textContent'. self string:temp. \x0a                                    ]].\x0a(HTMLCanvas isWebkit) ifTrue:[mutationObserver:='WebKitMutationObserver'.]\x0a                                            ifFalse:[mutationObserver:='MutationObserver'.].\x0a                                            \x0a \x22mutation observer is native code, thus it is not a BlockClosure\x22\x0amyObserver:= NativeFunction constructor: mutationObserver value: mutationHandler.\x0a\x0aconfig:=HashedCollection new.\x0aconfig at:'characterData' put:true.\x0a\x0a                       \x0aselector asJQuery toArray do: [:each| myObserver observe: each with: config.].\x0a           \x0a\x0a^self",
messageSends: ["do:", "prop:", "asJQuery", "target", "string:", "ifTrue:ifFalse:", "isWebkit", "constructor:value:", "new", "at:put:", "observe:with:", "toArray"],
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@selector"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector",{}, smalltalk.ContentString)})},
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
return smalltalk.withContext(function($ctx1) { self["@selector"]=aSelector;
return self}, function($ctx1) {$ctx1.fill(self,"selector:",{aSelector:aSelector}, smalltalk.ContentString)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@val"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"string",{}, smalltalk.ContentString)})},
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
return smalltalk.withContext(function($ctx1) { _st(_st(self["@selector"])._asJQuery())._prop_to_("textContent",self["@val"]);
return self}, function($ctx1) {$ctx1.fill(self,"updateSelf",{}, smalltalk.ContentString)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._new())._selector_(aSelector);
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector:",{aSelector:aSelector}, smalltalk.ContentString.klass)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@attr"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"attr",{}, smalltalk.StyleAttrString)})},
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
myObserver=_st((smalltalk.NativeFunction || NativeFunction))._constructor_value_(mutationObserver,mutationHandler);
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
source: "dBind\x0a|mutationObserver myObserver config mutationHandler|\x0a\x0amutationHandler:=[:mutationRecords| mutationRecords do:[:each||temp| \x0a                               temp:=each target css: self attr.self string:temp.]].\x0a(HTMLCanvas isWebkit) ifTrue:[mutationObserver:='WebKitMutationObserver'.]\x0a                                            ifFalse:[mutationObserver:='MutationObserver'.].\x0a                                            \x0a \x22mutation observer is native code, thus it is not a BlockClosure\x22\x0amyObserver:= NativeFunction constructor: mutationObserver value: mutationHandler.\x0a\x0aconfig:=HashedCollection new.\x0aconfig at:'attributes' put:true.\x0aconfig at:'attributeFilter' put: (Array new add: self attr).\x0a\x0a                       \x0aselector asJQuery toArray do: [:each| myObserver observe: each with: config.].\x0a           \x0a\x0a^self",
messageSends: ["do:", "css:", "attr", "target", "string:", "ifTrue:ifFalse:", "isWebkit", "constructor:value:", "new", "at:put:", "add:", "observe:with:", "toArray", "asJQuery"],
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@selector"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector",{}, smalltalk.StyleAttrString)})},
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
return smalltalk.withContext(function($ctx1) { self["@attr"]=anAttr;
self["@selector"]=aSelector;
return self}, function($ctx1) {$ctx1.fill(self,"selector:attr:",{aSelector:aSelector,anAttr:anAttr}, smalltalk.StyleAttrString)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@val"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"string",{}, smalltalk.StyleAttrString)})},
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
return smalltalk.withContext(function($ctx1) { _st(_st(self["@selector"])._asJQuery())._css_to_(self["@attr"],self["@val"]);
return self}, function($ctx1) {$ctx1.fill(self,"updateSelf",{}, smalltalk.StyleAttrString)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._new())._selector_attr_(aSelector,anAttr);
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector:attr:",{aSelector:aSelector,anAttr:anAttr}, smalltalk.StyleAttrString.klass)})},
args: ["aSelector", "anAttr"],
source: "selector: aSelector attr: anAttr\x0a\x0a^ self new selector: aSelector attr: anAttr",
messageSends: ["selector:attr:", "new"],
referencedClasses: []
}),
smalltalk.StyleAttrString.klass);


