import type { StorageObject } from "./types";

export default function createInitialState<
A={}
>(
initialState:A,
storageKey:string,
storageItems:string[]
):A{
    const storageDataArray:StorageObject[] = getFromStorage(storageKey,storageItems);
    const storageData = arrayToObject(storageDataArray);
    if(typeof initialState !== 'object'){
        return storageData;
    }
    return {
        ...initialState,
        ...storageData,
    }
}

function getFromStorage(storageKey:string,storageItems:string[]):StorageObject[]{

    return storageItems.map((item:string)=>{
        const key:string = `${storageKey}_${item.toUpperCase()}`;
        const result = window.localStorage.getItem(key);
        if(!result){
            return {};
        }
        try{
            return JSON.parse(result);
        }catch{
            window.localStorage.removeItem(key);
            return {};
        }
    });

}

function arrayToObject(array:StorageObject[]):any{
    return array.reduce((o:{}, item:StorageObject) => Object.assign(o, {[item.key]: item.value}), {});
}