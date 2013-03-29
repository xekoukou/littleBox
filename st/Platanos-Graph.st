Smalltalk current createPackage: 'Platanos-Graph'!
Component subclass: #DocGraph
	instanceVariableNames: ''
	package: 'Platanos-Graph'!

Component subclass: #DocGraphCell
	instanceVariableNames: 'doc'
	package: 'Platanos-Graph'!

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

css selector: '#',pid,'10' attr: 'font' val:'12px/25px Arial, sans-serif'.
!

renderOn: html

html text: (doc at: 'csummary').
! !

!DocGraphCell class methodsFor: 'not yet classified'!

connect: anElementId at: aPosition to: aParent with: aDoc

self new doc: aDoc; connect: anElementId at: aPosition to: aParent.
! !

