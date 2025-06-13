import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.5;
    color: #333;
    background-color: #eaeef6;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    font-family: inherit;
  }
  
    .rdrDateRangePickerWrapper{
      max-height: 427px;
    }
  .rdrDefinedRangesWrapper{
    display: none !important;
  }
  .rdrDateRangePickerWrapper{
    margin-left: 14px;
  }
  .rdrDay{
    border-radius: 60px;
    background-color: rgba(244, 245, 246, 1);

  }
  .rdrMonthAndYearWrapper {
    display: none !important;
  }
  .rdrMonths {
    align-items: flex-start !important;
  }

  .rdrWeekDays{
    border-bottom: 0.5px solid rgba(153, 153, 153, 1);
    margin-bottom: 24px;
  }

`
