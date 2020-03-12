import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

const Card = ({ id, text, likes, date }) => {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                <View style={styles.cardHeader}>
                    <View style={styles.cardProfil}></View>
                    <View style={styles.cardInfo}>
                        <Text style={styles.cardName}>Anonymous</Text>
                        <Text style={styles.cardDate}>
                            {date}
                        </Text>
                    </View>
                </View>
                <Text style={styles.cardText}>
                    {text}
                </Text>
            </View>
            <View style={styles.cardLikeContent}>
                <Text style={styles.cardLike}>
                    {likes}
                </Text>
                <View>
                    <Button
                        title="Pour"
                        color="#4D7EA8"
                        onPress={() => console.warn('Pour Button pressed')}
                    />
                    <Button
                        title="Contre"
                        color="#E85F5C"
                        onPress={() => console.warn('Contre Button pressed')}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        marginBottom: 15,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#593E56",
        borderRadius: 4
    },
    cardContent: {
        padding: 10,
    },
    cardHeader: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    cardProfil: {
        marginRight: 20,
        width: 50,
        height: 50,
        backgroundColor: "#593E56",
        borderRadius: 25
    },
    cardName: {
        fontSize: 16,
        fontWeight: "bold",
    },
    cardDate: {
        marginTop: 8,
        fontSize: 12,
        fontWeight: "300",
    },
    cardText: {
        marginTop: 15,
        fontSize: 16,
        lineHeight: 21
    },
    cardLikeContent: {
        paddingVertical: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        borderTopWidth: 1,
        borderTopColor: "#593E56"
    },
    cardLike: {
        display: "none"
    }
})

export default Card