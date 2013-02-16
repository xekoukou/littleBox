Smalltalk current createPackage: 'Component' properties: #{}!
Object subclass: #Component
	instanceVariableNames: 'elementId position parent pid mid connectors variables'
	package: 'Component'!
!Component commentStamp!
"
Variables
Dictionary
	check output format
"!

!Component methodsFor: 'accessing'!

connectors

^connectors
!

pid
^pid
!

variables

^variables
! !

!Component methodsFor: 'connecting variables'!

connectVarsTo: aConnectorPosition to:aPosition

"position 1 is the position of the connector, position2 is the position inside the connector.
All variables must be connected or passed to the upper component.
"

self subclassResponsibility
! !

!Component methodsFor: 'diconnecting'!

disconnect

"needs to remove element from DOM tree first"

parent disconnectCompFrom: elementId from: position.
!

disconnectCompFrom: anElementId from: aPosition
! !

!Component methodsFor: 'functioning'!

function

"here is the functionality of the component
here it sets what to do with input from the user or the server
here the component can also act as a creator of other components"

self subclassResponsibility
! !

!Component methodsFor: 'initializing'!

assignId
"returns a unique id to be used by the connected subcomponent"
|smid|

mid := mid + 1.
( ( mid/10 ) truncated = (mid/10)) ifTrue: [mid := mid + 1.].
smid := pid , mid asString, '0'.
^ smid.
!

connect: anElementId at: aPosition to: aParent

"the ElementId is the internal to the parent mid of the element we want"
|ids|

elementId := anElementId.
parent := aParent.
pid := parent assignId.
mid := 0.
position:=aPosition.

parent connectors at: anElementId at:aPosition put: self.

ids:=self realize.
self setConnectors.
self setVariables.



parent connectVarsTo: anElementId to: aPosition.
!

connect: anElementId to: aParent


self connect: anElementId at: ((parent connectors at: anElementId size)+1) to: aParent
!

initialize

super initialize
! !

!Component methodsFor: 'private'!

paintOn: css
"using the CSSCanvas, select attributes from the subtree and paint them"

   self subclassResponsibility
!

realize

|html css ids|

parent pid,'0',elementId,' ',':nth-child(',position asString,')' asJQuery after: '<div id=',pid,'></div>'.
html := HTMLCanvas onJQuery: '#',pid asJQuery.
self renderOn: html.
css := CSSCanvas new:self.
self paintOn:css
!

renderOn: html

"Use the html canvas to render a component"

self subclassResponsibility
!

setConnectors

"Used to initializing the connectors"

self subclassResponsibility
!

setVariables

"Used to initializing the binding Variables"

self subclassResponsibility
! !

!Component class methodsFor: 'not yet classified'!

connect: anElementId at: aPosition to: aParent

^ self new connect: anElementId at: aPosition to: aParent
!

connect: anElementId to: aParent

^ self new connect: anElementId to: aParent.
! !

Dictionary subclass: #Connectors
	instanceVariableNames: ''
	package: 'Component'!

!Connectors methodsFor: 'initializing'!

initialize

super initialize
! !

!Connectors class methodsFor: 'instance creation'!

elementId: anElementId

"ElementId should be the internal mid of a connector"
^ self new at: anElementId put: Array new; yourself.
! !

Object subclass: #Equation
	instanceVariableNames: 'input output connectionRules'
	package: 'Component'!
!Equation commentStamp!
"An equation is a static part of a component that links its variables with the variables of the connected components variables

input
Dictionary dim 1 selector
                  dim 2 child position or -1 that means any position
                  dim 3 type of attribute/variable (attr, styleAttr, intermediary variable)
                  dim 4 value of attribute (height, etc only if it is not an intermediary variable)
                  dim 5 the actual variable

output
Dictionary dim 1 selector
                  dim 3 type of attribute/variable (attr, styleAttr, intermediary variable)
                  dim 4 value of attribute (height, etc only if it is not an intermediary variable)
                  dim 5 the actual variable

"!

!Equation methodsFor: 'initializing'!

compute

"static function definition"

self subclassResponsibility
!

defineConnectionRules

"input Dictionary that is used to check whether an input varialbe (obtained through a connection) should be linked to this function 
Dictionary dim 1 selector
                  dim 2 child position or -1 that means any position
                  dim 3 type of attribute/variable (attr, styleAttr, intermediary variable)
                  dim 4 value of attribute (height, etc only if it is not an intermediary variable)
"

self subclassResponsibility
!

initialize

super initialize
!

reverseCompute

"static function definition"

self subclassResponsibility
! !

