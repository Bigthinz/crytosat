import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Lesson.css';
import LessonPager from './LessonPager';
import { faAngleLeft, faBars, faAnglesLeft } from '@fortawesome/free-solid-svg-icons';



class Lesson extends React.Component {

  render() {
    return(
      <div className='lesson'>
        <div className='lesson-nav'>
          <span className='arrow'>
          <FontAwesomeIcon icon={faBars} />

          </span>
          <div className='logo-wrap'>
            <div>
              <img src='/logo.png' alt='logo'/>
            </div>
            <h3>CryptoSat Simulator</h3>
          </div>
          <span className='arrow'>
            <FontAwesomeIcon icon={faAngleLeft} />
            <FontAwesomeIcon icon={faAngleLeft} />
          </span>
        </div>
        <div className='lesson-content'>
          {this.props.content}
        </div>
        <LessonPager previous={this.props.previous} next={this.props.next} />
        
        <div className='foreground'>
          <img src='/dots.png' alt='logo'/>  
        </div>

        <div className='progress-bar'>
          <div></div>
        </div>
        
      
      </div>
    )
  }

}

export default Lesson;
