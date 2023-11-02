import data from './../../utils/dataProduct.json';
import Product from './../Products/Product';
import listTheaters from './../../utils/listTheaters.json';

import styles from './../../style/Products.module.scss';
import { useState } from 'react';

const Products = () => {
  const [active, setActive] = useState(false);
  const [theaters, setTheaters] = useState('Выберите театр');

  const addActive = () => {
    setActive(!active);
  };

  const addTheater = (title) => {
    setTheaters(title);
    setActive(!active);
  };

  const addUp = () => {
    window.scroll(0, 0);
  };
  return (
    <div>
      <h1 className={styles.title}>Афиша</h1>
      <p className={styles.text}>Выбор театра</p>
      <div className={styles.dropDown} onClick={addActive}>
        {theaters}
      </div>
      {active ? (
        <div className={styles.dropDownActive}>
          {listTheaters.map((obj) => (
            <div key={obj.id} onClick={() => addTheater(obj.title)}>
              <input type="radio"  id="name" />
              <label  for="name" >
                {obj.title}
              </label>
            </div>
          ))}
        </div>
      ) : null}
      <div className={styles.products}>
        {data.map((obj) => (
          <Product addUp={addUp} key={obj.id} {...obj} />
        ))}
      </div>
    </div>
  );
};

export default Products;
