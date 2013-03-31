Smalltalk current createPackage: 'Component'!
Dictionary subclass: #Connectors
	instanceVariableNames: ''
	package: 'Component'!

!Connectors methodsFor: 'initializing'!

addConnectorId: anElementId

"ElementId should be the internal mid of a connector"
self at: anElementId put: Array new.
!

initialize

super initialize
! !

Object subclass: #Domain
	instanceVariableNames: 'url'
	package: 'Component'!

!Domain methodsFor: 'not yet classified'!

url

^ url
!

url: anUrl

url := anUrl.
! !

!Domain class methodsFor: 'not yet classified'!

url: anUrl

^ self new url: anUrl; yourself.
! !

Domain subclass: #Component
	instanceVariableNames: 'connectorId position parent pid mid connectors variables equations'
	package: 'Component'!

!Component methodsFor: 'accessing'!

connectors

^connectors
!

equations

^equations
!

pid
^pid
!

variables

^variables
! !

!Component methodsFor: 'binding'!

bindComp: aComponent atCon: aConnectorId atPos: aPosition

self connectors ifNotNil: [ (self connectors at: aConnectorId) at:aPosition put: aComponent. ].
self equations ifNotNil: [ self bindVars: aComponent variables conId: aConnectorId pos: aPosition. ].
!

bindVars: aVariables conId: aConnectorId pos: aPosition

"aPosition is the position of the component as a child of the the connector element"


self equations do: 
	[ :equation | aVariables do: 
    	[ :variable| |vector| vector:= Array new. 
   			vector add: aConnectorId; add: aPosition. 
            vector add: variable selector.
        	(variable isIntermediate) 
        		ifTrue:[vector add: 'intermediate'. vector add: variable.]
    			ifFalse: [ 
            		(variable isStyleAttr) 
            			ifTrue:[ vector add: 'styleAttr'. 
                        	vector add:variable attr.] 
                   		ifFalse:[
                      		(vector isContent) 
                      			 ifTrue: [  vector add: 'content'. ] 
                                 ifFalse: [ vector add: 'attr'. vector add:variable attr.] ] .
  		  	 		vector add: variable.] .
 				equation addInputVar: vector.  ] ].
! !

!Component methodsFor: 'diconnecting'!

disconnectCompAt: aConnectorId at: aPosition

|selector|

"remove from DOM"
selector := pid,aConnectorId,' ',':nth-child(',(aPosition - 1) asString,')'.
selector asJQuery remove.

"remove from Connectors"
(self connectors at: aConnectorId) remove: aPosition ifAbsent:[].

"disconnect variables"
self equations do: [ :each | each removeCompVarFrom: aConnectorId from: aPosition].
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

connect: aConnectorId at: aPosition to: aParent

"the connectorId is the id of the element that a connector represents wthout the pid of the parent"


url := aParent url.

connectorId := aConnectorId.
parent := aParent.
pid := parent assignId.
position:=aPosition.

self function.


self setConnectors.
self setVariables.
self setEquations.

parent bindComp: self atCon: aConnectorId atPos: aPosition
self realize.
!

connect: aConnectorId to: aParent


self connect: aConnectorId at: ((aParent connectors at: aConnectorId) size+1) to: aParent
!

initialize

super initialize.
mid := 0.
!

root: anUrl

url:= anUrl.

pid:=''.
connectors:=Connectors new.
connectors addConnectorId: ''.
'body' asJQuery append:'<div id = 0> </div>'.
(connectors at:'') at:0 put: ('#0' asJQuery get:0).
! !

!Component methodsFor: 'private'!

realize

|html css selector jq|

 jq := ('#',(parent pid),connectorId) asJQuery.
 (jq children length = 0)
 ifTrue:[
   	selector := '#',(parent pid),connectorId,'0'.
 	jq := selector asJQuery.
	jq append: '<div id = ', pid ,'></div>'. ]
  ifFalse:[
selector := '#',(parent pid),connectorId,'0 ',':nth-child(',position asString,')'.
jq := selector asJQuery.
jq after: '<div id = ', pid ,'></div>'.
].
html := HTMLCanvas onJQuery: ('#',pid) asJQuery.
self renderOn: html.
css := CSSCanvas new: self.
self paintOn:css
! !

!Component methodsFor: 'subclassing'!

function

"here is the functionality of the component
here it sets what to do with input from the user or the server
here the component can also act as a creator of other components"
!

paintOn: css
"using the CSSCanvas, select attributes from the subtree and paint them"
!

renderOn: html

"Use the html canvas to render a component"
!

setConnectors

"Used to initialize the connectors"
!

setEquations

"Used to initialize the Equations"
!

setVariables

"Used to initializing the binding Variables"
! !

!Component class methodsFor: 'not yet classified'!

connect: anElementId at: aPosition to: aParent

^ self new connect: anElementId at: aPosition to: aParent ; yourself
!

connect: anElementId to: aParent

^ self new connect: anElementId to: aParent ;yourself.
!

root: anUrl

 ^ self new root:anUrl ; yourself.
! !

Object subclass: #Equation
	instanceVariableNames: 'input output'
	package: 'Component'!
!Equation commentStamp!
"An equation is a static part of a component that links its variables with the variables of the connected components variables

input
Dictionary dim 1 mid of parent connector
                  dim 2 child position or -1 that means any position
                  dim 3 selector without the pid of the attached component
                  dim 4 type of attribute/variable (attr, styleAttr, intermediary variable)
                  dim 5 value of attribute (height, etc only if it is not an intermediary variable)
                  dim 6 the actual variable
                  
The first 5 dimensions are static and play the role of the rules whether an input var is part of the equation or not

output
    Array
    
Since the equation lives inside a component there is no output api. This is static

"!

!Equation methodsFor: 'computing'!

compute

"static function definition"

self subclassResponsibility
!

reverseCompute

"static function definition"

self subclassResponsibility
! !

!Equation methodsFor: 'connecting'!

addInputVar: aVector

"aVector is an Array of the input space, the last  dim is the input variable"

|dim1 dim2 dim3 dim4 dim5|

dim1 := input at: aVector at: 1 ifAbsent:[^nil].
dim2 := dim1 at: aVector at: 2 ifAbsent:[ dim2 := dim1 at: (-1) ifAbsent:[^nil]].
dim3 := dim2 at: aVector at: 3 ifAbsent:[^nil].
dim4 := dim3 at: aVector at: 4 ifAbsent:[^nil].
((aVector at: 4 = 'intermediate') |(aVector at: 4 = 'content') ) 
	ifTrue: [ dim4 := aVector at: 5. ]
   	ifFalse:[ dim5 := dim4 at: aVector at: 5  ifAbsent:[^nil].
 		dim5 := aVector at: 6. ].
!

removeCompVarFrom: aConnectorId from: aPosition


|dim1 dim2|

dim1 := input at: aConnectorId.
dim2 := dim1 at: aPosition.
dim2 do:[:dim3| 
dim3 do: [:dim4| dim4 keysAndValuesDo: [ :key :dim5 | 
                ((key = 'intermediate') |(key = 'content') ) 
                ifTrue: [dim5 = nil]
              	ifFalse: [dim5 do: [:each| each = nil]]
      			]]].
! !

!Equation methodsFor: 'initializing'!

initialize

super initialize

self defineConnectionRules.
!

output: anOutput

output:= anOutput.
! !

!Equation methodsFor: 'private'!

defineConnectionRules

"input Dictionary that is used to check whether an input varialbe (obtained through a connection) should be linked to this function 
Dictionary dim 1 selector
                  dim 2 child position or -1 that means any position
                  dim 3 type of attribute/variable (attr, styleAttr, intermediary variable)
                  dim 4 value of attribute (height, etc only if it is not an intermediary variable)
                  
dim4 should contain an Array in which the variables will be put.
(dim3 in case of an intermediary var)
"

self subclassResponsibility
! !

!Equation class methodsFor: 'not yet classified'!

new: anOutput

"the output space is a static api and is predifined when a component class and the equation class are written.
the component simply initializes the output and passes it at the equation"

^ self new
! !

