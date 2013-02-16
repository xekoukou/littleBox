Smalltalk current createPackage: 'DomBinding' properties: #{}!
Object subclass: #Var
	instanceVariableNames: 'val ancestors descendents'
	package: 'DomBinding'!

!Var methodsFor: 'accessing'!

addAncestor: anAncestor

(ancestors == nill) ifTrue: [ ancestors := Array new. ].
!

val

^val
! !

!Var methodsFor: 'assigning'!

is: anObject
 "not assigning the reference of the object to the variable.
 changing the object that is already referenced by the varriable"

	(anObject class == self class) ifTrue:[val:=anObject val]
                                                     ifFalse:[ val:=anObject.].
                                                     
   self updateSelf.
! !

!Var methodsFor: 'initializing'!

initialize

super initialize
! !

Var subclass: #VarBool
	instanceVariableNames: ''
	package: 'DomBinding'!

!VarBool methodsFor: 'accessing'!

bool

^val
! !

!VarBool methodsFor: 'comparing'!

= anObject

<
var aBoolean;
if(anObject._class() == self._class()) 
	{aBoolean = anObject._bool()}
    else{aBoolean = anObject}
if(!! aBoolean._isBoolean || !! aBoolean._isBoolean()) {
        	return false;
            }
	return Boolean(self._bool() == true) == aBoolean>
!

== anObject
	^self = anObject
! !

!VarBool methodsFor: 'controlling'!

& anObject

|aBoolean|

	(anObject class == self class) ifTrue:[aBoolean:=anObject bool]
                                       		              ifFalse:[aBoolean:= anObject].
 	(self bool == true) ifTrue:[^ aBoolean]
      									ifFalse:[^false]
!

and: aBlock
	^self bool = true
	    ifTrue: aBlock
	    ifFalse: [false]
!

ifFalse: aBlock
	"inlined in the Compiler"
	^self bool ifTrue: [] ifFalse: aBlock
!

ifFalse: aBlock ifTrue: anotherBlock
	"inlined in the Compiler"
	^self bool ifTrue: anotherBlock ifFalse: aBlock
!

ifTrue: aBlock
	"inlined in the Compiler"
	^self bool ifTrue: aBlock ifFalse: []
!

ifTrue: aBlock ifFalse: anotherBlock
	"inlined in the Compiler"
	<
	    if(self._bool() == true) {
		return aBlock();
	    } else {
		return anotherBlock();
	    }
	>
!

not
	^self bool = false
!

or: aBlock
	^self bool = true
	    ifTrue: [true]
	    ifFalse: aBlock
!

| aBoolean
	<
	    if(self._bool() == true) {
		return true;
	    } else {
		return aBoolean;
	    }
	>
! !

!VarBool methodsFor: 'initializing'!

initialize

super initialize
! !

!VarBool methodsFor: 'testing'!

isBoolean

^true
! !

VarBool subclass: #AttrBool
	instanceVariableNames: 'selector attr'
	package: 'DomBinding'!

!AttrBool methodsFor: 'accessing'!

attr

^attr
!

bool

^val
!

bool:aBool

val:=aBool.
!

selector

^selector
! !

!AttrBool methodsFor: 'assigning'!

dBind
|mutationObserver myObserver config mutationHandler|

mutationHandler:=[:mutationRecords| mutationRecords do:[:each||temp| 
                                 temp:=each target asJQuery attr: self attr. self bool:temp.
                                        ]].

(HTMLCanvas isWebkit) ifTrue:[mutationObserver:='WebKitMutationObserver'.]
                                            ifFalse:[mutationObserver:='MutationObserver'.].
                                            
 "mutation observer is native code, thus it is not a BlockClosure"
myObserver:= NativeFunction constructor: mutationObserver value: mutationHandler.

config:=HashedCollection new.
config at:'characterData' put:true.
config at:'attributes' put:true.
config at:'attributeFilter' put: (Array new add: self attr).
                       
selector asJQuery toArray do: [:each| myObserver observe: each with: config.].
           

^self
! !

!AttrBool methodsFor: 'initializing'!

initialize

super initialize
!

selector:aSelector attr: anAttr

attr:=anAttr.
selector:=aSelector.
! !

!AttrBool methodsFor: 'updating'!

updateSelf

selector asJQuery attr:attr to: val.
! !

!AttrBool class methodsFor: 'instance creation'!

selector: aSelector attr: anAttr

^ self new selector: aSelector attr: anAttr
! !

VarBool subclass: #StyleAttrBool
	instanceVariableNames: 'selector attr'
	package: 'DomBinding'!

!StyleAttrBool methodsFor: 'accessing'!

attr

^attr
!

bool

^val
!

bool:aBool

val:=aBool.
!

selector

^selector
! !

!StyleAttrBool methodsFor: 'assigning'!

dBind
|mutationObserver myObserver config mutationHandler|

mutationHandler:=[:mutationRecords| mutationRecords do:[:each||temp| 
                                temp:=each target asJQuery css: self attr.self bool:temp.]].

(HTMLCanvas isWebkit) ifTrue:[mutationObserver:='WebKitMutationObserver'.]
                                            ifFalse:[mutationObserver:='MutationObserver'.].
                                            
 "mutation observer is native code, thus it is not a BlockClosure"
myObserver:= NativeFunction constructor: mutationObserver value: mutationHandler.

config:=HashedCollection new.
config at:'attributes' put:true.
config at:'attributeFilter' put: (Array new add: self attr).

                       
selector asJQuery toArray do: [:each| myObserver observe: each with: config.].
           

^self
! !

!StyleAttrBool methodsFor: 'initializing'!

initialize

super initialize
!

selector:aSelector attr: anAttr

attr:=anAttr.
selector:=aSelector.
! !

!StyleAttrBool methodsFor: 'updating'!

updateSelf

selector asJQuery css:attr to: val.
! !

!StyleAttrBool class methodsFor: 'instance creation'!

selector: aSelector attr: anAttr

^ self new selector: aSelector attr: anAttr
! !

Var subclass: #VarNumb
	instanceVariableNames: ''
	package: 'DomBinding'!

!VarNumb methodsFor: 'accessing'!

numb

^val
! !

!VarNumb methodsFor: 'arithmetic'!

* anObject

<var aNumber;
if(anObject._class() == self._class()) 
	{aNumber = anObject._numbl()}
    else{aNumber = anObject}
	"Inlined in the Compiler"
	return self._numb() * aNumber>
!

+ anObject

<var aNumber;
if(anObject._class() == self._class()) 
	{aNumber = anObject._numbl()}
    else{aNumber = anObject}
	"Inlined in the Compiler"
	return self._numb() + aNumber>
!

-  anObject

<var aNumber;
if(anObject._class() == self._class()) 
	{aNumber = anObject._numbl()}
    else{aNumber = anObject}
	"Inlined in the Compiler"
	return self._numb() - aNumber>
!

/ anObject

<var aNumber;
if(anObject._class() == self._class()) 
	{aNumber = anObject._numbl()}
    else{aNumber = anObject}
	"Inlined in the Compiler"
	return self._numb() / aNumber>
!

\\ anObject

<var aNumber;
if(anObject._class() == self._class()) 
	{aNumber = anObject._numbl()}
    else{aNumber = anObject}
	return self.numb() % aNumber>
!

abs
	<return Math.abs(self._numb());>
!

max: anObject

<var aNumber;
if(anObject._class() == self._class()) 
	{aNumber = anObject._numbl()}
    else{aNumber = anObject}
	return Math.max(self._numb(), aNumber);>
!

min: anObject

<var aNumber;
if(anObject._class() == self._class()) 
	{aNumber = anObject._numbl()}
    else{aNumber = anObject}
	return Math.min(self._numb(), aNumber);>
!

negated
	^0 - self numb.
!

sqrt
	<return Math.sqrt(self._numb())>
!

squared
	^self numb * self numb
! !

!VarNumb methodsFor: 'comparing'!

< anObject

<var aNumber;
if(anObject._class() == self._class()) 
	{aNumber = anObject._numbl()}
    else{aNumber = anObject}
	"Inlined in the Compiler"
	return self._numb() < aNumber>
!

<= anObject

<var aNumber;
if(anObject._class() == self._class()) 
	{aNumber = anObject._numbl()}
    else{aNumber = anObject}
	"Inlined in the Compiler"
	return self._numb() <= aNumber>
!

= anObject

<var aNumber;
if(anObject._class() == self._class()) 
	{aNumber = anObject._numbl()}
    else{aNumber = anObject}
    	if(!! aNumber._isNumber || !! aNumber._isNumber()) {
        	return false;
        }
	return Number(self._numb()) == aNumber>
!

>anObject

<var aNumber;
if(anObject._class() == self._class()) 
	{aNumber = anObject._numbl()}
    else{aNumber = anObject}
	"Inlined in the Compiler"
	return self._numb() >> aNumber>
!

>= anObject

<var aNumber;
if(anObject._class() == self._class()) 
	{aNumber = anObject._numbl()}
    else{aNumber = anObject}
	"Inlined in the Compiler"
	return self._numb() >>= aNumber>
! !

!VarNumb methodsFor: 'converting'!

& anObject
                                                     
<var aNumber;
if(anObject._class() == self._class()) 
	{aNumber = anObject._numbl()}
    else{aNumber = anObject}
	return self._numb() & aNumber>
!

asJSON
	^self numb
!

asString
	^self printString
!

atRandom
    ^(Random new next * self numb) truncated + 1
!

rounded
	<return Math.round(self._numb());>
!

to: aNumber
	| array first last count |
	first := self truncated.
	last := aNumber truncated + 1.
	count := 1.
	array := Array new.
	(last - first) timesRepeat: [
	    array at: count put: first.
	    count := count + 1.
	    first := first + 1].
	^array
!

to: stop by: step
	| array value pos |
	value := self numb.
	array := Array new.
	pos := 1.
	step = 0 ifTrue: [self error: 'step must be non-zero'].
	step < 0
		ifTrue: [[ value >= stop ] whileTrue: [
	    			array at: pos put: value.
	    			pos := pos + 1.
	    			value := value + step]]
		ifFalse: [[ value <= stop ] whileTrue: [
	    			array at: pos put: value.
	  			pos := pos + 1.
	    			value := value + step]].
	^array
!

truncated


	<
    	if(self._numb() >>= 0) {
        	return Math.floor(self._numb());
        } else {
        	return Math.floor(self._numb() * (-1)) * (-1);
        };
    >
!

| anObject

<var aNumber;
if(anObject._class() == self._class()) 
	{aNumber = anObject._numbl()}
    else{aNumber = anObject}
	return self._numb() | aNumber>
! !

!VarNumb methodsFor: 'enumerating'!

timesRepeat: aBlock
	| count |
	count := 1.
	[count > self numb] whileFalse: [
	    aBlock value.
	    count := count + 1]
!

to: stop by: step do: aBlock
	| value |
	value := self numb.
	step = 0 ifTrue: [self error: 'step must be non-zero'].
	step < 0
		ifTrue: [[ value >= stop ] whileTrue: [
	    			aBlock value: value.
	    			value := value + step]]
		ifFalse: [[ value <= stop ] whileTrue: [
	    			aBlock value: value.
	    			value := value + step]]
!

to: stop do: aBlock
	"Evaluate aBlock for each number from self to aNumber."
	| nextValue |
	nextValue := self numb.
	[nextValue <= stop]
		whileTrue: 
			[aBlock value: nextValue.
			nextValue := nextValue + 1]
! !

!VarNumb methodsFor: 'initializing'!

initialize

super initialize
! !

!VarNumb methodsFor: 'testing'!

even
	^ 0 = (self numb \\ 2)
!

isZero
	^self numb = 0
!

negative
	"Answer whether the receiver is mathematically negative."

	^ self numb< 0
!

odd
	^ self even not
!

positive
	"Answer whether the receiver is positive or equal to 0. (ST-80 protocol)."

	^ self >= 0
! !

VarNumb subclass: #AttrNumb
	instanceVariableNames: 'selector attr unit'
	package: 'DomBinding'!

!AttrNumb methodsFor: 'accessing'!

attr

^attr
!

numb

^val
!

numb: aNumb

val:=aNumb.
!

selector

^selector
! !

!AttrNumb methodsFor: 'assigning'!

dBind
|mutationObserver myObserver config mutationHandler|

mutationHandler:=[:mutationRecords| mutationRecords do:[:each||temp|
 temp:=each target asJQuery attr: self attr. self numb:(temp copyFrom:0 to: temp size- unit size ) asNumber.
                     ]].

(HTMLCanvas isWebkit) ifTrue:[mutationObserver:='WebKitMutationObserver'.]
                                            ifFalse:[mutationObserver:='MutationObserver'.].
                                            
 "mutation observer is native code, thus it is not a BlockClosure"
myObserver:= NativeFunction constructor: mutationObserver value: mutationHandler.

config:=HashedCollection new.
config at:'characterData' put:true.
config at:'attributes' put:true.
config at:'attributeFilter' put: (Array new add: self attr).
                       
selector asJQuery toArray do: [:each| myObserver observe: each with: config.].
           

^self
!

updateSelf

selector asJQuery attr:attr to: val asString,unit.
! !

!AttrNumb methodsFor: 'initializing'!

initialize

super initialize
!

selector:aSelector attr: anAttr


attr:=anAttr.
selector:=aSelector.
unit:=''.
!

selector:aSelector attr: anAttr unit:aUnit


attr:=anAttr.
selector:=aSelector.
unit:=aUnit.
!

selector:aSelector styleAttr: anAttr

attr:=anAttr.
selector:=aSelector.
unit:=''.
!

selector:aSelector styleAttr: anAttr unit:aUnit

attr:=anAttr.
selector:=aSelector.
unit:=aUnit.
! !

!AttrNumb class methodsFor: 'instance creation'!

selector: aSelector attr: anAttr
^ self new selector: aSelector attr: anAttr.
!

selector: aSelector attr: anAttr unit:aUnit

^ self new selector: aSelector attr: anAttr unit:aUnit
!

selector: aSelector styleAttr: anAttr unit:aUnit

^ self new selector: aSelector styleAttr: anAttr unit:aUnit
! !

VarNumb subclass: #StyleAttrNumb
	instanceVariableNames: 'selector attr unit'
	package: 'DomBinding'!

!StyleAttrNumb methodsFor: 'accessing'!

attr

^attr
!

numb

^val
!

numb:aNumb

val:=aNumb
!

selector

^selector
! !

!StyleAttrNumb methodsFor: 'assigning'!

dBind
|mutationObserver myObserver config mutationHandler|

mutationHandler:=[:mutationRecords| mutationRecords do:[:each||temp| 
temp:=each target asJQuery css: self attr.self numb:(temp copyFrom:0 to: temp size- unit size ) asNumber.]].

(HTMLCanvas isWebkit) ifTrue:[mutationObserver:='WebKitMutationObserver'.]
                                            ifFalse:[mutationObserver:='MutationObserver'.].
                                            
 "mutation observer is native code, thus it is not a BlockClosure"
myObserver:= NativeFunction constructor: mutationObserver value: mutationHandler.

config:=HashedCollection new.
config at:'attributes' put:true.
config at:'attributeFilter' put: (Array new add: self attr).


selector asJQuery toArray do: [:each| myObserver observe: each with: config.].
           

^self
!

updateSelf


selector asJQuery css:attr to: val asString,unit.
! !

!StyleAttrNumb methodsFor: 'initializing'!

initialize

super initialize
!

selector:aSelector attr: anAttr


attr:=anAttr.
selector:=aSelector.
unit:=''.
!

selector:aSelector attr: anAttr unit:aUnit


attr:=anAttr.
selector:=aSelector.
unit:=aUnit.
! !

!StyleAttrNumb class methodsFor: 'instance creation'!

selector: aSelector attr: anAttr

^ self new selector: aSelector attr: anAttr.
!

selector: aSelector attr: anAttr unit:aUnit

^ self new selector: aSelector attr: anAttr unit:aUnit
! !

Var subclass: #VarString
	instanceVariableNames: ''
	package: 'DomBinding'!

!VarString methodsFor: 'accessing'!

asciiValue
	<return self._string().charCodeAt(0);>
!

at: anIndex ifAbsent: aBlock
	<return String(self._string()).charAt(anIndex - 1) || aBlock()>
!

escaped
	<return escape(self._string())>
!

size
	<return self._string().length>
!

string

^val
!

unescaped
	<return unescape(self)>
! !

!VarString methodsFor: 'comparing'!

< aString
	<return String(self._string()) < aString._asString()>
!

<= aString
	<return String(self._string()) <= aString._asString()>
!

= aString
		<
    	if(!! aString._isString || !! aString._isString()) {
        	return false;
        }
	return String(self._string()) === String(aString)>
!

== aString
	^self string = aString
!

> aString
	<return String(self._string()) >> aString._asString()>
!

>= aString
	<return String(self._string()) >>= aString._asString()>
! !

!VarString methodsFor: 'converting'!

asJSON
	^self string.
!

asJavaScriptSelector
	^(self string asSelector replace: '^_' with: '') replace: '_.*' with: ''.
!

asJavascript
	<
		if(self._string().search(/^[a-zA-Z0-9_:.$ ]*$/) == -1)
			return "\"" + self.replace(/[\x00-\x1f"\\\x7f-\x9f]/g, function(ch){var c=ch.charCodeAt(0);return "\\x"+("0"+c.toString(16)).slice(-2)}) + "\"";
		else
			return "\"" + self._string() + "\"";
	>
!

asLowercase
	<return self._string().toLowerCase()>
!

asNumber
	<return Number(self._string())>
!

asSelector
	"If you change this method, change smalltalk.convertSelector too (see js/boot.js file)"

	| selector |
	selector := '_', self string.
	selector := selector replace: ':' with: '_'.
	selector := selector replace: '[+]' with: '_plus'.
	selector := selector replace: '-' with: '_minus'.
	selector := selector replace: '[*]' with: '_star'.
	selector := selector replace: '[/]' with: '_slash'.
	selector := selector replace: '>' with: '_gt'.
	selector := selector replace: '<' with: '_lt'.
	selector := selector replace: '=' with: '_eq'.
	selector := selector replace: ',' with: '_comma'.
	selector := selector replace: '[@]' with: '_at'.
	^selector
!

asString
	^self string.
!

asSymbol
	^Symbol lookup: self string.
!

asUppercase
	<return self._string().toUpperCase()>
!

reversed
	<return self._string().split("").reverse().join("")>
!

tokenize: aString
	<return self._string().split(aString)>
! !

!VarString methodsFor: 'copying'!

, aString
	<return self._string() + aString>
!

copyFrom: anIndex to: anotherIndex
	<return self._string().substring(anIndex - 1, anotherIndex)>
! !

!VarString methodsFor: 'enumerating'!

do: aBlock
	<for(var i=0;i<self._string().length;i++){aBlock(self._string().charAt(i));}>
!

withIndexDo: aBlock
	<for(var i=0;i<self._string().length;i++){aBlock(self._string().charAt(i), i+1);}>
! !

!VarString methodsFor: 'initializing'!

initialize

super initialize
! !

!VarString methodsFor: 'printing'!

printNl
	<console.log(self._string())>
!

printString
	^'''', self string, ''''
! !

!VarString methodsFor: 'regular expressions'!

match: aRegexp
	<return self._string().search(aRegexp) !!= -1>
!

matchesOf: aRegularExpression
      <return self._string().match(aRegularExpression)>
!

replace: aString with: anotherString
	^self replaceRegexp: (RegularExpression fromString: aString flag: 'g') with: anotherString
!

replaceRegexp: aRegexp with: aString
	<return self._string().replace(aRegexp, aString)>
!

trimBoth
	^self trimBoth: '\s'
!

trimBoth: separators

	^(self trimLeft: separators) trimRight: separators
!

trimLeft
	^self trimLeft: '\s'
!

trimLeft: separators

	^self replaceRegexp: (RegularExpression fromString: '^[', separators, ']+' flag: 'g') with: ''
!

trimRight
	^self trimRight: '\s'
!

trimRight: separators

	^self replaceRegexp: (RegularExpression fromString: '[', separators, ']+$' flag: 'g') with: ''
! !

!VarString methodsFor: 'split join'!

join: aCollection 
	^ String
		streamContents: [:stream | aCollection
				do: [:each | stream nextPutAll: each asString] 
				separatedBy: [stream nextPutAll: self string]]
!

lineIndicesDo: aBlock
	"execute aBlock with 3 arguments for each line:
	- start index of line
	- end index of line without line delimiter
	- end index of line including line delimiter(s) CR, LF or CRLF"
	
	| cr lf start sz nextLF nextCR |
	start := 1.
	sz := self size.
	cr := String cr.
	nextCR := self indexOf: cr startingAt: 1.
	lf := String lf.
	nextLF := self indexOf: lf startingAt: 1.
	[ start <= sz ] whileTrue: [
		(nextLF = 0 and: [ nextCR = 0 ])
			ifTrue: [ "No more CR, nor LF, the string is over"
					aBlock value: start value: sz value: sz.
					^self string].
		(nextCR = 0 or: [ 0 < nextLF and: [ nextLF < nextCR ] ])
			ifTrue: [ "Found a LF"
					aBlock value: start value: nextLF - 1 value: nextLF.
					start := 1 + nextLF.
					nextLF := self indexOf: lf startingAt: start ]
			ifFalse: [ 1 + nextCR = nextLF
				ifTrue: [ "Found a CR-LF pair"
					aBlock value: start value: nextCR - 1 value: nextLF.
					start := 1 + nextLF.
					nextCR := self indexOf: cr startingAt: start.
					nextLF := self indexOf: lf startingAt: start ]
				ifFalse: [ "Found a CR"
					aBlock value: start value: nextCR - 1 value: nextCR.
					start := 1 + nextCR.
					nextCR := self indexOf: cr startingAt: start ]]]
!

lineNumber: anIndex
	"Answer a string containing the characters in the given line number."

	| lineCount |
	lineCount := 0.
	self lineIndicesDo: [:start :endWithoutDelimiters :end |
		(lineCount := lineCount + 1) = anIndex ifTrue: [^self copyFrom: start to: endWithoutDelimiters]].
	^nil
!

lines
	"Answer an array of lines composing this receiver without the line ending delimiters."

	| lines |
	lines := Array new.
	self linesDo: [:aLine | lines add: aLine].
	^lines
!

linesDo: aBlock
	"Execute aBlock with each line in this string. The terminating line
	delimiters CR, LF or CRLF pairs are not included in what is passed to aBlock"

	self lineIndicesDo: [:start :endWithoutDelimiters :end |
		aBlock value: (self copyFrom: start to: endWithoutDelimiters)]
! !

!VarString methodsFor: 'testing'!

includesSubString: subString
	< return self._string().indexOf(subString) !!= -1 >
!

isString
	^true
! !

!VarString class methodsFor: 'accessing'!

cr
	<return '\r'>
!

crlf
	<return '\r\n'>
!

lf
	<return '\n'>
!

space
	<return ' '>
!

streamClass
	    ^StringStream
!

tab
	<return '\t'>
! !

!VarString class methodsFor: 'instance creation'!

fromCharCode: anInteger
	<return String.fromCharCode(anInteger)>
!

fromString: aString
	    <return new self.fn(aString)>
!

streamContents: blockWithArg
	|stream|
	stream := (self streamClass on: String new).
	blockWithArg value: stream.
	^ stream contents
!

value: aUTFCharCode

	<return String.fromCharCode(aUTFCharCode);>
! !

VarString subclass: #AttrString
	instanceVariableNames: 'selector attr'
	package: 'DomBinding'!

!AttrString methodsFor: 'accessing'!

attr

^attr
!

selector

^selector
!

string

^val
!

string: aString

val:=aString
! !

!AttrString methodsFor: 'assigning'!

dBind
|mutationObserver myObserver config mutationHandler|

mutationHandler:=[:mutationRecords| mutationRecords do:[:each||temp| 
temp:=each target asJQuery attr: self attr. self string:temp.
                                      ]].
(HTMLCanvas isWebkit) ifTrue:[mutationObserver:='WebKitMutationObserver'.]
                                            ifFalse:[mutationObserver:='MutationObserver'.].
                                            
 "mutation observer is native code, thus it is not a BlockClosure"
myObserver:= NativeFunction constructor: mutationObserver value: mutationHandler.

config:=HashedCollection new.
config at:'attributes' put:true.
config at:'attributeFilter' put: (Array new add: self attr).

                  
selector asJQuery toArray do: [:each| myObserver observe: each with: config.].
           

^self
!

updateSelf

selector asJQuery attr:attr to: val.
! !

!AttrString methodsFor: 'initializing'!

initialize

super initialize
!

selector:aSelector attr: anAttr


attr:=anAttr.
selector:=aSelector.
! !

!AttrString class methodsFor: 'instance creation'!

selector: aSelector attr: anAttr

^ self new selector: aSelector attr: anAttr
! !

VarString subclass: #ContentString
	instanceVariableNames: 'selector'
	package: 'DomBinding'!

!ContentString methodsFor: 'accessing'!

selector

^selector
!

string

^val
!

string: aString

val:=aString
! !

!ContentString methodsFor: 'assigning'!

dBind
|mutationObserver myObserver config mutationHandler|

mutationHandler:=[:mutationRecords| mutationRecords do:[:each||temp| 
                                  temp:=each target asJQuery prop: 'textContent'. self string:temp. 
                                    ]].
(HTMLCanvas isWebkit) ifTrue:[mutationObserver:='WebKitMutationObserver'.]
                                            ifFalse:[mutationObserver:='MutationObserver'.].
                                            
 "mutation observer is native code, thus it is not a BlockClosure"
myObserver:= NativeFunction constructor: mutationObserver value: mutationHandler.

config:=HashedCollection new.
config at:'characterData' put:true.

                       
selector asJQuery toArray do: [:each| myObserver observe: each with: config.].
           

^self
!

updateSelf

selector asJQuery prop:'textContent' to: val.
! !

!ContentString methodsFor: 'initializing'!

initialize

super initialize
!

selector:aSelector

selector:=aSelector.
! !

!ContentString class methodsFor: 'instance creation'!

selector: aSelector 

^ self new selector: aSelector.
! !

VarString subclass: #StyleAttrString
	instanceVariableNames: 'selector attr'
	package: 'DomBinding'!

!StyleAttrString methodsFor: 'accessing'!

attr

^attr
!

selector

^selector
!

string

^val
!

string: aString

val:=aString
! !

!StyleAttrString methodsFor: 'assigning'!

dBind
|mutationObserver myObserver config mutationHandler|

mutationHandler:=[:mutationRecords| mutationRecords do:[:each||temp| 
                               temp:=each target css: self attr.self string:temp.]].
(HTMLCanvas isWebkit) ifTrue:[mutationObserver:='WebKitMutationObserver'.]
                                            ifFalse:[mutationObserver:='MutationObserver'.].
                                            
 "mutation observer is native code, thus it is not a BlockClosure"
myObserver:= NativeFunction constructor: mutationObserver value: mutationHandler.

config:=HashedCollection new.
config at:'attributes' put:true.
config at:'attributeFilter' put: (Array new add: self attr).

                       
selector asJQuery toArray do: [:each| myObserver observe: each with: config.].
           

^self
!

updateSelf


selector asJQuery css:attr to: val.
! !

!StyleAttrString methodsFor: 'initializing'!

initialize

super initialize
!

selector:aSelector attr: anAttr


attr:=anAttr.
selector:=aSelector.
! !

!StyleAttrString class methodsFor: 'instance creation'!

selector: aSelector attr: anAttr

^ self new selector: aSelector attr: anAttr
! !

