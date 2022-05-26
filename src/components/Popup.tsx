import React from 'react'

import Div100vh from 'react-div-100vh'
import { Question } from './Store/Types/models'


export type PopupProps = {
  question: Question
  opened: boolean
}

const Popup: React.FC<PopupProps> = ({
  question,
  opened = false,
}) =>
  !opened ?
    <div />
    :
    <Div100vh className='Popup__background'>
      <div className='container h-100'>
        <div className='row h-100'>
          <div className='col h-100 d-flex flex-column justify-content-center'>
            <div className='Popup'>
              <div className='Popup__top'>

              </div>
              <div className='Popup__bottom'>
                <div className='row'>
                  <div className='col-6'>
                    <h2 className='h2 mb-5'>
                      {question.title}
                    </h2>
                    {question.responces?.map(answer =>
                      <div className='h3 mb-4'>
                        {answer.title}
                      </div>
                    )}
                    <div className='Button Button--secondary'>
                      Далее
                    </div>
                  </div>
                  <div className='col-6'>

                  </div>
                </div>
              </div>              
            </div>
          </div>
        </div>
      </div>
    </Div100vh>


export default Popup