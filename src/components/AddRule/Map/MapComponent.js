import React, {Component} from 'react';
import {View} from 'react-native';
import MapView from 'react-native-maps';
import mapStyles from '../../../styles/map';

class MapComponent extends Component {
    render() {
        return (
            <View style={mapStyles.container}>
                <MapView
                    style={mapStyles.map}
                    region={{
                        latitude: 43,
                        longitude: -79,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />
            </View>
        )
    }
}

export default MapComponent;