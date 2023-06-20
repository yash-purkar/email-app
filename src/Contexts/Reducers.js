export const reducer = (state, action) => {
  switch (action.type) {
    case 'FILTERS':
      return {
        ...state,
        checkboxes: state.checkboxes.includes(action.payload)
          ? state.checkboxes.filter((item) => item !== action.payload)
          : [...state.checkboxes, action.payload],
      };
    case 'STAR_UNSTAR':
      return {
        ...state,
        mailsCopy: state.mailsCopy.map((item) =>
          item.mId === action.payload
            ? { ...item, isStarred: !item.isStarred }
            : item
        ),
      };

    case 'DELETE_MAIL':
      return {
        ...state,
        mailsCopy: state.mailsCopy.filter(
          ({ mId }) => mId !== action.payload.mId
        ),
        trashMails: [...state.trashMails, action.payload],
      };

    case 'READ_UNREAD':
      return {
        ...state,
        mailsCopy: state.mailsCopy.map((item) =>
          item.mId === action.payload ? { ...item, unread: !item.unread } : item
        ),
      };

    case 'REPORT_SPAM':
      return {
        ...state,
        mailsCopy: state.mailsCopy.filter(
          ({ mId }) => mId !== action.payload.mId
        ),
        spamMails: [...state.spamMails, action.payload],
      };
    default:
      return state;
  }
};
