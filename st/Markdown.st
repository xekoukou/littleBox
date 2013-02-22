Smalltalk current createPackage: 'Markdown' properties: #{}!
Object subclass: #Latex
	instanceVariableNames: ''
	package: 'Markdown'!

!Latex class methodsFor: 'not yet classified'!

id: aString

<MathJax.Hub.Queue(["Typeset",MathJax.Hub,aString]);>
! !

Object subclass: #Pagedown
	instanceVariableNames: 'converter'
	package: 'Markdown'!

!Pagedown methodsFor: 'not yet classified'!

convert: markdownText

^ converter makeHtml: markdownText .
!

initialize

converter := Markdown getSanitizingConverter.
! !

