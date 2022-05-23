import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import NewInstructorView from '../views/NewInstructorView';
import { addInstructorThunk } from '../../store/thunks';


class NewInstructorContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          id: "", 
          firstname:"",
          lastname:"",
          department:"",
          imageUrl:"",
          createdAt:"",
          updatedAt:"",
          courses:[],

        };
    }

    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    handleSubmit = async event => {
        event.preventDefault();

        let Instructor = {
            id: this.state.id,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            department: this.state.department,
            imageUrl: this.state.imageUrl,
            createdAt: this.state.createdAt,
            updatedAt: this.state.updatedAt,
            courses: this.state.courses,
        };
        
        let newInstructor = await this.props.addInstructor(Instructor);

        this.setState({
            id: this.state.id,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            department: this.state.department,
            imageUrl: this.state.imageUrl,
            createdAt: this.state.createdAt,
            updatedAt: this.state.updatedAt,
            courses: this.state.courses,
          redirect: true, 
          redirectId: newInstructor.id
        });
    }

    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }

    render() {
      //go to single Instructor view of newly created Instructor
        if(this.state.redirect) {
          return (<Redirect to={`/Instructor/${this.state.redirectId}`}/>)
        }
        return (
          <NewInstructorView 
            handleChange = {this.handleChange} 
            handleSubmit={this.handleSubmit}      
          />
        );
    }
}

const mapDispatch = (dispatch) => {
    return({
        addInstructor: (Instructor) => dispatch(addInstructorThunk(Instructor)),
    })
}

export default connect(null, mapDispatch)(NewInstructorContainer);