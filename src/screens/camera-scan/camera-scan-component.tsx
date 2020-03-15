import React from 'react';
import {
    View,
    Text,
    StatusBar,
    Vibration,
} from 'react-native';


import { CameraScanStyles } from "./camera-scan-styles"
import { GlobalStyles } from "./../global-styles"
import { RNCamera } from 'react-native-camera';

const parseMRZ = require('mrz').parse;
const styles = CameraScanStyles;

declare var global: { HermesInternal: null | {} };
let camera: RNCamera;

const CameraScanComponent = ({ navigation }: { navigation: any }) => {


    return (
        <>
            <StatusBar barStyle="dark-content" />
            {/* <View style={styles.container}> */}
            <View style={{ position: 'absolute', top: 20, right: 0, left: 0, zIndex: 100, alignContent: 'center' }}>
                <Text style={[GlobalStyles.h4, GlobalStyles.center, { color: '#e5089b' }]}>
                    Put The BACK of Emirates ID,
                       {'\n'} or {'\n'}
                     The Passport Page.
                    {'\n'}
                    in the center of the screen
                        {'\n'}
                    {'....<<<<<<...<<<....'}
                </Text>
            </View>
            <RNCamera
                ref={(ref: any) => {
                    camera = ref;
                }}
                style={styles.camera}
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.on}
                androidCameraPermissionOptions={{
                    title: 'Permission to use camera',
                    message: 'We need your permission to use your camera',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',
                }}
                androidRecordAudioPermissionOptions={{
                    title: 'Permission to use audio recording',
                    message: 'We need your permission to use your audio',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',
                }}



                onTextRecognized={({ textBlocks }) => {
                    // console.log("textBlocks", new Date());
                    if (!!textBlocks && textBlocks instanceof Array && textBlocks.length > 0) {

                        var mrz = textBlocks.find(a => a.type == "block" && a.value.indexOf('<<') > 0)?.value;
                        var mrzLines: string[] = [];

                        mrz?.split(/\r\n|\n|\r/gm).forEach(a => {
                            mrzLines.push(a.replace(/\s/g, ''));
                        })


                        if (!!mrzLines) {
                            console.log(mrzLines);
                            try {
                                let result = parseMRZ(mrzLines);
                                if (!!result && !!result.valid) {
                                    console.log(JSON.stringify(result.fields));
                                    Vibration.vibrate(500);
                                    navigation.navigate('Registration', { fields: result.fields })
                                }
                            } catch (error) {
                                console.log(error);
                            }
                        }
                    }
                }
                }
            />
        </>
    );




};

export default CameraScanComponent;