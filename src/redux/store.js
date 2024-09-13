import { configureStore } from "@reduxjs/toolkit";

//оголошуємо фабрики екшенів
export const addContact = value => {
  return {
    type: "contacts/addContact",
    payload: value,
  };
};

export const startRemoving = () => ({
  type: "contacts/startRemoving",
});

export const deleteContact = id => {
  return {
    type: "contacts/deleteContact",
    payload: id,
  };
};

// const changeFilter = value => {
//   return {
//     type: "contacts/changeFilter",
//     payload: value,
//   };
// };

const initialState = {
  contacts: {
    items: [],
    isRemoving: false,
  },
  filters: {
    name: "",
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "contacts/addContact": {
      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: [...state.contacts.items, action.payload],
        },
      };
    }
    case "contacts/startRemoving": {
      return {
        ...state,
        contacts: {
          ...state.contacts,
          isRemoving: true,
        },
      };
    }
    case "contacts/deleteContact": {
      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: state.contacts.items.filter(
            task => task.id !== action.payload
          ),
          isRemoving: false,
        },
      };
    }

    default:
      return state;
  }
};

export const store = configureStore({
  reducer: rootReducer,
});
