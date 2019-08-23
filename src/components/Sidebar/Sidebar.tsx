import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { useSelector } from "react-redux";

import SidebarGrid from "./SidebarGrid";
import SidebarTopWrapper from "./SidebarTopWrapper";
import UserImage from "./UserImage";
import SidebarListWrapper from "./SidebarListWrapper";

const Sidebar = () => {
	const { userName, userImage, saldo, overdue, sent } = useSelector(
		(state: any) => state.userInformation
	);
	return (
		<SidebarGrid container direction="column">
			<SidebarTopWrapper>
				<UserImage data-testid="userImage" src={userImage} />
				<h3 data-testid="userName">{userName}</h3>
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
