Smalltalk current createPackage: 'CSSCanvas' properties: #{}!
Object subclass: #CSSCanvas
	instanceVariableNames: 'component pid'
	package: 'CSSCanvas'!

!CSSCanvas methodsFor: 'css'!

selector: aSelector attr: anAttr val: aVal

pid, ' ', aSelector asJQuery css: anAttr to: aVal.
! !

!CSSCanvas methodsFor: 'initializing'!

component: aComponent 
"the id of the component that was given by th parent"

pid:=aComponent pid.
! !

!CSSCanvas class methodsFor: 'not yet classified'!

new: aComponent

self new component:aComponent.
! !

