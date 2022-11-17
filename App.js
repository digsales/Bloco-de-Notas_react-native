import TaskList from "./src/screens/TaskList";
import { useFonts } from "expo-font";

export default function App() {
  const [loaded] = useFonts({
    Lato: require("./assets/fonts/Lato.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return <TaskList />;
}
