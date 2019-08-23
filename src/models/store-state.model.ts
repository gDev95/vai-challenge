import { UserInformation } from "./user-information.model";
import { Metric } from "./metric.model";

export interface StoreState {
	userInformation: UserInformation;
	metrics: Metric[];
	selectedMetrics: Metric;
}
