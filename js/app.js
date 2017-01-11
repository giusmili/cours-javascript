/*app js*/
let titre=String("Javascript");
document.title=titre;
let navigateur=String(navigator.userAgent);
/*alert("vous êtes sur : \n"+navigateur);*/
let element=document.getElementsByTagName('h1')[0].childNodes[0].nodeValue;
alert(element);

document.write('<p>Votre navigateur est : <br>'+navigateur+'</p>');
document.write('<h4>'+element+'</h4>');

let el=document.body.childNodes;
for(i=0; i<el.length; i++){
    console.log(el[i].nodeName);
}
/*createElement(), createTextNode(), appendChild()*/
let myChild=document.createElement('p');
myText=document.createTextNode('Mon paragraphe dynamique');
myChild.appendChild(myText);
document.body.appendChild(myChild);

