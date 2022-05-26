import { ContentfulItem } from './contentfulTypes'


export interface Site extends ContentfulItem {
  title: string
  desc: string
  priceTitle: string
}

export interface Question extends ContentfulItem {
  title: string
  checkboxes: boolean
  desc: string
  responces?: Responce[]
}

export interface Responce extends ContentfulItem {
  title: string
  desc: string
  price: number
  questions?: Question[]
}