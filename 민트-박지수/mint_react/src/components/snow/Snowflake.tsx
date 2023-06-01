import { useCallback, useEffect, useState } from 'react';
import styles from './Snowflake.module.css';
import uuid from 'react-uuid';

const MIN_DURATION = 0.3; // 애니메이션 최소 지속 시간

interface SnowflakeProps {
  setSnowList: React.Dispatch<React.SetStateAction<string[]>>;
  _key: string;
}
const Snowflake: React.FC<SnowflakeProps> = ({ setSnowList, _key }) => {
  const [animationProps, setAnimationProps] = useState({
    left: `${Math.random() * window.screen.width}px`,
    animationDuration: Math.random() * 20 + MIN_DURATION,
    animationDelay: Math.random() * 10,
    opacity: Math.random(),
  });

  const { left, animationDuration, animationDelay, opacity } = animationProps;

  const makeSnowflake = useCallback(() => {
    setSnowList((prev) => [...prev, uuid()]);
  }, [setSnowList]);
  const removeSnowflake = useCallback(
    (key: string) => {
      setSnowList((prev) => prev.filter((snow) => snow !== key));
      makeSnowflake();
    },
    [makeSnowflake, setSnowList]
  );

  useEffect(() => {
    setTimeout(() => {
      removeSnowflake(_key);
    }, (animationDuration + animationDelay) * 1000);
  }, [removeSnowflake, _key, animationDuration, animationDelay]);

  return (
    <div
      className={styles.snowflake}
      style={{ left, animationDuration: `${animationDuration}s`, animationDelay: `${animationDelay}s`, opacity }}
    ></div>
  );
};

export default Snowflake;
