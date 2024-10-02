"use client";
import styles from "./logoutButtom.module.css";
import Image from "next/image";
interface Props {}

const LogOutButton: React.FC<Props> = () => {
  const me = {
    id: "kansin88",
    nickname: "hong",
    image: "/image/zlogo.png",
  };

  const onLogout = () => {};

  return (
    <button className={styles.logOutButton} onClick={onLogout}>
      <div className={styles.logOutUserImage}>
        <Image src={me.image} alt={me.id} width={40} height={40} />
      </div>
      <div className={styles.logOutUserName}>
        <div>{me.nickname}</div>
        <div>@{me.id}</div>
      </div>
    </button>
  );
};

export default LogOutButton;
