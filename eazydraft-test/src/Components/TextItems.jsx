import Button from '@mui/material/Button';


export const TextItem = ({ index, names, ages, updateDetails }) => {
  return (
    <div key={index / Math.random()}>
      <p>Name: {names}</p>
      <p>Age: {ages}</p>
      <Button onClick={() => updateDetails(names, index)}>
        Reset Details
      </Button>
    </div>
  );
};
