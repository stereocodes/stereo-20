import React, { ReactNode, useState } from 'react';


interface IModalContextProvider {
  children?: ReactNode
}


export const modalContext = React.createContext({
  modalContextState: {open: false, id: 0},
  setModalContextState: (obj:any) => {}
});

function ModalContextProvider(props: IModalContextProvider) {
  const [modalContextState, setModalContextState] = useState({open: false, id: 0});
  return (
    <modalContext.Provider value={{modalContextState, setModalContextState}}>
      {props.children}
    </modalContext.Provider>
  )
}

export default ModalContextProvider;