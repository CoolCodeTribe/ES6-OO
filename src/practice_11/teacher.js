import Person from './person';

class Teacher extends Person{
    constructor(id,name, age, klasses = []){
        super(id,name,age);
        this.klasses = klasses;
    }

    introduce() {
        let information = super.introduce();
        information += ` I am a Teacher.`;
        if(this.klasses.length === 0){
            information += ` I teach No Class.`
        }else {
            information += ` I teach Class `;
            for(let klass of this.klasses){
                if(this.klasses.indexOf(klass) === (this.klasses.length-1)){
                    information += `${klass.number}.`;
                }else {
                    information += `${klass.number}, `;
                }
            }
        }
        return information;
    }

    isTeaching(student){
        for(let klass of this.klasses){
            if(klass.isIn(student)){
                return true;
            }else{
                return false;
            }
        }
    }

}

export default Teacher;


