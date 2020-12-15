export const CREATENOTES = "CREATENOTES";
export const EDITNOTES = "EDITNOTES";
export const DELETENOTES = "DELETENOTES";

export type noteAction =
	| {
			type: typeof CREATENOTES;
			payload: { date: string; description: string };
	  }
	| {
			type: typeof EDITNOTES;
			payload: { id: number; date: string; description: string };
	  }
	| {
			type: typeof DELETENOTES;
			payload: { id: number };
	  };
