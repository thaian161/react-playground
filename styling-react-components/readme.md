# Styling React Components

    Conditional & Dynamic Styles
    Styled Components
    CSS Modules

# Why do we need styled component?
- It could happen that a classname is used twice in different part of the application
- There are many ways to avoid style spill over to our current components, however there are 2 popular way to handle this issue 

### 1 - Using `Styled Components` package 
- Use the doc at: https://styled-components.com/
- Install `npm install --save styled-components`
- Import `import styled from 'styled-components'` to your component
- The syntax used is Tagged Template Literals

```
// Create a Title component that'll render an <h1> tag with some styles

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

// Use Title and Wrapper like any other React component – except they're styled!
render(
  <Wrapper>
    <Title>
      Hello World!
    </Title>
  </Wrapper>
);
```

#### Styled Component and Dynamic Props
- Dynamic add className to <FormControl>
```
const FormControl = styled.div`
  &.invalid input {
    border-color: red;
    background: #ffd7d7;
  }
`

{/* if !isValid then add 'invalid' className */}
  <FormControl className={!isValid && 'invalid'}> 
```

- Adapting based on props: we can also add props for <FormControl> directly in the backtick like below
```
const FormControl = styled.div`
  & input {
    border: 1px solid #ccc ${ props => (props.invalid ? 'red': '#ccc')};
    background: ${ props => (props.invalid ? '#ffd7d7': 'transparent')};
  }
  `

<FormControl invalid={!isValid}> 
```