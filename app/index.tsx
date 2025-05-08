import * as React from "react";
import {
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text } from "~/components/ui/text";
import { Checkbox } from "~/components/ui/checkbox";

type TaskType = {
  id: number;
  title: string;
  category: string;
  checked: boolean;
};

function Task({
  task,
  onToggle,
  onDelete,
}: {
  task: TaskType;
  onToggle: (id: number) => void;
  onDelete: () => void;
}) {
  const textColorClass = task.checked ? "text-orange-500" : "text-foreground";
  const categoryColorClass = task.checked
    ? "text-orange-400"
    : "text-stone-600";

  return (
    <View className="flex flex-row w-full border-b border-b-stone-600 items-center">
      <View className="w-1/6 items-center p-2">
        <Checkbox
          checked={task.checked}
          onCheckedChange={() => onToggle(task.id)}
        />
      </View>

      <View className="w-3/6 p-2">
        <Text
          className={`${textColorClass} ${task.checked ? "font-semibold" : ""}`}
        >
          {task.title}
        </Text>
        <Text className={categoryColorClass}>{task.category}</Text>
      </View>

      <TouchableOpacity onPress={onDelete} className="w-2/6 items-end pr-4">
        <Text className="text-red-500 font-bold">Remove</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function HomeScreen() {
  const [tasks, setTasks] = React.useState<TaskType[]>([]);
  const [newTitle, setNewTitle] = React.useState("");
  const [newCategory, setNewCategory] = React.useState("");

  React.useEffect(() => {
    const loadTasks = async () => {
      const storedTasks = await AsyncStorage.getItem("tasks");
      if (storedTasks) setTasks(JSON.parse(storedTasks));
    };
    loadTasks();
  }, []);

  React.useEffect(() => {
    AsyncStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const showWarning = (title: string, message: string) => {
    Alert.alert(title, message);
  };

  const addTask = () => {
    if (newTitle.trim() === "" || newCategory.trim() === "") return;

    const isDuplicate = tasks.some(
      (task) => task.title.toLowerCase() === newTitle.trim().toLowerCase()
    );

    if (isDuplicate) {
      showWarning("Duplicate Task", "A task with this title already exists.");
      return;
    }

    const newTask: TaskType = {
      id: Date.now(),
      title: newTitle.trim(),
      category: newCategory.trim(),
      checked: false,
    };

    setTasks([...tasks, newTask]);
    setNewTitle("");
    setNewCategory("");
  };

  const deleteTask = (taskId: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
  };

  const toggleChecked = (taskId: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, checked: !task.checked } : task
      )
    );
  };

  const removeSelectedTasks = () => {
    setTasks((prev) => prev.filter((task) => !task.checked));
  };

  return (
    <ScrollView className="bg-background">
      <View className="container mx-auto p-4 flex-1 justify-center items-center gap-5">
        <Text className="pb-2 text-center text-xl font-semibold">
          Hall Pass
        </Text>

        <TextInput
          className="w-full p-2 border rounded border-stone-400 mb-2 text-white"
          placeholder="Task title"
          placeholderTextColor="#aaa"
          value={newTitle}
          onChangeText={setNewTitle}
        />
        <TextInput
          className="w-full p-2 border rounded border-stone-400 mb-4 text-white"
          placeholder="Task description"
          placeholderTextColor="#aaa"
          value={newCategory}
          onChangeText={setNewCategory}
        />
        <View className="w-full flex-row justify-between gap-4 mb-4">
          <View className="flex-1">
            <Button title="Add Task" onPress={addTask} color="orange" />
          </View>
          <View className="flex-1">
            <Button
              title="Remove Selected"
              onPress={removeSelectedTasks}
              color="red"
            />
          </View>
        </View>

        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onToggle={toggleChecked}
            onDelete={() => deleteTask(task.id)}
          />
        ))}
      </View>
    </ScrollView>
  );
}
