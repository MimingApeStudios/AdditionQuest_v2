var score = 0;  
var round = 1;
//var highScore = document.cookie = "highScore=";


//////////////////
//Background music
//////////////////
//myAudio = new Audio('../audio/CityKatsLoop.mp3'); 
//myAudio.addEventListener('ended', function() {
//    this.currentTime = 0;
//    this.play();
//}, false);
//myAudio.volume = 0.1;
//myAudio.play();


function serveMonster() {
    $("#welcomeMessage").html("");
    console.log("started");
    $("#mainContent").html("<p>Defeat the monster</p>");
    //Pick random monster
    monsterNum = Math.floor((Math.random() *5) +1);
    $("#monster").html("<img src='img/monsters/monster"+monsterNum+".png' height='180px' />");
    // Play audio
    var audio = new Audio('audio/monster'+monsterNum+'.mp3');
    audio.volume = 1;
    audio.play();
    
    
    total = doMath();
  
};

function doMath(result){
    if (score <1000) {   // Addition
        var  num1 = Math.floor((Math.random() *5) +1);
        console.log(num1);
        monsterNum = Math.floor((Math.random() *9) +1);
        $("#monster").html("<img src='img/monsters/monster"+monsterNum+".png' height='180px' />");
        var  num2 = Math.floor((Math.random() *5) +1);
        console.log(num2);
        $("#math").html("<p>"+num1+" + "+ num2 + " = ?</p>");
        var total = num1 + num2;
        console.log("total "+total);
 } else {   //Substraction
    var  num1 = Math.floor((Math.random() *9) +1);
    monsterNum = Math.floor((Math.random() *9) +1);
    $("#monster").html("<img src='img/monsters/monster"+monsterNum+".png' height='180px' />");
    var  num2 = Math.floor((Math.random() *2) +1);
    if (num1 < num2) {
        var  num1 = Math.floor((Math.random() *5) +1);
    } else {
    $("#math").html("<p>"+num1+" - "+ num2 + " = ?</p>");
    var total = num1 - num2;
    console.log("total "+total);
      }
    }
    ///////////////
    // Add buttons  
    ///////////////
    $("#buttons").html("<button id='btn_result0' value='0' onClick='buttonPressed("+total+", 0)'>0</button>"+
                       "<button id='btn_result1' value='1' onClick='buttonPressed("+total+", 1)'>1</button>"+
                       "<button id='btn_result2' value='2' onClick='buttonPressed("+total+", 2)'>2</button>"); 
    $("#buttons").append("<button id='btn_result3' value='3' onClick='buttonPressed("+total+", 3)'>3</button>"+
                         "<button id='btn_result'  value='4' onClick='buttonPressed("+total+", 4)'>4</button>"+
                         "<button id='btn_result' value='5' onClick='buttonPressed("+total+", 5)'>5</button><br />"+
                         "<button id='btn_result' value='6' onClick='buttonPressed("+total+", 6)'>6</button>"+
                         "<button id='btn_result' value='7' onClick='buttonPressed("+total+", 7)'>7</button>"+
                         "<button id='btn_result' value='8' onClick='buttonPressed("+total+", 8)'>8</button>"+
                         "<button id='btn_result' value='9' onClick='buttonPressed("+total+", 9)'>9</button>"+
                         "<button id='btn_result' value='10' onClick='buttonPressed("+total+", 10)'>10</button>"); 
}
///////////////////////////////////////
//Check for match and decide if win or lose
////////////////////////////////////////////
function buttonPressed(total, value) {
    console.log("clicked result button "+ total + " equal " +value);
        
    
    if (total == value) {
        var btnaudio = new Audio('audio/jump.mp3');
        btnaudio.play(); 
        $("#mainContent").html("<p>YOU WIN!</p> ");
        $("#monster").html("")
        $("#math").html("+ 100 points!")
        $("#buttons").html("<button id='btn1' onclick='serveMonster()'>Again!</button>"); 
        score = score + 100;
       // highScore = highScore + 100;
       // alert( highScore );
        round = round + 1;
        // check for level up
        if (score == 1000){
            levelUp();
        }
        $("#score").html("SCORE: "+score+"                    |       ROUND: "+round);
        console.log("you win "+"100 score for: "+score+ "round "+round);
    } else {
        var loseaudio = new Audio('audio/failure.mp3');
        loseaudio.volume = 0.7;
        loseaudio.play(); 
        $("#mainContent").html("<p>YOU LOSE!</p><img src='img/rip.png' height='180px' />");
        $("#monster").html("")
        round = round -1;
        $("#math").html("<p>You defeated: "+round+" monsters!"); 
        score = 0;
        $("#buttons").html('<button id="btn1" class="buttonSpecial" onclick="serveMonster()">Re-Start</button>'); 
        }
    };
    


function levelUp() {
        var levelAudio = new Audio('audio/horn.mp3');
        levelAudio.play(); 
        $("#mainContent").html("<p>LEVEL UP</p>");
        $("#monster").html("<img src='img/star.gif' height='180px' />");
        $("#math").html("<p>Now you can also do Substraction"); 
        $("#buttons").html('<button id="btn1" class="buttonSpecial" onclick="serveMonster()">Continue</button>'); 
   
}



var app = {
    // Application Constructor
    initialize: function() {    
    this.bindEvents();
    },
    
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
   
    
    // deviceready Event Handler
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        
        console.log('im here');
    },
    
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        // 

        console.log('Received Event: ' + id);
    }
    
  
};
