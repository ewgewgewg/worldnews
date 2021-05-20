import axios from "axios";
import https from "https";
import "./App.css";

function App() {
  let outerData = "";

  https
    .get("https://utility.ramecho.repl.co/show", (resp) => {
      let data = "";

      // A chunk of data has been received.
      resp.on("data", (chunk) => {
        data += chunk;
      });

      // The whole response has been received. Print out the result.
      resp.on("end", () => {
        console.log("data");
        console.log(data);
        //outerData = data;
      });
    })
    .on("error", (err) => {
      console.log("Error: " + err.message);
    });

  // async function getData() {
  //   let tempData;

  //   // try {
  //   //   tempData = await axios.get("https://utility.ramecho.repl.co/show");
  //   // } catch {
  //   //   tempData = "data unavailable!";
  //   // }
  //   return tempData;
  // }

  // console.log(getData());

  return (
    <div className="App">
      <div>World News</div>
      <div>{outerData || "No data right now!"}</div>
    </div>
  );
}

export default App;
