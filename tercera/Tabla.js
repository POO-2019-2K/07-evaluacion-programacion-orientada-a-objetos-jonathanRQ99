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
    _addToTable(Tarea){
        let row = this._tableLista.insertRow(-1);
        let cellnombre = row.insertCell(0);
        let celllimite = row.insertCell(1);

        cellnombre.innerHTML = tarea.nombre
        celllimite.innerHTML = tarea.getlimiteString();
         
        this._cantTareas++;
        this.tableInfo.row[0].cells[1].innerHTML = this._cantTareas;

        let objTa={
            nombre: tarea.nombre,
            limite: tarea.limite
        };
        this._tareas.push(objTa);
    }
    addTall(tarea){
        this._addToTable(tarea);
        localStorage.setItem("tareas", JSON.stringify(this._tareas));
    }
}