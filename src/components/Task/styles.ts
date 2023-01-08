import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  wrapper: {
    alignItems: 'center',
    backgroundColor: 'd8d8d8',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    width: '100%',
    flex: 1,
  },

  container: {
    backgroundColor: '#d8d8d8',
    borderRadius: 5,
    flexDirection: 'row',
    flex: 1,
  },

  nameChecked: {
    color: '#1f104f',
    flex: 1,
    fontSize: 12,
    fontWeight: 'bold',
    padding: 8,
  },

  nameUnchecked: {
    color: '#1f104f',
    fontSize: 12,
    padding: 8,
    flex: 1,
    textDecorationLine: 'line-through',
  },

  checkButtonYes: {
    alignItems: 'center',
    backgroundColor: '#cfb1ff',
    borderRadius: 5,
    fontWeight: 'bold',
    height: 32,
    justifyContent: 'center',
    marginRight: 4,
    width: 32,
  },

  checkButtonNo: {
    alignItems: 'center',
    backgroundColor: '#cfb1ff',
    borderRadius: 5,
    height: 32,
    justifyContent: 'center',
    width: 32,
    marginRight: 4,
  },

  button: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: 5,
    height: 32,
    justifyContent: 'center',
    width: 32,
  },

  buttonText: {
    color: '#ec5653',
    fontSize: 16,
  },

})
