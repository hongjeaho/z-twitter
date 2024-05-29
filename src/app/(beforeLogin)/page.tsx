import Image from "next/image";
import zLogo from "/public/image/zlogo.png";
import Link from "next/link";
import styles from "./page.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Image src={zLogo} alt="login" />
      </div>
      <div className={styles.right}>
        <h1>지금 일어나고 있는 일</h1>
        <h2>지금 가입하세요</h2>
        <Link href={`/i/flow/signup`} className={styles.signup}>
          {" "}
          계정 만들기{" "}
        </Link>
        <h3>이미 가입 하셨나요?</h3>
        <Link href={`/login`} className={styles.login}>
          로그인
        </Link>
      </div>
    </div>
  );
};

export default Home;
