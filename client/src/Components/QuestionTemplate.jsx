import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
} from "@mui/material";

export default function QuestionTemplate({
  questionName,
  questionCategory,
  questionDescription,
  id,
}) {
  const selectImage = () => {
    let imageContainer = "";
    if (questionCategory === "History") {
      imageContainer =
        "https://img.freepik.com/free-vector/open-book-with-history-doodles-lettering-education-illustration_288944-5.jpg?size=626&ext=jpg";
    } else if (questionCategory === "Computer_Science") {
      imageContainer =
        "https://bit2bitamericas.com/wp-content/uploads/2020/01/thumbnail-devops.png";
    } else {
      imageContainer =
        "https://images-na.ssl-images-amazon.com/images/I/51MQhEKDAeL._SX258_BO1,204,203,200_.jpg";
    }
    return imageContainer;
  };
  return (
    <Card sx={{ height: "45vh", width: "70vw", overflow: "auto" }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateRows: "30vh 15vh",
          gridTemplateColumns: "30vw 40vw",
        }}
      >
        <CardMedia
          component="img"
          alt="whitout image"
          image={selectImage()}
          sx={{
            gridColumn: "1",
            height: "45vh",
            width: "30vw",
            gridRowStart: "1",
            gridRowEnd: "2",
          }}
        />
        <CardContent
          sx={{ gridColumn: "2", gridRowStart: "1", gridRowEnd: "2" }}
        >
          <Typography gutterBottom variant="h5">
            {questionName}
          </Typography>
          {questionCategory}
          <br />
          <Typography>{questionDescription}</Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
