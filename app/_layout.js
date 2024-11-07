import { Stack } from "expo-router";
import { useFonts } from "expo-font"
import * as splashScreen from "expo-splash-screen"
import { useCallback } from "react";

// export const unstable_settings = {
//     initialRouteName: "home",
// }

const Layout = () => {
    const [fontsLoaded] = useFonts({
        DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
        BMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
        DBRegular: require("../assets/fonts/DMSans-Regular.ttf")
    })
    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await splashScreen.hideAsync();
        }
    }, [fontsLoaded])


    if (!fontsLoaded) {
        return null;
    }

    console.log(fontsLoaded)
    return (
        <Stack initialRouteName="home" onLayout={onLayoutRootView}>
            <Stack.Screen name="home" />
        </Stack>
    )
}

export default Layout;