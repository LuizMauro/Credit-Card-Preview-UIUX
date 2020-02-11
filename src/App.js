import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css'

import InputMask from 'react-input-mask';

import "./style.css"

export default class PaymentForm extends React.Component{

  state = {
    cvc: '',
    expiry:'',
    focus:'',
    name:'',
    number:'',
  };

  handleInputFocus = (e) =>{
    this.setState({ focus: e.target.name})
  }

  handleInputChange = (e) =>{
    const { name, value } = e.target;

    this.setState({ [name]: value })
  }

  render(){
    return(
      <div id="PaymentForm"> 
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
          acceptedCards={['visa', 'mastercard']}
          placeholders={{name:"NOME DO TITULAR", }}
          locale={{valid: "DATA"}}
          
        />

        <form className="form">

          <div className="divInputs">
          <InputMask className="inputs"
              type="tel"
              name ="number"
              placeholder="Numero do cartão"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
              mask="9999 9999 9999 9999999"
              maskChar=" "
              required={true}
            />

          
            <InputMask className="inputs"
              type="tel"
              name ="name"
              placeholder="Nome do titular"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
              required={true}
            />
          </div>
          

          <div className="inputsRow">
          <InputMask className="inputs inputdivide"
              type="tel"
              name ="expiry"
              placeholder="MM/AA"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
              maxLength={6}
              maskChar=" "
              mask="99/99"
              required={true}
            />
           

            <input  className="inputs inputdivide"
              type="tel"
              name ="cvc"
              placeholder="CVV"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
              maxLength={4}
              required={true}
            />  
          </div>  
        </form>

      
      </div>



    );
  }

}


