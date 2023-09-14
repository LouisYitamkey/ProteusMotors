import { Title, Text, Container, Button, Overlay, createStyles, rem } from '@mantine/core';
import BackgroundImage from '../src/images/ionx.webp'

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    paddingTop: rem(250),
    paddingBottom: rem(250),
    backgroundImage: `url(${BackgroundImage})`,

    backgroundSize: 'contain',
    backgroundPosition: 'center',
    // filter: 'brightness(70%)', // Adjust the brightness
    // opacity: 0.9, // Adjust the opacity


    [theme.fn.smallerThan('xs')]: {
      paddingTop: rem(80),
      paddingBottom: rem(70),
    },
  },

  inner: {
    position: 'relative',
    zIndex: 1,
  },

  title: {
    fontWeight: 800,
    fontSize: rem(55),
    letterSpacing: rem(-1),
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    color: theme.white,
    marginBottom: theme.spacing.xs,
    textAlign: 'center',
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(28),
      textAlign: 'left',
    },
  },

  highlight: {
    color: theme.colors[theme.primaryColor][4],
  },

  description: {
    color: theme.colors.gray[0],
    textAlign: 'center',

    [theme.fn.smallerThan('xs')]: {
      fontSize: theme.fontSizes.md,
      textAlign: 'left',
    },
  },

  controls: {
    marginTop: `calc(${theme.spacing.xl} * 1.5)`,
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  control: {
    height: rem(42),
    fontSize: theme.fontSizes.md,

    '&:not(:first-of-type)': {
      marginLeft: theme.spacing.md,
    },

    [theme.fn.smallerThan('xs')]: {
      '&:not(:first-of-type)': {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },

  secondaryControl: {
    color: theme.white,
    backgroundColor: 'rgba(255, 255, 255, .4)',

    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, .45) !important',
    },
  },
}));

export function HeroImageBackground() {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Ride for change with {' '}
          <Text component="span" inherit className={classes.highlight}>
            proteus motors
          </Text>
        </Title>

        <Container size={640}>
          <Text size="xl" className={classes.description}>
          Our electric motorbikes are more than vehicles; they are a lifestyle choice that combines technology, 
          style, and sustainability.
          </Text>
        </Container>

        <div className={classes.controls}>
            <button className='bg-white px-10 py-4 hover:bg-black hover:border-white hover:border hover:text-white rounded-full font-bold'> Contact Sales </button>
         
        </div>
        
      </div>
    </div>
  );
}