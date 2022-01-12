import React from 'react';
import CustomerHomepage from './views/Customer_Homepage';
import CustomerRegistration from './components/Customer_Register';
import StoreRegistration from './components/Store_Register';
import CustomerLogin from './components/Customer_Login';
import StoreLogin from './components/Store_Login';
import CustomerHeader from './components/Customer_Header';
import CustomerSlider from './components/Customer_Slider';
import CustomerStoreList from './views/Customer_Store_List';
import CustomerSelectFood from './views/Customer_Select_Food';
import CustomerProfile from './views/Customer_Profile';
import CustomerCart from './views/Customer_Cart';
import CustomerSearchProduct from './views/Customer_Search_Product';
import CustomerBooking from './views/Customer_Booking';
import CustomerOrderDetail from './views/Customer_OrderDetail';
import CustomerContact from './views/Customer_Contact';
import SystemLogin from './components/System_Login';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import CustomerFAQ from './views/Customer_Faq';
import SystemQLKH from './views/System_QLKH';
import SystemHeader from './components/System_Header';
import SystemHomepage from './views/System_Homepage';
import SystemTKDDH from './views/System_TKDDH';
import SystemQLSP from './views/System_QLSP';
import SystemCTSP from './views/System_QLSP_CTSP';
import CustomerBookingSuccess from './views/Customer_Booking_Success';
import CustomerBookingHistory from './views/Customer_Booking_History';
import SystemTTHH from './views/System_TTHH';
import SystemStoreRegistration1 from './views/System_Store_Registration1';
import SystemStoreRegistration2 from './views/System_Store_Registration2';
import SystemStoreRegistration3 from './views/System_Store_Registration3';
import SystemTKMHTY from './views/System_TKMHTY';
import SystemTKNCTPCK from './views/System_TKNCTP';
import SystemQLTTCHST from './views/System_QLCH';
import SystemTTCTCHST from './views/System_TTCTCHST';
import SystemTKVD from './views/System_TKVD';
import StoreHeader from './components/Store_Header';
import StoreHomepage from './views/Store_Homepage';
import StoreQLDH from './views/Store_QLDH';
import StoreCTDDH from './views/Store_CTDDH';
import StoreSearchFood from './views/Store_Search_Food';
import StoreTTHH from './views/Store_TTHH';
import CustomerProductDetails from './views/Customer_Product_Details';
import StoreQLSP from './views/Store_QLSP';
import StoreTTCTSP from './views/Store_QLSP_TTCTSP';
import StoreProfile from './views/Store_Profile';

// Chữ cái đầu phải viết hoa mới được
class App extends React.Component {
    render() {
      return (
          <Router>
             <Switch>
                <Route exact path = "/customer/login">
                    <CustomerLogin />
                </Route>
                <Route exact path = "/store/login">
                    <StoreLogin />
                </Route>
                <Route exact path = "/customer" >
                    <CustomerHeader/>
                    <CustomerSlider/>
                    <CustomerHomepage />
                </Route>
                <Route exact path = "/" >
                    <Redirect to="/customer/login"/>
                </Route>
                <Route exact path = "/customer/register">
                    <CustomerRegistration />
                </Route>
                <Route exact path = "/store/register">
                    <StoreRegistration />
                </Route>
                <Route exact path = "/customer/storelist">
                    <CustomerHeader/>
                    <CustomerStoreList />
                </Route>
                <Route exact path = "/customer/selectfood">
                    <CustomerHeader/>
                    <CustomerSelectFood />
                </Route>
                <Route exact path = "/customer/cart">
                    <CustomerHeader/>
                    <CustomerCart />
                </Route>
                <Route exact path = "/customer/profile">
                    <CustomerHeader/>
                    <CustomerProfile />
                </Route>
                <Route exact path = "/customer/search_product">
                    <CustomerHeader/>
                    <CustomerSearchProduct />
                </Route>
                <Route exact path = "/customer/productdetails">
                    <CustomerHeader/>
                    <CustomerProductDetails />
                </Route>
                <Route exact path = "/customer/booking">
                    <CustomerHeader/>
                    <CustomerBooking />
                </Route>
                <Route exact path = "/customer/bookingsuccess">
                    <CustomerHeader/>
                    <CustomerBookingSuccess />
                </Route>
                <Route exact path = "/customer/bookinghistory">
                    <CustomerHeader/>
                    <CustomerBookingHistory />
                </Route>
                <Route exact path = "/customer/orderdetail">
                    <CustomerHeader/>
                    <CustomerOrderDetail />
                </Route>
                <Route exact path = "/customer/contact">
                    <CustomerHeader/>
                    <CustomerContact />
                </Route>
                <Route exact path = "/customer/faq">
                    <CustomerHeader/>
                    <CustomerFAQ />
                </Route>
                <Route exact path = "/system/login">
                    <SystemLogin />
                </Route>
                <Route exact path = "/system/qlkh">
                    <SystemHeader/>
                    <SystemQLKH />
                </Route>
                <Route exact path = "/system">
                    <SystemHeader/>
                    <SystemHomepage />
                </Route>
                <Route exact path = "/system/qlsp">
                    <SystemHeader/>
                    <SystemQLSP />
                </Route>
                <Route exact path = "/system/qlsp/ctsp">
                    <SystemHeader/>
                    <SystemCTSP />
                </Route>
                <Route exact path = "/system/tkddh">
                    <SystemHeader/>
                    <SystemTKDDH />
                </Route>
                <Route exact path = "/system/tthh">
                    <SystemHeader/>
                    <SystemTTHH />
                </Route>
                <Route exact path = "/system/system_store_registration1">
                    <SystemHeader/>
                    <SystemStoreRegistration1 />
                </Route>
                <Route exact path = "/system/system_store_registration2">
                    <SystemHeader/>
                    <SystemStoreRegistration2 />
                </Route>
                <Route exact path = "/system/system_store_registration3">
                    <SystemHeader/>
                    <SystemStoreRegistration3 />
                </Route>
                <Route exact path = "/system/tkmhty">
                    <SystemHeader/>
                    <SystemTKMHTY />
                </Route>
                <Route exact path = "/system/tknctpck">
                    <SystemHeader/>
                    <SystemTKNCTPCK />
                </Route>
                <Route exact path = "/system/qlchst">
                    <SystemHeader/>
                    <SystemQLTTCHST />
                </Route>
                <Route exact path = "/system/qlchst/ttctchst">
                    <SystemHeader/>
                    <SystemTTCTCHST />
                </Route>
                <Route exact path = "/system/tkvd">
                    <SystemHeader/>
                    <SystemTKVD />
                </Route>
                <Route exact path = "/store">
                    <StoreHeader/>
                    <StoreHomepage/>
                </Route>
                <Route exact path = "/store/qldh">
                    <StoreHeader/>
                    <StoreQLDH/>
                </Route>
                <Route exact path = "/store/qldh/ctddh">
                    <StoreHeader/>
                    <StoreCTDDH/>
                </Route>
                <Route exact path = "/store/search">
                    <StoreHeader/>
                    <StoreSearchFood/>
                </Route>
                <Route exact path = "/store/tthh">
                    <StoreHeader/>
                    <StoreTTHH/>
                </Route>
                <Route exact path = "/store/qlsp">
                    <StoreHeader/>
                    <StoreQLSP/>
                </Route>
                <Route exact path = "/store/qlsp/ttctsp">
                    <StoreHeader/>
                    <StoreTTCTSP/>
                </Route>
                <Route exact path = "/store/profile">
                    <StoreHeader/>
                    <StoreProfile/>
                </Route>
            </Switch>   
          </Router>
    );
  }
}

export default App;