import { View, Text, ViewProps } from 'react-native'
import React from 'react'

interface Props extends ViewProps{
    className?: string
}

const ThemedCard = ({className, children}:Props) => {
  return (
    <View className={`bg-gray-300 dark:bg-black/10 rounded-xl p-2 shadow shadow-black/5 ${className}`}>
      {children}
    </View>
  )
}

export default ThemedCard