import styles from "./trand.module.css";
import Link from "next/link";

interface Props {}

const Trand: React.FC<Props> = () => {
  return (
    <Link href={`/search?q=trand`} className={styles.container}>
      <div className={styles.count}>실시간</div>
      <div className={styles.title}>trand</div>
      <div className={styles.count}>실시간</div>
    </Link>
  );
};

export default Trand;
