import * as React from 'react';

import {
    View,
    Text,
    StatusBar,
    Image,
    TouchableHighlight,
} from 'react-native';

import { HomeStyles } from "./home-styles"
import { GlobalStyles } from "./../global-styles"
const styles = HomeStyles;

const HomeComponent = ({ navigation }: { navigation: any }) => {
    return (
        <>
            <StatusBar barStyle="default" />
            <View style={styles.container}>
                <View style={GlobalStyles.middle}>
                    <Text style={[GlobalStyles.h2, GlobalStyles.center, styles.header]}>Scan Your ID To Register</Text>
                    <TouchableHighlight onPress={() => navigation.navigate('CameraScan')}>
                        <View style={{
                            marginBottom: 50
                        }}>
                            <Image
                                style={{ width: 250, height: 250 }}
                                source={require('../../imgs/camera.png')}
                            />
                            <Text style={{ marginTop: -50, textAlign: 'center' }}>
                                Tap To Scan     </Text>
                        </View>
                    </TouchableHighlight>
                    <Text style={[GlobalStyles.p, GlobalStyles.center, GlobalStyles.small, styles.desc]}>
                        Getting you information from the ID.
                    {"\n"}
                        We Accept Emirates ID for residence and citizens.
                    {"\n"}
                        and passport for others.
                     </Text>
                </View>
            </View>
        </>
    );
};

export default HomeComponent;