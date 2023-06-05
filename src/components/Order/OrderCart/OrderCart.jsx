import React from 'react';
import cl from './OrderCart.module.css';
import { useForm } from 'react-hook-form';
import ReactSelect from 'react-select';

const OrderCart = ({ setStage }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = () => {
    setStage('address');
  };

  const months = [
    { value: '01', label: '01' },
    { value: '02', label: '02' },
    { value: '03', label: '03' },
    { value: '04', label: '04' },
    { value: '05', label: '05' },
    { value: '06', label: '06' },
    { value: '07', label: '07' },
    { value: '08', label: '08' },
    { value: '09', label: '09' },
    { value: '10', label: '10' },
    { value: '11', label: '11' },
    { value: '12', label: '12' },
  ];

  const year = [
    { value: '23', label: '23' },
    { value: '24', label: '24' },
    { value: '25', label: '24' },
    { value: '26', label: '26' },
    { value: '27', label: '27' },
    { value: '28', label: '28' },
    { value: '29', label: '29' },
  ];

  return (
    <form className={cl.form} onSubmit={handleSubmit(onSubmit)}>
      <h3 className={cl.title}>2-й шаг(информация о карте)</h3>
      <div className={cl.card}>
        <img
          className={cl.background}
          src="https://pcvector.net/uploads/posts/2018-08/1533326959_low-poly-background-generator-min.png"
          alt=""
        />
        <div className={cl.fields}>
          <div className={cl.head}>
            <div className={cl.inputContainer}>
              <label className={cl.label} htmlFor="number">
                <span>NUM:</span>
                <input
                  maxLength="16"
                  id={'number'}
                  className={cl.inputNum}
                  placeholder={'################'}
                  {...register('number', {
                    required: 'Please enter your card number',
                    pattern: {
                      value: /^[0-9]*$/,
                      message: 'Card number must contain only digits',
                    },
                    maxLength: {
                      value: 16,
                      message: 'Card number must have maximum of 16 digits',
                    },
                    minLength: {
                      value: 16,
                      message: 'Card number must have min of 16 digits',
                    },
                  })}
                  type="text"
                />
              </label>
            </div>
            {errors?.number && (
              <p className={cl.error}>{errors?.number?.message || 'Error'}</p>
            )}
          </div>
          <div className={cl.footer}>
            <div>
              <div className={cl.footerHead}>Month/Year</div>
              <div className={cl.date}>
                <ReactSelect
                  required
                  placeholder={'##'}
                  isClearable
                  options={months}
                />
                <span>/</span>
                <ReactSelect
                  required
                  placeholder={'##'}
                  isClearable
                  options={year}
                />
              </div>
            </div>
            <div className={cl.code}>
              {errors?.cvv && (
                <p className={cl.error}>{errors?.cvv?.message || 'Error'}</p>
              )}
              <label htmlFor="">
                <span>Code:</span>
                <input
                  maxLength={3}
                  placeholder={'cvv'}
                  type="text"
                  {...register('cvv', {
                    required: 'Please enter your cvv code',
                    pattern: {
                      value: /^[0-9]*$/,
                      message: 'CVV code number must contain only digits',
                    },
                    minLength: {
                      value: 3,
                      message: 'CVV code must have min of 3 digits',
                    },
                  })}
                />
              </label>
            </div>
          </div>
        </div>
      </div>
      <button className={cl.button} type={'submit'}>
        Продолжить
      </button>
    </form>
  );
};

export default OrderCart;
