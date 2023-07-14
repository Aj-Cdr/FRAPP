import React, { Component } from 'react';

import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	StatusBar,
	Platform,
} from 'react-native';

import { Camera } from 'expo-camera';

import * as Permissions from 'expo-permissions';

import * as FaceDetector from 'expo-face-detector';

export default class Main extends Component {
    constructor(props) {
        super(props)
        this.state={
            hasCameraPermission: null, 
            faces: []
        }
    }

    componentDidMount(){
        Permissions.askAsync(Permissions.CAMERA).then(this.onCameraPermission)
    }

    onCameraPermission = (s) => {
        this.setState({hasCameraPermission : s.status == "granted"})
    }
    
    // hasCameraPermission : status == "granted" --> true if the user allows the camera 
    
    onFacesDetected = (facesArray) => {
        this.setState({faces: facesArray})
    }
    
    onFacesDetectionError = (error) => {
        alert(error.message)
    }
    
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <View style={styles.headingContainer}>
                    <Text style={styles.titleText}>FRAPP</Text>
                </View>

                <View style={styles.cameraStyle}>
                   <Camera
                        style={{ flex: 1 }}
                        type={Camera.Constants.Type.front}
                        faceDetectorSettings={{
                            mode: FaceDetector.FaceDetectorMode["1"],
                            detectLandmarks: FaceDetector.FaceDetectorLandmarks.all,
                            runClassifications: FaceDetector.FaceDetectorClassifications.all
                        }}
                        onFacesDetected={this.onFacesDetected}
                        onFacesDetectionError={this.onFacesDetectionError}
                    />
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    droidSafeArea: {
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    headingContainer: {
        flex: 0.1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        fontSize: 30,
    },
    cameraStyle: {
        flex: 0.65,
    },
    filterContainer: {},
    actionContainer: {},
});


// ● mode (FaceDetector.FaceDetectorMode): Whether to detect faces in fast or accurate mode.
// ● detectLandmarks(FaceDetector.FaceDetectorLandmarks): Whether to detect and return landmark positions on the face (ears, eyes, mouth, cheeks, nose). Valid values: all, none.
// ● runClassifications(FaceDetect or.FaceDetectorClassifications): Whether to run additional classifications on detected faces (smiling probability, open eye probabilities). Valid values: all, none