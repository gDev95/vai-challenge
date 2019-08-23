import React, { useEffect } from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";

import SidebarGrid from "./styled-components/SidebarGrid";
import SidebarTopWrapper from "./styled-components/SidebarTopWrapper";
import UserImage from "./styled-components/UserImage";
import SidebarListWrapper from "./styled-components/SidebarListWrapper";
import Axios from "axios";

import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import sampleData from "../../Input";
import { StoreState } from "../../models/store-state.model";

// This sets the mock adapter on the default instance
const mock = new MockAdapter(axios);

// Mock any GET request to /users
// arguments for reply are (status, data, headers)
mock.onGet("/user/1ce438ab-c6c2-4f98-abb6-b318bd83240c").reply(200, sampleData);

const Sidebar = () => {
	const { name, image, saldo, overdue, sent } = useSelector(
		(state: any) => state.userInformation
	);

	const { id } = useSelector((state: StoreState) => state.userInformation);

	const dispatch = useDispatch();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await Axios.get(`user/${id}`);
				const data = response.data;
				dispatch({ type: "SET_USER_DATA", payload: data });
			} catch (e) {
				console.log(e);
			}
		};
		fetchData();
		// react-hooks/exhaustive-deps
	}, []);

	return (
		<SidebarGrid container direction="column">
			<SidebarTopWrapper>
				<UserImage data-testid="userImage" src={image} />
				<h3 data-testid="userName">{name}</h3>
			</SidebarTopWrapper>

			<SidebarListWrapper>
				<List>
					<ListItem>
						<ListItemText primary="Saldo" secondary={saldo} />
					</ListItem>
					<ListItem>
						<ListItemText primary="Sent" secondary={sent} />
					</ListItem>
					<ListItem>
						<ListItemText primary="Overdue" secondary={overdue} />
					</ListItem>
				</List>
			</SidebarListWrapper>
		</SidebarGrid>
	);
};

export default Sidebar;
