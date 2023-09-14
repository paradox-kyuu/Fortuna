import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { expenseData } from '../expenseData';
const currency = "₱";
const HomeScreen = () => {
  return (
    
    <View style={styles.container}>
      {/*statusBar*/}
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />

      {/* headerView */}
      <View style={styles.headerView}>
        <View style={styles.upperHeader}>
          <View style={styles.headerLeft}>
            <Text style={styles.logo}>FORTUNA</Text>
            <Text style={styles.headerText}>Welcome!</Text>
          </View>
          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.settingsBtn} onPress={null}>
              <Text style={styles.settingsText}>SETTINGS</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.dailyTotalExpenses}>
        <Text style={styles.titleTotalExp}>Total Expenses for Today</Text>
           
          <Text style={styles.totalExpText}>{currency} 123,456.789</Text>
        </View>
      </View>

      {/* Content */}
      <ScrollView style={styles.content}>
        {/*expenseGraph*/}
        <View style={styles.expenseGraphView}>
          <Text style={styles.graph}>Expense Distribution</Text>
          <PieChart
            data={expenseData}
            width={300}
            height={200}
            chartConfig={{
              backgroundColor: '#f8f8f8',
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            }}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="15"
            center={[10, 0]}
            absolute
          />
        </View>

        {/*expenseCategories*/}
        <View style={styles.expenseCategoriesView}>
          <Text style={styles.expCat}>This is an overview of Expenses</Text>
        </View>

        {/*calendar*/}
        <View style={styles.calendarView}>
          <Text style={styles.calendar}>This is a Calendar</Text>
        </View>
      </ScrollView>

      {/* navbarView */}
      <View style={styles.navbarView}>
        <TouchableOpacity style={styles.homeBtn} onPress={null}>
          <Text style={styles.homeText}>HOME</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.graphBtn} onPress={null}>
          <Text style={styles.graphText}>GRAPHS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addBtn} onPress={null}>
          <Text style={styles.addText}>ADD</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.expBtn} onPress={null}>
          <Text style={styles.expText}>EXPENSES</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.calendarBtn} onPress={null}>
          <Text style={styles.calendarText}>CALENDAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  headerView: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    padding: 15,
    alignItems: 'center',
  },
  upperHeader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    marginRight: 20,
    fontWeight: 'bold',
    fontSize: 20,
    color: '#003f5c',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  titleTotalExp: {
    fontSize: 11,
    color: '#003f5c',
  },
  totalExpText: {
    fontSize: 30,
    color: '#003f5c',
  
  },
  dailyTotalExpenses: {
    marginTop: 10,
    backgroundColor: '#fff',
    padding: 10,
    alignItems: 'left',
    height: 'auto',
    elevation: 2,
    width: '100%',
    borderRadius: 10,
  },
  content: {
    flex: 1,
    marginTop: 20,
  },
  expenseGraphView: {
    backgroundColor: '#fff',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    marginBottom: 30,
  },
  expenseCategoriesView: {
    backgroundColor: '#fff',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  calendarView: {
    backgroundColor: '#fff',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  navbarView: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'space-around',
    elevation: 2,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});

export default HomeScreen;