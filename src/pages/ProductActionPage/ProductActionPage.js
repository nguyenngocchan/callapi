import React, { Component } from 'react';
import callApi from './../../utils/APIcaller'
import {actAddProductRequest,actGetProductEdit,actUpdateProductRequest} from './../../actions/index'
import {connect} from 'react-redux';
class ProductActionPage extends Component {
    constructor(props){
        super(props);
        this.state={
            id:'',
            txtName:'',
            txtPrice:'',
            ckbStatus:''
        }
    }
    componentDidMount(){
        var {match}=this.props;
        if(match){
        var id=match.params.id;
        this.props.onEditProduct(id);

        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.itemEdit){
            var {itemEdit} = nextProps;
            this.setState({
                id:itemEdit.id,
                txtName:itemEdit.name,
                txtPrice:itemEdit.price,
                ckbStatus:itemEdit.ckbStatus
            })
        }
    }

    onChange=(e)=>{
        var target=e.target;
        var name=target.name;
        var value=target.type==='checkbox'?target.checked:target.value;
        this.setState({
            [name]:value
        })
    }
    onSubmit=(e)=>{
        e.preventDefault();
        var {id,txtName,txtPrice,ckbStatus}=this.state;
        var {history}=this.props;
        var product={
            id:id,
            name:txtName,
            price:txtPrice,
            ckbStatus:ckbStatus
        }
        if(id){
            this.props.updateProduct(product);
            history.goBack();
        }
        else{
            this.props.onAddProduct(product);
            history.goBack();
        }
    }
    render() {
        var {txtName,txtPrice,ckbStatus}=this.state;
        return (
            <div className="col-sm-6">
                <form onSubmit={this.onSubmit}>
                    <legend>Form title</legend>
                    <div className="form-group">
                        <label>Thêm sản phẩm</label>
                        <input type="text" 
                        className="form-control"  
                        name='txtName'
                        value={txtName}
                        onChange={this.onChange}
                        placeholder="Input field" />
                    </div>
                    <div className="form-group">
                        <label>Giá</label>
                        <input type="text" 
                        className="form-control"
                        name='txtPrice'
                        value={txtPrice}
                        onChange={this.onChange}
                        placeholder="Input field" />
                    </div>
                    <div className="checkbox">
                        <label>
                        <input type="checkbox"
                        name='ckbStatus'
                        value={ckbStatus}
                        onChange={this.onChange}
                        checked={ckbStatus}
                        />
                        Còn hàng
                        </label>
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}
const mapStateToProps=(state)=>{
    return{
        itemEdit:state.itemEdit
    }
}
const mapDispatchToProps=(dispatch,props)=>{
    return{
        onAddProduct:(product)=>{
            dispatch(actAddProductRequest(product))
        },
        onEditProduct:(id)=>{
            dispatch(actGetProductEdit(id))
        },
        updateProduct:(product)=>{
            dispatch(actUpdateProductRequest(product))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductActionPage);