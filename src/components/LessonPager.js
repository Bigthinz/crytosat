import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import './LessonPager.css';


class LessonPager extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open:true
    }
  }

  render() {
    let previous = null;
    let next = null;
    
    if (this.props.previous) {
      previous = (
        <Link to={this.props.previous}>
          {/* <span className='arrow'>
            <FontAwesomeIcon icon={faArrowLeft}/>
          </span> */}
          <span className='caption'>previous</span>
        </Link>
      );
    }

    if (this.props.next) {
      next = (
        <Link className='next-content' to={this.props.next}>
          <span className='caption'>Next</span>
          <span className='arrow'>
          <FontAwesomeIcon icon={faAngleRight} />          </span>
        </Link>
      );
    }

    return (
      <div className="pager">
        <div className={'link-container previous'}>{previous}</div>
        <div className='link-container next'>
          <span className='count'>1/12</span>
          {next}
          </div>
      </div>
    );
  }

}

export default LessonPager;