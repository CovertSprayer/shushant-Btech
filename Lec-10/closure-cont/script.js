// function outerFun(){
//     var x = 20;

//     function innerFun(){
//         x++;
//         console.log(x);
//     }

//     return innerFun;
// }

// var p1 = outerFun();
// var p2 = outerFun();
// p1();
// p1();
// p2();
// p1();


function outerFun(){
    var x = 20;

    function innerFun(){
        var a = 100;
        x++;

        function innerMostFun(){
            a++;
            x++;
            console.log(x, a);
        }

        return innerMostFun;

    }

    return innerFun;
}

var temp = outerFun();

var fun1 = temp();
var fun2 = temp();

fun1();
fun1();
fun2();
fun2();
fun1();
