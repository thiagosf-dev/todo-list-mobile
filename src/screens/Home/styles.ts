import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  container: {
    backgroundColor: '#1f104f',
    flex: 1,
    padding: 24,
  },

  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 36,
  },

  title: {
    color: '#e8d8ff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },

  form: {
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 32,
    width: '100%',
  },

  input: {
    backgroundColor: '#fefefe',
    borderRadius: 5,
    color: '#1f104f',
    flex: 1,
    fontSize: 16,
    height: 48,
    marginRight: 12,
    padding: 16,
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#696969',
    borderRadius: 5,
    height: 48,
    justifyContent: 'center',
    width: 48,
  },

  buttonText: {
    color: '#e8d8ff',
    fontSize: 32,
  },

  totalText: {
    color: '#e8d8ff',
    marginBottom: 8,
    textAlign: 'center',
  },

  listEmptyText: {
    color: '#e8d8ff',
    fontSize: 16,
    fontStyle: 'italic',
    fontWeight: '600',
    textAlign: 'center',
  },

})
