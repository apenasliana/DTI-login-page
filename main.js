function autenticacao(){
    const username = document.getElementById("email").value
    const password = document.getElementById("senha").value
    fetch("usuarios.json")
    .then(res=>{
        res.json().then(data => {
            if (data.username == username && data.password == password) {
                window.location.href = `/DTI-login-page/perfil.html?token=${data.token}`;

            }else{
                document.getElementById("email").classList.add('loginError');
                document.getElementById("senha").classList.add('loginError');
            }
    }).catch(error =>{
        console.log(error)
    })}).catch(error => {
        console.log(error)
    })

    // const body = new URLSearchParams()
    // body.append('grant_type','password')
    // body.append('client_id','682aac27-6b4b-4f13-a4f9-21f8b0f30f08')
    // body.append('client_secret','.C=T8S7[XpPu0qY-HTPcUgV0br4=bHUF')
    // body.append('scope','https://graph.microsoft.com/.default')
    // body.append('userName','guildafront@FELChagashotmail.onmicrosoft.com)
    // body.append('password', '94Pgyh1UV7Te')
}
document.getElementById("email").addEventListener("click",event =>{
    document.getElementById("email").classList.remove('loginError');


})
document.getElementById("senha").addEventListener("click",event =>{
    document.getElementById("senha").classList.remove('loginError');
})