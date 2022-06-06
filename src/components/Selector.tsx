import React from 'react'

import _ from 'lodash'

import { Responce } from './Store/Types/models'


export type SelectorProps = {
  responces: Responce[]
  selected: string[]
  setSelected: (value: string[]) => void
  checkboxes?: boolean
}


const Selector: React.FC<SelectorProps> = ({
  responces,
  selected,
  setSelected,
  checkboxes
}) =>
  <div className={`Selector ${checkboxes ? 'Selector--checkboxes' : 'Selector--radio'}`}>
    {responces.map((responce: Responce) =>
      <div
        className={`Selector__item ${selected.includes(responce.title) && 'Selector__item--selected'}`}
        onClick={() =>
          setSelected(checkboxes ?
            _.xor(selected, [responce.title])
            :
            selected.includes(responce.title) ? [] : [responce.title]
      )}>
        <div className='Selector__item__title'>
          {responce.title}
        </div>
        <div className='Selector__item__desc'>
          {responce.desc}
        </div>
      </div>
    )}
  </div>


export default Selector