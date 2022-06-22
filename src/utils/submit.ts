import axios from 'axios'

import { Answer } from '../components/Store/Types/models'


const spreadsheetId = '10_PPO9FWGrq2ncSYjkE6pSxOxZg8GVj_V3UCQrIJTpc'


const submit = async (answers?: Answer[], contactInfo?: string) =>
  axios.post(
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}:batchUpdate`,
    {
      requests: [
        {
          insertDimension: {
            range: {
              sheetId: 1,
              dimension: "row",
              startIndex: 0,
              endIndex: 0
            }
          }
        },
        // {
        //   pasteData: {

        //   }
        // }
      ]
    }
  )


export default submit