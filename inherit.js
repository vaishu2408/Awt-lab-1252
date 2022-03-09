class student{
    display(){
        console.log("parent class");
    }
    
}
class student1 extends student {
    display1(){
        console.log("child class");
    }
}
let s = new student1();
s.display();
s.display1();