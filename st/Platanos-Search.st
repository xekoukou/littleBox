Smalltalk current createPackage: 'Platanos-Search' properties: #{}!
Component subclass: #SearchInput
	instanceVariableNames: ''
	package: 'Platanos-Search'!

!SearchInput methodsFor: 'initializing'!

initialize

super initialize.
! !

!SearchInput methodsFor: 'subclassing'!

function
!

paintOn: css
!

renderOn: html

html form with:[html input type:'search'].
!

setConnectors
!

setEquations
!

setVariables
! !

