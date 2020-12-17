import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import store from "./store";
import { Provider } from "react-redux";

describe("App should render", () => {
	test("navbar should render in App", () => {
		render(
			<Provider store={store}>
				<App />
			</Provider>
		);
		const linkElement = screen.getByText(/home/i);
		expect(linkElement).toBeInTheDocument();
	});
	test("alert with error message should be displayed", async () => {
		const { findByText } = render(
			<Provider store={store}>
				<App />
			</Provider>
		);
		const btn = await findByText("save");
		userEvent.click(btn);
		const mess = await findByText("Please fill all relevent fields");
		expect(mess).toBeInTheDocument();
	});
	test("alert with sucess message should be displayed", async () => {
		const { findByText, findByTestId } = render(
			<Provider store={store}>
				<App />
			</Provider>
		);
		const inp = await findByTestId("input");
		fireEvent.change(inp, { target: { value: "06-12-2020" } });
		const text = await findByTestId("text");
		userEvent.type(text, "test");
		const btn = await findByText("save");
		userEvent.click(btn);
		const mess = await findByText("Notes has been created");
		expect(mess).toBeInTheDocument();
	});
	test("table should be displayed", async () => {
		const { findByText, findByTestId } = render(
			<Provider store={store}>
				<App />
			</Provider>
		);
		const inp = await findByTestId("input");
		fireEvent.change(inp, { target: { value: "06-12-2020" } });
		const text = await findByTestId("text");
		userEvent.type(text, "test");
		const btn = await findByText("save");
		userEvent.click(btn);
		const date = await findByText("date");
		expect(date).toBeInTheDocument();
	});
});
