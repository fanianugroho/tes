import React, {Component} from 'react';



class CardProduct extends Component {
    state = {
        order : 0,
        name: 'fania'
    }
    
    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue);
    
        
    }     
    
    handlePlus = () => {
        this.setState( {
                order: this.state.order +1
            }, () => {
                this.handleCounterChange(this.state.order);
    }) }

    
    handleMinus = () => {
        if (this.state.order >0) {
        this.setState( {
            order: this.state.order -1
        },() => {
            this.handleCounterChange(this.state.order);
            } ) }
       }   
    

    render(){
        return(
            
                <div className="card">
                    <div className="img-thumb-prod">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4M5vyP1-MU355LaSR8OfpXPJeHeRXzbRTL5EHk6DUi6TbdAbZq4P5OBa10Ee-82mkVBXBziU&usqp=CAc">
                                </img> 

                    </div>
                            <p className="product-title">Cosrx AHA BHA Toner</p>
                            <p className="product-price">Rp 250.000</p>
                    <div className="counter">
                        <button className="minus" onClick={this.handleMinus}>-</button>
                        <input className="input" value={this.state.order}/>
                        <button className="plus" onClick={this.handlePlus}>+</button>
                    </div>

                </div>




        );
    }

}
export default CardProduct;