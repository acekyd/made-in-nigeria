// this is the file where all custom components available for use in an article goes.
// Feel free to add more as time goes on.

import React from "react";

export const components = {
  // use this for section headings/title in an article
  h3: ({ children }: { children: React.ReactNode }) => (
    <h3
      style={{
        padding: "26px 0",
        fontSize: "38px",
        fontWeight: "800",
        color: "#000",
        lineHeight: "28px",
      }}
    >
      {children}
    </h3>
  ),
  p: ({ children }: { children: React.ReactNode }) => (
    <p
      style={{
        fontSize: "16px",
        fontWeight: "400",
        lineHeight: "28px",
        padding: "20px 0",
      }}
    >
      {children}
    </p>
  ),
};
