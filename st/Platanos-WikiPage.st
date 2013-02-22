Smalltalk current createPackage: 'Platanos-WikiPage' properties: #{}!
Component subclass: #WikiPage
	instanceVariableNames: 'markdown converter'
	package: 'Platanos-WikiPage'!

!WikiPage methodsFor: 'not yet classified'!

initialize

super initialize.
converter := Pagedown new.
!

markdown: markdownText

markdown := markdownText.
!

paintOn: css


css selector: '#',pid,'10' attr:'position' val: 'relative'.
"css selector: '#',pid,'10' attr: 'border-style' val: 'solid'."
css selector: '#',pid,'10' attr: 'padding' val: '7px'.
css selector: '#',pid,'10' attr: 'border-width' val: '1px'.
"css selector: '#',pid,'10' attr: 'border-color' val: 'forestgreen'."
css selector: '#',pid,'10' attr: 'box-shadow' val: '3px 3px 5px rgba(0, 0, 0, 0.5)'.
css selector: '#',pid,'10' attr: 'border-radius' val: '4px'.
css selector: '#',pid,'10' attr: 'width' val: '60%'.
css selector: '#',pid,'10' attr: 'left' val: '20%'.

css selector: '#',pid,'10' attr: 'font' val:'12px/25px Arial, sans-serif'.
!

renderOn: html

html div id:self assignId.
('#',pid,'10') asJQuery append: (converter convert: markdown).
! !

!WikiPage class methodsFor: 'not yet classified'!

connect: anElementId at: aPosition to: aParent with: markdownText

self new markdown: markdownText; connect: anElementId at: aPosition to: aParent.
! !

