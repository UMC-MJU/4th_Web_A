import React, { useState } from 'react';
import Snowflake from './Snowflake';
import uuid from 'react-uuid';

const INITIAL_SNOW_COUNT = 500;
const MIN_DURATION = 5; // 애니메이션 최소 지속 시간
export interface SnowflakeStyles {
  left: string;
  animationDuration: number;
  animationDelay: number;
  opacity: number;
}
export interface SnowflakeType extends SnowflakeStyles {
  _key: string;
}

export function makeSnowflakeStyles(): SnowflakeStyles {
  return {
    left: `${Math.random() * window.screen.width}px`,
    animationDuration: Math.random() * 20 + MIN_DURATION,
    animationDelay: Math.random() * 10,
    opacity: Math.random(),
  };
}

const Snow = () => {
  const [snowList, setSnowList] = useState<SnowflakeType[]>(
    Array.from({ length: INITIAL_SNOW_COUNT }, () => ({
      ...makeSnowflakeStyles(),
      _key: uuid(),
    }))
  );

  return (
    <div>
      {snowList.map((snow) => (
        <Snowflake key={snow._key} setSnowList={setSnowList} {...snow} />
      ))}
    </div>
  );
};

export default Snow;
