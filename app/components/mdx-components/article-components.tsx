// this is the file where all custom components available for use in an article goes.
// Feel free to add more as time goes on.

import React from "react";

export const components = {
  // Section headings/title in an article
  h2: ({ children }: { children: React.ReactNode }) => (
    <h2
      style={{
        padding: "22px 0",
        fontSize: "30px",
        fontWeight: "800",
        color: "#000",
        lineHeight: "30px",
      }}
    >
      {children}
    </h2>
  ),

  // Paragraphs
  p: ({ children }: { children: React.ReactNode }) => (
    <p
      style={{
        fontSize: "20px",
        fontWeight: "300",
        lineHeight: "35px",
        padding: "20px 0",
      }}
    >
      {children}
    </p>
  ),

  // Blockquotes
  blockquote: ({ children }: { children: React.ReactNode }) => (
    <blockquote
      style={{
        borderLeft: "5px solid #009E77",
        paddingLeft: "20px",
        fontStyle: "italic",
        marginTop: "20px",
        marginBottom: "20px",
      }}
    >
      {children}
    </blockquote>
  ),

  // Figures
  figure: ({ children }: { children: React.ReactNode }) => (
    <figure
      style={{
        margin: "0",
        padding: "0",
        textAlign: "center",
      }}
    >
      {children}
    </figure>
  ),

  // Captions for figures
  figcaption: ({ children }: { children: React.ReactNode }) => (
    <figcaption
      style={{
        fontSize: "14px",
        marginTop: "10px",
        color: "#666",
      }}
    >
      {children}
    </figcaption>
  ),

  // Lists
  ul: ({ children }: { children: React.ReactNode }) => (
    <ul
      style={{
        paddingLeft: "20px",
        marginBottom: "20px",
      }}
    >
      {children}
    </ul>
  ),

  ol: ({ children }: { children: React.ReactNode }) => (
    <ol
      style={{
        paddingLeft: "20px",
        marginBottom: "20px",
      }}
    >
      {children}
    </ol>
  ),

  // List items
  li: ({ children }: { children: React.ReactNode }) => (
    <li
      style={{
        marginBottom: "10px",
      }}
    >
      {children}
    </li>
  ),

  // Links
  a: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href} style={{ color: "#009E77" }} target="_blank">
      {children}
    </a>
  ),

  // Code blocks
  code: ({ children }: { children: React.ReactNode }) => (
    <code
      style={{
        backgroundColor: "#f8f9fa",
        padding: "2px 4px",
        borderRadius: "4px",
        fontSize: "90%",
      }}
    >
      {children}
    </code>
  ),
};
