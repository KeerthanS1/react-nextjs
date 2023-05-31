import CustomButton from "@/src/common/components/custom-button";
import { Box, Stack } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRouter } from "next/router";
import Head from "next/head";
const IndexPage = () => {
  const router = useRouter();

  const handleGotoUserPage = () => {
    router.push("/user");
  };

  return (
    <>
      <Head>
        <title>Main Page</title>
      </Head>
      <Stack
        sx={{
          width: "100%",
          height: "100vh",
        }}
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <CustomButton
          endIcon={<ArrowForwardIcon />}
          text="Let's Go!"
          variant="contained"
          onClick={handleGotoUserPage}
        />
      </Stack>
    </>
  );
};

export default IndexPage;
