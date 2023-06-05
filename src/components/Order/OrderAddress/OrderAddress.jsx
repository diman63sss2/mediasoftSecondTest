import React, {useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import cl from './OrderAddres.module.css';
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { cleanCart } from '../../../store/userActions';

mapboxgl.accessToken =
  'pk.eyJ1IjoiZGltYW42M3MiLCJhIjoiY2xpM3N3ZTNkMGhsajNkbWw5OHlhY2lvbCJ9.o4TXATzx-pClwmG8ZEDd2w';

const OrderAddress = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const mapContainerRef = useRef(null);
  const [address, setAddress] = useState('');

  const handleMapClick = (event) => {
    const { lng, lat } = event.lngLat;
    const geocoderUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${mapboxgl.accessToken}`;

    fetch(geocoderUrl)
      .then((response) => response.json())
      .then((data) => {
        const [place] = data.features;
        setAddress(place.place_name);
      })
      .catch((error) => {
        setAddress('Ошибка геокодирования');
        console.error(error);
      });
  };

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [53.221, 50.187], // Начальные координаты карты
      zoom: 6,
    });

    map.on('click', handleMapClick);

    return () => map.remove();
  }, []);

  const checkout = () => {
    if (address) {
      alert('Ваш заказ оформлен.');
      dispatch(cleanCart());
      navigate('/');
    } else {
      alert('Выберите адрес.');
    }
  };

  return (
    <div>
      <h3 className={cl.title}>3-й шаг(информация о карте)</h3>
      <h4>{address}</h4>
      <div
        ref={mapContainerRef}
        style={{ width: '100%', height: '400px' }}
      ></div>
      <div onClick={checkout} className={cl.button}>
        Оформить заказ
      </div>
    </div>
  );
};

export default OrderAddress;
