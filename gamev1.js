var afficher1=document.getElementById('afficher1');
var numero=document.getElementById('numero');
var rep1=document.querySelector('#a');
var b=document.querySelector('#b');
var c=document.querySelector('#c');
var d=document.querySelector('#d');

  const data=[
  {question:"Quel est l’autre nom de l’Homme-Mystère ?",
  options:["Le Sphinx" ,"Saphir" ,"Le Joker "],
  answer:"Le Sphinx",
  images:['<img src="/batgame/Batgame_3.png" id="image1">']
  },
  {question:"Quelle est l’ancienne profession de Harley Quinn ?",
  options:["Infirmière","Psychiatre","Dentiste"],
  answer:"Infirmière",
  images:['<img src="/batgame/Batgame_4.png" id="image1">']
  },
  {
  question:"Quel est l’objet fétiche de Double Face ?",
  options:["Une pièce" ,"Un livre","Un couteau"],
  answer:"Une pièce",
  images:['<img src="/batgame/Batgame_5.png" id="image1">']
  },
  {question:"Qui a produit Batman en 1964 ?",
  options:["Stanley Kubrick","Andy Warhol" ,"Peter Jackson"],
  answer:"Stanley Kubrick",
  images:['<img src="/batgame/Batgame_6.png" id="image1">']
  },
  {question:"Batman c’est aussi le nom d’une ville en...",
  options:["Turquie","Islande","Allemagne"],
  answer:"Turquie",
  images:['<img src="/batgame/Batgame_7.png" id="image1">']
  },
  {question:"Quel vilain apparaît pour la première fois dans le Batman 232?",
  options:["Le Pingouin","Ra’s al Ghul","Poison Ivy"],
  answer:"Le Pingouin",
  images:['<img src="/batgame/Batgame_8.png" id="image1">','<img src="/batgame/Batgame_9.png" id="image2">','<img src="/batgame/Batgame_9-1.png" id="image3">']
  },
  {
  question:"Quelle ville Batman défend-il ?",
  options:["Gotham City","Starling City","Hell’s Kitchen"],
  answer:"Gotham City",
  images:['<img src="/batgame/Batgame_10.png" id="image1">']
  },
  {question:"Tim Burton a réalisé deux Batman, qui jouait Batman ?",
  options:["Georges Clooney","Val Kilmer","Mickael Keaton"],
  answer:"Georges Clooney",
  images:['<img src="/batgame/Batgame_11.png" id="image1">']
  },
  {question:"Dans son premier Batman (1989) Jack Nicholson jouait :",
  options:["Le Pingouin","L’Homme Mystère","Le Joker"],
  answer:"Le Pingouin",
  images:['<img src="/batgame/Batgame_12.png" id="image1">','<img src="/batgame/Batgame_13.png" id="image2">','<img src="/batgame/Batgame_13-1.png" id="image3">']
  },
  {question:"Qui est Jonathan Crane ? ",
  options:["L’Épouvantail","Le Joker","Hugo Strange"],
  answer:"L’Épouvantail",
  images:['<img src="/batgame/Batgame_14.png" id="image1">','<img src="/batgame/Batgame_15.png" id="image2">','<img src="/batgame/Batgame_16.png" id="image3">']
  },
  {question:"Qui est l’interprète de Catwoman dans le nouveau Batman de Matt Reeves (2022) ?",
  options:["Emma Watson","Gigi Hadid","Lola Iolani Momoa","Zoë Kravitz"],
  answer:"Emma Watson",
  images:['<img src="/batgame/Batgame_17.png" id="image1">']
  },
  {question:"Quel est le prénom des parents du jeune Bruce Wayne ?",
  options:["Thomas et Martha","Elaine et Georges","Martha et James"],
  answer:"Thomas et Martha",
  images:['<img src="/batgame/Batgame_18.png" id="image1">']
  },
  {question:"Qui interprète le Joker en 2008 ?",
  options:["Heath Legder","Haeth Ledger","Heath Ledger"],
  answer:"Heath Legder",
  images:['<img src="/batgame/Batgame_19.png" id="image1">']
  },
  {question:"En quelle année Robin fait il sa première apparition ?",
  options:["1940","1939","1941"],
  answer:"1940",
  images:['<img src="/batgame/Batgame_20.png" id="image1">']
  },
  {question:"Qui est la fille de Batman et Catwoman (Earth - 2) ?",
  options:["Oracle","Huntress","Black Canary"],
  answer:"Oracle",
  images:['<img src="/batgame/Batgame_21.png" id="image1">']
  },
  ];

  var answers=document.getElementById('answers');
  var questionEl=document.querySelector('#question');
  //selection reponses
  var reponse1=document.querySelector('#option1');
  var reponse2=document.querySelector('#option2');
  var reponse3=document.querySelector('#option3');
  var reponse4=document.querySelector('#option4');
  //selection liste
  var reponse41=document.querySelector('.reponse4');
  var reponse31=document.querySelector('.reponse3');
  var reponse21=document.querySelector('.reponse2');
  var reponse11=document.querySelector('.reponse1');
  var btn=document.querySelector('#button');
  container=document.getElementById('container');
 
  toutimage=document.getElementById('images');
  nextbtn=document.getElementById('nextbtn');
  btnredemmarer=document.getElementById('redemmarer');

let a=0;
let score=0;
reponse11.remove();
reponse21.remove();
reponse31.remove();
reponse41.remove();

//Demmarer les quiz
function demarrer(){
  imageinitial=document.getElementById('imageinitial');
  imageinitial.remove();
  a=0;
  score=0;
  affichage();
  nextbtn=document.getElementById('nextbtn');
  nextbtn.style.display="block";
  btn.style.display="none";
  btn.addEventListener("click",btn.disabled=true);

}

function affichage(){
    answers.appendChild(reponse11);
    answers.appendChild(reponse21);
    answers.appendChild(reponse31);
    btn.innerText="Question suivante";
   //loading images
    if(data[a].images.length===1){
     image11=document.createElement('div');
     image11.innerHTML=data[a].images;
    image11.classList.add('image11');
    toutimage.appendChild(image11);
         }
      if(data[a].images.length===3){
              image11=document.createElement('div');
           image11.innerHTML=data[a].images[0];
            image11.classList.add('image11');
         toutimage.appendChild(image11);
         image21=document.createElement('div');
          image21.innerHTML=data[a].images[1];
          image21.classList.add('image21');
         toutimage.appendChild(image21);
         image31=document.createElement('div');
         image31.innerHTML=data[a].images[2];
        image31.classList.add('image31');
         toutimage.appendChild(image31);    
      }
 // fin loading images

 //loading question +reponse 
   numero.innerText=(a+1)+"/"+(data.length);
   questionEl.innerText=data[a].question;
   if(data[a].options.length===3){
     reponse41.remove();
     reponse1.innerText=data[a].options[0];
     reponse2.innerText=data[a].options[1];
     reponse3.innerText=data[a].options[2];
   }
   else if(data[a].options.length===4){
    answers.appendChild(reponse41);
    reponse1.innerText=data[a].options[0];
    reponse2.innerText=data[a].options[1];
     reponse3.innerText=data[a].options[2];
     reponse4.innerText=data[a].options[3];
          }
     calculScore();

     //fin loading question +response 
}

//score
function calculScore(){
  reponse11.addEventListener('click',()=>{
       if(reponse1.textContent===data[a].answer&reponse2.textContent!=data[a].answer&reponse3.textContent!=data[a].answer&reponse4.textContent!=data[a].answer&score<a){
         score++;
            reponse11.style.background="green";
          }
       });
   reponse21.addEventListener('click',()=>{
       if(reponse2.textContent===data[a].answer&reponse1.textContent!=data[a].answer&reponse3.textContent!=data[a].answer&reponse4.textContent!=data[a].answer&score<a){
             score++;
             reponse11.style.background="green";

      }

       });
  reponse31.addEventListener('click',()=>{
       if(reponse3.textContent===data[a].answer&reponse2.textContent!=data[a].answer&reponse1.textContent!=data[a].answer&reponse4.textContent!=data[a].answer&score<a){
       score++;
       reponse11.style.background="green";

         }

      });
  reponse41.addEventListener('click',()=>{
       if(reponse4.textContent===data[a].answer&reponse2.textContent!=data[a].answer&reponse3.textContent!=data[a].answer&reponse1.textContent!=data[a].answer&score<a){
       score++;
       reponse11.style.background="green";
           }

      });
}
//score

function manaraka(){
  if(a<data.length){
    a=a+1;
    //supprimer les images precedents
    while(toutimage.firstChild){
       toutimage.removeChild(toutimage.firstChild);
      }
    rep1.checked=false;
    b.checked=false;
    c.checked=false;
    d.checked=false;
    affichage();
  }
  else{
   nextbtn.style.display="none";
   answers.remove();
   //  numero.innerText="Vous avez repondu"+score+"/"+(data.length-1)+"vrai";
   if(score<=5){
     answers1=document.getElementsByClassName("answers1");
    afficher1=document.getElementById('afficher1');
    h2=document.getElementById('score');
   h2.innerText=score+"/"+data.length+" c'est pas tout a fait ça...";
   afficher1.style.display="block";
   toutimage.style.display="none";
   answers.style.display="none";
   answers1.style.display="none";
   }
   if(score<=10&&score>5){
    answers1=document.getElementsByClassName("answers1");
   afficher2=document.getElementById('afficher2');
  h2=document.getElementById('score2');
  h2.innerText=score+"/"+data.length+" Pas mal!";
   afficher2.style.display="block";
   toutimage.style.display="none";
   answers.style.display="none";
   answers1.style.display="none";
      }
  if(score<=15&&score>10){
    answers1=document.getElementsByClassName("answers1");
       afficher3=document.getElementById('afficher3');
       h2=document.getElementById('score3');
       h2.innerText=score+"/"+data.length+" Bravo!";
       afficher3.style.display="block";
       toutimage.style.display="none";
       answers.style.display="none";
       answers1.style.display="none";
  }
 
   redemarrer();

  }
}

retour=document.getElementById('retour');
retour.addEventListener('click',()=>{
afficher1.style.display="none";
afficher2.style.display="none";
afficher3.style.display="none";
nextbtn.style.display="block";

});

// //question redemmarer
function redemarrer(){
a=0;
score=0;
answers=document.createElement('ul');
answers.classList.add("answers1");
container.appendChild(answers);
affichage();
nextbtn.classList.add("translate");
}




  /* images changer tous le 5 secondes */
var images = document.querySelectorAll(".justice img");
var scroll=document.querySelectorAll(".scroll")
let scroolbar=document.querySelector(".scroolbar")
var index = 0;
function changeImage() {
  images[index].classList.remove("active");
  index = (index + 1) % images.length;
  images[index].classList.add("active");
}
setInterval(changeImage, 5000);
/*  fin images changer tous le 5 secondes */




//SI ON SCROLL SUR L'ECRAN ON AFFICHE DE LE NEMESIS ,CINEMA, ALLIES
var nemesis=document.getElementById('nemesis');
var cinema=document.getElementById('cinema');
var allies=document.getElementById('allies');
function display() {
  window.addEventListener('scroll',()=>{
    if(window.scrollY>50){
      nemesis.style.visibility='visible';
      cinema.style.visibility='visible';
      allies.style.visibility='visible'; 
    }
  });
  
}
setTimeout(display,2000);
