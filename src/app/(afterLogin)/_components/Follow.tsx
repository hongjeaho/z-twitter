"use client";

import Image from "next/image";
import styles from "./follow.module.css";
interface Props {}

const Follow: React.FC<Props> = () => {
  const user = {
    id: "elonmusk",
    nickname: "Elon Musk",
    image: "/image/yRsRRjGO.jpg",
  };

  const onFollow = () => {};

  return (
    <div className={styles.container}>
      <div className={styles.userLogoSection}>
        <div className={styles.userLogo}>
          <Image src={user.image} alt={user.id} width={40} height={40} />
        </div>
      </div>
      <div className={styles.userInfo}>
        <div className={styles.title}>{user.nickname}</div>
        <div className={styles.count}>@{user.id}</div>
      </div>
      <div className={styles.followButtonSection}>
        <button onClick={onFollow}>팔로우</button>
      </div>
    </div>
  );
};

export default Follow;
