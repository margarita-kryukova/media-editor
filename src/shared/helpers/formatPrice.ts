/**
 * Форматирует цену, добавляя пробелы как разделители тысяч
 * @param price - число для форматирования
 * @returns отформатированная строка с пробелами
 * @example formatPrice(1000) => "1 000"
 * @example formatPrice(1234567) => "1 234 567"
 */
export const formatPrice = (price: number): string => {
  if (typeof price !== "number" || isNaN(price)) {
    return "0";
  }

  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};
