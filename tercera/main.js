import Tabla from "./tabla.js";
import Tarea from "./Tarea.js";

class Main {
    constructor(){
        this._agenda = new Tabla(
            document.querySelector("#agenda")
        );
        document.querySelector("#btnAdd").addEventListener("click", () => {
             let nombre = document.querySelector("#nombre").Value;
            let slimite = document.querySelector("#limite").Value; 
            slimite = slimite.split('-')
        

            let limite = new Date(slimite[0], slimite[1]-1, slimite[2]);

              let objtarea ={
                  nombre: nombre,
                  limite: limite
              }

              let tarea = new Tarea(objtarea);
              lista.addTall(tarea)

              this._agenda.addEmployee2(tarea);
            
            form.classList.add("was-validated");
        })
    }
}
let m = new Main();