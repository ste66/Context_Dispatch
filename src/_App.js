import React from "react";

// ! CLASS BASED EXAMPLE:
//import { MyProvider } from "./ClassExample/Context";
//import ClassExample from "./ClassExample/ClassExample";

// ! HOOKS EXAMPLE:
// import MyProvider from "./HooksExample/Context";
// import HooksExample from "./HooksExample/HooksExample";

// ! REDUCER EXAMPLE:
import MyProvider from "./Reducer/Context";
import ReducerExample from "./Reducer/ReducerHooksExample";

// ? STEP 4: WRAP YOUR ENTIRE APP WITH THE PROVIDER:
// export default class App extends Component {

//   render() {
//     return (
//       <MyProvider>
//         <div>
//           {/* <ClassExample /> */}

//           <HooksExample />
//         </div>
//       </MyProvider>
//     );
//   }
// }

// import React from 'react'

export default function App() {
  return (
    <MyProvider>
      <div>
        {/* <ClassExample /> */}
        {/* <HooksExample /> */}
        <ReducerExample />
      </div>
    </MyProvider>
  );
}
