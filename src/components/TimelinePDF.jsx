import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 30,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  section: {
    margin: 10,
    padding: 10,
    borderBottom: '1 solid #CCCCCC',
  },
  yearTitle: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  eventTitle: {
    fontSize: 16,
    marginBottom: 5,
    color: '#2563EB',
  },
  description: {
    fontSize: 12,
    lineHeight: 1.5,
    textAlign: 'justify',
  },
});

const TimelinePDF = ({ timeline, language }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>
          {language === 'en' ? timeline.title.en : timeline.title.ne}
        </Text>
        
        {timeline.data.map((event, index) => (
          <View key={index} style={styles.section}>
            <Text style={styles.yearTitle}>{event.year}</Text>
            <Text style={styles.eventTitle}>
              {language === 'en' ? event.title.en : event.title.ne}
            </Text>
            <Text style={styles.description}>
              {language === 'en' ? event.description.en : event.description.ne}
            </Text>
          </View>
        ))}
      </Page>
    </Document>
  );
};

export default TimelinePDF;
