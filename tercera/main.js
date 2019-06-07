import Tabla from "./tabla.js";
import Tarea from "./Tarea.js";

class Main {
    constructor(){
        let lista = new Tabla(
            document.querySelector("#lista")
        );
        document.querySelector("#btnAdd").addEventListener("click", () => {
            let from = document.querySelector("#form");
            if (Form.checkVality() === true){
              let nombre = document.querySelector("#nombre").Value;
              let fechalimite = document.querySelector("#limite").Value; 

              let objtarea ={
                  nombre: nombre,
                  limite: limite
              }
              let tarea = new Tarea(objtarea);
              lista.addTall(tarea)
            }
            form.classList.add("was-validated");
        })
    }
}
let m =new Main();