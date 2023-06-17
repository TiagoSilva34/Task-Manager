export const formatDate = (date: string): string => {
  let dateFormatted = new Date(date)
  let day = dateFormatted.getDate() + 1 < 10 ? `0${dateFormatted.getDate()}` : dateFormatted.getDate()
  let month = dateFormatted.getMonth() + 1 < 10 ? `0${ dateFormatted.getMonth() + 1}` :  dateFormatted.getMonth() + 1
  let year = dateFormatted.getFullYear()

  return `${day}/${month}/${year}`
}