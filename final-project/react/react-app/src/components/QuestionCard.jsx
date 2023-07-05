import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';


export default function QuestionCard({ question, answers, index, handleRadioChange, selectedAnswers }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia>
        <Typography gutterBottom variant="h5" component="div">
          {question}
        </Typography>
      </CardMedia>
      <CardContent>
        <RadioGroup
          onChange={(e) => handleRadioChange(index, e.target.value)}
        >
          {answers.map((answer, k) => (
            <FormControlLabel
              value={k + 1}
              control={<Radio color="secondary" />}
              label={answer}
              key={k}
            />
          ))}
        </RadioGroup>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
