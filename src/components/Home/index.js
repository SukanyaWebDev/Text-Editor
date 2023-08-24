import {Component} from 'react'
import {FaBold} from 'react-icons/fa'
import {GoItalic} from 'react-icons/go'
import {ImUnderline} from 'react-icons/im'
import {UserTextArea, CustomButton} from './styledComponents'
import './index.css'

class Home extends Component {
  state = {isBold: false, userInput: '', isItalic: false, isUnder: false}

  underLineChange = () => {
    this.setState(prevState => ({isUnder: !prevState.isUnder}))
  }

  colorChange = () => {
    this.setState(prevState => ({isBold: !prevState.isBold}))
  }

  setUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  italicChange = () => {
    this.setState(prevState => ({isItalic: !prevState.isItalic}))
  }

  render() {
    const {isBold, userInput, isItalic, isUnder} = this.state

    const classNameForBold = isBold ? 'myIconTwo' : 'myIcon'
    const classNameForBoldTextarea = isBold ? 'bold' : 'normal'

    const classNameForIs = isItalic ? 'myIconTwo' : 'myIcon'
    const classNameForIsItalicTextarea = isItalic ? 'italic' : 'normal'

    const classNameForUnder = isUnder ? 'myIconTwo' : 'myIcon'
    const classNameForUnderTextarea = isUnder ? 'underline' : 'normal'
    console.log(classNameForIsItalicTextarea)
    return (
      <div className="firstDiv">
        <div
          style={{backgroundColor: '#1b1c22', padding: '10px', display: 'flex'}}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: '#ffffff',
              width: '50%',
            }}
          >
            <h1>Text Editor</h1>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
                alt="text editor"
              />
            </div>
          </div>
          <div>
            <ul style={{padding: '10px'}} className="myColor">
              <li>
                <CustomButton
                  type="button"
                  data-testid="bold"
                  className={classNameForBold}
                  onClick={this.colorChange}
                  bold={isBold}
                >
                  <FaBold />
                </CustomButton>
              </li>
              <li>
                <CustomButton
                  type="button"
                  data-testid="italic"
                  className={classNameForIs}
                  onClick={this.italicChange}
                  bold={isItalic}
                >
                  <GoItalic />
                </CustomButton>
              </li>
              <li>
                <CustomButton
                  type="button"
                  data-testid="underline"
                  onClick={this.underLineChange}
                  className={classNameForUnder}
                  bold={isUnder}
                >
                  <ImUnderline />
                </CustomButton>
              </li>
            </ul>
            <div>
              <UserTextArea
                rows="34"
                cols="60"
                onChange={this.setUserInput}
                value={userInput}
                bold={classNameForBoldTextarea}
                italic={classNameForIsItalicTextarea}
                dec={classNameForUnderTextarea}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
