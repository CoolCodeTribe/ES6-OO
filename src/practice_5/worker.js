import Person from "../../src/practice_5/person";

class Worker extends Person{
    constructor(name,age){
        super(name,age);
    }
    introduce(){
        return `${this.basic_introduce()} I am a Teacher. I have a job.`
    }
}
export default Worker;
