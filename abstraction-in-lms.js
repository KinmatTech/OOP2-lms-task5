// Abstract class representing a Person
class Person {
    constructor(id, name, email) {
      this.id = id;
      this.name = name;
      this.email = email;
    }
  
    displayInfo() {
      console.log(`ID: ${this.id}, Name: ${this.name}, Email: ${this.email}`);
    }
  }
  
  // Abstract class representing a CourseParticipant
  class CourseParticipant extends Person {
    constructor(id, name, email) {
      super(id, name, email);
    }
  
    // Abstract method to be implemented by subclasses
    participateInCourse(course) {
      throw new Error("Method 'participateInCourse' must be implemented by subclasses.");
    }
  }
  
  // Concrete class representing a Student
  class Student extends CourseParticipant {
    constructor(studentID, name, email) {
      super(studentID, name, email);
      this.coursesEnrolled = [];
    }
  
    participateInCourse(course) {
      this.coursesEnrolled.push(course);
      console.log(`${this.name} has enrolled in the course: ${course.title}`);
    }
  
    viewEnrolledCourses() {
      console.log(`${this.name}'s Enrolled Courses:`);
      this.coursesEnrolled.forEach((course) => console.log(`- ${course.title}`));
    }
  }
  
  // Concrete class representing a Tutor
  class Tutor extends CourseParticipant {
    constructor(tutorID, name, email) {
      super(tutorID, name, email);
      this.coursesTaught = [];
    }
  
    participateInCourse(course) {
      this.coursesTaught.push(course);
      console.log(`${this.name} is teaching the course: ${course.title}`);
    }
  
    viewTaughtCourses() {
      console.log(`${this.name}'s Taught Courses:`);
      this.coursesTaught.forEach((course) => console.log(`- ${course.title}`));
    }
  }
  
  // Concrete class representing a Course
  class Course {
    constructor(courseID, title, description, price) {
      this.courseID = courseID;
      this.title = title;
      this.description = description;
      this.price = price;
      this.participants = [];
    }
  
    addParticipant(participant) {
      this.participants.push(participant);
      console.log(`${participant.name} is now associated with the course: ${this.title}`);
    }
  
    viewParticipants() {
      console.log(`Participants in ${this.title}:`);
      this.participants.forEach((participant) => console.log(`- ${participant.name}`));
    }
  }
  
  // Example Usage:
  
  // Create instances
  const student1 = new Student (1, "Benson Obi", "bobi@gmail.com");
  const tutor1 = new Tutor(101, "Dr. Ikenna Umeh", "ikumeh@gmail.com");
  const course1 = new Course(501, "Introduction to Computer Systems", "Learn the basics of computer system", 68.50);
  
  // Display info using base class method
  student1.displayInfo();
  tutor1.displayInfo();
  
  // Add participants to the course
  course1.addParticipant(student1);
  course1.addParticipant(tutor1);
  
  // Participants interact with the course
  student1.participateInCourse(course1);
  tutor1.participateInCourse(course1);
  
  // View participants for the course
  course1.viewParticipants();
  
  // View enrolled courses for the student
  student1.viewEnrolledCourses();
  
  // View taught courses for the tutor
  tutor1.viewTaughtCourses();  