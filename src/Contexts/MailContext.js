import React, { createContext, useReducer, useContext } from 'react';
import { mails } from '../Data/MailsDB';
import { reducer } from './Reducers';

export const MailContext = createContext();
export const MailContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    mailsData: mails,
    mailsCopy: mails,
    checkboxes: [],
    trashMails: [],
    spamMails: []
  });

  return (
    <MailContext.Provider value={{ state, dispatch }}>
      {children}
    </MailContext.Provider>
  );
};

export const MailState = () => useContext(MailContext);
