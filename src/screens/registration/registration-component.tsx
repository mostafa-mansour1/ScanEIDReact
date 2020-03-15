import React from 'react';
import {
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

import { RegistrationStyles } from './registration-styles'
import { useFocusEffect } from '@react-navigation/native';



let styles = RegistrationStyles;

declare var global: { HermesInternal: null | {} };


function shortDateToFull(string: string) {
    console.log("shortDateToFull", string)
    if (string.length == 6) {
        var year = string.substring(0, 2);
        var month = string.substring(2, 4);
        var day = string.substring(4, 6);
        return new Date(month + "/" + day + "/" + year + " 10:00:00").toUTCString().substring(0, 16);
    }
    return string;

}


function getFirstName(string: string) {
    return string.split(" ")[0]
}



const RegistrationComponent = ({ route, navigation }: { route: any, navigation: any }) => {
    const { fields }: { fields: any } = route.params;

    useFocusEffect(
        React.useCallback(() => {
            // Do something when the screen is focused
            console.log('registration page', fields)
            if (!!fields && !!fields.optional1) {

            }
            return () => {
                console.log('registration page out')

                // Do something when the screen is unfocused
                // Useful for cleanup functions
            };
        }, [])
    );

    return (
        <>
            <StatusBar barStyle="dark-content" />
            {/* <SafeAreaView> */}
            <ScrollView
                contentInsetAdjustmentBehavior="scrollableAxes"
                style={styles.scrollView}>
                {/* <Header /> */}
                {global.HermesInternal == null ? null : (
                    <View style={styles.engine}>
                        <Text style={styles.footer}>Engine: Hermes</Text>
                    </View>
                )}

                {/* <View style={styles.container}> */}

                <View style={styles.body}>
                    {!!fields.optional1 &&
                        <View style={styles.sectionContainer}>
                            <Text style={styles.sectionTitle}>Emirates ID</Text>
                            <Text style={styles.sectionDescription}>
                                <Text style={styles.highlight}>
                                    {fields.optional1}
                                </Text>
                            </Text>
                        </View>
                    }

                    <View style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>Name</Text>
                        <Text style={styles.sectionDescription}>
                            First Name : <Text style={styles.highlight}>
                                {getFirstName(fields.firstName)}
                            </Text>
                            {'\n'}
                                    Last Name : <Text style={styles.highlight}>
                                {fields.lastName}
                            </Text>
                        </Text>
                    </View>
                    <View style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>Nationality</Text>
                        <Text style={styles.sectionDescription}>
                            <Text style={styles.highlight}>
                                {fields.nationality}
                            </Text>
                        </Text>
                    </View>
                    <View style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>Gender</Text>
                        <Text style={styles.sectionDescription}>
                            <Text style={styles.highlight}>
                                {fields.sex}
                            </Text>
                        </Text>
                    </View>
                    <View style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>Birth Date</Text>
                        <Text style={styles.sectionDescription}>
                            <Text style={styles.highlight}>
                                {shortDateToFull(fields.birthDate)}
                            </Text>
                        </Text>
                    </View>

                    <View style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>Document Number</Text>
                        <Text style={styles.sectionDescription}>
                            <Text style={styles.highlight}>
                                {fields.documentNumber}
                            </Text>
                        </Text>
                    </View>



                </View>
                {/* </View> */}
            </ScrollView>
            {/* </SafeAreaView> */}
        </>
    );




};

export default RegistrationComponent;