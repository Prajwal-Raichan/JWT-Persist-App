import React,{useState} from "react";
import { Card, CardBody } from "reactstrap";
import AddDoctorModal from "./AddDoctorModal";
import DoctorCards from "./DoctorCards";

const AdminActions = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showDoctorCards, setShowDoctorCards] = useState(false);
  const [isDeleteClicked, setIsDeleteClicked] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  const fetchAllDoctors = () => {
    setShowDoctorCards(true);
    setIsDeleteClicked(false);
  };

  const closeDoctorCards = () => {
    setShowDoctorCards(false);  
  };

  const handleDelete=()=>{
    fetchAllDoctors();
    setIsDeleteClicked(true);
  }


  return (
    <div className="w-full py-10 px-4 bg-white">
      <div className="max-w-1240px mx-auto grid md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <Card className="w-full bg-[#4ce81d] shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 " >
         
          <CardBody>
            <h2 className="text-2xl font-bold text-center py-8">
             Add Doctor
            </h2>
            <p className="text-center text-4xl font-bold">Create</p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">This Functionality Adds a Doctor to the Database</p>
            </div>
            <button  onClick={openModal} className="bg-[#04061c] text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 flex justify-center items-center" >
             Add 
            </button>
          </CardBody>
        </Card>

        {/* Card 2 */}
        <Card className="w-full bg-[#1be9d1] shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
         
          <CardBody>
            <h2 className="text-2xl font-bold text-center py-8">
              Fetch & Update Doctor
            </h2>
            <p className="text-center text-4xl font-bold">Read & Update</p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">This Functionality Fetches and Updates the Doctor</p>
            </div>
            <button onClick={fetchAllDoctors} className="bg-[#04061c] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-white flex justify-center items-center">
              Fetch
            </button>
          </CardBody>
        </Card>

        {/* Card 3 */}
        <Card className="w-full bg-[#f13524] shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
         
          <CardBody>
            <h2 className="text-2xl font-bold text-center py-8">
            Delete Doctor
            </h2>
            <p className="text-center text-4xl font-bold">Delete</p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">This Functionality Deletes a Doctor from the Database</p>
            </div>
            <button onClick={handleDelete} className="bg-[#04061c] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-white flex justify-center items-center">
            Delete
            </button>
          </CardBody>
        </Card>


      </div>

       {/* AddDoctorModal */}
       {isModalOpen && <AddDoctorModal onClose={closeModal} />}

       {/* Render SwiftCards component if showSwiftCards is true based on Conditional CRUD */}
       {showDoctorCards && (
        <div>
          <DoctorCards closeDoctorCards={closeDoctorCards} isDeleteClicked={isDeleteClicked}/>
          <button onClick={closeDoctorCards}
            className="bg-[#ff0000] text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 flex justify-center items-center">
            Close Doctor Cards
          </button>
        </div>
      )}
</div>
  );
};

export default AdminActions;
