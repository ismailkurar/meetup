import React, { useEffect } from 'react';

const FunctionalComponent = () => {
  const [ count, setCount ] = React.useState(0);

    useEffect(() => {
      console.log("componentDidUpdate()")
    });


    useEffect(() => {
      console.log("componentDidMount()")
    }, []);


   useEffect(() => {
     console.log("componentDidMount()")

     return () => { console.log("componentWillUnmount()") }
   }, []);


  const handleCount = () => {
    setCount((currentState) => currentState + 1);
  };

  return (
    <div>
      <h3>Component with useEffect()</h3>
      {count}
      <button onClick={handleCount}>
        Count
      </button>
    </div>
  )
};

export default FunctionalComponent;
