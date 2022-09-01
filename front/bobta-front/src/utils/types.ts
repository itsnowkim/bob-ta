export type TimeTableForm = {
  username: string
  formData: FormData
}

export type ResultParams = {
  output: any
  user_name: string
}

export type ResultType = {
  meets: object
  participants: string[]
  absent: number
}

export type AddMeetForm = {
  username: string
  formData: FormData
  id: string
}
