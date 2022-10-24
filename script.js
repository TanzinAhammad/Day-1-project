//get the button dom
buttonDom = document.getElementById("submit_button");
//get the input dom
inputDom = document.getElementById("input");

//get the output dom
outputDom = document.getElementById("output");

/* add a listener to the button dom to show the value of input dom to the output dom when clicked 
and remove the current input field value */
buttonDom.addEventListener("click", () => {
  outputDom.innerText = inputDom.value;
  inputDom.value = "";
});
