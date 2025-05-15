import React from "react";
import { render } from "@testing-library/react-native";
import { Task } from "../app/index";

// Mock AsyncStorage
jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock")
);

describe("Task", () => {
  it("renders correctly", () => {
    const task = {
      id: 1,
      title: "Test Task",
      category: "Test Category",
      checked: false,
    };
    const { getByText } = render(<Task task={task} />);

    expect(getByText("Test Task")).toBeTruthy();
    expect(getByText("Test Category")).toBeTruthy();
  });
  // it("adds a new task when title and category are filled", async () => {
  //   const { getByPlaceholderText, getByText, queryByText } = render(
  //     <HomeScreen />
  //   );

  //   const titleInput = getByPlaceholderText("Task title");
  //   const categoryInput = getByPlaceholderText("Task description");
  //   const addButton = getByText("Add Task");

  //   fireEvent.changeText(titleInput, "My Test Task");
  //   fireEvent.changeText(categoryInput, "My Category");

  //   fireEvent.press(addButton);

  //   await waitFor(() => {
  //     expect(queryByText("My Test Task")).toBeTruthy();
  //     expect(queryByText("My Category")).toBeTruthy();
  //   });
  // });

  // it("does not add a duplicate task and shows alert", async () => {
  //   const { getByPlaceholderText, getByText } = render(<HomeScreen />);

  //   const titleInput = getByPlaceholderText("Task title");
  //   const categoryInput = getByPlaceholderText("Task description");
  //   const addButton = getByText("Add Task");

  //   fireEvent.changeText(titleInput, "Duplicate Task");
  //   fireEvent.changeText(categoryInput, "Duplicate Category");
  //   fireEvent.press(addButton);

  //   fireEvent.changeText(titleInput, "Duplicate Task");
  //   fireEvent.changeText(categoryInput, "Duplicate Category");
  //   fireEvent.press(addButton);

  //   await waitFor(() => {
  //     expect(Alert.alert).toHaveBeenCalledWith(
  //       "Duplicate Task",
  //       "This task already exists.",
  //       expect.any(Array)
  //     );
  //   });
  // });
});
