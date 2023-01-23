import React from 'react';
import { createPortal } from 'react-dom';
import CopySnippet from './CopySnippet';

class Modal extends React.Component {

   
    render() {

        if(!this.props.isOpened){
            return null
        }
      return createPortal(
        <>
        {this.props.children}
        
        <div className='modal-container'>
        <div className='wrapper'>
            <div className=''> <CopySnippet code={`cryptosat.getPublicEncryptionKey();`} /></div>
        </div>
      </div></>,
        document.getElementById('modal-root')
      );
    }
  }
  
export default Modal;
  