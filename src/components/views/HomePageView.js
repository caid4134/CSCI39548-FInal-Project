

import { Link } from 'react-router-dom';



const HomePageView = () => {
  return (
    <div>
      <h1>Definitely Not CUNYFIRST</h1>
      <Link to={'/instructors'} > All Instructors </Link>
      <Link to={'/courses'} > All Courses </Link>
      
    </div>
  );    
}




export default HomePageView;
