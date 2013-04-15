window.addEventListener( 'load', function ( event ) {

	var style = document.createElement( 'style' );
	style.textContent = '@-webkit-keyframes blink { 0% { opacity:0; } 49% { opacity:0; } 50% { opacity:1; } 100% { opacity:1; } } @-moz-keyframes blink { 0% { opacity:0; } 49% { opacity:0; } 50% { opacity:1; } 100% { opacity:1; } } @keyframes blink { 0% { opacity:0; } 49% { opacity:0; } 50% { opacity:1; } 100% { opacity:1; } }';
	document.body.appendChild( style );

	var elements = document.getElementsByTagName('blink');

	for ( var i = 0, l = elements.length; i < l; i ++ ) {

		var element = elements[ i ];
		element.style.webkitAnimation = 'blink linear 0.5s infinite alternate';
		element.style.mozAnimation = 'blink linear 0.5s infinite alternate';
		element.style.animation = 'blink linear 0.5s infinite alternate';

	}

}, false );
