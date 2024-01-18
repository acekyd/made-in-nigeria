import { ReactSVG } from "react-svg";

interface IconProps {
  name: string;
}

export const Icon = ({ name }: IconProps) => {
  return <ReactSVG src={`/icons/${name}.svg`} />;
};
