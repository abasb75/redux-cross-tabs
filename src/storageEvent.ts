import { Store } from "./types";

export default function storageEvent(e:StorageEvent,store:Store){

    const storageKey:string = store.params?.storageKey || '';
    const storageKeys:string[] = getStorageKeys(storageKey,store.params?.storageItems || []);
    
    if(!storageKeys.includes(e.key || '')){
        return;
    }

    if(e.oldValue == e.newValue){
        return;
    }

    try{
        const obj = [];
        const parsed = JSON.parse(e.newValue || '{}')
        obj[parsed.key] = parsed.value;
        store.dispatch({
            type:store.params?.actionType,
            payload:obj}
        );

    }catch{

    }
    

}

function getStorageKeys(storageKey:string,storageItems:string[]):string[]{
    return storageItems.map((item)=>(`${storageKey}_${item.toUpperCase()}`))
}