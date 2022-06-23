import { Answer, Responce } from "../components/Store/Types/models"


const calculatePrice = (answers: Answer[]): number =>
  answers.map(answer =>
    answer.answers.map(selectedAnswer =>
      answer.question.responces
        ?.find(option => option.title === selectedAnswer))
      ?.map((selectedAnswer: Responce | undefined) =>
        selectedAnswer?.price || 0)
      ?.reduce((a, b) =>
        answer.question.noSum ?
          Math.max(a, b)
          :
          a + b
      , 0))
    ?.reduce((a, b) => a + b, 0)


export default calculatePrice