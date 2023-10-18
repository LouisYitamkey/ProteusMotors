import {
  createStyles,
  Header,
  HoverCard,
  Group,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  rem,
} from "@mantine/core";

import { useDisclosure } from "@mantine/hooks";
import { IconCode, IconCoin, IconChevronDown } from "@tabler/icons-react";
import Logo from "../src/images/proteus.png";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  link: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: 14,

    [theme.fn.smallerThan("sm")]: {
      height: rem(42),
      display: "flex",
      alignItems: "center",
      width: "100%",
    },

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    }),
  },

  subLink: {
    width: "100%",
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
    }),

    "&:active": theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    margin: `calc(${theme.spacing.md} * -1)`,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}));

const mockdata = [
  {
    icon: IconCode,
    title: "Electric Bikes",
    description: "Electric bikes from proteus motors",
    path: "",
  },
  {
    icon: IconCoin,
    title: "Chargeable Batteries",
    description: "Electric bikes from proteus motors",
    path: "",
  },
];

export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const { classes, theme } = useStyles();

  const links = mockdata.map((item) => (
    <Link to={item.path} className={classes.subLink} key={item.title}>
      <Group noWrap align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon size={rem(22)} color={theme.fn.primaryColor()} />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="sm" color="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </Link>
  ));

  return (
    <Box>
      <Header height={90} className="md:px-52  px-3">
        <Group position="apart" sx={{ height: "100%" }}>
          <Link to="/">
            {" "}
            <img className="object-contain w-[124px]  h-[80px]" src={Logo} alt="Image" />
          </Link>

          <Group
            sx={{ height: "100%" }}
            spacing={0}
            className={classes.hiddenMobile}
          >
            <HoverCard
              width={600}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal
            >
              <HoverCard.Target>
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Products
                    </Box>
                    <IconChevronDown size={16} />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown sx={{ overflow: "hidden" }}>
                <Group position="apart" px="md"></Group>

                <Divider
                  my="sm"
                  mx="-md"
                  color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
                />

                <SimpleGrid cols={2} spacing={0}>
                  {links}
                </SimpleGrid>

                <div className={classes.dropdownFooter}>
                  <Group position="apart"></Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>

            <a href="#" className={classes.link}>
              Platform
            </a>
            <a href="#" className={classes.link}>
              About Us
            </a>
            <HoverCard
              width={600}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal
            >
              <HoverCard.Dropdown sx={{ overflow: "hidden" }}>
                <Group position="apart" px="md">
                  <Text fw={500}>Features</Text>
                </Group>

                <Divider
                  my="sm"
                  mx="-md"
                  color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
                />

                <div className={classes.dropdownFooter}>
                  <Group position="apart"></Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>
          </Group>

          <Group className={classes.hiddenMobile}>
            <button className="bg-black text-white px-6 py-3 hover:bg-slate-600 rounded-full">
              {" "}
              Become a proteus champion
            </button>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.hiddenDesktop}
          />
        </Group>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title={
          <img className="object-contain w-[124px]  h-[80px]" src={Logo} />
        }
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <Divider
          my="sm"
          color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
        />

        <UnstyledButton className={classes.link} onClick={toggleLinks}>
          <Center inline>
            <Box component="span" mr={5}>
              Products
            </Box>
            <IconChevronDown size={16} color={theme.fn.primaryColor()} />
          </Center>
        </UnstyledButton>
        <Collapse onClick={toggleDrawer} in={linksOpened}>
          {links}
        </Collapse>
        <a href="#" className={classes.link}>
          Platforms
        </a>
        <a href="#" className={classes.link}>
          About Us
        </a>

        <Divider
          my="sm"
          color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
        />

        <Group position="center" grow pb="xl" py={50} px="md">
          <a
            href="#"
            className="items-center font-bold justify-center w-full px-6 py-2.5  text-center text-white duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black"
          >
            Contact Sales
          </a>
        </Group>
      </Drawer>
    </Box>
  );
}
