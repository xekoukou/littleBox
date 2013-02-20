Smalltalk current createPackage: 'Platanos' properties: #{}!
Object subclass: #Platanos
	instanceVariableNames: ''
	package: 'Platanos'!

!Platanos methodsFor: 'not yet classified'!

initialize

('body' asJQuery) empty.

('body' asJQuery) attr: 'id' value: '0'.
SearchInput connect: '0' at: 0 to: (Component root).
! !

