function deslogar(){
    window.location.href = "/";
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString)

fetch("validator.json").then(res=>{
    res.json().then(data => {
        if (urlParams.get('token') != data.token) {
            window.location.href = "/";
        }
    })
})
