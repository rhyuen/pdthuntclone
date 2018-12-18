import React from "react";

const apiURL =
  process.env.NODE_ENV === "dev" ? "http://localhost:9387" : "/api";

const Context = React.createContext({
  apiURL
});

export const Provider = Context.Provider;
export const Consumer = Context.Consumer;
