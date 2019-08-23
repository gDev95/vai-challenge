import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Route } from "react-router-dom";
import { Grid } from "@material-ui/core";

import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Grid container direction="row">
					<Grid xs={3} md={2}>
						<Sidebar />
					</Grid>
					<Grid xs={9} md={10}>
						<Route exact path="/" component={Dashboard} />
					</Grid>
				</Grid>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
