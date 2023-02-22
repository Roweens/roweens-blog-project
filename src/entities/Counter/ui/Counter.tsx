import { Button } from 'shared/ui/button/Button';

interface CounterProps {
  className?: string;
}

export const Counter: React.FC<CounterProps> = (props) => {
    const { className } = props;

    return (
        <div>
            <h1>value</h1>
        </div>
    );
};
