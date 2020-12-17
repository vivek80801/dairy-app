import React from "react";
import "./App.scss";
import Navbar from "./components/layouts/Navbar";
import { useDispatch } from "react-redux";
import { createNotes } from "./actions/noteAction";
import Notes from "./components/layouts/Notes";
import Alert from "./components/layouts/Alert";
import alert from "./scss/components/layouts/alert.module.scss";

export interface Message {
	message: string;
	err: boolean;
}

const App: React.FC = (): JSX.Element => {
	const [myDate, setMyDate] = React.useState("");
	const [description, setDiscription] = React.useState("");
	const [mess, setMess] = React.useState<Message>({ message: "", err: false });

	const dispatch = useDispatch();
	return (
		<>
			<Navbar />
			<div className={"app p-1"}>
				<Alert
					message={mess.message}
					cls={mess.err ? alert.messageDanger : alert.messageSucess}
				/>
				<input
					type="date"
					onChange={(e) => setMyDate(e.target.value)}
					className={"input-primary"}
				/>
				<textarea
					cols={30}
					rows={10}
					onChange={(e) => setDiscription(e.target.value)}
					className={"p-1 input-secondary"}
					placeholder="Write Note"
				></textarea>
				<br />
				<button
					className={"btn-primary"}
					onClick={() => {
						if (myDate === "" && description === "") {
							setMess({ message: "Please fill all relevent fields", err: true });
							setTimeout(() => {
								setMess({ message: "", err: false });
							}, 5000);
						} else {
							setMess({ message: "Notes has been created", err: false });
							setTimeout(() => {
								setMess({ message: "", err: false });
							}, 5000);
							return dispatch(createNotes(myDate, description));
						}
					}}
				>
					save
				</button>
				<Notes />
			</div>
		</>
	);
};

export default App;
