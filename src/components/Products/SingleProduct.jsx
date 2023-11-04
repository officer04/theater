import { useParams } from 'react-router-dom';
import { useState } from 'react';

import circle from './../../images/x-circle.svg';

import data from './../../utils/dataProduct.json';
import theaterPlace from './../../utils/theaterPlace.json';

import Product from './Product';
import Button from '../UI/Button';
import Quest from '../Quest/Quest';

import styles from './../../style/SingleProduct.module.scss';

const SinglProduct = ({ onClickModal, modal, setModal }) => {
  let { id } = useParams();
  const product = data.find((x) => x.id === id);
  const [arr, setArr] = useState([{ id: 1, price: product.price, time: product.time }]);
  const dataInfo = data.slice(5);

  const addUp = () => {
    window.scroll(0, 0);
  };

  const addTicket = () => {
    const newPost = {
      id: arr.length + 1,
      price: product.price,
      time: product.time,
    };
    setArr([...arr, newPost]);
  };

  const closeModal = () => {
    setModal(false);
  };

  const closeTicket = (id) => {
    if (arr.length === 1) return
    setArr(arr.filter((obj) => obj.id !== id));
  };
  return (
    <div className={styles.overflow}>
      {modal ? (
        <div className={styles.modal}>
          <div className={styles.card}>
            <div className={styles.cardTitle}>
              <h1>Название спектакля: {product.title}</h1>
              <img src={circle} alt="circle" onClick={closeModal} />
            </div>
            {arr.map((obj) => (
              <Quest
                key={obj.id}
                id={obj.id}
                product={obj}
                theaterPlace={theaterPlace}
                closeTicket={closeTicket}
              />
            ))}
            <Button onClick={addTicket} className={styles.btn}>
              Добавить зрителя
            </Button>
            <div className={styles.total}>
              {arr.length >= 2 ? (
                <div>
                  <p>Скидка 15% при покупке от 2-x билетов</p>
                  <p>
                    Итого: <span>{Number(product.price) * Number(arr.length)}₽</span>{' '}
                    <span>
                      {Number(product.price) * Number(arr.length) -
                        Number(product.price) * Number(arr.length) * 0.15}
                      ₽
                    </span>{' '}
                  </p>
                </div>
              ) : (
                <p>Итого: {Number(product.price) * Number(arr.length)}₽</p>
              )}
              <div>
                <Button onClick={addTicket} className={styles.btn}>
                  Оплатить
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <div>
        <div className={styles.product}>
          <div className={styles.productHeader}>
            <div className={styles.productHeaderLeft}>
              <img src={product.img} width={750} height={350} alt="" />
            </div>
            <div className={styles.productHeaderRight}>
              <h1>{product.title}</h1>
              <p>Цена: {product.price}₽</p>
              <span>Время и дата спектакля: {product.time}</span>
              <Button className={styles.btn} onClick={onClickModal}>
                Купить билет
              </Button>
            </div>
          </div>
          <div className={styles.productBody}>
            <p>{product.descriptionFull1}</p>
            <p>{product.descriptionFull2}</p>
            <p>{product.descriptionFull3}</p>
          </div>
        </div>
        <h1 className={styles.title}>Похожие события</h1>
        <div className={styles.products}>
          {dataInfo.map((obj) => (
            <Product addUp={addUp} key={obj.id} {...obj} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SinglProduct;
