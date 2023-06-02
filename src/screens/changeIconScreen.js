import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import { changeIcon, getIcon } from 'react-native-change-icon';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS } from './src/common/Colors';
import { IconLists } from '../assets/database/iconList';

export default changeIconScreen = () => {
    const [currentIcon, setCurrentIcon] = useState(IconLists[1]);

    async function changeOrgIcon(iconname) {
        try {
            const response = await changeIcon(iconname);
            console.log('response: ', response);
        } catch (error) {
            console.log('Error in changeIcon(...): ', error)
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.headingTitleTxt}>Change Icon</Text>
            <View style={styles.flatListContainer}>
                <View style={styles.currentIcon}>
                    <Image style={styles.currentIconImage} source={currentIcon.iconImg} />
                    <Text style={styles.currentIconTxt}>Current</Text>
                </View>
                <FlatList
                    data={IconLists}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    style={{ width: '100%', backgroundColor: COLORS.grey }}
                    contentContainerStyle={{ paddingVertical: RFPercentage(2), paddingHorizontal: RFPercentage(2) }}
                    renderItem={({ item, index }) => {
                        const lastEvenIndex = index % 2 === 0 && IconLists.length === (index + 1);
                        const evenIndex = index % 2 === 0;
                        const isCurrentIcon = currentIcon === item;
                        // console.log(lastEvenIndex)
                        return (
                            <TouchableOpacity style={[styles.iconBtn, { marginRight: lastEvenIndex ? RFPercentage(2.5) : null, marginRight: evenIndex ? RFPercentage(2) : null, opacity: isCurrentIcon ? 0.5 : 1 }]}
                                disabled={isCurrentIcon}
                                onPress={() => {
                                    changeOrgIcon(item.iconName);
                                    setCurrentIcon(item)
                                }}>
                                <Image style={styles.iconsImage} source={item.iconImg} />
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headingTitleTxt: {
        fontSize: RFPercentage(4),
        color: 'black',
        fontWeight: '700',
        marginBottom: RFPercentage(2)
    },
    flatListContainer: {
        flex: 1,
        width: '100%',
        paddingTop: RFPercentage(2),
        alignItems: 'center',
    },
    currentIcon: {
        width: RFPercentage(25),
        // flex: 1,
        backgroundColor: COLORS.blue,
        marginBottom: RFPercentage(1.8),
        // paddingVertical: RFPercentage(2.5),
        alignItems: 'center',
        borderRadius: RFPercentage(2),
        overflow: 'hidden',
    },
    currentIconImage: {
        // flex: 1,
        height: RFPercentage(20),
        width: '100%',
    },
    currentIconTxt: {
        fontSize: RFPercentage(2.5),
        fontWeight: '600',
        color: COLORS.white,
        paddingVertical: RFPercentage(1)
    },
    iconBtn: {
        flex: 1,
        marginBottom: RFPercentage(1.8),
        alignItems: 'center',
        borderRadius: RFPercentage(2),
        overflow: 'hidden'
    },
    iconsImage: {
        width: '100%',
        height: RFPercentage(20),
    }
})
