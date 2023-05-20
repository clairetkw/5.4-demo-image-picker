import React, { useState, useEffect } from "react";
import { Button, Image, View, ScrollView } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled && image == null) {
      setImage(result.assets[0].uri);
    }
    if (!result.canceled && image != null && image2 == null) {
      setImage2(result.assets[0].uri);
    }
    if (!result.canceled && image2 != null && image3 == null) {
      setImage3(result.assets[0].uri);
    }
  };

  return (
    <ScrollView>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginVertical:400 }}>
        <Button title="Pick an image from camera roll" onPress={pickImage} />
        {image && (<Image source={{ uri: image }} style={{ width: 300, height: 300 }} />)}
        {image && (<Image source={{ uri: image2 }} style={{ width: 300, height: 300 }} />)}
        {image && (<Image source={{ uri: image3 }} style={{ width: 300, height: 300 }} />)}
      </View>
    </ScrollView>
  );
}