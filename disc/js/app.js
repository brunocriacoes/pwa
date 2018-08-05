    
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

    const dispositivo = query('#dispositivo');

    window.navigator.getBattery()
    .then( x => { dispositivo.innerHTML += `<div><b>Bateria: </b>${x.level}</div>` } );

    dispositivo.innerHTML += `<div><b>Conexão: </b>${window.navigator.connection.effectiveType}</div>`;
    dispositivo.innerHTML += `<div><b>Linguagem: </b>${window.navigator.language}</div>`;
    dispositivo.innerHTML += `<div><b>Plataforma: </b>${window.navigator.platform}</div>`;

    const geo = query('#geo-location');
    if( navigator.geolocation ) {
        navigator.geolocation.getCurrentPosition( x => {
            geo.innerHTML += `<div><b>Longitude: </b>${x.coords.latitude}</div>`;
            geo.innerHTML += `<div><b>Latitude: </b>${x.coords.longitude}</div>`;
            geo.innerHTML += `<iframe src="https://maps.google.com/maps?q=${x.coords.latitude},${x.coords.longitude}&hl=pt-br&z=14&amp;output=embed" width="100%" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>`;
        } );
    }    