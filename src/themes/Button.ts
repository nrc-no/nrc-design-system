import textTheme from './Text';

export default {
  baseStyle: {
    _text: {
      ...textTheme.variants.heading({ level: '4' }),
    },
    borderRadius: 'nrc_xs',
    height: 'nrc_10',
    paddingLeft: 'nrc_10',
    paddingRight: 'nrc_10',
  },
  variants: {
    major: ({ colorScheme }: any) => ({
      backgroundColor: `${colorScheme}.500`,
      _text: {
        color: 'white',
      },
      _icon: {
        color: 'white',
      },
      _hover: {
        backgroundColor:
          colorScheme === 'secondary' ? 'link' : `${colorScheme}.200`,
        _text: {
          color: colorScheme === 'secondary' ? 'white' : `${colorScheme}.500`,
        },
        _icon: {
          color: colorScheme === 'secondary' ? 'white' : `${colorScheme}.500`,
        },
      },
      _disabled: {
        backgroundColor: 'neutral.300',
        _text: {
          color: 'neutral.200',
        },
        _icon: {
          color: 'neutral.200',
        },
      },
      _pressed: {
        backgroundColor: `${colorScheme}.300`,
        _text: {
          color: 'white',
        },
        _icon: {
          color: 'white',
        },
      },
      _focus: {
        backgroundColor: `${colorScheme}.300`,
        _text: {
          color: 'white',
        },
        _icon: {
          color: 'white',
        },
      },
    }),
    minor: ({ colorScheme }: any) => ({
      backgroundColor: 'white',
      _text: {
        color: `${colorScheme}.500`,
      },
      _icon: {
        color: 'white',
      },
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: `${colorScheme}.500`,
      _hover: {
        backgroundColor:
          colorScheme === 'secondary'
            ? `${colorScheme}.100`
            : `${colorScheme}.200`,
        borderColor:
          colorScheme === 'secondary' ? 'link' : `${colorScheme}.500`,
        _text: {
          color: colorScheme === 'secondary' ? 'link' : `${colorScheme}.500`,
        },
        _icon: {
          color: colorScheme === 'secondary' ? 'link' : `${colorScheme}.500`,
        },
      },
      _disabled: {
        backgroundColor: 'neutral.200',
        borderColor: 'neutral.300',
        _text: {
          color: 'neutral.300',
        },
        _icon: {
          color: 'neutral.300',
        },
      },
      _pressed: {
        backgroundColor: `${colorScheme}.300`,
        borderWidth: 0,
        _text: {
          color: 'white',
        },
        _icon: {
          color: 'white',
        },
      },
      _focus: {
        backgroundColor: `${colorScheme}.300`,
        borderWidth: 0,
        _text: {
          color: 'white',
        },
        _icon: {
          color: 'white',
        },
      },
    }),
  },
};
