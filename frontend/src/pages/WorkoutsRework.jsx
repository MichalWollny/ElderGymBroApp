import Expander from "../assets/components/Expander";

const WorkoutPlan = ({ workouts }) => {
  // Ensure workouts is an array before attempting to map over it
  const validWorkouts = Array.isArray(workouts) ? workouts : [];

  // State to manage expanded/collapsed state of exercises and tips
  const [expandedExercise, setExpandedExercise] = useState(null);
  const [expandedTips, setExpandedTips] = useState(null);
  const [expandedPlans, setExpandedPlans] = useState(null);
  const [expandedSplitDays, setExpandedSplitDays] = useState(null);

  // Function to toggle expanded exercise
  const toggleExercise = (index) => {
    setExpandedExercise(expandedExercise === index ? null : index);
  };

  // Function to toggle expanded tips
  const toggleTips = (index) => {
    setExpandedTips(expandedTips === index ? null : index);
  };

  // Function to toggle expanded plans
  const togglePlans = (index) => {
    setExpandedPlans(expandedPlans === index ? null : index);
  };
  // Function to toggle expanded plans
  const toggleSplitDays = (index) => {
    setExpandedSplitDays(expandedSplitDays === index ? null : index);
  };



  return (
    <>
      <Expander>
        
      </Expander>
    </>
  );
}

export default WorkoutsRework;