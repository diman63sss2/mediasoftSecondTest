import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Product, ProductsCategory, ProductsSortField } from 'entities/Product';
import { ProductsPageSchema } from 'pages/MainPage';
import { fetchProductsList, FetchProductsListResponse } from '../../model/services/fetchProductsList/fetchProductsList';

const productsAdapter = createEntityAdapter<Product>({
    selectId: (product) => product.id,
});

export const getProducts = productsAdapter.getSelectors<StateSchema>(
    (state) => state.productsPage || productsAdapter.getInitialState(),
);

const productsPageSlice = createSlice({
    name: 'productsPageSlice',
    initialState: productsAdapter.getInitialState<ProductsPageSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        page: 1,
        hasMore: true,
        countPages: 0,
        _inited: false,
        sort: ProductsSortField.TITLE,
        category: ProductsCategory.ALL,
    }),
    reducers: {
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setSort: (state, action: PayloadAction<ProductsSortField>) => {
            state.sort = action.payload;
        },
        setCategory: (state, action: PayloadAction<ProductsCategory>) => {
            state.category = action.payload;
        },
        setProductIsLoading: (state, action: PayloadAction<{id: number, isLoading: boolean}>) => {
            const { id, isLoading } = action.payload;
            if (state.entities !== undefined && state.entities[id] !== undefined) {
                state.entities[id]!.isLoading = isLoading;
            }
            console.log(`setProductIsLoading ${isLoading}`);
        },
        initState: (state) => {
            state.limit = 12;
            state._inited = true;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductsList.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchProductsList.fulfilled, (
                state,
                action: PayloadAction<FetchProductsListResponse>,
            ) => {
                state.isLoading = false;
                productsAdapter.setAll(state, action.payload.products);
                state.countPages = action.payload.count;
            })
            .addCase(fetchProductsList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const {
    reducer: productsPageReducer,
    actions: productsPageActions,
} = productsPageSlice;
