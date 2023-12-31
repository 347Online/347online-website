import { CubeColor } from "@/theme";
import { Typography, styled, useTheme } from "@mui/material";

interface ScrambleTextProps {
  children: React.ReactNode;
}

export const ScrambleText = ({ children }: ScrambleTextProps) => {
  const theme = useTheme();

  return (
    <Typography
      variant="h1"
      fontFamily="Monospace"
      fontWeight="bold"
      fontSize="3em"
      lineHeight="1.1"
      sx={{
        padding: { xs: theme.spacing(2), sm: theme.spacing(3) },
        minHeight: { xs: "416px", sm: 0 },
      }}
    >
      {children}
    </Typography>
  );
};

interface ScrambleTurnProps {
  faceColor: CubeColor;
}

export const ScrambleTurn = styled("span")<ScrambleTurnProps>(
  ({ theme, faceColor }) => ({
    color: theme.palette.cube[faceColor],
  })
);
