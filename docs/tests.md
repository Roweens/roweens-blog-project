#Jest тестирование

В проекте [jest](https://jestjs.io/ru/) применяется для тестирования:

-   Слайсов
-   Селекторов
-   Асинк санков
-   Вспомогательных функций

#####Команда для запуска Jest тестов
`npm run test:unit`

Пример файла с jest тестом:

```typescript jsx
import { Countries } from '@/entities/Country';
import { Currencies } from '@/entities/Currency';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchProfileData } from './fetchProfileData';

const data = {
    firstname: 'Roweens',
    lastname: 'Roweens',
    country: Countries.Russia,
    username: 'Cognus',
    city: 'Moscow',
    age: 20,
    currency: Currencies.USD,
    id: '1',
};

describe('fetchProfileData.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toBe(data);
    });

    test('error', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('1');

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
```

---

#RTL тестирование

[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) Применяется для тестирования React компонентов.
Позволяет тестировать корректность работы react компонента при взаимодействии с ним пользователя.

Для рендера компонента в рамках теста используется функция ComponentRender, которая оборачивает тестируемый компонент в необходимые обертки, провайдеры и принимает вторым аргументом исходное состояние для компонента, тему, роут и.т.д.

#####Команда для запуска RTL тестов
`npm run test:unit`

При помощи команды `npm run test:ui:json` можно сгенерировать визуальный отчёт, в котором будет удобно отображены результаты проведенных тестов.

Пример RTL теста:

```typescript jsx
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ComponentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { Profile } from '@/entities/Profile';
import { Currencies } from '@/entities/Currency';
import { Countries } from '@/entities/Country';
import { $api } from '@/shared/api/api';
import { editableProfileCardReducer } from '../../model/slice/editableProfileCardSlice';
import { EditableProfileCard as EditableProfile } from './EditableProfileCard';

const profile: Profile = {
    id: '1',
    firstname: 'admin',
    lastname: 'admin',
    age: 20,
    currency: Currencies.EUR,
    country: Countries.Germany,
    city: 'Moscow',
    username: 'admin123',
};

const options = {
    initialState: {
        editableProfileCard: {
            readonly: true,
            data: profile,
            form: profile,
        },
        user: {
            authData: {
                id: 1,
                username: 'admin',
            },
        },
    },
    asyncReducers: { editableProfileCard: editableProfileCardReducer },
};

describe('features/EditableProfileCard', () => {
    test('Toggle readonly', async () => {
        ComponentRender(<EditableProfile id="1" />, options);
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditBtn'),
        );
        expect(
            screen.getByTestId('EditableProfileCardHeader.CancelBtn'),
        ).toBeInTheDocument();
    });
    test('Reset data on cancel', async () => {
        ComponentRender(<EditableProfile id="1" />, options);
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditBtn'),
        );

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
        await userEvent.clear(screen.getByTestId('ProfileCard.age'));

        await userEvent.type(
            screen.getByTestId('ProfileCard.firstname'),
            'user',
        );
        await userEvent.type(screen.getByTestId('ProfileCard.age'), '25');

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('user');
        expect(screen.getByTestId('ProfileCard.age')).toHaveValue(25);

        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.CancelBtn'),
        );

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue(
            'admin',
        );
        expect(screen.getByTestId('ProfileCard.age')).toHaveValue(20);
    });
    test('One error check', async () => {
        ComponentRender(<EditableProfile id="1" />, options);
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditBtn'),
        );

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));

        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.SaveBtn'),
        );

        expect(
            screen.getByTestId('EditableProfileCard.Error.Text'),
        ).toBeInTheDocument();
    });
    test('PUT request should be sent', async () => {
        const mockPutRequest = jest.spyOn($api, 'put');
        ComponentRender(<EditableProfile id="1" />, options);
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditBtn'),
        );

        await userEvent.type(
            screen.getByTestId('ProfileCard.firstname'),
            'user',
        );

        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.SaveBtn'),
        );

        expect(mockPutRequest).toHaveBeenCalled();
    });
});
```

---

#Loki тестирование

В связке со Storybook для регрессионного скриншотного тестирования используется [Loki](https://loki.js.org/).
Loki снимает скриншоты со Storybook компонентов и проверяет их на изменения по сравнению с предыдущими скриншотами.

#####Команда для запуска Loki тестов
`npm run test:ui`

Для выполнения тестов нужно запустить Storybook и Docker.

При помощи команды `npm run test:ui:report` можно сгенерировать визуальный отчёт, на котором будет удобно сравнить предыдущую и измененную версию скриншота.

---

#E2E тестирование

Для сквозного тестирования в проекте используется библиотека [Cypress](https://www.cypress.io/).

Данные тесты находятся в корне проекта в папке cypress.

###Команда для запуска E2E тестов
`npm run test:e2e`
