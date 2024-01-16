import { MDXRemote } from "next-mdx-remote/rsc";
import { components } from "./article-components";

export const CustomMDX = (props) => {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
};
