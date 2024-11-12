import { useRouter, Stack, useLocalSearchParams } from "expo-router";
import useFetch from "../../hook/useFetch";

const JobDetails = () =>{
    const params = useLocalSearchParams()
    console.log("ID:" + params.id)
    const {data, isLoading, error, refetch} = useFetch(
        "job-details",{
            job_id:params.id,
        }
    )
    console.log("Data: ",data);

    return (
        <></>
    )
}

export default JobDetails;