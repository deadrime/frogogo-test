export const formatMoney = number => `${Number(number).toLocaleString()} ₽`

export const getNoun = (number, [one, two, five]) => {
  number = Math.abs(number) % 100
  if (number > 10 && number < 20) return five
  number = number % 10
  if (number > 1 && number < 5) return two
  if (number == 1) return one
  return five
}