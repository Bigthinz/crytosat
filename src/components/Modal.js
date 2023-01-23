import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Modal.css';
import { createPortal } from 'react-dom';
import CopySnippet from './CopySnippet';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

class Modal extends React.Component {

    constructor(props) {
        super(props);
        this.close = this.close.bind(this);
      }

    close(){
        this.props.hide()
        console.log('close working')
    }
   
    render() {

        if(!this.props.isOpened){
            return null
        }
      return createPortal(
        <>
        {this.props.children}
        
        <div className='modal-container'>
        <div className='wrapper'>
            <div className='code-wrap'> 
                <CopySnippet code={this.props.code} />

            </div>
            <div className='close-btn'>
                <FontAwesomeIcon onClick={this.close} icon={faTimes}/>

            </div>
        </div>
      </div></>,
        document.getElementById('modal-root')
      );
    }
  }
  
export default Modal;
  