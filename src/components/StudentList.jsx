import './StudentList.css';
import Student from './Student';


const StudentList = (props) => {
  const studentComponents = props.students.map((student, index) => {
    return (
        <li key={index}><Student name={student.nameData} email={student.emailData}></Student></li>
    );
  });
  return (
    <section>
        <h2>Student List</h2>
        <ul>
            {studentComponents}
        </ul>
    </section>
  );
};

StudentList.propTypes = {
  
}

export default StudentList;