import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCards()  {
    const openWebsite = (websiteLink: string) => {
        Linking.openURL(websiteLink)
    }


    // function openWebsite(websiteLink: string) {
    //     Linking.openURL(websiteLink)
    // }
  return (
    <View>
      <Text style={styles.headingText}>Blog Cards</Text>

      <View style={[styles.card, styles.elevatedCard]}>

        <View style={styles.headingContainer}>
        <Text style={styles.headerText}>Whats new in Javascript 21 - ES12</Text>
        </View>

        <Image 
            source={{
                uri: 'https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            }}

            style={styles.cardImage}
        />

        <View style={styles.bodyContainer}>
            <Text numberOfLines={3}>
            Just like every year, Javascript brings in new features. This year
            javascript is bringing 4 new features, which are almost in
            production rollout. I won't be wasting much more time and directly
            jump to code with easy to understand examples.
            </Text>
        </View>

        <View style={styles.footerContainer}>
            <TouchableOpacity
                onPress={() => openWebsite('https://blog.ineuron.ai/whats-new-in-javascript-21-es12')}>
                <Text style={styles.socialLinks}>Read More</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => openWebsite('https://www.instagram.com/mgbebu_anthony/')}
            >
                <Text style={styles.socialLinks}>Follow Me</Text>
            </TouchableOpacity>
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
    card: {
        width: 350,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16

    },
    elevatedCard: {
        backgroundColor: '#def232',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1,
          },
        shadowColor: '#333',
        shadowOpacity: 0.4
    },
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 16,
        fontWeight: '600'
    },
    cardImage: {
        height: 200
    },
    bodyContainer: {
        padding: 10
    },
    footerContainer: {
        // padding: 8,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    socialLinks: {
        fontSize: 16,
        backgroundColor: '#ffffff',
        paddingVertical: 6,
        paddingHorizontal: 20,
        borderRadius: 4
    }
})