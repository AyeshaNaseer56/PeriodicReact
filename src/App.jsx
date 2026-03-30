import Heading from "./components/Heading";
import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";
import Fourth from "./components/Fourth";
import Fifth from "./components/Fifth";
import Six from "./components/Six";
import Seven from "./components/Seven";
import Eight from "./components/Eight";
import Ninth from "./components/Ninth";


export default function App(){
  return(
    <>
    <Heading />
    <table border="1" className="tableone">
      <First />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <Six />
      <Seven />

      

    </table>
    <pre>
      <table border="1" class="tabletwo">
      <Eight />
      <Ninth />
      </table>
      </pre>
      
    </>
  );
};