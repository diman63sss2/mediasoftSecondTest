import { classNames } from 'shared/lib/classNames/classNames';
import React, {
    InputHTMLAttributes, memo, useEffect, useRef,
} from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'id'>

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  // eslint-disable-next-line no-unused-vars
  onChange?: (value: string) => void;
  autofocus?: boolean;
  id: string;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autofocus,
        id,
        ...otherProps
    } = props;

    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (autofocus) {
            ref.current?.focus();
        }
    }, [autofocus]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {placeholder
                && (
                    <label htmlFor={id} className={cls.placeholder}>
                        {placeholder}
                    </label>
                )}
            <input
                ref={ref}
                className={cls.input}
                id={id}
                type={type}
                value={value}
                onChange={onChangeHandler}
                {...otherProps}
            />
        </div>
    );
});
