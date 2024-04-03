import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>

      <ScrollView 
        horizontal={true} 
        style={styles.container}
        showsHorizontalScrollIndicator={false}
      >

        <View style={[styles.card, styles.elevatedCard]}>
            <Text>Tap</Text>
        </View>

        <View style={[styles.card, styles.elevatedCard]}>
            <Text>mE</Text>
        </View>

        <View style={[styles.card, styles.elevatedCard]}>
            <Text>To</Text>
        </View>

        <View style={[styles.card, styles.elevatedCard]}>
            <Text>Scroll</Text>
        </View>

        <View style={[styles.card, styles.elevatedCard]}>
            <Text>More...</Text>
        </View>

        <View style={[styles.card, styles.elevatedCard]}>
            <Text>😎</Text>
        </View>

      </ScrollView>
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
        padding: 8,
    },
    card: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        width: 100,
        borderRadius: 5,
        margin: 8,
    },
    elevatedCard: {
        backgroundColor: '#CAD5E2',
        elevation: 4,
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowColor: '#fa0000',
        shadowOpacity: 0.5,
        shadowRadius: 5
    }
})