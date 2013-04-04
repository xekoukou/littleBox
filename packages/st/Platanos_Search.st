Smalltalk current createPackage: 'Platanos_Search'!
Component subclass: #SearchInput
	instanceVariableNames: ''
	package: 'Platanos_Search'!

!SearchInput methodsFor: 'initializing'!

initialize

super initialize.
! !

!SearchInput methodsFor: 'subclassing'!

paintOn: css

css selector: 'input' attr:'position' val: 'relative'.
css selector: 'input' attr:'top' val: '60px'.
css selector: 'input' attr:'left' val: '40%'.
css selector: 'input' attr:'width' val: '20%'.
css selector: 'input' attr:'box-shadow' val: 'inset 2px 2px 5px black'.

css selector: '#',pid,'10' attr:'position' val: 'relative'.
css selector: '#',pid,'10' attr:'top' val: '120px'.
css selector: '#',pid,'10' attr:'left' val: '35%'.
css selector: 'ol' attr: 'width' val: '30%'.

css selector: 'ol' attr: 'list-style' val: 'none inside'.
!

renderOn: html

html form with:[html input type:'search'.].
html ol  id: self assignId; with:'results:'
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
	instanceVariableNames: 'text'
	package: 'Platanos_Search'!

!SearchResult methodsFor: 'not yet classified'!

initialize

super initialize.
!

paintOn: css


"css selector: 'li' attr: 'border-style' val: 'solid'.
css selector: 'li' attr: 'border-width' val: '1px'."
css selector: 'li' attr: 'padding' val: '5px'.
css selector: 'li' attr: 'border-color' val: 'forestgreen'.
css selector: 'li' attr: 'box-shadow' val: '1px 1px 3px rgba(0, 0, 0, 0.5)'.
css selector: 'li' attr: 'border-radius' val: '2px'.
css selector: 'li' attr: 'text-align' val: 'left'.
css selector: 'li' attr: 'margin' val: '3px'.

css selector: 'li' attr:'position' val: 'relative'.
css selector: 'li' attr:'left' val: '-40px'.

css selector: '#',pid,'10' attr: 'font' val:'12px/25px Arial, sans-serif'.
!

renderOn: html

html li with: [html div id:self assignId ;with:text.].
!

text: aText

text := aText.
! !

!SearchResult class methodsFor: 'not yet classified'!

connect: anElementId at: aPosition to: aParent with: aText

self new text: aText; connect: anElementId at: aPosition to: aParent.
! !

