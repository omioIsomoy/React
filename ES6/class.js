// a class with constructor
class nsu {
    constructor(nsu_name,nsu_id){
        this.name = nsu_name; // a constructor varriable declearing **this
        this.id = nsu_id;
    }
    display_nsu_info(){  // a constructor function declearing
        console.log("Your nsu profile : " + this.name + " " + this.id);
    }
}
let a = new nsu("somoy", 1610); // declearing a object of the class and assinging a value of the variables  
a.display_nsu_info(); // caling the function of the class

// inheritance of a class
// also called as driving class
class students extends nsu {
    constructor(student_year,nsu_name,nsu_id){ // all of the parent class constructor varriables should be called
        super(nsu_name,nsu_id); // super should be called , variables name should be given or it'll show undefined
        this.year = student_year;
    }
}
let b = new students(2016,"somoy",1610); // give values according to varriable name 
console.log(b);