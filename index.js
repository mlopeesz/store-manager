const express = require('express');
const productRoutes = require('./routes/productRotes');

const app = express();
require('dotenv').config();

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use('/products', productRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
