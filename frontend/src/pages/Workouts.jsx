import { useState } from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText } from '@mui/material';
import PropTypes from 'prop-types';

const WorkoutPlan = ({ workouts }) => {
  // Ensure workouts is an array before attempting to map over it
  const validWorkouts = Array.isArray(workouts) ? workouts : [];

  // State to manage expanded/collapsed state of exercises and tips
  const [expandedExercise, setExpandedExercise] = useState(null);
  const [expandedTips, setExpandedTips] = useState(null);

  // Toggle functions:
  // too lazy to make it one toggle...

  // Function to toggle expanded exercise
  const toggleExercise = (index) => {
    if (expandedExercise === index) {
      setExpandedExercise(null);
    } else {
      setExpandedExercise(index);
    }
  };

  // Function to toggle expanded tips
  const toggleTips = (index) => {
    if (expandedTips === index) {
      setExpandedTips(null);
    } else {
      setExpandedTips(index);
    }
  };

  return (
    <div className="container mx-auto p-4">
      {validWorkouts.map((plan, index) => (
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
                Frequency: {plan.frequency}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Split: {plan.split ? 'Yes' : 'No'}
              </Typography>
              {/* Toggle Tips section */}
              <Typography
                variant="h6"
                component="div"
                className="mt-2 cursor-pointer"
                onClick={() => toggleTips(index)}>
                Tips
              </Typography>
              {/* Render Tips content */}
              {expandedTips === index && (
                <List dense className="mb-2">
                  {plan.tips.map((tip, idx) => (
                    <ListItem key={idx}>
                      <ListItemText primary={tip} />
                    </ListItem>
                  ))}
                </List>
              )}
            </CardContent>
          </Card>

          {/* Render exercises for non-split plans and splits */}
          {(plan.exercises || plan.splits) && (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {/* Render exercises for non-split plans */}
              {!plan.split &&
                plan.exercises &&
                plan.exercises.map((exercise, exIndex) => (
                  <Card key={exercise.id} className="mb-4">
                    <CardContent>
                      {/* Exercise name as clickable header */}
                      <div className="cursor-pointer" onClick={() => toggleExercise(exIndex)}>
                        <Typography variant="h6" component="div">
                          {exercise.name}
                        </Typography>
                      </div>

                      {/* Collapsible content for exercises */}
                      {expandedExercise === exIndex && (
                        <div className="mt-2">
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
                            {exercise.instructions.map((instruction, instrIndex) => (
                              <ListItem key={instrIndex}>
                                <ListItemText primary={instruction} />
                              </ListItem>
                            ))}
                          </List>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}

              {/* Render splits for plans with splits */}
              {/* not working yet */}
              {plan.split &&
                plan.splits &&
                plan.splits.map((split, splitIndex) => (
                  <Card key={splitIndex} className="mb-4">
                    <CardContent>
                      <Typography variant="h6" component="div">
                        Day {split.day}
                      </Typography>
                      {split.muscleGroups.map((group, groupIndex) => (
                        <div key={groupIndex} className="mt-2">
                          <Typography variant="subtitle1" component="div">
                            {group.group}
                          </Typography>
                          <List dense>
                            {group.exercises.map((exercise, exerciseIndex) => (
                              <ListItem key={exerciseIndex}>
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
// Recommended by AI

WorkoutPlan.propTypes = {
  workouts: PropTypes.array,
};

export default WorkoutPlan;
