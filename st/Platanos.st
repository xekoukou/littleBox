Smalltalk current createPackage: 'Platanos' properties: #{}!
Object subclass: #Platanos
	instanceVariableNames: ''
	package: 'Platanos'!

!Platanos methodsFor: 'not yet classified'!

initialize

|si|

si:=SearchInput connect: '' at: 0 to: (Component root).

SearchResult connect:'1' to: si.
! !

