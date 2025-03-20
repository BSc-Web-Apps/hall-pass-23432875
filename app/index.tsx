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

      <View className="flex flex-row h-20 w-full border-2 border-cyan-400">
        <View className="flex w-1/3 h-full border-2 border-pink-400"></View>

        <View className="flex h-full w-2/3 border-2 border-green-400">
          <Text className="text-foreground">Feed the cat</Text>
        </View>
      </View>
    </View>
  );
}
