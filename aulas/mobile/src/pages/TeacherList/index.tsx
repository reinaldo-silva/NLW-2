import React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import PageHeader from "../../components/PageHeader";

import styles from "./styles";
import TeacherItem from "../../components/TeacherItem";

function TeacherList() {
  return (
    <View style={styles.container}>
      <PageHeader title="Proffys disponíveis" />

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

export default TeacherList;
