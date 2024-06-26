import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText } from '@mui/material';
import PropTypes from 'prop-types';

const WorkoutPlan = ({ workouts }) => {
  // Ensure workouts is an array before attempting to map over it
  const validWorkouts = Array.isArray(workouts) ? workouts : [];

  console.log(workouts);

  return (
    <div className="container mx-auto p-4">
      {validWorkouts.map((plan) => (
        <div key={plan.id} className="mb-8">
          <Card className="mb-4">
            <CardContent>
              <Typography variant="h5" component="div">
                {plan.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                System: {plan.system}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                System: {plan.system}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Frequency: {plan.frequency}
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

          {/* Render exercises for non-split plans */}

          {!plan.split && (
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
          )}

          {/* Render splits for plans with splits */}

          {plan.split && (
            <div>
              {plan.splits.map((split, index) => (
                <Card key={index} className="mb-4">
                  <CardContent>
                    <Typography variant="h6" component="div">
                      Day {split.day}
                    </Typography>
                    {split.muscleGroups.map((group, index) => (
                      <div key={index} className="mt-2">
                        <Typography variant="subtitle1" component="div">
                          {group.group}
                        </Typography>
                        <List dense>
                          {group.exercises.map((exercise, index) => (
                            <ListItem key={index}>
                              <ListItemText
                                primary={`${exercise.name} - Sets: ${exercise.sets}, Reps: ${exercise.reps}`}
                              />
                            </ListItem>
                          ))}
                        </List>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// PropType validation (optional but recommended)
WorkoutPlan.propTypes = {
  workouts: PropTypes.array,
};

export default WorkoutPlan;
