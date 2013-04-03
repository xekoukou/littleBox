Smalltalk current createPackage: 'Platanos_Graph'!
Component subclass: #DocGraph
	instanceVariableNames: 'pointer docs rposition lines plines initDoc minPos maxPos'
	package: 'Platanos_Graph'!
!DocGraph commentStamp!
"The Json that is passed to this function has this form:


{ ascendants:[docs]}

or
{ descendants:[docs]}

pointer is the doc that is currently viewed



rposition is the position of the first line that is rendered
minPos and maxPos are the min and max position in which we have information
"!

!DocGraph methodsFor: 'not yet classified'!

afunction



self requestGraph: (Array new add: initDoc; yourself) direction: 1 start: 0.
!

createDocCells

plines 
withIndexDo:[:each :index|
	each
	keysAndValuesDo:[:key :value|
		DocGraph connect: '2' to: self doc: ((lines at:index) at: key)  point: (Point x:value y:index).
		"paint vector"
		((lines at:index) at: key) ascDo:[:other| |x y|
			y := other myPosition: self.
			x := (plines at: y) at: (other at: 'sha1').
			
			Vector on: '10' start: (Point x:(value*50) y:(index*50)) end:(Point x:(x*50) y:(y*50)).
		]
	]
]
!

doc: aDoc

initDoc := aDoc.
!

initialize

super initialize.

docs := HashedCollection new.
lines := Dictionary new.
rposition := 0.
minPos := 0.
maxPos := 0.
lines at: minPos put: (HashedCollection new at: (initDoc at: 'sha1') put: initDoc ;yourself).
pointer := nil.
!

lines

^lines
!

loadJson: aJson start: aPosition

|a initialDoc more direction|

a := JSON parse: aJson.

direction := 1.
more := a at: 'ascendants' ifAbsent:[more := a at: 'descendants'. direction := -1.].
"freeing the memory"


more do: [:each| 
	|doc|	
	
	doc := Doc jsono: each.
	docs at: (doc at:'sha1') put:doc.
].

docs do:[:each|
	docs do:[:other| |temp|
		temp := other at:'psha1' detect:[:psha1| 
						(psha1 = (each at: 'sha1'))].
		temp ifNotNil:[each addAsc:(other at:'sha1')].
		]
	].


self putInLines: direction start: aPosition .
self putInpLines.
!

paintOn: css

css selector: '' attr: 'padding' val: '5px'.
css selector: '' attr: 'box-shadow' val: '1px 1px 3px rgba(0, 0, 0, 0.5)'.
css selector: '' attr: 'border-radius' val: '2px'.
css selector: '' attr: 'margin' val: '3px'.

css selector: '' attr:'position' val: 'fixed'.
css selector: '' attr:'left' val: '0px'.
css selector: '' attr:'top' val: '0px'.
!

putInLines: direction start: aPosition

(direction == -1) ifTrue:[ self putInLinesDesc: aPosition]
                         ifFalse:[ self putInLinesAsc: aPosition].
!

putInLinesAsc: aPosition

| nodes oldnodes prevnodes pos|

pos := aPosition.

nodes := lines at: pos.
oldnodes := HashedCollection new.  "nodes that one of their parent hasnt been found yet"
prevnodes := HashedCollection new. "previous (found) nodes that have at least one oldnode child"

[(nodes size) > 0] whileTrue:[ |nnodes all| 
	nnodes := HashedCollection new.
	nodes do:[:node| node ascDo:[:each| 
	|temp|
	temp := each ascDetect:[:psha1| (nodes includes:psha1) not].
	
	temp ifNil: [nnodes at:(each at:'sha1') put: each.].
	temp ifNotNil:[ oldnodes  at:(each at:'sha1') put: each. 
				prevnodes at:(node at:'sha1') put: node.
				].
	]].
	all := HashedCollection new.
	all addAll: nodes.
	all addAll:prevnodes.
	oldnodes do:[:each| 
	|temp|
	temp := each ascDetect:[:psha1| (all includes:psha1) not].
	
	temp ifNil: [nnodes at:(each at:'sha1') put: each.
		"remove their parents as well."
		each ascDo:[:psha1| prevnodes removeKey:psha1].
		oldnodes removeKey: each at: 'sha1'.
		].
	].
	
	pos := pos + 1.
	lines at: pos put:nnodes.
    nodes := nnodes.
].

maxPos := pos.
!

putInLinesDesc: aPosition

| nodes oldnodes prevnodes pos|

pos := aPosition.

nodes := lines at:pos.
oldnodes := HashedCollection new.  "nodes that one of their parent hasnt been found yet"
prevnodes := HashedCollection new. "previous (found) nodes that have at least one oldnode child"

[(nodes size) > 0] whileTrue:[ |nnodes all| 
	nnodes := HashedCollection new.
	nodes do:[:node| node ascDo:[:each| 
	|temp|
	temp := each at: 'psha1' detect:[:psha1| (nodes includesKey:psha1) not].
	
	temp ifNil: [nnodes at:(each at:'sha1') put: each.].
	temp ifNotNil:[ oldnodes  at:(each at:'sha1') put: each. 
				prevnodes at:(node at:'sha1') put: node.
				].
	]].
	all := HashedCollection new.
	all addAll: nodes.
	all addAll:prevnodes.
	oldnodes do:[:each| 
	|temp|
	temp := each at: 'psha1' detect:[:psha1| (all includesKey:psha1) not].
	
	temp ifNil: [nnodes at:(each at:'sha1') put: each.
		"remove their parents as well."
		each at: 'psha1' do:[:psha1| prevnodes removeKey:psha1].
		oldnodes removeKey: each at: 'sha1'.
		].
	].
	
	pos := pos - 1.
	lines at: pos put:nnodes.
    nodes := nnodes.
].

minPos := pos.
!

putInpLines

|iter pos current nodes siter|

iter := nil.

plines := Dictionary new.

current := Array new.
nodes := HashedCollection new.
plines at:minPos put: nodes.

siter := 0.
(lines at: minPos) do: [:each| 
	nodes at: (each at:'sha1') put: siter.  
	current at: siter put: each. 
	siter:= siter  + 1.
].

pos := minPos+1.
[pos <= maxPos] 
whileTrue:[
	|ncurrent|
	
	ncurrent:= Dictionary new.
	siter:= 0.
	nodes := HashedCollection new.
    plines at:pos put: nodes.
	
	iter := lines at: pos.
	current 
	do:[:each| 
		each 
		ascDo:[:other|
			(iter includesKey: (other at:'sha1')) 
			ifTrue:[ 
				(nodes includesKey:(other at:'sha1')) 
				ifFalse:[
					nodes at: (other at:'sha1') put: siter. 
					ncurrent at: siter put: other.
					siter:= siter  + 1. 
				]
			]
			ifFalse:[
				ncurrent at: siter put: each.
				siter :=siter + 1.
			]
		]
	 ].
	current := ncurrent.
	pos:= pos +1.
]
!

renderOn: html

|iter maxLength|

html canvas id: self assignId; width:'80%';height:'100%'.

"the docCell connector div"
html div id: self assignId.
!

requestGraph: nodes direction: aDirection start: aPosition

"an Array"

|ajax data|

ajax := Ajax url: url.

data := HashedCollection new.
data at: 'request' put:'docGraph'; at: 'data' put:(HashedCollection new at: 'direction' put: aDirection; at: 'initNodes' put: nodes; yourself).
ajax send: data asJSONString onResponce: [:resp| self loadJSON:resp start: aPosition.
																		self realize.].
!

setConnectors

connectors:= Connectors new.

"DocCell connector"
connectors addConnectorId: '2'.
! !

!DocGraph class methodsFor: 'not yet classified'!

connect: anElementId at: aPosition to: aParent doc: aDoc

self new doc: aDoc; connect: anElementId at: aPosition to: aParent.
! !

Component subclass: #DocGraphCell
	instanceVariableNames: 'doc point'
	package: 'Platanos_Graph'!

!DocGraphCell methodsFor: 'not yet classified'!

doc: aDoc

doc := aDoc.
!

initialize

super initialize.
!

paintOn: css



css selector: '' attr: 'padding' val: '5px'.
css selector: '' attr: 'box-shadow' val: '1px 1px 3px rgba(0, 0, 0, 0.5)'.
css selector: '' attr: 'border-radius' val: '2px'.
css selector: '' attr: 'text-align' val: 'left'.
css selector: '' attr: 'margin' val: '3px'.

css selector: '' attr:'position' val: 'fixed'.
css selector: '' attr:'left' val: (((point y) *50) asString),'px'.
css selector: '' attr:'bottom' val: (((point y) *50) asString),'px'.

css selector: '#',pid,'10' attr: 'font' val:'12px/25px Arial, sans-serif'.
!

point: aPoint

point:= aPoint
!

renderOn: html

html div with: (doc at: 'csummary').
! !

!DocGraphCell class methodsFor: 'not yet classified'!

connect: anElementId to: aParent doc: aDoc point: aPoint

self new doc: aDoc; point: aPoint; connect: anElementId to: aParent.
! !

Object subclass: #Vector
	instanceVariableNames: ''
	package: 'Platanos_Graph'!

!Vector methodsFor: 'not yet classified'!

initialize

super initialize
!

on: aCanvasId start: aStartPoint end: anEndPoint

|ctx|

ctx :=  '#',aCanvasId asJQuery at:0.
ctx beginPath.
ctx moveTo: (aStartPoint x) and: (aStartPoint y).
ctx lineTo: (anEndPoint x) and: (anEndPoint y).
ctx stroke.
! !

!Vector class methodsFor: 'not yet classified'!

on: aCanvas start: aStart end: anEnd

^ self new on aCanvas start:aStart end: anEnd; yourself.
! !

