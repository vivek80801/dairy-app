import { note } from "../@types/notes";
import {
	noteAction,
	CREATENOTES,
	EDITNOTES,
	DELETENOTES,
} from "../actions/@types";

export const noteReducer = (state: note[] = [], action: noteAction): note[] => {
	switch (action.type) {
		case CREATENOTES:
			return [
				...state,
				{
					id: state.length <= 0 ? 1 : state[state.length - 1].id + 1,
					date: action.payload.date,
					description: action.payload.description,
				},
			];

		case EDITNOTES:
			return [
				...state.map(({ date, description, id }) =>
					id === action.payload.id
						? {
								id,
								date: action.payload.date,
								description: action.payload.description,
						  }
						: { id, date, description }
				),
			];

		case DELETENOTES:
			return [...state.filter(({ id }) => id !== action.payload.id)];

		default:
			return state;
	}
};
