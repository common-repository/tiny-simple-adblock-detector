/*
 * We've set that value in the other file, but ad blockers could block it
 */
if ( window.tinySimpleAdblockDetected === undefined ) {

    function tinySimpleAdblockDetected() {

        /*
         * If AdBlock is found we simply add the stylesheet which cancels the CSS from the initial one
         */
        var style = document.createElement( 'style' );
        style.type = 'text/css';
        style.innerHTML = '.show-only-when-adblock{display:initial};';
        document.getElementsByTagName( 'body' )[0].appendChild( style );
        /*
         * If AdBlock is found we simply add the stylesheet which cancels the CSS from the initial one
         */
        var style = document.createElement( 'style' );
        style.type = 'text/css';
        style.innerHTML = '.hide-only-when-adblock{display:none};';
        document.getElementsByTagName( 'body' )[0].appendChild( style );

    }
    tinySimpleAdblockDetected();
}