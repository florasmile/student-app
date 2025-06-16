import StudentList from './components/StudentList';
import ClassInfo from './components/ClassInfo';
import { kInitialStudentData } from './data/studentData';
import { useState } from 'react';
import NewStudentForm from './components/NewSudentForm';


function App() {
  const [studentData, setStudentData] = useState(kInitialStudentData);
  const toggleStudentPresence = (studentId) => {
    setStudentData(students => {
      return students.map(student => {
        if (student.id === studentId) {
          return { ...student, isPresentData: !student.isPresentData };
        } else {
          return student;
        }
      });
    });
  };
  const deleteStudents = () => {
    setStudentData([]);
  };

  const onStudentAdd = (newStudent) => {
    // add new Student data to existing list
    // first generate nextId
    const nextId = Math.max(0, ...studentData.map(student => {
      return student.id;
    })) + 1;
    console.log(nextId);
    console.log(newStudent);
    // reset studentData
    setStudentData(studentData => {
      return [...studentData, {
        id: nextId,
        nameData: newStudent.name,
        emailData:newStudent.email,
        isPresentData: false,
      }];
    });
  };
  return (
    <main>
      <h1>Attendance</h1>
      <ClassInfo memberCount={studentData.length}></ClassInfo>
      <button onClick={() => deleteStudents()}>Delete All Students!</button>
      <StudentList students={studentData} onStudentPresenceToggle={toggleStudentPresence}></StudentList>
      <NewStudentForm onStudentAdd={onStudentAdd}/>
    </main>
  );
}

export default App;

