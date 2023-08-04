import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App(){
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className='content'>
          <Switch>
            <Route exact path="/">         {/*Route path="/" ye check krta hai ki route me / included ho, to usse /create me hr baar sirf / read krke chhor dega or home page hi waaps aa jaaega*/}
              <Home/>
            </Route>
            <Route exact path="/create">
              <Create/>
            </Route>
            <Route exact path="/blogs/:id">
              <BlogDetails/>
            </Route>
            <Route exact path="*">        {/* "*" ka mtlb hai ki iske upar jitne routes hai unko chhorkr agr koi bhi or route aaya to ye kaam krega */}
              <NotFound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
