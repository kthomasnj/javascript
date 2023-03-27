var zooAnimals = ["Bear", "Lion", "Cheetah", "Snake", "Bird"];
var count = localStorage.getItem("count");
var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#decrement");
var countEl = document.querySelector("#count");
var contactSubmitEl = document.querySelector("#contactSubmit");
var nameInput = document.querySelector("#name");
var emailInput = document.querySelector("#email");
var submissionResponseEl = document.querySelector("#response");
var tipEl = document.querySelector("#tip-percentage");
var totalEl = document.querySelector("#total");
var tipSubmitEl = document.querySelector("#tipSubmit");
var typefaceEl = document.querySelector('#typeface');
var clearEl = document.querySelector('#clear');
var h1El = document.querySelector('#h1');
var h2El = document.querySelector('#h2');
var h3El = document.querySelector('#h3');
var pEl = document.querySelector('#p');
var textAreaEl = document.querySelector('#textarea');
var elements = [h1El, h2El, h3El, pEl];
var typeface;
var myBigButton = document.querySelector("#big-button");
var imageContainer = document.querySelector(".img-container");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");
var msgDiv = document.querySelector("#msg");
var firstNameSpan = document.querySelector("#first-name");
var lastNameSpan = document.querySelector("#last-name");
var userEmailSpan = document.querySelector("#user-email");
var userPasswordSpan = document.querySelector("#user-password");
var firstName = document.querySelector("#firstName").value;
var lastName = document.querySelector("#lastName").value;
var signupEmail = document.querySelector("#signup-email").value;
var password = document.querySelector("#password").value;
var student = document.getElementById("student-names");
var grade = document.getElementById("grades");
var comment = document.getElementById("grade-msg");
var saveButton = document.getElementById("save");
var savedName = document.getElementById("saved-name");
var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");
var wordBlank = document.querySelector(".word-blanks");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var chosenWord = "";
var numBlanks = 0;
var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount;
var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var carousel = document.querySelector(".carouselbox");
var next = carousel.querySelector(".next");
var prev = carousel.querySelector(".prev");
var index = 0;
var currentImage;
var formEl = $('#pizza-form');
var firstNameEl = $('input[name="first-name"]');
var lastNameEl = $('input[name="last-name"]');
var emailEl = $('input[name="email"]');
var githubEl = $('input[name="github"]');

var images = [
  "https://picsum.photos/300/200",
  "https://picsum.photos/300/201",
  "https://picsum.photos/300/202",
  "https://picsum.photos/300/203"
];

carousel.style.backgroundImage = "url('https://picsum.photos/300/200')";

document.querySelector("#count").textContent = localStorage.getItem("count");

console.log(localStorage.getItem("count"))

function setCounterText() {
    countEl.textContent = count;
};

incrementEl.addEventListener("click", function () {
    console.log("increment button clicked");
    count++;
    setCounterText()
    localStorage.setItem("count", count);
});

decrementEl.addEventListener("click", function () {
    console.log("decrement button clicked");
    if (count !== 0) {
        count--;
        setCounterText()
        localStorage.setItem("count", count);
    }
});

for (var i = 0; i < zooAnimals.length; i++) {
    console.log(i + 1 + `) My animal is a`, zooAnimals[i]);
};

function parameterFunction(firstParam, secondParam) {
    console.log(firstParam);
    console.log(secondParam);
};

parameterFunction("I am the first parameter", "I am the second parameter");

contactSubmitEl.addEventListener("click", ()=> {
    preventDefault();
    var submitName = document.querySelector("#name").value;
    console.log(submitName);

    if (submitName && submitEmail) {
    } else {
        return console.log("Response is False.");
    }
});

function showResponse(myEvent) {
    myEvent.preventDefault();
    console.log(myEvent);

    submissionResponseEl.textContent = "Email Submitted";
};

function calculateTip(total, tipPercentage) {
    var roundedResult = (total * tipPercentage).toFixed(2);
    return roundedResult;
};

function calculateTotal(total, tipAmount) {
    return parseFloat(total) + parseFloat(tipAmount);
};

function addTip(event) {
    event.preventDefault();
    var tipPercentage = tipEl.value * .01;
    var total = totalEl.value;
    var tipAmount = calculateTip(total, tipPercentage);
    var newTotal = calculateTotal(tipAmount, total);
    document.querySelector("#tip-amount").textContent = tipAmount;
    document.querySelector("#new-total").textContent = newTotal.toFixed(2);
};

tipSubmitEl.addEventListener("click", addTip);

typefaceEl.addEventListener('change', function (event) {
    event.preventDefault();
    typeface = typefaceEl.value;
    document.querySelector('.typeface-container').style.fontFamily = typeface;
});

clearEl.addEventListener('click', function (event) {
    event.preventDefault();
    textAreaEl.value = '';

    for (var i = 0; i < elements.length; i++) {
        elements[i].textContent = '';
    }
});

textAreaEl.addEventListener('keydown', function (event) {
    h1El.textContent += event.key;
    h2El.textContent += event.key;
    h3El.textContent += event.key;
    pEl.textContent += event.key;
});

function keydownAction(event) {

    var keyPress = event.key;

    var keyCode = event.code;

    document.querySelector("#key").textContent = keyPress;
    document.querySelector("#code").textContent = keyCode;
    document.querySelector("#status").textContent = "KEYDOWN Event";
};

function keyupAction() {
    document.querySelector("#status").innerHTML = "KEYUP Event";
};

document.addEventListener("keydown", keydownAction);

document.addEventListener("keyup", keyupAction);


// Mouse Actions

myBigButton.addEventListener("click", function () {
    console.log("Big Button's been clicked!");
    document.querySelector("#mouse-response").textContent = "Big button has been clicked!"
    var fontColors = ["red", "black", "green", "yellow", "blue"];
    var myFontColor = fontColors[Math.floor(Math.random() * fontColors.length)];
    myBigButton.setAttribute("style", `color: ` + myFontColor + `;`);
});

myBigButton.addEventListener("mouseover", function () {
    var myFontSize = Math.floor(Math.random() * (100 - 20 + 1) + 20);
    document.querySelector("#mouse-response").textContent = "Mouse is over the big " + myFontSize + " size button!";
    myBigButton.setAttribute("style", "font-size: " + myFontSize + "px;");
    myBigButton.textContent = "BIG";
});

myBigButton.addEventListener("mouseleave", function () {
    var fontFamilies = ["Comic Sans MS", "Franklin Gothic Medium", "Impact", "Arial", "Brush Script MT"];
    var myFontFamily = fontFamilies[Math.floor(Math.random() * fontFamilies.length)];
    myBigButton.setAttribute("style", "font-family: " + myFontFamily + ";");
    document.querySelector("#mouse-response").textContent = "Font-Family = " + myFontFamily;
    myBigButton.textContent = "Button";
});


imageContainer.addEventListener("click", function (event) {
    var element = event.target;

    if (element.dataset.state === 'still') {
        element.setAttribute("data-state", "animate");
        element.setAttribute("src", element.dataset.animate);
    } else {
        element.setAttribute("data-state", "still");
        element.setAttribute("src", element.dataset.still);
    }
});

renderLastRegistered();

function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
}

function renderLastRegistered() {
    var storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
        return;
    }

    firstNameSpan.textContent = storedUser.firstName;
    lastNameSpan.textContent = storedUser.lastName;
    userEmailSpan.textContent = storedUser.email;
    userPasswordSpan.textContent = storedUser.password;
}

signUpButton.addEventListener("click", function (event) {
    event.preventDefault();

    var user = {
        firstName: document.querySelector("#firstName").value.trim(),
        lastName: document.querySelector("#lastName").value.trim(),
        email: document.querySelector("#signup-email").value.trim(),
        password: document.querySelector("#password").value.trim()
    };

    if (user.firstName === "") {
        displayMessage("error", "First Name cannot be blank");
    } else if (user.lastName === "") {
        displayMessage("error", "Last Name cannot be blank");
    } else if (user.email === "") {
        displayMessage("error", "Email cannot be blank");
    } else if (user.password === "") {
        displayMessage("error", "Password cannot be blank");
    } else {
        displayMessage("success", "Registered successfully");

        localStorage.setItem("user", JSON.stringify(user));
        renderLastRegistered();
    };
});

saveButton.addEventListener("click", function (event) {
    event.preventDefault();

    var studentGrade = {
        student: student.value,
        grade: grade.value,
        comment: comment.value.trim()
    };

    localStorage.setItem("studentGrade", JSON.stringify(studentGrade));
    renderMessage();

});

function renderMessage() {
    var lastGrade = JSON.parse(localStorage.getItem("studentGrade"));
    if (lastGrade !== null) {
        document.querySelector(".message").textContent = lastGrade.student +
            " received a/an " + lastGrade.grade + "Comments: " + lastGrade.comment
    }
}

var todos = [];

function renderTodos() {
    todoList.innerHTML = "";
    todoCountSpan.textContent = todos.length;

    for (var i = 0; i < todos.length; i++) {
        var todo = todos[i];

        var li = document.createElement("li");
        li.textContent = todo;
        li.setAttribute("data-index", i);

        var button = document.createElement("button");
        button.textContent = "Complete ✔️";

        li.appendChild(button);
        todoList.appendChild(li);
    }
}

function init() {
    var storedTodos = JSON.parse(localStorage.getItem("todos"));

    if (storedTodos !== null) {
        todos = storedTodos;
    }

    renderTodos();
}

function storeTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

todoForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var todoText = todoInput.value.trim();

    if (todoText === "") {
        return;
    }

    todos.push(todoText);
    todoInput.value = "";

    storeTodos();
    renderTodos();
});

todoList.addEventListener("click", function (event) {
    var element = event.target;

    if (element.matches("button") === true) {
        var index = element.parentElement.getAttribute("data-index");
        todos.splice(index, 1);

        storeTodos();
        renderTodos();
    }
});

init()

var lettersInChosenWord = [];
var blanksLetters = [];

var words = ["variable", "array", "modulus", "object", "function", "string", "boolean"];

function init() {
    getWins();
    getlosses();
}

function startGame() {
    isWin = false;
    timerCount = 10;
    startButton.disabled = true;
    renderBlanks()
    startTimer()
}

function winGame() {
    wordBlank.textContent = "YOU WON!!!🏆 ";
    winCounter++
    startButton.disabled = false;
    setWins()
}

function loseGame() {
    wordBlank.textContent = "GAME OVER";
    loseCounter++
    startButton.disabled = false;
    setLosses()
}

function startTimer() {
    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount >= 0) {
            if (isWin && timerCount > 0) {
                clearInterval(timer);
                winGame();
            }
        }
        if (timerCount === 0) {
            clearInterval(timer);
            loseGame();
        }
    }, 1000);
}

function renderBlanks() {
    chosenWord = words[Math.floor(Math.random() * words.length)];
    console.log(chosenWord);
    lettersInChosenWord = chosenWord.split("");
    numBlanks = lettersInChosenWord.length;
    blanksLetters = []
    for (var i = 0; i < numBlanks; i++) {
        blanksLetters.push("_");
    }
    wordBlank.textContent = blanksLetters.join(" ")
}

function setWins() {
    win.textContent = winCounter;
    localStorage.setItem("winCount", winCounter);
}

function setLosses() {
    lose.textContent = loseCounter;
    localStorage.setItem("loseCount", loseCounter);
}

function getWins() {
    var storedWins = localStorage.getItem("winCount");
    if (storedWins === null) {
        winCounter = 0;
    } else {
        winCounter = storedWins;
    }

    win.textContent = winCounter;
}

function getlosses() {
    var storedLosses = localStorage.getItem("loseCount");
    if (storedLosses === null) {
        loseCounter = 0;
    } else {
        loseCounter = storedLosses;
    }
    lose.textContent = loseCounter;
}

if (chosenWord === blanksLetters.join("")) {
    isWin = true;
}

function checkWin() {
    if (chosenWord === blanksLetters.join("")) {
        isWin = true;
    }
}

function checkLetters(letter) {
    var letterInWord = false;
    for (var i = 0; i < numBlanks; i++) {
        if (chosenWord[i] === letter) {
            letterInWord = true;
        }
    }
    if (letterInWord) {
        for (var j = 0; j < numBlanks; j++) {
            if (chosenWord[j] === letter) {
                blanksLetters[j] = letter;
            }
        }
        wordBlank.textContent = blanksLetters.join(" ");
    }
}

document.addEventListener("keydown", function (event) {
    if (timerCount === 0) {
        return;
    }
    var key = event.key.toLowerCase();
    var alphabetNumericCharacters = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");
    if (alphabetNumericCharacters.includes(key)) {
        var letterGuessed = event.key;
        checkLetters(letterGuessed)
        checkWin();
    }
});

startButton.addEventListener("click", startGame);

init();

var resetButton = document.querySelector(".reset-button");

function resetGame() {
    winCounter = 0;
    loseCounter = 0;
    setWins()
    setLosses()
}

resetButton.addEventListener("click", resetGame);

// Speed Reader

var message =
  'Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.';
var countdownWords = message.split(' ');

function countdown() {
  var timeLeft = 5;

  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + ' seconds remaining';
      timeLeft--;

    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      timerEl.textContent = '';
      clearInterval(timeInterval);
      displayMessage();
    }
  }, 1000);
}

function displayMessage() {
  var wordCount = 0;

  var msgInterval = setInterval(function () {
    if (countdownWords[wordCount] === undefined) {
      clearInterval(msgInterval);

    } else {
      mainEl.textContent = countdownWords[wordCount];
      wordCount++;
    }
  }, 1000);
}

countdown();

function navigate(direction) {
    index = index + direction;
    if (index < 0) { 
      index = images.length - 1; 
    } else if (index > images.length - 1) { 
      index = 0;
    }
    currentImage = images[index];
    carousel.style.backgroundImage = "url('" + currentImage + "')";
  }
  
  carousel.addEventListener("click", function() {
    window.location.href = images[index];
  });
  
  next.addEventListener("click", function(event) {
    event.stopPropagation();
  
    navigate(1);
  });
  
  prev.addEventListener("click", function(event) {
    event.stopPropagation();
  
    navigate(-1);
  });
  
  navigate(0);

  function handleFormSubmit(event) {
    event.preventDefault();
  
    console.log('First Name:', firstNameEl.val());
    console.log('Last Name:', lastNameEl.val());
    console.log('Email:', emailEl.val());
    console.log('GitHub:', githubEl.val());
  
    var checkedEl = $('input:checked');
    var selected = [];
  
    $.each(checkedEl, function () {
      selected.push($(this).val());
    });
    console.log('Toppings: ', selected.join(', '));
  
    $('input[type="text"]').val('');
    $('input[type="email"]').val('');
    $('input[type="checkbox"]').prop('checked', false);
  }
  
  formEl.on('submit', handleFormSubmit);