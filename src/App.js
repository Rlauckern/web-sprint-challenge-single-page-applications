import React, { useState, useEffect,  } from "react";
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, useRouteMatch, Switch } from 'react-router-dom';
import Form from "./Componets/pizza";
import schema from "./formSchema";
import * as yup from 'yup';
import Pizza from './Componets/confirmation';

const initialFormValues = {
  name: '',
  size: '',
  pepperoni: false,
  sausage: false,
  cheese: false,
  mushrooms: false,
  specialInstructions: '',
}

const initialFormErrors = {
  name: '',
  size: '',
  pepperoni: false,
  sausage: false,
  cheese: false,
  mushrooms: false,
  specialInstructions: '',
}

const initialDisabled = true

const App = () =>  {
  const [pizzas, setPizzas] = useState([]);
  const [values, setValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormValues);
  const [disabled, setDisabled] = useState(initialDisabled);

  const postPizzas = () => {
    axios.post('https://reqres.in/api/orders')
    .then(resp => {
      console.log(resp);
      setPizzas(resp);
    }).catch(err => console.error(err))
    .finally(() => setValues(initialFormValues))
  }
  
  const validate = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({ ...formErrors, [name]: ''}))
    .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }

  useEffect(() => {
    schema.isValid(values).then(valid => setDisabled(!valid))
  }, [values])

  const onChange = (name, value) => {
    setValues({ ...values, [name]: value });
  }

  const onSubmit = () => {
    setPizzas([values, ...pizzas]);
    setValues(initialFormValues);
  }
  
  return (

    <Router>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/Form'>Order Here</Link>
        <Link to='/Pizza'>Confirmed Order</Link>
      </nav>
      <div>
      <h1>BloomTech Eats</h1>
      <img src="https://media.istockphoto.com/photos/bakery-chef-prepare-pizza-picture-id1291299956?b=1&k=20&m=1291299956&s=170667a&w=0&h=Ys_FLtdY0Uzc7yTQl6JzvCHTQ3eRAuqNNU4x8EX1FB8=" alt='pic of pizza'/>
      <button id='order-pizza'><a href="./pizza"><i>Order now </i></a></button>
      <Switch>
      <Route path='/pizza'>
        <Form
        values={values}
        change={onChange}
        submit={onsubmit}
        />

        function 
      {pizzas.map((pizza, idx) => {
        return (
          <div key={[idx]}>
            {pizza.name}, {pizza.size}, {pizza.specialInstructions}
          </div>
        )
      })}
      </Route>
      
      <Route exact path='/pizza'>
        <Pizza />
      </Route>
      </Switch>
      </div>
    </Router>
    
  )
}

export default App;
