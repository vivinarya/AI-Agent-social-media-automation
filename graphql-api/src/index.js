require('dotenv').config();
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { schema } = require('./schema');

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true, // Enable GraphiQL UI
  })
);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/graphql`);
});
