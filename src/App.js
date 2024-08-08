import React, { useState, useMemo, useEffect } from "react";
import styled from "styled-components";
import bg from "./img/bg.png";
import Orb from "./Components/Orb/Orb";
import Navigation from "./Components/Navigation/Navigation";
import Dashboard from "./Components/Dashboard/Dashboard";
import Income from "./Components/Income/Income";
import Expenses from "./Components/Expenses/Expenses";
import LogContainer from "./Components/Logging/LogContainer";
import Trasactions from "./Components/AllTransactions/Trasactions";
import ToInverst from "./Components/Resources/ToInverst";

function App() {
  const [active, setActive] = useState(1);
  const [signined, setSignined] = useState(true);

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />;
      case 2:
        return <Trasactions />;
      case 3:
        return <Income />;
      case 4:
        return <Expenses />;
      case 5:
        return <ToInverst />;
      default:
        return <Dashboard />;
    }
  };

  const orbMemo = useMemo(() => {
    return <Orb />;
  }, []);

  useEffect(()=>{
    if(localStorage.getItem("token")){
      setSignined(false)
    }
  },[])

  if (signined) {
    return <LogContainer />;
  } else {
    return (
      <AppStyled bg={bg} className="App">
        {orbMemo}
        <section className="flex gap-5 min-h-[95vh] p-2 max-md:flex-col">
          <Navigation active={active} setActive={setActive} />
          <main>{displayData()}</main>
        </section>
      </AppStyled>
    );
  }
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${(props) => props.bg});
  position: relative;
  main {
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #ffffff;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

export default App;
