import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {}

const AfterLayout: React.FC<Props> = ({ children }) => {
  return <>{children}</>;
};

export default AfterLayout;
