const initialValue = {
  isPopup: false,
};

const popupReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "OPENED_POPUP":
      return {
        ...state,
        isPopup: true,
      };
    case "CLOSED_POPUP":
      return {
        ...state,
        isPopup: false,
      };
    case "OPENED_POPUP_REPORT":
      return {
        ...state,
        isPopupReport: true,
      };
    case "CLOSED_POPUP_REPORT":
      return {
        ...state,
        isPopupReport: false,
      };
  }

  return state;
};

export default popupReducer;
