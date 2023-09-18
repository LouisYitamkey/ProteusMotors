import React from "react";
import { createStyles, Group, ActionIcon, rem } from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandFacebook,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import Logo from "../src/images/proteus.png";
const useStyles = createStyles((theme) => ({
  footer: {
    // marginTop: rem(120),
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: `${theme.spacing.md} ${theme.spacing.md}`,
  },

  links: {
    marginTop: theme.spacing.lg,
    marginBottom: theme.spacing.sm,
  },
}));

function FooterCentered({ links }) {
  const { classes } = useStyles();
  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      style={{ color: "dimmed", lineHeight: 1 }}
      onClick={(event) => event.preventDefault()}
    >
      <span className="hover:text-blue-500">{link.label}</span>
    </a>
  ));

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <img className="object-contain  w-[124px]  h-[80px] " src={Logo} />

        <Group className={classes.links}>{items}</Group>
      </div>
      <Group spacing="xs" position="center" noWrap>
        <ActionIcon size="lg" variant="default" radius="xl">
          <IconBrandTwitter
            className="text-blue-800"
            size="1.05rem"
            stroke={1.5}
          />
        </ActionIcon>
        <ActionIcon size="lg" variant="default" radius="xl">
          <IconBrandFacebook
            className="text-red-800"
            size="1.05rem"
            stroke={1.5}
          />
        </ActionIcon>
        <ActionIcon
          className="text-blue-500"
          size="lg"
          variant="default"
          radius="xl"
        >
          <IconBrandLinkedin cl size="1.05rem" stroke={1.5} />
        </ActionIcon>
      </Group>
      <div className="mx-auto flex justify-centre items-centre">
        <span className="mx-auto  text-sm md:py-4  py-6 text-gray-500">
          © 2023 Proteus. All rights reserved.
          <a href="" className=" text-blue-500 hover:text-gray-500"></a>
        </span>
      </div>
    </div>
  );
}

export default FooterCentered;
