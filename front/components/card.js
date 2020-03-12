import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

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
        borderColor: "red",
        borderRadius: 6
    },
    cardContent: {
        padding: 10,
        flex: 1,
        backgroundColor: "red"
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
        backgroundColor: "red",
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
    cardContent: {

    },
    cardText: {
        fontSize: 20,
    },
    cardLikeContent: {

    },
    cardLike: {
        
    }
})

export default Card