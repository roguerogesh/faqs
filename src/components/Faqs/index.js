// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  state = {showAnswer: false}

  willSeeAnswer = id => {
    this.setState(prevState => ({
      showAnswer: !prevState.showAnswer,
    }))
  }

  render() {
    const {faqsList} = this.props
    const {showAnswer} = this.state

    return (
      <div className="app-container">
        <h1 className="heading">FAQs</h1>
        <ul className="faq-item-container">
          {faqsList.map(eachList => (
            <FaqItem
              key={eachList.id}
              eachList={eachList}
              willSeeAnswer={this.willSeeAnswer}
              showAnswer={showAnswer}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Faqs
