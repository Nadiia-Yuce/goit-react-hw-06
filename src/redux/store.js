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

export const changeFilter = query => {
  return {
    type: "contacts/changeFilter",
    payload: query,
  };
};

const initialState = {
  contacts: {
    items: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
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
    case "contacts/changeFilter": {
      return {
        ...state,
        filters: {
          name: action.payload,
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

// const toSearch = state.contacts.items.filter(contact =>
// contact.name.toLocaleLowerCase().includes(state.contacts.filters.nametoLowerCase())
// );
