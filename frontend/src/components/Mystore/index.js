import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';
import './style.scss';
import axios from 'axios';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useContext } from 'react';
import { authContext } from '../providers/AuthProvider';

// const getLocalStorage = () => {
//   let list = localStorage.getItem("list");
//   if (list) {
//     return (list = JSON.parse(localStorage.getItem("list")));
//   } else {
//     return [];
//   }
// };

const getLocalUser = () => {
  let user = localStorage.getItem('user');
  if (user) {
    return JSON.parse(user);
  } else {
    return null;
  }
};

const Mystore = (props) => {
  const user_id = getLocalUser();
  console.log(user_id);
  // const { test, loginStatus } = useContext(authContext);
  // let user_id;
  // if (loginStatus[0]) user_id = loginStatus[0].id;

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, 'danger', 'please enter value');
    } else if (name && isEditing) {
      const updateProduct = {
        product_id: editID,
        user_id,
        name,
        description,
        price,
        image_path: image,
      };
      console.log('updateProduct', updateProduct);
      axios
        .patch(`http://localhost:8080/api/products/${user_id}/${editID}/edit`, {
          updateProduct: { ...updateProduct },
        })
        .then((res) => {
          showAlert(true, 'success', 'product updated');
          setName('');
          setPrice('');
          setDescription('');
          setImage('');

          const updatedProduct = res.data;
          const filteredList = list.filter((a) => a.id !== updatedProduct.id);
          const newList = [...filteredList, updatedProduct];
          setList([...newList]);
        })
        .catch((err) => console.log(err));
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, updateProduct };
          }
          return item;
        })
      );
      setName('');
      setPrice('');
      setDescription('');
      setImage('');
      setEditID(null);
      setIsEditing(false);
      showAlert(true, 'success', 'value changed');
    } else {
      const newProduct = { user_id, name, description, price, image };
      console.log(newProduct, 'newProduct');
      axios
        .put(`http://localhost:8080/api/products/${user_id}/add`, {
          newProduct: { ...newProduct },
        })
        .then((res) => {
          showAlert(true, 'success', 'item added to the list');
          // const newItem = {
          //   user_id,
          //   name,
          //   description,
          //   image_path: image,
          //   price,
          // };
          setList([...list, ...res.data]);
          setName('');
          setPrice('');
          setDescription('');
          setImage('');
          console.log('put success', res);
        })
        .catch((err) => console.log(err));
    }
  };

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg });
  };

  const removeItem = (id) => {
    showAlert(true, 'danger', 'item removed');
    axios.delete('http://localhost:8080/api/products/delete', {
      data: { product_id: id },
    });
    setList(list.filter((item) => item.id !== id));
  };

  const editItem = (id) => {
    console.log('item id', id);

    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.name);
    setPrice(specificItem.price);
    setDescription(specificItem.description);
    setImage(specificItem.image_path);
  };
  useEffect(() => {
    axios.get('http://localhost:8080/api/products').then((res) => {
      setList([...res.data]);
      console.log(res, 'res');
    });
    localStorage.setItem('list', JSON.stringify(list));
  }, []);

  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}

        <h2>My Store</h2>
        <h3>Add Product</h3>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='Product name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='Product description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='Product price'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='Product image'
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <button type='submit' className='submit-btn'>
          {isEditing ? 'edit' : 'submit'}
        </button>
      </form>
      {list.length > 0 && (
        <div className='grocery-container'>
          <List items={list} removeItem={removeItem} editItem={editItem} />
        </div>
      )}
    </section>
  );
};

export default Mystore;
