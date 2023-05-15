## Сущность статьи

Описание: сущность статьи, используемая на странице отдельной статьи и списке статей.

#### Public api

-   Components

`ArticleDetails` - компонент с информацией о статье

`ArticleList` - Компонент со списком статей

-   types

`Article` - Тип, описывающий статью
`ArticleView` - Тип отображения статьи
`ArticleTextBlock` - Тип текстового блока статьи
`ArticleImageBlock` - Тип блока статьи с картинкой
`ArticleCodeBlock` - Тип блока статьи с кодом
`ArticleBlock`- Юнион типа блоков статьи
`ArticleBlockType` - Перечисление типов блока статьи
`ArticleType` - Перечисление типов статьи
`ArticleSortField` - Перечисление значений для сортировки
`ArticleDetailsSchema`- Схема для слайса

-   selectors

`selectArticleDetailsData` - Селектор для получения информации о текущей открытой статье
