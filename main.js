
const outputHTML= document.getElementById("output")


//Creo l'array con tutti gli oggetti-membri
//MILESTONE 0
const team = [
    {
        Nome : "Wayne Barnett",
        Ruolo : "Founder & CEO",
        Foto : "wayne-barnett-founder-ceo.jpg"
    },
    {
        Nome : "Angela Caroll",
        Ruolo : "Chief Editor",
        Foto : "angela-caroll-chief-editor.jpg"
    },
    {
        Nome : "Walter Gordon",
        Ruolo : "Office Manager",
        Foto : "walter-gordon-office-manager.jpg"
    },
    {
        Nome : "Angela Lopez",
        Ruolo : "Social Media Manager",
        Foto : "angela-lopez-social-media-manager.jpg"
    },
    {
        Nome : "Scott Estrada",
        Ruolo : "Developer",
        Foto : "scott-estrada-developer.jpg"
    },
    {
        Nome : "Barbara Ramos",
        Ruolo : "Graphic Designer",
        Foto : "barbara-ramos-graphic-designer.jpg"
    }
]

//ciclo per ogni elemento dell'array tutte le chiavi e i relativi valori
//MILESTONE 1
for(let i=0; i<team.length; i++){
    for (let key in team[i]){
        console.log(`${key} : ${team[i][key]}`)
    }
    console.log("")
}

//MILESTONE 2
for(let i=0; i<team.length; i++){
    outputHTML.innerHTML+=stringaOut(team[i])
}


function stringaOut(object){
    let stampa = ""
    for (let key in object){
        stampa += key + " : " + object[key] + " - "
    }
    stampa += "<br>"
    console.log(stampa)
    return stampa
}

//BONUS 1

const bonusHTML= document.getElementById("outputBonus")

// cicliamo per ogni elemento dell'array una specifica stampa
for( let i = 0; i < team.length; i++ ){

    bonusHTML.innerHTML += `
            <div class="card col-3 offset-1">
                <img class="card-img-top" src='./img/${team[i].Foto}' alt="fotoTeam"/>
                <div class="card-body">
                    <h4 class="card-title">
                    ${team[i].Nome}
                    </h4>
                    <p class="card-text">
                    ${team[i].Ruolo}
                    </p>
                </div>
            </div>
        `
}
