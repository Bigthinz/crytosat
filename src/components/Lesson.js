import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useContext} from 'react';
import './Lesson.css';
import LessonPager from './LessonPager';
import { faAngleLeft, faBars, faAnglesLeft } from '@fortawesome/free-solid-svg-icons';
import ProgressBar from './ProgressBar';



class Lesson extends React.Component {
 
  render() {

    const length = this.props.lesson.length 
    const index = this.props.lesson.findIndex(item => item.name === this.props.title);
    const progressIndex = index
    const pixel = Math.round(((progressIndex + 1) / length) * 100) + "%"


    return(
      <div className="lesson ">

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
          <span className='arrow' onClick={this.isOpen} >
            <FontAwesomeIcon  icon={faAngleLeft} />
            <FontAwesomeIcon icon={faAngleLeft} />
          </span>
        </div>
        <div className='lesson-content'>
          {this.props.content}
        </div>

   
        <div className='static'>
          <LessonPager previous={this.props.previous} next={this.props.next} lesson={this.props.lesson} title={this.props.title} />
          <ProgressBar value={pixel}/>
        </div>
        <div className='foreground' >
          <img src='/dots.png' alt='logo'/>  
        </div>        
      </div>
    )
  }

}

export default Lesson;
