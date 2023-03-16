import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "../../router";

export const Home = () => {

    const routing = useRoute(true);
    // будем передавать значение авторизации из стейта

  return <NavigationContainer>{routing}</NavigationContainer>;
};
