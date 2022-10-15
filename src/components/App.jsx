import { Feedback } from './Feedback/Feedback';

export const App = () => {
  return (
    <div
      style={{
        padding: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 24,
        color: '#010101',
      }}
    >
      <Feedback />
    </div>
  );
};
