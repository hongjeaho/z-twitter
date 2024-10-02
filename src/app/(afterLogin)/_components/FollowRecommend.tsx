import Follow from "./Follow";
import styles from "./followRecommend.module.css";

interface Props {}

const FollowRecommend: React.FC<Props> = () => {
  const users = [{ id: 1 }, { id: 1 }, { id: 1 }];
  return (
    <div className={styles.container}>
      <h3>팔로우 추천</h3>
      {users.map((user) => (
        <Follow key={user.id} />
      ))}
    </div>
  );
};

export default FollowRecommend;
