import Tarea from "./Tarea.js";


export default class Tabla {
    constructor(tableAgenda){
        this._tableAgenda = tableAgenda;
        this._cantTareas = 0;
        this._tareas = [];
        this._initTable();
    }

    _initTable(){
        let lstarea = JSON.parse(localStorage.getItem("tarea"));
        if(!lstarea){
            return;
        }
        lstarea.forEach((tarea, index)=> {
            console.log(tareas) 
            tarea.limite = new Date (tarea.limite);
            this._addToTable(new Tarea(tareas));
        })
    }

    addEmployee2(tarea) {
        let found = this._findId(tarea.nombre);
        if (found >= 0){
            swal.fire({
                type: "error",
                tittle: "error",
                text: "esta tarea ya esta registrada"
            });
            return;
        }
        this._addContacto(tarea);
        localStorage.setItem("tarea", JSON.stringify(this._tarea));
        console.log(localStorage.getItem("tarea"));
    }

    _addUsuario(tarea) {
        let row = this._tableAgenda.insertRow(-1);
        let cellTarea = row.insertCell(0);
        let cellfinal = row.insertCell(1);
        let cellDif = row.insertCell(2);
        row.insertCell(3);
        row.insertCell(4);


        cellTarea.innerHTML = tarea.nombre;
        cellfinal.innerHTML = tarea.getFinalAsString();
        cellDif.innerHTML = tarea.getAge();
        this._addEditDeleteToRow(row, tarea);


        let objTarea = {
            nombre: tarea.nombre,
            limite: tarea.limite
        }
        this._tarea.push(objTarea);
        localStorage.setItem("tarea", JSON.stringify(this._tarea));
    }
    addTall(nombre){
        this._addToTable(nombre);
        localStorage.setItem("tarea", JSON.stringify(this._tarea));
    }

    _editRow(row, tarea) {

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
            let newTarea = {
                tarea: iTarea.value,
                limite: iDate.value,

            };

            this._saveEdit(row, tarea, newTarea);
        });

        let btnCancel = document.createElement('input');
        btnCancel.type = 'button';
        btnCancel.value = 'Cancelar';
        btnCancel.className = "btn btn-danger";
        btnCancel.addEventListener('click', () => {
            this._cancelEdit(row, tarea);
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

    _saveEdit(row, tarea, newTarea) {
        let pos = this._findId(tarea.num);
        this._actividades[pos] = newTarea;
        localStorage.setItem('tarea', JSON.stringify(this._tarea));
        this._cancelEdit(row, new Tarea(newTarea));
    }

    _cancelEdit(row, tarea) {
        row.cells[1].innerHTML = tarea.nombre;
        row.cells[2].innerHTML = tarea.getFechaForDate();
        row.cells[3].innerHTML = tarea.getAge();
        row.cells[4].innerHTML = "";
        row.cells[5].innerHTML = "";
        this._addEditDeleteToRow(row, tarea);
    }
}