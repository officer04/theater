import styles from './../../style/Quest.module.scss'
import { useState } from 'react';

const Quest = ({product, theaterPlace}) => {
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
      <p>Гость №{product.id}</p>
      <p>Цена: {product.price}₽; Время и дата: {product.time}</p>
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
