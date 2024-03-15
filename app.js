let student = [];
let string = ["Anus","Shahid","Rizwan","moiz"];
let num = [0,1,2,3];
let boolean = [true,false];
let mixedArray = ["Anus",4,true]
let qualification =["SSC","HSC","BCS","BCOM","MS","M.phil","phd"]
document.write("Qualification","<br>")
for (let i=0;i<qualification.length;i++ ){
    document.write(i+1,")",qualification[i],"<br>")
}
let name = ["Anus","Shahid","Salman"];
let marks =[320,360,450];
const totalMarks = 500
for (let i=0; i<name.length; i++){
    let percen =(marks[i]/totalMarks*100)
   
    document.write(`${name[i]}-score${marks[i]}-percenteg${percen}%<br>`)
} 
let color =["red","green","blue","yelow"]

let user ="purple"//prompt("what color do yu chose to add in the beginning")
color.unshift(user)
document.write(color,"<br>")
let user1 ="black"//prompt("what color do yu chose to add in the last")
color.push(user1)
document.write(color,"<br>")
color.splice(0,0,"white","pink")
document.write(color,"<br>")
color.shift()
document.write(color,"<br>")
color.pop()
document.write(color,"<br>")
let remove = 2//+prompt("at which index you want to add color")
let colorname ="orange"//prompt("write color name")
color.splice(remove,0,colorname)
document.write(color,"<br>")