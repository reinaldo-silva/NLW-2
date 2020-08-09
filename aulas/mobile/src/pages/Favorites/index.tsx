import React from "react";
import PageHeader from "../../components/PageHeader";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import styles from "./styles";
import TeacherItem from "../../components/TeacherItem";

function Favorites() {
  return (
    <View style={styles.container}>
      <PageHeader title="Meus Proffys favoritos" />

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 24,
        }}
      >
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </ScrollView>
    </View>
  );
}

export default Favorites;
