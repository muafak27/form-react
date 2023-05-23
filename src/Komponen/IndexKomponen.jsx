import { useState } from "react";
import * as Validator from 'validatorjs';

const IndexKomponen = () => {

    const [input, setInput] = useState ({
        email: '',
        password: ''
        // errors: []
    })
    // const handleValidation = (name, value) => {
    //     if(!value) {
    //         return(
    //             <h1>isi</h1>
    //         )
    //     }

        
    // }
    const handleChange = (event) => {
        
        const {value, name} = event.target
        // const error = handleValidation(name, value)
        setInput({ ...input,[name]: value})
        
        // console.log(error) 
        
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        

        let data = {
            email: input.email,
            password: input.password
        };
          
          let rules = {
            email: 'required|email',
            password: 'min:8|required'
          };
          
          let validation = new Validator(data, rules);
          validation.passes()
        //   setInput({
        //     errors: [
        //         ...validation.errors.get('email'),
        //         ...validation.errors.get('password')
        //     ]
        //   })
        
        console.log(validation.errors.first('email'))
        console.log(validation.errors.first('password'))
        console.log(input)
        

    }
    
    return(
        <div>
         <div className='boxLogin'>
          <form onSubmit={handleSubmit}>
            <div>
                <h1>Email</h1>
                <input 
                type='text'
                name='email'
                id='email'
                value={input.email}
                onChange={handleChange}
                />
                <p></p>
            </div>
        
            <div>
                <h1>Password</h1>
                <input 
                type='password'
                name='password'
                id='password'
                value={input.password}
                onChange={handleChange}
                />
            </div>
            <button type='submit' className='button'>Login</button>
          </form>
         </div>
      </div>
    
    )
}

export default IndexKomponen;