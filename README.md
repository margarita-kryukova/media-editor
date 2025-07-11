# Медиа-редактор

## Описание

[Медиа-редактор](https://margarita-kryukova.github.io/media-editor/) — это современное веб-приложение, построенное на React 19 с использованием TypeScript. Проект представляет собой лендинг-страницу с фото- и видеогалереями.

📋 **Тестовое задание** - Данный проект разработан в качестве тестового задания для демонстрации навыков адаптивной и кроссбраузерной верстки по макетам Figma.

## Особенности

- 📸 **Галерея изображений** с адаптивным дизайном
- 🎥 **Видео-галерея** с поддержкой multiple форматов (WebM, MP4)
- 💳 **Тарифные планы** - "Оптимальный" и "Профи"
- 📱 **Адаптивный дизайн** с поддержкой мобильных устройств
- 🎨 **Современный UI/UX** с использованием модульных SCSS
- ♿ **Accessibility** - поддержка клавиатурной навигации и скрин-ридеров
- 🔧 **Кастомные хуки** для управления состоянием

## Технологический стек

### Frontend

- **React 19** - основная библиотека
- **TypeScript** - типизация
- **Vite** - сборщик и dev-сервер
- **SCSS** - препроцессор CSS с модульной архитектурой

### Библиотеки

- **React Hook Form** - работа с формами
- **Swiper** - слайдеры и карусели
- **React Focus On** - управление фокусом для accessibility

### Инструменты разработки

- **ESLint** - линтинг кода
- **TypeScript ESLint** - проверка TypeScript кода
- **Vite Plugin SVGR** - работа с SVG иконками
- **Sass** - препроцессор CSS

## Структура проекта

```
src/
├── components/          # React компоненты
│   ├── Header/         # Хедер с навигацией
│   ├── HeroSection/    # Главная секция
│   ├── Gallery/        # Галерея изображений
│   ├── VideoGallery/   # Видео галерея
│   ├── AboutSection/   # О проекте
│   ├── TariffsSection/ # Тарифные планы
│   └── FormRequest/    # Форма обратной связи
├── hooks/              # Кастомные хуки
│   ├── useMenu/        # Управление меню
│   ├── useMediaQuery/  # Медиа-запросы
│   └── useIntersectionObserver/ # Intersection Observer API
└── shared/             # Общие ресурсы
    ├── constants/      # Константы и данные
    ├── types.ts        # TypeScript типы
    ├── ui/            # UI компоненты
    ├── icons/         # SVG иконки
    └── helpers/       # Вспомогательные функции
```

## Возможности

### 🎯 Основные функции

- Просмотр галереи изображений с интерактивными слайдерами
- Воспроизведение видео с поддержкой разных форматов
- Выбор и сравнение тарифных планов
- Форма обратной связи для заявок
- Адаптивное меню для мобильных устройств

### 🛠️ Технические особенности

- **Модульная архитектура** - каждый компонент имеет собственные стили
- **TypeScript интеграция** - полная типизация проекта
- **Оптимизация производительности** - ленивая загрузка и мемоизация
- **Accessibility** - поддержка клавиатурной навигации и ARIA атрибутов
- **SEO-оптимизация** - семантическая разметка HTML

### 📱 Адаптивность

- Поддержка различных размеров экранов
- Оптимизация для touch-устройств
- Адаптивная типографика
- Гибкие сетки и компоненты

## Конфигурация

### Vite

Проект использует Vite как основной bundler с плагинами:

- `@vitejs/plugin-react` - поддержка React
- `vite-plugin-svgr` - импорт SVG как React компонентов

### TypeScript

Настроены строгие правила TypeScript для обеспечения качества кода:

- Строгая проверка типов
- Проверка неиспользуемых переменных
- Обязательные типы для всех параметров

### ESLint

Конфигурация включает:

- Правила для React и React Hooks
- TypeScript правила
- Автоматическое форматирование

## Архитектурные решения

### Кастомные хуки

- `useMenu` - управление состоянием мобильного меню
- `useMediaQuery` - отслеживание изменений размеров экрана
- `useIntersectionObserver` - lazy loading и анимации появления

### Управление состоянием

- Локальное состояние через `useState`
- Пропсы для передачи данных между компонентами
- Кастомные хуки для переиспользуемой логики

### Оптимизация

- CSS модули для изоляции стилей
- TypeScript для статической проверки типов
- ESLint для качества кода
- Vite для быстрой сборки

## Лицензия

Проект создан для демонстрационных целей.

## 🌐 Демо

Демо-версия доступна по адресу: [GitHub Pages](https://margarita-kryukova.github.io/media-editor/)
