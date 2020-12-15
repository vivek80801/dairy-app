import React from "react";
import { note } from "../../@types/notes";
import { useSelector, useDispatch } from "react-redux";
import { deleteNote } from "../../actions/noteAction";
import Modal from "./Modal";

interface NoteReducer {
	noteReducer: note[];
}

const Notes: React.FC = (): JSX.Element => {
	const [showModal, setShowModal] = React.useState(false);
	const [editId, setEditId] = React.useState(0);
	const notes = useSelector((state: NoteReducer) => state);
	const dispatch = useDispatch();

	const setModal = (a: boolean) => setShowModal(a);
	return (
		<>
			<table className={"p-1"}>
				<thead>
					<tr>
						<th>date</th>
						<th>discreption</th>
						<th>edit</th>
						<th>delete</th>
					</tr>
				</thead>
				{notes.noteReducer.length > 0
					? notes.noteReducer.map(({ id, date, description }) => (
							<tbody key={id}>
								<tr>
									<td>{date}</td>
									<td>{description}</td>
									<td>
										<button
											onClick={() => {
												setShowModal(true);
												setEditId(id);
											}}
											className={"btn-secondary"}
										>
											edit
										</button>
									</td>
									<td>
										<button
											onClick={() => dispatch(deleteNote(id))}
											className={"btn-danger"}
										>
											delete
										</button>
									</td>
								</tr>
							</tbody>
					  ))
					: null}
			</table>
			{showModal && <Modal id={editId} setModal={setModal} />}
		</>
	);
};

export default Notes;
