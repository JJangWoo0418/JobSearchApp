import { useState } from "react";
import { useRouter } from "expo-router";
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    ActivityIndicator
} from "react-native";

import styles from "./nearbyjobs.style"
import { COLORS, SIZES } from "../../../../../constants"
import { NearbyjobCard } from "../../../../components"
import useFetch from "../../../../../hook/useFetch";

const Nearbyjobs = () => {
    const router = useRouter()
    const {data,isLoading,error} = useFetch("search",{
        query: "React",
        num_pages:"1",
    })
    console.log(data)
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Nearbyjobs</Text>
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
                        data={data}
                        renderItem={({item}) => (
                            <NearbyjobCard 
                                item={item} 
                                handleCardPress={() => router.push(`/job-details/${item.job_id}`)}    
                            />
                        )}
                        contentContainerStyle={{columnGap: SIZES.medium }}
                        keyExtractor={item =>`nearby-job-${item?.job_id}`}
                    />
                )}
            </View>
        </View>
    )
}
export default Nearbyjobs