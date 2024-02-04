import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import data from "../../mentorData.json"

<script src="https://cdn.lordicon.com/lordicon.js"></script>


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function MentorCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  return (
    <>
    {data.map((card, index) => (
      <Card className='card' key={index} sx={{ maxWidth: 445, margin: "20px" }}>
        <CardMedia
          component="img"
          height="300"
          image={card.image}
        />

        <CardHeader
          title={card.firstName + " " + card.lastName}
          subheader={card.headline + ", Graduation Year: " + card.gradYear}
        />

        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            {/* <lord-icon src="https://cdn.lordicon.com/igciyimj.json" 
                      trigger="hover" 
                      style="width:250px;height:250px">

            </lord-icon> */}
            <FavoriteIcon/>
          </IconButton>
          
          <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
          <a href={card.url} target="_blank" rel="noopener noreferrer" style={{color:'black'}}>{card.url}</a>
          </CardContent>
        </Collapse>
      </Card>
    ))}
  </>
  );
}