import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList, } from 'react-native'
import { useRouter } from 'expo-router'
import styles from "./welcome.style"
import { icons, SIZES } from "../../../../constants"

const jobTypes = ["Full-time", "Part-time", "contractor"];

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
    const router = useRouter()
    const [activeJobType, setActiveJobType] = useState("Full-time");
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.userName}>Welcome, Shim!</Text>
                <Text style={styles.welcomeMessage}>헬로우합니다.</Text>
            </View>
            <View style={styles.searchContainer}>
                <View style={styles.searchWrapper}>
                    <TextInput
                        styles={styles.searchInput}
                        value={searchTerm}
                        onChangeText={(text) => setSearchTerm(text)}
                        placeholder="입력하세요"
                    ></TextInput>
                </View>
                <TouchableOpacity
                    style={styles.searchBtn}
                    onPress={handleClick}
                >
                    <Image
                        source={icons.search}
                        resizeMode="contain"
                        style={styles.searchBtnImage}
                    ></Image>
                </TouchableOpacity>
            </View>
            <View style={styles.tabsContainer}>
                <FlatList
                    data={jobTypes}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.tab(activeJobType, item)}
                            onPress={() => { setActiveJobType(item) }}
                        >
                            <Text>{item}</Text>
                        </TouchableOpacity>
                    )}
                    horizontal
                    keyExtractor={(item) => item}
                    contentContainerStyle={{ columnGap: SIZES.small }}
                />
            </View>
        </View>
    )
}

export default Welcome;