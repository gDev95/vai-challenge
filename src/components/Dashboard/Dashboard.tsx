import React from "react";
import { Grid } from "@material-ui/core";

const Dashboard = () => {
	return (
		<Grid container direction="column" justify="center" alignItems="center">
			<Grid container direction="row" justify="center" alignItems="center">
				<Grid md={3}>Progress goes her</Grid>
				<Grid md={3}>Progress goes her</Grid>
				<Grid md={3}>Progress goes her</Grid>
			</Grid>
			<Grid container direction="column" justify="center" alignItems="center">
				<span>2019</span>
				<span>2018</span>
				<span>2017</span>
				<span>2016</span>
				<span>2015</span>
			</Grid>
		</Grid>
	);
};

export default Dashboard;
