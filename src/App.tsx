import React from "react";
import "./App.scss";
import Navbar from "./components/layouts/Navbar";
import { useDispatch } from "react-redux";
import { createNotes } from "./actions/noteAction";

const App: React.FC = (): JSX.Element => {
	const [myDate, setMyDate] = React.useState("");
	const [description, setDiscription] = React.useState("");

	const dispatch = useDispatch();
	return (
		<>
			<Navbar />
			<input type="date" onChange={(e) => setMyDate(e.target.value)} />
			<textarea
				cols={30}
				rows={10}
				onChange={(e) => setDiscription(e.target.value)}
			></textarea>
			<br />
			<button onClick={() => dispatch(createNotes(myDate, description))}>
				Save
			</button>
			{myDate}
		</>
	);
};

export default App;
