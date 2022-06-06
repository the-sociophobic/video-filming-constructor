import { ContentfulItem, File } from './contentfulTypes'


export interface Site extends ContentfulItem {
  title: string
  desc: string
  priceTitle: string
  firstQuestion: Question
  img?: File
}

export interface Question extends ContentfulItem {
  title: string
  checkboxes: boolean
  desc: string
  responces?: Responce[]
  img?: File
}

export interface Responce extends ContentfulItem {
  title: string
  desc: string
  price: number
  questions?: Question[]
}

export interface Answer {
  question: Question
  title: string
  answers: string[]
}