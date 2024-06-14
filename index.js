


const  express  = require('express');
const  cors  = require('cors');
const { sequelize } = require('./database/connect.js');
const { RoutesRouter } = require('./controllers/routes.controller.js');


const app = express()
app.use(express.json())

const startServer = async () => {
    try {
      await sequelize.authenticate();
      console.log('Db connected');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  
    try {
      await sequelize.sync(/* { force: true } { alter: true } */);
      console.log('Tablas creadas correctamente en la base de datos.');
    } catch (error) {
      console.error('Error al crear las tablas en la base de datos:', error);
    }
  
   
  };
  
  

app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/", (req, res) => {
  res.json({ message: "todo ok" })
})

app.use(RoutesRouter);


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`server on in port ${PORT}`)
})

startServer();