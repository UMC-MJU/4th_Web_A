import React, { useState } from 'react';
import Snowflake from './Snowflake';
import uuid from 'react-uuid';

const INITIAL_SNOW_COUNT = 500;

const Snow = () => {
  const [snowList, setSnowList] = useState<string[]>(Array.from({ length: INITIAL_SNOW_COUNT }, (_, i) => uuid()));

  return (
    <div>
      {snowList.map((key) => (
        <Snowflake key={key} setSnowList={setSnowList} _key={key} />
      ))}
    </div>
  );
};

export default Snow;
