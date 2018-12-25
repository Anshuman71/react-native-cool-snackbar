# react-native-cool-snackbar

Snackbar component for React-native

## props

- **message** : _String!_, message shown by snackbar

- **title**: _String!_,

- **duration**: _Enum_, ['short','long'], 'short' by default

- **error**: _Bool_, snackbar showing error or not , false by default

- **reset**: _Func_, called when snackbar ends (used to reset the state after message is shown)

## usage

### In your render method

> _condition_ is used to determine when to show the snackbar

> _reset_ is used to alter the state to conditionally show the snackbar

```
  reset = () =>{
    this.setState(prevState => ({ condition: !prevState.condition }));
  }
```

```
 {condition > 0 && (
    <Snackbar
      title="Sorry!,"
      duration="short"
      error
      message="no user with this email"
      reset={this.reset}
    />
  )}
```

![](./demo.gif)
