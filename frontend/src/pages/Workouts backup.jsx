// ./src/components/WorkoutPlan.js

import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText } from '@mui/material';

const Workouts = ({ plan }) => {
  return (
    <div className="p-4">
      <Card className="mb-4">
        <CardContent>
          <Typography variant="h5" component="div">
            {plan.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Aim: {plan.aim}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            System: {plan.system}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Level: {plan.level}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Frequency: {plan.frequency}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Duration: {plan.duration}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Plan Duration: {plan.planDuration}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Break Duration: {plan.breakDuration}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Split: {plan.split ? 'Yes' : 'No'}
          </Typography>
          <Typography variant="h6" component="div" className="mt-2">
            Tips:
          </Typography>
          <List dense>
            {plan.tips.map((tip, index) => (
              <ListItem key={index}>
                <ListItemText primary={tip} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {plan.exercises.map((exercise) => (
          <Card key={exercise.id} className="mb-4">
            <CardContent>
              <Typography variant="h6" component="div">
                {exercise.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Force: {exercise.force}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Level: {exercise.level}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Mechanic: {exercise.mechanic}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Equipment: {exercise.equipment}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Primary Muscles: {exercise.primaryMuscles.join(', ')}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Secondary Muscles: {exercise.secondaryMuscles.join(', ')}
              </Typography>
              <Typography variant="h6" component="div" className="mt-2">
                Instructions:
              </Typography>
              <List dense>
                {exercise.instructions.map((instruction, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={instruction} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Workouts;
