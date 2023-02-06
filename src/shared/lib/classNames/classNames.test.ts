import { classNames } from './classNames';

describe('classNames', () => {
    test('only 1st param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additional class', () => {
        const expected = 'someClass addClass1 addClass2';
        expect(classNames('someClass', {}, ['addClass1', 'addClass2']))
            .toBe(expected);
    });

    test('with mods', () => {
        const expected = 'someClass addClass1 addClass2 hovered scrollable';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: true },
            ['addClass1', 'addClass2'],
        ))
            .toBe(expected);
    });

    test('with false mod', () => {
        const expected = 'someClass addClass1 addClass2 hovered';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: false },
            ['addClass1', 'addClass2'],
        ))
            .toBe(expected);
    });

    test('with undefined mod', () => {
        const expected = 'someClass addClass1 addClass2 hovered';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: undefined },
            ['addClass1', 'addClass2'],
        ))
            .toBe(expected);
    });
});
