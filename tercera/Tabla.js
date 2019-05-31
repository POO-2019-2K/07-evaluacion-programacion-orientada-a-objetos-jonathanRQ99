import Tarea from "./Tarea.js";
export default class Tabla {
    constructor(tableLista){
        this._tableLista = tableLista;
        this._cantTareas = 0;
        this._tareas= [];
        this._initTable();
    }

    _initTable(){
        let lstareas = JSON.parse(localStorage.getItem("tareas"));
        if(lstareas === null){
            return;
        }
        lstareas.forEach((e,index)=>{
            e.limite = new Date (e.limite);
            this._addToTable(new Tarea(e));
        })
    }
}
