import Route from "./components/Route";
import { HomePage, MorePage, NewsPage, VideoPage } from "./pages";

const Router = () => {
  return (
    <div>
      <Route path="/home">
        <HomePage />
      </Route>
      <Route path="/video">
        <VideoPage />
      </Route>
      <Route path="/news">
        <NewsPage />
      </Route>
      <Route path="/more">
        <MorePage />
      </Route>
    </div>
  );
};

export default Router;
