import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Welcome from './components/Welcome';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CounterApp from './components/CounterApp';
import Section from './components/Section';
import UseEffectFirst from './components/UseEffectFirst';
import UseEffectSecond from './components/UseEffectSecond';
import UseEffectThird from './components/UseEffectThird';
import UseEffectFourth from './components/UseEffectFourth';
import SingleProduct from './components/01-07/SingleProduct';
import Params from './components/01-07/Params';
import ProductDetail from './components/01-07/ProductDetail';
import Map from './components/01-07/Map';
import StyleComponent from './components/01-07/StyleComponent';
import { useState } from 'react';
import WrappedComponent from './components/01-07/WrappedComponent';
import SinglePage from './components/02-07/SinglePage';
import DummyParams from './components/02-07/DummyParams';
import DynamicStyle from './components/04-07/DynamicStyle';
import DynamicClasses from './components/04-07/DynanicClasses';
import DynamicComponent from './components/04-07/DynamicComponent';
import FormOne from './components/06-07/FormOne';
import FormObjectStore from './components/08-07/FormObjectStore';
import TodoCounter from './components/08-07/TodoCounter';
import UseReducer from './components/09-07/UseReducer';
import UseMemoEg from './components/09-07/UseMemoEg';
import DummyBackendProduct from './components/11-07/DummyBackendProduct';
import SingleProductBackendPage from './components/13-07/SingleProductBackendPage';
import Registration from './components/15-07/Registration';
import Login from './components/15-07/Login';
import Cart from './components/18-07/Cart';
import Profile from './components/22-07/Profile';

function App() {

    const [myUser,updateMyUser] = useState(["kdshfks","krishna","ravi","aakash"]);

    return (
        <><Navbar></Navbar>
            <Routes>
                <Route exact path='/registration' element={<Registration />} />
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/use-reducer-example' element={<UseReducer />} />
                <Route exact path='/use-memo-example' element={<UseMemoEg />} />
                <Route exact path='/counter-todo' element={ <TodoCounter /> } />
                <Route exact path="/form-object-store" element = { <FormObjectStore />} />
                <Route exact path='/form-one' element={<FormOne />} />
                <Route exact path='/children-prop' element={<DynamicComponent />} />
                <Route exact path='/dynamic-class' element ={<DynamicClasses />} />
                <Route exact path='/dynamic-style' element={<DynamicStyle />} />
                <Route exact path = '/dummyparams' element ={ <DummyParams /> } />
                <Route exact path='/singlepage/:id' element = { <SinglePage />} />
                <Route exact path='/wrappedComponent' element = { <WrappedComponent />} />
                <Route exact path='/styleComponent' element = {<StyleComponent />} />
                <Route exact path='/map' element={<Map user={myUser} updateUser={updateMyUser} userName={"krish"} userData= {["rohit","robert","shalu"]} />} />
                <Route exact path='/productdetail' element={<ProductDetail />} />
                <Route exact path='/single-product/:id' element={<SingleProduct />} />
                <Route exact path='/params' element = {<Params />} />
                <Route exact path='/useEffect1' element={<UseEffectFirst />} />
                <Route exact path='/useEffect2' element={<UseEffectSecond />} />
                <Route exact path='/useEffect3' element={<UseEffectThird />} />
                <Route exact path='/useEffect4' element={<UseEffectFourth />} />
                <Route exact path="/counterApp" element={<CounterApp />} />
                <Route exact path="/section" element={<Section />} />
                <Route exact path="/welcome" element={<Welcome />} />
                <Route exact path="/" element={<Home />} />
                <Route exact path='/dummy-backend-product' element={<DummyBackendProduct />} />
                <Route exact path='/single-backent-product/:id' element={<SingleProductBackendPage />} />
                <Route exact path= '/cart' element= {<Cart />} />
                <Route exact path='/profile' element={<Profile />} />
            </Routes>
            {/* <Footer></Footer> */}
        </>
    );
}
export default App;
