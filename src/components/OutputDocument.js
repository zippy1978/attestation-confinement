import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: 10,
  },
  title: {
    margin: 10,
    padding: 10,
    textAlign: 'center',
    fontSize: '22pt',
  },
  subtitle: {
    margin: 10,
    padding: 10,
    textAlign: 'center',
    fontSize: '14pt',
  },
  paragraph: {
    margin: 10,
    padding: 10,
    textAlign: 'justify',
    fontSize: '14pt',
  },
  choice: {
    flexDirection: 'row',
  },
  choiceText: {
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    textAlign: 'justify',
    fontSize: '14pt',
  }

});

// Create Document Component
export default function OutputDocument(props) {

    return(
<Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.title}>
        <Text>ATTESTATION DE DÉPLACEMENT DÉROGATOIRE</Text>
      </View>
      <View style={styles.subtitle}>
        <Text>En application de l'article 1er du décret du 16 mars 2020 portant réglementation des déplacements dans le cadre de la lutte contre la propagation du virus Covid-19 :</Text>
      </View>
      <View style={styles.paragraph}>
        <Text>Je soussigné(e)</Text>
      </View>
      <View style={styles.paragraph}>
        <Text>Mme / M. {props.params.firstname} {props.lastname}</Text>
      </View>
      <View style={styles.paragraph}>
        <Text>Né(e) le : {/*props.params.dateOfBirth*/ 'to convert'}</Text>
      </View>
      <View style={styles.paragraph}>
        <Text>Demeurant : {props.params.address}</Text>
      </View>
      <View style={styles.paragraph}>
        <Text>certifie que mon déplacement est lié au motif suivant (cocher la case) autorisé par l'article 1er du décret du 16 mars 2020 portant réglementation des déplacements dans le cadre de la lutte contre la propagation du virus Covid-19 :</Text>
      </View>
      <View style={styles.choice}>
        <Text>X</Text>
        <Text style={styles.choiceText}>déplacements entre le domicile et le lieu d'exercice de l'activité professionnelle, lorsqu'ils sont indispensables à l'exercice d'activités ne pouvant être organisées sous forme de télétravail (sur justificatif permanent) ou déplacements professionnels ne pouvant être différés;</Text>
      </View>
      <View>
        <Image object-fit="fill" src={props.params.signature} alt="images" />
      </View>
      
    </Page>
  </Document>
    );
}
