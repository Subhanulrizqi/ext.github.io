fetch("https://login.angondata.net/interface/LoginService?service=interface&passive=true&rm=false", {mode: 'cors'}).then(function(response){
    if (response.ok){
        return response.json();
    }else{
        return Promise.reject(response);
    }
}).then(function(data){
    button(data);
    console.log(data);
}).catch(function(err){
    console.warn('Something Wrong', err)
});

function button(data){
    var username = document.querySelector('input[name="urd"]');
    field(urd,data[0]);
}
var placeholder = document.querySelectorAll('.exportLabel');

placeholder[1].remove();
document.querySelector('input[name="urd"]').value = 'Mark Winteringham';

function field(field,value){
    if(field){
        field.value = value;
    }
}