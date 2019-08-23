import React from "react";
import { Grid, Paper, Button } from "@material-ui/core";
import DashboardGrid from "./styled-components/DashboardGrid";
import YearProgressWrapper from "./styled-components/YearProgressWrapper";
import YearProgress from "./styled-components/YearProgress";
import { useSelector, useDispatch } from "react-redux";

import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { StoreState } from "../../models/store-state.model";
const Dashboard = () => {
	const { metrics, selectedMetrics } = useSelector(
		(state: StoreState) => state
	);

	const dispatch = useDispatch();

	const handleClick = (year: number) => (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		dispatch({ type: "SET_SELECTED_METRICS", payload: year });
	};

	return (
		<DashboardGrid
			container
			direction="column"
			justify="space-evenly"
			alignItems="center"
		>
			<Grid
				container
				direction="row"
				justify="space-around"
				alignItems="center"
			>
				<Grid md={3}>
					<CircularProgressbarWithChildren
						styles={{
							path: {
								stroke: "orange"
							}
						}}
						value={selectedMetrics.orange_metric}
						maxValue={10}
						text={`${selectedMetrics.orange_metric * 100}%`}
					/>
				</Grid>
				<Grid md={3}>
					<CircularProgressbarWithChildren
						styles={{
							path: {
								stroke: "grey"
							}
						}}
						value={selectedMetrics.gray_metric}
						maxValue={1}
						text={`${selectedMetrics.gray_metric * 100}%`}
					/>
				</Grid>
				<Grid md={3}>
					<CircularProgressbarWithChildren
						styles={{
							path: {
								stroke: "blue"
							}
						}}
						value={selectedMetrics.blue_metric}
						maxValue={1}
						text={`${selectedMetrics.blue_metric * 100}%`}
					/>
				</Grid>
			</Grid>
			<Grid
				container
				direction="column"
				justify="flex-start"
				alignItems="flex-start"
			>
				<Paper style={{ width: "100%", padding: 10 }}>
					<h3>Units</h3>
					{metrics.map(metric => {
						return (
							<YearProgressWrapper key={metric.year}>
								<Button onClick={handleClick(metric.year)}>
									{metric.year}
								</Button>
								<YearProgress
									variant="determinate"
									value={100}
									style={{ width: metric.units / 1.8 }}
								/>
								<span>{metric.units}</span>
							</YearProgressWrapper>
						);
					})}
				</Paper>
			</Grid>
		</DashboardGrid>
	);
};

export default Dashboard;
