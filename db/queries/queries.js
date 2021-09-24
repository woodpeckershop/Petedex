const { Pool } = require("pg");

const getAllProducts = (db) => {
  // console.log("client",pool)
const queryStatement =
`SELECT users.name, price, name, description, photo_path
FROM products
JOIN users ON user_id = users.id
ORDER BY name`;
return db
.query(queryStatement)
.then((res)=>{
  return res.rows;
})
}

// const getAll = () => {
//   const queryStatement =
//   `SELECT services.name, services.description,services.photo_path,services.price,price, name, description, photo_path
//   FROM products
//   JOIN services ON user_id = services.user_id
//   ORDER BY name`;
//   return db
//   .query(queryStatement)
//   .then((res)=>{
//     return res.rows;
//   })
//   .catch((err) => {
//         return err;
//       });
//   }

// const getAllServices = () => {
//   const queryStatement =
//   `SELECT users.name, price, name, description, photo_path
//   FROM services
//   JOIN users ON user_id = users.id
//   ORDER BY name`;
//   return db
//   .query(queryStatement)
//   .then((res)=>{
//     return res.rows;
//   })
//   .catch((err) => {
//         return err;
//       });
//   }

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

//   const getProductWithId = function (id) {
//     const value = id;
//     const queryStatement =
//         `
//       SELECT *
//       FROM products
//       Where id = $1
//       `;

//       return db
//     .query(queryStatement, value)
//     .then((res) => {
//       return res.rows;
//     })
//     .catch((err) => {
//       return err;
//     });
// };


// const getServicesWithId = function (id) {
//   const value = id;
//   const queryStatement =
//       `
//     SELECT *
//     FROM services
//     Where id = $1
//     `;

//     return db
//   .query(queryStatement, value)
//   .then((res) => {
//     return res.rows;
//   })
//   .catch((err) => {
//     return err;
//   });
// };

// favorites and cancelFav? add boolean in ERD?


  module.exports = {
    getAllProducts,
    // getAllServices,

  };
