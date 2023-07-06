//封装一个获取当前时间段的函数 早上|上午|下午|晚上
export const getTime = () => {
  let message = ''
  const Hours = new Date().getHours()
  if (Hours <= 9) {
    message = '早上'
  } else if (Hours <= 12) {
    message = '上午'
  } else if (Hours <= 18) {
    message = '下午'
  } else {
    message = '晚上'
  }
  return message
}
// getTime()
