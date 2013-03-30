Smalltalk current createPackage: 'Platanos_Doc'!
HashedCollection subclass: #Doc
	instanceVariableNames: ''
	package: 'Platanos_Doc'!

!Doc methodsFor: 'not yet classified'!

addAsc: aSha1

(self at:'asc' includes: aSha1) ifFalse:[self at:'asc' add:aSha1].
!

ascDetect: aBlock

self at:'asc' detect: aBlock.
!

ascDo: aBlock

self at:'asc' do: aBlock.
!

initialize

super initialize.
self at:'asc' put: (Set new).
!

myPosition: aDocGraph

aDocGraph lines keysAndValuesDo:[:key :value|  (value includes: self at:'sha1') ifTrue:[^key.]].
! !

!Doc class methodsFor: 'not yet classified'!

json: aJsonString

|a b temp|

a := self new.
b := JSON parse: aJsonString.
a at:'sha1' put: (b at: 'sha1'). "the sha1 of all all the below"
temp := (b at: 'summary').
temp ifNotNil: [a at:'summary' put: temp].
temp := (b at: 'csummary').
temp ifNotNil: [a at:'csummary' put: temp].
temp := (b at: 'content').
temp ifNotNil: [a at:'content' put: temp].
temp := (b at: 'psha1').
temp ifNotNil: [a at:'psha1' put: temp].   "an Array of the previous sha1"

^a
!

jsono: aJson

|a b temp|

a := self new.
b := aJson.
a at:'sha1' put: (b at: 'sha1'). "the sha1 of all all the below"
temp := (b at: 'summary').
temp ifNotNil: [a at:'summary' put: temp].
temp := (b at: 'csummary').
temp ifNotNil: [a at:'csummary' put: temp].
temp := (b at: 'content').
temp ifNotNil: [a at:'content' put: temp].
temp := (b at: 'psha1').
temp ifNotNil: [a at:'psha1' put: temp].   "an Array of the previous sha1"

^a
! !

