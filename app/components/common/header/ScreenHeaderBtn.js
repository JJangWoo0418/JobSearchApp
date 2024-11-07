import { Image,TouchableOpacity } from "react-native";
import styles from "./screenheaderbtn.style";

const ScreenLoader = ({iconUrl,dimension,handlePress}) => {
    return (
        <TouchableOpacity style = {styles.btncontainer} onPress = {handlePress} >
            <Image
            style = {styles.btnImg(dimension)}
            source = {iconUrl}
            resizeMode="cover"
        />
        </TouchableOpacity>
    )
}

export default ScreenLoader;