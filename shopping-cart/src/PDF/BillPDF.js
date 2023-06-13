import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 12,
    padding: 20,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  item: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    paddingBottom: 5,
    marginBottom: 5,
  },
  itemName: {
    flexGrow: 1,
  },
  itemPrice: {
    width: 80,
    textAlign: 'right',
  },
  author: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    alignSelf: 'center',
  },
});

const BillPDF = () => {
  const title = 'Book Title';
  const author = 'Author Name';
  const price = '$9.99';
  const imageUrl = 'path/to/image.jpg';

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>{title}</Text>

        <View style={styles.item}>
          <Text style={styles.itemName}>Author:</Text>
          <Text style={styles.itemPrice}>{author}</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.itemName}>Price:</Text>
          <Text style={styles.itemPrice}>{price}</Text>
        </View>

        <Image src={imageUrl} style={styles.image} />
      </Page>
    </Document>
  );
};

export default BillPDF;
