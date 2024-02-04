# Learning Management System (LMS) JavaScript Implementation

## Overview

This JavaScript implementation represents a simplified Learning Management System (LMS) with classes for `Student`, `Tutor`, and `Course`. Students can enroll in courses, tutors can teach courses, and courses have associated information.

## Classes:

### 1. Student

- **Properties:**
  - studentID
  - name
  - email
  - coursesEnrolled (Array)

- **Methods:**
  - enrollToCourse(course)
  - viewEnrolledCourses()

### 2. Tutor

- **Properties:**
  - tutorID
  - name
  - email
  - coursesTaught (Array)

- **Methods:**
  - teachCourse(course)
  - viewTaughtCourses()

### 3. Course

- **Properties:**
  - courseID
  - title
  - description
  - price
  - studentsEnrolled (Array)
  - tutor

- **Methods:**
  - setTutor(tutor)
  - enrollStudent(student)
  - viewEnrolledStudents()

# How to Run
You can run this code in a JavaScript environment such as Node.js or a browser console to see the interactions between students, tutors, and courses as described in the example usage.



# Reasons for my decision where I used Abstractions

# Abstractions are applied through the use of abstract classes and methods. Where and why I used abstractions are as follows:-

# Abstract Class Person: 
The Person class serves as an abstraction for common properties and methods shared by both students and tutors, such as id, name, and email.
By abstracting common attributes into a base class, it simplifies the structure and promotes code reuse. Any shared functionality or properties can be defined at this level, making the code more maintainable.

# Abstract Class CourseParticipant:
The CourseParticipant class serves as an abstraction for the behavior that both students and tutors exhibit when participating in a course. It introduces an abstract method participateInCourse.
Abstraction at this level allows for a common interface for participants, specifying the essential behavior they must implement. Concrete subclasses (Student and Tutor) are then responsible for providing their specific implementations.

# Concrete Classes Student and Tutor:
Reason: These classes represent specific roles in the learning system and extend the abstract classes (Person and CourseParticipant).
By extending abstract classes, these concrete classes inherit common properties and methods, reducing redundancy. They also fulfill the contract defined by abstract classes, ensuring that they implement the necessary behavior.

# Concrete Class Course:
Reason: The Course class represents a specific course in the LMS and works with CourseParticipant instances.
By using CourseParticipant instances instead of specifying Student or Tutor directly, the class is more flexible. It can handle any type of participant that adheres to the CourseParticipant interface. This enhances the extensibility of the system, allowing for potential future roles beyond just students and tutors.


# A brief discussion on where and why polymorphism is used:

# Polymorphic Method Call in viewParticipants: 
The viewParticipants method aims to display information about participants in a course and invoke the participateInCourse method for each participant.
By defining a common method (participateInCourse) in the abstract class CourseParticipant, the viewParticipants method can operate on a collection of CourseParticipant objects without needing to know the specific subclass (whether it's a Student or Tutor). The decision to use polymorphism here enhances code flexibility and extensibility. If a new class is introduced in the future that extends CourseParticipant, the viewParticipants method can seamlessly work with instances of that class without modification.

# Flexibility and Extensibility:
The use of polymorphism allows the viewParticipants method to handle different types of participants in a course without needing to be modified when new participant types are added.
Polymorphism promotes flexibility and extensibility in the codebase. It enables the addition of new subclasses of CourseParticipant without modifying existing code that interacts with them. This adheres to the Open/Closed Principle of SOLID design principles, where the behavior of existing code can be extended without modification.

# Reduced Code Duplication:
Polymorphism reduces code duplication by allowing a single method (viewParticipants) to work with objects of various types without repeating the same logic.
The participateInCourse method is defined in the abstract class CourseParticipant, ensuring that each concrete subclass provides its implementation. By utilizing this common method in the viewParticipants method, there is no need to duplicate the logic for handling different types of participants. This results in cleaner, more maintainable code.

In summary, polymorphism is applied in the viewParticipants method to provide a common interface for interacting with different types of participants in a course, promoting flexibility, extensibility, and reducing code duplication.
