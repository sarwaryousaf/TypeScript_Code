function mycallback(text:string){
    console.log("inside mycallback"+text);
    
}
function callingfunction(initialText:string,cb:(text:string)=>void){
cb(initialText)
}
callingfunction("myText",mycallback)