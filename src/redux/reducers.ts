interface Metrics {
	something: any;
}

export interface UserInformation {
	userName: string;
	userImage: string;
	saldo: number;
	sent: number;
	overdue: number;
}
interface CircleChartData {
	orangeMetric: number;
	blueMetric: number;
	greyMetric: number;
}
interface StoreState {
	userInformation: UserInformation;
	metrics: Metrics[];
	circleCharts: CircleChartData;
}

const initialState: StoreState = {
	userInformation: {
		userName: "",
		userImage:
			"https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
		saldo: 0,
		sent: 0,
		overdue: 0
	},
	metrics: [],
	circleCharts: {
		orangeMetric: 0,
		blueMetric: 0,
		greyMetric: 0
	}
};

const reducers = (state = initialState, action: any) => {
	return state;
};

export default reducers;
