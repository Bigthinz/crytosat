import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useContext} from 'react';
import './Lesson.css';
import LessonPager from './LessonPager';
import { faAngleLeft, faBars, faAnglesLeft } from '@fortawesome/free-solid-svg-icons';



class Lesson extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open:true
    }
    this.isOpen = this.isOpen.bind(this);
 
  }

  isOpen(){
    this.setState({open: !this.state.open});

    console.log(this.state.open)
  }

  render() {
    return(
      <div className={`lesson ${this.state.open && "active" }` }>

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
          <LessonPager previous={this.props.previous} next={this.props.next} />
          <div className='progress-bar'>
            <div></div>
          </div>
        </div>
       

        <div className='foreground'>
          <img src='/dots.png' alt='logo'/>  
        </div>
        

        
      </div>
    )
  }

}

export default Lesson;
