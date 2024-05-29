import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {}

const BeforeLayout: React.FC<Props> = ({ children }) => {
  return <>{children}</>;
};

export default BeforeLayout;
