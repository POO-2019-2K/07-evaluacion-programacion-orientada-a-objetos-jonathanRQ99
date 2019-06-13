import Tarea from "./Tarea.js";


export default class Tabla {
    constructor(tableLista){
        this._tableLista = tableLista;
        this._cantTareas = 0;
        this._tareas = [];
        this._initTable();
    }

    _initTable(){
        let lstareas = JSON.parse(localStorage.getItem("tareas"));
        if(!lstareas){
            return;
        }
        lstareas.forEach((tareas, index)=> {
            console.log(tareas) 
            tarea.limite = new Date (tarea.limite);
            this._addToTable(new Tarea(tareas));
        })
    }
    _addToTable(tarea){
        let row = this._tableLista.insertRow(-1);
        let cellnombre = row.insertCell(0);
        let celllimite = row.insertCell(1);

        cellnombre.innerHTML = tarea.nombre
        celllimite.innerHTML = tarea.getlimiteString();
        this._addEditDeleteToRow(row, tarea);
         
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

    _editRow(row, tareas) {

        let iTarea = document.createElement('input');
        iTarea.type = 'text';
        iTarea.value = tareas.tarea;

        let iDate = document.createElement('input');
        iDate.type = 'date';
        iDate.value = tareas.getFinalAsString();

        let btnSave = document.createElement('input');
        btnSave.type = 'button';
        btnSave.value = 'Guardar';
        btnSave.className = "btn btn-success";
        btnSave.addEventListener('click', () => {
            let newTabla = {
                tarea: iTarea.value,
                limite: iDate.value,

            };

            this._saveEdit(row, tareas, newTabla);
        });

        let btnCancel = document.createElement('input');
        btnCancel.type = 'button';
        btnCancel.value = 'Cancelar';
        btnCancel.className = "btn btn-danger";
        btnCancel.addEventListener('click', () => {
            this._cancelEdit(row, tareas);
        });


        row.cells[1].innerHTML = '';
        row.cells[1].appendChild(iTarea);
        row.cells[2].innerHTML = '';
        row.cells[2].appendChild(iDate);
        row.cells[4].innerHTML = '';
        row.cells[4].appendChild(btnSave);
        row.cells[5].innerHTML = '';
        row.cells[5].appendChild(btnCancel);
    }
}