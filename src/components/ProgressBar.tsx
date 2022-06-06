import React from 'react'
import { Question } from './Store/Types/models'


export type ProgressBarProps = {
  amount?: number
  passedQuestions: Question[]
}


const ProgressBar: React.FC<ProgressBarProps> = ({
  amount = 6,
  passedQuestions
}) => {
  const numberOfCols = Math.max(amount, passedQuestions.length)

  return (
    <div className='ProgressBar d-none d-lg-block'>
      <div className='container h-100'>
        <div className='row h-100 d-flex flex-row align-items-stretch'>
          {Array.from({ length: numberOfCols })
            .map((col, index) =>
              <div className='col p-0 position-relative'>
                {index < passedQuestions.length - 1 &&
                  <div className='ProgressBar__item__label'>
                    {passedQuestions[index].title}
                  </div>
                }
                <div className={`ProgressBar__item ${index < passedQuestions.length - 1 && 'ProgressBar__item--answered'}`}>
                </div>
              </div>
            )}
        </div>
      </div>
    </div>
  )
}


export default ProgressBar