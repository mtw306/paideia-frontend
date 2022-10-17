import React, { FC, memo } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "@lib/utilities";
import PageHeader from "@components/PageHeader";
import PageNav from "@components/PageNav";
import {
  Grid,
  Button,
  Container,
  Box,
  Typography,
  List,
  ListItem,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Link,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ExpandMore from "@mui/icons-material/ExpandMore";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SectionHeading from "@components/SectionHeading";
import Blockquote from "@components/Blockquote";
import Image from "next/image";
import { DarkTheme } from "@theme/theme";
import DiscordIcon from "@components/svgs/DiscordIcon";
import TelegramIcon from "@components/svgs/TelegramIcon";

interface INavLink {
  name: string;
  icon: string;
  link: string;
  position: number | undefined;
}

const navLinks: INavLink[] = [
  {
    name: "Our Mission",
    icon: "flag",
    link: "mission",
    position: undefined,
  },
  {
    name: "Ergo Advantage",
    icon: "polyline",
    link: "ergo-advantage",
    position: undefined,
  },
  {
    name: "Learn",
    icon: "school",
    link: "learn",
    position: undefined,
  },
  {
    name: "FAQ",
    icon: "help_outline",
    link: "faq",
    position: undefined,
  },
];

const advantageItems = [
  {
    text: "Simple to use",
    icon: "/icons/FingerSnapIcon.svg",
  },
  {
    text: "Decentralized",
    icon: "/icons/CubesIcon.svg",
  },
  {
    text: "Secure",
    icon: "/icons/ShieldLockIcon.svg",
  },
];

const faqQuestions = [
  {
    question: "What is a DAO? ",
    answer:
      "When users initiate a DAO, they will be asked to choose from some structural pre-sets. DAOscan encounter issues with scalability and resilience, and there are different approaches to solve these problems.",
  },
  {
    question: "How do DAOs work? ",
    answer:
      "When users initiate a DAO, they will be asked to choose from some structural pre-sets. DAOscan encounter issues with scalability and resilience, and there are different approaches to solve these problems.",
  },
  {
    question: "Who would use a DAO? ",
    answer:
      "When users initiate a DAO, they will be asked to choose from some structural pre-sets. DAOscan encounter issues with scalability and resilience, and there are different approaches to solve these problems.",
  },
  {
    question: "Why would someone use Paideia? ",
    answer:
      "When users initiate a DAO, they will be asked to choose from some structural pre-sets. DAOscan encounter issues with scalability and resilience, and there are different approaches to solve these problems.",
  },
  {
    question: "Where do you get Paideia tokens? ",
    answer: (
      <>
        <Link href="https://app.ergodex.io" target="_blank">
          Ergodex
        </Link>{" "}
        is the best place to get Paideia tokens.{" "}
      </>
    ),
  },
];

interface IArticle {
  name: string;
  image?: string;
  description: string;
  link: string;
  category?: string;
  date: string;
}

interface IArticleCard {
  article: IArticle;
}

const ArticleCard: FC<IArticleCard> = ({ article }) => {
  const randomInteger = (min: number, max: number) => {
    return (min + Math.random() * (max - min)).toFixed();
  };
  const rand = randomInteger(1, 18);
  const router = useRouter();

  return (
    <Card
      sx={{
        height: { md: "268px" },
        background: "#111827",
        border: "1px solid rgba(255, 255, 255, 0.12)",
        borderRadius: "16px",
        mb: "36px",
      }}
    >
      <CardActionArea onClick={() => router.push(article.link)}>
        <CardContent sx={{ padding: 0 }}>
          <Grid
            container
            sx={{
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { sm: "center" },
            }}
          >
            <Grid item sm={4}>
              <Box
                sx={{
                  display: "block",
                  position: "relative",
                  overflow: "hidden",
                  height: { xs: "240px", sm: "282px" },
                }}
              >
                {article?.image ? (
                  <Image
                    src={article.image}
                    alt={article.name}
                    layout="fill"
                    objectFit="cover"
                  />
                ) : (
                  <Image
                    src={`/images/placeholder/${rand}.jpg`}
                    alt={article.name}
                    layout="fill"
                    objectFit="cover"
                  />
                )}
              </Box>
            </Grid>
            <Grid
              item
              sm={8}
              sx={{
                p: "24px",
              }}
            >
              {article?.category && (
                <Chip
                  icon={<StarIcon sx={{ fontSize: 16 }} />}
                  label={article.category}
                  size="small"
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    background: "rgba(17,24,39,0.7)",
                    fontSize: "14px",
                    border: "1px solid #9FD2DB",
                    mb: "16px",
                  }}
                />
              )}
              <Typography
                sx={{
                  fontWeight: "700",
                  lineHeight: "32px",
                  mb: "6px",
                  color: "#fff",
                  fontFamily: '"Space Grotesk", sans-serif',
                  fontSize: "24px",
                  letterSpacing: "0.225543px",
                }}
              >
                {article.name}
              </Typography>
              <Typography
                sx={{ fontSize: "14px", lineHeight: "18px", mb: "16px" }}
              >
                <Box
                  component="span"
                  sx={{ fontSize: "16px", verticalAlign: "top", mr: "6px" }}
                >
                  <CalendarTodayIcon fontSize="inherit" />
                </Box>
                Posted: May 04 2022
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  mb: "24px",
                  whiteSpace: "normal",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  // height: '50%',
                  display: "-webkit-box",
                  WebkitLineClamp: "4",
                  WebkitBoxOrient: "vertical",
                }}
              >
                {article.description}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const ArticleCardMemo = memo(ArticleCard);

interface IPerson {
  name: string;
  title: string;
  image?: string;
  linkedin?: string;
  twitter?: string;
}

interface IPersonObj {
  person: IPerson;
}

const Education: FC = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const { data: articleData } = useSWR(
    `/blogs/?education_only=true`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const isMobile = useMediaQuery(DarkTheme.breakpoints.down("sm"));
  return (
    <>
      <PageHeader
        bgUrl="/backgrounds/education-bg.png"
        mobileBgUrl="/backgrounds/education-small.png"
        sectionTitle="Education"
        titleLineOne="Learning"
        titleLineTwo="Together&lt;"
        subTitleOne="Everything you need to know about creating your"
        subTitleTwo="DAOs on Paideia, and more. "
        imgPositionSx={{
          width: "2340px",
          height: "2134px",
          left: "calc(50% + 600px)",
        }}
        mobileSx={{
          width: "600px",
          height: "1574px",
        }}
      />

      <Container sx={{ px: "24px", py: "60px" }} id="navContainer">
        <PageNav navLinks={navLinks}>
          <Box component="section" id="mission" sx={{ mb: "240px" }}>
            <SectionHeading
              category="What do we want to achieve?"
              title="Our Mission"
              sx={{ mb: "32px" }}
            />
            <Box sx={{ maxWidth: "760px", mx: "auto" }}>
              <Typography variant="body2">
                Our mission is to give people the power, knowledge, and
                motivation to change the way they govern and participate in
                democratic organizations. We will help people experiment with
                different methods of governance and work together to create a
                better future, whatever they envision.
              </Typography>
              <Blockquote>
                Using our tools, individuals who don&apos;t have fair access to
                financial systems may take control and compete in a society that
                is imbalanced and stacked against them, without needing the
                approval of the wealthy or elite. Anyone who wants to engage in
                a democratic organization with a shared financial treasury can
                do so using Paideia.
              </Blockquote>
              <Typography variant="body2">
                The tools we create will allow anyone to initiate and manage a
                DAO with no prior knowledge or experience, empowering groups of
                individuals to pool their wealth and put it toward a common aim.
              </Typography>
              <Typography variant="body2">
                Through Paideia, DAOs will be able to:
                <List
                  dense
                  sx={{
                    pl: "36px",
                    listStyleType: "circle",
                    "& li": {
                      pl: "1em",
                      position: "relative",
                    },
                    "& li:before": {
                      content: '"•"',
                      position: "absolute",
                      left: 0,
                    },
                  }}
                >
                  <ListItem>Distribute governance tokens</ListItem>
                  <ListItem>Raise funds</ListItem>
                  <ListItem>Manage their treasury</ListItem>
                  <ListItem>Track member reputation</ListItem>
                  <ListItem>Provide liquidity</ListItem>
                  <ListItem>Initiate and manage staking contracts</ListItem>
                  <ListItem>
                    Create proposals on expenditures or governance
                  </ListItem>
                  <ListItem>
                    Have a forum for stakeholders to discuss all ideas and
                    proposals
                  </ListItem>
                  <ListItem>
                    Easily deploy their funds to achieve their goals
                  </ListItem>
                  <ListItem>
                    Experiment with different types of automated algorithmic
                    democratic processes
                  </ListItem>
                </List>
              </Typography>
              <Button
                href="https://docs.paideia.im"
                target="_blank"
                variant="contained"
              >
                Read Whitepaper
              </Button>
            </Box>
          </Box>
          <Box
            component="section"
            id="ergo-advantage"
            sx={{ mb: "240px", position: "relative" }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "-1000px",
                left: { xs: "calc(50% - 350px)", md: "calc(50% - 700px)" },
                width: "1412px",
                height: "2687px",
                transform: "translate(-50%, 0)",
                // overflow: "hidden",
                zIndex: "-1",
                ml: "-24px",
              }}
            >
              <Image src="/backgrounds/green-blob-left.png" layout="fill" />
            </Box>
            <SectionHeading
              category="Why on Ergo?"
              title="The Ergo Advantage"
              sx={{ mb: "32px" }}
            />
            <Box sx={{ maxWidth: "760px", mx: "auto" }}>
              <Typography variant="body2" sx={{ mb: "64px" }}>
                When building a DAO, it should exist on a blockchain with a
                strong foundation and fundamentals, be inexpensive to operate,
                be simple to use, and be secure and decentralized. It should
                resist government intervention and be accessible to anyone in
                the world, regardless of prohibitive local laws or social
                status.
              </Typography>
              <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                spacing={{ xs: 6, sm: 2 }}
                sx={{ mb: "64px" }}
              >
                {advantageItems.map(({ text, icon }, i) => {
                  return (
                    <Grid
                      item
                      sm={4}
                      xs={12}
                      sx={{ textAlign: "center" }}
                      key={i}
                    >
                      <Box>
                        <Image src={icon} width={48} height={48} />
                        <Typography
                          sx={{
                            fontFamily: '"Space Grotesk", sans-serif',
                            fontWeight: "600",
                            fontSize: "24px",
                            lineHeight: "32px",
                          }}
                        >
                          {text}
                        </Typography>
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>
              <Typography variant="body2">
                We feel that Ergo satisfies those criteria and we feel building
                this software on Ergo first is the appropriate choice. Paideia
                will never be designed to be exclusive to Ergo, and will accept
                many other currencies in the future, however it will be built on
                Ergo first and always strive to follow the fundamental
                philosophies therein.
              </Typography>
              <Typography variant="body2">
                Ergo does not have expensive gas fees like Ethereum. It is fair
                launched, highly decentralized, and based on the original UTXO
                model of Bitcoin
              </Typography>
              <Blockquote>
                Ergo offers technological advantages over other blockchains such
                as NIPoPoWs, soft forks for code-based changes, and an
                efficient, ASIC resistant proof of work algorithm.
              </Blockquote>
              <Typography variant="body2">
                It avoids cloning the EVM and solidity code, and rather uses a
                well-conceived Scala-based programming language called
                Ergoscript, which provides a much safer and more robust platform
                for dApp development.
              </Typography>
            </Box>
          </Box>
          <Box
            component="section"
            id="learn"
            sx={{ mb: "240px", position: "relative" }}
          >
            <SectionHeading
              category="Useful Articles"
              title="Learn About DAOs"
              sx={{ mb: "64px" }}
            />
            {(articleData ?? []).map((article: IArticle, i: React.Key) => (
              <ArticleCardMemo article={{...article, link: `/blog/${article.link}`}} key={i}/>
            ))}
          </Box>
          <Box component="section" id="faq" sx={{ position: "relative" }}>
            <Box
              sx={{
                position: "absolute",
                top: "-800px",
                left: { xs: "calc(50% + 50px)", md: "calc(50% - 350px)" },
                width: "2224px",
                height: "1333px",
                transform: "translate(-50%, 0)",
                // overflow: "hidden",
                zIndex: "-1",
                ml: "-24px",
              }}
            >
              <Image src="/backgrounds/cube.png" layout="fill" />
            </Box>
            <SectionHeading
              category="FAQ"
              title="Things you might be wondering"
              sx={{ mb: "32px", maxWidth: "550px" }}
            />
            <Box sx={{ maxWidth: "662px" }}>
              {faqQuestions.map(({ question, answer }, i) => {
                return (
                  <Accordion
                    key={"panel" + i.toString()}
                    expanded={expanded === "panel" + i.toString()}
                    onChange={handleChange("panel" + i.toString())}
                    sx={{
                      background: "none",
                      mb: "16px",
                      border: "1px solid rgba(255, 255, 255, 0.23)",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMore />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      sx={{
                        "& p": {
                          fontFamily: '"Space Grotesk", sans-serif',
                          fontWeight: "600",
                          fontSize: "24px",
                          lineHeight: "32px",
                        },
                      }}
                    >
                      <Typography>{question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{
                        borderTop: "1px solid rgba(255, 255, 255, 0.23)",
                        p: "16px",
                      }}
                    >
                      <Typography>{answer}</Typography>
                    </AccordionDetails>
                  </Accordion>
                );
              })}
            </Box>
          </Box>
        </PageNav>
      </Container>
      <Container sx={{ px: "24px", py: "60px", position: "relative" }}>
        {isMobile ? (
          <Image
            src="/cta-mobile.png"
            width={374}
            height={205}
            layout="responsive"
          />
        ) : (
          <Image
            src="/cta-banner.png"
            width={1152}
            height={215}
            layout="responsive"
          />
        )}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontWeight: "600",
              fontSize: "34px",
              lineHeight: "42px",
              mb: "12px",
            }}
          >
            Any other questions?
          </Typography>
          <IconButton
            href="https://discord.gg/J3KDrtCFEn"
            target="_blank"
            sx={{
              color: "#fff",
              background: "#007A99",
              "&:hover": {
                background: "#00566B",
              },
              mr: "24px",
            }}
          >
            <DiscordIcon />
          </IconButton>
          <IconButton
            href="https://t.me/paideiaDAO"
            target="_blank"
            sx={{
              color: "#fff",
              background: "#007A99",
              "&:hover": {
                background: "#00566B",
              },
            }}
          >
            <TelegramIcon />
          </IconButton>
        </Box>
      </Container>
    </>
  );
};

export default Education;
