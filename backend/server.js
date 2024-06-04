const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const multer = require('multer');
const fs = require('fs');

const app = express();
app.use(express.json());
app.use(express.static('public'));

app.use(cors());
app.use(express.json()); // Add this line to parse JSON requests
// app.use(express.json({ limit: '50mb' }));
// app.use(express.urlencoded({ limit: '50mb', extended: true , parameterLimit: 50000}));
const storage6 = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, "public/images");
  },
  filename: function (req, file, cb) {
      cb(null, `${Date.now()}_${file.fieldname}`);
  }
});
const upload6 = multer({storage:storage6})
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, "public/images");
  },
  filename: function (req, file, cb) {
      cb(null, `${Date.now()}_${file.fieldname}`);
  }
});

const storage7 = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, "public/images");
  },
  filename: function (req, file, cb) {
      cb(null, `${Date.now()}_${file.fieldname}`);
  }
});
const upload7 = multer({storage:storage7})



const upload1 = multer({storage:storage})
const storage455 = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, "public/images");
  },
  filename: function (req, file, cb) {
      cb(null, `${Date.now()}_${file.fieldname}`);
  }
});
const upload455 = multer({storage:storage455})
const storage1 = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, "public/images");
  },
  filename: function (req, file, cb) {
      cb(null, `${Date.now()}_${file.fieldname}`);
  }
});

const upload2 = multer({storage:storage1})
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "invent_system",
});

app.get("/", (req, res) => {
  return res.json("from backendside");
});








app.get("/books8999/:id", (req, res) => {
  const bookId = req.params.id;
  
  const q = "SELECT name,gen,sir,price,hasGraphicCard,maintenance,image FROM laps WHERE id = ?";
  const values = [bookId];

  db.query(q, values, (err, result) => {
    if (err) {
      console.error("Error fetching book:", err);
      res.status(500).json({ error: "Internal server error" });
    } else if (result.length === 0) {
      res.status(404).json({ error: "Book not found" });
    } else {
      res.status(200).json(result[0]);
    }
  });
});
app.put("/books8999/:id", upload2.single('image'), (req, res) => {
  const bookId = req.params.id;
  const imageFile = req.file;

  try {
    if (!imageFile) {
      throw new Error("No file uploaded");
    }

    // Read the file content
    fs.readFile(imageFile.path, (err, data) => {
      if (err) {
        console.error("Error reading file:", err);
        res.status(500).json({ error: "Internal server error" });
        return;
      }

      // Convert the file content to a Blob
      const blob = new Buffer.from(data, 'binary');
      const q = "UPDATE laps SET `name`= ?, `gen`= ?, `price`= ?, `sir`= ?, `hasGraphicCard`=?, `maintenance`=?, `image`=? WHERE id = ?";
      const values = [
        req.body.name,
        req.body.gen,
        req.body.price,
        req.body.sir,
        req.body.hasGraphicCard,
        req.body.maintenance,
        blob,
        bookId
      ];

      db.query(q, values, (err, data) => {
        if (err) {
          console.error("Error updating book:", err);
          res.status(500).json({ error: "Internal server error" });
          return;
        }
        res.json(data);
      });
    });
  } catch (error) {
    console.error("Error handling file upload:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});



app.get("/displaystock", (req, res) => {
  const getLaptopsQuery1 = "SELECT * FROM stock"; // Adjust the query based on your database schema
  db.query(getLaptopsQuery1, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Internal server error" });
    }
    return res.status(200).json(result);
  });
});


app.delete("/delstock/:id", (req, res) => {
  const bookId = req.params.id;
  const q = " DELETE FROM stock WHERE id = ? ";

  db.query(q, [bookId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});



app.put("/updatingstock/:id", (req, res) => {
  const stockId = req.params.id;

  // Extract data from the request body
  const { lap_name, num_of_stocks, total_price,purchase_date } = req.body;
  console.log("Received data:");
  console.log("Stock ID:", stockId);
  console.log("Laptop Name:", lap_name);
  console.log("Number of Stocks:", num_of_stocks);
  console.log("Total Price:", total_price);
  console.log("Purchase Date:", purchase_date);
  // Update the stock data in the database
  const q = "UPDATE stock SET `lap_name`= ?, `num_of_stocks`= ?, `total_price`= ?,`purchase_date`=? WHERE id = ?";
  const values = [
    req.body.lap_name,
    req.body.num_of_stocks,
    req.body.total_price,
    req.body.purchase_date,
    stockId
  ];

  db.query(q, values, (err, data) => {
    if (err) {
      console.error("Error updating stock:", err);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    console.log("Stock updated successfully");
    res.json(data);
  });
});








app.delete("/laptops223/:id", (req, res) => {
  const bookId = req.params.id;
  const q = " DELETE FROM laps WHERE id = ? ";

  db.query(q, [bookId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});




app.post("/books123", upload1.single('image'), (req, res) => {
  try {
    const { name, gen, sir, hasGraphicCard, price, maintenance } = req.body;
    const imageFile = req.file;

    // Read the file content
    fs.readFile(imageFile.path, (err, data) => {
      if (err) {
        console.error("Error reading file:", err);
        res.status(500).json({ error: "Internal server error" });
        return;
      }

      // Convert the file content to a Blob
      const blob = new Buffer.from(data, 'binary');

      // Insert the data into the database
      const q = "INSERT INTO laps(`name`, `gen`, `sir`, `hasGraphicCard`, `price`, `image`,`maintenance`) VALUES (?, ?, ?, ?, ?, ?, ?)";
      const values = [name, gen, sir, hasGraphicCard, price, blob, maintenance];

      db.query(q, values, (err, data) => {
        if (err) {
          console.error("Error inserting book data:", err);
          res.status(500).json({ error: "Internal server error" });
          return;
        }
        res.json({ message: "laptop data inserted successfully", data });
      });
    });
  } catch (error) {
    console.error("Error handling file upload:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});



app.post('/addstocks123', (req, res) => {
  try {
    const { lap_name, num_of_stocks, total_price, purchase_date } = req.body;

 
  console.log(purchase_date);
  console.log(lap_name);
  console.log(num_of_stocks);
  console.log(total_price);
  
    const q = "INSERT INTO stock(`lap_name`, `num_of_stocks`, `total_price`, `purchase_date`) VALUES (?, ?, ?, ?)";
    const values = [lap_name, num_of_stocks, total_price, purchase_date];

    db.query(q, values, (err, data) => {
      if (err) {
        console.error("Error inserting stock data:", err);
        res.status(500).json({ error: "Internal server error" });
        return;
      }
      res.json({ message: "Stock data inserted successfully", data });
    });
  } catch (error) {
    console.error("Error handling stock data:", error);
    res.status(400).json({ error: error.message });
  }
});

app.get("/updatestock/:id", (req, res) => {
  const stockId = req.params.id;

  // Query to fetch the stock data by ID
  const q = "SELECT lap_name,num_of_stocks,total_price,purchase_date FROM stock WHERE id = ?";
  
  db.query(q, [stockId], (err, data) => {
    if (err) {
      console.error("Error fetching stock data:", err);
      return res.status(500).json({ error: "Internal server error" });
    }

    if (data.length === 0) {
      // If no data found for the given ID
      return res.status(404).json({ error: "Stock not found" });
    }

    // Send the first item in the data array as the response
    res.json(data[0]);
  });
});



app.get("/laptops222", (req, res) => {
  const getLaptopsQuery1 = "SELECT * FROM laps"; // Adjust the query based on your database schema
  db.query(getLaptopsQuery1, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Internal server error" });
    }
    return res.status(200).json(result);
  });
});

app.get("/getlaps", (req, res) => {
  try {
    // Query the database to fetch laptop names
    db.query("SELECT name FROM laps", (err, result) => {
      if (err) {
        console.error("Error fetching laptop names:", err);

        res.status(500).json({ error: "Internal server error" });
        return;
      }
      const lapNames = result.map(row => row.name);
      console.log(lapNames);
      res.json(lapNames);
    });
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});






app.get("/allusers", (req, res) => {
  const getLaptopsQuery1 = "SELECT * FROM users"; // Adjust the query based on your database schema
  db.query(getLaptopsQuery1, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Internal server error" });
    }
    return res.status(200).json(result);
  });
});


app.delete("/deleteusers/:id", (req, res) => {
  const bookId = req.params.id;
  const q = " DELETE FROM users WHERE id = ? ";

  db.query(q, [bookId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});


app.post("/addingusers", upload455.single('profile_image'), (req, res) => {
  try {
    const { username,email,password,role} = req.body;
    const imageFile = req.file;

    // Read the file content
    fs.readFile(imageFile.path, (err, data) => {
      if (err) {
        console.error("Error reading file:", err);
        res.status(500).json({ error: "Internal server error" });
        return;
      }

      // Convert the file content to a Blob
      const blob = new Buffer.from(data, 'binary');

      // Insert the data into the database
      const q = "INSERT INTO users(`username`, `email`, `password`, `role`, `profile_image`) VALUES (?, ?, ?, ?, ?)";
      const values = [username,email,password,role,blob];

      db.query(q, values, (err, data) => {
        if (err) {
          console.error("Error inserting book data:", err);
          res.status(500).json({ error: "Internal server error" });
          return;
        }
        res.json({ message: "laptop data inserted successfully", data });
      });
    });
  } catch (error) {
    console.error("Error handling file upload:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});




app.get("/gettingusers/:id", (req, res) => {
  const bookId = req.params.id;
  
  const q = "SELECT username,email,password,role,profile_image FROM users WHERE id = ?";
  const values = [bookId];

  db.query(q, values, (err, result) => {
    if (err) {
      console.error("Error fetching book:", err);
      res.status(500).json({ error: "Internal server error" });
    } else if (result.length === 0) {
      res.status(404).json({ error: "Book not found" });
    } else {
      res.status(200).json(result[0]);
    }
  });
});
app.put("/updatingusers/:id", upload6.single('profile_image'), (req, res) => {
  const bookId = req.params.id;
  const imageFile = req.file;

  try {
    if (!imageFile) {
      throw new Error("No file uploaded");
    }

    // Read the file content
    fs.readFile(imageFile.path, (err, data) => {
      if (err) {
        console.error("Error reading file:", err);
        res.status(500).json({ error: "Internal server error" });
        return;
      }

      // Convert the file content to a Blob
      const blob = new Buffer.from(data, 'binary');
      const q = "UPDATE users SET `password`= ?, `role`= ?, `profile_image`= ? WHERE id = ?";
      const values = [
        req.body.password,
        req.body.role,
      
        blob,
        bookId
      ];

      db.query(q, values, (err, data) => {
        if (err) {
          console.error("Error updating book:", err);
          res.status(500).json({ error: "Internal server error" });
          return;
        }
        res.json(data);
      });
    });
  } catch (error) {
    console.error("Error handling file upload:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


/*

app.post("/createorder", upload7.single('image'), (req, res) => {
  try {
    const { name, gen, sir, hasGraphicCard, price, maintenance } = req.body;
    const imageFile = req.file;

    // Read the file content
    fs.readFile(imageFile.path, (err, data) => {
      if (err) {
        console.error("Error reading file:", err);
        res.status(500).json({ error: "Internal server error" });
        return;
      }

      // Convert the file content to a Blob
      const blob = new Buffer.from(data, 'binary');

      // Insert the data into the database
      const q = "INSERT INTO laps(`name`, `gen`, `sir`, `hasGraphicCard`, `price`, `image`,`maintenance`) VALUES (?, ?, ?, ?, ?, ?, ?)";
      const values = [name, gen, sir, hasGraphicCard, price, blob, maintenance];

      db.query(q, values, (err, data) => {
        if (err) {
          console.error("Error inserting book data:", err);
          res.status(500).json({ error: "Internal server error" });
          return;
        }
        res.json({ message: "laptop data inserted successfully", data });
      });
    });
  } catch (error) {
    console.error("Error handling file upload:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

*/
app.get("/getlaps1", (req, res) => {
  try {
    // Query the database to fetch laptop names
    db.query("SELECT name FROM laps", (err, result) => {
      if (err) {
        console.error("Error fetching laptop names:", err);

        res.status(500).json({ error: "Internal server error" });
        return;
      }
      const lapNames = result.map(row => row.name);
      console.log(lapNames);
      res.json(lapNames);
    });
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});



app.get("/getlaps2", (req, res) => {
  try {
    // Query the database to fetch laptop names
    db.query("SELECT username FROM users", (err, result) => {
      if (err) {
        console.error("Error fetching laptop names:", err);

        res.status(500).json({ error: "Internal server error" });
        return;
      }
      const lapNames = result.map(row => row.username);
      console.log(lapNames);
      res.json(lapNames);
    });
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});






app.post("/createorder__", upload7.single('receiptImage'), (req, res) => {
  try {
    const { username, productName, numOfProductOrders, accountNumber, itStaffApproved, saleStaffApproved, priceOfOrder, address,date_of_order} = req.body;

    const imageFile = req.file;
 if (!req.file) {
      console.error("No file uploaded");
      res.status(400).json({ error: "No file uploaded" });
      return;
    }
    // Read the file content
    fs.readFile(imageFile.path, (err, data) => {
      if (err) {
        console.error("Error reading file:", err);
        res.status(500).json({ error: "Internal server error" });
        return;
      }

      // Convert the file content to a Blob
      const blob = new Buffer.from(data, 'binary');
   


      const q = "INSERT INTO orders(`username`, `productName`, `numOfProductOrders`, `accountNumber`, `itStaffApproved`, `saleStaffApproved`, `priceOfOrder`, `address`, `receiptImage`,`date_of_order`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?,?)";
      const values = [username, productName, numOfProductOrders, accountNumber, itStaffApproved, saleStaffApproved, priceOfOrder, address, blob,date_of_order];
    
      console.log("Insert query values:", values);
      db.query(q, values, (err, data) => {
        if (err) {
          console.error("Error inserting book data:", err);
          res.status(500).json({ error: "Internal server error" });
          return;
        }
        res.json({ message: "laptop data inserted successfully", data });
      });
    });
  } catch (error) {
    console.error("Error handling file upload:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


app.post("/getett", (req, res) => {
  try {
    const { productName } = req.body;

    const q = "SELECT num_of_stocks FROM stock WHERE lap_name = ?";
    const values = [productName];

    db.query(q, values, (err, data) => {
      if (err) {
        console.error("Error querying database:", err);
        return res.status(500).json({ error: "Internal server error" });
      }

      // Extracting the value from the response
      const numOfStocks = data[0]?.num_of_stocks; // Accessing the first row of data

      // Pass the value as a variable to another function or use it within the same function
      console.log("Number of stocks:", numOfStocks);

      res.json({ message: "Laptop data retrieved successfully", numOfStocks });
    });
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/displaystaff", (req, res) => {
  const getLaptopsQuery1 = "SELECT * FROM orders WHERE itStaffApproved=0"; // Adjust the query based on your database schema
  db.query(getLaptopsQuery1, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Internal server error" });
    }
    return res.status(200).json(result);
  });
});


app.delete("/deldisplaystaff/:id", (req, res) => {
  const bookId = req.params.id;
  const q = " DELETE FROM orders WHERE id = ? ";

  db.query(q, [bookId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});


app.get("/displaysalestaff", (req, res) => {
  const getLaptopsQuery1 = "SELECT * FROM orders WHERE saleStaffApproved=0 AND itStaffApproved =1"; // Adjust the query based on your database schema
  db.query(getLaptopsQuery1, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Internal server error" });
    }
    return res.status(200).json(result);
  });
});

app.get("/displayadminstaff", (req, res) => {
  const getLaptopsQuery1 = "SELECT * FROM orders WHERE saleStaffApproved=1"; // Adjust the query based on your database schema
  db.query(getLaptopsQuery1, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Internal server error" });
    }
    return res.status(200).json(result);
  });
});































app.get("/editstaff/:id", (req, res) => {
  const orderId = req.params.id;
  
  const q = "SELECT username, productName, numOfProductOrders, priceOfOrder, address, accountNumber, receiptImage, itStaffApproved, saleStaffApproved,  date_of_order FROM orders WHERE id = ?";
  const values = [orderId];

  db.query(q, values, (err, result) => {
    if (err) {
      console.error("Error fetching book:", err);
      res.status(500).json({ error: "Internal server error" });
    } else if (result.length === 0) {
      res.status(404).json({ error: "Book not found" });
    } else {
      res.status(200).json(result[0]);
    }
  });
});
app.put("/posteditingstaff/:id", (req, res) => {
  const bookId = req.params.id;

      const q = "UPDATE orders SET `itStaffApproved`= ?, `date_of_order`= ? WHERE id = ?";
      const values = [
        req.body.itStaffApproved,
        req.body.date_of_order,
        bookId
      ];

      db.query(q, values, (err, data) => {
        if (err) {
          console.error("Error updating book:", err);
          res.status(500).json({ error: "Internal server error" });
          return;
        }
        res.json(data);
      });
    });



    app.get("/geteditingstaff/:id", (req, res) => {
      const bookId = req.params.id;
      
      const q = `
      SELECT 
          username,
          productName,
          numOfProductOrders,
          accountNumber,
          itStaffApproved,
          saleStaffApproved,
          priceOfOrder,
          address,
          receiptImage,
          date_of_order
      FROM 
          orders
      WHERE 
          id = ?;
      `;
      
      const values = [bookId];
    
      db.query(q, values, (err, result) => {
        if (err) {
          console.error("Error fetching book:", err);
          res.status(500).json({ error: "Internal server error" });
        } else if (result.length === 0) {
          res.status(404).json({ error: "Book not found" });
        } else {
          res.status(200).json(result[0]);
        }
      });
    });
   


    app.put("/posteditingsalestaff/:id", (req, res) => {
      const bookId = req.params.id;
    
          const q = "UPDATE orders SET `saleStaffApproved`= ?, `date_of_selling`= ? WHERE id = ?";
          const values = [
            req.body.saleStaffApproved,
            req.body.date_of_selling,
            bookId
          ];
    
          db.query(q, values, (err, data) => {
            if (err) {
              console.error("Error updating book:", err);
              res.status(500).json({ error: "Internal server error" });
              return;
            }
            res.json(data);
          });
        });
    
    
    
        app.get("/geteditingsalestaff/:id", (req, res) => {
          const bookId = req.params.id;
          
          const q = `
          SELECT 
              username,
              productName,
              numOfProductOrders,
              accountNumber,
              itStaffApproved,
              saleStaffApproved,
              priceOfOrder,
              address,
              receiptImage,
              date_of_order,
              date_of_selling
          FROM 
              orders
          WHERE 
              id = ?;
          `;
          
          const values = [bookId];
        
          db.query(q, values, (err, result) => {
            if (err) {
              console.error("Error fetching book:", err);
              res.status(500).json({ error: "Internal server error" });
            } else if (result.length === 0) {
              res.status(404).json({ error: "Book not found" });
            } else {
              res.status(200).json(result[0]);
            }
          });
        });
       









app.listen(8081, () => {
  console.log("Server is running on port 8081");
});

