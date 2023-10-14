import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';
import cls from './ProductPagePagination.module.scss';

interface ProductPagePaginationProps {
  className?: string;
  productsCount: number;
  currentPage: number;
  productsLimit: number;
  loadPage: (page: number) => void;
}

interface paginationItem {
  id: number,
  current: boolean,
}

const newArray = (
    count: number,
    limit: number,
    page: number,
) => new Array(Math.ceil(count / limit)).fill(0).map((value, index) => ({
    id: index + 1,
    current: page === index + 1,
}));

export const ProductPagePagination = memo((props: ProductPagePaginationProps) => {
    const {
        className,
        productsCount,
        productsLimit,
        currentPage,
        loadPage,
    } = props;

    const [items, setItems] = useState<paginationItem[]>(newArray(productsCount, productsLimit, currentPage));

    useEffect(() => {
        setItems(newArray(productsCount, productsLimit, currentPage));
    }, [productsCount, productsLimit, currentPage]);

    return (
        <ul className={classNames(cls.ProductPagePagination, {}, [className])}>
            {
                items.map((el) => {
                    if (el.current) {
                        return (
                            <Button
                                className={classNames(`${cls.item} ${cls.active}`, {}, [])}
                                key={el.id}
                            >
                                {el.id}
                            </Button>
                        );
                    }
                    return (
                        <Button
                            className={classNames(cls.item, {}, [])}
                            key={el.id}
                            onClick={() => loadPage(el.id)}
                        >
                            {el.id}
                        </Button>
                    );
                })
            }
        </ul>
    );
});
