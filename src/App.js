import React from "react";
import NavBar from "./components/general-components/NavBar";
import Header from "./components/general-components/Header";
import HighlightContainer from "./components/general-components/HighlightContainer";
import Index from "./pages/index";
import Category from "./pages/category";
import Detail from "./pages/detail";
import Cart from "./pages/cart";
import BoxContainer from "./components/general-components/BoxContainer";
import Footer from "./components/general-components/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<React.Fragment>
					<NavBar />
					<Header />
					<HighlightContainer />
					<Switch>
						<Route
							exact
							path={["/", "/index", "/home"]}
							component={Index}
						/>
						<Route path="/category" component={Category} />
						<Route
							path="/detail/:id"
							render={props => <Detail {...props} />}
						/>
						<Route path="/cart" component={Cart} />
					</Switch>
					<BoxContainer />
					<Footer />
				</React.Fragment>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
