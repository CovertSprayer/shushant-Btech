

function getMovie(query){

    function Batman(){
        console.log('Inside Batman Fun');
    }

    function Apocalypse(){
        console.log('Inside Apocalypse Fun');
    }

    function Dune(){
        console.log('Inside Dune Fun');
    }

    if(query.toLowerCase() == 'batman'){
        return Batman;
    }
    else if(query.toLowerCase() == 'apocalypse'){
        return Apocalypse;
    }
    else if(query.toLowerCase() == 'dune'){
        return Dune;
    }
    else{
        return function(){
            console.log('No Movie found!!');
        }
    }

}


var movieFun = getMovie('BATMAN');
// console.log(movieFun);
movieFun();


// --------------- arrow function
// var add = function(a,b){
//     return a+b;
// } 

var add = (a,b)=>{
    return a+b;
} 

var add = (a,b)=> a+b;
var print = x => console.log(x);

print(add(40,20));



