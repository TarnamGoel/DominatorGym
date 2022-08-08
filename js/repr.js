

function Submit(){
    let weight=document.getElementById('inp_weight').value;
    let height=document.getElementById('inp_height').value;
    let bmi=weight/(height**2)
    if(bmi>18.3 && bmi<25){
        document.getElementById('output').innerHTML=`Hurray! You are fit. Your score is ${Math.round(bmi)}.\n Normal BMI score ranges from 18.5 to 25`;
    }else{
        document.getElementById('output').innerHTML=`Your BMI score is ${Math.round(bmi)}. Normal BMI score ranges from 18.3 to 25`
    }
}