import Tabla from "./tabla.js";
import Tarea from "./Tarea.js";

class Main {
    constructor(){
        this._lista = new Tabla(
            document.querySelector("#lista")
        );
        document.querySelector("#btnAdd").addEventListener("click", () => {
             let nombre = document.querySelector("#nombre").Value;
            let limite = document.querySelector("#limite").Value; 
            limite = limite.split('-');

            let limite = new Date(limite[0], limite[1], limite[2]);

              let objtarea ={
                  nombre: nombre,
                  limite: limite
              }

              let tarea = new Tarea(objtarea);
              lista.addTall(tarea)
            
            form.classList.add("was-validated");
        })
    }
}
let m =new Main();