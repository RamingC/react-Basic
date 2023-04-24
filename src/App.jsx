import React, { Component, useState, useEffect } from "react";
import logo from "./assets/react.svg";
import axios from "axios";

const App = () => {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);


//async await
  async function getUsers(){
    try{
      const res = await axios.get("https://jsonplaceholder.typicode.com/users")
      console.log(res);
      setUsers(res.data)

    } catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    getUsers()
    // axios
    //   .get("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => setUsers(res.data))
    //   .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex flex-col justif y-center items-center gap-y-6 h-screen">
      <img src={logo} className="w-40 cursor-pointer " alt="React logo" />

      <h1 className="text-3xl font-bold underline">React !</h1>

      <button
        type="button"
        className="block text-lg text-white bg-black hover:bg-slate-600 rounded-lg p-3"
        onClick={() => setCount(count + 1)}
      >
        Click to Count : {count}
      </button>

      <button
        type="button"
        className="block text-lg text-white bg-black hover:bg-slate-600 rounded-lg p-3"
        onClick={() => setCount(0)}
      >
        Reset
      </button>

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

//Old react
// export class App extends Component {
//   state = {
//     count: 0,
//   };
//   render() {
//     return (
//       <div className="flex flex-col justif y-center items-center gap-y-6 h-screen">
//         <img src={logo} className="w-40 cursor-pointer " alt="React logo" />
//         <h1 className="text-3xl font-bold underline">Hello world!</h1>
//         <button
//           type="button"
//           className="block text-lg text-white bg-black hover:bg-slate-600 rounded-lg p-3"
//           onClick={() => this.setState({ count: this.state.count + 1 })}
//         >
//           Count is :{this.state.count}
//         </button>
//         <button
//           type="button"
//           className="block text-lg text-white bg-black hover:bg-slate-600 rounded-lg p-3"
//           onClick={() => this.setState({ count: this.state.count =0 })}
//         >
//           Reset
//         </button>
//       </div>
//     );
//   }
// }

export default App;
