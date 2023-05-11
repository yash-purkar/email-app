import React from 'react';
import { MailState } from '../Contexts/MailContext';
import { NavLink } from 'react-router-dom';

export const SingleMail = ({ mail, inbox, spam, trash,allButtons }) => {
  const { dispatch } = MailState();
  const { mId, unread, isStarred, subject, content } = mail;

  return (
    <li className="card" style={{ backgroundColor: unread && '#f6f8fc' }}>
      <div className="card-header">
        <h3 className="subject">Subject: {subject}</h3>
       {allButtons && <button
          onClick={() => dispatch({ type: 'STAR_UNSTAR', payload: mId })}
          className="star-btn"
        >
          {isStarred ? 'unstar' : 'star'}
        </button>}
      </div>
      <p>{content}</p>

      <div>
        {inbox && (
          <NavLink to={`/inbox/${mId}`} className="view">
            View Details
          </NavLink>
        )}

        {spam && (
          <NavLink to={`/spam/${mail.mId}`} className="view">
            View Details
          </NavLink>
        )}

        {trash && (
          <NavLink to={`/trash/${mail.mId}`} className="view">
            View Details
          </NavLink>
        )}
      </div>
     {allButtons && <div className="operations-btns">
        <button
          onClick={() => dispatch({ type: 'DELETE_MAIL', payload: mail })}
          className="button delete"
        >
          Delete
        </button>
        <button
          onClick={() => dispatch({ type: 'READ_UNREAD', payload: mId })}
          className="button read-unread"
        >
          {unread ? 'Mark as Read' : 'Mark As Unread'}
        </button>
        <button
          onClick={() => dispatch({ type: 'REPORT_SPAM', payload: mail })}
          className="button report"
        >
          Report Spam
        </button>
      </div>}
    </li>
  );
};
