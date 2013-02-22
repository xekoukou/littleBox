Smalltalk current createPackage: 'Markdown' properties: #{}!
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

