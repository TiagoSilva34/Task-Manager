export const formatHour = (date: string): string => {
  let timeFormatted = new Date(date)
  let hours = timeFormatted.getHours()
  let seconds = timeFormatted.getSeconds()

  if(hours < 10) {
    hours = Number(`0${hours}`)
  }

  if(seconds < 10) {
    hours = Number(`0${seconds}`)
  }

  let ampm = hours > 12 ? 'PM' : "AM"

  return `${hours}:${seconds} ${ampm}`
}