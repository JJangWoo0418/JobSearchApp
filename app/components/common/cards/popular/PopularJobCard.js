import {View, Text, TouchableOpacity, Image} from "react-native"
import styles from "./popularjobcard.style"

const PopularJobCard = ({item, selectedJob, handleCardPress}) => {
    const checkImageURL = (url) => {
        if(!url) return false
        else {
            const pattern = new RegExp('^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$', 'i')
            return pattern.test(url)
        }
    }
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
        </TouchableOpacity>
    )
}
export default PopularJobCard