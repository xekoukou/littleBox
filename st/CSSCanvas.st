Smalltalk current createPackage: 'CSSCanvas' properties: #{}!
Object subclass: #CSSCanvas
	instanceVariableNames: ''
	package: 'CSSCanvas'!

!CSSCanvas methodsFor: 'not yet classified'!

selector: aSelector attr: anAttr val: aVal

aSelector asJQuery css: anAttr to:aVal.
! !

