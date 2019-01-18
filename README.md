# react-native-cool-snackbar

### Snackbar component for React-native

## Props

| prop     | type                  | required or default     |
| -------- | --------------------- | ----------------------- |
| message  | string                | required                |
| isActive | bool                  | required (false)        |
| duration | oneOf('short','long') | short                   |
| action   | shape                 | optional and no defalut |

| action props (all required) | type   |
| --------------------------- | ------ |
| title                       | string |
| color                       | string |
| onPress                     | func   |

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
