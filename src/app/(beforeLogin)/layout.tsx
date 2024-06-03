import { PropsWithChildren, ReactNode } from "react";

interface Props extends PropsWithChildren {
  modal: ReactNode;
}

const BeforeLayout: React.FC<Props> = ({ children, modal }) => {
  return (
    <>
      <div>beforeLogin Layout</div>
      <div>{children}</div>
      <div>{modal}</div>
    </>
  );
};

export default BeforeLayout;
