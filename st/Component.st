Smalltalk current createPackage: 'Component' properties: #{}!
Object subclass: #Component
	instanceVariableNames: 'attachedCon parent pid mid position connectors variables'
	package: 'Component'!

!Component methodsFor: 'accessing'!

pid
^pid
!

variables

^variables
! !

!Component methodsFor: 'initializing'!

assignId
"returns a unique id to be used by the connected subcomponent"
|smid|
mid:=mid+1.
smid:=pid,mid asString,'0'.
^smid.
!

connect: aConnector at: aPosition to: aParent

|ids|

attachedCon := aConnector.
parent := aParent.
pid := parent assignId.
mid := 0.
position:=aPosition.

aConnector at: 'connected' at:aPosition put: self.

ids:=self realize.
self setConnectorsFrom:ids.
self setVariablesFrom:ids.




^variables
!

connect: aConnector to: aParent


self connect: aConnector at: ((aConnector at: 'connected' size)+1) to: aParent
! !

!Component methodsFor: 'private'!

paintOn: css
"using the CSSCanvas, select attributes from the subtree and paint them"

   self subclassResponsibility
!

realize

|html css ids|

attachedCon at: 'elementId',' ',':nth-child(',position asString,')' asJQuery after: '<div id=',pid,'></div>'.
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

!Component methodsFor: 'variable api'!

connectVarTo: aConnectorPosition to:aPosition

"position 1 is the position of the connector, position2 is the position inside the connector.
All variables must be connected or passed to the upper component.
"

self self subclassResponsibility
! !

!Component class methodsFor: 'not yet classified'!

connect: aConnector at: aPosition to: aParent

^ self new connect: aConnector at: aPosition to: aParent
!

connect: aConnector to: aParent

^ self new connect: aConnector to: aParent.
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

