import { SafeAreaView, ScrollView, StatusBar } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>

        <FlatCards />

        <ElevatedCards />

        <StatusBar />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App