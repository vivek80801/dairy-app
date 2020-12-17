import React from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { editNote } from "../../actions/noteAction";
import { NoteReducer } from "./Notes";
import modal from "../../scss/components/layouts/modal.module.scss";
import { Message } from "../../App";
import alert from "../../scss/components/layouts/alert.module.scss";
import Alert from "./Alert";

const Modal: React.FC<{
	id: number;
	setModal: (a: boolean) => void;
	showModal: boolean;
}> = ({ id, setModal, showModal }): React.ReactPortal => {
	const [editDate, setEditDate] = React.useState("");
	const [Note, setNote] = React.useState("");
	const [mess, setMess] = React.useState<Message>({ message: "", err: false });
	const dispatch = useDispatch();
	const notes = useSelector((state: NoteReducer) => state);

	React.useEffect(() => {
		notes.noteReducer.map((note) => {
			if (id === note.id) {
				setEditDate(note.date);
				setNote(note.description);
			}
			return note;
		});
	}, [id, notes]);

	return createPortal(
		<div className={`${showModal ? modal.modal : modal.close} p-1`}>
			<Alert
				message={mess.message}
				cls={mess.err ? alert.messageDanger : alert.messageSucess}
			/>
			<input
				onChange={(e) => setEditDate(e.target.value)}
				type="date"
				className={"input-primary"}
				value={editDate}
				data-testid="edit-input"
			/>
			<textarea
				onChange={(e) => setNote(e.target.value)}
				cols={30}
				rows={10}
				className={"p-1 input-secondary"}
				placeholder="Edit Note"
				value={Note}
			></textarea>
			<div className="btn">
				<button onClick={() => setModal(false)} className="btn-secondary m-1">
					cancel
				</button>
				<button
					onClick={() => {
						if (editDate === "" || Note === "") {
							setMess({ message: "Please fill the inputs", err: true });
							setTimeout(() => {
								setMess({ message: "", err: false });
							}, 5000);
						} else {
							setMess({ message: "Notes has been edited", err: false });
							setTimeout(() => {
								setMess({ message: "", err: false });
								setModal(false);
							}, 5000);
							return dispatch(editNote(id, editDate, Note));
						}
					}}
					className="btn-sucess m-1"
				>
					save
				</button>
			</div>
		</div>,
		document.getElementById("modal") as HTMLElement
	);
};

export default Modal;
