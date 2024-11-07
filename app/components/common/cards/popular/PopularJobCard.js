import {View, Text, TouchableOpacity, Image} from "react-native"
import styles from "./popularjobcard.style"
import { checkImageURL } from "../../../../../utils"

const PopularJobCard = ({item, selectedJob, handleCardPress}) => {
    
    return(
        <TouchableOpacity 
            style = {styles.container(selectedJob, item)}
        >
            <TouchableOpacity style = {styles.logoContainer(selectedJob, item)}>
                <Image
                    source = {
                        checkImageURL(item?.employer_logo)
                        ? {uri: item.employer_log}
                        : require("../../../../../assets/favicon.png")
                    }
                />
            </TouchableOpacity>
            <Text style = {styles.companyName} numberOfLines={1}>
                {item.employer_name}
            </Text>
            <View style = {styles.infoContainer}>
                <Text style = {styles.jobName(selectedJob, item)} numberOfLines = {1}>
                    {item.job_title}
                </Text>
            </View>
            <View style = {styles.infoWrapper}>
                <Text style = {styles.publisher(selectedJob,item)}>
                    {item?.job_publisher} -
                </Text>
                <Text style = {styles.location}>{item.job_country}</Text>
            </View>
        </TouchableOpacity>
    )
}
export default PopularJobCard