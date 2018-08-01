    
    if( window.navigator && window.navigator.vibrate ) {
        window.navigator.vibrate( [100,30,100,30,100,30,200,30,200,30,200,30,100,30,100,30,100] );
    }

    if ( "Notification" in window ) {
        let ask = Notification.requestPermission();
        ask.then( permission => {
            if ( permission === "granted" ) {
                let msg = new Notification( "SOS", {
                        body: "Eu sou uma mensagem push",
                        icon : "./disc/logo/icon-152x152.png"
                } );
                msg.addEventListener( "click", event => {
                    alert( "ação do click" );
                } );
            }
        } );
    }