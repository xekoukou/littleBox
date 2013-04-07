Smalltalk current createPackage: 'Platanos_Graph'!
Component subclass: #DocGraph
	instanceVariableNames: 'pointer docs rposition lines plines initDoc minPos maxPos cheight cwidth'
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

|index each d|

d:= 150.
console log: lines.
console log: plines.

self disconnectAllCompAt: '2'.

index := rposition.
[plines includesKey:index] whileTrue:[
	each := plines at: index.
	each
	keysAndValuesDo:[:key :value|
		DocGraphCell connect: '2' to: self doc: ((lines at:index) at: key)  point: (Point x:((value-1)*d) y:(index*d)).
		"paint vector"
		((lines at:index) at: key) ascDo:[:other| |x y|
			y := (docs at:other) myPosition: self.
			x := (plines at: y) at: other.
			
			Vector on: (pid,'10') start: (Point x:((value-1)*d) y:( cheight -(index * d))) end:(Point x:((x-1)*d) y:(cheight - (y*d))).
		]
	].
index := index +1.
]
!

doc: aDoc

"should only be used at the beginning"
initDoc := aDoc.
docs at: (initDoc at:'sha1') put:initDoc.
lines at: minPos put: (HashedCollection new at: (initDoc at: 'sha1') put: initDoc ;yourself).
!

initialize

|gheight gwidth|

super initialize.

docs := HashedCollection new.
lines := Dictionary new.
rposition := 0.
minPos := 0.
maxPos := 0.
pointer := nil.
gheight :=window innerHeight.
gwidth := window innerWidth.

cheight := gheight.
cwidth := 0.4 * gwidth.
!

lines

^lines
!

loadJson: aJson start: aPosition

|a initialDoc more direction|

console log: aJson.

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
		temp := (other at:'psha1') detect:[:psha1| 
						(psha1 = (each at: 'sha1'))] ifNone:[ nil.].
		temp ifNotNil:[each addAsc:(other at:'sha1')].
		]
	].

console log: docs.
console log: 'direction:',direction asString.

self putInLines: direction start: aPosition .
self putInpLines.
!

paintOn: css

css selector: '' attr: 'padding' val: '5px'.
css selector: '' attr: 'box-shadow' val: '1px 1px 3px rgba(0, 0, 0, 0.5)'.
css selector: '' attr: 'border-radius' val: '2px'.
css selector: '' attr: 'margin' val: '3px'.

css selector: '' attr: 'background-color' val: 'white'.
css selector: '' attr:'position' val: 'fixed'.
css selector: '' attr:'left' val: '0px'.
css selector: '' attr:'bottom' val: '0px'.
!

putInLines: direction start: aPosition

(direction == -1) ifTrue:[ self putInLinesDesc: aPosition]
                         ifFalse:[ self putInLinesAsc: aPosition].
!

putInLinesAsc: aPosition

| nodes oldnodes prevnodes pos|

pos := aPosition.

nodes := lines at: pos.


prevnodes := HashedCollection new. "previous (found) nodes that have at least one child that one of its parent hasnt been found"

[(nodes size) > 0] whileTrue:[ |nnodes nprevnodes noldnodes all| 
	nnodes := HashedCollection new.
	nodes do:[:node| node ascDo:[:each| 
	|temp doc|
	doc := docs at:each.
	temp := (doc at:'psha1') detect:[:psha1| ((nodes includesKey:psha1) not) &((prevnodes includesKey:psha1) not)] ifNone:[nil.].
	
	temp ifNil: [nnodes at:each put: doc].
	temp ifNotNil:[
		"we never remove nodes form prevnodes but it doesnt create problems since the search through them has stoped(acyclic graph?)"
				prevnodes at:(node at:'sha1') put: node.
				].
	]].
	
	pos := pos + 1.
	lines at: pos put:nnodes.
    nodes := nnodes.
].
lines removeKey:pos ifAbsent:[].
maxPos := pos-1..
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
	temp := (each at: 'psha1') detect:[:psha1| (nodes includesKey:psha1) not] ifNone:[temp := nil.].
	
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
	temp := (each at: 'psha1') detect:[:psha1| (all includesKey:psha1) not] ifNone:[temp := nil.].
	
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

siter := 1.
(lines at: minPos) do: [:each| 
	nodes at: (each at:'sha1') put: siter.  
	current at: siter put: each. 
	siter:= siter  + 1.
].

pos := minPos+1.
[pos <= maxPos] 
whileTrue:[
	|ncurrent|
	
	ncurrent:= Array new.
	siter:= 1.
	nodes := HashedCollection new.
	
	iter := lines at: pos.
	console log: 'current is'.
	console log: current.
	current 
	do:[:each| 
		each 
		ascDo:[:other|
			(iter includesKey: other) 
			ifTrue:[ 
				(nodes includesKey:other) 
				ifFalse:[
					nodes at: other put: siter. 
					ncurrent at: siter put: (docs at:other).
					siter:= siter  + 1. 
				]
			]
			ifFalse:[
				ncurrent at: siter put: each.
				siter :=siter + 1.
			]
		]
	 ].
	plines at:pos put: nodes.
	current := ncurrent.
	pos:= pos +1.
].
!

renderOn: html

|iter|


html canvas id: self assignId; width: (cwidth asString) ;height: (cheight asString).

"the docCell connector div"
html div id: self assignId.
!

requestGraph: nodes direction: aDirection start: aPosition

"an Array"

|ajax data|

ajax := Ajax url: url.

data := HashedCollection new.
data at: 'request' put:'docGraph'; at: 'data' put:(HashedCollection new at: 'direction' put: aDirection; at: 'initNodes' put: nodes; yourself).
ajax send: data asJSONString onResponce: [:resp| self loadJson:resp start: aPosition. self createDocCells. ].
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
css selector: '' attr:'left' val: ((point x) asString),'px'.
css selector: '' attr:'bottom' val: ((point y) asString),'px'.

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

|canvas ctx|

canvas :=  ('#',aCanvasId) asJQuery at:0.
console log:canvas.
ctx := canvas getContext: '2d'.
ctx beginPath.
ctx moveTo: (aStartPoint x) and: (aStartPoint y).
ctx lineTo: (anEndPoint x) and: (anEndPoint y).
ctx stroke.
! !

!Vector class methodsFor: 'not yet classified'!

on: aCanvas start: aStart end: anEnd

^ self new on: aCanvas start:aStart end: anEnd; yourself.
! !

