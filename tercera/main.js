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
                
            }
        })
    }
}