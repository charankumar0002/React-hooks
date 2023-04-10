import FilterExample from "./searchFilter/searchFilter";
import FilterExample4 from "./searchFilter/searchFilter4";
import FilterExample2 from "./searchFilter/searchfilter2";
import FilterExample3 from "./searchFilter/searchfilter3";

import SortAndFilterExample from "./sortBy-searchBar/sortby_searchBar";
import SortBy from "./sortBy/sortby";
import Project1 from "./usestate/project-1";
import Project2 from "./usestate/project-2";

function App() {
  return (
    <div className="App">
      <Project1 />
      <Project2 />
      <SortBy />
      <SortAndFilterExample />
      <FilterExample/>
      <FilterExample2/>
      <FilterExample3/>
      <FilterExample4/>
    </div>
  );
}

export default App;
