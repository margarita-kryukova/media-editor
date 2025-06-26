/**
 * Получение правильного пути к файлам из папки public с учётом base URL
 */
export const getImagePath = (filePath: string): string => {
  const cleanPath = filePath.startsWith("/") ? filePath.slice(1) : filePath;

  // В dev режиме возвращаем путь как есть
  if (import.meta.env.DEV) {
    return `/${cleanPath}`;
  }

  // В production добавляем base URL
  const base = import.meta.env.BASE_URL || "/";
  return `${base}${cleanPath}`;
};
