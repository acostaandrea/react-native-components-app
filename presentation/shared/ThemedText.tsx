import { View, Text, TextProps } from 'react-native'
import React from 'react'
type TextType = 'normal' | 'h1' | 'h2' | 'h3' | 'semi-bold' | 'link'

interface Props extends TextProps {
    classname?: string,
    type?: TextType,
}

const ThemedText = ({className,type, ...rest}:Props) => {
    // className="mt-10 text-3xl text-light-text dark:text-dark-text"
  return (
   
      <Text {...rest} className={[
        'text-light-text dark:text-dark-text',     
        type === 'normal' ? 'font-normal': undefined,
        type === 'h1' ? 'text-2xl': undefined,
        type === 'h2' ? 'text-xl': undefined,
        type === 'semi-bold' ? 'font-semibold': undefined,
        type === 'link' ? 'font-normal underline': undefined,
        className
      ].join(' ')}/>
   
  )
}

export default ThemedText