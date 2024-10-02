import Trand from "./Trand";
import styles from "./TrandSection.module.css";

interface Props {}

const TrandSection: React.FC<Props> = () => {
  const trands = [{ id: 1 }, { id: 2 }, { id: 3 }];
  return (
    <div className={styles.trendBg}>
      <div className={styles.trend}>
        <h3>나를 위한 트랜드</h3>
        {trands.map((trand) => (
          <Trand key={trand.id} />
        ))}
      </div>
    </div>
  );
};

export default TrandSection;
