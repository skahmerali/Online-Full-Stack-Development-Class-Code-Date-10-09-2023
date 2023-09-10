function register(){

    var f_name = document.getElementById('f_name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var mobile = document.getElementById('mobile').value;

    axios.post('http://localhost:5000/register',{
        f_name,
        email,
        password,
        mobile
    }).then(function(res){
        console.log(res);
        alert('Registration SuccessFull!')
    }).catch(function(err){
        console.log(err);
    })

    return false
}

function login(){

    // var f_name = document.getElementById('f_name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    // var mobile = document.getElementById('mobile').value;

    axios.post('http://localhost:5000/login',{
        f_name,
        email,
        password,
        mobile
    })

    return false
}