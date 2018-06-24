import * as types from './../constants/ActionTypes'
import APIcaller from './../utils/APIcaller'
export const actFetchProductsRequest = () => {
    return dispatch => {
        return APIcaller('product', 'GET', null).then(res => {
            dispatch(actFetchProducts(res.data));
        });
    };
}
export const actFetchProducts=(products)=>{
    return{
        type:types.FETCH_PRODUCTS,
        products
    }
}
export const actDeleteRequest=(id)=>{
    return(dispatch)=>{
        return APIcaller(`product/${id}`,'DELETE',null).then(res=>{
             dispatch(actDelete(id))
        }
        )
    }
}
export const actDelete=(id)=>{
    return{
        type:types.DELETE_PRODUCT,
        id
    }
}
export const actAddProductRequest=(product)=>{
    return(dispatch)=>APIcaller('product','POST',product).then(res=>{
        dispatch(actAddProduct(product));
   }
   )
}
export const actAddProduct=(product)=>{
    return {
        type:types.ADD_PRODUCT,
        product
    }
}
export const actGetProductEdit=(id)=>{
    return(dispatch)=>APIcaller(`product/${id}`,'GET',null).then(res=>{
        dispatch(actGetProduct(res.data));
   }
   )
}
export const actGetProduct=(product)=>{
    return{
        type:types.EDIT_PRODUCT,
        product
    }
}
export const actUpdateProductRequest=(product)=>{
    return(dispatch)=>{
        return APIcaller(`product/${product.id}`,'PUT',product).then(res=>{
            dispatch(actUpdateProduct(product))
        })
    }
}
export const actUpdateProduct=(product)=>{
    return{
        type:types.UPDATE,
        product
    }
}