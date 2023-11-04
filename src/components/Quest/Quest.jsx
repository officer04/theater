import { useState } from 'react';

import circle from './../../images/x-circle-white.svg';

import styles from './../../style/Quest.module.scss';

const Quest = ({ product, theaterPlace, closeTicket,id }) => {
  const [place, setPlace] = useState('');
  const [row, setRow] = useState('');
  const [active, setActive] = useState(false);

  const addActive = () => {
    setActive(!active);
  };

  const addPlace = (obj) => {
    setActive(!active);
    setPlace(obj.place);
    setRow(obj.row);
  };
  return (
    <div className={styles.quest}>
      <div className={styles.questClose}>
        <p>Гость №{product.id}</p>
        <img src={circle} alt={circle} onClick={() => closeTicket(id)} />
      </div>
      <p>
        Цена: {product.price}₽; Время и дата: {product.time}
      </p>
      <div>
        <div className={styles.dropDown} onClick={addActive}>
          Выберите место: ряд - {row}, место - {place}{' '}
        </div>
        {active ? (
          <div className={styles.dropDownActive}>
            {theaterPlace.map((obj) => (
              <div key={obj.id} onClick={() => addPlace(obj)}>
                <input type="radio" id="name" />
                <label for="name">
                  ряд: {obj.row} меcто: {obj.place}
                </label>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Quest;
