# react-native-cool-snackbar



### Snackbar component for React-native


## Props

| prop     | type                  | required and default     |
| -------- | --------------------- | ----------------------- |
| message  | string                | required (no default)   |
| isActive | bool                  | required (false)        |
| duration | oneOf('short','long') | not required (short)    |
| action   | object                | not required (no defalut)|


action object when provided should look like


| action                      | type   | required |
| --------------------------- | ------ |----------|
| title                       | string |    yes   |
| color                       | string |    yes   |
| onPress                     | func   |    yes   |



| duration        | timing |
| --------------- | ------ |
| short (default) | 2200ms |
| long            | 3500ms |


## Example

See this expo [snack](https://snack.expo.io/@anshuman71/cool-snackbar) to see how to use Snackbar

### In your render method

```
 <SnackBar
    message="Mail sent !"
    isActive={true}                             //conditionally set to true
    action={{                                   //optional
      title: 'Undo',
      color: 'green',
      onPress: () => console.log('done'),
    }}
  />
```
