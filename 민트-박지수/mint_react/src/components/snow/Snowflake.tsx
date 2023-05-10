import { useCallback, useEffect } from 'react';
import styles from './Snowflake.module.css';
import uuid from 'react-uuid';
import { SnowflakeStyles, SnowflakeType, makeSnowflakeStyles } from './Snow';

interface SnowflakeProps extends SnowflakeStyles {
  setSnowList: React.Dispatch<React.SetStateAction<SnowflakeType[]>>;
  _key: string;
}
const Snowflake: React.FC<SnowflakeProps> = ({
  setSnowList,
  _key,
  left,
  animationDuration,
  animationDelay,
  opacity,
}) => {
  const makeSnowflake = useCallback(() => {
    setSnowList((prev) => [
      ...prev,
      {
        ...makeSnowflakeStyles(),
        _key: uuid(),
      },
    ]);
  }, [setSnowList]);
  const removeSnowflake = useCallback(
    (key: string) => {
      setSnowList((prev) => prev.filter((snow) => snow._key !== key));
      makeSnowflake();
    },
    [makeSnowflake, setSnowList]
  );

  useEffect(() => {
    const id = setTimeout(() => {
      removeSnowflake(_key);
    }, (animationDuration + animationDelay) * 1000);
    return () => clearTimeout(id);
  }, [removeSnowflake, _key, animationDuration, animationDelay]);

  return (
    <div
      className={styles.snowflake}
      style={{ left, animationDuration: `${animationDuration}s`, animationDelay: `${animationDelay}s`, opacity }}
    ></div>
  );
};

export default Snowflake;
