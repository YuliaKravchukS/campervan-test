export const INITIAL_STATE = {
  adverts: {
    items: [],
    loading: false,
    error: null,
    isFavorite: false,
  },
  filters: {
    details: "",
    location: "",
    type: "",
  },
  favorites: {
    items: [],
  },
};

export const dayMappings = {
  Monday: "MON",
  Tuesday: "TUE",
  Wednesday: "WED",
  Thursday: "THU",
  Friday: "FRI",
  Saturday: "SAT",
  Sunday: "SUN",
};
