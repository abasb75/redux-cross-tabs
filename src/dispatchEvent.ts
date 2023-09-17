import { Store,StorageObject } from "./types";

export default function dispatchEvent(store:Store):void{

    const orderedState= getSort(store.getState());
    const statesAsArray = statesToArray(orderedState);

    statesAsArray.forEach((state)=>{
        if(!store.params?.storageItems.includes(state.key)){
            return;
        }
        const key:string = `${store.params.storageKey}_${state.key.toUpperCase()}`;
        const newValue:string = JSON.stringify(state);
        const oldValue:string = localStorage.getItem(key) || '';
        if(newValue !== oldValue){
            localStorage.setItem(key,newValue);
        }
    });

}

function getSort<T extends {} & []>(unordered:T):T{
    return Object.keys(unordered).sort().reduce(
        (obj:any, key:any):any => { 
            obj[key] = unordered[key];
            return obj;
        },
        {}
    ) ;
    
}

function statesToArray<T extends {} & []>(states:T):StorageObject[]{
    return Object.keys(states).map(
        (key:any)=>({key,value:states[key]})
    );
}