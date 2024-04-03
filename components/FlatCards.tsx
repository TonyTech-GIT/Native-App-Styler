import {StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>

      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
            <Text style={styles.text}> 🔥 Red</Text>
        </View>

        <View style={[styles.card, styles.cardTwo]}>
            <Text style={styles.text}>🌊 Blue</Text>
        </View>

        <View style={[styles.card, styles.cardThree]}>
            <Text style={styles.text}>🦗 Green</Text>
        </View>

        <View style={[styles.card, styles.cardOne]}>
            <Text style={styles.text}>🔥 Red</Text>
        </View>
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 12
    },
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: 100,
        borderRadius: 4,
        margin: 12
    },
    cardOne: {
        backgroundColor: '#EF5354',
    },
    cardTwo: {
        backgroundColor: '#50DBB4',
    },
    cardThree: {
        backgroundColor: '#5DA3FA',
    },
    text: {
        color: '#FFFFFF',
        fontSize: 12
    }
})