import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {
    status: false,
  }

  onToggleStatus = () => {
    this.setState(prevState => ({
      status: !prevState.status,
    }))
  }

  render() {
    const {status} = this.state
    const {faqDetails} = this.props
    const {questionText, answerText} = faqDetails
    const imageUrl = status
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const altText = status ? 'minus' : 'plus'
    return (
      <li className="faq-item">
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          <button type="button" className="btn" onClick={this.onToggleStatus}>
            <img src={imageUrl} alt={altText} className="icon" />
          </button>
        </div>
        {status && (
          <div>
            <hr className="horizontal-line" />
            <p className="answer">{answerText}</p>
          </div>
        )}
      </li>
    )
  }
}

export default FaqItem
