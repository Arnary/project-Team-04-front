import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchAreas, selectArea } from '../../redux/areas/areaSlice';

import css from "./AreaDropdown.module.css";

const AreaDropdown = () => {
  const dispatch = useDispatch();
  const areas = useSelector((state) => state.areas.list);
  const selectedArea = useSelector((state) => state.areas.selectedArea);
  const status = useSelector((state) => state.areas.status);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchAreas());
    }
  }, [status, dispatch]);

  const handleSelect = (areaId) => {
    const areaName = areas.find(area => area.id === areaId)?.name || "";
    dispatch(selectArea(areaName));
    setIsOpen(false);
  };

  return (
    <div className={css["custom-select-container"]}>
      <div className={css["custom-select"]} onClick={() => setIsOpen(!isOpen)}>
        <span className={css[selectedArea ? 'selected-text' : 'placeholder-text']}>{selectedArea ? selectedArea : 'Area'}
          <svg className={css["arrow-icon"]} >
            {isOpen ? (<use href='/img/icons.svg#icon-chevron-up-black'></use>) : (
              <use href='/img/icons.svg#icon-chevron-down-black'></use>)}
          </svg>
        </span>
      </div>
      {isOpen && (
        <ul className={css["custom-options"]}>
          {status !== 'loading' && status !== 'failed' &&
            areas.map((area) => (
              <li key={area.id} onClick={() => handleSelect(area.id)}>
                {area.name}
              </li>
            )
          )}
          {status === 'loading' &&
            <li className={css["loading-error-text"]}>Loading areas...</li>
          }
          {status === 'failed' &&
            <li className={css["loading-error-text"]}>Oops, something went wrong, please reload the page...</li>
          }
        </ul>
      )}
    </div>
  );
};

export default AreaDropdown;
