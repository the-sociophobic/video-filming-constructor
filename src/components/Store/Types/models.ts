import { ContentfulItem, File } from './contentfulTypes'


export interface Site extends ContentfulItem {
  type: 'site'
  title: string
  desc: string
  priceTitle: string
  firstQuestion: Question
  img?: File
}

export interface Finish extends ContentfulItem {
  type: 'finish'
  title: string
  button: string
}
export interface Question extends ContentfulItem {
  type: 'question'
  titleId: string
  title: string
  checkboxes: boolean
  noSum: boolean
  desc: string
  responces?: Responce[]
  img?: File
}

export interface Responce extends ContentfulItem {
  type: 'responce'
  titleId: string
  title: string
  desc: string
  currencyType: boolean
  price: number
  questions?: (Question | Finish)[]
  info: string
}

export interface Answer {
  question: Question
  title: string
  answers: string[]
}