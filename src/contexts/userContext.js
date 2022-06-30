import React, {createContext,useState} from 'react';

export const UsersContext = createContext();

export default function Provider({children}){
    const [userId, setUserId] = useState('');
    const [empresaId, setEmpresaId] = useState(''); 
    return (
        <UsersContext.Provider value = {{userId, setUserId, empresaId, setEmpresaId}}>
            {children}
        </UsersContext.Provider>
    )
}   