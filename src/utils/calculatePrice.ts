import { Answer, Responce } from "../components/Store/Types/models"


const emptyValue = {
  price: 0,
  currencyType: true
}

const calculatePrice = (answers: Answer[]): number =>
  answers.map(answer =>
    answer.answers
      .map(selectedAnswer =>
        answer.question.responces
          ?.find(option => option.title === selectedAnswer))
      ?.map((selectedAnswer: Responce | undefined) =>
      ({
        price: selectedAnswer?.price || 0,
        currencyType: !!selectedAnswer?.currencyType
      }))
      ?.reduce((a, b) =>
        ({
          price: answer.question.noSum ?
            Math.max(a.price, b.price)
            :
            a.price + b.price,
          currencyType: a.currencyType && b.currencyType
        })
      , emptyValue)
  )
  ?.reduce((a, b) =>
    ({
      price: b.currencyType ?
        a.price + b.price
        :
        a.price * (100 + b.price) / 100,
      currencyType: false
    })
  , emptyValue)
  ?.price


export default calculatePrice