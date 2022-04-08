const cssInject = `<style type="text/css">
*:not(input) {
    box-sizing: border-box;
    cursor: default;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

@font-face {
    font-family: Aura;
    src: url('../fonts/Aura.ttf');
}

.box {
    border: 3px solid #FFC61A;
    border-radius: 5px;
    overflow: hidden;
}

body {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #2d1d04;
    min-width: 870px;
    margin: 0;
}

#console {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: 45px 60px 45px 54px;
    color: #B78116;
}

#console_primary {
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

#console_primary_content {
    opacity: 0.8;
    white-space: pre-wrap;
    position: absolute;
    overflow: hidden;
    bottom: 0;
    left: 0;
    right: 0;
    min-height: 100%;
    font-family: Aura, monospace;
    color: #B78116;
}

#console_primary_content>a {
    cursor: pointer;
    text-decoration: none;
    color: #E0981D;
}

#console_primary_content>a:hover {
    text-decoration: underline;
}

#logo {
    position: absolute;
    right: 95px;
    top: 30px;
    width: 185px;
    height: 185px;
    background-color: #B5750E;
}

#logofirst {
    position: absolute;
    padding: 15px;
    top: 0;
    left: 0;
    height: 185px;
    width: 185px;
    z-index: 4;
}

#logosecond {
    position: absolute;
    padding: 15px;
    bottom: 0;
    left: 0;
    height: 185px;
    width: 185px;
    z-index: 4;
}

#logo img:not(.one) {
    position: absolute;
    left: 15px;
    top: 15px;
    right: 15px;
    bottom: 15px;
    height: 150px;
    width: 150px;
}

#data {
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
    font-family: Aura, monospace;
    color: #FFC61A;
    font-size: 35px;
    display: none;
}

#systems {
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

#overlay {
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
}

#overlay2 {
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

#forcelinebreak {
    display: block;
    width: 100%;
    height: 125px;
    float: right;
}

@media (min-width:1200px) {
    #forcelinebreak {
        width: 650px;
    }
}

.column {
    float: right;
    display: inline-block;
    width: 14px;
    margin: 0 7px;
    -webkit-transform: translate3d(0, 0, 0);
}

.column.up {
    -webkit-animation: moveBitsUp 4s linear infinite;
    -moz-animation: moveBitsUp 4s linear infinite;
    animation: moveBitsUp 4s linear infinite;
}

.column.down {
    -webkit-animation: moveBitsDown 4s linear infinite;
    -moz-animation: moveBitsDown 4s linear infinite;
    animation: moveBitsDown 4s linear infinite;
}

.column>div {
    height: 6px;
    width: 14px;
    margin-bottom: 6px;
}

.column>.zero {
    background-color: transparent;
}

.column>.one {
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

#userinputworkaround {
    position: fixed;
    left: -1000px;
    top: -1000px;
    z-index: 200;
    opacity: 0;
}

#logowrapper {
    position: absolute;
    width: 90%;
    height: 90%;
    left: 5%;
    top: 5%;
    z-index: 5;
}

.transition {
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}

#logosecond:hover+#logofirst>#logowrapper,
#logofirst:hover>#logowrapper {
    width: 50%;
    height: 50%;
    left: 25%;
    top: 25%;
}

#logosecond:hover+#logofirst>#logowrapper>.one,
#logofirst:hover>#logowrapper>.one {
    width: 35%;
}

#logo:hover #logosecondcontent {
    bottom: 0;
}

#logosecondcontent {
    position: absolute;
    bottom: -185px;
    left: 0;
    width: 185px;
    height: 185px;
}

#logosecondcontent>img {
    width: 100%;
    height: 100%;
}

.one {
    width: 45%;
    position: absolute;
}

#one {
    transform: rotate(0deg);
    left: 3.58%;
    top: 5.37%;
}

#two {
    transform: rotate(45deg);
    left: 32.85%;
    top: -1.14%;
}

#three {
    transform: rotate(90deg);
    left: 58.05%;
    top: 14.31%;
}

#four {
    transform: rotate(135deg);
    left: 64.39%;
    top: 43.58%;
}

#five {
    transform: rotate(180deg);
    left: 48.13%;
    top: 68.29%;
}

#six {
    transform: rotate(225deg);
    left: 19.84%;
    top: 74.8%;
}

#seven {
    transform: rotate(270deg);
    left: -4.88%;
    top: 58.54%;
}

#eight {
    transform: rotate(315deg);
    left: -11.87%;
    top: 30.08%;
}</style>
`;

const bodyInject = `<div id="wrapper">
<div id="console" class="box">
    <div id="console_primary">
        <div id="console_primary_content">
        </div>
    </div>
    <input type="text" id="userinputworkaround" autofocus autocomplete="off">
</div>
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
</div>`;

$(cssInject).appendTo($('head'));
$(bodyInject).appendTo($('body'));

$(function() {
    updateBlocks();

    //IN PREPARATION FOR A LIST OF THE RUNNING SYSTEMS
    window.systems = [
        ["Courage", ""],
        ["is", ""],
        ["Not", ""],
        ["the", ""],
        ["Abscence", ""],
        ["of", ""],
        ["Fear", ""],
        ["A", ""],
        ["Trusted", ""],
        ["Friend", ""],
        ["in", ""],
        ["Science", ""],
    ];

    let systemsdevices = "";
    let i = 0;
    while (i < window.systems.length) {
        //ONLY TILL I HAVE THE SYSTEM STATS
        direction = "up";
        flo = "right";
        if (i < 6) {
            direction = "down";
            flo = "left";
        }
        systemsdevices += '<div id="' + window.systems[i][0] + '" class="column ' + direction + '" style="float:' + flo + ';">';
        //END FILLER

        let bittybits = stringToBits(window.systems[i][0]);
        //systemsdevices+='<div id="'+window.systems[i][0]+'" class="column" style="float:'+flo+';">';
        let bits = "";
        let j = 0;
        while (j < bittybits.length) {
            if (bittybits[j] == "1") {
                bits += '<div class="one"></div>';
            } else {
                bits += '<div class="zero"></div>';
            }
            j++;
        }
        systemsdevices += bits + bits + bits + bits + '</div>';
        i++;
    }
    $("#systems").html(systemsdevices);


    window.ctrlDown = false;

    $(document).keydown(function(e) {
        if (e.which == 17) ctrlDown = true;
    }).keyup(function(e) {
        if (e.which == 17) ctrlDown = false;
    });
});

setInterval(function() {
    updateBlocks();
}, 60000);

window.cursorstate = true;
setInterval(function() {
    if (window.cursorstate) {
        $("#cursorblinking").css("text-decoration", "none");
        window.cursorstate = false;
    } else {
        $("#cursorblinking").css("text-decoration", "underline");
        window.cursorstate = true;
    }
}, 350);

function updateSystems() {
    let i = 0;
    while (i < window.systems.length) {
        request = $.getJSON(window.systems[i][1]);
        request.done(function(data) {
            time = new Date().getTime() / 1000;
            difference = time - data[1];
            if (difference < 60) {
                $("#" + data[0]).removeClass("down");
                $("#" + data[0]).addClass("up");
            } else {
                $("#" + data[0]).removeClass("up");
                $("#" + data[0]).addClass("down");
            }
        });
        request.fail(function() {
            console.log("Failed to load systems status.");
        });
        i++;
    }
}

function updateBlocks() {
    $("#temperature").html(Math.round(Math.random() * 100) + "%");
    $("#humidity").html(Math.round(Math.random() * 100) + "%");
    $("#dewpoint").html(Math.round(Math.random() * 100) + "%");
}

function strip(html) {
    let tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
}

function stringToBits(input) {
    output = "";
    for (i = 0; i < input.length; i++) {
        output += input[i].charCodeAt(0).toString(2);
    }
    return output;
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

window.registeredcommands = [
    "help",
    "clear",
    "apply",
    "game",
    "global_thermonuclear_warfare",
    "exit",
    "credits",
    "USA",
    "Russia",
    "opensource"
]

window.shortcuts = {
    "h": "help",
    "?": "help",
    "c": "clear",
    "global_thermonuclear_warfare.exe": "global_thermonuclear_warfare",
    "global": "global_thermonuclear_warfare",
}

window.consolerunning = false;

window.userinput = "";

window.consolecontent = "GLaDOS v1.04 (c) 1981 Aperture Science, Inc & USask CoM ITU<br>\
";
window.consoleurl = "<br>Aperture@GLaDOS:~$ ";
window.commandhistory = [""];
window.currentcommand = 0;
$(function() {
    $(document).click(function() {
        $("#userinputworkaround").focus()
    });
    $("#userinputworkaround").focus();

    $(window).on("keydown", function(e) {

        if (window.ctrlDown && e.keyCode == 67) {
            abort();
            return;
        }
        if (window.consolerunning) {
            $("#userinputworkaround").val("");
            window.userinput = "";
            return;
        }
        setTimeout(function() {
            window.userinput = $("#userinputworkaround").val();
            if (e.which == 13) {
                e.preventDefault();
                e.stopPropagation();
                $("#userinputworkaround").val("");
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
    updateConsole();
});

function oneCommandBack() {
    window.currentcommand = window.currentcommand > 0 ? window.currentcommand - 1 : 0;
    window.userinput = window.commandhistory[window.currentcommand];
    $("#userinputworkaround").val(window.userinput);
}

function oneCommandForward() {
    window.currentcommand = window.currentcommand < window.commandhistory.length - 1 ? window.currentcommand + 1 : window.commandhistory.length - 1;
    window.userinput = window.commandhistory[window.currentcommand];
    $("#userinputworkaround").val(window.userinput);
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
        $("#console_primary_content").html("<div id=forcelinebreak></div>" + window.consolecontent + "<span id=userinput><span id=cursorblinking>&nbsp;</span></span>");
        $("#userinput > span").removeClass("mark");
        $("#userinput > span:last-child").addClass("mark");
    } else {
        $("#console_primary_content").html("<div id=forcelinebreak></div>" + window.consolecontent + window.consoleurl + "<div id=forcelinebreak></div><span id=userinput>" + spanify(window.userinput) + "<span id=cursorblinking>&nbsp;</span></span>");
        $("#userinput > span").removeClass("mark");
        $("#userinput > span:nth-child(" + (cursorpos + 1) + ")").addClass("mark");
    }
}

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

function print(str) {
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
        "This is your fault. I'm going to blame you. And all the cake is gone. You don't even care, do you?",
        "Remember, the Aperture Science Bring-your-Daughter-to-Work-Day is the perfect time to have her tested.",
        "I am worried this sailed right over your head. That is why I have to call you garbage now.",
        "I'm sorry, Dave, I'm afraid I can't do that.",
        "Unbelievable. You, &lt;subject name here&gt; must be the pride of &lt;subject hometown here&gt;.",
        "Look, you're wasting your time. And, believe me, you don't have a whole lot left to waste. What's your point, anyway?",
        "You've been wrong about every single thing you've ever done, including this thing. Where did your life go so wrong?",
        "Let's be honest. Neither one of us knows what that thing does. Just put it in the corner and I'll deal with it later.",
        'Well done. Here are the test results: You are a horrible person. I\'m serious, that\'s what it says: "A horrible person."',
        "It's just us talking, like regular people. We are in deep trouble.",
    ]
    error = errors[Math.floor(Math.random() * errors.length)];

    print("Error. ");
    println(error);
    oc();
}


window.startoffset = 2500;
window.buffer = false;
window.abort = function() {}

function help(argv) {
    if (typeof argv[0] === "undefined") {
        println("help or '?'...... This overview");
        println("clear........... Clear the console");
        println("apply........... It's always such a pleasure");
        println("game............ Shall we play a game?");
        // println("opensource...... ");
        println("credits......... Prints the credits");
        println("exit............ Exit");
        return;
    }

    switch (argv[0]) {
        case "help":
            println("Remember before when I was talking about smelly garbage standing around being useless? That was a metaphor. I was actually talking about you. And I'm sorry. You didn't react at the time so I was worried it sailed right over your head. That's why I had to call you garbage a second time just now.");
            break;
        default:
            throwerror();
            break;
    }
}

function opensource() {
    abort = function() {};
    println(' .');
    println();
}

function USA() {
    abort = function() {};
    println('USA wins.');
    println();
}

function Russia() {
    abort = function() {};
    println('Russia loses.');
    println();
}

function game() {
    abort = function() {};
    println("<br>");
    println("1. global_thermonuclear_warfare.exe");
    println();
}

function global_thermonuclear_warfare() {
    abort = function() {};
    println();
    cc();
    lines = [
        // [0, 0, ""],
        [0, 2035, "Oh wow, this is really happening. Ok then...<br>"],
        [2037, 935, "Select a target:"],
        [3160, 1, ""],
        [3174, 700, "- USA"],
        [3877, 700, "- Russia"],
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
        [202, 2935, "Forms FORM-29827281-12-2:"],
        [3237, 935, "Application Form"],
        [4160, 3000, "......"],
        [7174, 3000, ".........."],
        [12577, 8000, "Below is your form FORMS-EN-2873-FORM Unique Indentity Number (Plus Letters) (UIN(+L)): Please memorize your UIN(+L), as you may be required to recite it from memory as proof. The opening and closing braces are decorative and should not be memorized. Note that the character \"0\" is uniquely different than the character \"O\". When you are finished memorizing your case sensitive UIN(+L), please nod \"yes\" to proceed."],
        [21077, 4000, "............"],
        [25577, 9000, "Memorize this: >>> <span class=\"fade-out\">" + getRandomInt() + "000O0+" + getRandomletters() + " </span> <<<"]
    ];
    lineprint(lines);
    buff = setTimeout(function() {
        $('<style type="text/css">.fade-out { visibility:visible }</style>').appendTo($('head'));
    }, 25500);
    window.buffer.push(buff);

    buff = setTimeout(function() {
        oc();
        $('<style type="text/css">.fade-out { visibility:hidden }</style>').appendTo($('head'));
    }, 40000);
    window.buffer.push(buff);

}

function poem() {
    cc();
    lines = [
        [0, 0, ""],
        [2202, 1935, "Forms FORM-29827281-12-2:"],
        [4237, 1935, "Notice of Dismissal"],
        [8160, 1, ""],
        [8174, 1769, "Well here we are again"],
        [10577, 1968, "It's always such a pleasure"],
        [13179, 1402, "Remember when you tried"],
        [14647, 2103, "to fool me twice?"],
        [17851, 1801, "Oh how we laughed and laughed"],
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
        [68601, 0, ""],
        [68650, 0, "Severance Pa"],
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
        [135168, 701, "gone"]
    ];

    lineprint(lines);

    buff = setTimeout(function() {
        document.getElementById("wantyougone").pause();
        $("#wantyougone").prop("currentTime", 0);
        clearabort();
        oc();
    }, opentime + 2500);
    window.buffer.push(buff);

    buff = setTimeout(function() {
        // document.getElementById("wantyougone").play();
    }, window.startoffset);
    window.buffer.push(buff);

    abort = function() {
        for (id in window.buffer) {
            clearTimeout(window.buffer[id]);
            document.getElementById("wantyougone").pause();
            $("#wantyougone").prop("currentTime", 0);
            oc();
        }
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
    // window.close();
    print("Goodbye.");
    cc();
}

function credits() {
    clearabort();
    print("GLaDOS (Genetic Lifeform and Disk Operating System) is an artificial intelligence created by USask CoM ITU.");
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
                print(output);
            }, offset, text);
            window.buffer.push(buff);
            continue;
        }
        timeperchar = duration / (text.length + 1);
        for (i = 0; i < text.length; i++) {
            string = text[i];
            time = offset + (timeperchar * (i + 1));
            buff = setTimeout(function(string) {
                print(string);
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