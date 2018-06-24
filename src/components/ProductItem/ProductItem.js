import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class ProductItem extends Component {
    onDelete=(id)=>{
        if(confirm('Bạn có chắc muốn xóa không'))//eslint-disable-line
        this.props.onDelete(id);
    }
    render() {
        var {index,product}=this.props;
        return (
            <tr>
                <td>{index+1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    {this.showStatus(product.status)}
                </td>
                <td>
                    <Link
                    to={`product/${product.id}/edit`}
                    className="btn btn-large btn-warning">
                    Sửa
                    </Link>&nbsp;
                    <button 
                    type="button" 
                    onClick={()=>this.onDelete(product.id)}
                    className="btn btn-large bs3-danger">
                    Xóa
                    </button>
                </td>
            </tr>
        );
    }
    showStatus=(status)=>{
        var result='';
        if(status===true){
            result=<span className="label label-warning">Còn hàng</span>
        }
        else{
            result=<span className="label label-default">Hết hàng</span>
        }
        return result;
    }
    
}

export default ProductItem;