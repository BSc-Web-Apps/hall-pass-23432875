import * as React from "react";
import { View, TextInput } from "react-native";
import { Text } from "~/components/ui/text";
import { Checkbox } from "~/components/ui/checkbox";

function Task() {
  const [checked, setChecked] = React.useState(false);

  return (
    <View className="flex flex-row 400 w-full border-b border-b-stone-600">
      <View className="flex justify-center w-1/4 items-center p-2">
        <Checkbox checked={checked} onCheckedChange={setChecked} />
      </View>

      <View className="flex h-20 w-3/4 p-4">
        <Text className="text-foreground">Title</Text>
        <Text className="text-stone-600">Category</Text>
      </View>
    </View>
  );
}

export default function HomeScreen() {
  const tasks = [
    { id: 1, title: "Task 1", category: "category 1" },
    { id: 2, title: "Task 2", category: "category 2" },
    { id: 3, title: "Task 3", category: "category 3" },
  ];

  return (
    <View className="container mx-auto p-4 flex-1 justify-center items-center gap-5 bg-background">
      <Text className="pb-2 text-center text-xl font-semibold">Hall Pass</Text>

      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
    </View>
  );
}

interface TaskItemProps {
  task: {
    id: number;
    title: string;
    completed: boolean;
  };
  onToggle: (taskId: number) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle }) => {
  return (
    <View className="flex flex-row items-center w-full p-3 border-b border-gray-300">
      <Checkbox
        checked={task.completed}
        onCheckedChange={() => onToggle(task.id)}
      />
      <Text className="ml-3 text-lg">{task.title}</Text>
    </View>
  );
};

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export const TaskList: React.FC = () => {
  const [tasks, setTasks] = React.useState<Task[]>([
    { id: 1, title: "Task 1", completed: false },
    { id: 2, title: "Task 2", completed: false },
    { id: 3, title: "Task 3", completed: false },
  ]);

  const toggleTask = (taskId: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <View className="w-full max-w-md p-4 bg-white rounded-lg shadow">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggle={toggleTask} />
      ))}
    </View>
  );
};
