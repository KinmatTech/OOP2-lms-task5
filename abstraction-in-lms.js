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
  #coursesEnrolled; // private property

  constructor(studentID, name, email) {
    super(studentID, name, email);
    this.#coursesEnrolled = [];
  }

  // Public method
  participateInCourse(course) {
    this.#coursesEnrolled.push(course);
    console.log(`${this.name} has enrolled in the course: ${course.title}`);
  }

  // Public method
  viewEnrolledCourses() {
    console.log(`${this.name}'s Enrolled Courses:`);
    this.#coursesEnrolled.forEach((course) => console.log(`- ${course.title}`));
  }
}

// Concrete class representing a Tutor
class Tutor extends CourseParticipant {
  #coursesTaught; // private property

  constructor(tutorID, name, email) {
    super(tutorID, name, email);
    this.#coursesTaught = [];
  }

  // Public method
  participateInCourse(course) {
    this.#coursesTaught.push(course);
    console.log(`${this.name} is teaching the course: ${course.title}`);
  }

  // Public method
  viewTaughtCourses() {
    console.log(`${this.name}'s Taught Courses:`);
    this.#coursesTaught.forEach((course) => console.log(`- ${course.title}`));
  }
}

// Concrete class representing a Course
class Course {
  #participants; // private property

  constructor(courseID, title, description, price) {
    this.courseID = courseID;
    this.title = title;
    this.description = description;
    this.price = price;
    this.#participants = [];
  }

  // Public method
  addParticipant(participant) {
    this.#participants.push(participant);
    console.log(`${participant.name} is now associated with the course: ${this.title}`);
  }

  // Public method
  viewParticipants() {
    console.log(`Participants in ${this.title}:`);
    this.#participants.forEach((participant) => {
      participant.displayInfo();
      participant.participateInCourse(this); // Polymorphic method call
      console.log();
    });
  }
}

// Creating an instances
const student1 = new Student (1, "Benson Obi", "bobi@gmail.com");
const tutor1 = new Tutor(101, "Dr. Ikenna Umeh", "ikumeh@gmail.com");
const course1 = new Course(501, "Introduction to Computer Systems", "Learn the basics of computer system", 68.50);

// Add participants to the course
course1.addParticipant(student1);
course1.addParticipant(tutor1);

// View participants for the course
course1.viewParticipants();

// Try to access private properties (will result in an error)
// console.log(student1.#coursesEnrolled);
// console.log(tutor1.#coursesTaught);
// console.log(course1.#participants);