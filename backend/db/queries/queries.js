const getAllProducts = (db) => {
  const queryStatement = `SELECT users.name, price, products.name, description, image_path, products.id
  FROM products
  JOIN users ON user_id = users.id
  ORDER BY products.name`;
  return db.query(queryStatement).then((res) => {
    return res.rows;
  });
};

const getAll = (db) => {
  const queryStatement = `SELECT services.name, services.description,services.image_path,services.price,products.price, prducts.name, products.description, products.image_path
  FROM users
  JOIN products ON products.user_id = users.id
  JOIN services ON services.user_id = users.id
  ORDER BY users.id`;
  return db.query(queryStatement).then((res) => {
    return res.rows;
  });
};

const getAllServices = (db) => {
  const queryStatement = `SELECT users.name, price, services.name, description, image_path, services.id
  FROM services
  JOIN users ON user_id = users.id
  ORDER BY services.name`;
  return db.query(queryStatement).then((res) => {
    return res.rows;
  });
};

//   const createNewUser = (newUser) => {
//     const value = [
//       newUser["first_name"],
//       newUser["last_name"],
//       newUser["email"],
//       newUser["password"],
//       newUser["phone"],
//     ];

//     const queryStatement = `INSERT INTO users(first_name, last_name, email, password, phone)
//     VALUES ($1, $2, $3, $4, $5)`;
//     return db.query(queryStatement, value).catch((err) => {
//       return err;
//     });
//   };

//   const updateProduct = (updateProduct) => {
//     const value = [
//       updateProduct.price,
//       updateProduct.description,
//       updateProduct.photo_path,
//       updateProduct.name,
//     ];

//     const queryStatement = `UPDATE products
//        SET price = $1, description = $2, photo_path = $3, name = $4`;
//     return (
//       db
//         .query(queryStatement, value)
//         .catch((err) => {
//           return err;
//         })
//     );
//   };

//   const updateServices = (updateProduct) => {
//     const value = [
//       updateServices.price,
//       updateServices.description,
//       updateServices.photo_path,
//       updateServices.name,
//     ];

//     const queryStatement = `UPDATE services
//        SET price = $1, description = $2, photo_path = $3, name = $4`;
//     return (
//       db
//         .query(queryStatement, value)
//         .catch((err) => {
//           return err;
//         })
//     );
//   };

//   const deleteProduct = (id) => {
//     const value = id["id"];
//     const queryStatement = `DELETE FROM product
//     WHERE  product_id = $1
//     RETURNING *`;

//     return db
//       .query(queryStatement, value)
//       .then((res) => {
//         return res.rows;
//       })
//       .catch((err) => {
//         return err;
//       });
//   };

//   const deleteServices = (id) => {
//     const value = id["id"];
//     const queryStatement = `DELETE FROM services
//     WHERE  services_id = $1
//     RETURNING *`;

//     return db
//       .query(queryStatement, value)
//       .then((res) => {
//         return res.rows;
//       })
//       .catch((err) => {
//         return err;
//       });
//   };

//   const addProduct = (newproduct) => {
//     const value = [
//      newproduct["price"],
//      newproduct["description"],
//      newproduct["photo_path"],
//      newproduct["name"],
//     ];

//     const queryStatement = `INSERT INTO products(price, description, photo_path, name)
//     VALUES ($1, $2, $3, $4)
//     RETURNING *`;
//     return db.query(queryStatement, value).catch((err) => {
//       return err;
//     });
//   };

//   const addServices = (newproduct) => {
//     const value = [
//      newservices["price"],
//      newservices["description"],
//      newservices["photo_path"],
//      newservices["name"],
//     ];

//     const queryStatement = `INSERT INTO services(price, description, photo_path, name)
//     VALUES ($1, $2, $3, $4)
//     RETURNING *`;
//     return db.query(queryStatement, value).catch((err) => {
//       return err;
//     });
//   };

const getProductWithId = function (id, db) {
  const value = [Number(id)];
  const queryStatement = `
      SELECT *
      FROM products
      Where id = $1
      `;

  return db
    .query(queryStatement, value)
    .then((res) => {
      return res.rows;
    })
    .catch((err) => {
      return err;
    });
};

const getServiceWithId = function (id, db) {
  const value = [Number(id)];
  const queryStatement = `
    SELECT *
    FROM services
    Where id = $1
    `;

  return db
    .query(queryStatement, value)
    .then((res) => {
      return res.rows;
    })
    .catch((err) => {
      return err;
    });
};

// favorites and cancelFav? add boolean in ERD?

module.exports = {
  getAllProducts,
  getAllServices,
  getProductWithId,
  getServiceWithId,
  getAll,
};