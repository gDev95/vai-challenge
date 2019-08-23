import { SET_USER_DATA, SET_SELECTED_METRICS } from "./actionTypes";
import { StoreState } from "../models/store-state.model";
import { Metric } from "../models/metric.model";

const initialState: StoreState = {
	userInformation: {
		id: "1ce438ab-c6c2-4f98-abb6-b318bd83240c",
		name: "",
		image:
			"https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
		saldo: 0,
		sent: 0,
		overdue: 0
	},
	metrics: [],
	selectedMetrics: {
		blue_metric: 0,
		gray_metric: 0,
		growUnits: 0,
		orange_metric: 0,
		percent: 0,
		units: 0,
		year: 0
	}
};

const sortMetrics = (array: Metric[]) => {
	array.sort((metricA, metricB) => {
		return metricA.year - metricB.year;
	});
};

const reducers = (state = initialState, action: any) => {
	switch (action.type) {
		case SET_USER_DATA: {
			const { id, name, saldo, overdue, sent } = action.payload;
			const { metrics } = action.payload;
			// get the first metric in chronological order
			sortMetrics(metrics);
			const selectedMetrics = metrics[0];

			// then reverse so its displayed according to design
			const reversedMetricsList = metrics.reverse();

			return {
				userInformation: {
					...state.userInformation,
					id,
					name,
					saldo,
					sent,
					overdue
				},
				metrics: reversedMetricsList,
				selectedMetrics
			};
		}
		case SET_SELECTED_METRICS: {
			const targetYear = action.payload;
			const newSelectedMetrics = state.metrics.find(
				metric => metric.year === targetYear
			);
			return {
				...state,
				selectedMetrics: newSelectedMetrics
			};
		}
		default: {
			return state;
		}
	}
};

export default reducers;
