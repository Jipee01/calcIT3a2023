import './App.css';

function CalcButton({label}) {
  return (
    <button>
      {label}
    </button>
  );
}

function CalcDisplay({display}){
  return (
    <div className='CalcDisplay'>
      {display}
    </div>
  )
}


function App() {
  return (
   <div className='CalcContainer'>
    <CalcDisplay display={"Hello World"}/>
    <div className='ButtonContainer'>
      <CalcButton label ={7}/>
      <CalcButton label ={8}/>
      <CalcButton label ={9}/>
      <CalcButton label ={"+"}/>
      <CalcButton label ={4}/>
      <CalcButton label ={5}/>
      <CalcButton label ={6}/>
      <CalcButton label ={"-"}/>
      <CalcButton label ={1}/>
      <CalcButton label ={2}/>
      <CalcButton label ={3}/>
      <CalcButton label ={"*"}/>
      <CalcButton label ={"C"}/>
      <CalcButton label ={0}/>
      <CalcButton label ={"="}/>
      <CalcButton label ={"/"}/>
    </div>
   </div>
  );
}

  export default App;
  