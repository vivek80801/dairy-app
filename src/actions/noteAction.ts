import { CREATENOTES, DELETENOTES, EDITNOTES, noteAction } from "./@types";

export const createNotes = (date: string, description: string): noteAction => ({
	type: CREATENOTES,
	payload: {
		date,
		description,
	},
});

export const editNote = (
	id: number,
	date: string,
	description: string
): noteAction => ({
	type: EDITNOTES,
	payload: {
		id,
		date,
		description,
	},
});

export const deleteNote = (id: number): noteAction => ({
	type: DELETENOTES,
	payload: { id },
});
