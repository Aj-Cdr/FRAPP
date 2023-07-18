import React from 'react'
import { Image, View } from 'react-native';

const Filter1 = ({
    face: {
        bounds: {
            size: {
                width: facewidth, 
                height: faceheight
            }
        },
        leftEyePosition, rightEyePosition
    }
}) => {
    const glassWidth = facewidth
    const glassHeight = faceheight/3
    
    const transformAngle = (angleRadian = Math.atan((rightEyePosition.y-leftEyePosition.y)/(rightEyePosition.x-leftEyePosition.x))) => angleRadian * 180/Math.PI 
   
    return (
        <View
            style={{
                position:'absolute', 
                left : leftEyePosition.x - glassWidth * 0.675,
                top : leftEyePosition.y - glassHeight * 0.5
            }}
        >
            <Image
                source = {require("../assets/filter1.png")}
                style={{
                    width: glassWidth, 
                    height: glassHeight,
                    resizeMode: 'contain',
                    transform: [{rotate: `${transformAngle()}deg`}]
                }}
            />
        </View>
    )
}

export default Filter1

// angleRadian * 180/Math.PI --> formulla to convert into degrees from radian