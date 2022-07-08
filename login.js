window.addEventListener('load', (e)=>{
    const main = document.getElementById("main");
    const body = document.getElementById("body");
    const buttons = document.getElementsByTagName("button");

    let requestJSONusers = new Request("files/users.json");
    let requestJSONadmins = new Request("files/admins.json");
    let users, admins;

    fetch(requestJSONusers)
        .then((resp)=>{
            return resp.json();
        })
        .then((data)=>{
            users = JSON.parse(JSON.stringify(data));  
        });

    fetch(requestJSONadmins)
        .then((resp)=>{
            return resp.json();
        })
        .then((data)=>{
            admins = JSON.parse(JSON.stringify(data));  
        });

    function styleOnLoad(){
        //resize the body of the page by the window size
        body.style.width = window.innerWidth + "px";
        body.style.height = window.innerHeight + "px";
    
        main.style.width = window.innerWidth / 2.5 + "px";
        buttons[0].style.width = main.style.width.slice(0, -2) / 3 + "px";
        buttons[0].style.height = main.style.width.slice(0, -2) / 9 + "px";
        buttons[1].style.width = main.style.width.slice(0, -2) / 3 + "px";
        buttons[1].style.height = main.style.width.slice(0, -2) / 9 + "px";
        buttons[2].style.width = main.style.width.slice(0, -2) / 3 + "px";
        buttons[2].style.height = main.style.width.slice(0, -2) / 9 + "px";
    }

    function handleSingIn(){
        buttons[1].addEventListener('click', (btn)=>{
            document.getElementById("hide").style.display = "none";
            document.getElementById("show").style.display = "flex";
        });
        buttons[2].addEventListener('click', (btn)=>{
            const userName = document.getElementById("user-name");
            const pass = document.getElementById("pass");
            const phone = document.getElementById("phone");
            const address = document.getElementById("address");
            const mail = document.getElementById("mail");
            const zipcode = document.getElementById("zipcode");
            let allGood = false;
            //i am here 

            if(userName.value.length <= 2) userName.style.hi
        });
    }

    function handleLogIn(){
        buttons[0].addEventListener('click', (btn)=>{
            const userName = document.getElementById("userName");
            const pass = document.getElementById("password");
            for(let i=0;i<users.length;i++){
                if(userName.value == users[i].name && pass.value == users[i].password){
                    window.location.href = "./clinets/clinets.html";
                    return;
                }
            }
            for(let i=0;i<admins.length;i++){
                if(userName.value == admins[i].name && pass.value == admins[i].password){
                    window.location.href = "./admin/admins.html";
                    return;
                }
            }
        });
    }

    styleOnLoad();
    window.addEventListener('resize',(e)=>{
        styleOnLoad();
    });

    handleLogIn();
    handleSingIn();
});