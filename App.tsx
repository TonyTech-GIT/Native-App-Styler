import { FlatList, SafeAreaView, ScrollView, StatusBar } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import FancyCards from './components/FancyCards'
import ActionCards from './components/ActionCards'
import ContactList from './components/ContactList'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>

        <FlatCards />

        <ElevatedCards />

        <FancyCards />
        
        <ActionCards />

        <ContactList />

        <StatusBar />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App