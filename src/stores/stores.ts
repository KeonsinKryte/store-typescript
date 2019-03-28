import { observable } from 'mobx';

import api from '../utils/api';
import { type } from 'os';

export type departmentsArray = { name: string, department_id: number }[];
export type categoriesArray = { name: string, category_id: number, department_id: number }[];

class Store {
    @observable departments: departmentsArray | null = null;
    @observable loadingDeparments: boolean = false;

    @observable categories: categoriesArray | null | false = null;

    constructor() {
    }

    getDepartments() {
        if(this.loadingDeparments) return;
        this.loadingDeparments = true;
        var callback = (result: departmentsArray) => {
            console.log('desde App', result);
            //this.departments.set(result);
            this.departments = result;
        }
        api.getDepartments(callback);
    }

    getCategories() {
        api.getCategories((result: categoriesArray) => {
            console.log('Categories: ', result);
            this.categories = result;
        });
    }
}

const store = new Store();

export default store;