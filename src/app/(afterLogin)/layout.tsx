import { PropsWithChildren } from "react";
import styles from "./layout.module.css";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import zLogo from "/public/image/zlogo.png";
import Image from "next/image";
import NavMenu from "./_components/NavMenu";
import LogOutButton from "./_components/LogOutButton";

interface Props extends PropsWithChildren {}

const AfterLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <header className={styles.leftSectionWrapper}>
        <section className={styles.leftSection}>
          <div className={styles.leftSectionFixed}>
            <Link className={styles.logo} href={"/home"}>
              <div className={styles.logoPill}>
                <Image src={zLogo} width={40} height={40} alt="z.com" />
              </div>
            </Link>
            <div>
              <NavMenu />
              <Link href={`/compose/tweet`} className={styles.postButton}>
                게시하기
              </Link>
            </div>
            <LogOutButton />
          </div>
        </section>
      </header>
      <div className={styles.rightSectionWrapper}>
        <div className={styles.rightSectionInner}>
          <main className={styles.main}>{children}</main>
          <section className={styles.rightSection}>
            <form className={styles.search}>
              <CiSearch />
              <input type="search" />
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AfterLayout;
