import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getUserProducts } from 'entities/User/model/selectors/getUserAuthData/getUserAuthData';
import cls from './ProductCartList.module.scss';

interface ProductCartListProps {
  className?: string;
}

export const ProductCartList = ({ className }: ProductCartListProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const productsUser = useSelector(getUserProducts);
    return (
        <div>
            <br />
        </div>
    );
};
