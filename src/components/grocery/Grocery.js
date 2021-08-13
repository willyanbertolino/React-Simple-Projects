import React, { useState, useEffect } from 'react';
import groceryCSS from './grocery.module.css';
import List from './List';
import Alert from './Alert';
import { Link } from 'react-router-dom';

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return JSON.parse(localStorage.getItem('list'));
  } else {
    return [];
  }
};

const Grocery = () => {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, msg, type });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      // display alert
      showAlert(true, 'danger', 'Please enter a value');
    } else if (name && isEditing) {
      //deal with edit
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
        })
      );
      setName('');
      setEditID(null);
      setIsEditing(false);
      showAlert(true, 'success', 'value changed');
    } else {
      showAlert(true, 'success', 'item added to the list');
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName('');
    }
  };

  const clearList = () => {
    showAlert(true, 'danger', 'empty list');
    setList([]);
  };

  const removeItem = (id) => {
    showAlert(true, 'danger', 'item removed');
    setList(list.filter((item) => item.id !== id));
  };

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  };

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  return (
    <div className="container">
      <Link to="/" className="btn-back-to-projects">
        Back to projects
      </Link>

      <section className={groceryCSS.sectionCenter}>
        <form>
          {alert.show && (
            <Alert {...alert} removeAlert={showAlert} list={list} />
          )}
          <h3>grocery bud</h3>
          <div className={groceryCSS.formControl}>
            <input
              type="text"
              className={groceryCSS.grocery}
              placeholder="e.g. eggs"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <button
              type="submit"
              className={groceryCSS.submitBtn}
              onClick={handleSubmit}
            >
              {isEditing ? 'edit' : 'submit'}
            </button>
          </div>
        </form>
        {list.length > 0 && (
          <div className={groceryCSS.groceryContainer}>
            <List items={list} removeItem={removeItem} editItem={editItem} />
            <button className={groceryCSS.clearBtn} onClick={clearList}>
              clear items
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Grocery;
