import FedchPost from "./components/FedchPost";
import Postform from "./components/Postform";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col">
          <Postform props={[]} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Синхронные посты</h2>
          <Posts/>
        </div>
        <div className="col">
          <h2>Ассинхронные посты</h2>
          <FedchPost posts={[]} />
        </div>
      </div>
    </div>
  );
}

export default App;
