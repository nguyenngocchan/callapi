import React, { Component } from 'react';
import ProductList from './../../components/ProductList/ProductList'
import ProductItem from './../../components/ProductItem/ProductItem'
import { connect } from 'react-redux'
import {Link} from "react-router-dom";
import {actFetchProductsRequest} from './../../actions/index'
import {actDelete} from './../../actions/index'
class ProductListPage extends Component {
    constructor(props){
        super(props);
        this.state={
            products:[]
        }
    }
    componentDidMount(){
        this.props.FetchAllProducts();
    }
    render() {
        var {products}=this.props;
        return (
            <div className="col-sm-12">                   
                <Link to='/product/add'
                className="btn btn-success">
                Thêm sản phẩm
                </Link>
                <ProductList>
                    {this.showProduct(products)}
                </ProductList>
            </div>
        );
    }
    showProduct=(products)=>{
        var result='';
        if(products.length>0){
            result=products.map((product,index)=>{
                return<ProductItem
                    key={index}
                    product={product}
                    index={index}
                    onDelete={this.onDelete}
                />
            })
        }
        return result;
    }
    onDelete=(id)=>{
        this.props.onDelete(id);
    }
}
const mapStateToProps=(state)=>{
    return{
        products:state.products
    }
}
const mapDispatchToProps=(dispatch,props)=>{
    return{
        FetchAllProducts:()=>{
            dispatch(actFetchProductsRequest())
        },
        onDelete:(id)=>{
            dispatch(actDelete(id))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductListPage);