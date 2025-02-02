//BUTTON SFX
    document.addEventListener("DOMContentLoaded", ()=>
    {
        const buttons = document.querySelectorAll("button");
        const sound = new Audio("../sounds/button - hover.mp3");

        buttons.forEach(button => 
        {
            button.addEventListener("mouseenter", ()=>
            {
                sound.currentTime = 0;
                sound.play();
            })
        });
    });


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