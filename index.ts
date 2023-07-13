let span:HTMLSpanElement=<HTMLSpanElement>document.getElementById("level");
let requirement:HTMLParagraphElement=<HTMLParagraphElement>document.getElementById("requirement");
let input:HTMLInputElement=<HTMLInputElement>document.getElementById("numbers");
let result:HTMLParagraphElement=<HTMLParagraphElement>document.getElementById("result");
let n:number=5;
let dem:number=1;
let begin:number[]=arrRandom(n,dem);
function xuat(arr:number[]):void{
    let inner:String="";
    for(let i:number=0;i<arr.length;i++){
        inner+=String(arr[i])+"-";
    }   
    requirement.innerHTML+=inner.substring(0, inner.length-1);
}
xuat(begin);
setTimeout(() => {
    console.log("Delayed for 1 second.");
    requirement.innerHTML="";
  }, 2000);

span.innerHTML=String(dem);
console.log(begin);

function sleep(milliseconds) {
    var start = new Date().getTime();
    while (new Date().getTime() - start < milliseconds) {}
}
function random(n:number):number{
    let x:number=10**n-10**(n-1);
    let y:number=10**(n-1);
    let int:number=Math.floor(Math.random()*x)+y;
    return int;
}
function arrRandom(n:number, dem:number):number[]{
    let arr:number[]=[];
    for(let i:number=0;i<n;i++){
        arr[i]=random(dem);
    }
    return arr;
}
function arrToString(a:number[]):String{
    let chuoi:String="";
    for(let i:number=0;i<a.length;i++){
        chuoi+= a[i]+" ";
    }
    return chuoi.substring(0,chuoi.length-1);
}
function subString(s:String):String{
    let i:number=0;
    let j:number=s.length-1;
    for(i;i<s.length;i++){
        if(s.charCodeAt(i)!=32)
        break;
    }
    for(j;j>=0;j--){
        if(s.charCodeAt(j)!=32)
        break;
    }
    let sub:String=s.substring(i,j+1);
    console.log(typeof sub);
    
    return sub;
}
function reset():void{
    requirement.innerHTML="";
    dem=1;
    begin=arrRandom(n,dem);
    xuat(begin);
    span.innerHTML=String(dem);
    console.log(begin);
    setTimeout(() => {
        console.log("Delayed for 1 second.");
        requirement.innerHTML="";
      }, 1000);
}
function check():void{
    requirement.innerHTML="";
    if(subString(input.value)!=arrToString(begin)) result.innerHTML="Sai mất rồi :D";
    else{  
        if(dem==n){
            result.innerHTML="Bạn là người có siêu trí nhớ :D"
        }
        else{
            dem++;
            result.innerHTML="Chính xác";
            begin=arrRandom(n,dem);
            xuat(begin);
            setTimeout(() => {
                console.log("Delayed for 1 second.");
                requirement.innerHTML="";
              }, 2000*dem);
            console.log(begin);
        }
    }
    span.innerHTML=String(dem);
    input.value="";
    console.log(dem);
}