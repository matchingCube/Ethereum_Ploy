import { useState, useEffect, useRef } from "react";
// material
import { Box, Stack, Container, Typography, Grid, Hidden } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector as MuiTimelineConnector,
  TimelineContent,
  TimelineDot
} from "@mui/lab";
import CheckIcon from "@mui/icons-material/Check";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import { varFadeInUp, MotionInView, varFadeInDown } from "components/animate";

const TimelineConnector = styled(MuiTimelineConnector)({
  minHeight: 120
});

export default function Roadmap() {
  return (
    <>
      <Container maxWidth="lg">
        <Stack justifyContent="center" sx={{ mt: { xs: 5, md: 10 }, mb: 5 }}>
          <MotionInView variants={varFadeInUp}>
            <Typography
              align="center"
              color="white"
              sx={{ fontSize: 70, mb: 3 }}
            >
              OUR ROADMAP
            </Typography>
          </MotionInView>
        </Stack>

        <Stack>
          <Typography variant="h2" align="center" fontStyle="italic">
            The Rise of MMK - Stage[1]
          </Typography>
          <Hidden mdDown>
            <Timeline
              position="alternate"
              sx={{
                "& .MuiTimelineItem-root": {
                  "&:before": { content: { xs: "inherit", md: '""' } }
                }
              }}
            >
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="warning">
                    <AccessTimeIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h3">
                    Community and discord growth
                  </Typography>
                  <Typography variant="h5">
                    Create an organic environment for members with the interest
                    and drive of pushing MMK to new levels unseen in the NFT
                    community
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="warning">
                    <AccessTimeIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h3">Pre-mint</Typography>
                  <Typography variant="h5">
                    Release 250 pre mints to our truly organic, hand built
                    community at the price of 0.2 eth. <br />
                    {/* Giving the OG members the opportunity to invest before
                  takeoff.
                  <br /> */}
                    Once 250 MMKs are minted it will trigger the first of many
                    giveaways for holders
                    <br />
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="warning">
                    <AccessTimeIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h3">Paid advertisement</Typography>
                  <Typography variant="h5">
                    All earnings earned from the pre-mint will be implemented
                    back into the project through the community wallet with paid
                    promotions.
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="warning">
                    <AccessTimeIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h3">White list</Typography>
                  <Typography variant="h5">
                    Gives 1000 investors an opportunity to mint for the price of
                    0.35 eth. Available for a limited time before the public
                    mint is opened
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="warning">
                    <AccessTimeIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h3">Public mint</Typography>
                  <Typography variant="h5">
                    This will be the last opportunity to invest into MMK at the
                    mint price of 0.5 eth. Mint will be opened to the public
                    allowing anyone the ability to invest into the MMK project.
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="warning">
                    <AccessTimeIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h3">Giveaways</Typography>
                  <Typography variant="h5">
                    MMK is going to be at the forefront of change for the future
                    and in doing so we are providing the platform to change.{" "}
                    <br />
                    EVERY 250 Mints MMK and Keys have partnership by giving away
                    5 Keys collection bundles. <br />
                    Every 500 MMK will be giving away life changing technology
                    for holders to create history. Including home music studios
                    , Full gaming setups & Streaming setups.
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="warning">
                    <AccessTimeIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h3">Reveal and Rarity</Typography>
                  <Typography variant="h5">
                    All holders of official Masked Mic Killers will be revealed.
                    This will enable you to identify the rarity of your NFT and
                    enjoy the astonishing artwork created by @tikodev.
                  </Typography>
                </TimelineContent>
              </TimelineItem>

              <Typography
                variant="h2"
                align="center"
                fontStyle="italic"
                mt={8}
                mb={3}
              >
                Innovation - Stage[2]
              </Typography>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="warning">
                    <AccessTimeIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h3">MMK Records</Typography>
                  <Typography variant="h5">
                    Partnering with MMK artists and having the holders at the
                    heart of history. <br /> All Holders will be given the
                    opportunity to be heard and earn a percentage of royalties
                    from the music and platform created. <br /> A Offering
                    guidance and top tier features changing the music industry
                    forever.
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="warning">
                    <AccessTimeIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h3">Metaverse</Typography>
                  <Typography variant="h5">
                    Develop in the metaverse and create an exclusive holder only{" "}
                    <i>MASKED MIC CLUB</i>. A space for all holders to
                    communicate and form special relationships within the
                    Community.
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="warning">
                    <AccessTimeIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h3">Staking + MMK Market</Typography>
                  <Typography variant="h5">
                    Staking and Tokenomics will be implemented into the
                    mechanics of MMK bringing the birth of MMK$. <br />
                    Each holder has the ability to stake their NFT and purchase
                    anything listed on the MMK market and being the forefront of
                    the way holders are to be paid royalties. <br />
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="warning">
                    <AccessTimeIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h3">Keys Partnership</Typography>
                  <Typography variant="h5">
                    Keys is our first official partnership. The deal created
                    with keys includes a royalty that minting a Keys inspired
                    piece will grant a percentage of sale on the specific
                    clothing there NFT holds. <br />
                    Holders will also receive their piece of clothing minted in
                    their MMK that will be available to claim after launch.{" "}
                    <br />
                  </Typography>
                </TimelineContent>
              </TimelineItem>

              <Typography
                variant="h2"
                align="center"
                fontStyle="italic"
                mt={8}
                mb={3}
              >
                The Inevitable - Stage[3]
              </Typography>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="warning">
                    <AccessTimeIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h3">Festivals</Typography>
                  <Typography variant="h5">
                    Festivals will be hosted for the world to attend. Granting
                    exclusive passes for our holders. Festivals will give our
                    evolving Mic Killers the opportunity to perform on the
                    biggest stage of them all.
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="warning">
                    <AccessTimeIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h3">Events</Typography>
                  <Typography variant="h5">
                    Holder only events will be held throughout our future.
                    Creating a networking platform for holders to expand their
                    business and social connections. Events will be held
                    worldwide on dates later to be announced for the MMK
                    community.
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="warning">
                    <AccessTimeIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h3">Video game</Typography>
                  <Typography variant="h5">
                    MMK will be developing multiple genres of video games.
                    Change the future of the gaming community forever
                  </Typography>
                </TimelineContent>
              </TimelineItem>

              <Typography
                variant="h2"
                align="center"
                fontStyle="italic"
                mt={8}
                mb={3}
              >
                The Future - Stage[4]
              </Typography>
              <TimelineItem>
                <Typography variant="h5" textAlign="center">
                  Reach unimaginable levels with the growth of the community;
                  the royalties are just the beginning. <br /> Expand with the
                  community using the innovative web 3. <br />
                  The opportunities created from our project are world changing
                  and have the ability to unlock closed doors and move only in
                  the direction of success.
                  <br /> MMK is aspiring to reach our pinnacle, stamping MMK
                  into history of existence.
                </Typography>
              </TimelineItem>
            </Timeline>
          </Hidden>

          <Hidden mdUp>
            <Timeline
              position="right"
              sx={{
                "& .MuiTimelineItem-root": {
                  "&:before": { content: { xs: "inherit", md: '""' } }
                }
              }}
            >
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="warning">
                    <AccessTimeIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h3">
                    Community and discord growth
                  </Typography>
                  <Typography variant="h5">
                    Create an organic environment for members with the interest
                    and drive of pushing MMK to new levels unseen in the NFT
                    community
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="warning">
                    <AccessTimeIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h3">Pre-mint</Typography>
                  <Typography variant="h5">
                    Release 250 pre mints to our truly organic, hand built
                    community at the price of 0.2 eth. <br />
                    {/* Giving the OG members the opportunity to invest before
                  takeoff.
                  <br /> */}
                    Once 250 MMKs are minted it will trigger the first of many
                    giveaways for holders
                    <br />
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="warning">
                    <AccessTimeIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h3">Paid advertise</Typography>
                  <Typography variant="h5">
                    All earnings earned from the pre-mint will be implemented
                    back into the project through the community wallet with paid
                    promotions.
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="warning">
                    <AccessTimeIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h3">White list</Typography>
                  <Typography variant="h5">
                    Gives 1000 investors an opportunity to mint for the price of
                    0.35 eth. Available for a limited time before the public
                    mint is opened
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="warning">
                    <AccessTimeIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h3">Public mint</Typography>
                  <Typography variant="h5">
                    This will be the last opportunity to invest into MMK at the
                    mint price of 0.5 eth. Mint will be opened to the public
                    allowing anyone the ability to invest into the MMK project.
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="warning">
                    <AccessTimeIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h3">Giveaways</Typography>
                  <Typography variant="h5">
                    MMK is going to be at the forefront of change for the future
                    and in doing so we are providing the platform to change.{" "}
                    <br />
                    EVERY 250 Mints MMK and Keys have partnership by giving away
                    5 Keys collection bundles. <br />
                    Every 500 MMK will be giving away life changing technology
                    for holders to create history. Including home music studios
                    , Full gaming setups & Streaming setups.
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="warning">
                    <AccessTimeIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h3">Reveal and Rarity</Typography>
                  <Typography variant="h5">
                    All holders of official Masked Mic Killers will be revealed.
                    This will enable you to identify the rarity of your NFT and
                    enjoy the astonishing artwork created by @tikodev.
                  </Typography>
                </TimelineContent>
              </TimelineItem>

              <Typography
                variant="h2"
                align="center"
                fontStyle="italic"
                mt={8}
                mb={3}
              >
                Innovation - Stage[2]
              </Typography>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="warning">
                    <AccessTimeIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h3">MMK Records</Typography>
                  <Typography variant="h5">
                    Partnering with MMK artists and having the holders at the
                    heart of history. <br /> All Holders will be given the
                    opportunity to be heard and earn a percentage of royalties
                    from the music and platform created. <br /> A Offering
                    guidance and top tier features changing the music industry
                    forever.
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="warning">
                    <AccessTimeIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h3">Metaverse</Typography>
                  <Typography variant="h5">
                    Develop in the metaverse and create an exclusive holder only{" "}
                    <i>MASKED MIC CLUB</i>. A space for all holders to
                    communicate and form special relationships within the
                    Community.
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="warning">
                    <AccessTimeIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h3">Staking + MMK Market</Typography>
                  <Typography variant="h5">
                    Staking and Tokenomics will be implemented into the
                    mechanics of MMK bringing the birth of MMK$. <br />
                    Each holder has the ability to stake their NFT and purchase
                    anything listed on the MMK market and being the forefront of
                    the way holders are to be paid royalties. <br />
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="warning">
                    <AccessTimeIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h3">Keys Partnership</Typography>
                  <Typography variant="h5">
                    Keys is our first official partnership. The deal created
                    with keys includes a royalty that minting a Keys inspired
                    piece will grant a percentage of sale on the specific
                    clothing there NFT holds. <br />
                    Holders will also receive their piece of clothing minted in
                    their MMK that will be available to claim after launch.{" "}
                    <br />
                  </Typography>
                </TimelineContent>
              </TimelineItem>

              <Typography
                variant="h2"
                align="center"
                fontStyle="italic"
                mt={8}
                mb={3}
              >
                The Inevitable - Stage[3]
              </Typography>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="warning">
                    <AccessTimeIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h3">Festivals</Typography>
                  <Typography variant="h5">
                    Festivals will be hosted for the world to attend. Granting
                    exclusive passes for our holders. Festivals will give our
                    evolving Mic Killers the opportunity to perform on the
                    biggest stage of them all.
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="warning">
                    <AccessTimeIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h3">Events</Typography>
                  <Typography variant="h5">
                    Holder only events will be held throughout our future.
                    Creating a networking platform for holders to expand their
                    business and social connections. Events will be held
                    worldwide on dates later to be announced for the MMK
                    community.
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="warning">
                    <AccessTimeIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h3">Video game</Typography>
                  <Typography variant="h5">
                    MMK will be developing multiple genres of video games.
                    Change the future of the gaming community forever
                  </Typography>
                </TimelineContent>
              </TimelineItem>

              <Typography
                variant="h2"
                align="center"
                fontStyle="italic"
                mt={8}
                mb={3}
              >
                The Future - Stage[4]
              </Typography>
              <TimelineItem>
                <Typography variant="h5" textAlign="center">
                  Reach unimaginable levels with the growth of the community;
                  the royalties are just the beginning. <br /> Expand with the
                  community using the innovative web 3. <br />
                  The opportunities created from our project are world changing
                  and have the ability to unlock closed doors and move only in
                  the direction of success.
                  <br /> MMK is aspiring to reach our pinnacle, stamping MMK
                  into history of existence.
                </Typography>
              </TimelineItem>
            </Timeline>
          </Hidden>
        </Stack>
      </Container>
    </>
  );
}
