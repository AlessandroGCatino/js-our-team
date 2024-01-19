/* Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede */


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