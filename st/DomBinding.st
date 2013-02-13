Smalltalk current createPackage: 'DomBinding' properties: #{}!
Object subclass: #Attr
	instanceVariableNames: 'style val attr selector'
	package: 'DomBinding'!

!Attr methodsFor: 'accessing'!

attr

^attr
!

selector

^selector
!

val

^val
! !

!Attr methodsFor: 'assigning'!

dBind
|mutationObserver myObserver config mutationHandler|

mutationHandler:=[:mutationRecords| mutationRecords do:[:each||temp| 
                                 (style) ifTrue:[<temp=($(each.target).attr(self._attr()));>. self is:temp.]
                                            ifFalse:[<temp=($(each.target).css(self._attr()));>.self is:temp.]]].

(HTMLCanvas isWebkit) ifTrue:[mutationObserver:=window WebKitMutationObserver.]
                                            ifFalse:[mutationObserver:=window MutationObserver.].
                                            
 
<myObserver= new mutationObserver(mutationHandler);>.


(style:=true)ifTrue:[<config={attributes: true, attributeFilter:[self._attr()] }>.]
                       ifFalse:[<config={characterData: true, attributes: true, attributeFilter:[self._attr()] }>.].
                       
selector asJQuery toArray do: [:each| myObserver observe: each with: config.].
           

^self
!

is: anObject
 "not assigning the reference of the object to the variable.
 changing the object that is already referenced by the varriable"

	(anObject class == self class) ifTrue:[val:=anObject val]
                                                     ifFalse:[ val:=anObject.].
                                                     
   self updateSelf.
! !

!Attr methodsFor: 'updating'!

updateSelf

(style) ifFalse:[selector asJQuery attr:attr to: val]
            ifTrue:[selector asJQuery css:attr to: val]
! !

!Attr class methodsFor: 'instance creation'!

selector: aSelector attr: anAttr

^ self new selector: aSelector attr: anAttr
!

selector: aSelector styleAttr: anAttr

^ self new selector: aSelector styleAttr: anAttr
! !

Attr subclass: #AttrNumb
	instanceVariableNames: 'numb unit'
	package: 'DomBinding'!

!AttrNumb methodsFor: 'accessing'!

attr

^attr
!

numb

^val
!

selector

^selector
! !

!AttrNumb methodsFor: 'arithmetic'!

* anObject

|aNumber|

	(anObject class == self class) ifTrue:[aNumber:=anObject numb]
                                                     ifFalse:[aNumber:= anObject].

	"Inlined in the Compiler"
	<return self._numb() * aNumber>
!

+ anObject

|aNumber|

	(anObject class == self class) ifTrue:[aNumber:=anObject numb]
                                                     ifFalse:[aNumber:= anObject].
                                                     
	"Inlined in the Compiler"
	<return self._numb() + aNumber>
!

-  anObject

|aNumber|

	(anObject class == self class) ifTrue:[aNumber:=anObject numb]
                                                     ifFalse:[aNumber:= anObject].
	"Inlined in the Compiler"
	<return self._numb() - aNumber>
!

/ anObject

|aNumber|

	(anObject class == self class) ifTrue:[aNumber:=anObject numb]
                                                     ifFalse:[aNumber:= anObject].
	"Inlined in the Compiler"
	<return self._numb() / aNumber>
!

\\ anObject

|aNumber|

	(anObject class == self class) ifTrue:[aNumber:=anObject numb]
                                                     ifFalse:[aNumber:= anObject].
	<return self.numb() % aNumber>
!

abs
	^ <Math.abs(self._numb());>
!

max: anObject

|aNumber|

	(anObject class == self class) ifTrue:[aNumber:=anObject numb]
                                                     ifFalse:[aNumber:= anObject].
	<return Math.max(self._numb(), aNumber);>
!

min: anObject

|aNumber|

	(anObject class == self class) ifTrue:[aNumber:=anObject numb]
                                                     ifFalse:[aNumber:= anObject].
                                                     
	<return Math.min(self._numb(), aNumber);>
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

!AttrNumb methodsFor: 'assigning'!

dBind
|mutationObserver myObserver config mutationHandler|

mutationHandler:=[:mutationRecords| mutationRecords do:[:each||temp| 
                                 (style) ifTrue:[<temp=($(each.target).attr(self._attr()));>. self is:(temp copyFrom:0 to: temp size- unit size ) asNumber.]
                                            ifFalse:[<temp=($(each.target).css(self._attr()));>.self is:(temp copyFrom:0 to: temp size- unit size ) asNumber.]]].

(HTMLCanvas isWebkit) ifTrue:[mutationObserver:=window WebKitMutationObserver.]
                                            ifFalse:[mutationObserver:=window MutationObserver.].
                                            
 
<myObserver= new mutationObserver(mutationHandler);>.


(style:=true)ifTrue:[<config={attributes: true, attributeFilter:[self._attr()] }>.]
                       ifFalse:[<config={characterData: true, attributes: true, attributeFilter:[self._attr()] }>.].
                       
selector asJQuery toArray do: [:each| myObserver observe: each with: config.].
           

^self
!

updateSelf

(style) ifFalse:[selector asJQuery attr:attr to: val asString,unit]
            ifTrue:[selector asJQuery css:attr to: val asString,unit]
! !

!AttrNumb methodsFor: 'comparing'!

< anObject

|aNumber|

	(anObject class == self class) ifTrue:[aNumber:=anObject numb]
                                                     ifFalse:[aNumber:= anObject].
	"Inlined in the Compiler"
	<return self._numb() < aNumber>
!

<= anObject

|aNumber|

	(anObject class == self class) ifTrue:[aNumber:=anObject numb]
                                                     ifFalse:[aNumber:= anObject].
	"Inlined in the Compiler"
	<return self._numb() <= aNumber>
!

= anObject

|aNumber|

	(anObject class == self class) ifTrue:[aNumber:=anObject numb]
                                                     ifFalse:[aNumber:= anObject].
	aNumber isNumber ifFalse: [^false]. 
	<return Number(self._numb()) == aNumber>.
!

>anObject

|aNumber|

	(anObject class == self class) ifTrue:[aNumber:=anObject numb]
                                                     ifFalse:[aNumber:= anObject].
	"Inlined in the Compiler"
	<return self._numb() >> aNumber>
!

>= anObject

|aNumber|

	(anObject class == self class) ifTrue:[aNumber:=anObject numb]
                                                     ifFalse:[aNumber:= anObject].
	"Inlined in the Compiler"
	<return self._numb() >>= aNumber>
! !

!AttrNumb methodsFor: 'converting'!

& anObject

|aNumber|

	(anObject class == self class) ifTrue:[aNumber:=anObject numb]
                                                     ifFalse:[aNumber:= anObject].
	<return self._numb() & aNumber>
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
|result|

    self numb >= 0 
        ifTrue: [<result = Math.floor(self.val);>]
        ifFalse: [<result = (Math.floor(self.val * (-1)) * (-1));>].

    ^ result
!

| anObject

|aNumber|

	(anObject class == self class) ifTrue:[aNumber:=anObject numb]
                                                     ifFalse:[aNumber:= anObject].
	<return self.val | aNumber>
! !

!AttrNumb methodsFor: 'enumerating'!

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

!AttrNumb methodsFor: 'initializing'!

selector:aSelector attr: anAttr

style:=false.
attr:=anAttr.
selector:=aSelector.
unit:=''.
!

selector:aSelector attr: anAttr unit:aUnit

style:=false.
attr:=anAttr.
selector:=aSelector.
unit:=aUnit.
!

selector:aSelector styleAttr: anAttr

style:=true.
attr:=anAttr.
selector:=aSelector.
unit:=''.
!

selector:aSelector styleAttr: anAttr unit:aUnit

style:=true.
attr:=anAttr.
selector:=aSelector.
unit:=aUnit.
! !

!AttrNumb methodsFor: 'testing'!

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

!AttrNumb class methodsFor: 'instance creation'!

selector: aSelector attr: anAttr unit:aUnit

^ self new selector: aSelector attr: anAttr unit:aUnit
!

selector: aSelector styleAttr: anAttr unit:aUnit

^ self new selector: aSelector styleAttr: anAttr unit:aUnit
! !

Attr subclass: #AttrString
	instanceVariableNames: 'numb prop'
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
! !

!AttrString methodsFor: 'assigning'!

dBind
|mutationObserver myObserver config mutationHandler|

mutationHandler:=[:mutationRecords| mutationRecords do:[:each||temp| 
                                  (prop) ifTrue:[ <temp=($(each.target).prop(self._attr()));>. self is:temp. ]
                                              ifFalse:[
                                 (style) ifTrue:[<temp=($(each.target).attr(self._attr()));>. self is:temp.]
                                            ifFalse:[<temp=($(each.target).css(self._attr()));>.self is:temp.]]]].
(HTMLCanvas isWebkit) ifTrue:[mutationObserver:=window WebKitMutationObserver.]
                                            ifFalse:[mutationObserver:=window MutationObserver.].
                                            
 
<myObserver= new mutationObserver(mutationHandler);>.


(style:=true)ifTrue:[<config={attributes: true, attributeFilter:[self._attr()] }>.]
                       ifFalse:[<config={characterData: true, attributes: true, attributeFilter:[self._attr()] }>.].
                       
selector asJQuery toArray do: [:each| myObserver observe: each with: config.].
           

^self
!

updateSelf

(prop) ifTrue:[  selector asJQuery prop:attr to: val]
ifFalse:[
(style) ifFalse:[selector asJQuery attr:attr to: val]
            ifTrue:[selector asJQuery css:attr to: val]
          ]
! !

!AttrString methodsFor: 'initializing'!

selector:aSelector attr: anAttr

style:=false.
attr:=anAttr.
selector:=aSelector.
!

selector:aSelector prop: aProp

"one such Aprop is textContent"

style:=false.
attr:=aProp.
selector:=aSelector.
prop:=true.
!

selector:aSelector styleAttr: anAttr

style:=true.
attr:=anAttr.
selector:=aSelector.
! !

!AttrString class methodsFor: 'instance creation'!

selector: aSelector attr: anAttr

^ self new selector: aSelector attr: anAttr
!

selector: aSelector prop: aProp

^ self new selector: aSelector prop: aProp
!

selector: aSelector styleAttr: anAttr

^ self new selector: aSelector styleAttr: anAttr
! !

Object subclass: #Var
	instanceVariableNames: 'val'
	package: 'DomBinding'!

!Var methodsFor: 'accessing'!

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

!Var class methodsFor: 'instance creation'!

selector: aSelector attr: anAttr

^ self new selector: aSelector attr: anAttr
!

selector: aSelector styleAttr: anAttr

^ self new selector: aSelector styleAttr: anAttr
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

|aBoolean|

	(anObject class == self class) ifTrue:[aBoolean:=anObject bool]
                                                     ifFalse:[aBoolean:= anObject].


	aBoolean class = self bool class ifFalse: [^false].
	<return Boolean(self._bool() == true) == aBoolean>
!

== anObject
	^self = anObject
! !

!VarBool methodsFor: 'controlling'!

& anObject

|aBoolean|

	(anObject class == self class) ifTrue:[aBoolean:=anObject bool]
                                                     ifFalse:[aBoolean:= anObject].

	<
	    if(self._bool() == true) {
		return aBoolean;
	    } else {
		return false;
	    }
	>
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

VarBool subclass: #AttrBool
	instanceVariableNames: 'style selector attr'
	package: 'DomBinding'!

!AttrBool methodsFor: 'accessing'!

attr

^attr
!

bool

^val
!

selector

^selector
! !

!AttrBool methodsFor: 'assigning'!

dBind
|mutationObserver myObserver config mutationHandler|

mutationHandler:=[:mutationRecords| mutationRecords do:[:each||temp| 
                                 (style) ifTrue:[<temp=($(each.target).attr(self._attr()));>. self is:temp.]
                                            ifFalse:[<temp=($(each.target).css(self._attr()));>.self is:temp.]]].

(HTMLCanvas isWebkit) ifTrue:[mutationObserver:=window WebKitMutationObserver.]
                                            ifFalse:[mutationObserver:=window MutationObserver.].
                                            
 "mutation observer is native code, thus it is not a BlockClosure"
<myObserver= new mutationObserver(mutationHandler);>.


(style)ifTrue:[<config={attributes: true, attributeFilter:[self._attr()] }>.]
                       ifFalse:[<config={characterData: true, attributes: true, attributeFilter:[self._attr()] }>.].
                       
selector asJQuery toArray do: [:each| myObserver observe: each with: config.].
           

^self
! !

!AttrBool methodsFor: 'initializing'!

selector:aSelector attr: anAttr

style:=false.
attr:=anAttr.
selector:=aSelector.
!

selector:aSelector styleAttr: anAttr

style:=true.
attr:=anAttr.
selector:=aSelector.
! !

!AttrBool class methodsFor: 'instance creation'!

selector: aSelector attr: anAttr

^ self new selector: aSelector attr: anAttr
!

selector: aSelector styleAttr: anAttr

^ self new selector: aSelector styleAttr: anAttr
! !

