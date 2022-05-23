import { Link } from "react-router-dom";

const CourseView = (props) => {
  const { course } = props;
  try{

    //There's a null type error when trying to link an instructor's page when there's no instructor for the course, ignoring for now
    return (
      <div>
        <h1>{course.title}</h1>
        <h2>Timeslot:{course.timeslot}</h2>
        <h3>Location:{course.location}</h3>
        <Link to={`/instructor/${course.instructor.id}`}>
        {course.instructor ? <h3>{course.instructor.firstname + " " + course.instructor.lastname}</h3>: <h3>staff</h3>}</Link>
      </div>
    );
    }catch(e){
    
    }
    
  return (
    <div>
      <h1>{course.title}</h1>
      <h2>Timeslot:{course.timeslot}</h2>
      <h3>Location:{course.location}</h3>
      {course.instructor ? <h3>{course.instructor.firstname + " " + course.instructor.lastname}</h3>: <h3>staff</h3>}
    </div>
  );

};

export default CourseView;