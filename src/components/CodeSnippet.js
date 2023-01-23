import React, {useRef} from 'react';
import './CodeSnippet.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy} from '@fortawesome/pro-light-svg-icons'
import Modal from './Modal';
// import { faSharp, faSolid, faUpRightAndDownLeftFromCenter } from '@fortawesome/free-solid-svg-icons';

function copyToClipboard(text) {
  var dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  dummy.setAttribute("id", "dummy_id");
  document.getElementById("dummy_id").value = text;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
}

class CodeSnippet extends React.Component {

   constructor(props) {
    super(props);
    this.divRef = React.createRef();
    this.textRef = React.createRef();

    this.state ={
      height: 41,
      codeHeight:false,
      isOpen:false,
      isClosed:false
     }
     this.close = this.close.bind(this);
     this.expand = this.expand.bind(this)
  }


  componentDidMount() {
    let isTextMultiline = this.textRef.current.innerHTML.split('\n')

    if(isTextMultiline.length > 1){
      console.log('Is greater')
      this.setState({
        codeHeight: true
      })
      
    }
  }


  expand(){
    this.setState({
      isOpen:true
    })
  }

  close(){
    this.setState({
      isOpen:false
    })
  }

  copy() {
    copyToClipboard(this.props.code);
  }

 render() {
  

    return(
      <div className='code-snippet'>
        <Modal copy={this.copy} isOpened={this.state.isOpen} hide={this.close} code={this.props.code} />

        <pre >
          <code ref={this.textRef}>
            {this.props.code}
            {console.log(this.props.code)}
          </code>
            <div className='icon-container'>
              <button onClick={this.copy.bind(this)}>
                <FontAwesomeIcon icon={faCopy}/>
              </button>
            </div>
            { this.state.codeHeight && <div className='expand' onClick={this.expand}>x</div> }

        </pre>
      </div>
    )
  }
}

export default CodeSnippet
