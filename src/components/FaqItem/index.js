// Write your code here.
import './index.css'

const FaqItem = props => {
  const {eachList, willSeeAnswer, showAnswer} = props
  const {id, questionText, answerText} = eachList

  const onShowAnswer = () => {
    willSeeAnswer(id)
  }

  const plusMinusImgUrl = showAnswer
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

  const plusMinusAltText = showAnswer ? 'minus' : 'plus'

  return (
    <li className="list-item-container">
      <div className="question-container">
        <h1 className="question-text">{questionText}</h1>
        <button
          className="plus-or-minus-btn"
          type="button"
          onClick={onShowAnswer}
        >
          <img
            src={plusMinusImgUrl}
            alt={plusMinusAltText}
            className="plus-or-minus-img"
          />
        </button>
      </div>
      {showAnswer && <p className="answer-text">{answerText}</p>}
    </li>
  )
}

export default FaqItem
