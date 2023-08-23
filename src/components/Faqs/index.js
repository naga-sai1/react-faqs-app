import FaqItem from '../FaqItem'

import './index.css'

const Faqs = props => {
  const {faqsList} = props
  return (
    <div className="bg-container">
      <div className="app-container">
        <h1 className="title">FAQs</h1>
        <ul className="faqs-list">
          {faqsList.map(eachFaqs => (
            <FaqItem faqDetails={eachFaqs} key={eachFaqs.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
