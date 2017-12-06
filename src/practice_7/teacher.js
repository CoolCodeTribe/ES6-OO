import Person from "../../src/practice_6/person.js";

class Teacher extends Person {
    constructor(name, age, klass){
        super(name,age);
        this.klass = klass;
    }
    introduce(){
        if(!this.klass){
            return `${this.basic_introduce()} I am a Teacher. I teach No Class.`;
        }else {
            return `${this.basic_introduce()} I am a Teacher. I teach Class ${this.klass.number}.`;
        }
    }
    introduceWith(student){
        if(this.klass === student.klass){
            return `${this.basic_introduce()} I am a Teacher. I teach ${student.name}.`
        }else {
            return `${this.basic_introduce()} I am a Teacher. I don't teach ${student.name}.`
        }
    }
}

export default Teacher;