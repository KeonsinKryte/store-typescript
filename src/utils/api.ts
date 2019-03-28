import { departmentsArray, categoriesArray } from "../stores/stores";

var apiRoot = 'https://backendapi.turing.com';

function getDepartments(callback: (result: departmentsArray) => void) {
    fetch(`${apiRoot}/departments`)
        .then((rawInfo) => {
            return rawInfo.json();
        })
        .then((departments) => {
            callback(departments);
        });
}

function getCategories(callback: (result: categoriesArray) => void) {
    fetch(`${apiRoot}/categories`)
        .then((rawInfo) => {
            return rawInfo.json();
        })
        .then((categories) => {
            callback(categories.rows);
        });
}

export default {
    getDepartments,
    getCategories
};