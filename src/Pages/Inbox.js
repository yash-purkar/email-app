import React from 'react';
import { MailState } from '../Contexts/MailContext';
import { SingleMail } from '../Components/SingleMail';
export const Inbox = () => {
  const {
    state: { mailsCopy, checkboxes },
    dispatch,
  } = MailState();

  const trasnsFormData = () => {
    let filteredData = [...mailsCopy];
    if (checkboxes.length > 0) {
      filteredData = filteredData.filter((item) =>
        checkboxes.every((elem) => item[elem])
      );
    }

    const unreadMails = filteredData.reduce(
      (acc, { unread }) => (unread ? acc + 1 : acc),
      0
    );

    return { filteredData, unreadMails };
  };

  const { filteredData, unreadMails } = trasnsFormData();
  return (
    <div className="main-inbox">
      <h1 className="heading">Yash's Mail Box</h1>
      <fieldset className="filters">
        <legend className="legend">Filters</legend>
        <label>
          <input
            type="checkbox"
            onChange={() => dispatch({ type: 'FILTERS', payload: 'unread' })}
            checked={checkboxes.includes('unread')}
            className="unread"
          />
          Unread
        </label>
        <label>
          <input
            type="checkbox"
            onChange={() => dispatch({ type: 'FILTERS', payload: 'isStarred' })}
            checked={checkboxes.includes('isStarred')}
            className="starred"
          />
          Starred
        </label>
      </fieldset>
      <h2 className="unread-mails">Unread : {unreadMails}</h2>

      <ul className="mail-display">
        {filteredData.map((mail) => (
          <SingleMail mail={mail} key={mail.mId} inbox allButtons />
        ))}
      </ul>
    </div>
  );
};
