import { classNames, Mods } from 'shared/lib/classNames/classNames';
import React, {
    InputHTMLAttributes,
} from 'react';
import { UseFormReturn, FieldValues } from 'react-hook-form';
import cls from './InputController.module.scss';

type HTMLInputControllerProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'id' | 'readOnly'>

interface InputControllerProps extends HTMLInputControllerProps {
  className?: string;
  value?: string;
  // eslint-disable-next-line no-unused-vars
  autofocus?: boolean;
  id: string;
  readonly?: boolean;
  control: UseFormReturn['control'];
  name: string;

}

export const InputController = (props: InputControllerProps) => {
    const {
        className,
        value,
        type = 'text',
        placeholder,
        autofocus,
        id,
        readonly,
        name,
        control,
        ...otherProps

    } = props;

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    return (
        <div className={classNames(cls.InputWrapper, mods, [className])}>
            {placeholder
            && (
                <label htmlFor={id} className={cls.placeholder}>
                    {placeholder}
                </label>
            )}
            <input
                className={cls.input}
                id={id}
                type={type}
                value={value}
                readOnly={readonly}
                {...otherProps}
                {...control.register(name)}
            />
        </div>
    );
};
