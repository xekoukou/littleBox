Smalltalk current createPackage: 'Component' properties: #{}!
Object subclass: #Component
	instanceVariableNames: 'attachedConPosition parent pid mid position connectors variables'
	package: 'Component'!

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

self self subclassResponsibility
! !

!Component methodsFor: 'initializing'!

assignId
"returns a unique id to be used by the connected subcomponent"
|smid|
mid:=mid+1.
smid:=pid,mid asString,'0'.
^smid.
!

connect: aConnectorPosition at: aPosition to: aParent

|ids|

attachedConPosition := aConnectorPosition.
parent := aParent.
pid := parent assignId.
mid := 0.
position:=aPosition.

parent connectors at: aConnectorPosition at: 'connected' at:aPosition put: self.

ids:=self realize.
self setConnectorsFrom:ids.
self setVariablesFrom:ids.



parent connectVarsTo: aConnectorPosition to: aPosition.
!

connect: aConnectorPosition to: aParent


self connect: aConnectorPosition at: ((parent connectors at: aConnectorPosition at: 'connected' size)+1) to: aParent
! !

!Component methodsFor: 'private'!

paintOn: css
"using the CSSCanvas, select attributes from the subtree and paint them"

   self subclassResponsibility
!

realize

|html css ids|

parent attachedConPosition at: 'elementId',' ',':nth-child(',position asString,')' asJQuery after: '<div id=',pid,'></div>'.
html := HTMLCanvas onJQuery: '#',pid asJQuery.
ids:=self renderOn: html.
css := CSSCanvas new:self.
self paintOn:css from: ids.

^ids.
!

renderOn: html

"Use the html canvas to render a component
It should return the unique ids(array) that are created so as to be passed to setVariables and
SetConnectors"

self subclassResponsibility
!

setConnectorsFrom: anArray

"Used to initializing the connectors"

self subclassResponsibility
!

setVariablesFrom: anArray

"Used to initializing the binding Variables"

self subclassResponsibility
! !

!Component class methodsFor: 'not yet classified'!

connect: aConnectorPosition at: aPosition to: aParent

^ self new connect: aConnectorPosition at: aPosition to: aParent
!

connect: aConnectorPosition to: aParent

^ self new connect: aConnectorPosition to: aParent.
! !

Dictionary subclass: #Connector
	instanceVariableNames: ''
	package: 'Component'!

!Connector methodsFor: 'initializing'!

initialize

super initialize
! !

!Connector class methodsFor: 'instance creation'!

position: anInteger elementId:anElementId

^ self new at: 'position' put: anInteger; at: 'elementId' put: anElementId; at: 'connected' put: Array new; yourself.
! !

