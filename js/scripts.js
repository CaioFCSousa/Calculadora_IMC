const form = document.getElementById('form');





form.addEventListener("submit",function(event){
    event.preventDefault();
    

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const imc = (weight/(height*height)).toFixed(2)


    if(!isNaN(imc)){
        const value = document.getElementById("value")
        let descrition = ""

        value.classList.add('attention');
        document.getElementById("infos").classList.remove("hidden")

        if(imc <18.5){
            descrition = "Cuidado!Voce esta abaixo do peso"
        }else if(imc >=18.5 && imc <=25){
            descrition = "Você está no peso ideal!"
            value.classList.remove("attention")
            value.classList.add("normal")
        }else if(imc >25 && imc <=30){
            descrition = "Cuidado!Voce esta com sobrepeso"
        } else if (bmi > 30 && imc <= 35) {
            descrition = "Cuidado! Você está com obesidade moderada!";
        }else if (bmi > 35 && imc <= 40) {
            descrition = "Cuidado! Você está com obesidade severa!";
        }

        else {
            descrition = "Cuidado! Você está com obesidade morbida!";
        }
        value.textContent = imc.replace('.', ',');
        document.getElementById('description').textContent = descrition;
    }
    form.addEventListener('keypress', function(event) {
        if (event.key === 'press') {
            document.getElementById('#calculate').click();
        }
    });
})