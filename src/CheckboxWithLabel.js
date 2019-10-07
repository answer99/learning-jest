import React, { useState, useCallback } from 'react';

function CheckboxWithLabel({labelOn, labelOff}){

  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = useCallback(() => {
    setIsChecked(!isChecked);
  }, [isChecked]);

  return (
     <label>
        <input
          value={isChecked}
          type="checkbox"
          checked={isChecked}
          onChange={handleOnChange}
        />
        {isChecked ? labelOn : labelOff}
      </label>
  );
}

export default CheckboxWithLabel;
