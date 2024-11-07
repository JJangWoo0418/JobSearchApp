import {View, Text, TouchableOpacity, Image} from "react-native"
import styles from "./nearbyjobcard.style"
import { checkImageURL } from "../../../../../utils"

const NearbyjobCard = ({item, handleCardPress}) => {
    
    return(
        <TouchableOpacity 
            style = {styles.container}
            onPress = {handleCardPress}
        >
            <TouchableOpacity style = {styles.logoContainer}>
                <Image
                    source = {
                        checkImageURL(item?.employer_logo)
                        ? {uri: item.employer_log}
                        : require("../../../../../assets/favicon.png")
                    }
                />
            </TouchableOpacity>

            <View style = {styles.textContainer}>
                <Text style = {styles.jobName} numberOfLines = {1}>
                    {item.job_title}
                </Text>
                <Text style = {styles.jobType} numberOfLines= {1}>
                    {item.job_employment_type}
                </Text>
            </View>
        </TouchableOpacity>
    )
}
export default NearbyjobCard