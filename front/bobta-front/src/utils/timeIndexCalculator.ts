export const timeIndexCalculator = (time: string) => {
  const [endHour, endMinuteDecimal] = time.split(':') // 파라미터로 넘긴 시간을 :으로 쪼개서 시간과 분을 얻음

  var startDate = new Date(0, 0, 0, 9, 0, 0) // 시작 시간은 항상 아침 9시
  //const endMinute = (parseInt(endMinuteDecimal) / 100) * 60
  const endMinute = parseInt(endMinuteDecimal)
  const endDate = new Date(0, 0, 0, parseInt(endHour), endMinute, 0) // 인자로 넘어온 시간을 끝 시간으로 설정
  var diff = endDate.getTime() - startDate.getTime()
  var res = diff / 1000 / 60 / 15
  return res
}
