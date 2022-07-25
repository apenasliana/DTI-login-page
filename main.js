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
                document.getElementById("loginERROR").classList.remove('display-none')
            }
    }).catch(error =>{
        console.log(error)
    })}).catch(error => {
        console.log(error)
    })
}
document.getElementById("email").addEventListener("click",event =>{
    document.getElementById("email").classList.remove('loginError');
})
document.getElementById("senha").addEventListener("click",event =>{
    document.getElementById("senha").classList.remove('loginError');
})