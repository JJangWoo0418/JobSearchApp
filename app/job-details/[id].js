import { useRouter, Stack, useLocalSearchParams } from "expo-router";
import useFetch from "../../hook/useFetch";
import { View, Text, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl} from 'react-native'
import { COLORS,icons,SIZES } from "../../constants";
import { ScreenHeaderBtn, Company } from "../components";
import { useCallback, useState} from "react";

const JobDetails = () =>{
    const params = useLocalSearchParams()
    console.log("ID:" + params.id)
    const {data, isLoading, error, refetch} = useFetch(
        "job-details",{
            job_id:params.id,
        }
    )
    console.log("Data: ",data);
    const [refreshing,setRefreshing] = useState(false)
    const onRefresh = useCallback(()=>{
        setRefreshing(true)
        refetch()
        setRefreshing(false)
    })
    const router = useRouter()

    return (
        <SafeAreaView>
            <Stack.Screen
                options = {{
                    headerStyle:{backgroundColor:COLORS.lightWhite},
                    headerShadowVisible:false,
                    headerBackVisible:false,
                    headerTitle:"",
                    headerLeft:()=>(<ScreenHeaderBtn
                        iconUrl={icons.left}
                        dimension= "60%"
                        handlePress={()=>router.back()}
                    />),
                    headerRight : () =>(
                        <ScreenHeaderBtn
                            iconUrl={icons.share}
                            dimension="60%"
                        />
                    )
                }}
            />
            <ScrollView showsVerticalScrollIndicator = {false}
                refreshControl={
                    <RefreshControl refreshing={refreshing}
                    onRefresh={onRefresh}
                />}
            >
                {isLoading ? (
                    <ActivityIndicator size="large" color={COLORS.primary} />
                ) : error ? (
                    <Text>Something Wrong</Text>
                ) : data.length === 0 ? (
                    <Text>No data available</Text>
                ) : (
                    <View style = {{padding:SIZES.medium,paddingBottom:100}}>
                        <Company
                            companyLogo={data[0].employer_log}
                            jobTitle={data[0].job_title}
                            companyName={data[0].employer_name}
                            location={data[0].job_location}
                        />
                    </View>
                )
            }
            </ScrollView>
        </SafeAreaView>
    )
}

export default JobDetails;