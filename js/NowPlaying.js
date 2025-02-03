//NOW PLAYING FILMS
    function importNowPlaying()
    {
        fetch('prefabs/Now Playing Film.html')
            .then(Response => Response.text())
            .then(data=>{
                document.getElementById('navbarCanvas').innerHTML+=data;
            })
            .catch(err=> console.error('NAVBAR LOADING ERROR: ', err));
    }
    importNowPlaying();
