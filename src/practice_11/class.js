class Class {
    constructor(number) {
        this.number = number;
    }

    getDisplayName() {
        return "Class " + this.number;
    }

    registerAssignLeaderListener(teacher){
        this.teacher = teacher;
    }
    registerJoinListener(teacher){
        this.teacher = teacher;
    }

    assignLeader(student){
        if(student.klass.number === this.number){
            this.leader = student;
            if(this.teacher){
                console.log("I am " + this.teacher.name +". I know "+ student.name+" become Leader of Class "+ this.number +".");
            }
        } else {
            this.leader = null;
            console.log("It is not one of us.");
        }
    }

    appendMember(student){
        student.klass = this;
        if(this.teacher !== undefined){
            if(this.teacher.isTeaching(student)){
                console.log("I am "+ this.teacher.name+". I know "+ student.name +" has joined Class "+ student.klass.number +".")
            }
        }

    }

    isIn(student) {
        if (student.klass.number === this.number) {
            return true;
        }else {
            return false;
        }

    }

}

module.exports = Class;

