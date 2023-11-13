import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import CartPage from 'pages/CartPage/ui/CartPage';
import { Page } from 'widgets/Page/Page';
import { useParams } from 'react-router-dom';
import { ProductDetails } from 'entities/Product/ui/ProductDetails/ProductDetails';
import cls from './ProductPage.module.scss';

interface ProductPageProps {
  className?: string;
}

const ProductPage = (props: ProductPageProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return (
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t('Статья не найдена')}
            </div>
        );
    }

    return (
        <Page className={classNames(cls.ProductPage, {}, [className])}>
            <ProductDetails id={id} />
        </Page>
    );
};

export default ProductPage;
