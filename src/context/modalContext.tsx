import React, { ReactNode, useState } from 'react';


interface IModalContextProvider {
  children?: ReactNode
}


export const modalContext = React.createContext({
  modalContextState: false,
  setModalContextState: (open:boolean) => {}
});

function ModalContextProvider(props: IModalContextProvider) {
  const [modalContextState, setModalContextState] = useState(false);
  return (
    <modalContext.Provider value={{modalContextState, setModalContextState}}>
      {props.children}
    </modalContext.Provider>
  )
}

export default ModalContextProvider;