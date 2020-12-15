export const CREATENOTES = "CREATENOTES";
export const EDITNOTES = "EDITNOTES";
export const DELETENOTES = "DELETENOTES";

export interface noteAction {
	type: typeof CREATENOTES;
	payload: { date: string; description: string };
}
