
// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";
// import ViteIntro from "./pages/ViteIntro.tsx";


// import Layout from "./components/Layout.tsx";
// import Todo from "./components/Todo/Todo.tsx";
//import ClassComponentWithState from "./components/ClassComponentWithState.tsx";
// import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
// import Counter from "./components/Counter.tsx";
// import NameChanger from "./components/NameChanger.tsx";
// import OnlineStatus from "./components/OnlineStatus.tsx";
import {BrowserRouter, Routes, Route} from "react-router";
//import HomePage from "./pages/HomePage.tsx";
import NameChangerPage from "./pages/NameChangerPage.tsx";
import OnlineStatusPage from "./pages/OnlineStatusPage.tsx";
import UserPage from "./pages/UserPage.tsx";
import RouterLayout from "./components/RouterLayout.tsx";
import ExamplesPage from "./pages/ExamplesPage.tsx";
import RouterExamplesLayout from "./components/RouterExamplesLayout.tsx";
import AutoRedirectPage from "./pages/AutoRedirectPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
// import FocusInput from "./components/FocusInput.tsx";
// import UncontrolledInput from "./components/UncontrolledInput.tsx";
import MultiFieldForm from "./components/MultiFieldForm.tsx";


// import CounterWithMoreStates from "./components/CounterWithMoreStates.tsx";
// import CounterAdvanced from "./components/CounterAdvanced.tsx";
// import CounterWithCustomHook from "./components/CounterWithCustomHook.tsx";
// import CounterWithReducer from "./components/CounterWithReducer.tsx";

function App() {


  return (
    <>
      {/*<Layout >*/}
      {/*<ClassComponent />*/}
      {/*<FunctionalComponent />*/}
      {/*<ArrowFunctionalComponent />*/}
      {/*<ArrowFunctionalComponentWithProps title="Is a Arrow Functional Component with Props!"  />*/}
      {/*<ArrowFunctionalComponentWithPropsType title="Is a Arrow Functional Component with Props!"*/}
      {/*description="this is a description"/>*/}


        {/*<h1 className="text-center text-2xl font-bold">This is a heading title</h1>*/}
        {/*<FunctionalComponent />*/}

        {/*<ClassComponentWithState/>*/}

        {/*<Counter/>*/}

        {/*<FunctionalComponentWithState/>*/}
        {/*<NameChanger/>*/}
        {/*<CounterWithMoreStates/>*/}
        {/*<OnlineStatus/>*/}
        {/*<CounterAdvanced/>*/}
        {/*<CounterWithCustomHook/>*/}
        {/*<CounterWithReducer/>*/}
        {/*<Todo/>*/}


      {/*</Layout>*/}

      <BrowserRouter>
        {/*<Layout>*/}
          <Routes>
            {/*<Route path="/" element={<HomePage/>} />*/}
            <Route element={<RouterLayout/>}>
              {/*<Route index element={<FocusInput/>}/>*/}
              <Route index element={<MultiFieldForm/>}/>
              {/*<Route index element={<UncontrolledInput/>}/>*/}
              {/*<Route index element={<HomePage/>} />*/}
            </Route>



            <Route path="examples"  element={<RouterExamplesLayout/>}>
              <Route index element={<ExamplesPage/>}/>

              <Route path="name-changer" element={<NameChangerPage/>}/>
               <Route path="online-status" element={<OnlineStatusPage/>}/>
              <Route path="auto-redirect" element={<AutoRedirectPage/>}/>
            </Route>

            <Route path="users/:userId" element={<UserPage/>}/>
            <Route path="users" element={<UserPage/>}/>
            {/*<Route path="files/*" element={<FilePage/>}/>*/}

            <Route path="*" element={<NotFoundPage/>}/>

          </Routes>
        {/*</Layout>*/}
      </BrowserRouter>
    </>
  )
}

export default App
