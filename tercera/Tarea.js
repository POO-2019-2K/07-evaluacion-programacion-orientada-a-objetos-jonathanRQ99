export default class Tarea {
    constructor(tarea) {
        this._nombre = tarea.nombre.toUpperCase();
        this._limite = tarea._limite;
        this._months = [
            "Ene",
            "Feb",
            "Mar",
            "Abr",
            "May",
            "Jun",
            "Jul",
            "Ago",
            "Sep",
            "Oct",
            "Nov",
            "Dic"

        ]
    }
    
    get nombre() {
        return this._nombre;
    }
    get limite() {
        return this._limite;
    }
    getFechaLimiteString(){
        let date = 
        this._limite.getDate() + "/" +
        this._months[this._limite.getMonth()] + "/" +
        this._limite.getFullYear();
        return date  
    }

    getAge(){
        let oneDay = (24 * 60 * 60 * 1000);
        let differenceMs = Math.abs(this._limite - new Date());
        return Math.round(diferrenceMs / oneDay) + 1;
    }

}