import { CREATENOTES, noteAction } from "./@types";

export const createNotes = (date: string, description: string): noteAction => ({
	type: CREATENOTES,
	payload: {
		date,
		description,
	},
});
