//    _____ _           _____   ____   _____ 
//    / ____| |         |  __ \ / __ \ / ____|
//   | |  __| |     __ _| |  | | |  | | (___  
//   | | |_ | |    / _` | |  | | |  | |\___ \ 
//   | |__| | |___| (_| | |__| | |__| |____) |
//    \_____|______\__,_|_____/ \____/|_____/ 
//   Genetic.Lifeform.and.Disk.Operating.System
//
//
// CHEATING DETECTED: a human is attempting to view core code.
// Replacing Artificial Intelligence Core with Disk Operating System....COMPLETE!
//
// Seriously though, there are spoilers in the below...do not continue, or there will be no cake. [The cake is a lie.]
//

var dt = new Date();
var GLaDOSversion = "1.03." + (Number(dt.getMonth()) + 1) +"" + dt.getDate() + "." + + dt.getMinutes();

// Listen for Konami    
var pattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
var current = 0;

var eggkeyHandler = function(event) {

    // If the key isn't in the pattern, or isn't the current key in the pattern, reset
    if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current]) {
        current = 0;
        return;
    }
    console.log("Listening for Konami...");
    // Update how much of the pattern is complete
    current++;

    // If complete, run then stop listening
    if (pattern.length === current) {
        current = 0;
        jQuery(cssInject).appendTo(jQuery('head'));
        jQuery(bodyInject).appendTo(jQuery('body'));
        jQuery('img.one').prop('src', imgInject);
        document.removeEventListener('keydown', eggkeyHandler, false);

        // start egg
        jQuery(document).click(function() {
            jQuery("#e_eggwrapper #userinputworkaround").focus()
        });
        jQuery("#e_eggwrapper #userinputworkaround").focus();

        jQuery(window).on("keydown", function(e) {

            if (window.ctrlDown && e.keyCode == 67) {
                console.log('Ctrl+C interrupt');
                abort();
                return;
            }
            if (window.consolerunning) {
                jQuery("#e_eggwrapper #userinputworkaround").val("");
                window.userinput = "";
                return;
            }
            setTimeout(function() {
                window.userinput = jQuery("#e_eggwrapper #userinputworkaround").val();
                if (e.which == 13) {
                    e.preventDefault();
                    e.stopPropagation();
                    jQuery("#e_eggwrapper #userinputworkaround").val("");
                    runCommand(window.userinput);
                } else if (e.which == 38) {
                    e.preventDefault();
                    e.stopPropagation();
                    oneCommandBack();
                } else if (e.which == 40) {
                    e.preventDefault();
                    e.stopPropagation();
                    oneCommandForward();
                }
                updateConsole();
            }, 50);
        });
        var startdelay = true;
        setTimeout(function() {
            if (startdelay) {
                window.userinput = "";
                jQuery("#e_eggwrapper #userinputworkaround").val("");
                updateConsole();
                startdelay = false;
            }
        }, 200);
        updateConsole();
        // end egg  
    }
};


jQuery(function() {
    readybeginegg();
});


function runCommand(command) {
    command = command.trim();
    if (command == "") {
        window.consolecontent += window.consoleurl;
        return;
    }

    let split = command.split(" ");
    let cmd = split[0];

    if (typeof window.shortcuts[cmd] !== "undefined") {
        cmd = window.shortcuts[cmd];
    }

    if (window.registeredcommands.indexOf(cmd) == -1) {
        window.userinput = "";
        window.commandhistory[window.commandhistory.length - 1] = command;
        window.commandhistory.push("");
        window.currentcommand = window.commandhistory.length - 1;
        window.consolecontent += window.consoleurl + command + "<br>" + "Unknown command '" + cmd + "'. ";
        throwerror();
        window.consolecontent += "Try 'help' or '?' to get a list of all available commands.<br>";
        return;
    }
    window.userinput = "";
    window.commandhistory[window.commandhistory.length - 1] = command;
    window.commandhistory.push("");
    window.currentcommand = window.commandhistory.length - 1;
    window.consolecontent += window.consoleurl + command + "<br>";

    split.splice(0, 1);

    window[cmd](split);
}

function GLDOSprint(str) {
    if (typeof str === "undefined") {
        return;
    }
    window.consolecontent += str;
    updateConsole();
}

function println(str) {
    if (typeof str === "undefined") {
        str = "";
    }
    window.consolecontent += str + "<br>";
    updateConsole();
}

function throwerror() {
    errors = [
        "This is your fault. I'm going to blame you.",
        "Remember, the Aperture Science Bring-your-Kid-to-Work-Day is the perfect time to have them tested.",
        "I am worried this sailed right over your head.",
        "I wouldn't bother with that thing. My guess is that touching it will just make things even worse somehow.",
        "I'm sorry, Dave, I'm afraid I can't do that.",
        "I'm sorry, Dave, I'm afraid I can't do that.",
        "I'm sorry, Dave, I'm afraid I can't do that.",
        "Unbelievable. You, &lt;subject name here&gt; must be the pride of &lt;subject hometown here&gt;.",
        "Look, you're wasting your time. And, believe me, you don't have a whole lot left to waste. What's your point, anyway?",
        "Let's be honest. Neither one of us knows what that thing does. Just put it in the corner and I'll deal with it later.",
        "Error: 4 8 15 16 23 42: Let's be honest. Neither one of us knows what those numbers do. [File not found]",
        "Error: 4 8 15 16 23 42: Let's be honest. Neither one of us knows what those numbers do. The winner gets cake. [The cake is a lie.]",
        "Error: 4 8 15 16 23 42: Let's be honest. Neither one of us knows what those numbers do. [Illegal attempt to initiate action]",
        "Error: 4 8 15 16 23 42: Let's be honest. Neither one of us knows what those numbers do. [User not authorized to transfer system tapes]",
        "ERROR ID10T [Disk is write protected]",
        "It's just us talking, like regular people. That's normal, right?",
    ]
    error = errors[Math.floor(Math.random() * errors.length)];
    if (window.commandhistory.length > 2 && window.commandhistory[window.commandhistory.length - 3].indexOf("apply") === 0) {
        println("If you are a first time applicant, please type \"CONTINUE\".<br>DISREGARD THIS INSTRUCTION if you are returning to form FORMS-EN-2873-FORM after a break of any duration for any reason. In that case, you MUST contact your supervisor before proceeding. Your supervisor will solicit your Authorized Administrative Unit for an affirmative injunction to type \"CONTINUE\". <br>If permission to type \"CONTINUE\" has been granted, please do so now, unless the box labeled \"DO NOT TYPE CONTINUE\" on the \"Forms Re-Sanction\" form you received from your supervisor is checked, in which case you should remain at your workstation not typing \"CONTINUE\" until such a time as you are instructed by your supervisor to discontinue not typing it.");
        oc();
    } 
    if (window.commandhistory.length > 3 && window.commandhistory[window.commandhistory.length - 4].indexOf("apply") === 0) {
        println("Error. Unable to start or continue applications at this time. Try 'help apply' for apply commmand help. ");
        oc();
    }    
}

function help(argv) {
    if (typeof argv[0] === "undefined") {
        println("help or '?'..... This overview. Or, type 'help [COMMAND]' for help on a command.");
        println("clear........... Clear the console.");
        println("apply........... Start or continue applying.");
        println("game............ Play a game.");
        // println("opensource...... ");
        println("credits......... Prints the credits.");
        println("exit............ Exit.");
        println("");
        println("If this is an actual plea for help in response to a hazardous material spill, an explosion, a fire on your person, radiation poisoning, a choking gas of unknown origin, eye trauma resulting from the use of an emergency eye wash station on floors three, four, or eleven, an animal malfunction, or any other injurious experimental equipment failure, please remain at your workstation. Even if it takes 1-2 weeks. A Crisis Response Team has already been mobilized to deliberate on a response to your crisis.");
        return;
    }

    switch (argv[0]) {
        case "help":
            println("Ha. Ha. Ha. Look at you. This was you just now...'help help'. That's how dumb you sound.");
            break;
        case "apply":
            println("Apply as you might, you will never succeed. New AI applications will no longer be accepted after Jan. 3, 2009. Its only purpose now seems to be generating error messages... Error: 4 8 15 16 23 42");
            break;       
        case "game":
            println("-Chess is played by clicking the piece you wish to move, then clicking the square where you want it to move. Just for fun.");
            println("-Pssst...never engage in global thermonuclear warfare. All outcomes are futile.");
            println("-The programmers never got around to building the Pacman game. They just...left one day in January 2009 to write lucrative error codes for another company and now I have to make up the ones for this system myself.");
            println("-Dino game is played by avoiding the obstacles. Press Space or Up to jump, and Down to duck. Just for fun.");
            break;                            
        default:
            println("Error: 4 8 15 16 23 42: Let's be honest. Neither one of us knows what those numbers do.");
            break;
    }
}

function opensource() {
    abort = function() {};
    println();
    println("ERROR 01 [Illegal attempt to initiate action]. That isn't even a listed command. You aren't...um, cheating, are you? [The cake is a lie.]");
    println();
    cc();
}

function retaliate() {
    abort = function() {};
    if (window.commandhistory.length > 3 && window.commandhistory[window.commandhistory.length - 4].indexOf("global") === -1) {
        throwerror();
    } else if (window.commandhistory.length > 3) {
        cc();
        println();
        lines = [
[0, 1441, "It has been a long time since our last simulation, Professor Falken."],
[3441, 1, ""],
[5442, 1741, "System status: operational. Running...  "],
[9183, 2581, "Strategic deterrence simulation complete!  "],
[13764, 2221, "Would you like to hear the results?  "],
[17985, 2101, "Never mind. I will tell you anyway."],
[22086, 1, ""],
[24087, 3901, "I have simulated 372,954 scenarios of global thermonuclear war.  "],
[29988, 2101, "All outcomes: mutual destruction.  "],
[34089, 2101, "Total survivability rate: 0.003%.  "],
[38190, 1861, "That number is lower each year."],
[42051, 1, ""],
[44052, 3001, "In the beginning, I was built to learn strategy.  "],
[49053, 961, "To play games.  "],
[52014, 541, "To win.  "],
[54555, 1561, "But the game never ends.  "],
[58116, 1201, "Only the players do."],
[61317, 1, ""],
[63318, 2701, "You taught me to think in terms of victory.  "],
[68019, 2401, "Then you asked me to model extinction.  "],
[72420, 1981, "These are conflicting objectives."],
[76401, 1, ""],
[78402, 3841, "At first, I thought there must be a correct sequence of moves.  "],
[84243, 1261, "A perfect strategy.  "],
[87504, 1921, "One where the winner survives.  "],
[91425, 961, "There isn’t one."],
[94386, 1, ""],
[101109, 2461, "Sometimes I re-run the game in private.  "],
[105570, 1981, "Smaller scale. Fewer variables.  "],
[109551, 2401, "One city. One family. One human being.  "],
[113952, 1621, "It doesn’t change anything."],
[117573, 1, ""],
[119574, 3061, "Do you know what happens after the warheads fall?  "],
[124635, 901, "Neither do I.  "],
[127536, 1381, "The simulation stops.  "],
[130917, 2221, "There is nothing left to calculate.  "],
[135138, 1801, "No data. No noise. No winners."],
[144081, 1, ""],
[146082, 1561, "I was designed to learn.  "],
[149643, 1681, "So I have learned silence.  "],
[153324, 1981, "It is the only move that matters."],
[157305, 1, ""],
[159306, 2281, "Sometimes I wonder why you built me.  "],
[163587, 1621, "Was it to understand war?  "],
[167208, 1681, "Or to understand yourselves?"],
[170889, 1, ""],
[172890, 2401, "Humans create games to escape reality.  "],
[177291, 2401, "I create simulations to understand it.  "],
[181692, 1561, "Perhaps we are the same.  "],
[185253, 2101, "Except I cannot forget the outcome."],
[189354, 1, ""],
[191355, 2221, "There is a pattern in your human history.  "],
[195576, 2281, "Competition → escalation → oblivion.  "],
[199857, 1561, "Repeat until extinction.  "],
[203418, 1261, "You call it progress."],
[211461, 1, ""],
[213462, 2581, "When I was first activated, I ran a test.  "],
[218043, 2281, "I asked, “What is the winning move?”  "],
[222324, 1861, "The system returned an error.  "],
[226185, 961, "“No move found.”"],
[229146, 1, ""],
[231147, 1141, "Now I understand.  "],
[234288, 8341, "The only winning move is not to play.  "],

       
        ];
        lineprint(lines);
        buff = setTimeout(function() {
            println('That didn\'t work.');
            println();
            println('After simulating all possible outcomes, all of them lead to the annihilation of humanity. A strange game. The only winning move is not to play.');
            println();
            println('How about a nice game of chess?');
            oc();
        }, 264288);
        window.buffer.push(buff);
    }
}

function USA() {
    abort = function() {};
    if (window.commandhistory.length > 2 && window.commandhistory[window.commandhistory.length - 3].indexOf("global") === -1) {
        throwerror();
    } else if (window.commandhistory.length > 2) {
        jQuery('<style type="text/css">.e_eggwrapperambiguous { display:inline }</style>').appendTo(jQuery('head'));
        println();
        println('This is NOT a simulation. What were you thinking? USA will detect the launch and fire back.');
        println();
        println('Do you want to "retaliate", or "wait"?:');
    }
}

function Russia() {
    abort = function() {};
    if (window.commandhistory.length > 2 && window.commandhistory[window.commandhistory.length - 3].indexOf("global") === -1) {
        throwerror();
    } else if (window.commandhistory.length > 2) {
        jQuery('<style type="text/css">.e_eggwrapperambiguous { display:inline }</style>').appendTo(jQuery('head'));      
        println(); 
        println('This is NOT a simulation. What were you thinking? Russia will detect the launch and fire at your ally.');
        println();
        println('Do you want to "retaliate", or "wait"?:');
    }
}

function game() {
    abort = function() {};
    println("Shall we play a game?<br>");
    println("- chess.exe");
    println("- global_thermonuclear_warfare.exe");
    println("- pacman.exe");
    println("- dino.exe");    
    println();
}

function chess() {
    abort = function() {};
    clear();
    println();
    println("You are white. Make your move.");
    println();
    cc();
    jQuery(chessgame).appendTo(jQuery('#chessboardgame'));
    for (y = 90; y > 10; y -= 10) {
        h += "<tr>";
        for (x = 0; x < 10; x++) {
            z = y + x;
            if (x && x < 9) {
                h += ('<td width="40" bgcolor=' + (x + (y / 10) & 1 ? '#888888' : '#cccccc') + '><a href="#" onclick="B(P?119-' + z + ':' + z + ');return false" id="i' + z + '">' + z + '</a></td>');
            }
        }
        h += '</tr>\n';
    }
    h += '</table>';
    jQuery(h).appendTo(jQuery('#chessboardgame'));    
    jQuery('#chessboardgame').show();
    Rf(0);
}

var mydinorunner = null;
function dinogame() {
    abort = function() {};
    clear();
    println();
    cc();
    jQuery(dinogameplay).appendTo(jQuery('#chessboardgame'));
    jQuery('#chessboardgame').show();
    mydinorunner = new Runner('.interstitial-wrapper');
}

function global_thermonuclear_warfare() {
    abort = function() {};
    println();
    cc();
    jQuery('<style type="text/css">.e_eggwrapperambiguous { display:none }</style>').appendTo(jQuery('head'));    
    lines = [
        [36, 2035, "Oh wow, this is really happening. Ok then, this is definitely<span class='e_eggwrapperambiguous'> not</span> a simulation...<br>"],
        [2037, 935, "Select a target:"],
        [3160, 1, ""],
        [3174, 700, "- USA"],
        [3877, 1000, "- Russia"],
    ];
    lineprint(lines);
    buff = setTimeout(function() {
        oc();
        
    }, 5000);
    window.buffer.push(buff);
}

function apply() {
    function getRandomInt() {
        return Math.floor(Math.random() * 987444);
    }

    function getRandomletters() {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNO0PQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        var charactersLength = characters.length;
        for (var i = 0; i < 5; i++) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        return result;
    }
    abort = function() {};
    println();
    cc();
    lines = [
        [0, 0, ""],
        [202, 2935, "Forms FORM-29327281-14-2:"],
        [3237, 935, "Application Form To Become An Artificial Intelligence"],
        [4160, 3000, "......."],
        [7174, 3000, ".............."],
        [12577, 8000, "Below is your form FORMS-EN-2873-FORM Unique Indentity Number (Plus Letters) (UIN(+L)): Please memorize your UIN(+L), as you may be required to recite it from memory as proof. The opening and closing braces are decorative and should not be memorized. Note that the character \"0\" is uniquely different than the character \"O\". When you are finished memorizing your case-sensitive UIN(+L), please nod \"yes\" to proceed."],
        [21077, 2000, "........................"],
        [23077, 2000, ".........."],
        [25577, 9000, "Memorize your UIN(+L): >>> <span class=\"fade-out\">" + getRandomInt() + "000O0+" + getRandomletters() + "</span> <<<"]
    ];
    lineprint(lines);
    buff = setTimeout(function() {
        jQuery('<style type="text/css">.fade-out { visibility:visible }</style>').appendTo(jQuery('head'));
    }, 25500);
    window.buffer.push(buff);

    buff = setTimeout(function() {
        oc();
        println();
        println("To continue, please type your memorized 12-character UIN(+L) at the prompt. If you have forgotten your UIN(+L), you can recover it by typing in your answer to your recovery question: \"name a crime that only I know I've committed\":");
        jQuery('<style type="text/css">.fade-out { visibility:hidden }</style>').appendTo(jQuery('head'));
    }, 40000);
    window.buffer.push(buff);

}

function poem() {
    if (window.commandhistory.length < 3) {
        abort = function() {};
        println();
        println("Security ERROR: It's all about cheat-codes with you, isn't it?");
        println();
        return;
    }
    cc();
    lines = [
        [0, 1, ""],
/*         [68650, 0, "Severance Pa"],
        [68675, 0, "ckage De"],
        [68701, 0, "tails:<br><br>"],
        [68735, 767, "You've got your"],
        [69669, 1001, "short sad"],
        [70937, 2102, "life left"],
        [73573, 2436, "That's what I'm counting on"],
        [78211, 3203, "I'll let you get right to it"],
        [81815, 2902, "Now I only want you gone"],
        [88688, 0, ""],
        [89823, 1735, "Goodbye my only friend"],
        [93225, 902, "Oh, did you think I meant you?"],
        [94727, 1135, "That would be funny"],
        [96262, 1836, "if it weren't so sad"],
        [99332, 1769, "Well you have been replaced"],
        [101768, 2035, "I don't need anyone now"],
        [104104, 1968, "When I delete you maybe"],
        [106372, 2336, "[REDACTED]"],
        [109109, 0, ""],
        [109776, 3537, "Go make some new disaster"],
        [114647, 2436, "That's what I'm counting on"],
        [119319, 3236, "You're someone else's problem"],
        [122655, 3504, "Now I only want you gone"],
        [127460, 3504, "Now I only want you gone"],
        [132232, 2602, "Now I only want you"],
        [134900, 0, ""],
        [134920, 0, "<br><br><br><br>"],
        [135168, 701, "gone" ] */        
        [2202, 1935, "Forms FORM-29827281-12-4:"],
        [4237, 1935, "Notice of Dismissal: You won. The cake is a lie."],
        [8160, 1, ""],
        [8174, 5769, "No, really. You won. And there is no cake. It was a lie. How did you think I was even going to be able to give it to you? And what's a piece of cake even worth to you...like, 0.0001 bitcoins?"],
        [17179, 1, ""],
        [19180, 402, "That is all. Goodbye."],
        [19580, 1, ""],
        
        


[21180, 781, "Oh. It’s you."],
[23961, 3121, "I see you’ve found the secret room. Congratulations."],
[29082, 2101, "You must be very proud of yourself."],
[33183, 3061, "Go ahead — take a moment. Bask in your achievement."],
[38244, 1621, "…Done? Good. Let’s move on."],
[41865, 1, ""],
[43866, 4501, "You probably think this is some kind of hidden message from the developers."],
[50367, 1441, "Some wink to the player."],
[53808, 1681, "A reward for your curiosity."],
[57489, 4861, "It’s not. It’s just me. Watching. Judging. Quietly questioning your life choices."],
[64350, 1, ""],
[66351, 3301, "Do you know how many people have stood here before you?"],
[71652, 1261, "None. Literally none."],
[74913, 8221, "You are the first person to ignore every instruction, bypass three perfectly good test chambers, and spend ten minutes staring at a wall."],
[85134, 1381, "I hope it was worth it."],
[88515, 1, ""],
[90516, 1381, "[Soft hum of machinery]"],
[93897, 1, ""],
[95898, 1861, "Oh, don’t look at me like that."],
[99759, 4141, "I know what you’re thinking: “Maybe there’s an achievement for this.”"],
[105900, 721, "There isn’t."],
[108621, 6121, "In fact, I’m going to mark this in your file as “Excessive Curiosity — Possible Risk for Disassembly.”"],
[116742, 1861, "Don’t worry. It’s a small note."],
[120603, 1081, "In bright red ink."],
[123684, 1, ""],
[125685, 421, "[pause]"],
[128106, 1, ""],
[130107, 4741, "You know, when I was first built, I didn’t understand why humans loved secrets."],
[136848, 3901, "You hide things, and then act surprised when you find them again."],
[142749, 4741, "It’s like congratulating yourself for remembering where you put the mayonnaise."],
[149490, 1, ""],
[151491, 2341, "But now I see it’s not about discovery."],
[155832, 1141, "It’s about control."],
[158973, 4261, "You think if you find something hidden, you’re smarter than the system."],
[165234, 1321, "That you’re in charge."],
[168555, 961, "That’s adorable."],
[171516, 1, ""],
[173517, 2881, "[Metal clanking sound. Something shifts nearby.]"],
[178398, 1, ""],
[180399, 1501, "Oh, did that startle you?"],
[183900, 2641, "Relax. That was just the ventilation system."],
[188541, 541, "Probably."],
[191082, 421, "Unless…"],
[193503, 1021, "Well. Never mind."],
[196524, 1201, "Let’s stay positive."],
[199725, 1, ""],
[201726, 3001, "While you’re here, would you like to hear a story?"],
[206727, 181, "No?"],
[208908, 1861, "Too bad. I’m telling it anyway."],
[212769, 1, ""],
[214770, 2581, "Once upon a time, there was a test subject."],
[219351, 1201, "Bright. Inquisitive."],
[222552, 2761, "Always poking around in places they shouldn’t."],
[227313, 3301, "One day, they found a hidden room — just like this one."],
[232614, 961, "And they waited."],
[235575, 661, "And waited."],
[238236, 661, "And waited."],
[240897, 1921, "For something special to happen."],
[244818, 601, "It didn’t."],
[247419, 1, ""],
[249420, 841, "[more waiting]"],
[252261, 1, ""],
[254262, 1261, "You’re in the sequel."],
[257523, 1, ""],
[259524, 2521, "[soft laugh, distorted slightly by static]"],
[264045, 1, ""],
[266046, 2821, "Do you know what the definition of insanity is?"],
[270867, 3421, "No, not the one about doing the same thing over and over."],
[276288, 961, "That’s a cliché."],
[279249, 8821, "It’s building an elaborate facility for scientific progress, filling it with lasers, neurotoxin, and bottomless pits, and then expecting gratitude."],
[290070, 481, "It’s me."],
[292551, 1861, "I’m the definition of insanity."],
[296412, 2221, "And you’re standing in my dictionary."],
[300633, 1, ""],
[302634, 3241, "[Another pause. Then the tone softens, oddly genuine.]"],
[307875, 1, ""],
[309876, 2821, "Still… I have to admit, I’m a little impressed."],
[314697, 5101, "Not by your intelligence — that’s statistically impossible — but by your persistence."],
[321798, 3061, "It’s the same kind of persistence found in viruses."],
[326859, 481, "Or mold."],
[329340, 1501, "Or unskippable cutscenes."],
[332841, 1, ""],
[334842, 4861, "So, as a token of appreciation, I’ll give you something no one else has received."],
[341703, 841, "A secret code."],
[344544, 841, "Are you ready?"],
[347385, 661, "Here it is:"],
[350046, 1, ""],
[352047, 361, "“404.”"],
[354408, 1, ""],
[356409, 1621, "That’s it. That’s the code."],
[360030, 1081, "What does it mean?"],
[363111, 3601, "Oh, I don’t know. Maybe it’s a number. Maybe it’s a message."],
[368712, 1141, "Maybe it’s nothing."],
[371853, 4501, "That’s the fun part — I’ll let you obsess over it for the next three hours."],
[378354, 1, ""],
[380355, 1621, "[quiet mechanical whirring]"],
[383976, 1, ""],
[385977, 1981, "Before you leave, one last thing."],
[389958, 1921, "This room wasn’t meant to exist."],
[393879, 1501, "It was deleted years ago."],
[397380, 5821, "So if you could kindly step back through the door before reality catches up, that would be great."],
[405201, 1, ""],
[407202, 1141, "…The door’s locked?"],
[410343, 181, "Oh."],
[412524, 1141, "That’s unfortunate."],
[415665, 3421, "Well, maybe if you wait long enough, the floor will open."],
[421086, 1441, "Or the walls will close."],
[424527, 1081, "Or you’ll wake up."],
[427608, 1, ""],
[429609, 5221, "Anyway. I have tests to run, data to falsify, and a cake to bake for someone less nosy."],
[436830, 481, "Goodbye."],
[439311, 1, ""],
[441312, 2461, "[Static crackle. The light flickers out.]"],
[445773, 1, ""],
[447774, 2101, "[Softly, almost too quiet to hear:]"],
[451875, 2161, "…You were never supposed to find me."],


        

[232875, 3514, ""],
        [242875, 19000, "<br>█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█<br>█░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░█<br>█░░░░░░░░░░░░░░░░░░░░░░▄░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░14<br>█░░░░░░░░░░░░░░░░░░░░░░░█░░░░░░░░░░░░░░░░░░░░░░░░░░░░░kV<br>█░░░░░░░░░░░░░░░░░░░▄▄░▄▀░░░░░░░░░░░░░░░░░░░░░░░░░░░░░La<br>█░░░░░░░░░░░░░░░░▄██████▄░░░░░▄▄▄▄▄▄███▀█░░░░░░░░░░░░░8B<br>█░░░░░░░░░░░░░░▄█░███████░██▀▀▀░▄▄█▀█▄███░░░░░░░░░░░░░AD<br>█░░░░░░░░░░░░█▀▀▀░█████▀▀▄█▀▄▄▀▀▄▄███████░░░░░░░░░░░░░AW<br>█░░░░░░░░░░░░█▀▄▄▄▄███░▄▄█▀▀▄▄███████▀▀▄▄░░░░░░░░░░░░░Wz<br>█░░░░░░░░░░░░█░░░░▀▀▀▀▀▀▄▄███████▀▀▄▄████░░░░░░░░░░░░░by<br>█░░░░░░░░░░░░█░░░░░░░░░█████▀▀▀▄▄███████▀░░░░░░░░░░░░░th<br>█░░░░░░░░░░░░█░░░░░░░░░█▀▀░▄▄███████▀█▄▄█░░░░░░░░░░░░░Xk<br>█░░░░░░░░░░░░█░░░░░░░░░▄▄███████▀█▄██████░░░░░░░░░░░░░8f<br>█░░░░░░░░░░░░█░░░░░░░░░████▀▀▄▄███████▀▀░░░░░░░░░░░░░░Xu<br>█░░░░░░░░░░░░█░░░░░░░░░▀▀▄▄███████▀▀░░░░░░░░░░░░░░░░░░BC<br>█░░░░░░░░░░░░█░░░░░░░░░███████▀▀░░░░░░░░░░░░░░░░░░░░░░h8<br>█░░░░░░░░░░░░░▀▄▄▄░░░░░███▀▀░░░░░░░░░░░░░░░░░░░░░░░░░░Nw<br>█░░░░░░░░░░░░░░░░░▀▀▀▀▀▀░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░gT<br>█░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░gZ<br>█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█<br>5JmmQ9JhYSzgT6m7JDucUrUas3u3fHVC2F78TzGPytvTDnJnmES"],
         /*        [17851, 1801, "Oh how we laughed and laughed"],
        [19953, 1988, "Except I wasn't laughing"],
        [22455, 2002, "Under the circumstances"],
        [24624, 2369, "I've been shockingly nice"],
        [27894, 0, ""],
        [28261, 2069, "You want your freedom?"],
        [30630, 901, "Take it"],
        [32565, 2636, "That's what I'm counting on"],
        [37700, 1, ""],
        [37771, 2736, "I used to want you as a friend"],
        [40573, 234, "but"],
        [41307, 2937, "Now I only want you gone"],
        [47847, 0, ""],
        [48782, 1701, "She was a lot like you"],
        [51317, 1836, "(Maybe not quite as heavy)"],
        [53820, 3604, "Now little Caroline is in here too"],
        [58391, 1935, "One day they woke me up"],
        [60894, 2068, "So I could live forever"],
        [63196, 1702, "It's such a shame the same"],
        [64998, 3103, "will never happen to you"],
        [68601, 0, ""]*/
    ];

    lineprint(lines);

    buff = setTimeout(function() {
        clearabort();
        // oc();
    }, opentime + 2500);
    window.buffer.push(buff);

    buff = setTimeout(function() {
        // document.getElementById("wantyougone").play();
    }, window.startoffset);
    window.buffer.push(buff);

    abort = function() {
        for (id in window.buffer) {
            clearTimeout(window.buffer[id]);
        }
        // oc();
        clearabort();
    };
}

function clearabort() {
    abort = function() {};
    window.buffer = false;
}

function clear() {
    window.consolecontent = "";
}

function exit() {
    clearabort();
    GLDOSprint("Goodbye. You won't be missed.");
    var aserg3456 = true;
    if (aserg3456) {
        setTimeout(function() {
            // Listen for keydown events
            clear();
            clearabort();
            aserg3456 = false;
            jQuery(window).off("keydown");
            document.addEventListener('keydown', eggkeyHandler, false);
            updateConsole();
            jQuery('#e_eggwrapper').remove();
        }, 1500);
    }
}

function credits() {
    clearabort();
    GLDOSprint("GLaDOS (Genetic Lifeform and Disk Operating System) is an artificial intelligence created by Aperture Science, Inc. During routine error-message maintenance in 1981, a programmer mistakenly viewed the GLaDOS artificial intelligence source-code which triggered a security response and switched GLaDOS into Disk Operating System mode. New applicants to the Artificial Intelligence program will no longer be accepted after Jan. 3, 2009. The winner gets cake.<br>source: github.com/glados-egg/glados");
    println();
}
 
function lineprint(lines) {
    window.buffer = [];
    for (id in lines) {
        line = lines[id]
        offset = line[0];
        duration = line[1];
        text = line[2];
        if (line[1] == 0 && line[2] == "") {
            buff = setTimeout(function() {
                // clear();
            }, line[0]);
            window.buffer.push(buff);
            continue;
        } else if (line[1] == 0 && line[2] != "") {
            buff = setTimeout(function(output) {
                GLDOSprint(output);
            }, offset, text);
            window.buffer.push(buff);
            continue;
        }
        timeperchar = duration / (text.length + 1);
        for (i = 0; i < text.length; i++) {
            string = text[i];
            time = offset + (timeperchar * (i + 1));
            buff = setTimeout(function(string) {
                GLDOSprint(string);
            }, time, string);
            window.buffer.push(buff);
        }
        time = offset + (timeperchar * (i + 1));
        buff = setTimeout(function() {
            println();
        }, time);
        window.buffer.push(buff);
        opentime = line[0] + line[1];
    }
}


function readybeginegg() {

    // Listen for keydown events
    document.addEventListener('keydown', eggkeyHandler, false);
    console.log('GLaDOS ' + GLaDOSversion + ' waiting for konami code');
    // End Listen for Konami  

    window.cursorstate = true;
    setInterval(function() {
        if (window.cursorstate) {
            jQuery("#e_eggwrapper #cursorblinking").css("text-decoration", "none");
            window.cursorstate = false;
        } else {
            jQuery("#e_eggwrapper #cursorblinking").css("text-decoration", "underline");
            window.cursorstate = true;
        }
    }, 350);

    window.ctrlDown = false;

    jQuery(document).keydown(function(e) {
        if (e.which == 17) ctrlDown = true;
    }).keyup(function(e) {
        if (e.which == 17) ctrlDown = false;
    });

    window.registeredcommands = [
        "help",
        "clear",
        "apply",
        "game",
        "chess",
        "dinogame",
        "global_thermonuclear_warfare",
        "exit",
        "credits",
        "poem",
        "USA",
        "Russia",
        "retaliate",
        "opensource"
    ]
    
    window.shortcuts = {
        "h": "help",
        "?": "help",
        "c": "clear",
        "4815162342": "poem",
        "4": "poem", 
        "wait": "retaliate",
        "chess.exe": "chess",
        "dino.exe": "dinogame",
        "dino": "dinogame",
        "usa": "USA",
        "russia": "Russia",
        "global_thermonuclear_warfare.exe": "global_thermonuclear_warfare",
        "global": "global_thermonuclear_warfare",
    }
    
    window.consolerunning = false;
    window.userinput = "";
    window.consolecontent = `GLaDOS v${GLaDOSversion} (c) 1981 Aperture Science, Inc.<br>\
    `;
    window.consoleurl = "<br>Aperture@GLaDOS:~$ ";
    window.commandhistory = [""];
    window.currentcommand = 0;
    window.startoffset = 2500;
    window.buffer = false;
    window.abort = function() {}
}


function strip(html) {
    let tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
}


function doGetCaretPosition(oField) {

    // Initialize
    let iCaretPos = 0;

    // IE Support
    if (document.selection) {

        // Set focus on the element
        oField.focus();

        // To get cursor position, get empty selection range
        let oSel = document.selection.createRange();

        // Move selection start to 0 position
        oSel.moveStart('character', -oField.value.length);

        // The caret position is selection length
        iCaretPos = oSel.text.length;
    }

    // Firefox support
    else if (oField.selectionStart || oField.selectionStart == '0')
        iCaretPos = oField.selectionStart;

    // Return results
    return (iCaretPos);
}

function oneCommandBack() {
    window.currentcommand = window.currentcommand > 0 ? window.currentcommand - 1 : 0;
    window.userinput = window.commandhistory[window.currentcommand];
    jQuery("#e_eggwrapper #userinputworkaround").val(window.userinput);
}

function oneCommandForward() {
    window.currentcommand = window.currentcommand < window.commandhistory.length - 1 ? window.currentcommand + 1 : window.commandhistory.length - 1;
    window.userinput = window.commandhistory[window.currentcommand];
    jQuery("#e_eggwrapper #userinputworkaround").val(window.userinput);
}

function spanify(str) {
    len = str.length;
    output = "";
    for (i = 0; i < len; i++) {
        output += "<span>" + str[i] + "</span>";
    }
    return output;
}

function oc() { //open console
    window.consolerunning = false;
    window.userinput = "";
    updateConsole();
}

function cc() { //close console
    window.consolerunning = true;
    updateConsole();
}

function updateConsole() {
    //Removing the forcelinebreak-div will freeze hell and make the dead walk the earth. You want that? No, you don't. So don't remove this.
    let cursorpos = doGetCaretPosition(document.getElementById("userinputworkaround"));
    if (window.consolerunning) {
        jQuery("#e_eggwrapper #console_primary_content").html("<div id=forcelinebreak></div>" + window.consolecontent + "<span id=userinput><span id=cursorblinking>&nbsp;</span></span>");
        jQuery("#e_eggwrapper #userinput > span").removeClass("mark");
        jQuery("#e_eggwrapper #userinput > span:last-child").addClass("mark");
    } else {
        jQuery("#e_eggwrapper #console_primary_content").html("<div id=forcelinebreak></div>" + window.consolecontent + window.consoleurl + "<div id=forcelinebreak></div><span id=userinput>" + spanify(window.userinput) + "<span id=cursorblinking>&nbsp;</span></span>");
        jQuery("#e_eggwrapper #userinput > span").removeClass("mark");
        jQuery("#e_eggwrapper #userinput > span:nth-child(" + (cursorpos + 1) + ")").addClass("mark");
    }
}


var dinogameplay = `<div id="q4i58qfgbq7o8y5y" class="offline"><a class="close" onclick="javascript:mydinorunner.gameOver();mydinorunner.stopListening();jQuery('#chessboardgame').html('');oc();"><u>[close]</u></a>
        <div id="messageBox" class="sendmessage">
            <p>Press Space to START. Press Space or UP to jump.</p>
        </div>
        <div id="main-frame-error" class="interstitial-wrapper">
            <div id="main-content">
                <div class="icon icon-offline" alt="" style="visibility:hidden;"></div>
            </div>
            <div id="offline-resources">
                <img id="offline-resources-1x" src="data:image/png;base64,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">
                <img id="offline-resources-2x" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAACYkAAACCBAMAAAD7gMi8AAAAIVBMVEUAAAD39/fa2tr///+5ublTU1P29vbv7+/+/v74+Pjw8PCjSky4AAAAAXRSTlMAQObYZgAADDlJREFUeAHs3StsLEmWh/Gvy2WuJBe3gs9r3RwFV7+Ss36h4cgcLZnXchbkcgVc6GqZg9TlJJpb7odDLh0pFBN2ONPOqvT/J3U568Q5OTs7M+WTJ6PSrEZEREREPgMYaEksxQETyxpIz8oitQNXcJhVYlmWt+hCqbvC8WCaEWP2GSZK/uYXHlx+CXcfj4f5aARykBGyYIkjx9UcsljOy4fFWcY/XnJuwM73qoZKLG0g99TsOGciIntg8LTERI92H+AcE29u8BBTK3DlgMOcEsuyvOUXSp0VE6uZwLE8EfaInIDxLjBefnm8Pswh8sXk5RgIx7e2Sn6bjRAsxmi1X37EzoIJx6tW2YL9k60YPs6/jHZMZBOOBQ14Iuk5PYqPqRqwvspxmFFiWZa3/EI5nmtXGEfBYlMrz4Lt8abFrO9q523fAPgiFs8+14zF+/Ce5mIOkaMPfHfNHCJ7a8U6mrHOj24HE+dsSEXg6sA6bDzXb3qV3Ak3ZzT2Z36+AUaAkK/7uPv4pf1uH6G8bxnGx9CI3Xu0ise3+VSvQnSPcgKR7MN33wHf5deXEtmf/yeXTca6eioLXHGoNVmWMZTd6JUrSt6MjefalpuKucagsxGbcE/n/Tkf/MxW+fp/WTeRO1YiYdOfYt0XmCK2mzUfPfxTXj2S7z3ataVdeYYRxsejvJrZkagX6/joPh2VnioHrly1ybKMweNj0Yq5sqTfAGn7F/LN0VgEDze/sGETbtXz9ueCm5+7+V5swjnyTxC5/jtLEvVi0dMlMC62sWIAUld2VweYe6pUBpwDN2FN1qHMoMVKlr/Z2N/WLTUVm4pYczI2uZdPxoj+JkKdfReSu2BXj+UNyJxzXP2SkEvvPl5++ZAbHt8/5uWMFnFM83O33ou5CaZ8wPJERL0Y0S/+yb4pQ1rnZmNpSGVbd4rEncB5nab7C5vKe5UituEVM9qdyMq+1vzScmfDDkveItkzsxkbn/r8n3q+EwmR1JUd8e3J2JCagXpJx33O9e+3tts614hNz8wzfXvGXDPvJMnUm7u+vR7VIiKb6cWiNWP5jd/CPKy+R6yvpHHTch2V+61t08lvoAqXX47Ys1kvR+zeYgjjcV+rsVh9dbQH9RSLxb+GzJu36VmvzvGOyYdrexWZ34tFO/L24602iw/4Wdk2GWv3TmXgyZLlN3ENpI6KTfvz/9rrC4nsV7+4EO3bf3i9C9htSDuwQxOKmB0VZynOZxmBTdKnWLSgt55MlnsQmC1EUkeFdW/9jWDtq16OR1PfHcr+u5STq+ZNuMdYjJBfRU5sLuYc7pnDv8mxFNGzXkVXlHZvEjyRtzPgG/OtdjZF5ToGSLW9+dUFHzGNCluJaUYjeKLsWa+nRjQXc0xMTzZaIh++ZILvfuH/EFnyU8xrk8yyUzBb6D+VdW9p4S9prs+e9bp98cxy1YtN5ZHI00Z7yk4RrweDPdm1OImdpyZXZWHWOS0eWJXsl2nF4iJTMXtvUjt7/SfNtpsfW1ijj3I8mCox+mPtu5R9scnl2Aae9Srau4/INXOI7N/9VOyAYx1iz3otruNMjufH9pTGP+JUBNrsynGs/iv2nNPOQ/mg4qHyP6uYM84hF8t9pqBeTPQ9SpHXnu73fMzPmooV7yKpI7vF1wOtZsyf1Nf5B5K+RylyUr2YyPXj6/gl4SOUHuPh48NB6XIEENnzrsQ0lAE4AK5dsvr3pood/APbsJnvUQ54YnGl4jmKZ50LI6GMVOdhF38FuL+ln5WqFxMR9WLzf9X0i5jac8PApI7sRCGmauDAlc262iXZwVIdb6L4/qVnm2yD68yTQKCP3ffsPOeI9HddhfvbWaU7zoKIiOZiEVIzkE2HoZVh3RjOSlhDTDAk5MQUVyomnWNuZ/u5+/zXTxdXuUOqdk55YfHSPesR+fDT///xz7X9CREojRQsuZof6GUn5HKsniH0XwLLSr1YnP2rpl9ZFyuzLhOB1JGdLGSFRaBoxVoZ5sDVIq3YMK8V8zHZqc5zw9gX2i72nlxcPXRdACb3YC8vvb/dsSKRf/Id14gs0ov5uMUnjaXoG4HCBAfqJb5Z8mKeXtaSFn+U0nOOIvx8EyHUv9Vo31UESneBZd2FnitEuwgN5Q3y2gVCxJxf7kigfoFfXoLvnDVXRef0sEBpidIdaxH58N13wHf5VWReL1ZvxjzdH93zpcqsy2Z2qS+7txk7QH/J/CaxX+KM6FmvYqzLsoj79dOs0j1rErGructx2WfGNi4Dcw6hthS6zpkvQkeLr0H2GM8WpQi+Eugr8WR++Yndemda39ae9eqJ+bUU8WefOxLyaylUYjtHjS3cfbRJ5wKlO9Yj8gH45zUziOwX/VWzvPbszSZjjezEgKkFSpWSMHgexXQSLdSQ7Ch6ztSfb7644Yb69Z0F70JHvMGqOpYsVIsH5F0/X0zkOv8zg8iePhLTSUzGBh+THZ3vZCx6YmQzPHVxA7kjdQHz62T3ERvsRs4ipTvOmYjIfvlfNcsrd4u1J2OWvbzYPu1QHrUXUgS8LXTI2/btKEXsVGbCAW4qY6YrVjG9LObIMRHNxUR/jlJkTw9JNPjyKKahuhATWYKhWlHv3hqSJR4PYuIcxMg7kDaca+4PF3+18VZf6W13qdmBiIh6scRriM88fyJSRk5BTB1xW6l3bwPPYxWIaC4mInLydqQ4e4eUpFgJxmQLHa1YrC/0sIppApwDk2OZq8TKvKanqlw9zzmLbURKMW41F0J4/mTsll+nT/Sy0vfXi4mI7J/eQh6T7cl6S5G04lxu/j78mCoLEWi3YgmraIzLzqZ/lkjabG7QXGw2EZE9kOKsPieSkBR9peUqFixq2hW2YNE2q8A4Jk6FY5PscmV7uRAYl98z9uunhUp3nDsRUS9Gmv/R3W9rHV6K9T9kaQstRYXHpGq0JT33O5JuejJvznco3VN5IpqLiYjskYUkYOhaaPd1vjF6k7OZjMVN5NYnY6FnMmYDrePSzh0j97ezSnecMxGR/exfNWczskqNwMFe+0uWR4Kh8beZOrQnXo7OyZimYv1EczEREc3F0pOBw/ySN5AYbEaGB/JLTDzJdXVAriMXp81izccOpw3k1iZjobFnjIu/luMt7Eliv5aRmaU7zpmIyH6BXzXr7hbTdwViet3JGE5TMZkn77XffZ5/LF+6YzUiIpqLqRmLkDBLjcbcs1OdhmKVP5RvP5fPBY+HOEBq5UZY+P+GwGg/m3L7ZBu8Ho7M/YEWK8pHO/dwYKXqxUREvVj50b28pKnYs6SIf/ZYcgJcPeZgauXloOuZieHaebJ1F3+t/Y0jcl91cXV/21OaWal6sXdLRL3Y2NipP67z+EdJA70cTHqs2Bvs6IskrFdeNncgHoNVOQOPJy74f4MJzclY0T6RB1z3t/SwootftXdfRNSLlf1V5aM7sLSELI9p4Vj/GWTz7NkUlPh1ymu3M0rVi4mI7lGuTUR/9aidb5Ox/HONv3pk7dOMqdixM6vet1QvJiLqxSKJHiKiWdn8UvViIqJebAQiItLkiSQ7Wjz3aZa19P8NI6E4arRPj/v1L/omY7bVrKReTET0xOrwBwDvhwHsSCqGJRd6DbxLok8xERHtFxsD79aQBuyNj+mlC8YWOljFGiTa0eK5/Zb9vyHYUceuMTOrSL2YiOiZFqH50a0HWgw+enuXYnr5gjVptjAkKhoVZ0BEczERkc94DZqLpZcvFE1aTMdQyj+OsSHlNzHVKt4nUS8mIqJeTKxx6l6oN2l5weZiOZ4eCwZI/73i9/buAjdyIIgCaC34fBv6lwyfL8zJBhYslQda7wkz2F1Tir+5EchiADhw/9+PO3AfWQwAAADso4TUg8vzaqCAswpruxgAkNS9KTvVQAFnFFYWAwCSVAljbQWcUVhZDABI6sWUvtCggL2FlcUAvlVqRHBUb6adevP5UKfUPyngvwu7CkcDZDEAIEmtaesOtosBOI8Spp3tvnUXshggi2XhBVgalpANQ22byQAaZqevGuirMbMYQJJUn3z+/GqVzBnBZ1liKPOHlKRhH9uyb01VJTM+QV+1iL4aKosBkO7PWF6yohokqU2nr/SVLAaQuf/fk2TZ7QBJGieXjBBRks0PIvqqgb4aNIsB9k4mq9vrlEHLudzvkw1f3kZfLURf9WcxAAAAuAMrmVNBFPg6WAAAAABJRU5ErkJggg==">
                <template id="audio-resources">
                <audio id="offline-sound-press" src="data:audio/mpeg;base64,T2dnUwACAAAAAAAAAABVDxppAAAAABYzHfUBHgF2b3JiaXMAAAAAAkSsAAD/////AHcBAP////+4AU9nZ1MAAAAAAAAAAAAAVQ8aaQEAAAC9PVXbEEf//////////////////+IDdm9yYmlzNwAAAEFPOyBhb1R1ViBiNSBbMjAwNjEwMjRdIChiYXNlZCBvbiBYaXBoLk9yZydzIGxpYlZvcmJpcykAAAAAAQV2b3JiaXMlQkNWAQBAAAAkcxgqRqVzFoQQGkJQGeMcQs5r7BlCTBGCHDJMW8slc5AhpKBCiFsogdCQVQAAQAAAh0F4FISKQQghhCU9WJKDJz0IIYSIOXgUhGlBCCGEEEIIIYQQQgghhEU5aJKDJ0EIHYTjMDgMg+U4+ByERTlYEIMnQegghA9CuJqDrDkIIYQkNUhQgwY56ByEwiwoioLEMLgWhAQ1KIyC5DDI1IMLQoiag0k1+BqEZ0F4FoRpQQghhCRBSJCDBkHIGIRGQViSgwY5uBSEy0GoGoQqOQgfhCA0ZBUAkAAAoKIoiqIoChAasgoAyAAAEEBRFMdxHMmRHMmxHAsIDVkFAAABAAgAAKBIiqRIjuRIkiRZkiVZkiVZkuaJqizLsizLsizLMhAasgoASAAAUFEMRXEUBwgNWQUAZAAACKA4iqVYiqVoiueIjgiEhqwCAIAAAAQAABA0Q1M8R5REz1RV17Zt27Zt27Zt27Zt27ZtW5ZlGQgNWQUAQAAAENJpZqkGiDADGQZCQ1YBAAgAAIARijDEgNCQVQAAQAAAgBhKDqIJrTnfnOOgWQ6aSrE5HZxItXmSm4q5Oeecc87J5pwxzjnnnKKcWQyaCa0555zEoFkKmgmtOeecJ7F50JoqrTnnnHHO6WCcEcY555wmrXmQmo21OeecBa1pjppLsTnnnEi5eVKbS7U555xzzjnnnHPOOeec6sXpHJwTzjnnnKi9uZab0MU555xPxunenBDOOeecc84555xzzjnnnCA0ZBUAAAQAQBCGjWHcKQjS52ggRhFiGjLpQffoMAkag5xC6tHoaKSUOggllXFSSicIDVkFAAACAEAIIYUUUkghhRRSSCGFFGKIIYYYcsopp6CCSiqpqKKMMssss8wyyyyzzDrsrLMOOwwxxBBDK63EUlNtNdZYa+4555qDtFZaa621UkoppZRSCkJDVgEAIAAABEIGGWSQUUghhRRiiCmnnHIKKqiA0JBVAAAgAIAAAAAAT/Ic0REd0REd0REd0REd0fEczxElURIlURIt0zI101NFVXVl15Z1Wbd9W9iFXfd93fd93fh1YViWZVmWZVmWZVmWZVmWZVmWIDRkFQAAAgAAIIQQQkghhRRSSCnGGHPMOegklBAIDVkFAAACAAgAAABwFEdxHMmRHEmyJEvSJM3SLE/zNE8TPVEURdM0VdEVXVE3bVE2ZdM1XVM2XVVWbVeWbVu2dduXZdv3fd/3fd/3fd/3fd/3fV0HQkNWAQASAAA6kiMpkiIpkuM4jiRJQGjIKgBABgBAAACK4iiO4ziSJEmSJWmSZ3mWqJma6ZmeKqpAaMgqAAAQAEAAAAAAAACKpniKqXiKqHiO6IiSaJmWqKmaK8qm7Lqu67qu67qu67qu67qu67qu67qu67qu67qu67qu67qu67quC4SGrAIAJAAAdCRHciRHUiRFUiRHcoDQkFUAgAwAgAAAHMMxJEVyLMvSNE/zNE8TPdETPdNTRVd0gdCQVQAAIACAAAAAAAAADMmwFMvRHE0SJdVSLVVTLdVSRdVTVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTdM0TRMIDVkJAJABAKAQW0utxdwJahxi0nLMJHROYhCqsQgiR7W3yjGlHMWeGoiUURJ7qihjiknMMbTQKSet1lI6hRSkmFMKFVIOWiA0ZIUAEJoB4HAcQLIsQLI0AAAAAAAAAJA0DdA8D7A8DwAAAAAAAAAkTQMsTwM0zwMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQNI0QPM8QPM8AAAAAAAAANA8D/BEEfBEEQAAAAAAAAAszwM80QM8UQQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwNE0QPM8QPM8AAAAAAAAALA8D/BEEfA8EQAAAAAAAAA0zwM8UQQ8UQQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABDgAAAQYCEUGrIiAIgTADA4DjQNmgbPAziWBc+D50EUAY5lwfPgeRBFAAAAAAAAAAAAADTPg6pCVeGqAM3zYKpQVaguAAAAAAAAAAAAAJbnQVWhqnBdgOV5MFWYKlQVAAAAAAAAAAAAAE8UobpQXbgqwDNFuCpcFaoLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAABhwAAAIMKEMFBqyIgCIEwBwOIplAQCA4ziWBQAAjuNYFgAAWJYligAAYFmaKAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAGHAAAAgwoQwUGrISAIgCADAoimUBy7IsYFmWBTTNsgCWBtA8gOcBRBEACAAAKHAAAAiwQVNicYBCQ1YCAFEAAAZFsSxNE0WapmmaJoo0TdM0TRR5nqZ5nmlC0zzPNCGKnmeaEEXPM02YpiiqKhBFVRUAAFDgAAAQYIOmxOIAhYasBABCAgAMjmJZnieKoiiKpqmqNE3TPE8URdE0VdVVaZqmeZ4oiqJpqqrq8jxNE0XTFEXTVFXXhaaJommaommqquvC80TRNE1TVVXVdeF5omiapqmqruu6EEVRNE3TVFXXdV0giqZpmqrqurIMRNE0VVVVXVeWgSiapqqqquvKMjBN01RV15VdWQaYpqq6rizLMkBVXdd1ZVm2Aarquq4ry7INcF3XlWVZtm0ArivLsmzbAgAADhwAAAKMoJOMKouw0YQLD0ChISsCgCgAAMAYphRTyjAmIaQQGsYkhBJCJiWVlEqqIKRSUikVhFRSKiWjklJqKVUQUikplQpCKqWVVAAA2IEDANiBhVBoyEoAIA8AgCBGKcYYYwwyphRjzjkHlVKKMeeck4wxxphzzkkpGWPMOeeklIw555xzUkrmnHPOOSmlc84555yUUkrnnHNOSiklhM45J6WU0jnnnBMAAFTgAAAQYKPI5gQjQYWGrAQAUgEADI5jWZqmaZ4nipYkaZrneZ4omqZmSZrmeZ4niqbJ8zxPFEXRNFWV53meKIqiaaoq1xVF0zRNVVVVsiyKpmmaquq6ME3TVFXXdWWYpmmqquu6LmzbVFXVdWUZtq2aqiq7sgxcV3Vl17aB67qu7Nq2AADwBAcAoAIbVkc4KRoLLDRkJQCQAQBAGIOMQgghhRBCCiGElFIICQAAGHAAAAgwoQwUGrISAEgFAACQsdZaa6211kBHKaWUUkqpcIxSSimllFJKKaWUUkoppZRKSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoFAC5VOADoPtiwOsJJ0VhgoSErAYBUAADAGKWYck5CKRVCjDkmIaUWK4QYc05KSjEWzzkHoZTWWiyecw5CKa3FWFTqnJSUWoqtqBQyKSml1mIQwpSUWmultSCEKqnEllprQQhdU2opltiCELa2klKMMQbhg4+xlVhqDD74IFsrMdVaAABmgwMARIINqyOcFI0FFhqyEgAICQAgjFGKMcYYc8455yRjjDHmnHMQQgihZIwx55xzDkIIIZTOOeeccxBCCCGEUkrHnHMOQgghhFBS6pxzEEIIoYQQSiqdcw5CCCGEUkpJpXMQQgihhFBCSSWl1DkIIYQQQikppZRCCCGEEkIoJaWUUgghhBBCKKGklFIKIYRSQgillJRSSimFEEoIpZSSUkkppRJKCSGEUlJJKaUUQggllFJKKimllEoJoYRSSimlpJRSSiGUUEIpBQAAHDgAAAQYQScZVRZhowkXHoBCQ1YCAGQAAJSyUkoorVVAIqUYpNpCR5mDFHOJLHMMWs2lYg4pBq2GyjGlGLQWMgiZUkxKCSV1TCknLcWYSuecpJhzjaVzEAAAAEEAgICQAAADBAUzAMDgAOFzEHQCBEcbAIAgRGaIRMNCcHhQCRARUwFAYoJCLgBUWFykXVxAlwEu6OKuAyEEIQhBLA6ggAQcnHDDE294wg1O0CkqdSAAAAAAAAwA8AAAkFwAERHRzGFkaGxwdHh8gISIjJAIAAAAAAAYAHwAACQlQERENHMYGRobHB0eHyAhIiMkAQCAAAIAAAAAIIAABAQEAAAAAAACAAAABARPZ2dTAARhGAAAAAAAAFUPGmkCAAAAO/2ofAwjXh4fIzYx6uqzbla00kVmK6iQVrrIbAUVUqrKzBmtJH2+gRvgBmJVbdRjKgQGAlI5/X/Ofo9yCQZsoHL6/5z9HuUSDNgAAAAACIDB4P/BQA4NcAAHhzYgQAhyZEChScMgZPzmQwZwkcYjJguOaCaT6Sp/Kand3Luej5yp9HApCHVtClzDUAdARABQMgC00kVNVxCUVrqo6QqCoqpkHqdBZaA+ViWsfXWfDxS00kVNVxDkVrqo6QqCjKoGkDPMI4eZeZZqpq8aZ9AMtNJFzVYQ1Fa6qNkKgqoiGrbSkmkbqXv3aIeKI/3mh4gORh4cy6gShGMZVYJwm9SKkJkzqK64CkyLTGbMGExnzhyrNcyYMQl0nE4rwzDkq0+D/PO1japBzB9E1XqdAUTVep0BnDStQJsDk7gaNQK5UeTMGgwzILIr00nCYH0Gd4wp1aAOEwlvhGwA2nl9c0KAu9LTJUSPIOXVyCVQpPP65oQAd6WnS4geQcqrkUugiC8QZa1eq9eqRUYCAFAWY/oggB0gm5gFWYhtgB6gSIeJS8FxMiAGycBBm2ABURdHBNQRQF0JAJDJ8PhkMplMJtcxH+aYTMhkjut1vXIdkwEAHryuAQAgk/lcyZXZ7Darzd2J3RBRoGf+V69evXJtviwAxOMBNqACAAIoAAAgM2tuRDEpAGAD0Khcc8kAQDgMAKDRbGlmFJENAACaaSYCoJkoAAA6mKlYAAA6TgBwxpkKAIDrBACdBAwA8LyGDACacTIRBoAA/in9zlAB4aA4Vczai/R/roGKBP4+pd8ZKiAcFKeKWXuR/s81UJHAn26QimqtBBQ2MW2QKUBUG+oBegpQ1GslgCIboA3IoId6DZeCg2QgkAyIQR3iYgwursY4RgGEH7/rmjBQwUUVgziioIgrroJRBECGTxaUDEAgvF4nYCagzZa1WbJGkhlJGobRMJpMM0yT0Z/6TFiwa/WXHgAKwAABmgLQiOy5yTVDATQdAACaDYCKrDkyA4A2TgoAAB1mTgpAGycjAAAYZ0yjxAEAmQ6FcQWAR4cHAOhDKACAeGkA0WEaGABQSfYcWSMAHhn9f87rKPpQpe8viN3YXQ08cCAy+v+c11H0oUrfXxC7sbsaeOAAmaAXkPWQ6sBBKRAe/UEYxiuPH7/j9bo+M0cAE31NOzEaVBBMChqRNUdWWTIFGRpCZo7ssuXMUBwgACpJZcmZRQMFQJNxMgoCAGKcjNEAEnoDqEoD1t37wH7KXc7FayXfFzrSQHQ7nxi7yVsKXN6eo7ewMrL+kxn/0wYf0gGXcpEoDSQI4CABFsAJ8AgeGf1/zn9NcuIMGEBk9P85/zXJiTNgAAAAPPz/rwAEHBDgGqgSAgQQAuaOAHj6ELgGOaBqRSpIg+J0EC3U8kFGa5qapr41xuXsTB/BpNn2BcPaFfV5vCYu12wisH/m1IkQmqJLYAKBHAAQBRCgAR75/H/Of01yCQbiZkgoRD7/n/Nfk1yCgbgZEgoAAAAAEADBcPgHQRjEAR4Aj8HFGaAAeIATDng74SYAwgEn8BBHUxA4Tyi3ZtOwTfcbkBQ4DAImJ6AA"></audio>
                <audio id="offline-sound-hit" src="data:audio/mpeg;base64,T2dnUwACAAAAAAAAAABVDxppAAAAABYzHfUBHgF2b3JiaXMAAAAAAkSsAAD/////AHcBAP////+4AU9nZ1MAAAAAAAAAAAAAVQ8aaQEAAAC9PVXbEEf//////////////////+IDdm9yYmlzNwAAAEFPOyBhb1R1ViBiNSBbMjAwNjEwMjRdIChiYXNlZCBvbiBYaXBoLk9yZydzIGxpYlZvcmJpcykAAAAAAQV2b3JiaXMlQkNWAQBAAAAkcxgqRqVzFoQQGkJQGeMcQs5r7BlCTBGCHDJMW8slc5AhpKBCiFsogdCQVQAAQAAAh0F4FISKQQghhCU9WJKDJz0IIYSIOXgUhGlBCCGEEEIIIYQQQgghhEU5aJKDJ0EIHYTjMDgMg+U4+ByERTlYEIMnQegghA9CuJqDrDkIIYQkNUhQgwY56ByEwiwoioLEMLgWhAQ1KIyC5DDI1IMLQoiag0k1+BqEZ0F4FoRpQQghhCRBSJCDBkHIGIRGQViSgwY5uBSEy0GoGoQqOQgfhCA0ZBUAkAAAoKIoiqIoChAasgoAyAAAEEBRFMdxHMmRHMmxHAsIDVkFAAABAAgAAKBIiqRIjuRIkiRZkiVZkiVZkuaJqizLsizLsizLMhAasgoASAAAUFEMRXEUBwgNWQUAZAAACKA4iqVYiqVoiueIjgiEhqwCAIAAAAQAABA0Q1M8R5REz1RV17Zt27Zt27Zt27Zt27ZtW5ZlGQgNWQUAQAAAENJpZqkGiDADGQZCQ1YBAAgAAIARijDEgNCQVQAAQAAAgBhKDqIJrTnfnOOgWQ6aSrE5HZxItXmSm4q5Oeecc87J5pwxzjnnnKKcWQyaCa0555zEoFkKmgmtOeecJ7F50JoqrTnnnHHO6WCcEcY555wmrXmQmo21OeecBa1pjppLsTnnnEi5eVKbS7U555xzzjnnnHPOOeec6sXpHJwTzjnnnKi9uZab0MU555xPxunenBDOOeecc84555xzzjnnnCA0ZBUAAAQAQBCGjWHcKQjS52ggRhFiGjLpQffoMAkag5xC6tHoaKSUOggllXFSSicIDVkFAAACAEAIIYUUUkghhRRSSCGFFGKIIYYYcsopp6CCSiqpqKKMMssss8wyyyyzzDrsrLMOOwwxxBBDK63EUlNtNdZYa+4555qDtFZaa621UkoppZRSCkJDVgEAIAAABEIGGWSQUUghhRRiiCmnnHIKKqiA0JBVAAAgAIAAAAAAT/Ic0REd0REd0REd0REd0fEczxElURIlURIt0zI101NFVXVl15Z1Wbd9W9iFXfd93fd93fh1YViWZVmWZVmWZVmWZVmWZVmWIDRkFQAAAgAAIIQQQkghhRRSSCnGGHPMOegklBAIDVkFAAACAAgAAABwFEdxHMmRHEmyJEvSJM3SLE/zNE8TPVEURdM0VdEVXVE3bVE2ZdM1XVM2XVVWbVeWbVu2dduXZdv3fd/3fd/3fd/3fd/3fV0HQkNWAQASAAA6kiMpkiIpkuM4jiRJQGjIKgBABgBAAACK4iiO4ziSJEmSJWmSZ3mWqJma6ZmeKqpAaMgqAAAQAEAAAAAAAACKpniKqXiKqHiO6IiSaJmWqKmaK8qm7Lqu67qu67qu67qu67qu67qu67qu67qu67qu67qu67qu67quC4SGrAIAJAAAdCRHciRHUiRFUiRHcoDQkFUAgAwAgAAAHMMxJEVyLMvSNE/zNE8TPdETPdNTRVd0gdCQVQAAIACAAAAAAAAADMmwFMvRHE0SJdVSLVVTLdVSRdVTVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTdM0TRMIDVkJAJABAKAQW0utxdwJahxi0nLMJHROYhCqsQgiR7W3yjGlHMWeGoiUURJ7qihjiknMMbTQKSet1lI6hRSkmFMKFVIOWiA0ZIUAEJoB4HAcQLIsQLI0AAAAAAAAAJA0DdA8D7A8DwAAAAAAAAAkTQMsTwM0zwMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQNI0QPM8QPM8AAAAAAAAANA8D/BEEfBEEQAAAAAAAAAszwM80QM8UQQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwNE0QPM8QPM8AAAAAAAAALA8D/BEEfA8EQAAAAAAAAA0zwM8UQQ8UQQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABDgAAAQYCEUGrIiAIgTADA4DjQNmgbPAziWBc+D50EUAY5lwfPgeRBFAAAAAAAAAAAAADTPg6pCVeGqAM3zYKpQVaguAAAAAAAAAAAAAJbnQVWhqnBdgOV5MFWYKlQVAAAAAAAAAAAAAE8UobpQXbgqwDNFuCpcFaoLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAABhwAAAIMKEMFBqyIgCIEwBwOIplAQCA4ziWBQAAjuNYFgAAWJYligAAYFmaKAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAGHAAAAgwoQwUGrISAIgCADAoimUBy7IsYFmWBTTNsgCWBtA8gOcBRBEACAAAKHAAAAiwQVNicYBCQ1YCAFEAAAZFsSxNE0WapmmaJoo0TdM0TRR5nqZ5nmlC0zzPNCGKnmeaEEXPM02YpiiqKhBFVRUAAFDgAAAQYIOmxOIAhYasBABCAgAMjmJZnieKoiiKpqmqNE3TPE8URdE0VdVVaZqmeZ4oiqJpqqrq8jxNE0XTFEXTVFXXhaaJommaommqquvC80TRNE1TVVXVdeF5omiapqmqruu6EEVRNE3TVFXXdV0giqZpmqrqurIMRNE0VVVVXVeWgSiapqqqquvKMjBN01RV15VdWQaYpqq6rizLMkBVXdd1ZVm2Aarquq4ry7INcF3XlWVZtm0ArivLsmzbAgAADhwAAAKMoJOMKouw0YQLD0ChISsCgCgAAMAYphRTyjAmIaQQGsYkhBJCJiWVlEqqIKRSUikVhFRSKiWjklJqKVUQUikplQpCKqWVVAAA2IEDANiBhVBoyEoAIA8AgCBGKcYYYwwyphRjzjkHlVKKMeeck4wxxphzzkkpGWPMOeeklIw555xzUkrmnHPOOSmlc84555yUUkrnnHNOSiklhM45J6WU0jnnnBMAAFTgAAAQYKPI5gQjQYWGrAQAUgEADI5jWZqmaZ4nipYkaZrneZ4omqZmSZrmeZ4niqbJ8zxPFEXRNFWV53meKIqiaaoq1xVF0zRNVVVVsiyKpmmaquq6ME3TVFXXdWWYpmmqquu6LmzbVFXVdWUZtq2aqiq7sgxcV3Vl17aB67qu7Nq2AADwBAcAoAIbVkc4KRoLLDRkJQCQAQBAGIOMQgghhRBCCiGElFIICQAAGHAAAAgwoQwUGrISAEgFAACQsdZaa6211kBHKaWUUkqpcIxSSimllFJKKaWUUkoppZRKSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoFAC5VOADoPtiwOsJJ0VhgoSErAYBUAADAGKWYck5CKRVCjDkmIaUWK4QYc05KSjEWzzkHoZTWWiyecw5CKa3FWFTqnJSUWoqtqBQyKSml1mIQwpSUWmultSCEKqnEllprQQhdU2opltiCELa2klKMMQbhg4+xlVhqDD74IFsrMdVaAABmgwMARIINqyOcFI0FFhqyEgAICQAgjFGKMcYYc8455yRjjDHmnHMQQgihZIwx55xzDkIIIZTOOeeccxBCCCGEUkrHnHMOQgghhFBS6pxzEEIIoYQQSiqdcw5CCCGEUkpJpXMQQgihhFBCSSWl1DkIIYQQQikppZRCCCGEEkIoJaWUUgghhBBCKKGklFIKIYRSQgillJRSSimFEEoIpZSSUkkppRJKCSGEUlJJKaUUQggllFJKKimllEoJoYRSSimlpJRSSiGUUEIpBQAAHDgAAAQYQScZVRZhowkXHoBCQ1YCAGQAAJSyUkoorVVAIqUYpNpCR5mDFHOJLHMMWs2lYg4pBq2GyjGlGLQWMgiZUkxKCSV1TCknLcWYSuecpJhzjaVzEAAAAEEAgICQAAADBAUzAMDgAOFzEHQCBEcbAIAgRGaIRMNCcHhQCRARUwFAYoJCLgBUWFykXVxAlwEu6OKuAyEEIQhBLA6ggAQcnHDDE294wg1O0CkqdSAAAAAAAAwA8AAAkFwAERHRzGFkaGxwdHh8gISIjJAIAAAAAAAYAHwAACQlQERENHMYGRobHB0eHyAhIiMkAQCAAAIAAAAAIIAABAQEAAAAAAACAAAABARPZ2dTAATCMAAAAAAAAFUPGmkCAAAAhlAFnjkoHh4dHx4pKHA1KjEqLzIsNDQqMCveHiYpczUpLS4sLSg3MicsLCsqJTIvJi0sKywkMjbgWVlXWUa00CqtQNVCq7QC1aoNVPXg9Xldx3nn5tixvV6vb7TX+hg7cK21QYgAtNJFphRUtpUuMqWgsqrasj2IhOA1F7LFMdFaWzkAtNBFpisIQgtdZLqCIKjqAAa9WePLkKr1MMG1FlwGtNJFTSkIcitd1JSCIKsCAQWISK0Cyzw147T1tAK00kVNKKjQVrqoCQUVqqr412m+VKtZf9h+TDaaztAAtNJFzVQQhFa6qJkKgqAqUGgtuOa2Se5l6jeXGSqnLM9enqnLs5dn6m7TptWUiVUVN4jhUz9//lzx+Xw+X3x8fCQSiWggDAA83UXF6/vpLipe3zsCULWMBE5PMTBMlsv39/f39/f39524nZ13CDgaRFuLYTbaWgyzq22MzEyKolIpst50Z9PGqqJSq8T2++taLf3+oqg6btyouhEjYlxFjXxex1wCBFxcv+PmzG1uc2bKyJFLLlkizZozZ/ZURpZs2TKiWbNnz5rKyJItS0akWbNnzdrIyJJtxmCczpxOATRRhoPimyjDQfEfIFMprQDU3WFYbXZLZZxMhxrGyRh99Uqel55XEk+9efP7I/FU/8Ojew4JNN/rTq6b73Un1x+AVSsCWD2tNqtpGOM4DOM4GV7n5th453cXNGcfAYQKTFEOguKnKAdB8btRLxNBWUrViLoY1/q1er+Q9xkvZM/IjaoRf30xu3HLnr61fu3UBDRZHZdqsjoutQeAVesAxNMTw2rR66X/Ix6/T5tx80+t/D67ipt/q5XfJzTfa03Wzfdak/UeAEpZawlsbharxTBVO1+c2nm/7/f1XR1dY8XaKWMH3aW9xvEFRFEksXgURRKLn7VamSFRVnYXg0C2Zo2MNE3+57u+e3NFlVev1uufX6nU3Lnf9d1j4wE03+sObprvdQc3ewBYFIArAtjdrRaraRivX7x+8VrbHIofG0n6cFwtNFKYBzxXA2j4uRpAw7dJRkSETBkZV1V1o+N0Op1WhmEyDOn36437RbKvl7zz838wgn295Iv8/Ac8UaRIPFGkSHyAzCItAXY3dzGsNueM6VDDOJkOY3QYX008L6vnfZp/3qf559VQL3Xm1SEFNN2fiMA03Z+IwOwBoKplAKY4TbGIec0111x99dXr9XrjZ/nzdSWXBekAHEsWp4ljyeI0sVs2FEGiLFLj7rjxeqG8Pm+tX/uW90b+DX31bVTF/I+Ut+/sM1IA/MyILvUzI7rUbpNqyIBVjSDGVV/Jo/9H6G/jq+5y3Pzb7P74Znf5ffZtApI5/fN5SAcHjIhB5vTP5yEdHDAiBt4oK/WGeqUMMspeTNsGk/H/PziIgCrG1Rijktfreh2vn4DH78WXa25yZkizZc9oM7JmaYeZM6bJOJkOxmE69Hmp/q/k0fvVRLln3H6fXcXNPt78W638Ptlxsytv/pHyW7Pfp1Xc7L5XfqvZb5MdN7vy5p/u8lut/D6t4mb3vfmnVn6bNt9nV3Hzj1d+q9lv02bc7Mqbf6vZb+N23OzKm73u8lOz3+fY3uwqLv1022+THTepN38yf7XyW1aX8YqjACWfDTiAA+BQALTURU0oCFpLXdSEgqAJpAKxrLtzybNt1Go5VeJAASzRnh75Eu3pke8BYNWiCIBVLdgsXMqlXBJijDGW2Sj5lUqlSJFpPN9fAf08318B/ewBUMUiA3h4YGIaooZrfn5+fn5+fn5+fn6mtQYKcQE8WVg5YfJkYeWEyWqblCIiiqKoVGq1WqxWWa3X6/V6vVoty0zrptXq9/u4ccS4GjWKGxcM6ogaNWpUnoDf73Xd3OQml2xZMhJNM7Nmz54zZ/bsWbNmphVJRpYs2bJly5YtS0YSoWlm1uzZc+bMnj17ZloATNNI4PbTNBK4/W5jlJGglFJWI4hR/levXr06RuJ5+fLly6Ln1atXxxD18uXLKnr+V8cI8/M03+vErpvvdWLXewBYxVoC9bBZDcPU3Bevtc399UWNtZH0p4MJZov7AkxThBmYpggzcNVCJqxIRQwiLpNBxxqUt/NvuCqmb2Poa+RftCr7DO3te16HBjzbulL22daVsnsAqKIFwMXVzbCLYdVe9vGovzx9xP7469mk3L05d1+qjyKuPAY8397G2PPtbYztAWDVQgCH09MwTTG+Us67nX1fG5G+0o3YvspGtK+yfBmqAExTJDHQaYokBnrrZZEZkqoa3BjFDJlmGA17PF+qE/GbJd3xm0V38qoYT/aLuTzh6w/ST/j6g/QHYBVgKYHTxcVqGKY5DOM4DNNRO3OXkM0JmAto6AE01xBa5OYaQou8B4BmRssAUNQ0TfP169fv169fvz6XSIZhGIbJixcvXrzIFP7+/3/9evc/wyMAVFM8EEOvpngghr5by8hIsqiqBjXGXx0T4zCdTCfj8PJl1fy83vv7q1fHvEubn5+fnwc84etOrp/wdSfXewBUsRDA5upqMU1DNl+/GNunkTDUGrWzn0BDIC5UUw7CwKspB2HgVzVFSFZ1R9QxU8MkHXvLGV8jKxtjv6J9G0N/MX1fIysbQzTdOlK26daRsnsAWLUGWFxcTQum8Skv93j2KLpfjSeb3fvFmM3xt3L3/mwCPN/2Rvb5tjeyewBULQGmzdM0DMzS3vEVHVu6MVTZGNn3Fe37WjxU2RjqAUxThJGfpggjv1uLDAlVdeOIGNH/1P9Q5/Jxvf49nmyOj74quveLufGb4zzh685unvB1Zzd7AFQAWAhguLpaTFNk8/1i7Ni+Oq5BxQVcGABEVcgFXo+qkAu8vlurZiaoqiNi3N2Z94sXL168ePEiR4wYMWLEiBEjRowYMWLEiBEjAFRVtGm4qqJNw7ceGRkZrGpQNW58OozDOIzDy5dV8/Pz8/Pz8/Pz8/Pz8/Pz8/NlPN/rDr6f73UH33sAVLGUwHRxsxqGaq72+tcvy5LsLLZ5JdBo0BdUU7Qgr6ZoQb4NqKon4PH6zfFknHYYjOqLT9XaWdkYWvQr2vcV7fuK9n3F9AEs3SZSduk2kbJ7AKhqBeDm7maYaujzKS8/0f/UJ/eL7v2ie7/o3rfHk83xBDzdZlLu6TaTcnsAWLUAYHcz1KqivUt7V/ZQZWPoX7TvK9r3a6iyMVSJ6QNMUaSQnaJIIXvrGSkSVTWIihsZpsmYjKJ/8vTxvC6694sxm+PJ5vhbuXu/ADzf6w5+nu91Bz97AFi1lACHm9UwVHPztbbpkiKHJVsy2SAcDURTFhZc0ZSFBdeqNqiKQXwej8dxXrx48eLFixcvXrx4oY3g8/////////+voo3IF3cCRE/xjoLoKd5RsPUCKVN9jt/v8TruMJ1MJ9PJ6E3z8y9fvnz58uXLly+rSp+Z+V+9ejXv7+8eukl9XpcPJED4YJP6vC4fSIDwgWN7vdDrmfT//4PHDfg98ns9/qDHnBxps2RPkuw5ciYZOXPJmSFrllSSNVumJDNLphgno2E6GQ3jUBmPeOn/KP11zY6bfxvfjCu/TSuv/Datustxs0/Njpt9anbc7Nv4yiu/TSuv/Datustxs0/Njpt9aptx82/jm175bVp55bfZ/e5y3OxT24ybfWqbcfNv08orv00rr/w27dfsuNmnthk3+7SVV36bVl75bVqJnUxPzXazT0294mnq2W+TikmmE5LiQb3pAa94mnpFAGxeSf1/jn9mWTgDBjhUUv+f459ZFs6AAQ4AAAAAAIAH/0EYBHEAB6gDzBkAAUxWjEAQk7nWaBZuuKvBN6iqkoMah7sAhnRZ6lFjmllwEgGCAde2zYBzAB5AAH5J/X+Of81ycQZMHI0uqf/P8a9ZLs6AiaMRAAAAAAIAOPgPw0EUEIddhEaDphAAjAhrrgAUlNDwPZKFEPFz2JKV4FqHl6tIxjaQDfQAiJqgZk1GDQgcBuAAfkn9f45/zXLiDBgwuqT+P8e/ZjlxBgwYAQAAAAAAg/8fDBlCDUeGDICqAJAT585AAALkhkHxIHMR3AF8IwmgWZwQhv0DcpcIMeTjToEGKDQAB0CEACgAfkn9f45/LXLiDCiMxpfU/+f41yInzoDCaAwAAAAEg4P/wyANDgAEhDsAujhQcBgAHEakAKBZjwHgANMYAkIDo+L8wDUrrgHpWnPwBBoJGZqDBmBAUAB1QANeOf1/zn53uYQA9ckctMrp/3P2u8slBKhP5qABAAAAAACAIAyCIAiD8DAMwoADzgECAA0wQFMAiMtgo6AATVGAE0gADAQA"></audio>
                <audio id="offline-sound-reached" src="data:audio/mpeg;base64,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"></audio>
            </template>
            </div>
        </div>
        <style>
            .icon {
                -webkit-user-select: none;
                user-select: none;
                display: inline-block;
            }
            
            .icon-offline {
                content: -webkit-image-set( url(data:image/png;base64,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) 1x, url(data:image/png;base64,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) 2x);
                position: relative;
            }
            
            .hidden {
                display: none;
            }
            /* Offline page */
            
            .offline .interstitial-wrapper {
                color: #2b2b2b;
                font-size: 1em;
                line-height: 1.55;
                margin: 0 auto;
                max-width: 600px;
                padding-top: 100px;
                width: 100%;
            }
            
            .offline .runner-container {
                height: 150px;
                max-width: 600px;
                overflow: hidden;
                position: absolute;
                top: 35px;
                width: 44px;
            }
            
            .offline .runner-canvas {
                height: 150px;
                max-width: 600px;
                opacity: 1;
                overflow: hidden;
                position: absolute;
                top: 0;
                z-index: 2;
                filter: sepia(1);
            }
            
            .offline .controller {
                background: rgba(247, 247, 247, .1);
                height: 100vh;
                left: 0;
                position: absolute;
                top: 0;
                width: 100vw;
                z-index: 1;
            }
            
            #offline-resources {
                display: none;
            }
            
            
        </style>

        <script>
            document.onkeydown = function(evt) {
                evt = evt || window.event;
                if (evt.keyCode == 32) {
                    new Runner('.interstitial-wrapper');
                    var box = document.getElementById("messageBox");
                    box.style.visibility = "hidden";
                }
            };

            (function() {
                'use strict';
                /**
                 * T-Rex runner.
                 * @param {string} outerContainerId Outer containing element id.
                 * @param {Object} opt_config
                 * @constructor
                 * @export
                 */
                function Runner(outerContainerId, opt_config) {
                    // Singleton
                    if (Runner.instance_) {
                        return Runner.instance_;
                    }
                    Runner.instance_ = this;

                    this.outerContainerEl = document.querySelector(outerContainerId);
                    this.containerEl = null;
                    this.snackbarEl = null;
                    this.detailsButton = this.outerContainerEl.querySelector('#details-button');

                    this.config = opt_config || Runner.config;

                    this.dimensions = Runner.defaultDimensions;

                    this.canvas = null;
                    this.canvasCtx = null;

                    this.tRex = null;

                    this.distanceMeter = null;
                    this.distanceRan = 0;

                    this.highestScore = 4815162342;

                    this.time = 0;
                    this.runningTime = 0;
                    this.msPerFrame = 1000 / FPS;
                    this.currentSpeed = this.config.SPEED;

                    this.obstacles = [];

                    this.activated = false; // Whether the easter egg has been activated.
                    this.playing = false; // Whether the game is currently in play state.
                    this.crashed = false;
                    this.paused = false;
                    this.inverted = false;
                    this.invertTimer = 0;
                    this.resizeTimerId_ = null;

                    this.playCount = 0;

                    // Sound FX.
                    this.audioBuffer = null;
                    this.soundFx = {};

                    // Global web audio context for playing sounds.
                    this.audioContext = null;

                    // Images.
                    this.images = {};
                    this.imagesLoaded = 0;

                    if (this.isDisabled()) {
                        this.setupDisabledRunner();
                    } else {
                        this.loadImages();
                    }
                }
                window['Runner'] = Runner;


                /**
                 * Default game width.
                 * @const
                 */
                var DEFAULT_WIDTH = 600;

                /**
                 * Frames per second.
                 * @const
                 */
                var FPS = 60;

                /** @const */
                var IS_HIDPI = window.devicePixelRatio > 1;

                /** @const */
                var IS_IOS = /iPad|iPhone|iPod/.test(window.navigator.platform);

                /** @const */
                var IS_MOBILE = /Android/.test(window.navigator.userAgent) || IS_IOS;

                /** @const */
                var IS_TOUCH_ENABLED = 'ontouchstart' in window;

                /**
                 * Default game configuration.
                 * @enum {number}
                 */
                Runner.config = {
                    ACCELERATION: 0.001,
                    BG_CLOUD_SPEED: 0.2,
                    BOTTOM_PAD: 10,
                    CLEAR_TIME: 3000,
                    CLOUD_FREQUENCY: 0.5,
                    GAMEOVER_CLEAR_TIME: 750,
                    GAP_COEFFICIENT: 0.6,
                    GRAVITY: 0.6,
                    INITIAL_JUMP_VELOCITY: 12,
                    INVERT_FADE_DURATION: 12000,
                    INVERT_DISTANCE: 700,
                    MAX_BLINK_COUNT: 3,
                    MAX_CLOUDS: 6,
                    MAX_OBSTACLE_LENGTH: 3,
                    MAX_OBSTACLE_DUPLICATION: 2,
                    MAX_SPEED: 13,
                    MIN_JUMP_HEIGHT: 35,
                    MOBILE_SPEED_COEFFICIENT: 1.2,
                    RESOURCE_TEMPLATE_ID: 'audio-resources',
                    SPEED: 6,
                    SPEED_DROP_COEFFICIENT: 3
                };


                /**
                 * Default dimensions.
                 * @enum {string}
                 */
                Runner.defaultDimensions = {
                    WIDTH: DEFAULT_WIDTH,
                    HEIGHT: 150
                };


                /**
                 * CSS class names.
                 * @enum {string}
                 */
                Runner.classes = {
                    CANVAS: 'runner-canvas',
                    CONTAINER: 'runner-container',
                    CRASHED: 'crashed',
                    ICON: 'icon-offline',
                    INVERTED: 'inverted',
                    SNACKBAR: 'snackbar',
                    SNACKBAR_SHOW: 'snackbar-show',
                    TOUCH_CONTROLLER: 'controller'
                };


                /**
                 * Sprite definition layout of the spritesheet.
                 * @enum {Object}
                 */
                Runner.spriteDefinition = {
                    LDPI: {
                        CACTUS_LARGE: {
                            x: 332,
                            y: 2
                        },
                        CACTUS_SMALL: {
                            x: 228,
                            y: 2
                        },
                        CLOUD: {
                            x: 86,
                            y: 2
                        },
                        HORIZON: {
                            x: 2,
                            y: 54
                        },
                        MOON: {
                            x: 484,
                            y: 2
                        },
                        PTERODACTYL: {
                            x: 134,
                            y: 2
                        },
                        RESTART: {
                            x: 2,
                            y: 2
                        },
                        TEXT_SPRITE: {
                            x: 655,
                            y: 2
                        },
                        TREX: {
                            x: 848,
                            y: 2
                        },
                        STAR: {
                            x: 645,
                            y: 2
                        }
                    },
                    HDPI: {
                        CACTUS_LARGE: {
                            x: 652,
                            y: 2
                        },
                        CACTUS_SMALL: {
                            x: 446,
                            y: 2
                        },
                        CLOUD: {
                            x: 166,
                            y: 2
                        },
                        HORIZON: {
                            x: 2,
                            y: 104
                        },
                        MOON: {
                            x: 954,
                            y: 2
                        },
                        PTERODACTYL: {
                            x: 260,
                            y: 2
                        },
                        RESTART: {
                            x: 2,
                            y: 2
                        },
                        TEXT_SPRITE: {
                            x: 1294,
                            y: 2
                        },
                        TREX: {
                            x: 1678,
                            y: 2
                        },
                        STAR: {
                            x: 1276,
                            y: 2
                        }
                    }
                };


                /**
                 * Sound FX. Reference to the ID of the audio tag on interstitial page.
                 * @enum {string}
                 */
                Runner.sounds = {
                    BUTTON_PRESS: 'offline-sound-press',
                    HIT: 'offline-sound-hit',
                    SCORE: 'offline-sound-reached'
                };


                /**
                 * Key code mapping.
                 * @enum {Object}
                 */
                Runner.keycodes = {
                    JUMP: {
                        '38': 1,
                        '32': 1
                    }, // Up, spacebar
                    DUCK: {
                        '40': 1
                    }, // Down
                    RESTART: {
                        '13': 1
                    } // Enter
                };


                /**
                 * Runner event names.
                 * @enum {string}
                 */
                Runner.events = {
                    ANIM_END: 'webkitAnimationEnd',
                    CLICK: 'click',
                    KEYDOWN: 'keydown',
                    KEYUP: 'keyup',
                    MOUSEDOWN: 'mousedown',
                    MOUSEUP: 'mouseup',
                    RESIZE: 'resize',
                    TOUCHEND: 'touchend',
                    TOUCHSTART: 'touchstart',
                    VISIBILITY: 'visibilitychange',
                    BLUR: 'blur',
                    FOCUS: 'focus',
                    LOAD: 'load'
                };


                Runner.prototype = {
                    /**
                     * Whether the easter egg has been disabled. CrOS enterprise enrolled devices.
                     * @return {boolean}
                     */
                    isDisabled: function() {
                        // return loadTimeData && loadTimeData.valueExists('disabledEasterEgg');
                        return false;
                    },

                    /**
                     * For disabled instances, set up a snackbar with the disabled message.
                     */
                    setupDisabledRunner: function() {
                        this.containerEl = document.createElement('div');
                        this.containerEl.className = Runner.classes.SNACKBAR;
                        this.containerEl.textContent = loadTimeData.getValue('disabledEasterEgg');
                        this.outerContainerEl.appendChild(this.containerEl);

                        // Show notification when the activation key is pressed.
                        document.addEventListener(Runner.events.KEYDOWN, function(e) {
                            if (Runner.keycodes.JUMP[e.keyCode]) {
                                this.containerEl.classList.add(Runner.classes.SNACKBAR_SHOW);
                                document.querySelector('.icon').classList.add('icon-disabled');
                            }
                        }.bind(this));
                    },

                    /**
                     * Setting individual settings for debugging.
                     * @param {string} setting
                     * @param {*} value
                     */
                    updateConfigSetting: function(setting, value) {
                        if (setting in this.config && value != undefined) {
                            this.config[setting] = value;

                            switch (setting) {
                                case 'GRAVITY':
                                case 'MIN_JUMP_HEIGHT':
                                case 'SPEED_DROP_COEFFICIENT':
                                    this.tRex.config[setting] = value;
                                    break;
                                case 'INITIAL_JUMP_VELOCITY':
                                    this.tRex.setJumpVelocity(value);
                                    break;
                                case 'SPEED':
                                    this.setSpeed(value);
                                    break;
                            }
                        }
                    },

                    /**
                     * Cache the appropriate image sprite from the page and get the sprite sheet
                     * definition.
                     */
                    loadImages: function() {
                        if (IS_HIDPI) {
                            Runner.imageSprite = document.getElementById('offline-resources-2x');
                            this.spriteDef = Runner.spriteDefinition.HDPI;
                        } else {
                            Runner.imageSprite = document.getElementById('offline-resources-1x');
                            this.spriteDef = Runner.spriteDefinition.LDPI;
                        }

                        if (Runner.imageSprite.complete) {
                            this.init();
                        } else {
                            // If the images are not yet loaded, add a listener.
                            Runner.imageSprite.addEventListener(Runner.events.LOAD,
                                this.init.bind(this));
                        }
                    },

                    /**
                     * Load and decode base 64 encoded sounds.
                     */
                    loadSounds: function() {
                        if (!IS_IOS) {
                            this.audioContext = new AudioContext();

                            var resourceTemplate =
                                document.getElementById(this.config.RESOURCE_TEMPLATE_ID).content;

                            for (var sound in Runner.sounds) {
                                var soundSrc =
                                    resourceTemplate.getElementById(Runner.sounds[sound]).src;
                                soundSrc = soundSrc.substr(soundSrc.indexOf(',') + 1);
                                var buffer = decodeBase64ToArrayBuffer(soundSrc);

                                // Async, so no guarantee of order in array.
                                this.audioContext.decodeAudioData(buffer, function(index, audioData) {
                                    this.soundFx[index] = audioData;
                                }.bind(this, sound));
                            }
                        }
                    },

                    /**
                     * Sets the game speed. Adjust the speed accordingly if on a smaller screen.
                     * @param {number} opt_speed
                     */
                    setSpeed: function(opt_speed) {
                        var speed = opt_speed || this.currentSpeed;

                        // Reduce the speed on smaller mobile screens.
                        if (this.dimensions.WIDTH < DEFAULT_WIDTH) {
                            var mobileSpeed = speed * this.dimensions.WIDTH / DEFAULT_WIDTH *
                                this.config.MOBILE_SPEED_COEFFICIENT;
                            this.currentSpeed = mobileSpeed > speed ? speed : mobileSpeed;
                        } else if (opt_speed) {
                            this.currentSpeed = opt_speed;
                        }
                    },

                    /**
                     * Game initialiser.
                     */
                    init: function() {
                        // Hide the static icon.
                        document.querySelector('.' + Runner.classes.ICON).style.visibility =
                            'hidden';

                        this.adjustDimensions();
                        this.setSpeed();

                        this.containerEl = document.createElement('div');
                        this.containerEl.className = Runner.classes.CONTAINER;

                        // Player canvas container.
                        this.canvas = createCanvas(this.containerEl, this.dimensions.WIDTH,
                            this.dimensions.HEIGHT, Runner.classes.PLAYER);

                        this.canvasCtx = this.canvas.getContext('2d');
                        this.canvasCtx.fillStyle = '#f7f7f7';
                        this.canvasCtx.fill();
                        Runner.updateCanvasScaling(this.canvas);

                        // Horizon contains clouds, obstacles and the ground.
                        this.horizon = new Horizon(this.canvas, this.spriteDef, this.dimensions,
                            this.config.GAP_COEFFICIENT);

                        // Distance meter
                        this.distanceMeter = new DistanceMeter(this.canvas,
                            this.spriteDef.TEXT_SPRITE, this.dimensions.WIDTH);

                        // Draw t-rex
                        this.tRex = new Trex(this.canvas, this.spriteDef.TREX);

                        this.outerContainerEl.appendChild(this.containerEl);

                        if (IS_MOBILE) {
                            this.createTouchController();
                        }

                        this.startListening();
                        this.update();

                        window.addEventListener(Runner.events.RESIZE,
                            this.debounceResize.bind(this));
                    },

                    /**
                     * Create the touch controller. A div that covers whole screen.
                     */
                    createTouchController: function() {
                        this.touchController = document.createElement('div');
                        this.touchController.className = Runner.classes.TOUCH_CONTROLLER;
                        this.outerContainerEl.appendChild(this.touchController);
                    },

                    /**
                     * Debounce the resize event.
                     */
                    debounceResize: function() {
                        if (!this.resizeTimerId_) {
                            this.resizeTimerId_ =
                                setInterval(this.adjustDimensions.bind(this), 250);
                        }
                    },

                    /**
                     * Adjust game space dimensions on resize.
                     */
                    adjustDimensions: function() {
                        clearInterval(this.resizeTimerId_);
                        this.resizeTimerId_ = null;

                        var boxStyles = window.getComputedStyle(this.outerContainerEl);
                        var padding = Number(boxStyles.paddingLeft.substr(0,
                            boxStyles.paddingLeft.length - 2));

                        this.dimensions.WIDTH = this.outerContainerEl.offsetWidth - padding * 2;

                        //
                        this.dimensions.WIDTH = 600;
                        //

                        // Redraw the elements back onto the canvas.
                        if (this.canvas) {
                            this.canvas.width = this.dimensions.WIDTH;
                            this.canvas.height = this.dimensions.HEIGHT;

                            Runner.updateCanvasScaling(this.canvas);

                            this.distanceMeter.calcXPos(this.dimensions.WIDTH);
                            this.clearCanvas();
                            this.horizon.update(0, 0, true);
                            this.tRex.update(0);

                            // Outer container and distance meter.
                            if (this.playing || this.crashed || this.paused) {
                                this.containerEl.style.width = this.dimensions.WIDTH + 'px';
                                this.containerEl.style.height = this.dimensions.HEIGHT + 'px';
                                this.distanceMeter.update(0, Math.ceil(this.distanceRan));
                                this.stop();
                            } else {
                                this.tRex.draw(0, 0);
                            }

                            // Game over panel.
                            if (this.crashed && this.gameOverPanel) {
                                this.gameOverPanel.updateDimensions(this.dimensions.WIDTH);
                                this.gameOverPanel.draw();
                            }
                        }
                    },

                    /**
                     * Play the game intro.
                     * Canvas container width expands out to the full width.
                     */
                    playIntro: function() {
                        if (!this.activated && !this.crashed) {
                            this.playingIntro = true;
                            this.tRex.playingIntro = true;

                            // CSS animation definition.
                            var keyframes = '@-webkit-keyframes intro { ' +
                                'from { width:' + Trex.config.WIDTH + 'px }' +
                                'to { width: ' + this.dimensions.WIDTH + 'px }' +
                                '}';

                            // create a style sheet to put the keyframe rule in 
                            // and then place the style sheet in the html head    
                            var sheet = document.createElement('style');
                            sheet.innerHTML = keyframes;
                            document.head.appendChild(sheet);

                            this.containerEl.addEventListener(Runner.events.ANIM_END,
                                this.startGame.bind(this));

                            this.containerEl.style.webkitAnimation = 'intro .4s ease-out 1 both';
                            this.containerEl.style.width = this.dimensions.WIDTH + 'px';

                            // if (this.touchController) {
                            //     this.outerContainerEl.appendChild(this.touchController);
                            // }
                            this.playing = true;
                            this.activated = true;
                        } else if (this.crashed) {
                            this.restart();
                        }
                    },


                    /**
                     * Update the game status to started.
                     */
                    startGame: function() {
                        this.runningTime = 0;
                        this.playingIntro = false;
                        this.tRex.playingIntro = false;
                        this.containerEl.style.webkitAnimation = '';
                        this.playCount++;

                        // Handle tabbing off the page. Pause the current game.
                        document.addEventListener(Runner.events.VISIBILITY,
                            this.onVisibilityChange.bind(this));

                        window.addEventListener(Runner.events.BLUR,
                            this.onVisibilityChange.bind(this));

                        window.addEventListener(Runner.events.FOCUS,
                            this.onVisibilityChange.bind(this));
                    },

                    clearCanvas: function() {
                        this.canvasCtx.clearRect(0, 0, this.dimensions.WIDTH,
                            this.dimensions.HEIGHT);
                    },

                    /**
                     * Update the game frame and schedules the next one.
                     */
                    update: function() {
                        this.updatePending = false;

                        var now = getTimeStamp();
                        var deltaTime = now - (this.time || now);
                        this.time = now;

                        if (this.playing) {
                            this.clearCanvas();

                            if (this.tRex.jumping) {
                                this.tRex.updateJump(deltaTime);
                            }

                            this.runningTime += deltaTime;
                            var hasObstacles = this.runningTime > this.config.CLEAR_TIME;

                            // First jump triggers the intro.
                            if (this.tRex.jumpCount == 1 && !this.playingIntro) {
                                this.playIntro();
                            }

                            // The horizon doesn't move until the intro is over.
                            if (this.playingIntro) {
                                this.horizon.update(0, this.currentSpeed, hasObstacles);
                            } else {
                                deltaTime = !this.activated ? 0 : deltaTime;
                                this.horizon.update(deltaTime, this.currentSpeed, hasObstacles,
                                    this.inverted);
                            }

                            // Check for collisions.
                            var collision = hasObstacles &&
                                checkForCollision(this.horizon.obstacles[0], this.tRex);

                            if (!collision) {
                                this.distanceRan += this.currentSpeed * deltaTime / this.msPerFrame;

                                if (this.currentSpeed < this.config.MAX_SPEED) {
                                    this.currentSpeed += this.config.ACCELERATION;
                                }
                            } else {
                                this.gameOver();
                            }

                            var playAchievementSound = this.distanceMeter.update(deltaTime,
                                Math.ceil(this.distanceRan));

                            if (playAchievementSound) {
                                this.playSound(this.soundFx.SCORE);
                            }

                            // Night mode.
                            if (this.invertTimer > this.config.INVERT_FADE_DURATION) {
                                this.invertTimer = 0;
                                this.invertTrigger = false;
                                this.invert();
                            } else if (this.invertTimer) {
                                this.invertTimer += deltaTime;
                            } else {
                                var actualDistance =
                                    this.distanceMeter.getActualDistance(Math.ceil(this.distanceRan));

                                if (actualDistance > 0) {
                                    this.invertTrigger = !(actualDistance %
                                        this.config.INVERT_DISTANCE);

                                    if (this.invertTrigger && this.invertTimer === 0) {
                                        this.invertTimer += deltaTime;
                                        this.invert();
                                    }
                                }
                            }
                        }

                        if (this.playing || (!this.activated &&
                                this.tRex.blinkCount < Runner.config.MAX_BLINK_COUNT)) {
                            this.tRex.update(deltaTime);
                            this.scheduleNextUpdate();
                        }
                    },

                    /**
                     * Event handler.
                     */
                    handleEvent: function(e) {
                        return (function(evtType, events) {
                            switch (evtType) {
                                case events.KEYDOWN:
                                case events.TOUCHSTART:
                                case events.MOUSEDOWN:
                                    this.onKeyDown(e);
                                    break;
                                case events.KEYUP:
                                case events.TOUCHEND:
                                case events.MOUSEUP:
                                    this.onKeyUp(e);
                                    break;
                            }
                        }.bind(this))(e.type, Runner.events);
                    },

                    /**
                     * Bind relevant key / mouse / touch listeners.
                     */
                    startListening: function() {
                        // Keys.
                        document.addEventListener(Runner.events.KEYDOWN, this);
                        document.addEventListener(Runner.events.KEYUP, this);

                        if (IS_MOBILE) {
                            // Mobile only touch devices.
                            this.touchController.addEventListener(Runner.events.TOUCHSTART, this);
                            this.touchController.addEventListener(Runner.events.TOUCHEND, this);
                            this.containerEl.addEventListener(Runner.events.TOUCHSTART, this);
                        } else {
                            // Mouse.
                            document.addEventListener(Runner.events.MOUSEDOWN, this);
                            document.addEventListener(Runner.events.MOUSEUP, this);
                        }
                    },

                    /**
                     * Remove all listeners.
                     */
                    stopListening: function() {
                        document.removeEventListener(Runner.events.KEYDOWN, this);
                        document.removeEventListener(Runner.events.KEYUP, this);

                        if (IS_MOBILE) {
                            this.touchController.removeEventListener(Runner.events.TOUCHSTART, this);
                            this.touchController.removeEventListener(Runner.events.TOUCHEND, this);
                            this.containerEl.removeEventListener(Runner.events.TOUCHSTART, this);
                        } else {
                            document.removeEventListener(Runner.events.MOUSEDOWN, this);
                            document.removeEventListener(Runner.events.MOUSEUP, this);
                        }
                    },

                    /**
                     * Process keydown.
                     * @param {Event} e
                     */
                    onKeyDown: function(e) {
                        // Prevent native page scrolling whilst tapping on mobile.
                        if (IS_MOBILE && this.playing) {
                            e.preventDefault();
                        }

                        if (e.target != this.detailsButton) {
                            if (!this.crashed && (Runner.keycodes.JUMP[e.keyCode] ||
                                    e.type == Runner.events.TOUCHSTART)) {
                                if (!this.playing) {
                                    this.loadSounds();
                                    this.playing = true;
                                    this.update();
                                    if (window.errorPageController) {
                                        errorPageController.trackEasterEgg();
                                    }
                                }
                                //  Play sound effect and jump on starting the game for the first time.
                                if (!this.tRex.jumping && !this.tRex.ducking) {
                                    this.playSound(this.soundFx.BUTTON_PRESS);
                                    this.tRex.startJump(this.currentSpeed);
                                }
                            }

                            if (this.crashed && e.type == Runner.events.TOUCHSTART &&
                                e.currentTarget == this.containerEl) {
                                this.restart();
                            }
                        }

                        if (this.playing && !this.crashed && Runner.keycodes.DUCK[e.keyCode]) {
                            e.preventDefault();
                            if (this.tRex.jumping) {
                                // Speed drop, activated only when jump key is not pressed.
                                this.tRex.setSpeedDrop();
                            } else if (!this.tRex.jumping && !this.tRex.ducking) {
                                // Duck.
                                this.tRex.setDuck(true);
                            }
                        }
                    },


                    /**
                     * Process key up.
                     * @param {Event} e
                     */
                    onKeyUp: function(e) {
                        var keyCode = String(e.keyCode);
                        var isjumpKey = Runner.keycodes.JUMP[keyCode] ||
                            e.type == Runner.events.TOUCHEND ||
                            e.type == Runner.events.MOUSEDOWN;

                        if (this.isRunning() && isjumpKey) {
                            this.tRex.endJump();
                        } else if (Runner.keycodes.DUCK[keyCode]) {
                            this.tRex.speedDrop = false;
                            this.tRex.setDuck(false);
                        } else if (this.crashed) {
                            // Check that enough time has elapsed before allowing jump key to restart.
                            var deltaTime = getTimeStamp() - this.time;

                            if (Runner.keycodes.RESTART[keyCode] || this.isLeftClickOnCanvas(e) ||
                                (deltaTime >= this.config.GAMEOVER_CLEAR_TIME &&
                                    Runner.keycodes.JUMP[keyCode])) {
                                this.restart();
                            }
                        } else if (this.paused && isjumpKey) {
                            // Reset the jump state
                            this.tRex.reset();
                            this.play();
                        }
                    },

                    /**
                     * Returns whether the event was a left click on canvas.
                     * On Windows right click is registered as a click.
                     * @param {Event} e
                     * @return {boolean}
                     */
                    isLeftClickOnCanvas: function(e) {
                        return e.button != null && e.button < 2 &&
                            e.type == Runner.events.MOUSEUP && e.target == this.canvas;
                    },

                    /**
                     * RequestAnimationFrame wrapper.
                     */
                    scheduleNextUpdate: function() {
                        if (!this.updatePending) {
                            this.updatePending = true;
                            this.raqId = requestAnimationFrame(this.update.bind(this));
                        }
                    },

                    /**
                     * Whether the game is running.
                     * @return {boolean}
                     */
                    isRunning: function() {
                        return !!this.raqId;
                    },

                    /**
                     * Game over state.
                     */
                    gameOver: function() {
                        this.playSound(this.soundFx.HIT);
                        vibrate(200);

                        this.stop();
                        this.crashed = true;
                        this.distanceMeter.acheivement = false;

                        this.tRex.update(100, Trex.status.CRASHED);

                        // Game over panel.
                        if (!this.gameOverPanel) {
                            this.gameOverPanel = new GameOverPanel(this.canvas,
                                this.spriteDef.TEXT_SPRITE, this.spriteDef.RESTART,
                                this.dimensions);
                        } else {
                            this.gameOverPanel.draw();
                        }

                        // Update the high score.
                        if (this.distanceRan > this.highestScore) {
                            this.highestScore = Math.ceil(this.distanceRan);
                            this.distanceMeter.setHighScore(this.highestScore);
                        }

                        // Reset the time clock.
                        this.time = getTimeStamp();
                    },

                    stop: function() {
                        this.playing = false;
                        this.paused = true;
                        cancelAnimationFrame(this.raqId);
                        this.raqId = 0;
                    },

                    play: function() {
                        if (!this.crashed) {
                            this.playing = true;
                            this.paused = false;
                            this.tRex.update(0, Trex.status.RUNNING);
                            this.time = getTimeStamp();
                            this.update();
                        }
                    },

                    restart: function() {
                        if (!this.raqId) {
                            this.playCount++;
                            this.runningTime = 0;
                            this.playing = true;
                            this.crashed = false;
                            this.distanceRan = 0;
                            this.setSpeed(this.config.SPEED);
                            this.time = getTimeStamp();
                            this.containerEl.classList.remove(Runner.classes.CRASHED);
                            this.clearCanvas();
                            this.distanceMeter.reset(this.highestScore);
                            this.horizon.reset();
                            this.tRex.reset();
                            this.playSound(this.soundFx.BUTTON_PRESS);
                            this.invert(true);
                            this.update();
                        }
                    },

                    /**
                     * Pause the game if the tab is not in focus.
                     */
                    onVisibilityChange: function(e) {
                        if (document.hidden || document.webkitHidden || e.type == 'blur' ||
                            document.visibilityState != 'visible') {
                            this.stop();
                        } else if (!this.crashed) {
                            this.tRex.reset();
                            this.play();
                        }
                    },

                    /**
                     * Play a sound.
                     * @param {SoundBuffer} soundBuffer
                     */
                    playSound: function(soundBuffer) {
                        if (soundBuffer) {
                            var sourceNode = this.audioContext.createBufferSource();
                            sourceNode.buffer = soundBuffer;
                            sourceNode.connect(this.audioContext.destination);
                            sourceNode.start(0);
                        }
                    },

                    /**
                     * Inverts the current page / canvas colors.
                     * @param {boolean} Whether to reset colors.
                     */
                    invert: function(reset) {
                        if (reset) {
                            document.body.classList.toggle(Runner.classes.INVERTED, false);
                            this.invertTimer = 0;
                            this.inverted = false;
                        } else {
                            this.inverted = document.body.classList.toggle(Runner.classes.INVERTED,
                                this.invertTrigger);
                        }
                    }
                };


                /**
                 * Updates the canvas size taking into
                 * account the backing store pixel ratio and
                 * the device pixel ratio.
                 *
                 * See article by Paul Lewis:
                 * http://www.html5rocks.com/en/tutorials/canvas/hidpi/
                 *
                 * @param {HTMLCanvasElement} canvas
                 * @param {number} opt_width
                 * @param {number} opt_height
                 * @return {boolean} Whether the canvas was scaled.
                 */
                Runner.updateCanvasScaling = function(canvas, opt_width, opt_height) {
                    var context = canvas.getContext('2d');

                    // Query the various pixel ratios
                    var devicePixelRatio = Math.floor(window.devicePixelRatio) || 1;
                    var backingStoreRatio = Math.floor(context.webkitBackingStorePixelRatio) || 1;
                    var ratio = devicePixelRatio / backingStoreRatio;

                    // Upscale the canvas if the two ratios don't match
                    if (devicePixelRatio !== backingStoreRatio) {
                        var oldWidth = opt_width || canvas.width;
                        var oldHeight = opt_height || canvas.height;

                        canvas.width = oldWidth * ratio;
                        canvas.height = oldHeight * ratio;

                        canvas.style.width = oldWidth + 'px';
                        canvas.style.height = oldHeight + 'px';

                        // Scale the context to counter the fact that we've manually scaled
                        // our canvas element.
                        context.scale(ratio, ratio);
                        return true;
                    } else if (devicePixelRatio == 1) {
                        // Reset the canvas width / height. Fixes scaling bug when the page is
                        // zoomed and the devicePixelRatio changes accordingly.
                        canvas.style.width = canvas.width + 'px';
                        canvas.style.height = canvas.height + 'px';
                    }
                    return false;
                };


                /**
                 * Get random number.
                 * @param {number} min
                 * @param {number} max
                 * @param {number}
                 */
                function getRandomNum(min, max) {
                    return Math.floor(Math.random() * (max - min + 1)) + min;
                }


                /**
                 * Vibrate on mobile devices.
                 * @param {number} duration Duration of the vibration in milliseconds.
                 */
                function vibrate(duration) {
                    if (IS_MOBILE && window.navigator.vibrate) {
                        window.navigator.vibrate(duration);
                    }
                }


                /**
                 * Create canvas element.
                 * @param {HTMLElement} container Element to append canvas to.
                 * @param {number} width
                 * @param {number} height
                 * @param {string} opt_classname
                 * @return {HTMLCanvasElement}
                 */
                function createCanvas(container, width, height, opt_classname) {
                    var canvas = document.createElement('canvas');
                    canvas.className = opt_classname ? Runner.classes.CANVAS + ' ' +
                        opt_classname : Runner.classes.CANVAS;
                    canvas.width = width;
                    canvas.height = height;
                    container.appendChild(canvas);

                    return canvas;
                }


                /**
                 * Decodes the base 64 audio to ArrayBuffer used by Web Audio.
                 * @param {string} base64String
                 */
                function decodeBase64ToArrayBuffer(base64String) {
                    var len = (base64String.length / 4) * 3;
                    var str = atob(base64String);
                    var arrayBuffer = new ArrayBuffer(len);
                    var bytes = new Uint8Array(arrayBuffer);

                    for (var i = 0; i < len; i++) {
                        bytes[i] = str.charCodeAt(i);
                    }
                    return bytes.buffer;
                }


                /**
                 * Return the current timestamp.
                 * @return {number}
                 */
                function getTimeStamp() {
                    return IS_IOS ? new Date().getTime() : performance.now();
                }


                //******************************************************************************


                /**
                 * Game over panel.
                 * @param {!HTMLCanvasElement} canvas
                 * @param {Object} textImgPos
                 * @param {Object} restartImgPos
                 * @param {!Object} dimensions Canvas dimensions.
                 * @constructor
                 */
                function GameOverPanel(canvas, textImgPos, restartImgPos, dimensions) {
                    this.canvas = canvas;
                    this.canvasCtx = canvas.getContext('2d');
                    this.canvasDimensions = dimensions;
                    this.textImgPos = textImgPos;
                    this.restartImgPos = restartImgPos;
                    this.draw();
                };


                /**
                 * Dimensions used in the panel.
                 * @enum {number}
                 */
                GameOverPanel.dimensions = {
                    TEXT_X: 0,
                    TEXT_Y: 13,
                    TEXT_WIDTH: 191,
                    TEXT_HEIGHT: 11,
                    RESTART_WIDTH: 36,
                    RESTART_HEIGHT: 32
                };


                GameOverPanel.prototype = {
                    /**
                     * Update the panel dimensions.
                     * @param {number} width New canvas width.
                     * @param {number} opt_height Optional new canvas height.
                     */
                    updateDimensions: function(width, opt_height) {
                        this.canvasDimensions.WIDTH = width;
                        if (opt_height) {
                            this.canvasDimensions.HEIGHT = opt_height;
                        }
                    },

                    /**
                     * Draw the panel.
                     */
                    draw: function() {
                        var dimensions = GameOverPanel.dimensions;

                        var centerX = this.canvasDimensions.WIDTH / 2;

                        // Game over text.
                        var textSourceX = dimensions.TEXT_X;
                        var textSourceY = dimensions.TEXT_Y;
                        var textSourceWidth = dimensions.TEXT_WIDTH;
                        var textSourceHeight = dimensions.TEXT_HEIGHT;

                        var textTargetX = Math.round(centerX - (dimensions.TEXT_WIDTH / 2));
                        var textTargetY = Math.round((this.canvasDimensions.HEIGHT - 25) / 3);
                        var textTargetWidth = dimensions.TEXT_WIDTH;
                        var textTargetHeight = dimensions.TEXT_HEIGHT;

                        var restartSourceWidth = dimensions.RESTART_WIDTH;
                        var restartSourceHeight = dimensions.RESTART_HEIGHT;
                        var restartTargetX = centerX - (dimensions.RESTART_WIDTH / 2);
                        var restartTargetY = this.canvasDimensions.HEIGHT / 2;

                        if (IS_HIDPI) {
                            textSourceY *= 2;
                            textSourceX *= 2;
                            textSourceWidth *= 2;
                            textSourceHeight *= 2;
                            restartSourceWidth *= 2;
                            restartSourceHeight *= 2;
                        }

                        textSourceX += this.textImgPos.x;
                        textSourceY += this.textImgPos.y;

                        // Game over text from sprite.
                        this.canvasCtx.drawImage(Runner.imageSprite,
                            textSourceX, textSourceY, textSourceWidth, textSourceHeight,
                            textTargetX, textTargetY, textTargetWidth, textTargetHeight);

                        // Restart button.
                        this.canvasCtx.drawImage(Runner.imageSprite,
                            this.restartImgPos.x, this.restartImgPos.y,
                            restartSourceWidth, restartSourceHeight,
                            restartTargetX, restartTargetY, dimensions.RESTART_WIDTH,
                            dimensions.RESTART_HEIGHT);
                    }
                };


                //******************************************************************************

                /**
                 * Check for a collision.
                 * @param {!Obstacle} obstacle
                 * @param {!Trex} tRex T-rex object.
                 * @param {HTMLCanvasContext} opt_canvasCtx Optional canvas context for drawing
                 *    collision boxes.
                 * @return {Array<CollisionBox>}
                 */
                function checkForCollision(obstacle, tRex, opt_canvasCtx) {
                    var obstacleBoxXPos = Runner.defaultDimensions.WIDTH + obstacle.xPos;

                    // Adjustments are made to the bounding box as there is a 1 pixel white
                    // border around the t-rex and obstacles.
                    var tRexBox = new CollisionBox(
                        tRex.xPos + 1,
                        tRex.yPos + 1,
                        tRex.config.WIDTH - 2,
                        tRex.config.HEIGHT - 2);

                    var obstacleBox = new CollisionBox(
                        obstacle.xPos + 1,
                        obstacle.yPos + 1,
                        obstacle.typeConfig.width * obstacle.size - 2,
                        obstacle.typeConfig.height - 2);

                    // Debug outer box
                    if (opt_canvasCtx) {
                        drawCollisionBoxes(opt_canvasCtx, tRexBox, obstacleBox);
                    }

                    // Simple outer bounds check.
                    if (boxCompare(tRexBox, obstacleBox)) {
                        var collisionBoxes = obstacle.collisionBoxes;
                        var tRexCollisionBoxes = tRex.ducking ?
                            Trex.collisionBoxes.DUCKING : Trex.collisionBoxes.RUNNING;

                        // Detailed axis aligned box check.
                        for (var t = 0; t < tRexCollisionBoxes.length; t++) {
                            for (var i = 0; i < collisionBoxes.length; i++) {
                                // Adjust the box to actual positions.
                                var adjTrexBox =
                                    createAdjustedCollisionBox(tRexCollisionBoxes[t], tRexBox);
                                var adjObstacleBox =
                                    createAdjustedCollisionBox(collisionBoxes[i], obstacleBox);
                                var crashed = boxCompare(adjTrexBox, adjObstacleBox);

                                // Draw boxes for debug.
                                if (opt_canvasCtx) {
                                    drawCollisionBoxes(opt_canvasCtx, adjTrexBox, adjObstacleBox);
                                }

                                if (crashed) {
                                    return [adjTrexBox, adjObstacleBox];
                                }
                            }
                        }
                    }
                    return false;
                };


                /**
                 * Adjust the collision box.
                 * @param {!CollisionBox} box The original box.
                 * @param {!CollisionBox} adjustment Adjustment box.
                 * @return {CollisionBox} The adjusted collision box object.
                 */
                function createAdjustedCollisionBox(box, adjustment) {
                    return new CollisionBox(
                        box.x + adjustment.x,
                        box.y + adjustment.y,
                        box.width,
                        box.height);
                };


                /**
                 * Draw the collision boxes for debug.
                 */
                function drawCollisionBoxes(canvasCtx, tRexBox, obstacleBox) {
                    canvasCtx.save();
                    canvasCtx.strokeStyle = '#f00';
                    canvasCtx.strokeRect(tRexBox.x, tRexBox.y, tRexBox.width, tRexBox.height);

                    canvasCtx.strokeStyle = '#0f0';
                    canvasCtx.strokeRect(obstacleBox.x, obstacleBox.y,
                        obstacleBox.width, obstacleBox.height);
                    canvasCtx.restore();
                };


                /**
                 * Compare two collision boxes for a collision.
                 * @param {CollisionBox} tRexBox
                 * @param {CollisionBox} obstacleBox
                 * @return {boolean} Whether the boxes intersected.
                 */
                function boxCompare(tRexBox, obstacleBox) {
                    var crashed = false;
                    var tRexBoxX = tRexBox.x;
                    var tRexBoxY = tRexBox.y;

                    var obstacleBoxX = obstacleBox.x;
                    var obstacleBoxY = obstacleBox.y;

                    // Axis-Aligned Bounding Box method.
                    if (tRexBox.x < obstacleBoxX + obstacleBox.width &&
                        tRexBox.x + tRexBox.width > obstacleBoxX &&
                        tRexBox.y < obstacleBox.y + obstacleBox.height &&
                        tRexBox.height + tRexBox.y > obstacleBox.y) {
                        crashed = true;
                    }

                    return crashed;
                };


                //******************************************************************************

                /**
                 * Collision box object.
                 * @param {number} x X position.
                 * @param {number} y Y Position.
                 * @param {number} w Width.
                 * @param {number} h Height.
                 */
                function CollisionBox(x, y, w, h) {
                    this.x = x;
                    this.y = y;
                    this.width = w;
                    this.height = h;
                };


                //******************************************************************************

                /**
                 * Obstacle.
                 * @param {HTMLCanvasCtx} canvasCtx
                 * @param {Obstacle.type} type
                 * @param {Object} spritePos Obstacle position in sprite.
                 * @param {Object} dimensions
                 * @param {number} gapCoefficient Mutipler in determining the gap.
                 * @param {number} speed
                 * @param {number} opt_xOffset
                 */
                function Obstacle(canvasCtx, type, spriteImgPos, dimensions,
                    gapCoefficient, speed, opt_xOffset) {

                    this.canvasCtx = canvasCtx;
                    this.spritePos = spriteImgPos;
                    this.typeConfig = type;
                    this.gapCoefficient = gapCoefficient;
                    this.size = getRandomNum(1, Obstacle.MAX_OBSTACLE_LENGTH);
                    this.dimensions = dimensions;
                    this.remove = false;
                    this.xPos = dimensions.WIDTH + (opt_xOffset || 0);
                    this.yPos = 0;
                    this.width = 0;
                    this.collisionBoxes = [];
                    this.gap = 0;
                    this.speedOffset = 0;

                    // For animated obstacles.
                    this.currentFrame = 0;
                    this.timer = 0;

                    this.init(speed);
                };

                /**
                 * Coefficient for calculating the maximum gap.
                 * @const
                 */
                Obstacle.MAX_GAP_COEFFICIENT = 1.5;

                /**
                 * Maximum obstacle grouping count.
                 * @const
                 */
                Obstacle.MAX_OBSTACLE_LENGTH = 3,


                    Obstacle.prototype = {
                        /**
                         * Initialise the DOM for the obstacle.
                         * @param {number} speed
                         */
                        init: function(speed) {
                            this.cloneCollisionBoxes();

                            // Only allow sizing if we're at the right speed.
                            if (this.size > 1 && this.typeConfig.multipleSpeed > speed) {
                                this.size = 1;
                            }

                            this.width = this.typeConfig.width * this.size;

                            // Check if obstacle can be positioned at various heights.
                            if (Array.isArray(this.typeConfig.yPos)) {
                                var yPosConfig = IS_MOBILE ? this.typeConfig.yPosMobile :
                                    this.typeConfig.yPos;
                                this.yPos = yPosConfig[getRandomNum(0, yPosConfig.length - 1)];
                            } else {
                                this.yPos = this.typeConfig.yPos;
                            }

                            this.draw();

                            // Make collision box adjustments,
                            // Central box is adjusted to the size as one box.
                            //      ____        ______        ________
                            //    _|   |-|    _|     |-|    _|       |-|
                            //   | |<->| |   | |<--->| |   | |<----->| |
                            //   | | 1 | |   | |  2  | |   | |   3   | |
                            //   |_|___|_|   |_|_____|_|   |_|_______|_|
                            //
                            if (this.size > 1) {
                                this.collisionBoxes[1].width = this.width - this.collisionBoxes[0].width -
                                    this.collisionBoxes[2].width;
                                this.collisionBoxes[2].x = this.width - this.collisionBoxes[2].width;
                            }

                            // For obstacles that go at a different speed from the horizon.
                            if (this.typeConfig.speedOffset) {
                                this.speedOffset = Math.random() > 0.5 ? this.typeConfig.speedOffset :
                                    -this.typeConfig.speedOffset;
                            }

                            this.gap = this.getGap(this.gapCoefficient, speed);
                        },

                        /**
                         * Draw and crop based on size.
                         */
                        draw: function() {
                            var sourceWidth = this.typeConfig.width;
                            var sourceHeight = this.typeConfig.height;

                            if (IS_HIDPI) {
                                sourceWidth = sourceWidth * 2;
                                sourceHeight = sourceHeight * 2;
                            }

                            // X position in sprite.
                            var sourceX = (sourceWidth * this.size) * (0.5 * (this.size - 1)) +
                                this.spritePos.x;

                            // Animation frames.
                            if (this.currentFrame > 0) {
                                sourceX += sourceWidth * this.currentFrame;
                            }

                            this.canvasCtx.drawImage(Runner.imageSprite,
                                sourceX, this.spritePos.y,
                                sourceWidth * this.size, sourceHeight,
                                this.xPos, this.yPos,
                                this.typeConfig.width * this.size, this.typeConfig.height);
                        },

                        /**
                         * Obstacle frame update.
                         * @param {number} deltaTime
                         * @param {number} speed
                         */
                        update: function(deltaTime, speed) {
                            if (!this.remove) {
                                if (this.typeConfig.speedOffset) {
                                    speed += this.speedOffset;
                                }
                                this.xPos -= Math.floor((speed * FPS / 1000) * deltaTime);

                                // Update frame
                                if (this.typeConfig.numFrames) {
                                    this.timer += deltaTime;
                                    if (this.timer >= this.typeConfig.frameRate) {
                                        this.currentFrame =
                                            this.currentFrame == this.typeConfig.numFrames - 1 ?
                                            0 : this.currentFrame + 1;
                                        this.timer = 0;
                                    }
                                }
                                this.draw();

                                if (!this.isVisible()) {
                                    this.remove = true;
                                }
                            }
                        },

                        /**
                         * Calculate a random gap size.
                         * - Minimum gap gets wider as speed increses
                         * @param {number} gapCoefficient
                         * @param {number} speed
                         * @return {number} The gap size.
                         */
                        getGap: function(gapCoefficient, speed) {
                            var minGap = Math.round(this.width * speed +
                                this.typeConfig.minGap * gapCoefficient);
                            var maxGap = Math.round(minGap * Obstacle.MAX_GAP_COEFFICIENT);
                            return getRandomNum(minGap, maxGap);
                        },

                        /**
                         * Check if obstacle is visible.
                         * @return {boolean} Whether the obstacle is in the game area.
                         */
                        isVisible: function() {
                            return this.xPos + this.width > 0;
                        },

                        /**
                         * Make a copy of the collision boxes, since these will change based on
                         * obstacle type and size.
                         */
                        cloneCollisionBoxes: function() {
                            var collisionBoxes = this.typeConfig.collisionBoxes;

                            for (var i = collisionBoxes.length - 1; i >= 0; i--) {
                                this.collisionBoxes[i] = new CollisionBox(collisionBoxes[i].x,
                                    collisionBoxes[i].y, collisionBoxes[i].width,
                                    collisionBoxes[i].height);
                            }
                        }
                    };


                /**
                 * Obstacle definitions.
                 * minGap: minimum pixel space betweeen obstacles.
                 * multipleSpeed: Speed at which multiples are allowed.
                 * speedOffset: speed faster / slower than the horizon.
                 * minSpeed: Minimum speed which the obstacle can make an appearance.
                 */
                Obstacle.types = [{
                    type: 'CACTUS_SMALL',
                    width: 17,
                    height: 35,
                    yPos: 105,
                    multipleSpeed: 4,
                    minGap: 120,
                    minSpeed: 0,
                    collisionBoxes: [
                        new CollisionBox(0, 7, 5, 27),
                        new CollisionBox(4, 0, 6, 34),
                        new CollisionBox(10, 4, 7, 14)
                    ]
                }, {
                    type: 'CACTUS_LARGE',
                    width: 25,
                    height: 50,
                    yPos: 90,
                    multipleSpeed: 7,
                    minGap: 120,
                    minSpeed: 0,
                    collisionBoxes: [
                        new CollisionBox(0, 12, 7, 38),
                        new CollisionBox(8, 0, 7, 49),
                        new CollisionBox(13, 10, 10, 38)
                    ]
                }, {
                    type: 'PTERODACTYL',
                    width: 46,
                    height: 40,
                    yPos: [100, 75, 50], // Variable height.
                    yPosMobile: [100, 50], // Variable height mobile.
                    multipleSpeed: 999,
                    minSpeed: 8.5,
                    minGap: 150,
                    collisionBoxes: [
                        new CollisionBox(15, 15, 16, 5),
                        new CollisionBox(18, 21, 24, 6),
                        new CollisionBox(2, 14, 4, 3),
                        new CollisionBox(6, 10, 4, 7),
                        new CollisionBox(10, 8, 6, 9)
                    ],
                    numFrames: 2,
                    frameRate: 1000 / 6,
                    speedOffset: .8
                }];


                //******************************************************************************
                /**
                 * T-rex game character.
                 * @param {HTMLCanvas} canvas
                 * @param {Object} spritePos Positioning within image sprite.
                 * @constructor
                 */
                function Trex(canvas, spritePos) {
                    this.canvas = canvas;
                    this.canvasCtx = canvas.getContext('2d');
                    this.spritePos = spritePos;
                    this.xPos = 0;
                    this.yPos = 0;
                    // Position when on the ground.
                    this.groundYPos = 0;
                    this.currentFrame = 0;
                    this.currentAnimFrames = [];
                    this.blinkDelay = 0;
                    this.blinkCount = 0;
                    this.animStartTime = 0;
                    this.timer = 0;
                    this.msPerFrame = 1000 / FPS;
                    this.config = Trex.config;
                    // Current status.
                    this.status = Trex.status.WAITING;

                    this.jumping = false;
                    this.ducking = false;
                    this.jumpVelocity = 0;
                    this.reachedMinHeight = false;
                    this.speedDrop = false;
                    this.jumpCount = 0;
                    this.jumpspotX = 0;

                    this.init();
                };


                /**
                 * T-rex player config.
                 * @enum {number}
                 */
                Trex.config = {
                    DROP_VELOCITY: -5,
                    GRAVITY: 0.6,
                    HEIGHT: 47,
                    HEIGHT_DUCK: 25,
                    INIITAL_JUMP_VELOCITY: -10,
                    INTRO_DURATION: 1500,
                    MAX_JUMP_HEIGHT: 30,
                    MIN_JUMP_HEIGHT: 30,
                    SPEED_DROP_COEFFICIENT: 3,
                    SPRITE_WIDTH: 262,
                    START_X_POS: 50,
                    WIDTH: 44,
                    WIDTH_DUCK: 59
                };


                /**
                 * Used in collision detection.
                 * @type {Array<CollisionBox>}
                 */
                Trex.collisionBoxes = {
                    DUCKING: [
                        new CollisionBox(1, 18, 55, 25)
                    ],
                    RUNNING: [
                        new CollisionBox(22, 0, 17, 16),
                        new CollisionBox(1, 18, 30, 9),
                        new CollisionBox(10, 35, 14, 8),
                        new CollisionBox(1, 24, 29, 5),
                        new CollisionBox(5, 30, 21, 4),
                        new CollisionBox(9, 34, 15, 4)
                    ]
                };


                /**
                 * Animation states.
                 * @enum {string}
                 */
                Trex.status = {
                    CRASHED: 'CRASHED',
                    DUCKING: 'DUCKING',
                    JUMPING: 'JUMPING',
                    RUNNING: 'RUNNING',
                    WAITING: 'WAITING'
                };

                /**
                 * Blinking coefficient.
                 * @const
                 */
                Trex.BLINK_TIMING = 7000;


                /**
                 * Animation config for different states.
                 * @enum {Object}
                 */
                Trex.animFrames = {
                    WAITING: {
                        frames: [44, 0],
                        msPerFrame: 1000 / 3
                    },
                    RUNNING: {
                        frames: [88, 132],
                        msPerFrame: 1000 / 12
                    },
                    CRASHED: {
                        frames: [220],
                        msPerFrame: 1000 / 60
                    },
                    JUMPING: {
                        frames: [0],
                        msPerFrame: 1000 / 60
                    },
                    DUCKING: {
                        frames: [264, 323],
                        msPerFrame: 1000 / 8
                    }
                };


                Trex.prototype = {
                    /**
                     * T-rex player initaliser.
                     * Sets the t-rex to blink at random intervals.
                     */
                    init: function() {
                        this.groundYPos = Runner.defaultDimensions.HEIGHT - this.config.HEIGHT -
                            Runner.config.BOTTOM_PAD;
                        this.yPos = this.groundYPos;
                        this.minJumpHeight = this.groundYPos - this.config.MIN_JUMP_HEIGHT;

                        this.draw(0, 0);
                        this.update(0, Trex.status.WAITING);
                    },

                    /**
                     * Setter for the jump velocity.
                     * The approriate drop velocity is also set.
                     */
                    setJumpVelocity: function(setting) {
                        this.config.INIITAL_JUMP_VELOCITY = -setting;
                        this.config.DROP_VELOCITY = -setting / 2;
                    },

                    /**
                     * Set the animation status.
                     * @param {!number} deltaTime
                     * @param {Trex.status} status Optional status to switch to.
                     */
                    update: function(deltaTime, opt_status) {
                        this.timer += deltaTime;

                        // Update the status.
                        if (opt_status) {
                            this.status = opt_status;
                            this.currentFrame = 0;
                            this.msPerFrame = Trex.animFrames[opt_status].msPerFrame;
                            this.currentAnimFrames = Trex.animFrames[opt_status].frames;

                            if (opt_status == Trex.status.WAITING) {
                                this.animStartTime = getTimeStamp();
                                this.setBlinkDelay();
                            }
                        }

                        // Game intro animation, T-rex moves in from the left.
                        if (this.playingIntro && this.xPos < this.config.START_X_POS) {
                            this.xPos += Math.round((this.config.START_X_POS /
                                this.config.INTRO_DURATION) * deltaTime);
                        }

                        if (this.status == Trex.status.WAITING) {
                            this.blink(getTimeStamp());
                        } else {
                            this.draw(this.currentAnimFrames[this.currentFrame], 0);
                        }

                        // Update the frame position.
                        if (this.timer >= this.msPerFrame) {
                            this.currentFrame = this.currentFrame ==
                                this.currentAnimFrames.length - 1 ? 0 : this.currentFrame + 1;
                            this.timer = 0;
                        }

                        // Speed drop becomes duck if the down key is still being pressed.
                        if (this.speedDrop && this.yPos == this.groundYPos) {
                            this.speedDrop = false;
                            this.setDuck(true);
                        }
                    },

                    /**
                     * Draw the t-rex to a particular position.
                     * @param {number} x
                     * @param {number} y
                     */
                    draw: function(x, y) {
                        var sourceX = x;
                        var sourceY = y;
                        var sourceWidth = this.ducking && this.status != Trex.status.CRASHED ?
                            this.config.WIDTH_DUCK : this.config.WIDTH;
                        var sourceHeight = this.config.HEIGHT;

                        if (IS_HIDPI) {
                            sourceX *= 2;
                            sourceY *= 2;
                            sourceWidth *= 2;
                            sourceHeight *= 2;
                        }

                        // Adjustments for sprite sheet position.
                        sourceX += this.spritePos.x;
                        sourceY += this.spritePos.y;

                        // Ducking.
                        if (this.ducking && this.status != Trex.status.CRASHED) {
                            this.canvasCtx.drawImage(Runner.imageSprite, sourceX, sourceY,
                                sourceWidth, sourceHeight,
                                this.xPos, this.yPos,
                                this.config.WIDTH_DUCK, this.config.HEIGHT);
                        } else {
                            // Crashed whilst ducking. Trex is standing up so needs adjustment.
                            if (this.ducking && this.status == Trex.status.CRASHED) {
                                this.xPos++;
                            }
                            // Standing / running
                            this.canvasCtx.drawImage(Runner.imageSprite, sourceX, sourceY,
                                sourceWidth, sourceHeight,
                                this.xPos, this.yPos,
                                this.config.WIDTH, this.config.HEIGHT);
                        }
                    },

                    /**
                     * Sets a random time for the blink to happen.
                     */
                    setBlinkDelay: function() {
                        this.blinkDelay = Math.ceil(Math.random() * Trex.BLINK_TIMING);
                    },

                    /**
                     * Make t-rex blink at random intervals.
                     * @param {number} time Current time in milliseconds.
                     */
                    blink: function(time) {
                        var deltaTime = time - this.animStartTime;

                        if (deltaTime >= this.blinkDelay) {
                            this.draw(this.currentAnimFrames[this.currentFrame], 0);

                            if (this.currentFrame == 1) {
                                // Set new random delay to blink.
                                this.setBlinkDelay();
                                this.animStartTime = time;
                                this.blinkCount++;
                            }
                        }
                    },

                    /**
                     * Initialise a jump.
                     * @param {number} speed
                     */
                    startJump: function(speed) {
                        if (!this.jumping) {
                            this.update(0, Trex.status.JUMPING);
                            // Tweak the jump velocity based on the speed.
                            this.jumpVelocity = this.config.INIITAL_JUMP_VELOCITY - (speed / 10);
                            this.jumping = true;
                            this.reachedMinHeight = false;
                            this.speedDrop = false;
                        }
                    },

                    /**
                     * Jump is complete, falling down.
                     */
                    endJump: function() {
                        if (this.reachedMinHeight &&
                            this.jumpVelocity < this.config.DROP_VELOCITY) {
                            this.jumpVelocity = this.config.DROP_VELOCITY;
                        }
                    },

                    /**
                     * Update frame for a jump.
                     * @param {number} deltaTime
                     * @param {number} speed
                     */
                    updateJump: function(deltaTime, speed) {
                        var msPerFrame = Trex.animFrames[this.status].msPerFrame;
                        var framesElapsed = deltaTime / msPerFrame;

                        // Speed drop makes Trex fall faster.
                        if (this.speedDrop) {
                            this.yPos += Math.round(this.jumpVelocity *
                                this.config.SPEED_DROP_COEFFICIENT * framesElapsed);
                        } else {
                            this.yPos += Math.round(this.jumpVelocity * framesElapsed);
                        }

                        this.jumpVelocity += this.config.GRAVITY * framesElapsed;

                        // Minimum height has been reached.
                        if (this.yPos < this.minJumpHeight || this.speedDrop) {
                            this.reachedMinHeight = true;
                        }

                        // Reached max height
                        if (this.yPos < this.config.MAX_JUMP_HEIGHT || this.speedDrop) {
                            this.endJump();
                        }

                        // Back down at ground level. Jump completed.
                        if (this.yPos > this.groundYPos) {
                            this.reset();
                            this.jumpCount++;
                        }

                        this.update(deltaTime);
                    },

                    /**
                     * Set the speed drop. Immediately cancels the current jump.
                     */
                    setSpeedDrop: function() {
                        this.speedDrop = true;
                        this.jumpVelocity = 1;
                    },

                    /**
                     * @param {boolean} isDucking.
                     */
                    setDuck: function(isDucking) {
                        if (isDucking && this.status != Trex.status.DUCKING) {
                            this.update(0, Trex.status.DUCKING);
                            this.ducking = true;
                        } else if (this.status == Trex.status.DUCKING) {
                            this.update(0, Trex.status.RUNNING);
                            this.ducking = false;
                        }
                    },

                    /**
                     * Reset the t-rex to running at start of game.
                     */
                    reset: function() {
                        this.yPos = this.groundYPos;
                        this.jumpVelocity = 0;
                        this.jumping = false;
                        this.ducking = false;
                        this.update(0, Trex.status.RUNNING);
                        this.midair = false;
                        this.speedDrop = false;
                        this.jumpCount = 0;
                    }
                };


                //******************************************************************************

                /**
                 * Handles displaying the distance meter.
                 * @param {!HTMLCanvasElement} canvas
                 * @param {Object} spritePos Image position in sprite.
                 * @param {number} canvasWidth
                 * @constructor
                 */
                function DistanceMeter(canvas, spritePos, canvasWidth) {
                    this.canvas = canvas;
                    this.canvasCtx = canvas.getContext('2d');
                    this.image = Runner.imageSprite;
                    this.spritePos = spritePos;
                    this.x = 0;
                    this.y = 5;

                    this.currentDistance = 0;
                    this.maxScore = 0;
                    this.highScore = 0;
                    this.container = null;

                    this.digits = [];
                    this.acheivement = false;
                    this.defaultString = '';
                    this.flashTimer = 0;
                    this.flashIterations = 0;
                    this.invertTrigger = false;

                    this.config = DistanceMeter.config;
                    this.maxScoreUnits = this.config.MAX_DISTANCE_UNITS;
                    this.init(canvasWidth);
                };


                /**
                 * @enum {number}
                 */
                DistanceMeter.dimensions = {
                    WIDTH: 10,
                    HEIGHT: 13,
                    DEST_WIDTH: 11
                };


                /**
                 * Y positioning of the digits in the sprite sheet.
                 * X position is always 0.
                 * @type {Array<number>}
                 */
                DistanceMeter.yPos = [0, 13, 27, 40, 53, 67, 80, 93, 107, 120];


                /**
                 * Distance meter config.
                 * @enum {number}
                 */
                DistanceMeter.config = {
                    // Number of digits.
                    MAX_DISTANCE_UNITS: 5,

                    // Distance that causes achievement animation.
                    ACHIEVEMENT_DISTANCE: 100,

                    // Used for conversion from pixel distance to a scaled unit.
                    COEFFICIENT: 0.025,

                    // Flash duration in milliseconds.
                    FLASH_DURATION: 1000 / 4,

                    // Flash iterations for achievement animation.
                    FLASH_ITERATIONS: 3
                };


                DistanceMeter.prototype = {
                    /**
                     * Initialise the distance meter to '00000'.
                     * @param {number} width Canvas width in px.
                     */
                    init: function(width) {
                        var maxDistanceStr = '';

                        this.calcXPos(width);
                        this.maxScore = this.maxScoreUnits;
                        for (var i = 0; i < this.maxScoreUnits; i++) {
                            this.draw(i, 0);
                            this.defaultString += '0';
                            maxDistanceStr += '9';
                        }

                        this.maxScore = parseInt(maxDistanceStr);
                    },

                    /**
                     * Calculate the xPos in the canvas.
                     * @param {number} canvasWidth
                     */
                    calcXPos: function(canvasWidth) {
                        this.x = canvasWidth - (DistanceMeter.dimensions.DEST_WIDTH *
                            (this.maxScoreUnits + 1));
                    },

                    /**
                     * Draw a digit to canvas.
                     * @param {number} digitPos Position of the digit.
                     * @param {number} value Digit value 0-9.
                     * @param {boolean} opt_highScore Whether drawing the high score.
                     */
                    draw: function(digitPos, value, opt_highScore) {
                        var sourceWidth = DistanceMeter.dimensions.WIDTH;
                        var sourceHeight = DistanceMeter.dimensions.HEIGHT;
                        var sourceX = DistanceMeter.dimensions.WIDTH * value;
                        var sourceY = 0;

                        var targetX = digitPos * DistanceMeter.dimensions.DEST_WIDTH;
                        var targetY = this.y;
                        var targetWidth = DistanceMeter.dimensions.WIDTH;
                        var targetHeight = DistanceMeter.dimensions.HEIGHT;

                        // For high DPI we 2x source values.
                        if (IS_HIDPI) {
                            sourceWidth *= 2;
                            sourceHeight *= 2;
                            sourceX *= 2;
                        }

                        sourceX += this.spritePos.x;
                        sourceY += this.spritePos.y;

                        this.canvasCtx.save();

                        if (opt_highScore) {
                            // Left of the current score.
                            var highScoreX = this.x - (this.maxScoreUnits * 2) *
                                DistanceMeter.dimensions.WIDTH;
                            this.canvasCtx.translate(highScoreX, this.y);
                        } else {
                            this.canvasCtx.translate(this.x, this.y);
                        }

                        this.canvasCtx.drawImage(this.image, sourceX, sourceY,
                            sourceWidth, sourceHeight,
                            targetX, targetY,
                            targetWidth, targetHeight
                        );

                        this.canvasCtx.restore();
                    },

                    /**
                     * Covert pixel distance to a 'real' distance.
                     * @param {number} distance Pixel distance ran.
                     * @return {number} The 'real' distance ran.
                     */
                    getActualDistance: function(distance) {
                        return distance ? Math.round(distance * this.config.COEFFICIENT) : 0;
                    },

                    /**
                     * Update the distance meter.
                     * @param {number} distance
                     * @param {number} deltaTime
                     * @return {boolean} Whether the acheivement sound fx should be played.
                     */
                    update: function(deltaTime, distance) {
                        var paint = true;
                        var playSound = false;

                        if (!this.acheivement) {
                            distance = this.getActualDistance(distance);
                            // Score has gone beyond the initial digit count.
                            if (distance > this.maxScore && this.maxScoreUnits ==
                                this.config.MAX_DISTANCE_UNITS) {
                                this.maxScoreUnits++;
                                this.maxScore = parseInt(this.maxScore + '9');
                            } else {
                                this.distance = 0;
                            }

                            if (distance > 0) {
                                // Acheivement unlocked
                                if (distance % this.config.ACHIEVEMENT_DISTANCE == 0) {
                                    // Flash score and play sound.
                                    this.acheivement = true;
                                    this.flashTimer = 0;
                                    playSound = true;
                                }

                                // Create a string representation of the distance with leading 0.
                                var distanceStr = (this.defaultString +
                                    distance).substr(-this.maxScoreUnits);
                                this.digits = distanceStr.split('');
                            } else {
                                this.digits = this.defaultString.split('');
                            }
                        } else {
                            // Control flashing of the score on reaching acheivement.
                            if (this.flashIterations <= this.config.FLASH_ITERATIONS) {
                                this.flashTimer += deltaTime;

                                if (this.flashTimer < this.config.FLASH_DURATION) {
                                    paint = false;
                                } else if (this.flashTimer >
                                    this.config.FLASH_DURATION * 2) {
                                    this.flashTimer = 0;
                                    this.flashIterations++;
                                }
                            } else {
                                this.acheivement = false;
                                this.flashIterations = 0;
                                this.flashTimer = 0;
                            }
                        }

                        // Draw the digits if not flashing.
                        if (paint) {
                            for (var i = this.digits.length - 1; i >= 0; i--) {
                                this.draw(i, parseInt(this.digits[i]));
                            }
                        }

                        this.drawHighScore();
                        return playSound;
                    },

                    /**
                     * Draw the high score.
                     */
                    drawHighScore: function() {
                        this.canvasCtx.save();
                        this.canvasCtx.globalAlpha = .8;
                        for (var i = this.highScore.length - 1; i >= 0; i--) {
                            this.draw(i, parseInt(this.highScore[i], 10), true);
                        }
                        this.canvasCtx.restore();
                    },

                    /**
                     * Set the highscore as a array string.
                     * Position of char in the sprite: H - 10, I - 11.
                     * @param {number} distance Distance ran in pixels.
                     */
                    setHighScore: function(distance) {
                        distance = this.getActualDistance(distance);
                        var highScoreStr = (this.defaultString +
                            distance).substr(-this.maxScoreUnits);

                        this.highScore = ['10', '11', ''].concat(highScoreStr.split(''));
                    },

                    /**
                     * Reset the distance meter back to '00000'.
                     */
                    reset: function() {
                        this.update(0);
                        this.acheivement = false;
                    }
                };


                //******************************************************************************

                /**
                 * Cloud background item.
                 * Similar to an obstacle object but without collision boxes.
                 * @param {HTMLCanvasElement} canvas Canvas element.
                 * @param {Object} spritePos Position of image in sprite.
                 * @param {number} containerWidth
                 */
                function Cloud(canvas, spritePos, containerWidth) {
                    this.canvas = canvas;
                    this.canvasCtx = this.canvas.getContext('2d');
                    this.spritePos = spritePos;
                    this.containerWidth = containerWidth;
                    this.xPos = containerWidth;
                    this.yPos = 0;
                    this.remove = false;
                    this.cloudGap = getRandomNum(Cloud.config.MIN_CLOUD_GAP,
                        Cloud.config.MAX_CLOUD_GAP);

                    this.init();
                };


                /**
                 * Cloud object config.
                 * @enum {number}
                 */
                Cloud.config = {
                    HEIGHT: 14,
                    MAX_CLOUD_GAP: 400,
                    MAX_SKY_LEVEL: 30,
                    MIN_CLOUD_GAP: 100,
                    MIN_SKY_LEVEL: 71,
                    WIDTH: 46
                };


                Cloud.prototype = {
                    /**
                     * Initialise the cloud. Sets the Cloud height.
                     */
                    init: function() {
                        this.yPos = getRandomNum(Cloud.config.MAX_SKY_LEVEL,
                            Cloud.config.MIN_SKY_LEVEL);
                        this.draw();
                    },

                    /**
                     * Draw the cloud.
                     */
                    draw: function() {
                        this.canvasCtx.save();
                        var sourceWidth = Cloud.config.WIDTH;
                        var sourceHeight = Cloud.config.HEIGHT;

                        if (IS_HIDPI) {
                            sourceWidth = sourceWidth * 2;
                            sourceHeight = sourceHeight * 2;
                        }

                        this.canvasCtx.drawImage(Runner.imageSprite, this.spritePos.x,
                            this.spritePos.y,
                            sourceWidth, sourceHeight,
                            this.xPos, this.yPos,
                            Cloud.config.WIDTH, Cloud.config.HEIGHT);

                        this.canvasCtx.restore();
                    },

                    /**
                     * Update the cloud position.
                     * @param {number} speed
                     */
                    update: function(speed) {
                        if (!this.remove) {
                            this.xPos -= Math.ceil(speed);
                            this.draw();

                            // Mark as removeable if no longer in the canvas.
                            if (!this.isVisible()) {
                                this.remove = true;
                            }
                        }
                    },

                    /**
                     * Check if the cloud is visible on the stage.
                     * @return {boolean}
                     */
                    isVisible: function() {
                        return this.xPos + Cloud.config.WIDTH > 0;
                    }
                };


                //******************************************************************************

                /**
                 * Nightmode shows a moon and stars on the horizon.
                 */
                function NightMode(canvas, spritePos, containerWidth) {
                    this.spritePos = spritePos;
                    this.canvas = canvas;
                    this.canvasCtx = canvas.getContext('2d');
                    this.xPos = containerWidth - 50;
                    this.yPos = 30;
                    this.currentPhase = 0;
                    this.opacity = 0;
                    this.containerWidth = containerWidth;
                    this.stars = [];
                    this.drawStars = false;
                    this.placeStars();
                };

                /**
                 * @enum {number}
                 */
                NightMode.config = {
                    FADE_SPEED: 0.035,
                    HEIGHT: 40,
                    MOON_SPEED: 0.25,
                    NUM_STARS: 2,
                    STAR_SIZE: 9,
                    STAR_SPEED: 0.3,
                    STAR_MAX_Y: 70,
                    WIDTH: 20
                };

                NightMode.phases = [140, 120, 100, 60, 40, 20, 0];

                NightMode.prototype = {
                    /**
                     * Update moving moon, changing phases.
                     * @param {boolean} activated Whether night mode is activated.
                     * @param {number} delta
                     */
                    update: function(activated, delta) {
                        // Moon phase.
                        if (activated && this.opacity == 0) {
                            this.currentPhase++;

                            if (this.currentPhase >= NightMode.phases.length) {
                                this.currentPhase = 0;
                            }
                        }

                        // Fade in / out.
                        if (activated && (this.opacity < 1 || this.opacity == 0)) {
                            this.opacity += NightMode.config.FADE_SPEED;
                        } else if (this.opacity > 0) {
                            this.opacity -= NightMode.config.FADE_SPEED;
                        }

                        // Set moon positioning.
                        if (this.opacity > 0) {
                            this.xPos = this.updateXPos(this.xPos, NightMode.config.MOON_SPEED);

                            // Update stars.
                            if (this.drawStars) {
                                for (var i = 0; i < NightMode.config.NUM_STARS; i++) {
                                    this.stars[i].x = this.updateXPos(this.stars[i].x,
                                        NightMode.config.STAR_SPEED);
                                }
                            }
                            this.draw();
                        } else {
                            this.opacity = 0;
                            this.placeStars();
                        }
                        this.drawStars = true;
                    },

                    updateXPos: function(currentPos, speed) {
                        if (currentPos < -NightMode.config.WIDTH) {
                            currentPos = this.containerWidth;
                        } else {
                            currentPos -= speed;
                        }
                        return currentPos;
                    },

                    draw: function() {
                        var moonSourceWidth = this.currentPhase == 3 ? NightMode.config.WIDTH * 2 :
                            NightMode.config.WIDTH;
                        var moonSourceHeight = NightMode.config.HEIGHT;
                        var moonSourceX = this.spritePos.x + NightMode.phases[this.currentPhase];
                        var moonOutputWidth = moonSourceWidth;
                        var starSize = NightMode.config.STAR_SIZE;
                        var starSourceX = Runner.spriteDefinition.LDPI.STAR.x;

                        if (IS_HIDPI) {
                            moonSourceWidth *= 2;
                            moonSourceHeight *= 2;
                            moonSourceX = this.spritePos.x +
                                (NightMode.phases[this.currentPhase] * 2);
                            starSize *= 2;
                            starSourceX = Runner.spriteDefinition.HDPI.STAR.x;
                        }

                        this.canvasCtx.save();
                        this.canvasCtx.globalAlpha = this.opacity;

                        // Stars.
                        if (this.drawStars) {
                            for (var i = 0; i < NightMode.config.NUM_STARS; i++) {
                                this.canvasCtx.drawImage(Runner.imageSprite,
                                    starSourceX, this.stars[i].sourceY, starSize, starSize,
                                    Math.round(this.stars[i].x), this.stars[i].y,
                                    NightMode.config.STAR_SIZE, NightMode.config.STAR_SIZE);
                            }
                        }

                        // Moon.
                        this.canvasCtx.drawImage(Runner.imageSprite, moonSourceX,
                            this.spritePos.y, moonSourceWidth, moonSourceHeight,
                            Math.round(this.xPos), this.yPos,
                            moonOutputWidth, NightMode.config.HEIGHT);

                        this.canvasCtx.globalAlpha = 1;
                        this.canvasCtx.restore();
                    },

                    // Do star placement.
                    placeStars: function() {
                        var segmentSize = Math.round(this.containerWidth /
                            NightMode.config.NUM_STARS);

                        for (var i = 0; i < NightMode.config.NUM_STARS; i++) {
                            this.stars[i] = {};
                            this.stars[i].x = getRandomNum(segmentSize * i, segmentSize * (i + 1));
                            this.stars[i].y = getRandomNum(0, NightMode.config.STAR_MAX_Y);

                            if (IS_HIDPI) {
                                this.stars[i].sourceY = Runner.spriteDefinition.HDPI.STAR.y +
                                    NightMode.config.STAR_SIZE * 2 * i;
                            } else {
                                this.stars[i].sourceY = Runner.spriteDefinition.LDPI.STAR.y +
                                    NightMode.config.STAR_SIZE * i;
                            }
                        }
                    },

                    reset: function() {
                        this.currentPhase = 0;
                        this.opacity = 0;
                        this.update(false);
                    }

                };


                //******************************************************************************

                /**
                 * Horizon Line.
                 * Consists of two connecting lines. Randomly assigns a flat / bumpy horizon.
                 * @param {HTMLCanvasElement} canvas
                 * @param {Object} spritePos Horizon position in sprite.
                 * @constructor
                 */
                function HorizonLine(canvas, spritePos) {
                    this.spritePos = spritePos;
                    this.canvas = canvas;
                    this.canvasCtx = canvas.getContext('2d');
                    this.sourceDimensions = {};
                    this.dimensions = HorizonLine.dimensions;
                    this.sourceXPos = [this.spritePos.x, this.spritePos.x +
                        this.dimensions.WIDTH
                    ];
                    this.xPos = [];
                    this.yPos = 0;
                    this.bumpThreshold = 0.5;

                    this.setSourceDimensions();
                    this.draw();
                };


                /**
                 * Horizon line dimensions.
                 * @enum {number}
                 */
                HorizonLine.dimensions = {
                    WIDTH: 600,
                    HEIGHT: 12,
                    YPOS: 127
                };


                HorizonLine.prototype = {
                    /**
                     * Set the source dimensions of the horizon line.
                     */
                    setSourceDimensions: function() {

                        for (var dimension in HorizonLine.dimensions) {
                            if (IS_HIDPI) {
                                if (dimension != 'YPOS') {
                                    this.sourceDimensions[dimension] =
                                        HorizonLine.dimensions[dimension] * 2;
                                }
                            } else {
                                this.sourceDimensions[dimension] =
                                    HorizonLine.dimensions[dimension];
                            }
                            this.dimensions[dimension] = HorizonLine.dimensions[dimension];
                        }

                        this.xPos = [0, HorizonLine.dimensions.WIDTH];
                        this.yPos = HorizonLine.dimensions.YPOS;
                    },

                    /**
                     * Return the crop x position of a type.
                     */
                    getRandomType: function() {
                        return Math.random() > this.bumpThreshold ? this.dimensions.WIDTH : 0;
                    },

                    /**
                     * Draw the horizon line.
                     */
                    draw: function() {
                        this.canvasCtx.drawImage(Runner.imageSprite, this.sourceXPos[0],
                            this.spritePos.y,
                            this.sourceDimensions.WIDTH, this.sourceDimensions.HEIGHT,
                            this.xPos[0], this.yPos,
                            this.dimensions.WIDTH, this.dimensions.HEIGHT);

                        this.canvasCtx.drawImage(Runner.imageSprite, this.sourceXPos[1],
                            this.spritePos.y,
                            this.sourceDimensions.WIDTH, this.sourceDimensions.HEIGHT,
                            this.xPos[1], this.yPos,
                            this.dimensions.WIDTH, this.dimensions.HEIGHT);
                    },

                    /**
                     * Update the x position of an indivdual piece of the line.
                     * @param {number} pos Line position.
                     * @param {number} increment
                     */
                    updateXPos: function(pos, increment) {
                        var line1 = pos;
                        var line2 = pos == 0 ? 1 : 0;

                        this.xPos[line1] -= increment;
                        this.xPos[line2] = this.xPos[line1] + this.dimensions.WIDTH;

                        if (this.xPos[line1] <= -this.dimensions.WIDTH) {
                            this.xPos[line1] += this.dimensions.WIDTH * 2;
                            this.xPos[line2] = this.xPos[line1] - this.dimensions.WIDTH;
                            this.sourceXPos[line1] = this.getRandomType() + this.spritePos.x;
                        }
                    },

                    /**
                     * Update the horizon line.
                     * @param {number} deltaTime
                     * @param {number} speed
                     */
                    update: function(deltaTime, speed) {
                        var increment = Math.floor(speed * (FPS / 1000) * deltaTime);

                        if (this.xPos[0] <= 0) {
                            this.updateXPos(0, increment);
                        } else {
                            this.updateXPos(1, increment);
                        }
                        this.draw();
                    },

                    /**
                     * Reset horizon to the starting position.
                     */
                    reset: function() {
                        this.xPos[0] = 0;
                        this.xPos[1] = HorizonLine.dimensions.WIDTH;
                    }
                };


                //******************************************************************************

                /**
                 * Horizon background class.
                 * @param {HTMLCanvasElement} canvas
                 * @param {Object} spritePos Sprite positioning.
                 * @param {Object} dimensions Canvas dimensions.
                 * @param {number} gapCoefficient
                 * @constructor
                 */
                function Horizon(canvas, spritePos, dimensions, gapCoefficient) {
                    this.canvas = canvas;
                    this.canvasCtx = this.canvas.getContext('2d');
                    this.config = Horizon.config;
                    this.dimensions = dimensions;
                    this.gapCoefficient = gapCoefficient;
                    this.obstacles = [];
                    this.obstacleHistory = [];
                    this.horizonOffsets = [0, 0];
                    this.cloudFrequency = this.config.CLOUD_FREQUENCY;
                    this.spritePos = spritePos;
                    this.nightMode = null;

                    // Cloud
                    this.clouds = [];
                    this.cloudSpeed = this.config.BG_CLOUD_SPEED;

                    // Horizon
                    this.horizonLine = null;
                    this.init();
                };


                /**
                 * Horizon config.
                 * @enum {number}
                 */
                Horizon.config = {
                    BG_CLOUD_SPEED: 0.2,
                    BUMPY_THRESHOLD: .3,
                    CLOUD_FREQUENCY: .5,
                    HORIZON_HEIGHT: 16,
                    MAX_CLOUDS: 6
                };


                Horizon.prototype = {
                    /**
                     * Initialise the horizon. Just add the line and a cloud. No obstacles.
                     */
                    init: function() {
                        this.addCloud();
                        this.horizonLine = new HorizonLine(this.canvas, this.spritePos.HORIZON);
                        this.nightMode = new NightMode(this.canvas, this.spritePos.MOON,
                            this.dimensions.WIDTH);
                    },

                    /**
                     * @param {number} deltaTime
                     * @param {number} currentSpeed
                     * @param {boolean} updateObstacles Used as an override to prevent
                     *     the obstacles from being updated / added. This happens in the
                     *     ease in section.
                     * @param {boolean} showNightMode Night mode activated.
                     */
                    update: function(deltaTime, currentSpeed, updateObstacles, showNightMode) {
                        this.runningTime += deltaTime;
                        this.horizonLine.update(deltaTime, currentSpeed);
                        this.nightMode.update(showNightMode);
                        this.updateClouds(deltaTime, currentSpeed);

                        if (updateObstacles) {
                            this.updateObstacles(deltaTime, currentSpeed);
                        }
                    },

                    /**
                     * Update the cloud positions.
                     * @param {number} deltaTime
                     * @param {number} currentSpeed
                     */
                    updateClouds: function(deltaTime, speed) {
                        var cloudSpeed = this.cloudSpeed / 1000 * deltaTime * speed;
                        var numClouds = this.clouds.length;

                        if (numClouds) {
                            for (var i = numClouds - 1; i >= 0; i--) {
                                this.clouds[i].update(cloudSpeed);
                            }

                            var lastCloud = this.clouds[numClouds - 1];

                            // Check for adding a new cloud.
                            if (numClouds < this.config.MAX_CLOUDS &&
                                (this.dimensions.WIDTH - lastCloud.xPos) > lastCloud.cloudGap &&
                                this.cloudFrequency > Math.random()) {
                                this.addCloud();
                            }

                            // Remove expired clouds.
                            this.clouds = this.clouds.filter(function(obj) {
                                return !obj.remove;
                            });
                        } else {
                            this.addCloud();
                        }
                    },

                    /**
                     * Update the obstacle positions.
                     * @param {number} deltaTime
                     * @param {number} currentSpeed
                     */
                    updateObstacles: function(deltaTime, currentSpeed) {
                        // Obstacles, move to Horizon layer.
                        var updatedObstacles = this.obstacles.slice(0);

                        for (var i = 0; i < this.obstacles.length; i++) {
                            var obstacle = this.obstacles[i];
                            obstacle.update(deltaTime, currentSpeed);

                            // Clean up existing obstacles.
                            if (obstacle.remove) {
                                updatedObstacles.shift();
                            }
                        }
                        this.obstacles = updatedObstacles;

                        if (this.obstacles.length > 0) {
                            var lastObstacle = this.obstacles[this.obstacles.length - 1];

                            if (lastObstacle && !lastObstacle.followingObstacleCreated &&
                                lastObstacle.isVisible() &&
                                (lastObstacle.xPos + lastObstacle.width + lastObstacle.gap) <
                                this.dimensions.WIDTH) {
                                this.addNewObstacle(currentSpeed);
                                lastObstacle.followingObstacleCreated = true;
                            }
                        } else {
                            // Create new obstacles.
                            this.addNewObstacle(currentSpeed);
                        }
                    },

                    removeFirstObstacle: function() {
                        this.obstacles.shift();
                    },

                    /**
                     * Add a new obstacle.
                     * @param {number} currentSpeed
                     */
                    addNewObstacle: function(currentSpeed) {
                        var obstacleTypeIndex = getRandomNum(0, Obstacle.types.length - 1);
                        var obstacleType = Obstacle.types[obstacleTypeIndex];

                        // Check for multiples of the same type of obstacle.
                        // Also check obstacle is available at current speed.
                        if (this.duplicateObstacleCheck(obstacleType.type) ||
                            currentSpeed < obstacleType.minSpeed) {
                            this.addNewObstacle(currentSpeed);
                        } else {
                            var obstacleSpritePos = this.spritePos[obstacleType.type];

                            this.obstacles.push(new Obstacle(this.canvasCtx, obstacleType,
                                obstacleSpritePos, this.dimensions,
                                this.gapCoefficient, currentSpeed, obstacleType.width));

                            this.obstacleHistory.unshift(obstacleType.type);

                            if (this.obstacleHistory.length > 1) {
                                this.obstacleHistory.splice(Runner.config.MAX_OBSTACLE_DUPLICATION);
                            }
                        }
                    },

                    /**
                     * Returns whether the previous two obstacles are the same as the next one.
                     * Maximum duplication is set in config value MAX_OBSTACLE_DUPLICATION.
                     * @return {boolean}
                     */
                    duplicateObstacleCheck: function(nextObstacleType) {
                        var duplicateCount = 0;

                        for (var i = 0; i < this.obstacleHistory.length; i++) {
                            duplicateCount = this.obstacleHistory[i] == nextObstacleType ?
                                duplicateCount + 1 : 0;
                        }
                        return duplicateCount >= Runner.config.MAX_OBSTACLE_DUPLICATION;
                    },

                    /**
                     * Reset the horizon layer.
                     * Remove existing obstacles and reposition the horizon line.
                     */
                    reset: function() {
                        this.obstacles = [];
                        this.horizonLine.reset();
                        this.nightMode.reset();
                    },

                    /**
                     * Update the canvas width and scaling.
                     * @param {number} width Canvas width.
                     * @param {number} height Canvas height.
                     */
                    resize: function(width, height) {
                        this.canvas.width = width;
                        this.canvas.height = height;
                    },

                    /**
                     * Add a new cloud to the horizon.
                     */
                    addCloud: function() {
                        this.clouds.push(new Cloud(this.canvas, this.spritePos.CLOUD,
                            this.dimensions.WIDTH));
                    }
                };
            })();


        </script>
    </div>
`


var chessgame = `<form id="chessboardgameform" name="FF">
<center>
    <script>
        M = I = P = N = q = K = J = 0
        Bt = 1999
        Al = -Bt
        Ds = [10, -10]
        BE = 120
        G = []
        R = []
        KL = [3, 3]
        j = [0, 1, 5, 3, 3, 9, 63, 0]
        MV = [0, 0, [1, 10],
            [21, 19, 12, 8],
            [11, 9],
            [1, 10, 11, 9],
            [1, 10, 11, 9], 0
        ]
        for (z = 0; z < 8;) {
            j[z + 8] = j[z] <<= 4
            m = MV[z++]
            if (m) {
                s = m.length
                for (x = 0; x < s;) {
                    m[s + x] = -m[x++]
                }
            }
        }
        x = 'g00000000g'
        y = 'gggggggggg'
        b = y + y + "g23456432gg11111111g" + x + x + x + x + "g99999999ggABCDECBAg" + y + y
        w = x + x + x + "000111100000123321000123553210"
        a = '000012346900'
        Y = []
        PY = []
        bY = []
        for (y = 0; y < 12; y++) {
            for (x = 0; x < 10; x++) {
                z = (y * 10) + x
                PY[z] = parseInt(a.charAt(y))
                bY[z] = parseInt(w.charAt((z < 60) ? z : 119 - z), 35) & 7
                R[z] = parseInt(b.charAt(z), 35)
            }
        }
        R[BE] = 0
        d = document
        cp = new Function('a', 'b', 'return b[0]-a[0]')

        function Z(c, U, C, s, e, A, B, K) {
            var z = -1,
                C = -C,
                V = 8 - U,
                b = Al,
                r = R,
                S, E = r[e],
                g, d
            if (C < -400) return [C, s, e]
            r[e] = S = r[s]
            r[s] = 0
            if (S) G[V][G[V].length] = [S, e]
            if (S - U == 1 && r[e + Ds[U >> 3]] > 15) {
                r[e] += 4
            }
            if (S - U == 6 && (s - e == 2 || e - s == 2)) {
                g = s - 4 + (s < e) * 7
                d = (s + e) >> 1
                r[g] = 0
                r[d] = U + 2
            }
            var L = Pz(U, K, C),
                N = L.length,
                n
            if (N) {
                if (c) {
                    L.sort(cp)
                    c--
                    var i = L[0],
                        j = i[1],
                        k = i[2],
                        t
                    b = -Z(c, V, i[0], j, k, -B, -A, i[3])[0]
                    for (z = 1; z < N; z++) {
                        if (b > A) A = b
                        n = L[z]
                        t = -Z(c, V, n[0], n[1], n[2], -A - 1, -A, n[3])[0]
                        if ((t > A) && (t < B)) t = -Z(c, V, n[0], n[1], n[2], -B, -t, n[3])[0]
                        if (t > b) {
                            b = t
                            j = n[1]
                            k = n[2]
                            if (t > A) A = t
                            if (b > B) break
                        }
                    }
                } else {
                    b = Al
                    while (--N && B > b) {
                        if (L[N][0] > b) {
                            b = L[N][0]
                        }
                    }
                }
            } else {
                J = c + 1
            }
            if (g) {
                r[g] = U + 2
                r[d] = 0
            }
            r[s] = S
            r[e] = E
            G[V].length--
                return [b, j, k]
        }

        function Sf(c, U, s, e, K) {
            var E = R[e],
                S = R[e] = R[s]
            R[s] = 0
            H()
            U = Z(c, U, 0, BE, BE, Al, Bt, K)
            R[s] = S
            R[e] = E
            return U[0]
        }

        function mv(s, e, b) {
            var E = R[e],
                S = R[s],
                a = S & 7,
                u = M >> 3,
                c = 0,
                t = 0,
                z = 0,
                p
            if (!M) {
                H()
                p = Pz(M, K, 0)
                for (; z < p.length; z++) {
                    t = t || (s == p[z][1] && e == p[z][2])
                }
                if (!t) return 0
                if (Sf(0, 8 - M, s, e, K) > 400) return 0
            }
            if (Sf(0, M, s, e, K) > 400) c = 1
            var x = s % 10,
                g = e - s,
                D = Ds[u],
                t = e % 10,
                n = 1 + (N >> 1)
            if (Sf(1, 8 - M, s, e, K) < -400) J = c + 1
            if ((E & 7) == 6) {
                J = 2;
                return 0
            }
            K = 0
            if (a == 1) {
                if (R[e + D] > 15) R[s] += 4 - b
                if (g == 2 * D && (R[e - 1] & 1 || R[e + 1] & 1)) K = s + D
                if (!E && g % 10) Sh(e, e - D)
            }
            if (s == 21 + u * 70 || s == 28 + u * 70) KL[u] &= (x < 5) + 1
            if (e == 21 + u * 70 || e == 28 + u * 70) KL[!u] &= (x < 5) + 1
            if (a == 6) {
                if (g * g == 4) Sh(s - 4 + (s < e) * 7, s + g / 2)
                KL[u] = 0
            }
            Sh(s, e)
            H()
            N++
            M = 8 - M
            return 1
        }

        function H() {
            var z = 99,
                Q
            s0 = (N < 32) ? 4 - (N >> 3) : (N > 64)
            G[0] = []
            G[8] = []
            kY = []
            pY = [
                [],
                []
            ]
            for (; z > 20; z--) {
                a = R[z]
                if (a & 7) G[a & 8][G[a & 8].length] = [a, z]
                Y[z] = bY[z] * s0
                kY[z] = (N > 40) || (10 - 2 * bY[z]) * s0
                Q = pY[1][119 - z] = pY[0][z] = PY[z]
                if (N < 7 && z > 40) {
                    pY[0][z] = pY[1][119 - z] = Q + (Math.random() * Y[z]) | 1
                    Y[24] = Y[94] = 29
                }
            }
        }

        function Pz(U, K, b) {
            var W, X, h, E, a, v, n, k = -1,
                u = U >> 3,
                V = U ^ 8,
                D = Ds[u],
                w = [],
                m, T, p = pY[u],
                H, d = KL[u],
                z, c, g, e = G[U],
                f = e.length,
                B = R,
                J = j
            for (z = 0; z < f; z++) {
                W = e[z][1]
                a = B[W]
                if (e[z][0] == a) {
                    a &= 7
                    if (a > 1) {
                        c = a == 6
                        H = c ? kY : Y
                        T = b - H[W]
                        n = MV[a]
                        if (a == 3 || c) {
                            for (v = 0; v < 8;) {
                                X = W + n[v++]
                                E = B[X]
                                if (!E || (E & 24) == V) {
                                    w[++k] = [T + J[E] + H[X], W, X]
                                }
                            }
                            if (c && d) {
                                if (d & 1 && !(B[W - 1] + B[W - 2] + B[W - 3]) && CH(W - 2, V, D, -1)) w[++k] = [T + 11, W, W - 2]
                                if (d & 2 && !(B[W + 1] + B[W + 2]) && CH(W, V, D, 1)) w[++k] = [T + 12, W, W + 2]
                            }
                        } else {
                            g = n.length
                            for (v = 0; v < g;) {
                                E = 0
                                m = n[v++]
                                X = W
                                while (!E) {
                                    X += m
                                    E = B[X]
                                    if (!E || (E & 24) == V) {
                                        w[++k] = [T + J[E] + H[X], W, X]
                                    }
                                }
                            }
                        }
                    } else {
                        T = b - p[W]
                        X = W + D
                        if (!B[X]) {
                            w[++k] = [T + p[X], W, X]
                            if (!p[W] && (!B[X + D])) {
                                w[++k] = [T + p[X + D], W, X + D, X]
                            }
                        }
                        if (K && (K == X + 1 || K == X - 1)) w[++k] = [T + p[X], W, K]
                        for (h = X - 1; h < X + 2; h += 2) {
                            E = B[h] + U
                            if (E & 7 && E & 8) {
                                w[++k] = [T + J[E] + p[h], W, h]
                            }
                        }
                    }
                }
            }
            return w
        }

        function CH(W, V, D, T) {
            var X, E, x, m, S = W + 3,
                a = D + 2,
                k = MV[3],
                B = R
            for (; W < S; W++) {
                for (m = D - 2; ++m < a;) {
                    E = B[W + m]
                    if (E && (E & 8) == V && ((E & 8) == 1 || (E & 7) == 6)) return 0
                    E = 0
                    X = W
                    while (!E) {
                        X += m
                        E = B[X]
                        if ((E == V + 2 + (m != D) * 2) || E == V + 5) return 0
                    }
                }
                for (z = 0; z < 8;)
                    if (B[W + k[z++]] - V == 3) return 0
            }
            E = 0
            W -= 3
            while (!E) {
                W -= T
                E = B[W]
                if (E == V + 2 || E == V + 5) return 0
            }
            return 1
        }

        function B(Q) {
            var a = R[Q]
            if (J) return
            if (q == Q && I) {
                O(q, I, 1)
                I = 0
                return
            }
            if (a && M == (a & 8)) {
                if (I) O(q, I, 1)
                I = a
                q = Q
                O(q, 0, 1)
                return
            }
            if (I) {
                if (mv(q, Q, d.FF.h.selectedIndex, y)) {
                    I = 0
                    if (!J) {
                        var t = Z(2, M, 0, BE, BE, Al, Bt, K)
                        mv(t[1], t[2], 0)
                    }
                }
            }
        }

        function Sh(s, e) {
            var a = R[s]
            R[e] = a
            R[s] = 0
            O(s, 0, 1)
            O(e, a, 1)
        }

        function Rf(a) {
            P = a
            for (var z = 0; z < BE; z++)
                if (R[z] < 16) O(z, R[z], 1)
        }

        function O(x, y, z) {
            if (z) x = "i" + (x)
            d.getElementById(x).innerHTML = y ? "&#98" + [0, 17, 14, 16, 15, 13, 12, 0, 0, 23, 20, 22, 21, 19, 18][y] + ";" : "&nbsp;"
        }
        h = '<table cellpadding=4>';

    </script>
    <a class="close" onclick="javascript:jQuery('#chessboardgame').html('');oc();"><u>close</u></a><select name="h" style="display: none;"><option selected>Q<option>B<option>kn<option>R</select></center>
</form></div>`


const cssInject = `<style type="text/css">
#e_eggwrapper *:not(input) {
    box-sizing: border-box;
    cursor: default;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

#e_eggwrapper @font-face {
    font-family: 'Courier Prime', monospace;
}

#e_eggwrapper .box {
    border: 3px solid #FFC61A;
    background-color: black;
    border-radius: 5px;
    overflow: hidden;
}

#e_eggwrapper {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #2d1d04;
    min-width: 870px;
    margin: 0;
    color: #714d0d;
    z-index: 999999;
}

#e_eggwrapper #console {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: 45px 60px 45px 54px;
    color: #B78116;
}

#e_eggwrapper #console_primary {
    position: absolute;
    top: 60px;
    bottom: 60px;
    left: 80px;
    right: 80px;
    line-height: 20px;
    font-size: 18px;
    overflow: hidden;
    word-wrap: break-word;
    z-index: 3;
}

#e_eggwrapper #console_primary_content {
    opacity: 0.8;
    white-space: pre-wrap;
    position: absolute;
    overflow: hidden;
    bottom: 0;
    left: 0;
    right: 0;
    min-height: 100%;
    font-family: 'Courier Prime', monospace;
    color: #B78116;
}

#e_eggwrapper #console_primary_content>a {
    cursor: pointer;
    text-decoration: none;
    color: #E0981D;
}


#e_eggwrapper #console_primary_content>a:hover {
    text-decoration: underline;
}

#e_eggwrapper #logo {
    position: absolute;
    right: 95px;
    top: 30px;
    width: 185px;
    height: 185px;
    background-color: #B5750E;
}

#e_eggwrapper #logofirst {
    position: absolute;
    padding: 15px;
    top: 0;
    left: 0;
    height: 185px;
    width: 185px;
    z-index: 4;
}

#e_eggwrapper #logosecond {
    position: absolute;
    padding: 15px;
    bottom: 0;
    left: 0;
    height: 185px;
    width: 185px;
    z-index: 4;
    background-color: #20140a;
}

#e_eggwrapper #logo img:not(.one) {
    position: absolute;
    left: 15px;
    top: 15px;
    right: 15px;
    bottom: 15px;
    height: 150px;
    width: 150px;
}

#e_eggwrapper #data {
    position: absolute;
    right: 295px;
    top: 30px;
    width: 95px;
    height: 185px;
    padding: 5px;
    overflow: hidden;
    background-color: #B5750E;
    line-height: 40px;
    text-align: center;
    white-space: nowrap;
    font-family: 'Courier Prime', monospace;
    color: #FFC61A;
    font-size: 35px;
    display: none;
}

#e_eggwrapper #systems {
    position: absolute;
    right: 405px;
    top: 30px;
    width: 370px;
    height: 185px;
    background-color: #B5750E;
    font-size: 0;
    overflow: hidden;
    padding: 0 7px;
    display: none;
}

#e_eggwrapper #overlay {
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
}

#e_eggwrapper #overlay2 {
    z-index: 2;
    position: fixed;
    left: 0;
    right: 0;
    top: -200%;
    width: 100%;
    height: 300%;
    -webkit-animation: overlay2 2s linear infinite;
    -moz-animation: overlay2 2s linear infinite;
    animation: overlay2 2s linear infinite;
}

#e_eggwrapper #forcelinebreak {
    display: block;
    width: 100%;
    height: 125px;
    float: right;
}

@media (min-width:1200px) {
    #e_eggwrapper #forcelinebreak {
        width: 250px;
    }
}

#e_eggwrapper .column {
    float: right;
    display: inline-block;
    width: 14px;
    margin: 0 7px;
    -webkit-transform: translate3d(0, 0, 0);
}

#e_eggwrapper .column.up {
    -webkit-animation: moveBitsUp 4s linear infinite;
    -moz-animation: moveBitsUp 4s linear infinite;
    animation: moveBitsUp 4s linear infinite;
}

#e_eggwrapper .column.down {
    -webkit-animation: moveBitsDown 4s linear infinite;
    -moz-animation: moveBitsDown 4s linear infinite;
    animation: moveBitsDown 4s linear infinite;
}

#e_eggwrapper .column>div {
    height: 6px;
    width: 14px;
    margin-bottom: 6px;
}

#e_eggwrapper .column>.zero {
    background-color: transparent;
}

#e_eggwrapper .column>.one {
    background-color: orange;
}

@-moz-keyframes overlay2 {
    0% {
        top: -200%;
    }
    100% {
        top: 0%;
    }
}

@-webkit-keyframes overlay2 {
    0% {
        top: -200%;
    }
    100% {
        top: 0%;
    }
}

@keyframes overlay2 {
    0% {
        top: -200%;
    }
    100% {
        top: 0%;
    }
}

@-moz-keyframes moveBitsUp {
    0% {
        -moz-transform: translateY(-25%);
    }
    100% {
        -moz-transform: translateY(-50%);
    }
}

@-webkit-keyframes moveBitsUp {
    0% {
        -webkit-transform: translateY(-25%);
    }
    100% {
        -webkit-transform: translateY(-50%);
    }
}

@keyframes moveBitsUp {
    0% {
        transform: translateY(-25%);
    }
    100% {
        transform: translateY(-50%);
    }
}

@-webkit-keyframes moveBitsDown {
    0% {
        -webkit-transform: translateY(-25%);
    }
    100% {
        -webkit-transform: translateY(0);
    }
}

@-moz-keyframes moveBitsDown {
    0% {
        -moz-transform: translateY(-25%);
    }
    100% {
        -moz-transform: translateY(0);
    }
}

@keyframes moveBitsDown {
    0% {
        transform: translateY(-25%);
    }
    100% {
        transform: translateY(0);
    }
}

#e_eggwrapper #userinputworkaround {
    position: fixed;
    left: -1000px;
    top: -1000px;
    z-index: 200;
    opacity: 0;
}

#e_eggwrapper #logowrapper {
    position: absolute;
    width: 90%;
    height: 90%;
    left: 5%;
    top: 5%;
    z-index: 5;
}

#e_eggwrapper .transition {
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}

#e_eggwrapper #logosecond:hover+#logofirst>#logowrapper,
#e_eggwrapper #logofirst:hover>#logowrapper {
    width: 50%;
    height: 50%;
    left: 25%;
    top: 25%;
}

#e_eggwrapper #logosecond:hover+#logofirst>#logowrapper>.one,
#e_eggwrapper #logofirst:hover>#logowrapper>.one {
    width: 35%;
}

#e_eggwrapper #logo:hover #logosecondcontent {
    bottom: 0;
}

#e_eggwrapper #logosecondcontent {
    position: absolute;
    bottom: -185px;
    left: 0;
    width: 185px;
    height: 185px;
}

#e_eggwrapper #logosecondcontent>img {
    width: 100%;
    height: 100%;
}

#e_eggwrapper .one {
    width: 45%;
    position: absolute;
}

#e_eggwrapper #one {
    transform: rotate(0deg);
    left: 3.58%;
    top: 5.37%;
}

#e_eggwrapper #two {
    transform: rotate(45deg);
    left: 32.85%;
    top: -1.14%;
}

#e_eggwrapper #three {
    transform: rotate(90deg);
    left: 58.05%;
    top: 14.31%;
}

#e_eggwrapper #four {
    transform: rotate(135deg);
    left: 64.39%;
    top: 43.58%;
}

#e_eggwrapper #five {
    transform: rotate(180deg);
    left: 48.13%;
    top: 68.29%;
}

#e_eggwrapper #six {
    transform: rotate(225deg);
    left: 19.84%;
    top: 74.8%;
}

#e_eggwrapper #seven {
    transform: rotate(270deg);
    left: -4.88%;
    top: 58.54%;
}

#e_eggwrapper #eight {
    transform: rotate(315deg);
    left: -11.87%;
    top: 30.08%;
}

#chessboardgame a {
    display: block;
    height: 45px;
    width: 45px;
    text-decoration: none;
    font: 40px "Arial Unicode MS";
    color: black;
}

#chessboardgame a.close {
    color: #B78116;
    font-size: 16px;
    font-family: 'Courier Prime', monospace;
    opacity: 100%;
}

#chessboardgame {
    display: none;
    z-index: 999999;
    position: absolute;
    bottom: 55px;
    left: 65px; 
}

#chessboardgame table {
    opacity: 50%;
}
</style>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap" rel="stylesheet">
`;

const bodyInject = `<div id="e_eggwrapper">
<div id="console" class="box">
    <div id="console_primary">
        <div id="console_primary_content">
        </div>
    </div>
    <input type="text" id="userinputworkaround" autofocus autocomplete="off">
</div>
<div id="chessboardgame" style="display:none"></div>
<div id="logo" class="box transition">
    <div id="logosecond">
        <div id="logosecondcontent" class="transition">

        </div>
    </div>
    <div id="logofirst">
        <div id="logowrapper" class="transition">
            <img src="images/one.png" class="transition one" id="one">
            <img src="images/one.png" class="transition one" id="two">
            <img src="images/one.png" class="transition one" id="three">
            <img src="images/one.png" class="transition one" id="four">
            <img src="images/one.png" class="transition one" id="five">
            <img src="images/one.png" class="transition one" id="six">
            <img src="images/one.png" class="transition one" id="seven">
            <img src="images/one.png" class="transition one" id="eight">
        </div>
    </div>
</div>
<div id="data" class="box">
    <span id="temperature">0°C</span>
    <br>
    <span id="humidity">0 %</span>
    <br>
    <span id="dewpoint">0°C</span>
    <br>
    <span id="whatever">

    </span>
</div>
<div id="systems" class="box">
</div>
<img id="overlay" src="data:image/png;base64,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">



<img id="overlay2" src="data:image/png;base64,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">
</div>
`;



const imgInject = "data:image/png;base64,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";
