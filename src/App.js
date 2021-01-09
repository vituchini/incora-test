import logo from './logo.svg';
import './App.css';
import {BrowserRouter, NavLink, Redirect, Route} from 'react-router-dom'
import {Component} from "react";
import UsersContainer from "./components/Users/UsersContainer";
import {Provider} from "react-redux";
import store from "./redux/redux-store"
import PostsContainer from "./components/Posts/PostsContainer";
class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Redirect to={'/users'}/>

                    <div className="app-wrapper">

                        <header className="header">
                            <img src={logo} className="logo" alt="logo"/>
                            <NavLink to='/users'>Users</NavLink>
                        </header>

                        <div className='app-wrapper-content'>
                            <Route exact path='/users'
                                   render={() => <UsersContainer/>}/>
                            <Route path='/users/:userId/posts'
                                   render={() => <PostsContainer/>}/>
                        </div>

                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
