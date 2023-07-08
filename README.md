[Ссылка на деплой Netlify](https://stellular-fairy-5ce2cb.netlify.app/)

## Данные для логина

Логин: admin
Пароль: 123

## Запуск проекта

`npm install` - устанавливаем зависимости
`npm run start:dev` - запуск сервера + frontend в dev режиме

---

## Скрипты

-   `npm run start` - Запуск frontend проекта на webpack dev server
-   `npm run start:vite` - Запуск frontend проекта на vite
-   `npm run start:dev` - Запуск frontend проекта на webpack dev server + backend
-   `npm run start:dev:vite` - Запуск frontend проекта на vite + backend
-   `npm run start:dev:server` - Запуск backend сервера
-   `npm run build:prod` - Сборка в prod режиме
-   `npm run build:dev` - Сборка в dev режиме (не минимизирован)
-   `npm run lint:ts` - Проверка ts файлов линтером
-   `npm run lint:ts:fix` - Исправление ts файлов линтером
-   `npm run lint:scss` - Проверка scss файлов style линтером
-   `npm run lint:scss:fix` - Исправление scss файлов style линтером
-   `npm run test:unit` - Запуск unit тестов с jest
-   `npm run test:ui` - Запуск скриншотных тестов с loki
-   `npm run test:ui:ok` - Подтверждение новых скриншотов
-   `npm run test:ui:ci` - Запуск скриншотных тестов в CI
-   `npm run test:e2e` - Скрипт для запуска end to end тестов
-   `npm run test:ui:report` - Генерация полного отчета для скриншотных тестов
-   `npm run test:ui:json` - Генерация json отчета для скриншотных тестов
-   `npm run test:ui:html` - Генерация HTML отчета для скриншотных тестов
-   `npm run storybook` - запуск Storybook
-   `npm run storybook:build` - Сборка storybook билда
-   `npm run prepare` - прекоммит хуки
-   `npm run remove-feature` - Скрипт для развертывания фичей

---

## Архитектура проекта

Проект написан в соответствии с методологией Feature sliced design

В проекте идет разделение на следующие слои:

-   `App` - настройки, стили и провайдеры для всего приложения
-   `Pages` - композиционный слой для сборки полноценных страниц из сущностей, фич и виджетов
-   `Widgets` - композиционный слой для соединения сущностей и фич в самостоятельные блоки
-   `Features` - взаимодействия с пользователем, действия, которые несут бизнес-ценность для пользователя
-   `Entities` - бизнес-сущности
-   `Shared` - переиспользуемый код, не имеющий отношения к специфике приложения

Ссылка на документацию - [feature sliced design](https://feature-sliced.design/ru/)

---

## Интернализация

В проекте используется библиотека i18next для работы с переводами.
Файлы с переводами хранятся в public/locales.
Добавлены переводы на Русский и Английский язык, реализована ленивая подгрузка переводов при переходе между страницами.

Документация i18next - [https://react.i18next.com/](https://react.i18next.com/)

---

## Тесты

В проекте используются 4 вида тестов:

1. Обычные unit тесты на jest - `npm run test:unit`
2. Тесты на компоненты с React testing library -`npm run test:unit`
3. Скриншотное тестирование с loki `npm run test:ui`
4. e2e тестирование с Cypress `npm run test:e2e`

Подробнее о тестах - [документация тестирования](/docs/tests.md)

---

## Линтинг

В проекте используется eslint для проверки typescript кода и stylelint для проверки CSS и SCSS файлов.

Для форматирования кода используется **Prettier**, работающий в связке с eslint.

Также для строгого контроля главных архитектурных принципов
используется собственный eslint plugin _eslint-plugin-roweens-plugin_,
который содержит 3 правила

1. path-checker - запрещает использовать абсолютные импорты в рамках одного модуля
2. layer-imports - проверяет корректность использования слоев с точки зрения FSD
   (например widgets нельзя использовать в features и entities)
3. public-api-imports - разрешает импорт из других модулей только из public api + autofix.

##### Запуск линтеров

-   `npm run lint:ts` - Проверка ts файлов линтером
-   `npm run lint:ts:fix` - Исправление ts файлов линтером
-   `npm run lint:scss` - Проверка scss файлов style линтером
-   `npm run lint:scss:fix` - Исправление scss файлов style линтером

---

## Storybook

В проекте для каждого компонента описываются стори-кейсы.
Для корректного тестирования используются **глобальные декораторы**.
Запросы на сервер мокаются с помощью storybook-addon-mock.

Файл со сторикейсами хранится рядом с компонентом и имеет расширение .stories.tsx

Запустить сторибук можно командой:

-   `npm run storybook`

Подробнее о [Storybook](/docs/storybook.md)

---

## Feature Flags

В проекте реализован механизм нереактивных Feature флагов, которые хранятся на сервере отдельно для каждого пользователя.
Флаги могут быть использованы для тестирования новых фичей (в данном проекте используются для смены нового и старого вариантов интерфейса)
Для удобной работы с фичами реализованы хелперы [ToggleFeatures](/src/shared/features/components/ToggleFeatures/ToggleFeatures.tsx) и [toggleFeatures](/src/shared/features/lib/toggleFeatures.ts), позволяющие удобно отрисовывать разные компоненты, менять содержимое переменной и.т.д. в зависимости от значения в фича флаге.
Написан скрипт [remove-features](/scripts/remove-feature.ts) для удобного раскатывания фичей в проекте.
Скрипт удаляет лишний код, связанный с feature флагами (ToggleFeatures и toggleFeatures), позволяя не удалять его руками при выкатывании фичи в продакшн.

---

## Конфигурация проекта

Для конфигурации и сборки проекта используется Webpack.

Вся конфигурация хранится в /config

-   /config/babel - babel
-   /config/build - конфигурация webpack
-   /config/jest - конфигурация тестовой среды
-   /config/storybook - конфигурация сторибука

В папке `scripts` находятся различные скрипты для рефакторинга\упрощения написания кода\генерации отчетов и тд.

Для гибкой работы с проектом в Webpack используются переменные окружения:

1. `IS_DEV` - режим разработки
2. `__API__` - url для отправки запросов к серверу
3. `__PROJECT__` - окружение, в котором прогоняется проект (storybook | frontend | jest)

---

## CI pipeline и pre commit хуки

Конфигурация github actions находится в /.github/workflows.
В ci прогоняются все виды тестов, сборка проекта и сторибука, линтинг.
Для ускорения линтинга при коммите используется **[lint-staged](https://www.npmjs.com/package/lint-staged)**.

---

### Работа с данными

Взаимодействие с данными осуществляется с помощью Redux toolkit.
По возможности переиспользуемые сущности нормализуются с помощью EntityAdapter.

Запросы на сервер отправляются с помощью **[RTK query](/src/shared/api/rtkApi.ts)** и **AsyncThunk**.

Для асинхронного подключения редюсеров (чтобы не тянуть их в общий бандл) используется
[DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx)

---

## Сущности (entities)

-   [Article](/src/entities/Article/README.md)
-   [Comment](/src/entities/Comment/README.md)
-   [Counter](/src/entities/Counter/README.md)
-   [Country](/src/entities/Country/README.md)
-   [Currency](/src/entities/Currency/README.md)
-   [Notification](/src/entities/Notification/README.md)
-   [Profile](/src/entities/Profile/README.md)
-   [Rating](/src/entities/Rating/README.md)
-   [User](/src/entities/User/README.md)

## Фичи (features)

-   [addCommentForm](/src/features/addCommentForm/README.md)
-   [articleEditButton](/src/features/articleEditButton/README.md)
-   [articleEditCodeBlock](/src/features/articleEditCodeBlock/README.md)
-   [articleEditImageBlock](/src/features/articleEditImageBlock/README.md)
-   [articleEditTextBlock](/src/features/articleEditTextBlock/README.md)
-   [articlePageGreeting](/src/features/articlePageGreeting/README.md)
-   [articleRating](/src/features/articleRating/README.md)
-   [articleRecommendationsList](/src/features/articleRecommendationsList/README.md)
-   [ArticleSortSelector](/src/features/ArticleSortSelector/README.md)
-   [ArticleTypeTabs](/src/features/ArticleTypeTabs/README.md)
-   [ArticleViewSelector](/src/features/ArticleViewSelector/README.md)
-   [AuthByUsername](/src/features/AuthByUsername/README.md)
-   [avatarDropdown](/src/features/avatarDropdown/README.md)
-   [editableProfileCard](/src/features/editableProfileCard/README.md)
-   [LangSwitcher](/src/features/LangSwitcher/README.md)
-   [notificationButton](/src/features/notificationButton/README.md)
-   [profileRating](/src/features/profileRating/README.md)
-   [ThemeSwitcher](/src/features/ThemeSwitcher/README.md)
-   [uiDesignSwitcher](/src/features/uiDesignSwitcher/README.md)
