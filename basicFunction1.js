13/15 prediction=output

[1]
function a(){
    return 35;
}
console.log(a())

Prediction: 35
Output: 35

[2]
function a(){
    return 4;
}
console.log(a()+a());

Prediction: 8
Output: 8

[3]
function a(b){
    return b;
}
console.log(a(2)+a(4));

Prediction: 6
Output: 6

[4]
function a(b){
    console.log(b);
    return b*3;
}
console.log(a(3));

Prediction: 3   9
Output: 3   9

[5]
function a(b){
    return b*4;
    console.log(b);
 }
 console.log(a(10));

 Prediction: 40
 Output: 40

[6]
function a(b){
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(b);
}
console.log(a(15));

Prediction: 4
Output: 4

[7]

function a(b,c){
    return b*c;
}
console.log(10,3);
console.log( a(3,10) );

Prediction: 30

Output: 
10 3
30

[8]

function a(b){
    for(var i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);

Prediction:
3
4
Output:
3
4

[9]
function a(){
    for(var i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
a();

i
0->2
3->5
6->8
9->11

Prediction:
2
5
8
11

Output:
2
5
8
11

[10]

function a(b,c){
    for(var i=0; i<10; i++) {
       console.log(i);
   }
   return b*c;
}
a(0,10);
console.log(a(0,10));

b=0     c=10

Prediction:
0 
1
2
3
4
5
6
7
8
9
0
10
20
30
40
50
60
70
80
90

Output:
0 
1
2
3
4
5
6
7
8
9
0 
1
2
3
4
5
6
7
8
9
0

[11]

function a(){
    for(var i=0; i<10; i++){
       for(var j=0; j<10; j++){
           console.log(j);
       }
       console.log(i);
    }
}

Prediction: NA
Output: NA

[12]

function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);
        }
        console.log(j,i);
    }
}

Prediction: NA
Output: NA

[13]
var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
console.log(z);

Prediction: 10
Output: 10

[14]

var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
a();
console.log(z);

Prediction:
15
10

Output:
15
10

[15]
var z = 10;
function a(){
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);

Prediction:
15
15

Output:
15
15