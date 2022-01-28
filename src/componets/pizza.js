import react from "react";

const Form = (props) => {
    // const { values, submit, change, update, disabled, errors } = props
    const handleChange = evt => {
        const { name, value } = evt.target;
        props.change(name, value);
    }

    const handleSubmit = evt => {
        evt.preventDefault()
        props.submit();
    }

    return (
        <form id='pizza-form' onSubmit={handleSubmit}>
            <div className='form-group submit'>
                <h2>Build a Pizza!!</h2>
            </div>

            <div className='form-group inputs'>
                <h4>Order Details</h4>

                <label id='name-input'>Name
                    <input 
                        name='name'
                        type='text'
                        placeHolder='Your name here'
                        value={props.values.name}
                        onChange={handleChange}
                    />
                </label>
                <br></br>

                <label id='size-dropdown'>Size
                   <select
                        name='size'
                        value={props.values.size}
                        onChange={handleChange}
                    >
                        <option value=''>--Size Select--</option>
                        <option value='Large'>Large</option>
                        <option value='Medium'>Medium</option>
                        <option value='Small'>Small</option>
                    
                    </select>
                </label>

                <h4>Toppings</h4>
                <h6>Choose As Many As You'd Like</h6>
                <label>Pepperoni
                    <input 
                      name='pepperoni'
                      type='checkbox'
                      checked={props.values.pepperoni}
                      onChange={handleChange}
                    />
                </label>

                <label>Sausage
                    <input 
                      name='sausage'
                      type='checkbox'
                      checked={props.values.pepperoni}
                      onChange={handleChange}
                    />
                </label>

                <label>Cheese
                    <input 
                      name='cheese'
                      type='checkbox'
                      checked={props.values.pineapple}
                      onChange={handleChange}
                    
                    />
                     </label>

                     <label>Mushrooms
                         <input  
                         name='mushrooms'
                         type='checked'
                         checked={props.values.mushrooms}
                         onChange={handleChange}
                         />
                     </label>

                     <label>Special Instructions
                         <input 
                           name='special instructions'
                           type='text'
                           placeholder='Special requests'
                           value={props.values.specialInstructions}
                           onChange={handleChange}
                         />
                     </label>

                     <div id='order-button'>
                         <button>Add to Order</button>
                     </div>

            </div>
        </form>

    )
    }
   

export default Form;