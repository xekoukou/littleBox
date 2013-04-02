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
!

sha1: aSha1 csummary: aCSummary psha1: aPsha1

^ self sha1: aSha1 summary: nil content: nil csummary: aCSummary psha1: aPsha1
!

sha1: aSha1 summary: aSummary

^ self sha1: aSha1 summary: aSummary content: nil csummary: nil psha1: nil
!

sha1: aSha1 summary: aSummary content: aContent

^ self sha1: aSha1 summary: aSummary content: aContent csummary: nil psha1: nil
!

sha1: aSha1 summary: aSummary content: aContent csummary: aCSummary psha1: aPsha1

|a|

a := self new.
a at:'sha1' put: aSha1. "the sha1 of all all the below"
aSummary ifNotNil: [a at:'summary' put: aSummary].
aCSummary ifNotNil: [a at:'csummary' put: aCSummary].
aContent ifNotNil: [a at:'content' put: aContent].
aPsha1 ifNotNil: [a at:'psha1' put: aPsha1].   "an Array of the previous sha1"

^a
!

sha1: aSha1 summary: aSummary psha1: aPsha1

^ self sha1: aSha1 summary: aSummary content: nil csummary: nil psha1: aPsha1
! !

