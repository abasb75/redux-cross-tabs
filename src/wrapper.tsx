import { ReactNode, useEffect } from "react";
import React from "react";
import { Provider } from "react-redux"
import dispatchEvent from "./dispatchEvent";
import storageEvent from "./storageEvent";
import { Store } from "./types";


interface Prop{
    store:Store,
    children:ReactNode,
}

export default function Wrapper({store,children}:Prop){

    const storageLisiner = (e:StorageEvent) => storageEvent(e,store);

    useEffect(()=>{

        const unsubscribe = store.subscribe(()=>{
            dispatchEvent(store);
        });

        window.addEventListener('storage',storageLisiner);
        
        return ()=>{
            window.removeEventListener('storage',storageLisiner);
            unsubscribe();
        }

    },[]);

    return (<>
        <Provider store={store} >
            {children}
        </Provider>
    </>);

}
