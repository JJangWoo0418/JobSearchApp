import { Dimensions, StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
    btncontainer: {
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.small / 1.25,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
    },
    btnImg: (Dimensions) =>({
        width: Dimensions,
        height: Dimensions
    })
});

export default styles;