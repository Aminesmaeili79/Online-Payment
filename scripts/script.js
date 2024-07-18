const cardNumberInput = document.querySelector('#card-no');
const cardNumberLabel = cardNumberInput.previousElementSibling;
const monthInput = document.querySelector('#month');
const yearInput = document.querySelector('#year');
const expBox = monthInput.parentElement;
const expLabel = expBox.previousElementSibling;
const cvvInput = document.querySelector('#cvv');
const cvvLabel = cvvInput.previousElementSibling;
const cardHolderInput = document.querySelector('#card-holder');
const cardHolderLabel = document.querySelector('#card-holder').previousElementSibling;

const focusSibling = function(target, direction, callback) {
  const nextTarget = target[direction];
  nextTarget && nextTarget.focus();
  callback && callback(nextTarget);
}

cardNumberInput.addEventListener('input', (event) => {
    const value = event.target.value.toString();
    // if we have a filled input we jump to the month input
    16 <= value.length && focusSibling(event.target, "nextElementSibling");
    event.stopImmediatePropagation();
    });

// input event only fires if there is space in the input for entry. 
// If an input of x length has x characters, keyboard press will not fire this input event.
monthInput.addEventListener('input', (event) => {

  const value = event.target.value.toString();
  // adds 0 to month user input like 9 -> 09
  if (value.length === 1 && value > 1) {
      event.target.value = "0" + value;
  }
  // bounds
  if (value === "00") {
      event.target.value = "01";
  } else if (value > 12) {
      event.target.value = "12";
  }
  // if we have a filled input we jump to the year input
  2 <= event.target.value.length && focusSibling(event.target, "nextElementSibling");
  event.stopImmediatePropagation();
});

yearInput.addEventListener('keydown', (event) => {
  // if the year is empty jump to the month input
  if (event.key === "Backspace" && event.target.selectionStart === 0) {
    focusSibling(event.target, "previousElementSibling");
    event.stopImmediatePropagation();
  }
});

cvvInput.addEventListener('input', (event) => {
    // if we have a filled input we jump to the submit button
    3 <= event.target.value.length && focusSibling(event.target, "nextElementSibling", (target) => {
        target.focus();
    });
    event.stopImmediatePropagation();
});

const inputMatchesPattern = function(e) {
    const { 
        value, 
        selectionStart, 
        selectionEnd, 
        pattern 
    } = e.target;
    
    const character = String.fromCharCode(e.which);
    const proposedEntry = value.slice(0, selectionStart) + character + value.slice(selectionEnd);
    const match = proposedEntry.match(pattern);
    
    return e.metaKey || // cmd/ctrl
        e.which <= 0 || // arrow keys
        e.which == 8 || // delete key
        match && match["0"] === match.input; // pattern regex isMatch - workaround for passing [0-9]* into RegExp
};
    
document.querySelectorAll('input[data-pattern-validate]').forEach(el => el.addEventListener('keypress', e => {
    if (!inputMatchesPattern(e)) {
        return e.preventDefault();
    }
}));

document.querySelector("#card-holder").addEventListener('keypress', (event) => {
    const character = String.fromCharCode(event.which);
    const pattern = /^[a-zA-Z\s]*$/;
    if (!pattern.test(character)) {
        event.preventDefault();
    }
});

document.querySelector("#cvv").addEventListener('keypress', (event) => {
    const character = String.fromCharCode(event.which);
    const pattern = /^[0-9]*$/;
    if (!pattern.test(character)) {
        event.preventDefault();
    }
});

document.querySelector("#card-no").addEventListener('keypress', (event) => {
    const character = String.fromCharCode(event.which);
    const pattern = /^[0-9]*$/;
    if (!pattern.test(character)) {
        event.preventDefault();
    }
});

document.querySelector("#submit").addEventListener('click', (event) => {
    event.preventDefault();
    if (cardNumberInput.value.length < 16 ) {
        cardNumberLabel.classList.add("error");
        cardNumberInput.classList.add("error");
    } else {
        cardNumberLabel.classList.remove("error");
        cardNumberInput.classList.remove("error");
    }
    if (cardHolderInput.value.length < 1) {
        cardHolderInput.classList.add("error");
        cardHolderLabel.classList.add("error");
    } else {
        cardHolderInput.classList.remove("error");
        cardHolderLabel.classList.remove("error");
    }
    if (monthInput.value.length < 2) {
        monthInput.classList.add("error");
        yearInput.classList.add("error");
        expBox.classList.add("error");
        expLabel.classList.add("error");
    } else {
        monthInput.classList.remove("error");
        yearInput.classList.remove("error");
        expBox.classList.remove("error");
        expLabel.classList.remove("error");
    }
    if (cvvInput.value.length < 3) {
        cvvInput.classList.add("error");
        cvvLabel.classList.add("error");
    } else {
        cvvInput.classList.remove("error");
        cvvLabel.classList.remove("error");
    }
    if (cardNumberInput.value.length === 16 && cardHolderInput.value.length > 0 && monthInput.value.length === 2 && cvvInput.value.length === 3) {
        alert("Payment Successful");
    }
});