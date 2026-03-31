import Five from "./components/Five";
import Four from "./components/Four";
import Heading from "./components/Heading";
import Label from "./components/Label";
import Row from "./components/Row";
import Table from "./components/Table";
import Three from "./components/Three";
import Title from "./components/Title";
import Two from "./components/Two";

export default function App(){
  return(
    <>
    <Title/>
    <Heading/>
    <Label/>
  
       <table border="1">
        <Table/>
          <Row/>     
        <Two/>
      <Three/>
      <Four/>
      <Five/>
      </table>   
    </>
  );
}