import { useState } from "react";
import { useRouter } from "expo-router";
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    ActivityIndicator
} from "react-native";

import styles from "./popularjobs.style"
import { COLORS, SIZES } from "../../../../../constants"
import { PopularJobCard } from "../../../../components"
import useFetch from "../../../../../hook/useFetch";

const Popularjobs = () => {
    const router = useRouter()
    const {data,isLoading,error} = useFetch("search",{
        query: "React",
        num_pages:"1",
    })
    console.log(data)
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Popularjobs</Text>
                <TouchableOpacity>
                    <Text style={styles.headerBtn}>Show all</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.cardsContainer}>
                {isLoading ? (
                    <ActivityIndicator size="large" color={COLORS.primary} />
                ) : error ? (<Text>Something went wrong</Text>
                ) : (
                    <FlatList
                        data={[1, 2, 3, 4]}
                        renderItem={({item}) => (
                            <PopularJobCard item={item} />
                        )}
                        contentContainerStyle={{ columnGap: SIZES.medium }}
                        keyExtractor={item => item?.job_id}
                        horizontal
                    />
                )}
            </View>
        </View>
    )
}
export default Popularjobs