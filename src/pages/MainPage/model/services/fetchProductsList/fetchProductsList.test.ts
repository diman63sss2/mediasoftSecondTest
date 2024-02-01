import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchProductsList } from 'pages/MainPage/model/services/fetchProductsList/fetchProductsList';

const products = [
    {
        id: 1,
        title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
        price: 109.95,
        category: "men's clothing",
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        rate: 3.9,
        isLoading: false,
    },
    {
        id: 2,
        title: 'Mens Casual Premium Slim Fit T-Shirts ',
        price: 22.3,
        category: "men's clothing",
        image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
        rate: 4.1,
        isLoading: false,
    },
    {
        id: 3,
        title: 'Mens Casual Premium Slim Fit T-Shirts ',
        price: 22.3,
        category: "men's clothing",
        image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
        rate: 4.1,
        isLoading: false,
    },
    {
        id: 4,
        title: 'Mens Casual Premium Slim Fit T-Shirts ',
        price: 22.3,
        category: "men's clothing",
        image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
        rate: 4.1,
        isLoading: false,
    },
];

describe('loginByUsername.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchProductsList, {
            productsPage: {
                page: 1,
                limit: 12,
            },
        });
        thunk.api.get.mockReturnValue(Promise.resolve({
            data: products,
            headers: {
                'x-total-count': 4,
            },
        }));
        const result = await thunk.callThunk({ page: 1 });

        expect(result.payload).toEqual({
            products,
            count: 4,
        });
    });
});
