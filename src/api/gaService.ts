import axios from 'axios'

export const getVisitors = async () => {
  const response = await axios.post('https://accounts.google.com/o/oauth2/token', {
    //보내고자 하는 데이터
    client_id: process.env.REACT_APP_OAUTH_CLIENT_ID,
    client_secret: process.env.REACT_APP_OAUTH_CLIENT_PW,
    refresh_token: process.env.REACT_APP_GA_REFRESH_TOKEN,
    grant_type: 'refresh_token',
  })

  const {access_token} = response.data

  const {data} = await axios.get(
    'https://www.googleapis.com/analytics/v3/data/ga?access_token=' +
      access_token +
      '&ids=ga%3A274705872&dimensions=ga%3Adate&metrics=ga%3Ausers%2Cga%3Asessions%2Cga%3Apageviews&start-date=7daysAgo&end-date=today',
  )

  return data
}
