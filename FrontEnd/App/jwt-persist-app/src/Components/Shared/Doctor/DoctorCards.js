import React, { useState, useEffect,useCallback } from "react";
import { Modal, Form, Select } from "antd";
import { Card, CardBody, CardTitle, CardText,Button } from 'reactstrap';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate'
const { Option } = Select;

const GET_URL = "/getDoctorsManifest";
const UPDATE_DOCTOR='./updateDoctor';
const DELETE_DOCTOR='./deleteDoctor';

const DoctorCards = ({isDeleteClicked}) => {
  
  const [form] = Form.useForm();
  const axiosPrivate=useAxiosPrivate();
  const [doctors, setDoctors] = useState([]);
  const [editedStatus, setEditedStatus] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [currentDoctorID, setCurrentDoctorID] = useState(null);
  
 
 

  const statusElements = [
    { label: "In-Session", value: "In-Session" },
    { label: "Active", value: "Active" },
    { label: "Abscond", value: "Abscond" },
    { label: "On-Leave", value: "On-Leave" },
  ];

  const fetchDoctorCards = useCallback(async () => {
    try {
      const response = await axiosPrivate.get(GET_URL);
      if (response.status === 200) {
        setDoctors(response.data);
      } else {
        console.error('Failed to fetch doctors');
      }
    } catch (error) {
      console.error('An error occurred while fetching doctors', error);
    }
  }, [axiosPrivate]);
  
  useEffect(() => {
    fetchDoctorCards();
  }, [fetchDoctorCards]);
  
  
  
  const deleteDoctorCard = async (DoctorID) => {
    const id=DoctorID;
    try {
      const response = await axiosPrivate.delete(`${DELETE_DOCTOR}/${id}`);
     
      if (response.status === 200) {
        const updatedDoctors = doctors.filter((doc) => doc.DoctorID !== DoctorID);
        setDoctors(updatedDoctors);
        console.log('Doctor Deleted Successfully');
      } else {
        console.error("Failed to delete Doctor");
      }
    } catch (error) {
      console.error("An error occurred while deleting Doctor", error);
    }
  };
  
  

  const handleUpdate = (doc) => {
    setCurrentDoctorID(doc.DoctorID);
    setEditedStatus((prevState) => ({
      ...prevState,
      [doc.DoctorID]: doc.Status,
    }));
    setModalVisible(true);
  };

  
  const handleSaveClick = async (DoctorID) => {
    const status = editedStatus[DoctorID];
     handleStatusUpdate(DoctorID,status);
     updateDoctors();
     setModalVisible(false);
  };

  
  const handleStatusUpdate = async (DoctorID,status) => {
    try {
      const payload = {
        doctorID: DoctorID,
        status:status
      };
      const response = await axiosPrivate.put(UPDATE_DOCTOR, payload);
      console.log(response.data);
      await updateDoctors ();
    } catch (error) {
      console.error("Error saving medication:", error);
    }
  };

  const handleStatusChange = (value, DoctorID) => {
    setEditedStatus((prevState) => ({
      ...prevState,
      [DoctorID]: value,
    }));
  };

  const updateDoctors = async () => {
    fetchDoctorCards();
  };



  const handleSubmit = async (DoctorID) => {

    //  await updateDoctors ();
    
  };


  const renderDoctorCards = (doc) => (
    <Card key={doc.DoctorID}
    className="bg-[#ffffff] w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
    <CardBody>
      <CardTitle className="text-2xl font-bold text-center py-7">
           Dr. {doc.DoctorName}
      </CardTitle>
      <CardText>
        <div className="border-b">
          <div className="flex flex-col gap-2 justify-center items-center text-gray-700 capitalize font-bold">
            <div className="flex items-center">
              <span className="mr-2 font-bold">Status:</span>
              <p
                style={{ background: doc.StatusBg }}
                className="rounded-full h-4 w-4"
              />
              <span className="ml-2">{doc.Status}</span>
            </div>
          </div>
          <p className="font-medium text-gray-500">Dr. ID: {doc.DoctorID}</p>
        </div>
        <div className="text-1xl">
          <p className="font-semibold">Expertise: {doc.Speciality}</p>
        </div>
      </CardText>
      <Button
          className="bg-[#e32259] text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 flex justify-center items-center"
          onClick={() => handleUpdate(doc)}
        >
          Update Doctor
        </Button>
        {isDeleteClicked 
            && ( <button 
                      onClick={() => deleteDoctorCard(doc.DoctorID)}
                      className="bg-[#f05f26] text-white w-[150px] rounded-md font-medium my-4 mx-auto px-6 py-3 flex justify-center items-center"
                      >
                        Delete
                  </button>
                )
        }
    </CardBody>
  </Card>);



  return (

    <>
    <Modal
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        title="Edit Status"
        footer={null}
        destroyOnClose>
        
        <Form form={form} onFinish={handleSubmit} layout="vertical">
          <Form.Item label="Status">
            <Select
              value={editedStatus[currentDoctorID]}
              onChange={(value) => handleStatusChange(value, currentDoctorID)}
            >
              {statusElements.map((option) => (
                <Option key={option.value} value={option.value}>
                  {option.label}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              className="bg-[#23ca1b] text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 flex justify-center items-center"
              onClick={() => handleSaveClick(currentDoctorID)}
            >
              Save
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    
      <div className="bg-[#1db8e7] p-40 h-1500">
         <div className="grid grid-cols-3 gap-10 h-150">
            {doctors.map(renderDoctorCards)}
          </div>
      </div>
    </>
  );
};

export default DoctorCards;
