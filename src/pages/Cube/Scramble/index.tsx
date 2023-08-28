import { Debug } from "@/Debug";
import { Grid, useTheme } from "@mui/material";
import { randomScrambleForEvent } from "cubing/scramble";
import { useEffect, useState } from "react";
import { getFaceColor } from "../util";
import { ScrambleText, ScrambleTurn } from "./ScrambleText";
import { SettingsPanel } from "./SettingsPanel";
import { useScrambleSettings } from "./settings";
import { ScrambleHandler } from "./ScrambleHandler";

export const Scramble = () => {
  const [algorithm, setAlgorithm] = useState("Scrambling...");
  const scrambleSettings = useScrambleSettings();
  const theme = useTheme();

  const newScramble = () =>
    void (async () => {
      const alg = await randomScrambleForEvent("333");
      setAlgorithm(alg.toString());
    })();

  useEffect(newScramble, []);

  const moves = algorithm.split(" ").map((move, index) => (
    <ScrambleTurn key={index} faceColor={getFaceColor(move)}>
      {` ${move} `}
    </ScrambleTurn>
  ));
  const halfway = Math.ceil(moves.length / 2);
  const firstHalf = moves.slice(0, halfway);
  const secondHalf = moves.slice(halfway);

  return (
    <>
      <link rel="manifest" href="/manifest.json" />
      <Debug expose={{ scrambleSettings }} />
      <Grid
        sx={{
          top: theme.spacing(10),
        }}
      >
        <Grid item mt={0}>
          <ScrambleText>
            {firstHalf}
            <br />
            {secondHalf}
          </ScrambleText>
        </Grid>
        <Grid item>
          <ScrambleHandler onScramble={newScramble} />
        </Grid>
      </Grid>

      <SettingsPanel />
    </>
  );
};