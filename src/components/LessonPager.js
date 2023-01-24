import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import './LessonPager.css';


class LessonPager extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      count: 1
     }
     this.handleIncrement = this.handleIncrement.bind(this);
     this.handleDecrement = this.handleDecrement.bind(this);
  
  }



  handleIncrement(e){
    // e.preventDefault();
    this.setState(prevState =>(
      {
        count: prevState.count + 1
      }))
      console.log(this.state.count + 1)
  }

  handleDecrement(){
    this.setState(prevState=>({count: prevState.count - 1}))
    console.log(this.state.count - 1)

  }

  render() {
    // let {count} = this.state
    let previous = null;
    let next = null;
    let lessonLength = this.props.lesson.length


    
    if (this.props.previous) {
      previous = (
        <Link onClick={this.handleDecrement} to={this.props.previous}>
          {/* <span className='arrow'>
            <FontAwesomeIcon icon={faArrowLeft}/>
          </span> */}
          <span className='caption'>previous</span>
        </Link>
      );
    }

    if (this.props.next) {
      next = (

        <Link href='#' onClick={this.handleIncrement} className='next-link next-content ' to={this.props.next}>
          <span className='caption'>Next</span>
          <span className='arrow'>
          <FontAwesomeIcon icon={faAngleRight} />          
          </span>
        </Link>

      );
    }


    const index = this.props.lesson.findIndex(item => item.name === this.props.title) + 1;

    return (
      <div className="pager">
        <div className={'link-container previous'}>{previous}</div>
        <div className='link-container next'>
          <span className='count'>{index}/{lessonLength}</span>
          {next}
          </div>
      </div>
    );
  }

}

export default LessonPager;