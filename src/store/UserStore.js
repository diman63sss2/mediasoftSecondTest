import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {

        this._isAuth = null;
        this._user = {};
        this._products = [];
        this._numberProducts = 0;
        makeAutoObservable(this);
    }

    setIsAuth(bool) {
        this._isAuth=bool;
    }

    setUser(user) {
        this._user = user;
    }

    setProducts(products) {
        this._products=products;
        let numberProducts = 0;
        for(let i = 0; i < products.length; i++) {
            numberProducts += products[i].num;
        }
        this._numberProducts = numberProducts;
    }


    get isAuth() {
        return this._isAuth;
    }

    get user() {
        return this._user;
    }

    get products() {
        return this._products;
    }


    get numberProducts() {
        return this._numberProducts;
    }
}