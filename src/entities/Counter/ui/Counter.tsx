import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const { t } = useTranslation();

    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="value-title">
                {counterValue}
            </h1>
            <Button
                theme={ThemeButton.OUTLINE}
                onClick={increment}
                data-testid="increment-button"
            >
                {t('Increment')}
            </Button>
            <Button
                theme={ThemeButton.OUTLINE}
                onClick={decrement}
                data-testid="decrement-button"
            >
                {t('Decrement')}
            </Button>
        </div>
    );
};
