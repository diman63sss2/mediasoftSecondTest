import React from 'react';
import cl from './OrderInfo.module.css';
import { useForm } from 'react-hook-form';

const OrderInfo = ({ setStage }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    JSON.stringify(data);
    setStage('cart');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cl.form} action="">
      <h3 className={cl.title}>1-й шаг(информация о покупателе)</h3>
      <label className={cl.label} htmlFor="">
        <span>First Name:</span>
        <input
          className={cl.input}
          {...register('firstName', {
            required: 'Поле обязательное к заполнению',
          })}
          type="text"
        />
        {errors?.firstName && <p>{errors?.firstName?.message || 'Error'}</p>}
      </label>
      <label className={cl.label} htmlFor="">
        <span>Last Name:</span>
        <input
          className={cl.input}
          {...register('lastName', {
            required: 'Поле обязательное к заполнению',
          })}
          type="text"
        />
        {errors?.lastName && <p>{errors?.lastName?.message || 'Error'}</p>}
      </label>
      <label className={cl.label} htmlFor="">
        <span>Email:</span>
        <input
          className={cl.input}
          {...register('email', {
            required: 'Поле обязательное к заполнению',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Entered value does not match email format',
            },
          })}
          type="email"
        />
        {errors?.email && <p>{errors?.email?.message || 'Error'}</p>}
      </label>
      <button className={cl.button} type={'submit'}>
        Продолжить
      </button>
    </form>
  );
};

export default OrderInfo;
