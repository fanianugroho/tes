import React, {Component,Fragment} from 'react';
import './Product.css';
import CardProduct from '../container/CardProduct/CardProduct';

class Product extends Component {
    state = {
        order :0 ,
        name: 'fania'
    }

    handleCounterChange = (newValue) => {
        this.setState({
            order: newValue
        })
    }
        
    


    render(){
        return(
            <Fragment>
                <div className="header">
                        <div className="logo">
                           
                            <p>BeautyMe</p>
                        </div>
                        <div className="troley">
                            <img src="https://lh3.googleusercontent.com/proxy/FtwNhua1nut44Y3QAcOyALA5iPvjykzbtzfCm1VdJAh9d_wIWg68XQqnNaxbuOqrdq2I7aHzxEF2n2hvIuhCkfIHEGWkooPX7gJij7BsCOioXPGBaTNMDWBwN7LD1Lp1PCciSKQqmqS4jsb4A01mItA8oE4NEwG8PBnIY5XLDWMZ">
                                </img>
                            <div className="count">{this.state.order}</div>
                        </div>
                    
                </div>
                <CardProduct onCounterChange={(value)=> this.handleCounterChange(value)}/>

            </Fragment>


        );
    }

}
export default Product;