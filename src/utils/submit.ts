import axios from 'axios'
// import { google } from 'googleapis'

import { Answer } from '../components/Store/Types/models'


// const sheets = google.sheets('v4')
const spreadsheetId = '10_PPO9FWGrq2ncSYjkE6pSxOxZg8GVj_V3UCQrIJTpc'
const APIkey = 'AIzaSyAOmpCAZLP5_5YHhO7aAN7kDMAJiaX9Uus'


const submit = async (answers?: Answer[], contactInfo?: string) =>
  // axios.post(
  //   // `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}:batchUpdate?key=${APIkey}`,
  //   `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}:batchUpdate`,
  //   {
  //     key: APIkey,
  //     requests: [
  //       {
  //         insertDimension: {
  //           range: {
  //             sheetId: 1,
  //             dimension: "row",
  //             startIndex: 1,
  //             endIndex: 10
  //           }
  //         }
  //       },
  //       // {
  //       //   pasteData: {

  //       //   }
  //       // }
  //     ]
  //   }
  // )
  axios.post(`https://sheet.best/api/sheets/b9d1400a-9571-412d-a831-f512dd137c3e`, {
    ...answers?.map((answer, index) => ({
      [index]: answer.answers.join(', ')
    }))
    .reduce((a, b) => ({...a, ...b})),
    "контакты": contactInfo
  })


export default submit