function CurrentTime(): JSX.Element {
  let time = new Date();
  
  
  
  return <p>This is the current time: {time.toDateString()} - {time.toTimeString()}</p>;
}

export default CurrentTime;
