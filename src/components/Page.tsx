import React from 'react'
// import ReactDOM from 'react-dom/client'

import Img from './Img'
import Popup from './Popup'
import ProgressBar from './ProgressBar'
import Selector from './Selector'
import Button from './Button'
import { Context } from './Store'
import { Question, Site, Responce, Answer, Finish } from './Store/Types/models'
import submit from '../utils/submit'


const Page: React.FC<{}> = () => {
  const context = React.useContext(Context)
  const page: Site = context?.contentful?.sites?.[0]
  const [currentQuestion, setCurrentQuestion] = React.useState<Question | Finish | undefined>(page?.firstQuestion)
  const [answers, setAnswers] = React.useState<Answer[]>([])
  const [currentAnswer, setCurrentAnswer] = React.useState<string[]>([])
  const [opened, setOpened] = React.useState(false)
  const [contactInfo, setContactInfo] = React.useState('')

  const open = async () => {
    submit().then(res => console.log(res))
    // setCurrentQuestion(page.firstQuestion)
    // setAnswers([])
    // setCurrentAnswer([])
    // setOpened(true)
  }
  const close = () => {
    setOpened(false)
    setCurrentQuestion(page.firstQuestion)
    setAnswers([])
    setCurrentAnswer([])
  }
  const prev = () => {
    setCurrentAnswer(answers[answers.length - 1].answers)
    setCurrentQuestion(answers[answers.length - 1].question)
    setAnswers(answers.slice(0, -1))
  }
  const next = () => {
    if (!currentQuestion || currentQuestion.type === 'finish')
      return
    setAnswers([
      ...answers,
      {
        question: currentQuestion,
        title: currentQuestion?.title || '',
        answers: currentAnswer
      }
    ])
    setCurrentAnswer([])
    let nextQuestion: Question | Finish | undefined
    currentAnswer.forEach(answerTitle => {
      let responce: undefined | Responce = currentQuestion?.responces
        ?.find(resp => resp.title === answerTitle)
      if (responce?.questions?.[0])
        nextQuestion = responce.questions[0]
    })
    setCurrentQuestion(nextQuestion)
  }
  const submitThenClose = async () => {
    await submit(answers, contactInfo)
    close()
  }

  return !page ? <div /> :
    <div className="Page h-100 d-flex flex-column justify-content-center">
      <div className='container'>
        <div className='row h-100 d-flex flex-row justify-content-between align-items-stretch'>
          <div className='col-12 col-md-5'>
            <h1 className='h1 mb-4'>
              {page.title}
            </h1>
            <h3 className='h3 mb-5'>
              {page.desc}
            </h3>
            <button
              className='Button Button--primary'
              onClick={() => open()}
            >
              Дальше
            </button>
          </div>
          <div className='col-6'>
            <Img
              className='w-100 h-100'
              file={page.img}
            />
          </div>
        </div>
      </div>
      <Popup
        opened={opened && !!currentQuestion}
        close={close}
        type={currentQuestion?.type || 'question'}
      >
        {currentQuestion?.type === 'question' &&
          <>
            <ProgressBar passedQuestions={[
              ...answers.map(answer => answer.question),
              currentQuestion
            ]} />
            <div className='container'>
              <div className='row'>
                <div className='col-12 col-lg-6'>
                  <h2 className='h2 mb-5'>
                    {currentQuestion?.title}
                  </h2>
                  <Selector
                    responces={currentQuestion?.responces || []}
                    selected={currentAnswer}
                    setSelected={setCurrentAnswer}
                    checkboxes={currentQuestion?.checkboxes}
                  />
                  <div className='d-flex flex-row justify-content-start mt-5'>
                    <Button
                      className='me-3'
                      classNameEnabled='Button--primary'
                      classNameDisabled='Button--gray cursor-disabled'
                      disabled={answers.length === 0}
                      _onClick={() => prev()}
                    >
                      Назад
                    </Button>
                    <Button
                      classNameEnabled='Button--secondary'
                      classNameDisabled='Button--gray cursor-disabled'
                      disabled={currentAnswer.length === 0}
                      _onClick={() => next()}
                    >
                      Дальше
                    </Button>
                  </div>
                </div>
                <div className='d-none d-lg-block col-6'>
                  <Img className='w-100 h-100' file={currentQuestion?.img} />
                </div>
              </div>
            </div>
          </>
        }
        {currentQuestion?.type === 'finish' &&
          <>
            <p className='p my-3'>
              {currentQuestion.title}
            </p>
            <input
              className='mt-3'
              value={contactInfo}
              onChange={e => setContactInfo(e.target.value)}
            />
            <Button _onClick={() => submitThenClose()}>
              {currentQuestion.button}
            </Button>
          </>
        }
      </Popup>
    </div>
}


export default Page
