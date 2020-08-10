import React from 'react';

function save(key: string, data: any) {
    let obj = data instanceof Object ? { ...data } : { value: data };
    const dataString = JSON.stringify(obj);
    localStorage.setItem(key, dataString);
}

function load(key: string) {
    const dataString = localStorage.getItem(key);
    if (dataString) {
        const dataObj = JSON.parse(dataString);
        return dataObj;
    }
    return null;
}

function exists(key: string) {
    const dataString = localStorage.getItem(key);
    if (dataString)
        return true;
    else   
        return false;
}

export {save, load, exists};