import React from 'react';
import { MailState } from '../Contexts/MailContext';
import { SingleMail } from '../Components/SingleMail';

export const Trash = () => {
  const {
    state: { trashMails },
  } = MailState();

  return (
    <>
      <h1 className="heading">Yash's Mail Box</h1>
      <ul className="mail-display">
        {trashMails?.map((mail) => (
          <>
            <SingleMail mail={mail} key={mail.mId} trash />
          </>
        ))}
      </ul>
      {
        trashMails?.length === 0 && <h2 className="empty-heading">Nothing In Trash</h2>
      }
    </>
  );
};
