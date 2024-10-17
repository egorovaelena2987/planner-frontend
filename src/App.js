import { useEffect, useState } from 'react';
import './App.css';
import { MyPlaner } from './MyPlaner';
import { addPlan, getAllPlans, editPlan, deletePlan } from './FetchPlan'

function App() {
  const [myPlan, setPlan] = useState([]);
  const [name, setName] = useState("");
  const [editing, setEditing] = useState(false);
  const [planId, setPlanId] = useState("");

  useEffect(() => {
    getAllPlans(setPlan)
  }, [])
  const updatingInPut = (_id, name) => {
    setEditing(true)
    setName(name)
    setPlanId(_id)
    
  }
  return (
    <div className="App">
      <h1>My plans for the week</h1>
      <input type="text"
      placeholder="Add my note"
      value={name}
      onChange={(e) => setName(e.target.value)}/>
      <button onClick={editing ? () => editPlan(planId, name, setName, setPlan, setEditing) : () => addPlan(name, setName, setPlan)}>{editing ? "Edit" : "Add"}</button>
      {myPlan.map((plan) => <MyPlaner text={plan.name} key={plan._id}
      updatingInPut={() => updatingInPut(plan._id, plan.name)}
      deletePlan={() => deletePlan(plan._id, setPlan)}
      />)}
    </div>
  );
}

export default App;
