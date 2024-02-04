// Student class
class Student {
    constructor(studentID, name, email) {
      this.studentID = studentID;
      this.name = name;
      this.email = email;
      this.coursesEnrolled = [];
    }
  
    enrollToCourse(course) {
      this.coursesEnrolled.push(course);
      console.log(`${this.name} has enrolled in the course: ${course.title}`);
    }
  
    viewEnrolledCourses() {
      console.log(`${this.name}'s Enrolled Courses:`);
      this.coursesEnrolled.forEach((course) => console.log(`- ${course.title}`));
    }
  }
  
  // Tutor class
  class Tutor {
    constructor(tutorID, name, email) {
      this.tutorID = tutorID;
      this.name = name;
      this.email = email;
      this.coursesTaught = [];
    }
  
    teachCourse(course) {
      this.coursesTaught.push(course);
      console.log(`${this.name} is teaching the course: ${course.title}`);
    }
  
    viewTaughtCourses() {
      console.log(`${this.name}'s Taught Courses:`);
      this.coursesTaught.forEach((course) => console.log(`- ${course.title}`));
    }
  }
  
  // Course class
  class Course {
    constructor(courseID, title, description, price) {
      this.courseID = courseID;
      this.title = title;
      this.description = description;
      this.price = price;
      this.studentsEnrolled = [];
      this.tutor = null;
    }
  
    setTutor(tutor) {
      this.tutor = tutor;
      console.log(`Tutor ${tutor.name} assigned to the course: ${this.title}`);
    }
  
    enrollStudent(student) {
      this.studentsEnrolled.push(student);
      console.log(`${student.name} has enrolled in the course: ${this.title}`);
    }
  
    viewEnrolledStudents() {
      console.log(`Enrolled Students in ${this.title}:`);
      this.studentsEnrolled.forEach((student) => console.log(`- ${student.name}`));
    }
  }
  
  // Example Usage:
  
  // Create instances
  const student1 = new Student (1, "Benson Obi", "bobi@gmail.com");
  const tutor1 = new Tutor(101, "Dr. Ikenna Umeh", "ikumeh@gmail.com");
  const course1 = new Course(501, "Introduction to Computer Systems", "Learn the basics of computer system", 68.50);
  
  // Enroll student to course
  student1.enrollToCourse(course1);
  
  // Set tutor for the course
  course1.setTutor(tutor1);
    
  // Enroll another student to the course
  const student2 = new Student (1, "Benson Obi", "bobi@gmail.com");
  course1.enrollStudent(student2);
  
  // View enrolled students for the course
  course1.viewEnrolledStudents();
  
  // View courses taught by the tutor
  tutor1.viewTaughtCourses();
  
  // View courses enrolled by the student
  student1.viewEnrolledCourses();
  