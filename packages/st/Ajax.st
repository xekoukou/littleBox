Smalltalk current createPackage: 'Ajax'!
Object subclass: #Ajax
	instanceVariableNames: 'url'
	package: 'Ajax'!

!Ajax methodsFor: 'not yet classified'!

initialize

super initialize
!

send: aString onResponce: aBlock

self send: aString to: '' onResponce: aBlock
!

send: aString to: responsibleUrl onResponce: aBlock

|turl|

turl := url,responsibleUrl.

	jQuery
		ajax: turl 
		options: #{ 
			'type' -> 'POST'.
			'data' -> aString.
			'contentType' -> 'text/plain;charset=UTF-8'.
			'success' -> [:data :textStatus :jqXHR| aBlock value:data].
			'dataType' -> 'text'
			}
!

url: anUrl

url := anUrl.
! !

!Ajax class methodsFor: 'not yet classified'!

url: anUrl

^self new url: anUrl ; yourself.
! !

