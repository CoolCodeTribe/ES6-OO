import Person from './person';

class Teacher extends Person {
    constructor(id, name, age, klass){
        super(id, name, age);
        this.klass = klass;
    }
    introduce(){
        if(!this.klass){
            return `${this.basic_introduce()} I am a Teacher. I teach No Class.`;
        }else {
            return `${this.basic_introduce()} I am a Teacher. I teach Class ${this.klass.number}.`;
        }
    }
}

export default Teacher;
