//IMPORT NAV BAR
    function importNavBar()
    {
        fetch('prefabs/navbar.html')
            .then(Response => Response.text())
            .then(data=>{
                document.getElementById('navbarCanvas').innerHTML=data;
            })
            .catch(err=> console.error('NAVBAR LOADING ERROR: ', err));
    }
    importNavBar();
