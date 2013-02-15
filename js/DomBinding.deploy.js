smalltalk.addPackage('DomBinding', {});
smalltalk.addClass('Var', smalltalk.Object, ['val'], 'DomBinding');
smalltalk.addMethod(
"_is_",
smalltalk.method({
selector: "is:",
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
return self}, function($ctx1) {$ctx1.fill(self,"is:",{anObject:anObject}, smalltalk.Var)})}
}),
smalltalk.Var);

smalltalk.addMethod(
"_val",
smalltalk.method({
selector: "val",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@val"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"val",{}, smalltalk.Var)})}
}),
smalltalk.Var);


smalltalk.addMethod(
"_selector_attr_",
smalltalk.method({
selector: "selector:attr:",
fn: function (aSelector,anAttr){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._new())._selector_attr_(aSelector,anAttr);
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector:attr:",{aSelector:aSelector,anAttr:anAttr}, smalltalk.Var.klass)})}
}),
smalltalk.Var.klass);

smalltalk.addMethod(
"_selector_styleAttr_",
smalltalk.method({
selector: "selector:styleAttr:",
fn: function (aSelector,anAttr){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._new())._selector_styleAttr_(aSelector,anAttr);
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector:styleAttr:",{aSelector:aSelector,anAttr:anAttr}, smalltalk.Var.klass)})}
}),
smalltalk.Var.klass);


smalltalk.addClass('VarBool', smalltalk.Var, [], 'DomBinding');
smalltalk.addMethod(
"__and",
smalltalk.method({
selector: "&",
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
return self}, function($ctx1) {$ctx1.fill(self,"&",{anObject:anObject,aBoolean:aBoolean}, smalltalk.VarBool)})}
}),
smalltalk.VarBool);

smalltalk.addMethod(
"__eq",
smalltalk.method({
selector: "=",
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
return self}, function($ctx1) {$ctx1.fill(self,"=",{anObject:anObject}, smalltalk.VarBool)})}
}),
smalltalk.VarBool);

smalltalk.addMethod(
"__eq_eq",
smalltalk.method({
selector: "==",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self).__eq(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"==",{anObject:anObject}, smalltalk.VarBool)})}
}),
smalltalk.VarBool);

smalltalk.addMethod(
"_and_",
smalltalk.method({
selector: "and:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=_st(_st(self)._bool()).__eq(true);
$1=_st($2)._ifTrue_ifFalse_(aBlock,(function(){
return smalltalk.withContext(function($ctx2) {return false;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"and:",{aBlock:aBlock}, smalltalk.VarBool)})}
}),
smalltalk.VarBool);

smalltalk.addMethod(
"_bool",
smalltalk.method({
selector: "bool",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@val"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"bool",{}, smalltalk.VarBool)})}
}),
smalltalk.VarBool);

smalltalk.addMethod(
"_ifFalse_",
smalltalk.method({
selector: "ifFalse:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=_st(self)._bool();
$1=_st($2)._ifTrue_ifFalse_((function(){
return smalltalk.withContext(function($ctx2) {}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifFalse:",{aBlock:aBlock}, smalltalk.VarBool)})}
}),
smalltalk.VarBool);

smalltalk.addMethod(
"_ifFalse_ifTrue_",
smalltalk.method({
selector: "ifFalse:ifTrue:",
fn: function (aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=_st(self)._bool();
$1=_st($2)._ifTrue_ifFalse_(anotherBlock,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifFalse:ifTrue:",{aBlock:aBlock,anotherBlock:anotherBlock}, smalltalk.VarBool)})}
}),
smalltalk.VarBool);

smalltalk.addMethod(
"_ifTrue_",
smalltalk.method({
selector: "ifTrue:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=_st(self)._bool();
$1=_st($2)._ifTrue_ifFalse_(aBlock,(function(){
return smalltalk.withContext(function($ctx2) {}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifTrue:",{aBlock:aBlock}, smalltalk.VarBool)})}
}),
smalltalk.VarBool);

smalltalk.addMethod(
"_ifTrue_ifFalse_",
smalltalk.method({
selector: "ifTrue:ifFalse:",
fn: function (aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
	    if(self._bool() == true) {
		return aBlock();
	    } else {
		return anotherBlock();
	    }
	;
return self}, function($ctx1) {$ctx1.fill(self,"ifTrue:ifFalse:",{aBlock:aBlock,anotherBlock:anotherBlock}, smalltalk.VarBool)})}
}),
smalltalk.VarBool);

smalltalk.addMethod(
"_isBoolean",
smalltalk.method({
selector: "isBoolean",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"isBoolean",{}, smalltalk.VarBool)})}
}),
smalltalk.VarBool);

smalltalk.addMethod(
"_not",
smalltalk.method({
selector: "not",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._bool()).__eq(false);
return $1;
}, function($ctx1) {$ctx1.fill(self,"not",{}, smalltalk.VarBool)})}
}),
smalltalk.VarBool);

smalltalk.addMethod(
"_or_",
smalltalk.method({
selector: "or:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=_st(_st(self)._bool()).__eq(true);
$1=_st($2)._ifTrue_ifFalse_((function(){
return smalltalk.withContext(function($ctx2) {return true;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"or:",{aBlock:aBlock}, smalltalk.VarBool)})}
}),
smalltalk.VarBool);

smalltalk.addMethod(
"__or",
smalltalk.method({
selector: "|",
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 
	    if(self._bool() == true) {
		return true;
	    } else {
		return aBoolean;
	    }
	;
return self}, function($ctx1) {$ctx1.fill(self,"|",{aBoolean:aBoolean}, smalltalk.VarBool)})}
}),
smalltalk.VarBool);



smalltalk.addClass('AttrBool', smalltalk.VarBool, ['selector', 'attr'], 'DomBinding');
smalltalk.addMethod(
"_attr",
smalltalk.method({
selector: "attr",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@attr"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"attr",{}, smalltalk.AttrBool)})}
}),
smalltalk.AttrBool);

smalltalk.addMethod(
"_bool",
smalltalk.method({
selector: "bool",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@val"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"bool",{}, smalltalk.AttrBool)})}
}),
smalltalk.AttrBool);

smalltalk.addMethod(
"_bool_",
smalltalk.method({
selector: "bool:",
fn: function (aBool){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@val"]=aBool;
return self}, function($ctx1) {$ctx1.fill(self,"bool:",{aBool:aBool}, smalltalk.AttrBool)})}
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
}, function($ctx1) {$ctx1.fill(self,"dBind",{mutationObserver:mutationObserver,myObserver:myObserver,config:config,mutationHandler:mutationHandler}, smalltalk.AttrBool)})}
}),
smalltalk.AttrBool);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@selector"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector",{}, smalltalk.AttrBool)})}
}),
smalltalk.AttrBool);

smalltalk.addMethod(
"_selector_attr_",
smalltalk.method({
selector: "selector:attr:",
fn: function (aSelector,anAttr){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@attr"]=anAttr;
self["@selector"]=aSelector;
return self}, function($ctx1) {$ctx1.fill(self,"selector:attr:",{aSelector:aSelector,anAttr:anAttr}, smalltalk.AttrBool)})}
}),
smalltalk.AttrBool);

smalltalk.addMethod(
"_updateSelf",
smalltalk.method({
selector: "updateSelf",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self["@selector"])._asJQuery())._attr_to_(self["@attr"],self["@val"]);
return self}, function($ctx1) {$ctx1.fill(self,"updateSelf",{}, smalltalk.AttrBool)})}
}),
smalltalk.AttrBool);


smalltalk.addMethod(
"_selector_attr_",
smalltalk.method({
selector: "selector:attr:",
fn: function (aSelector,anAttr){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._new())._selector_attr_(aSelector,anAttr);
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector:attr:",{aSelector:aSelector,anAttr:anAttr}, smalltalk.AttrBool.klass)})}
}),
smalltalk.AttrBool.klass);


smalltalk.addClass('StyleAttrBool', smalltalk.VarBool, ['selector', 'attr'], 'DomBinding');
smalltalk.addMethod(
"_attr",
smalltalk.method({
selector: "attr",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@attr"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"attr",{}, smalltalk.StyleAttrBool)})}
}),
smalltalk.StyleAttrBool);

smalltalk.addMethod(
"_bool",
smalltalk.method({
selector: "bool",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@val"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"bool",{}, smalltalk.StyleAttrBool)})}
}),
smalltalk.StyleAttrBool);

smalltalk.addMethod(
"_bool_",
smalltalk.method({
selector: "bool:",
fn: function (aBool){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@val"]=aBool;
return self}, function($ctx1) {$ctx1.fill(self,"bool:",{aBool:aBool}, smalltalk.StyleAttrBool)})}
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
}, function($ctx1) {$ctx1.fill(self,"dBind",{mutationObserver:mutationObserver,myObserver:myObserver,config:config,mutationHandler:mutationHandler}, smalltalk.StyleAttrBool)})}
}),
smalltalk.StyleAttrBool);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@selector"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector",{}, smalltalk.StyleAttrBool)})}
}),
smalltalk.StyleAttrBool);

smalltalk.addMethod(
"_selector_attr_",
smalltalk.method({
selector: "selector:attr:",
fn: function (aSelector,anAttr){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@attr"]=anAttr;
self["@selector"]=aSelector;
return self}, function($ctx1) {$ctx1.fill(self,"selector:attr:",{aSelector:aSelector,anAttr:anAttr}, smalltalk.StyleAttrBool)})}
}),
smalltalk.StyleAttrBool);

smalltalk.addMethod(
"_updateSelf",
smalltalk.method({
selector: "updateSelf",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self["@selector"])._asJQuery())._css_to_(self["@attr"],self["@val"]);
return self}, function($ctx1) {$ctx1.fill(self,"updateSelf",{}, smalltalk.StyleAttrBool)})}
}),
smalltalk.StyleAttrBool);


smalltalk.addMethod(
"_selector_attr_",
smalltalk.method({
selector: "selector:attr:",
fn: function (aSelector,anAttr){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._new())._selector_attr_(aSelector,anAttr);
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector:attr:",{aSelector:aSelector,anAttr:anAttr}, smalltalk.StyleAttrBool.klass)})}
}),
smalltalk.StyleAttrBool.klass);


smalltalk.addClass('VarNumb', smalltalk.Var, [], 'DomBinding');
smalltalk.addMethod(
"__and",
smalltalk.method({
selector: "&",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { var aNumber;
if(anObject._class() == self._class()) 
	{aNumber = anObject._numbl()}
    else{aNumber = anObject}
	return self._numb() & aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"&",{anObject:anObject}, smalltalk.VarNumb)})}
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"__star",
smalltalk.method({
selector: "*",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { var aNumber;
if(anObject._class() == self._class()) 
	{aNumber = anObject._numbl()}
    else{aNumber = anObject}
	"Inlined in the Compiler"
	return self._numb() * aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"*",{anObject:anObject}, smalltalk.VarNumb)})}
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"__plus",
smalltalk.method({
selector: "+",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { var aNumber;
if(anObject._class() == self._class()) 
	{aNumber = anObject._numbl()}
    else{aNumber = anObject}
	"Inlined in the Compiler"
	return self._numb() + aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"+",{anObject:anObject}, smalltalk.VarNumb)})}
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"__minus",
smalltalk.method({
selector: "-",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { var aNumber;
if(anObject._class() == self._class()) 
	{aNumber = anObject._numbl()}
    else{aNumber = anObject}
	"Inlined in the Compiler"
	return self._numb() - aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"-",{anObject:anObject}, smalltalk.VarNumb)})}
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"__slash",
smalltalk.method({
selector: "/",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { var aNumber;
if(anObject._class() == self._class()) 
	{aNumber = anObject._numbl()}
    else{aNumber = anObject}
	"Inlined in the Compiler"
	return self._numb() / aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"/",{anObject:anObject}, smalltalk.VarNumb)})}
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"__lt",
smalltalk.method({
selector: "<",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { var aNumber;
if(anObject._class() == self._class()) 
	{aNumber = anObject._numbl()}
    else{aNumber = anObject}
	"Inlined in the Compiler"
	return self._numb() < aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"<",{anObject:anObject}, smalltalk.VarNumb)})}
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"__lt_eq",
smalltalk.method({
selector: "<=",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { var aNumber;
if(anObject._class() == self._class()) 
	{aNumber = anObject._numbl()}
    else{aNumber = anObject}
	"Inlined in the Compiler"
	return self._numb() <= aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"<=",{anObject:anObject}, smalltalk.VarNumb)})}
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"__eq",
smalltalk.method({
selector: "=",
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
return self}, function($ctx1) {$ctx1.fill(self,"=",{anObject:anObject}, smalltalk.VarNumb)})}
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"__gt",
smalltalk.method({
selector: ">",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { var aNumber;
if(anObject._class() == self._class()) 
	{aNumber = anObject._numbl()}
    else{aNumber = anObject}
	"Inlined in the Compiler"
	return self._numb() > aNumber;
return self}, function($ctx1) {$ctx1.fill(self,">",{anObject:anObject}, smalltalk.VarNumb)})}
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"__gt_eq",
smalltalk.method({
selector: ">=",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { var aNumber;
if(anObject._class() == self._class()) 
	{aNumber = anObject._numbl()}
    else{aNumber = anObject}
	"Inlined in the Compiler"
	return self._numb() >= aNumber;
return self}, function($ctx1) {$ctx1.fill(self,">=",{anObject:anObject}, smalltalk.VarNumb)})}
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"__backslash",
smalltalk.method({
selector: "\x5c",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { var aNumber;
if(anObject._class() == self._class()) 
	{aNumber = anObject._numbl()}
    else{aNumber = anObject}
	return self.numb() % aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"\x5c\x5c",{anObject:anObject}, smalltalk.VarNumb)})}
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"_abs",
smalltalk.method({
selector: "abs",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return Math.abs(self._numb());;
return self}, function($ctx1) {$ctx1.fill(self,"abs",{}, smalltalk.VarNumb)})}
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"_asJSON",
smalltalk.method({
selector: "asJSON",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._numb();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJSON",{}, smalltalk.VarNumb)})}
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"_asString",
smalltalk.method({
selector: "asString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._printString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asString",{}, smalltalk.VarNumb)})}
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"_atRandom",
smalltalk.method({
selector: "atRandom",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(_st(_st((smalltalk.Random || Random))._new())._next()).__star(_st(self)._numb()))._truncated()).__plus((1));
return $1;
}, function($ctx1) {$ctx1.fill(self,"atRandom",{}, smalltalk.VarNumb)})}
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"_even",
smalltalk.method({
selector: "even",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((0)).__eq(_st(_st(self)._numb()).__backslash_backslash((2)));
return $1;
}, function($ctx1) {$ctx1.fill(self,"even",{}, smalltalk.VarNumb)})}
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"_isZero",
smalltalk.method({
selector: "isZero",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._numb()).__eq((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"isZero",{}, smalltalk.VarNumb)})}
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"_max_",
smalltalk.method({
selector: "max:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { var aNumber;
if(anObject._class() == self._class()) 
	{aNumber = anObject._numbl()}
    else{aNumber = anObject}
	return Math.max(self._numb(), aNumber);;
return self}, function($ctx1) {$ctx1.fill(self,"max:",{anObject:anObject}, smalltalk.VarNumb)})}
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"_min_",
smalltalk.method({
selector: "min:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { var aNumber;
if(anObject._class() == self._class()) 
	{aNumber = anObject._numbl()}
    else{aNumber = anObject}
	return Math.min(self._numb(), aNumber);;
return self}, function($ctx1) {$ctx1.fill(self,"min:",{anObject:anObject}, smalltalk.VarNumb)})}
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"_negated",
smalltalk.method({
selector: "negated",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((0)).__minus(_st(self)._numb());
return $1;
}, function($ctx1) {$ctx1.fill(self,"negated",{}, smalltalk.VarNumb)})}
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"_negative",
smalltalk.method({
selector: "negative",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._numb()).__lt((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"negative",{}, smalltalk.VarNumb)})}
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"_numb",
smalltalk.method({
selector: "numb",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@val"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"numb",{}, smalltalk.VarNumb)})}
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"_odd",
smalltalk.method({
selector: "odd",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._even())._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"odd",{}, smalltalk.VarNumb)})}
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"_positive",
smalltalk.method({
selector: "positive",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self).__gt_eq((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"positive",{}, smalltalk.VarNumb)})}
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"_rounded",
smalltalk.method({
selector: "rounded",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return Math.round(self._numb());;
return self}, function($ctx1) {$ctx1.fill(self,"rounded",{}, smalltalk.VarNumb)})}
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"_sqrt",
smalltalk.method({
selector: "sqrt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return Math.sqrt(self._numb());
return self}, function($ctx1) {$ctx1.fill(self,"sqrt",{}, smalltalk.VarNumb)})}
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"_squared",
smalltalk.method({
selector: "squared",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._numb()).__star(_st(self)._numb());
return $1;
}, function($ctx1) {$ctx1.fill(self,"squared",{}, smalltalk.VarNumb)})}
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"_timesRepeat_",
smalltalk.method({
selector: "timesRepeat:",
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
return self}, function($ctx1) {$ctx1.fill(self,"timesRepeat:",{aBlock:aBlock,count:count}, smalltalk.VarNumb)})}
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"_to_",
smalltalk.method({
selector: "to:",
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
}, function($ctx1) {$ctx1.fill(self,"to:",{aNumber:aNumber,array:array,first:first,last:last,count:count}, smalltalk.VarNumb)})}
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"_to_by_",
smalltalk.method({
selector: "to:by:",
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
}, function($ctx1) {$ctx1.fill(self,"to:by:",{stop:stop,step:step,array:array,value:value,pos:pos}, smalltalk.VarNumb)})}
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"_to_by_do_",
smalltalk.method({
selector: "to:by:do:",
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
return self}, function($ctx1) {$ctx1.fill(self,"to:by:do:",{stop:stop,step:step,aBlock:aBlock,value:value}, smalltalk.VarNumb)})}
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"_to_do_",
smalltalk.method({
selector: "to:do:",
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
return self}, function($ctx1) {$ctx1.fill(self,"to:do:",{stop:stop,aBlock:aBlock,nextValue:nextValue}, smalltalk.VarNumb)})}
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"_truncated",
smalltalk.method({
selector: "truncated",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
    	if(self._numb() >= 0) {
        	return Math.floor(self._numb());
        } else {
        	return Math.floor(self._numb() * (-1)) * (-1);
        };
    ;
return self}, function($ctx1) {$ctx1.fill(self,"truncated",{}, smalltalk.VarNumb)})}
}),
smalltalk.VarNumb);

smalltalk.addMethod(
"__or",
smalltalk.method({
selector: "|",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { var aNumber;
if(anObject._class() == self._class()) 
	{aNumber = anObject._numbl()}
    else{aNumber = anObject}
	return self._numb() | aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"|",{anObject:anObject}, smalltalk.VarNumb)})}
}),
smalltalk.VarNumb);



smalltalk.addClass('AttrNumb', smalltalk.VarNumb, ['selector', 'attr', 'unit'], 'DomBinding');
smalltalk.addMethod(
"_attr",
smalltalk.method({
selector: "attr",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@attr"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"attr",{}, smalltalk.AttrNumb)})}
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
}, function($ctx1) {$ctx1.fill(self,"dBind",{mutationObserver:mutationObserver,myObserver:myObserver,config:config,mutationHandler:mutationHandler}, smalltalk.AttrNumb)})}
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_numb",
smalltalk.method({
selector: "numb",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@val"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"numb",{}, smalltalk.AttrNumb)})}
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_numb_",
smalltalk.method({
selector: "numb:",
fn: function (aNumb){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@val"]=aNumb;
return self}, function($ctx1) {$ctx1.fill(self,"numb:",{aNumb:aNumb}, smalltalk.AttrNumb)})}
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@selector"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector",{}, smalltalk.AttrNumb)})}
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_selector_attr_",
smalltalk.method({
selector: "selector:attr:",
fn: function (aSelector,anAttr){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@attr"]=anAttr;
self["@selector"]=aSelector;
self["@unit"]="";
return self}, function($ctx1) {$ctx1.fill(self,"selector:attr:",{aSelector:aSelector,anAttr:anAttr}, smalltalk.AttrNumb)})}
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_selector_attr_unit_",
smalltalk.method({
selector: "selector:attr:unit:",
fn: function (aSelector,anAttr,aUnit){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@attr"]=anAttr;
self["@selector"]=aSelector;
self["@unit"]=aUnit;
return self}, function($ctx1) {$ctx1.fill(self,"selector:attr:unit:",{aSelector:aSelector,anAttr:anAttr,aUnit:aUnit}, smalltalk.AttrNumb)})}
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_selector_styleAttr_",
smalltalk.method({
selector: "selector:styleAttr:",
fn: function (aSelector,anAttr){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@attr"]=anAttr;
self["@selector"]=aSelector;
self["@unit"]="";
return self}, function($ctx1) {$ctx1.fill(self,"selector:styleAttr:",{aSelector:aSelector,anAttr:anAttr}, smalltalk.AttrNumb)})}
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_selector_styleAttr_unit_",
smalltalk.method({
selector: "selector:styleAttr:unit:",
fn: function (aSelector,anAttr,aUnit){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@attr"]=anAttr;
self["@selector"]=aSelector;
self["@unit"]=aUnit;
return self}, function($ctx1) {$ctx1.fill(self,"selector:styleAttr:unit:",{aSelector:aSelector,anAttr:anAttr,aUnit:aUnit}, smalltalk.AttrNumb)})}
}),
smalltalk.AttrNumb);

smalltalk.addMethod(
"_updateSelf",
smalltalk.method({
selector: "updateSelf",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self["@selector"])._asJQuery())._attr_to_(self["@attr"],_st(_st(self["@val"])._asString()).__comma(self["@unit"]));
return self}, function($ctx1) {$ctx1.fill(self,"updateSelf",{}, smalltalk.AttrNumb)})}
}),
smalltalk.AttrNumb);


smalltalk.addMethod(
"_selector_attr_",
smalltalk.method({
selector: "selector:attr:",
fn: function (aSelector,anAttr){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._new())._selector_attr_(aSelector,anAttr);
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector:attr:",{aSelector:aSelector,anAttr:anAttr}, smalltalk.AttrNumb.klass)})}
}),
smalltalk.AttrNumb.klass);

smalltalk.addMethod(
"_selector_attr_unit_",
smalltalk.method({
selector: "selector:attr:unit:",
fn: function (aSelector,anAttr,aUnit){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._new())._selector_attr_unit_(aSelector,anAttr,aUnit);
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector:attr:unit:",{aSelector:aSelector,anAttr:anAttr,aUnit:aUnit}, smalltalk.AttrNumb.klass)})}
}),
smalltalk.AttrNumb.klass);

smalltalk.addMethod(
"_selector_styleAttr_unit_",
smalltalk.method({
selector: "selector:styleAttr:unit:",
fn: function (aSelector,anAttr,aUnit){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._new())._selector_styleAttr_unit_(aSelector,anAttr,aUnit);
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector:styleAttr:unit:",{aSelector:aSelector,anAttr:anAttr,aUnit:aUnit}, smalltalk.AttrNumb.klass)})}
}),
smalltalk.AttrNumb.klass);


smalltalk.addClass('StyleAttrNumb', smalltalk.VarNumb, ['selector', 'attr', 'unit'], 'DomBinding');
smalltalk.addMethod(
"_attr",
smalltalk.method({
selector: "attr",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@attr"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"attr",{}, smalltalk.StyleAttrNumb)})}
}),
smalltalk.StyleAttrNumb);

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
}, function($ctx1) {$ctx1.fill(self,"dBind",{mutationObserver:mutationObserver,myObserver:myObserver,config:config,mutationHandler:mutationHandler}, smalltalk.StyleAttrNumb)})}
}),
smalltalk.StyleAttrNumb);

smalltalk.addMethod(
"_numb",
smalltalk.method({
selector: "numb",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@val"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"numb",{}, smalltalk.StyleAttrNumb)})}
}),
smalltalk.StyleAttrNumb);

smalltalk.addMethod(
"_numb_",
smalltalk.method({
selector: "numb:",
fn: function (aNumb){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@val"]=aNumb;
return self}, function($ctx1) {$ctx1.fill(self,"numb:",{aNumb:aNumb}, smalltalk.StyleAttrNumb)})}
}),
smalltalk.StyleAttrNumb);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@selector"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector",{}, smalltalk.StyleAttrNumb)})}
}),
smalltalk.StyleAttrNumb);

smalltalk.addMethod(
"_selector_attr_",
smalltalk.method({
selector: "selector:attr:",
fn: function (aSelector,anAttr){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@attr"]=anAttr;
self["@selector"]=aSelector;
self["@unit"]="";
return self}, function($ctx1) {$ctx1.fill(self,"selector:attr:",{aSelector:aSelector,anAttr:anAttr}, smalltalk.StyleAttrNumb)})}
}),
smalltalk.StyleAttrNumb);

smalltalk.addMethod(
"_selector_attr_unit_",
smalltalk.method({
selector: "selector:attr:unit:",
fn: function (aSelector,anAttr,aUnit){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@attr"]=anAttr;
self["@selector"]=aSelector;
self["@unit"]=aUnit;
return self}, function($ctx1) {$ctx1.fill(self,"selector:attr:unit:",{aSelector:aSelector,anAttr:anAttr,aUnit:aUnit}, smalltalk.StyleAttrNumb)})}
}),
smalltalk.StyleAttrNumb);

smalltalk.addMethod(
"_updateSelf",
smalltalk.method({
selector: "updateSelf",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self["@selector"])._asJQuery())._css_to_(self["@attr"],_st(_st(self["@val"])._asString()).__comma(self["@unit"]));
return self}, function($ctx1) {$ctx1.fill(self,"updateSelf",{}, smalltalk.StyleAttrNumb)})}
}),
smalltalk.StyleAttrNumb);


smalltalk.addMethod(
"_selector_attr_",
smalltalk.method({
selector: "selector:attr:",
fn: function (aSelector,anAttr){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._new())._selector_attr_(aSelector,anAttr);
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector:attr:",{aSelector:aSelector,anAttr:anAttr}, smalltalk.StyleAttrNumb.klass)})}
}),
smalltalk.StyleAttrNumb.klass);

smalltalk.addMethod(
"_selector_attr_unit_",
smalltalk.method({
selector: "selector:attr:unit:",
fn: function (aSelector,anAttr,aUnit){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._new())._selector_attr_unit_(aSelector,anAttr,aUnit);
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector:attr:unit:",{aSelector:aSelector,anAttr:anAttr,aUnit:aUnit}, smalltalk.StyleAttrNumb.klass)})}
}),
smalltalk.StyleAttrNumb.klass);


smalltalk.addClass('VarString', smalltalk.Var, [], 'DomBinding');
smalltalk.addMethod(
"__comma",
smalltalk.method({
selector: ",",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { return self._string() + aString;
return self}, function($ctx1) {$ctx1.fill(self,",",{aString:aString}, smalltalk.VarString)})}
}),
smalltalk.VarString);

smalltalk.addMethod(
"__lt",
smalltalk.method({
selector: "<",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { return String(self._string()) < aString._asString();
return self}, function($ctx1) {$ctx1.fill(self,"<",{aString:aString}, smalltalk.VarString)})}
}),
smalltalk.VarString);

smalltalk.addMethod(
"__lt_eq",
smalltalk.method({
selector: "<=",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { return String(self._string()) <= aString._asString();
return self}, function($ctx1) {$ctx1.fill(self,"<=",{aString:aString}, smalltalk.VarString)})}
}),
smalltalk.VarString);

smalltalk.addMethod(
"__eq",
smalltalk.method({
selector: "=",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
    	if(! aString._isString || ! aString._isString()) {
        	return false;
        }
	return String(self._string()) === String(aString);
return self}, function($ctx1) {$ctx1.fill(self,"=",{aString:aString}, smalltalk.VarString)})}
}),
smalltalk.VarString);

smalltalk.addMethod(
"__eq_eq",
smalltalk.method({
selector: "==",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._string()).__eq(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"==",{aString:aString}, smalltalk.VarString)})}
}),
smalltalk.VarString);

smalltalk.addMethod(
"__gt",
smalltalk.method({
selector: ">",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { return String(self._string()) > aString._asString();
return self}, function($ctx1) {$ctx1.fill(self,">",{aString:aString}, smalltalk.VarString)})}
}),
smalltalk.VarString);

smalltalk.addMethod(
"__gt_eq",
smalltalk.method({
selector: ">=",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { return String(self._string()) >= aString._asString();
return self}, function($ctx1) {$ctx1.fill(self,">=",{aString:aString}, smalltalk.VarString)})}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_asJSON",
smalltalk.method({
selector: "asJSON",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._string();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJSON",{}, smalltalk.VarString)})}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_asJavaScriptSelector",
smalltalk.method({
selector: "asJavaScriptSelector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(_st(self)._string())._asSelector())._replace_with_("^_",""))._replace_with_("_.*","");
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJavaScriptSelector",{}, smalltalk.VarString)})}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_asJavascript",
smalltalk.method({
selector: "asJavascript",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
		if(self._string().search(/^[a-zA-Z0-9_:.$ ]*$/) == -1)
			return "\"" + self.replace(/[\x00-\x1f"\\\x7f-\x9f]/g, function(ch){var c=ch.charCodeAt(0);return "\\x"+("0"+c.toString(16)).slice(-2)}) + "\"";
		else
			return "\"" + self._string() + "\"";
	;
return self}, function($ctx1) {$ctx1.fill(self,"asJavascript",{}, smalltalk.VarString)})}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_asLowercase",
smalltalk.method({
selector: "asLowercase",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self._string().toLowerCase();
return self}, function($ctx1) {$ctx1.fill(self,"asLowercase",{}, smalltalk.VarString)})}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_asNumber",
smalltalk.method({
selector: "asNumber",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return Number(self._string());
return self}, function($ctx1) {$ctx1.fill(self,"asNumber",{}, smalltalk.VarString)})}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_asSelector",
smalltalk.method({
selector: "asSelector",
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
}, function($ctx1) {$ctx1.fill(self,"asSelector",{selector:selector}, smalltalk.VarString)})}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_asString",
smalltalk.method({
selector: "asString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._string();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asString",{}, smalltalk.VarString)})}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_asSymbol",
smalltalk.method({
selector: "asSymbol",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.Symbol || Symbol))._lookup_(_st(self)._string());
return $1;
}, function($ctx1) {$ctx1.fill(self,"asSymbol",{}, smalltalk.VarString)})}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_asUppercase",
smalltalk.method({
selector: "asUppercase",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self._string().toUpperCase();
return self}, function($ctx1) {$ctx1.fill(self,"asUppercase",{}, smalltalk.VarString)})}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_asciiValue",
smalltalk.method({
selector: "asciiValue",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self._string().charCodeAt(0);;
return self}, function($ctx1) {$ctx1.fill(self,"asciiValue",{}, smalltalk.VarString)})}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_at_ifAbsent_",
smalltalk.method({
selector: "at:ifAbsent:",
fn: function (anIndex,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { return String(self._string()).charAt(anIndex - 1) || aBlock();
return self}, function($ctx1) {$ctx1.fill(self,"at:ifAbsent:",{anIndex:anIndex,aBlock:aBlock}, smalltalk.VarString)})}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_copyFrom_to_",
smalltalk.method({
selector: "copyFrom:to:",
fn: function (anIndex,anotherIndex){
var self=this;
return smalltalk.withContext(function($ctx1) { return self._string().substring(anIndex - 1, anotherIndex);
return self}, function($ctx1) {$ctx1.fill(self,"copyFrom:to:",{anIndex:anIndex,anotherIndex:anotherIndex}, smalltalk.VarString)})}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_do_",
smalltalk.method({
selector: "do:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { for(var i=0;i<self._string().length;i++){aBlock(self._string().charAt(i));};
return self}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock}, smalltalk.VarString)})}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_escaped",
smalltalk.method({
selector: "escaped",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return escape(self._string());
return self}, function($ctx1) {$ctx1.fill(self,"escaped",{}, smalltalk.VarString)})}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_includesSubString_",
smalltalk.method({
selector: "includesSubString:",
fn: function (subString){
var self=this;
return smalltalk.withContext(function($ctx1) {  return self._string().indexOf(subString) != -1 ;
return self}, function($ctx1) {$ctx1.fill(self,"includesSubString:",{subString:subString}, smalltalk.VarString)})}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_isString",
smalltalk.method({
selector: "isString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"isString",{}, smalltalk.VarString)})}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_join_",
smalltalk.method({
selector: "join:",
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
}, function($ctx1) {$ctx1.fill(self,"join:",{aCollection:aCollection}, smalltalk.VarString)})}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_lineIndicesDo_",
smalltalk.method({
selector: "lineIndicesDo:",
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
}, function($ctx1) {$ctx1.fill(self,"lineIndicesDo:",{aBlock:aBlock,cr:cr,lf:lf,start:start,sz:sz,nextLF:nextLF,nextCR:nextCR}, smalltalk.VarString)})}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_lineNumber_",
smalltalk.method({
selector: "lineNumber:",
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
}, function($ctx1) {$ctx1.fill(self,"lineNumber:",{anIndex:anIndex,lineCount:lineCount}, smalltalk.VarString)})}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_lines",
smalltalk.method({
selector: "lines",
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
}, function($ctx1) {$ctx1.fill(self,"lines",{lines:lines}, smalltalk.VarString)})}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_linesDo_",
smalltalk.method({
selector: "linesDo:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._lineIndicesDo_((function(start,endWithoutDelimiters,end){
return smalltalk.withContext(function($ctx2) {return _st(aBlock)._value_(_st(self)._copyFrom_to_(start,endWithoutDelimiters));
}, function($ctx2) {$ctx2.fillBlock({start:start,endWithoutDelimiters:endWithoutDelimiters,end:end},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"linesDo:",{aBlock:aBlock}, smalltalk.VarString)})}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_match_",
smalltalk.method({
selector: "match:",
fn: function (aRegexp){
var self=this;
return smalltalk.withContext(function($ctx1) { return self._string().search(aRegexp) != -1;
return self}, function($ctx1) {$ctx1.fill(self,"match:",{aRegexp:aRegexp}, smalltalk.VarString)})}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_matchesOf_",
smalltalk.method({
selector: "matchesOf:",
fn: function (aRegularExpression){
var self=this;
return smalltalk.withContext(function($ctx1) { return self._string().match(aRegularExpression);
return self}, function($ctx1) {$ctx1.fill(self,"matchesOf:",{aRegularExpression:aRegularExpression}, smalltalk.VarString)})}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_printNl",
smalltalk.method({
selector: "printNl",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { console.log(self._string());
return self}, function($ctx1) {$ctx1.fill(self,"printNl",{}, smalltalk.VarString)})}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st("'").__comma(_st(self)._string())).__comma("'");
return $1;
}, function($ctx1) {$ctx1.fill(self,"printString",{}, smalltalk.VarString)})}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_replace_with_",
smalltalk.method({
selector: "replace:with:",
fn: function (aString,anotherString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._replaceRegexp_with_(_st((smalltalk.RegularExpression || RegularExpression))._fromString_flag_(aString,"g"),anotherString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"replace:with:",{aString:aString,anotherString:anotherString}, smalltalk.VarString)})}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_replaceRegexp_with_",
smalltalk.method({
selector: "replaceRegexp:with:",
fn: function (aRegexp,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { return self._string().replace(aRegexp, aString);
return self}, function($ctx1) {$ctx1.fill(self,"replaceRegexp:with:",{aRegexp:aRegexp,aString:aString}, smalltalk.VarString)})}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_reversed",
smalltalk.method({
selector: "reversed",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self._string().split("").reverse().join("");
return self}, function($ctx1) {$ctx1.fill(self,"reversed",{}, smalltalk.VarString)})}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_size",
smalltalk.method({
selector: "size",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self._string().length;
return self}, function($ctx1) {$ctx1.fill(self,"size",{}, smalltalk.VarString)})}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_string",
smalltalk.method({
selector: "string",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@val"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"string",{}, smalltalk.VarString)})}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_tokenize_",
smalltalk.method({
selector: "tokenize:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { return self._string().split(aString);
return self}, function($ctx1) {$ctx1.fill(self,"tokenize:",{aString:aString}, smalltalk.VarString)})}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_trimBoth",
smalltalk.method({
selector: "trimBoth",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._trimBoth_("\x5cs");
return $1;
}, function($ctx1) {$ctx1.fill(self,"trimBoth",{}, smalltalk.VarString)})}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_trimBoth_",
smalltalk.method({
selector: "trimBoth:",
fn: function (separators){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._trimLeft_(separators))._trimRight_(separators);
return $1;
}, function($ctx1) {$ctx1.fill(self,"trimBoth:",{separators:separators}, smalltalk.VarString)})}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_trimLeft",
smalltalk.method({
selector: "trimLeft",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._trimLeft_("\x5cs");
return $1;
}, function($ctx1) {$ctx1.fill(self,"trimLeft",{}, smalltalk.VarString)})}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_trimLeft_",
smalltalk.method({
selector: "trimLeft:",
fn: function (separators){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._replaceRegexp_with_(_st((smalltalk.RegularExpression || RegularExpression))._fromString_flag_(_st(_st("^[").__comma(separators)).__comma("]+"),"g"),"");
return $1;
}, function($ctx1) {$ctx1.fill(self,"trimLeft:",{separators:separators}, smalltalk.VarString)})}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_trimRight",
smalltalk.method({
selector: "trimRight",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._trimRight_("\x5cs");
return $1;
}, function($ctx1) {$ctx1.fill(self,"trimRight",{}, smalltalk.VarString)})}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_trimRight_",
smalltalk.method({
selector: "trimRight:",
fn: function (separators){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._replaceRegexp_with_(_st((smalltalk.RegularExpression || RegularExpression))._fromString_flag_(_st(_st("[").__comma(separators)).__comma("]+$"),"g"),"");
return $1;
}, function($ctx1) {$ctx1.fill(self,"trimRight:",{separators:separators}, smalltalk.VarString)})}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_unescaped",
smalltalk.method({
selector: "unescaped",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return unescape(self);
return self}, function($ctx1) {$ctx1.fill(self,"unescaped",{}, smalltalk.VarString)})}
}),
smalltalk.VarString);

smalltalk.addMethod(
"_withIndexDo_",
smalltalk.method({
selector: "withIndexDo:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { for(var i=0;i<self._string().length;i++){aBlock(self._string().charAt(i), i+1);};
return self}, function($ctx1) {$ctx1.fill(self,"withIndexDo:",{aBlock:aBlock}, smalltalk.VarString)})}
}),
smalltalk.VarString);


smalltalk.addMethod(
"_cr",
smalltalk.method({
selector: "cr",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return '\r';
return self}, function($ctx1) {$ctx1.fill(self,"cr",{}, smalltalk.VarString.klass)})}
}),
smalltalk.VarString.klass);

smalltalk.addMethod(
"_crlf",
smalltalk.method({
selector: "crlf",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return '\r\n';
return self}, function($ctx1) {$ctx1.fill(self,"crlf",{}, smalltalk.VarString.klass)})}
}),
smalltalk.VarString.klass);

smalltalk.addMethod(
"_fromCharCode_",
smalltalk.method({
selector: "fromCharCode:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { return String.fromCharCode(anInteger);
return self}, function($ctx1) {$ctx1.fill(self,"fromCharCode:",{anInteger:anInteger}, smalltalk.VarString.klass)})}
}),
smalltalk.VarString.klass);

smalltalk.addMethod(
"_fromString_",
smalltalk.method({
selector: "fromString:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { return new self.fn(aString);
return self}, function($ctx1) {$ctx1.fill(self,"fromString:",{aString:aString}, smalltalk.VarString.klass)})}
}),
smalltalk.VarString.klass);

smalltalk.addMethod(
"_lf",
smalltalk.method({
selector: "lf",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return '\n';
return self}, function($ctx1) {$ctx1.fill(self,"lf",{}, smalltalk.VarString.klass)})}
}),
smalltalk.VarString.klass);

smalltalk.addMethod(
"_space",
smalltalk.method({
selector: "space",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return ' ';
return self}, function($ctx1) {$ctx1.fill(self,"space",{}, smalltalk.VarString.klass)})}
}),
smalltalk.VarString.klass);

smalltalk.addMethod(
"_streamClass",
smalltalk.method({
selector: "streamClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=(smalltalk.StringStream || StringStream);
return $1;
}, function($ctx1) {$ctx1.fill(self,"streamClass",{}, smalltalk.VarString.klass)})}
}),
smalltalk.VarString.klass);

smalltalk.addMethod(
"_streamContents_",
smalltalk.method({
selector: "streamContents:",
fn: function (blockWithArg){
var self=this;
var stream;
return smalltalk.withContext(function($ctx1) { var $1;
stream=_st(_st(self)._streamClass())._on_(_st((smalltalk.String || String))._new());
_st(blockWithArg)._value_(stream);
$1=_st(stream)._contents();
return $1;
}, function($ctx1) {$ctx1.fill(self,"streamContents:",{blockWithArg:blockWithArg,stream:stream}, smalltalk.VarString.klass)})}
}),
smalltalk.VarString.klass);

smalltalk.addMethod(
"_tab",
smalltalk.method({
selector: "tab",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return '\t';
return self}, function($ctx1) {$ctx1.fill(self,"tab",{}, smalltalk.VarString.klass)})}
}),
smalltalk.VarString.klass);

smalltalk.addMethod(
"_value_",
smalltalk.method({
selector: "value:",
fn: function (aUTFCharCode){
var self=this;
return smalltalk.withContext(function($ctx1) { return String.fromCharCode(aUTFCharCode);;
return self}, function($ctx1) {$ctx1.fill(self,"value:",{aUTFCharCode:aUTFCharCode}, smalltalk.VarString.klass)})}
}),
smalltalk.VarString.klass);


smalltalk.addClass('AttrString', smalltalk.VarString, ['selector', 'attr'], 'DomBinding');
smalltalk.addMethod(
"_attr",
smalltalk.method({
selector: "attr",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@attr"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"attr",{}, smalltalk.AttrString)})}
}),
smalltalk.AttrString);

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
}, function($ctx1) {$ctx1.fill(self,"dBind",{mutationObserver:mutationObserver,myObserver:myObserver,config:config,mutationHandler:mutationHandler}, smalltalk.AttrString)})}
}),
smalltalk.AttrString);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@selector"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector",{}, smalltalk.AttrString)})}
}),
smalltalk.AttrString);

smalltalk.addMethod(
"_selector_attr_",
smalltalk.method({
selector: "selector:attr:",
fn: function (aSelector,anAttr){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@attr"]=anAttr;
self["@selector"]=aSelector;
return self}, function($ctx1) {$ctx1.fill(self,"selector:attr:",{aSelector:aSelector,anAttr:anAttr}, smalltalk.AttrString)})}
}),
smalltalk.AttrString);

smalltalk.addMethod(
"_string",
smalltalk.method({
selector: "string",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@val"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"string",{}, smalltalk.AttrString)})}
}),
smalltalk.AttrString);

smalltalk.addMethod(
"_string_",
smalltalk.method({
selector: "string:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@val"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"string:",{aString:aString}, smalltalk.AttrString)})}
}),
smalltalk.AttrString);

smalltalk.addMethod(
"_updateSelf",
smalltalk.method({
selector: "updateSelf",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self["@selector"])._asJQuery())._attr_to_(self["@attr"],self["@val"]);
return self}, function($ctx1) {$ctx1.fill(self,"updateSelf",{}, smalltalk.AttrString)})}
}),
smalltalk.AttrString);


smalltalk.addMethod(
"_selector_attr_",
smalltalk.method({
selector: "selector:attr:",
fn: function (aSelector,anAttr){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._new())._selector_attr_(aSelector,anAttr);
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector:attr:",{aSelector:aSelector,anAttr:anAttr}, smalltalk.AttrString.klass)})}
}),
smalltalk.AttrString.klass);


smalltalk.addClass('ContentString', smalltalk.VarString, ['selector'], 'DomBinding');
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
}, function($ctx1) {$ctx1.fill(self,"dBind",{mutationObserver:mutationObserver,myObserver:myObserver,config:config,mutationHandler:mutationHandler}, smalltalk.ContentString)})}
}),
smalltalk.ContentString);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@selector"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector",{}, smalltalk.ContentString)})}
}),
smalltalk.ContentString);

smalltalk.addMethod(
"_selector_",
smalltalk.method({
selector: "selector:",
fn: function (aSelector){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@selector"]=aSelector;
return self}, function($ctx1) {$ctx1.fill(self,"selector:",{aSelector:aSelector}, smalltalk.ContentString)})}
}),
smalltalk.ContentString);

smalltalk.addMethod(
"_string",
smalltalk.method({
selector: "string",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@val"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"string",{}, smalltalk.ContentString)})}
}),
smalltalk.ContentString);

smalltalk.addMethod(
"_string_",
smalltalk.method({
selector: "string:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@val"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"string:",{aString:aString}, smalltalk.ContentString)})}
}),
smalltalk.ContentString);

smalltalk.addMethod(
"_updateSelf",
smalltalk.method({
selector: "updateSelf",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self["@selector"])._asJQuery())._prop_to_("textContent",self["@val"]);
return self}, function($ctx1) {$ctx1.fill(self,"updateSelf",{}, smalltalk.ContentString)})}
}),
smalltalk.ContentString);


smalltalk.addMethod(
"_selector_",
smalltalk.method({
selector: "selector:",
fn: function (aSelector){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._new())._selector_(aSelector);
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector:",{aSelector:aSelector}, smalltalk.ContentString.klass)})}
}),
smalltalk.ContentString.klass);


smalltalk.addClass('StyleAttrString', smalltalk.VarString, ['selector', 'attr'], 'DomBinding');
smalltalk.addMethod(
"_attr",
smalltalk.method({
selector: "attr",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@attr"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"attr",{}, smalltalk.StyleAttrString)})}
}),
smalltalk.StyleAttrString);

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
}, function($ctx1) {$ctx1.fill(self,"dBind",{mutationObserver:mutationObserver,myObserver:myObserver,config:config,mutationHandler:mutationHandler}, smalltalk.StyleAttrString)})}
}),
smalltalk.StyleAttrString);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@selector"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector",{}, smalltalk.StyleAttrString)})}
}),
smalltalk.StyleAttrString);

smalltalk.addMethod(
"_selector_attr_",
smalltalk.method({
selector: "selector:attr:",
fn: function (aSelector,anAttr){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@attr"]=anAttr;
self["@selector"]=aSelector;
return self}, function($ctx1) {$ctx1.fill(self,"selector:attr:",{aSelector:aSelector,anAttr:anAttr}, smalltalk.StyleAttrString)})}
}),
smalltalk.StyleAttrString);

smalltalk.addMethod(
"_string",
smalltalk.method({
selector: "string",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@val"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"string",{}, smalltalk.StyleAttrString)})}
}),
smalltalk.StyleAttrString);

smalltalk.addMethod(
"_string_",
smalltalk.method({
selector: "string:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@val"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"string:",{aString:aString}, smalltalk.StyleAttrString)})}
}),
smalltalk.StyleAttrString);

smalltalk.addMethod(
"_updateSelf",
smalltalk.method({
selector: "updateSelf",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self["@selector"])._asJQuery())._css_to_(self["@attr"],self["@val"]);
return self}, function($ctx1) {$ctx1.fill(self,"updateSelf",{}, smalltalk.StyleAttrString)})}
}),
smalltalk.StyleAttrString);


smalltalk.addMethod(
"_selector_attr_",
smalltalk.method({
selector: "selector:attr:",
fn: function (aSelector,anAttr){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._new())._selector_attr_(aSelector,anAttr);
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector:attr:",{aSelector:aSelector,anAttr:anAttr}, smalltalk.StyleAttrString.klass)})}
}),
smalltalk.StyleAttrString.klass);


