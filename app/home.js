import { Text, View, SafeAreaView } from 'react-native';
import { Stack } from 'expo-router';
import { COLORS, icons, images, SIZES } from "../constants";
import { ScreenHeaderBtn, Welcome, Popularjobs, Nearbyjobs } from './components';
import { ScrollView } from 'react-native-web';

const Home = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerTitle: "Header",
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.menu} dimension="50%"


                        />),
                    headerRight: () => (
                        <ScreenHeaderBtn
                            iconUrl={images.profile} dimension="50%"


                        />)
                }}
            />
            <ScrollView showsVerticalScrollIndicator={false} >
                <View style={{ fles: 1, padding: SIZES.medium }}>
                    <Welcome />
                    <Popularjobs />
                    <Nearbyjobs />
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}

export default Home;