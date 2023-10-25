import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { ProductsSortField } from 'entities/Product';
import cls from './ProductsSortSelector.module.scss';

interface ProductsSortSelectorProps {
  className?: string;
  sort: ProductsSortField;
  onChangeSort: (newSort: ProductsSortField) => void;

}

export const ProductsSortSelector = memo((props: ProductsSortSelectorProps) => {
    const {
        className,
        sort,
        onChangeSort,
    } = props;

    const { t } = useTranslation();

    const sortFieldOptions = useMemo<SelectOption<ProductsSortField>[]>(() => [
        {
            value: ProductsSortField.TITLE,
            content: t('Названию'),
        },
        {
            value: ProductsSortField.PRICE,
            content: t('Цене'),
        },
    ], [t]);

    return (
        <div className={classNames(cls.ProductsSortSelector, {}, [className])}>
            <Select value={sort} onChange={onChangeSort} options={sortFieldOptions} label={t('Соритровать ПО')} />
        </div>
    );
});
