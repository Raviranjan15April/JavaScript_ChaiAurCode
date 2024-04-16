
const selectForm = document.querySelector("form");
selectForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const givenHeight = parseInt(document.querySelector("#height").value);
    const givenWeight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector("#result");
    console.log(result);

    console.log("givenHeight", givenHeight,     "givenWeight", givenWeight) 

    if( givenHeight === "" || givenHeight <= 0 || isNaN(givenHeight)){
     result.innerHTML = `Given Height is not Valid ${givenHeight}`;
    } else if( givenWeight === "" || givenWeight <= 0 || isNaN(givenWeight)){
        result.innerHTML = `Given Weight is not Valid ${givenWeight}`;
    } else{
    const resultValue = (givenWeight/((givenHeight * givenHeight)/10000)).toFixed(2);
        if( resultValue <= 18.6){
            result.innerHTML= `<span> Your BMI is ${resultValue} According to BMI Guide that is Under Weight <span>`
        } else if( resultValue > 18.6 && resultValue <= 24.9){
            result.innerHTML= `<span> Your BMI is ${resultValue} According to BMI Guide that is Normal Range <span>`
        } else {
            result.innerHTML= `<span> Your BMI is ${resultValue} According to BMI Guide that is Overweight <span>`
        }
   
    }
    console.log("==== end of function =");
})
console.log(selectForm);