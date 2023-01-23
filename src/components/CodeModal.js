import React, { Component } from 'react'
import './CodeModal.css'
import CodeSnippet from './CodeSnippet'
import CopySnippet from './CopySnippet'

export default class CodeModal extends Component {
  render() {
    return (
      <div className='modal-container'>
        <div className='wrapper'>
            <div className=''> <CopySnippet code={`cryptosat.getPublicEncryptionKey();`} /></div>
        </div>
      </div>
    )
  }
}
