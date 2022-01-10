import {Link, useHistory} from 'react-router-dom';
import React,{useState, useEffect} from 'react';
import "../assets/stylesheets/customer_select_food.css";
import "../assets/stylesheets/base.css";
import axios from 'axios'

const CustomerSelectFood = () => {
  const [StoreProductList, setStoreProductList] = useState([{"store":{},"products": []}]);
  
  useEffect(() => {
    const fetchStoreProductList = async () =>{
      try {
          const res = await axios.get(`http://dichothuecsharp.somee.com/api/product/list/${localStorage.getItem("Store_id")}`) 
                                  .then(res => {
                                      setStoreProductList(res.data)
                                      console.log(res.data)
                                  })
                                  .catch(err => console.log(err));
      } catch (error) {
          console.log('Failed to fetch store list', error)
      }
    } 
    
    fetchStoreProductList();
  }, [])

  const AddProductToCart = async (product) =>{
    try {
        const res = await axios(`http://dichothuecsharp.somee.com/api/cart/${localStorage.getItem("customer_id")}/add`,{
          method:"post", 
          // headers: {
          //   Accept: 'application/json',
          //   'Content-Type': 'application/json'
          // },
          data:
            {
              activity: product.activity,
              create_date: product.create_date,
              id: product.id,
              name: product.name,
              price: product.price,
              status: product.status,
              store_id: product.store_id,
              type_id: product.type_id,
              type_name: product.type_name,
              unit: product.unit,
              update_date: product.update_date,
              url_image: product.url_image
            }
        }) 
        .then(res => {
            alert("Thêm sản phẩm thành công!")
            console.log(res.data)
        })
        .catch(err => console.log(err));
                                
    } catch (error) {
        console.log('Failed', error)
    }
  } 

  return (
      <div className="container">
          <div className="grid">
            {/* <div className="row"> */}
              {/* <div class="col-3"> */}
                {StoreProductList.map(stores => {
                  return (
                    <div>
                      <div className="row">
                        <div className="col-10">
                            <span className="cart_heading_store_name">{stores.store.store_name} ({stores.store.address})</span>
                        </div>
                      </div>
                    </div>
                )})}
              {/* </div> */}
            {/* </div>  */}

              <div className="row">
                  <div className="col-4">
                      <ul className="nav flex-column">
                          <li className="nav-item">
                              <a className="nav-link customer_select_danhmuc"href="#">Danh mục</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link active customer_select_product_all"href="#">Tất cả sản phẩm</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link active customer_select_product"href="#">Rau củ quả</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link customer_select_product" href="#">Đồ tươi sống</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link customer_select_product" href="#">Đồ uống</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link customer_select_product"href="#">Đồ đóng hộp</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link customer_select_product" href="#">Bánh kẹo</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link customer_select_product"  href="#">Trái cây</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link customer_select_product" href="#">Hóa mỹ phẩm</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link customer_select_product" href="#">Gia vị, phụ gia</a>
                          </li>
                        </ul>
                  </div>
                  <div className="col-8">
                    <div className="row align-items-start">
                      {StoreProductList.map(stores => {
                        return(
                          <>
                            {stores.products.map(product => {
                              return (
                                <div className="col-4">
                                    <div className="customer_dichothue-item">
                                      <div className="customer_dichothue-item__img" style = {{backgroundImage: `url(${product.url_image})`}} />
                                      <h4 className="customer_dichothue-item__name">{product.name}</h4>
                                      <span className="customer_dichothue-item__price">{product.price}VND/{product.unit}</span>
                                      <button 
                                        type="submit" 
                                        onClick={(e) => {
                                            //handleSuccessfulAuth()
                                            AddProductToCart(product)
                                        
                                        }} 
                                        className="btn btn-outline-secondary customer_addcart_btn">
                                            Thêm vào giỏ hàng
                                      </button>
                                      
                                    </div>
                                </div>   
                              )})}
                          </>
                        )
                      })}
                    </div>
                  </div>
                </div>
          </div>
      </div>
  );
}

export default CustomerSelectFood;