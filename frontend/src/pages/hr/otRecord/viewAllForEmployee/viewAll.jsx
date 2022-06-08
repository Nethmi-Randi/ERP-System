import "./viewAll.scss";
import Navbar from "../../../../components/navbar/Navbar";
import Sidebar from "../../../../components/hr/sidebar/Sidebar";
import Datatable from "../../../../components/hr/dependentTable/Datatable";
import { useParams } from "react-router-dom";

const ViewAllOtRecordForEmployee = () => {
  const { EID } = useParams();
  //console.log(EID);
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable EID={EID} />
      </div>
    </div>
  );
};

export default ViewAllOtRecordForEmployee;
