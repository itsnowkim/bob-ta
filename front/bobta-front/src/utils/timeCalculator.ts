export const timeCalculator = (time1: string, time2: string) => {
  const [frontHour, frontMinute] = time1.split(':')
  const [backHour, backMinute] = time2.split(':')

  const frontDate = new Date(0, 0, 0, parseInt(frontHour), parseInt(frontMinute), 0)
  const backDate = new Date(0, 0, 0, parseInt(backHour), parseInt(backMinute), 0)

  var diff = (backDate.getTime() - frontDate.getTime()) / 1000 / 60
  return diff
}
