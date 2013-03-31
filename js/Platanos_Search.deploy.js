smalltalk.addPackage('Platanos_Search');
smalltalk.addClass('SearchInput', smalltalk.Component, [], 'Platanos_Search');
smalltalk.addMethod(
smalltalk.method({
selector: "function",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
messageSends: []}),
smalltalk.SearchInput);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.SearchInput)})},
messageSends: ["initialize"]}),
smalltalk.SearchInput);

smalltalk.addMethod(
smalltalk.method({
selector: "paintOn:",
fn: function (css){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(css)._selector_attr_val_("input","top","60px");
_st(css)._selector_attr_val_("input","left","40%");
_st(css)._selector_attr_val_("input","width","20%");
_st(css)._selector_attr_val_("input","box-shadow","inset 2px 2px 5px black");
_st(css)._selector_attr_val_(_st(_st("#").__comma(self["@pid"])).__comma("10"),"position","relative");
_st(css)._selector_attr_val_(_st(_st("#").__comma(self["@pid"])).__comma("10"),"top","120px");
_st(css)._selector_attr_val_(_st(_st("#").__comma(self["@pid"])).__comma("10"),"left","35%");
_st(css)._selector_attr_val_("ol","width","30%");
_st(css)._selector_attr_val_("ol","list-style","none inside");
return self}, function($ctx1) {$ctx1.fill(self,"paintOn:",{css:css}, smalltalk.SearchInput)})},
messageSends: ["selector:attr:val:", ","]}),
smalltalk.SearchInput);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(html)._form())._with_((function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$1=_st(html)._ol();
_st($1)._id_(_st(self)._assignId());
$2=_st($1)._with_("results:");
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html}, smalltalk.SearchInput)})},
messageSends: ["with:", "type:", "input", "form", "id:", "assignId", "ol"]}),
smalltalk.SearchInput);

smalltalk.addMethod(
smalltalk.method({
selector: "setConnectors",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@connectors"])._addConnectorId_("1");
return self}, function($ctx1) {$ctx1.fill(self,"setConnectors",{}, smalltalk.SearchInput)})},
messageSends: ["new", "addConnectorId:"]}),
smalltalk.SearchInput);

smalltalk.addMethod(
smalltalk.method({
selector: "setEquations",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
messageSends: []}),
smalltalk.SearchInput);

smalltalk.addMethod(
smalltalk.method({
selector: "setVariables",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
messageSends: []}),
smalltalk.SearchInput);



smalltalk.addClass('SearchResult', smalltalk.Component, ['text'], 'Platanos_Search');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.SearchResult)})},
messageSends: ["initialize"]}),
smalltalk.SearchResult);

smalltalk.addMethod(
smalltalk.method({
selector: "paintOn:",
fn: function (css){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(css)._selector_attr_val_("li","border-color","forestgreen");
_st(css)._selector_attr_val_("li","box-shadow","1px 1px 3px rgba(0, 0, 0, 0.5)");
_st(css)._selector_attr_val_("li","border-radius","2px");
_st(css)._selector_attr_val_("li","text-align","left");
_st(css)._selector_attr_val_("li","margin","3px");
_st(css)._selector_attr_val_("li","position","relative");
_st(css)._selector_attr_val_("li","left","-40px");
_st(css)._selector_attr_val_(_st(_st("#").__comma(self["@pid"])).__comma("10"),"font","12px/25px Arial, sans-serif");
return self}, function($ctx1) {$ctx1.fill(self,"paintOn:",{css:css}, smalltalk.SearchResult)})},
messageSends: ["selector:attr:val:", ","]}),
smalltalk.SearchResult);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(html)._li())._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st($1)._id_(_st(self)._assignId());
$2=_st($1)._with_(self["@text"]);
return $2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html}, smalltalk.SearchResult)})},
messageSends: ["with:", "id:", "assignId", "div", "li"]}),
smalltalk.SearchResult);

smalltalk.addMethod(
smalltalk.method({
selector: "text:",
fn: function (aText){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"text:",{aText:aText}, smalltalk.SearchResult)})},
messageSends: []}),
smalltalk.SearchResult);


smalltalk.addMethod(
smalltalk.method({
selector: "connect:at:to:with:",
fn: function (anElementId,aPosition,aParent,aText){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(self)._new();
_st($1)._text_(aText);
$2=_st($1)._connect_at_to_(anElementId,aPosition,aParent);
return self}, function($ctx1) {$ctx1.fill(self,"connect:at:to:with:",{anElementId:anElementId,aPosition:aPosition,aParent:aParent,aText:aText}, smalltalk.SearchResult.klass)})},
messageSends: ["text:", "new", "connect:at:to:"]}),
smalltalk.SearchResult.klass);

