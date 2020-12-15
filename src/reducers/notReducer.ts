import { note } from "../@types/notes";
import { noteAction } from "../actions/@types";

export const noteReducer = (state: note[] = [], action: noteAction): note[] => {
	switch (action.type) {
		case "CREATENOTES":
			return [
				...state,
				{
					id: state.length + 1,
					date: action.payload.date,
					description: action.payload.description,
				},
			];

		default:
			return state;
	}
};
