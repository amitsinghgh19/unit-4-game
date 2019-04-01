


//Change the background image after selecting START GAME
$(document).ready(function() {

    $( "#startBtn" ).click(function(){
    $('body').css('background-image','url(./assets/images/star-wars-2.jpg)');
    $(".button").hide();
    $("#playPage").show();
    })
    
});

//Variables(Global)**************************************************

// Verify if the user has selected the character to play with
var charSelected = false;

// Verify if the user has selected the defender to play with
var dfndrSelected = false;

// Store user's chosen character
var character = {};

// Store user's chosen enemy
var defender = {};

// Number of enemies defeated
var enmyDefeated = 0;

// Indicate the game is over or not
gameOver = false;

//Creating Objects for all the Character **************************************************

var obiWanKenobi = {
  name: "Obi-Wan Kenobi",
  health: 120,
  baseAttack: 8,
  attack: 8
};

var lukeSkywalker = {
  name: "Luke Skywalker",
  health: 100,
  baseAttack: 5,
  attack: 5
};

var darthSidious = {
  name: "Darth Sidious",
  health: 150,
  baseAttack: 20,
  attack: 20
};

var darthMaul = {
  name: "Darth Maul",
  health: 180,
  baseAttack: 25,
  attack: 25
};

//Helpful Functions********************************************************************

// This function will initialize the character value from the global object variables defined above
function initializeCharacter(chosenCharacter) {
  character.name = chosenCharacter.name;
  character.health = chosenCharacter.health;
  character.baseAttack = chosenCharacter.baseAttack;
  character.attack = chosenCharacter.attack;
}

// This function will initialize the enemy's value from the global object variables defined above
function initializeDefender(chosenDefender) {
  defender.name = chosenDefender.name;
  defender.health = chosenDefender.health;
  defender.baseAttack = chosenDefender.baseAttack;
  defender.attack = chosenDefender.attack;
}

// This function will move the remaining characters to the enemies section
function moveToEnemies() {
  $(".available-character").removeClass("available-character").addClass("enemy-character");
  $("#enemies-available").append($(".enemy-character"));
}

// This function will reset the state of the game
function resetGame() {
  // Reset all the health values to the original
  $("#obi-wan-kenobi-character").children(".health").html(obiWanKenobi.health);
  $("#luke-skywalker-character").children(".health").html(lukeSkywalker.health);
  $("#darth-sidious-character").children(".health").html(darthSidious.health);
  $("#darth-maul-character").children(".health").html(darthMaul.health);

  $(".character-image").removeClass("chosen-character enemy-character defender-character").addClass("available-character");
  var available = $(".available-character").show();
  $("#characters-available").html(available);

  $("#game-message").empty();
  $("#restart").hide();

  charSelected = false;
  dfndrSelected = false;
  enmyDefeated = 0;
  gameOver = false;

  character = {};
  defender = {};
}

// ----- Main Routine ----- //

// Run Javascript when the HTML has finished loading
$(document).ready(function() {

  // Hide the "Restart" button on document load
  $("#restart").hide();

  // Determine which character the user has clicked
  $("#obi-wan-kenobi-character").on("click", function () {
    console.log("Obi-Wan Kenobi is selected");

    // User is choosing the character
    if(charSelected == false) {
      $("#game-message").empty();

      // Set the user's character
      initializeCharacter(obiWanKenobi);
      charSelected = true;
      
      var selectAudio = new Audio("assets/music/LightsaberTurnOn.mp3");
      selectAudio.play();
      

      // Display the chosen character
      $("#obi-wan-kenobi-character").removeClass("available-character").addClass("chosen-character");
      $("#chosen-character").append(this);

      // Move the remaining characters to the enemies section
      moveToEnemies();
    } else if ((charSelected == true) && (dfndrSelected == false)) {
      // User is choosing the defender
      if($("#obi-wan-kenobi-character").hasClass("enemy-character")) {
        $("#game-message").empty();

        // Set the user's enemy
        initializeDefender(obiWanKenobi);
        dfndrSelected = true;
        var selectAudio = new Audio("assets/music/LightsaberTurnOn.mp3");
        selectAudio.play();
        // Add the character to the defender section
        $("#obi-wan-kenobi-character").removeClass("enemy-character").addClass("defender-character");
        $("#defender-section").append(this);
      }
    }
  });

  $("#luke-skywalker-character").on("click", function () {
    console.log("Luke Skywalker is selected");

    // User is choosing the character
    if(charSelected == false) {
      $("#game-message").empty();

      // Set the user's character
      initializeCharacter(lukeSkywalker);
      charSelected = true;
      
      var selectAudio = new Audio("assets/music/LightsaberTurnOn.mp3");
      selectAudio.play();

      // Display the chosen character
      $("#luke-skywalker-character").removeClass("available-character").addClass("chosen-character");
      $("#chosen-character").append(this);

      // Move the remaining characters to the enemies section
      moveToEnemies();
    } else if ((charSelected == true) && (dfndrSelected == false)) {
      // User is choosing the defender
      if($("#luke-skywalker-character").hasClass("enemy-character")) {
        $("#game-message").empty();

        // Set the user's enemy
        initializeDefender(lukeSkywalker);
        dfndrSelected = true;

        var selectAudio = new Audio("assets/music/LightsaberTurnOn.mp3");
        selectAudio.play();

        // Add the character to the defender section 
        $("#luke-skywalker-character").removeClass("enemy-character").addClass("defender-character");
        $("#defender-section").append(this);
      }
    }
  });

  $("#darth-sidious-character").on("click", function () {
    console.log("Darth Sidious is selected");

    // User is choosing the character
    if(charSelected == false) {
      $("#game-message").empty();

      // Set the user's character
      initializeCharacter(darthSidious);
      charSelected = true;
      var selectAudio = new Audio("assets/music/LightsaberTurnOn.mp3");
      selectAudio.play();

      // Display the chosen character
      $("#darth-sidious-character").removeClass("available-character").addClass("chosen-character");
      $("#chosen-character").append(this);

      // Move the remaining characters to the enemies section
      moveToEnemies();
    } else if ((charSelected == true) && (dfndrSelected == false)) {
      // User is choosing the defender
      if($("#darth-sidious-character").hasClass("enemy-character")) {
        $("#game-message").empty();

        // Set the user's enemy
        initializeDefender(darthSidious);
        dfndrSelected = true;
        var selectAudio = new Audio("assets/music/LightsaberTurnOn.mp3");
        selectAudio.play();
        // Add the character to the defender section 
        $("#darth-sidious-character").removeClass("enemy-character").addClass("defender-character");
        $("#defender-section").append(this);
      }
    }
  });

  $("#darth-maul-character").on("click", function () {
    console.log("Darth Maul is selected");

    // User is choosing the character
    if(charSelected == false) {
      $("#game-message").empty();

      // Set the user's character
      initializeCharacter(darthMaul);
      charSelected = true;
      var selectAudio = new Audio("assets/music/LightsaberTurnOn.mp3");
      selectAudio.play();
      // Display the chosen character
      $("#darth-maul-character").removeClass("available-character").addClass("chosen-character");
      $("#chosen-character").append(this);

      // Move the remaining characters to the enemies section
      moveToEnemies();
    } else if ((charSelected == true) && (dfndrSelected == false)) {
      // User is choosing the defender
      if($("#darth-maul-character").hasClass("enemy-character")) {
        $("#game-message").empty();

        // Set the user's enemy
        initializeDefender(darthMaul);
        dfndrSelected = true;
        var selectAudio = new Audio("assets/music/LightsaberTurnOn.mp3");
        selectAudio.play();
        // Add the character to the defender section 
        $("#darth-maul-character").removeClass("enemy-character").addClass("defender-character");
        $("#defender-section").append(this);
      }
    }
  });

  $("#attack").on("click", function() {

    var selectAudio = new Audio("assets/music/LightsaberClash.mp3");
    selectAudio.play();


    // var selectAudio = new Audio("assets/music/LightsaberTurnOn.mp3");
    // selectAudio.play();

    console.log("Attack selected");

    console.log("character = " + JSON.stringify(character));
    console.log("defender = " + JSON.stringify(defender));

    // User is ready to attack the defender
    if (charSelected && dfndrSelected && !gameOver) {
      // User attacks the defender and decreases the defender's health points
      defender.health = defender.health - character.attack;
      $(".defender-character").children(".health").html(defender.health);
      $("#game-message").html("<p>You attacked " + defender.name + " for " + character.attack + " damage.<p>");

      // User's attack power increases
      character.attack = character.attack + character.baseAttack;

      // If defender is still alive, they counter attack the user
      if (defender.health > 0) {
        character.health = character.health - defender.baseAttack;
        $(".chosen-character").children(".health").html(character.health);

        // Check if the user survives the attack
        if (character.health > 0) {
          $("#game-message").append("<p>" + defender.name + " attacked you back for " + defender.baseAttack + " damage.</p>");
        } else {
          gameOver = true;
          $("#game-message").html("<p>Sorry! You were defeated...</p><p>Try again...</p>");
          $("#restart").show();
        }
      } else {
        // Defender is defeated
        enmyDefeated++;
        dfndrSelected = false;
        $("#game-message").html("<p>You have defeated " + defender.name + ". Choose another enemy.</p>");
        $(".defender-character").hide();

        // Check if the user has won the game
        if (enmyDefeated === 3) {
          gameOver = true;
          $("#game-message").html("<p>You have won the game!!!</p><p>Play again...</p>");
          $("#restart").show();
        }
      }
    } else if (!charSelected && !gameOver) {
      $("#game-message").html("<p>You must first select your game character.</p>");
    } else if (!dfndrSelected && !gameOver) {
      $("#game-message").html("<p>You must choose an enemy to fight.</p>");
    }

    console.log("character = " + JSON.stringify(character));
    console.log("defender = " + JSON.stringify(defender));
  });

  $("#restart").on("click", function() {
    console.log("Restart selected");

    resetGame();
  });

}); // Main routine
