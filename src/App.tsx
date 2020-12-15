import React from "react";
import "./App.scss";
import Navbar from "./components/layouts/Navbar";
import { useDispatch } from "react-redux";
import { createNotes } from "./actions/noteAction";
import Notes from "./components/layouts/Notes";

const App: React.FC = (): JSX.Element => {
	const [myDate, setMyDate] = React.useState("");
	const [description, setDiscription] = React.useState("");

	const dispatch = useDispatch();
	return (
		<>
			<Navbar />
			<div className={"app"}>
				<input type="date" onChange={(e) => setMyDate(e.target.value)} />
				<textarea
					cols={30}
					rows={10}
					onChange={(e) => setDiscription(e.target.value)}
					className={"p-1"}
				></textarea>
				<br />
				<button
					className={"btn-primary"}
					onClick={() => dispatch(createNotes(myDate, description))}
				>
					save
				</button>
				<Notes />
			</div>
		</>
	);
};

export default App;
