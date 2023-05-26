import { Story } from '@storybook/react';
// eslint-disable-next-line roweens-plugin/upper-layer-imports
import '@/app/styles/index.scss';
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom';
import { InitialEntry } from 'history';

export const RouterDecorator =
    (initialEntries?: InitialEntry[], path?: string) =>
    (StoryComponent: Story) => {
        if (initialEntries && path) {
            return (
                <MemoryRouter initialEntries={initialEntries}>
                    <Routes>
                        <Route path={path} element={<StoryComponent />} />
                    </Routes>
                </MemoryRouter>
            );
        }

        return (
            <BrowserRouter>
                <StoryComponent />
            </BrowserRouter>
        );
    };
