import Navbar from "./components/Navbar";
import SubNavbar from "./components/subNavbar";

function App() {
  return (
    <>
      <main>
        <Navbar
          logo="the Logo"
          item="Find a Location"
          buttonText="Sign In / Join"
        />
        <SubNavbar item1="Reservations" item2="Vehicles" item3="Locations" />
      </main>
    </>
  );
}

export default App;
