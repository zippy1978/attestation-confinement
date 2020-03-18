import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import { format } from 'date-fns'

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: 10,
  },
  title: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 60,
    marginBottom: 15,
    textAlign: 'center',
    fontSize: '22pt',
    fontWeight: 'bold',
  },
  subtitle: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 0,
    marginBottom: 40,
    textAlign: 'center',
    fontSize: '10pt',
  },
  paragraph: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 16,
    textAlign: 'justify',
    fontSize: '12pt',
  },
  field: {
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 16,
    textAlign: 'justify',
    fontSize: '12pt',
  },
  label: {
    width: 100,
  },
  value: {
    marginLeft: 20,
  },
  signatureParagraph: {
    flexDirection: 'column',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 40,
    marginBottom: 16,
    textAlign: 'right',
    fontSize: '12pt',
  },
  choice: {
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 16,
  },
  choiceText: {
    marginLeft: 20,
    marginRight: 20,
    textAlign: 'justify',
    fontSize: '12pt',
  },
  choiceBox: {
    width: '20pt',
    height: '20pt',
  },
  signature: {
    marginLeft: 390,
    width: 200,
  }, 

});

// Create Document Component
export default function OutputDocument(props) {

  const blankCheckbox = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAA4klEQVR4Ae3bEUyGYRSG4QNBEIS/U+6eL8gX5Avy5Q5BkFMQ/BCEwQdBEHxOQb63x9eSzg/fu+veHj+7/JQkSZLU0VF2le2zNRsb2ZLdZ+d1wHbZWzY2vofsJGvvJRuT7Lmau87GZLuoxvYTAj1VY18TAq3V2Ph126n/fkCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBGi2fVRjnxMCPVZjdxMCXVZjp9nqFervzrJlApwl2x3yqfc2e82+Nwbznt1kxyVJkiT9tx//Z1rNQ+6SUgAAAABJRU5ErkJggg==';
  const checkbox = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAABa0lEQVR4Ae3bEVBEYRiF4SAIgnCd1jnXIAzD4Id8gnyuTxDkFF4I8lkIgmAhCIOFIPg78uGf7Lvzzf3mnJnXZx4/R57neZ7neZ5H7Fhdq1ltVV9IG/WgLg6Js1Ib1RfeozpV+F5UL9JM49yoXqxLEmguCPRMAn0XBNqSQL1kBjKQgfgM9GOgcV9qrSYDjXFik4HGOLHJQIEz3lQSCMCJtfpAPE55IAKnLBCFUxKIxCkHROPwQMVwUoB+F4OTADSpc7XLx8kEGuPEAikfJw1ojEMhoTgJQGMcAInHSQRqSsOQeJxkIBKJx8kHwpB4nHwgDInHyQfCkHicfCAMicfJB0KReJx8IBQpGycVKGo8Th2gqPE4dYCixuPUAYoaj1MHKGpjHANFbYxjoKgFjoH4DGQgAxnIQAYy0DsJ9FEQ6IkEui8IdEUCnalPX6H+37rIJfNNrQ556r1Tr2q3QJhbdbK3gud5nud5nuf9AUHs+fxiMcMLAAAAAElFTkSuQmCC';
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
        <View style={styles.field}>
          <View style={styles.label}>
              <Text>Mme / M.</Text>
          </View>
          <View style={styles.value}>
            <Text>{props.params.firstname} {props.params.lastname}</Text>
          </View>
        </View>
        <View style={styles.field}>
          <View style={styles.label}>
              <Text>Né(e) le :</Text>
          </View>
          <View style={styles.value}>
            <Text>{format(props.params.dateOfBirth, 'dd/MM/yyyy')}</Text>
          </View>
        </View>
        <View style={styles.field}>
          <View style={styles.label}>
              <Text>Demeurant :</Text>
          </View>
          <View style={styles.value}>
            <Text>{props.params.address}</Text>
          </View>
        </View>
        <View style={styles.paragraph}></View>
        <View style={styles.paragraph}>
          <Text>certifie que mon déplacement est lié au motif suivant (cocher la case) autorisé par l'article 1er du décret du 16 mars 2020 portant réglementation des déplacements dans le cadre de la lutte contre la propagation du virus Covid-19 :</Text>
        </View>
        <View style={styles.choice}>
          <Image object-fit="fill" src={props.params.reason == '#1' ? checkbox : blankCheckbox} alt="images" style={styles.choiceBox}/>
          <Text style={styles.choiceText}>déplacements entre le domicile et le lieu d'exercice de l'activité professionnelle, lorsqu'ils sont indispensables à l'exercice d'activités ne pouvant être organisées sous forme de télétravail (sur justificatif permanent) ou déplacements professionnels ne pouvant être différés;</Text>
        </View>
        <View style={styles.choice}>
          <Image object-fit="fill" src={props.params.reason == '#2' ? checkbox : blankCheckbox} alt="images" style={styles.choiceBox}/>
          <Text style={styles.choiceText}>déplacements pour effectuer des achats de première nécessité dans des établissements autorisés (liste sur gouvernement.fr);</Text>
        </View>
        <View style={styles.choice}>
          <Image object-fit="fill" src={props.params.reason == '#3' ? checkbox : blankCheckbox} alt="images" style={styles.choiceBox}/>
          <Text style={styles.choiceText}>déplacements pour motif de santé;</Text>
        </View>
        <View style={styles.choice}>
          <Image object-fit="fill" src={props.params.reason == '#4' ? checkbox : blankCheckbox} alt="images" style={styles.choiceBox}/>
          <Text style={styles.choiceText}>déplacements pour motif familial impérieux, pour l'assistance aux personnes vulnérables ou la garde d'enfants;</Text>
        </View>
        <View style={styles.choice}>
          <Image object-fit="fill" src={props.params.reason == '#5' ? checkbox : blankCheckbox} alt="images" style={styles.choiceBox}/>
          <Text style={styles.choiceText}>déplacements brefs, à proximité du domicile, liés à l'activité physique individuelle des personnes, à l'exclusion de toute pratique sportive collective, et aux besoins des animaux de compagnie.</Text>
        </View>
        <View style={styles.signatureParagraph}>
          <Text>Fait à {props.params.place}, le {format(props.params.signatureDate, 'dd/MM/yyyy')}</Text>
          <Image style={styles.signature} src={props.params.signature} alt="images" />
        </View>
        <View>
        </View>

      </Page>
    </Document>
  );
}
