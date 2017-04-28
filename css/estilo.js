import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'body': {
    'backgroundColor': '#3fb0b6'
  },
  'logo img': {
    'width': [{ 'unit': '%H', 'value': 0.4 }],
    'height': [{ 'unit': 'string', 'value': 'auto' }],
    'textAlign': 'center'
  },
  'btn-warning': {
    'backgroundColor': '#e34400'
  },
  'text-white': {
    'color': '#ffffff'
  },
  'red': {
    'color': '#ff0000'
  },
  'blue': {
    'color': '#226296'
  },
  'padding50': {
    'padding': [{ 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 50 }]
  },
  'mtop5p': {
    'marginTop': [{ 'unit': '%V', 'value': 0.05 }]
  },
  'mtop10p': {
    'marginTop': [{ 'unit': '%V', 'value': 0.1 }]
  },
  'title': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }]
  },
  'logarRedesSociais': {
    'textAlign': 'left',
    'marginTop': [{ 'unit': 'px', 'value': 20 }]
  },
  'btn:hover': {
    'transition': 'all 0.5s ease-in-out'
  },
  'logarRedesSociais >div': {
    'marginRight': [{ 'unit': 'px', 'value': 10 }],
    'cursor': 'pointer'
  },
  'logarRedesSociais >div:hover': {
    'marginRight': [{ 'unit': 'px', 'value': 10 }],
    'cursor': 'pointer',
    'color': '#FFFFFF',
    'transition': 'all 0.3s ease-in-out'
  },
  'centered-horizontal': {
    'position': 'relative',
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'WebkitTransform': 'translateX(-50%)',
    'MsTransform': 'translateX(-50%)',
    'transform': 'translateX(-50%)',
    'alignItems': 'center',
    'WebkitAlignItems': 'center',
    'textAlign': 'center'
  },
  // centralizacao absoluta
  'centered-absolute': {
    'position': 'relative',
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'transform': 'translate(-50%, -50%)',
    'alignItems': 'center',
    'WebkitAlignItems': 'center'
  },
  'fieldset': {
    'background': '#333!important'
  },
  'footer-home': {
    'textAlign': 'center',
    'marginTop': [{ 'unit': 'px', 'value': 60 }]
  },
  'page-header': {
    'border': [{ 'unit': 'string', 'value': 'none' }]
  }
});
