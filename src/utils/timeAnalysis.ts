export const timeAnalysis = (time: number) => {
  const date = new Date(Number(time) * 1000)
  const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
  const currentDate = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()

  return `${date.getFullYear()}-${month}-${currentDate}`
}
