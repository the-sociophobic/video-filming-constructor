import React from 'react'
// import ReactDOM from 'react-dom/client'

import Popup from './Popup'
import { Context } from './Store'



const Page: React.FC<{}> = () => {
  const [opened, setOpened] = React.useState(false)
  const context = React.useContext(Context)
  const page = context?.contentful?.sites?.[0]

  return !page ? <div /> :
    <div className="Page h-100">
      <div className='container h-100'>
        <div className='row h-100 d-flex flex-row align-items-center'>
          <div className='col-12 col-md-5'>
            <h1 className='h1 mb-4'>
              {page.title}
            </h1>
            <h3 className='h3 mb-5'>
              {page.desc}
            </h3>
            <button
              className='Button Button--primary'
              onClick={() => setOpened(true)}
            >
              Дальше
            </button>
          </div>
          <div className='col-6'>

          </div>
        </div>
      </div>
      <Popup
        question={page.firstQuestion}
        opened={opened}
      />
    </div>
}


export default Page
