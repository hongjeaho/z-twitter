import Main from "../_components/Main";
import Redirect from "./_components/Redirect";

interface Props {}

const Page: React.FC<Props> = () => {
  return (
    <>
      <Redirect />
      <Main />
    </>
  );
};

export default Page;
