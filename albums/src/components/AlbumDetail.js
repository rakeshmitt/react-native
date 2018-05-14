import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
/*
const AlbumDetail = (props) => {
  return (
    <View>
      <Text>{props.record.title}</Text>
    </View>
  );
};
*/

const AlbumDetail = ({ record }) => {
  const { title, artist, thumbnail_image, image, url } = record;
  const {
    headerContentStyle,
    titleTextStyle,
    thumbnailImageStyle,
    thumbnailContainerStyle,
    imageStyle
  } = Styles;
  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
          style={thumbnailImageStyle}
          source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={titleTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image
        style={imageStyle}
        source={{ uri: image }}
        />
      </CardSection>
      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>
        Buy Now
        </Button>
      </CardSection>
    </Card>
  );
};

const Styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  titleTextStyle: {
    fontSize: 18
  },
  thumbnailImageStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
