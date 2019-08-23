import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Sidebar from "./components/Sidebar/Sidebar";
import { Grid } from "@material-ui/core";

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Grid container direction="row">
					<Grid md={3}>
						<Sidebar />
					</Grid>
					<Grid md={9}>
						<Route exact path="/" component={Dashboard} />
					</Grid>
				</Grid>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
