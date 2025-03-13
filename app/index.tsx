import * as React from "react";
import { View } from "react-native";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Text } from "~/components/ui/text";

export default function HomeScreen() {
  return (
    <View className="flex-1 justify-center items-center gap-5 p-6 bg-background">
      <Text className="pb-2 text-center text-xl font-semibold">Hall Pass</Text>

      <View>
        <Text className="text-xl font-semibold"> Today's Tasks</Text>
      </View>

      <View className="h-15 w-full border-foreground-transparent">
        <Text className="text-xl font-semibold"> Submit Assignment</Text>
        <Text>Due 10 Oct</Text>
      </View>
      <View className="h-15 w-full border-foreground-transparent">
        <Text className="text-xl font-semibold"> Library Research</Text>
        <Text>Due 10 Oct</Text>
      </View>
      <View className="h-15 w-full border-foreground-transparent">
        <Text className="text-xl font-semibold"> Group Essay</Text>
        <Text>Due 10 Oct</Text>
      </View>
      <View className="h-15 w-full border-3 border-foreground-transparent">
        <Text className="text-xl font-semibold"> Read Chapter 5</Text>
        <Text>Due 10 Oct</Text>
      </View>
      <View className="h-15 w-full border-3 border-foreground-transparent">
        <Text className="text-xl font-semibold"> Submit Essay </Text>
        <Text>Due 10 Oct</Text>
      </View>
    </View>
  );
}
