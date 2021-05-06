import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Homepage from './Homepage/homepage';
import Preferences from './PreferencesPage/preferences';

const NewsTiles = (): JSX.Element => {
  return (
    <div>
      {/* <Homepage /> */}
      <Preferences />
    </div>
  );
};

export default NewsTiles;
