import React from "react";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { editNote } from "../../actions/noteAction";
import modal from "../../scss/components/layouts/modal.module.scss";

const Modal: React.FC<{ id: number; setModal: (a: boolean) => void }> = ({
	id,
	setModal,
}): React.ReactPortal => {
	const [editDate, setEditDate] = React.useState("");
	const [Note, setNote] = React.useState("");
	const dispatch = useDispatch();
	return createPortal(
		<div className={`${modal.modal} p-1`}>
			<input onChange={(e) => setEditDate(e.target.value)} type="date" />
			<textarea
				onChange={(e) => setNote(e.target.value)}
				cols={30}
				rows={10}
			></textarea>
			<button
				onClick={() => {
					dispatch(editNote(id, editDate, Note));
					setModal(false);
				}}
				className="btn-secondary"
			>
				save
			</button>
		</div>,
		document.getElementById("modal") as HTMLElement
	);
};

export default Modal;
