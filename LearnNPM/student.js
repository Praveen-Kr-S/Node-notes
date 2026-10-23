//example -6

class Student{
    name = null;
    marks = 0;
    constructor(n,m){
        this.name = n;
        this.marks = m;
    }

    result() {
        return this.name + (this.marks >= 40 ? " passed" : " failed");
    }
}


module.exports = Student;