import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  navContainer: {
    flex: 1
  },
  mainContainer: {
    flex: 1,
    padding: 5,
    marginTop: 65,
    alignItems: 'stretch'
  },
  headWrapper: {
    flex: 1
  },
  bodyWrapper: {
    flex: 4
  },
  description: {
    flex: 1,
    marginTop: 20,
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  textInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flex: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: 'gray'
  },
  addButton: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  todoContainer: {
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    justifyContent: 'flex-start',
    flexDirection: 'column'
  },
  todoItems: {
    fontSize: 22,
    lineHeight: 40,
    color: 'gray',
    alignSelf: 'center',
    paddingBottom: 5
  }
});

module.exports = styles;
