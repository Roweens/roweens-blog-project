Для тестирования компонентов используются следующие декораторы:

-   `StyleDecorator` - Применение стилей для компонента
-   `ThemeDecorator` - Применение разных цветовых тем для компонента
-   `RouterDecorator` - Для корректной работы роутинга
-   `SuspenseDecorator` - Для lazy компонентов
-   `StoreDecorator` - Для передачи нужного состояния в компоненты, а также указания динамически подгружаемых редьюсеров
-   `NewDesignDecorator` - Для оборачивания компонента в корневой компонент с классом нового дизайна и установки соответствующего feature флага
-   `FeatureFlagsDecorator` - Для передачи в стори кейс нужных feature флагов

Пример стори-файла:

##Storybook 6

```typescript jsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};
```

---

##Storybook 7+

```typescript jsx
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleBlockType } from '../../model/consts/articleConsts';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'entities/Article/ArticleCodeBlockComponent',
    component: ArticleCodeBlockComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof ArticleCodeBlockComponent>;

type Story = StoryObj<typeof ArticleCodeBlockComponent>;

export const Normal: Story = {
    args: {
        block: {
            id: 4,
            type: ArticleBlockType.CODE,
            code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
        },
    },
    decorators: [StoreDecorator({})],
};

export const Dark: Story = {
    args: {
        block: {
            id: 4,
            type: ArticleBlockType.CODE,
            code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
        },
    },
    decorators: [StoreDecorator({}), ThemeDecorator(Theme.DARK)],
};

export const Red: Story = {
    args: {
        block: {
            id: 4,
            type: ArticleBlockType.CODE,
            code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
        },
    },
    decorators: [StoreDecorator({}), ThemeDecorator(Theme.RED)],
};
```
