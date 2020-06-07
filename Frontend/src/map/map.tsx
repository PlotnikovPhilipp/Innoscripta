import './map.sass';

import React from 'react';
import GoogleMapReact from 'google-map-react'; 

interface propsSettings {
    onClose: () => void;
}

const LAT: number = 56.902654;
const LNG: number = 60.582159;
const TITLE: string = "<span>Philipp pizza</span><br/><br/><span>street Uralskich rabochich, home 80, Ekaterinburg, Russia</span>";
const mapStyle: Array<any> = [
    {
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#212121"
            }
        ]
    },

    {
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },

    {
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#757575"
            }
        ]
    },

    {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#212121"
            }
        ]
    },

    {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#757575"
            }
        ]
    },

    {
        "featureType": "administrative.country",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#9e9e9e"
            }
        ]
    },

    {
        "featureType": "administrative.land_parcel",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },

    {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#bdbdbd"
            }
        ]
    },

    {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#757575"
            }
        ]
    },

    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#181818"
            }
        ]
    },

    {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#616161"
            }
        ]
    },

    {
        "featureType": "poi.park",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#1b1b1b"
            }
        ]
    },

    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#2c2c2c"
            }
        ]
    },

    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#8a8a8a"
            }
        ]
    },

    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#373737"
            }
        ]
    },

    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#3c3c3c"
            }
        ]
    },

    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#4e4e4e"
            }
        ]
    },

    {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#616161"
            }
        ]
    },

    {
        "featureType": "transit",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#757575"
            }
        ]
    },

    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },

    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#3d3d3d"
            }
        ]
    }
];
//Create pulse for marker (constructor)
function PulseMarker(boundary, map): void {
    this.boundary_ = boundary;
    this.map_ = map;
    this.setMap(map);
}

export default class Map extends React.Component<propsSettings> {
    constructor(props: propsSettings) {
        super(props);
        document.body.style.overflow = 'hidden';
    }

    initMap(map:  any, maps: any): void {
        map.setOptions({styles: mapStyle});

        // Create and style marker
        let marker = new maps.Marker({
            position: {lat: LAT, lng: LNG},
            map: map, 
            icon: {
                url: "imgs/marker.svg",
                scaledSize: {width: document.body.offsetWidth * 0.009, height: document.body.offsetWidth * 0.009}
            } 
        });

        // Create info window
        let infoWindow = new maps.InfoWindow({content: TITLE});
        marker.addListener('click', (): void => { infoWindow.open(map, marker) });

        PulseMarker.prototype = new maps.OverlayView();

        //Add object to the map
        PulseMarker.prototype.onAdd = function(): void {
            this.firstPulse = document.createElement('div');
            this.firstPulse.className = 'map-card__first-pulse';
            this.firstPulse.style.position = "absolute";

            this.secondPulse = document.createElement('div');
            this.secondPulse.className = 'map-card__second-pulse';
            this.secondPulse.style.position = "absolute";

            this.panes = this.getPanes();
            this.panes.markerLayer.appendChild(this.firstPulse);
            this.panes.markerLayer.appendChild(this.secondPulse);
        };   

        //Position
        PulseMarker.prototype.draw = function() {
        let projection = this.getProjection();
        let coord = projection.fromLatLngToDivPixel(this.boundary_);

        //First
        this.firstPulse.style.left = (coord.x - document.body.offsetWidth * 0.07 / 2) + 'px';
        this.firstPulse.style.top = (coord.y - document.body.offsetWidth * 0.07 / 2 - document.body.offsetWidth * 0.009 / 2) + 'px';
        this.firstPulse.style.width = document.body.offsetWidth * 0.07 + 'px';
        this.firstPulse.style.height = document.body.offsetWidth * 0.07 + 'px';
        this.firstPulse.style.backgroundColor = "white";
        this.firstPulse.style.borderRadius = "100vw";

        //Second
        this.secondPulse.style.left = (coord.x - document.body.offsetWidth * 0.09 / 2) + 'px';
        this.secondPulse.style.top = (coord.y - document.body.offsetWidth * 0.09 / 2 - document.body.offsetWidth * 0.009 / 2) + 'px';
        this.secondPulse.style.width = document.body.offsetWidth * 0.09 + 'px';
        this.secondPulse.style.height = document.body.offsetWidth * 0.09 + 'px';
        this.secondPulse.style.backgroundColor = "white";
        this.secondPulse.style.borderRadius = "100vw";
    };

    //Removing
    PulseMarker.prototype.onRemove = function() {
        this.firstPulse.parentNode.removeChild(this.firstPulse);
        this.secondPulse.parentNode.removeChild(this.secondPulse);
    };

        let boundary = new maps.LatLng(LAT, LNG);
        new PulseMarker(boundary, map);
    }

    componentWillUnmount(): void {
        document.body.style.overflow = '';
    }

    render() {
        return(
            <div className="map-container-card">
                <div className="map-card">
                    <img className="map-card__cross" onClick={this.props.onClose} src="./imgs/mapCardCross.svg" alt="cross"/>
                    <header className="map-card__header">
                        <h5 className="map-card__header-title">
                            Zone for delivery
                        </h5>
                        <p className="map-card__header-text">
                            We intentionally reduced the delivery area,
                            in order to deliver pizza hot and no later than 59 min.
                            Free shipping!
                        </p>
                    </header>
                    <section role="main" className="map-card__body">
                        <GoogleMapReact
                            bootstrapURLKeys={{key: 'AIzaSyA5i764XBbWzkMsiQkgjmqaSpTlW4A6-yg'}}
                            defaultCenter={{lat: LAT, lng: LNG}}
                            defaultZoom={16}
                            yesIWantToUseGoogleMapApiInternals
                            onGoogleApiLoaded={({map, maps}) => {this.initMap(map, maps)}}
                        >
                        </GoogleMapReact>
                    </section>
                </div>
            </div>
        );
    }
}