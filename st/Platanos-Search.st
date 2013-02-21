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

css selector: 'input' attr:'position' val: 'absolute'.
css selector: 'input' attr:'top' val: '20px'.
css selector: 'input' attr:'left' val: '40%'.
css selector: 'input' attr:'width' val: '20%'.

css selector: '#',pid,'10' attr:'position' val: 'absolute'.
css selector: '#',pid,'10' attr:'top' val: '50px'.
css selector: '#',pid,'10' attr:'text-align' val: 'center'.
!

renderOn: html

html form with:[html input type:'search'.].
html div id: self assignId.
!

setConnectors

connectors:= Connectors new.

"searchResult connector"
connectors addConnectorId: '1'.
!

setEquations
!

setVariables
! !

Component subclass: #SearchResult
	instanceVariableNames: ''
	package: 'Platanos-Search'!

!SearchResult methodsFor: 'not yet classified'!

initialize

super initialize.
!

paintOn: css
!

renderOn: html

html ol with: [html li:'search result 1']
! !

