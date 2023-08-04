import React, { useState } from "react";
import { Modal,Button,Container,Typography, FormControl,InputLabel,Input,Box} from "@mui/material";
import useAxiosPrivate from '../../../hooks/useAxiosPrivate'
import { useNavigate,useLocation} from "react-router-dom";
import { styled } from "@mui/system";
const INSERT_URL="/insertDoctor"

// Custom styles for the modal
const UpgradedModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;

  .modal-content {
    background-color: #fff;
    padding: 40px;
    border-radius: 4px;
    outline: none;
  }
`;

const AddDoctorModal = ({ onClose }) => {

  const axiosPrivate = useAxiosPrivate();
  const navigate=useNavigate();
  const location=useLocation();


  const [formValues, setFormValues] = useState({
    doctorName: "",
    doctorEmail: "Unknown",
    doctorSpecialty: "",
    doctorNumber: "",
    status: "Pending",
    appointments: 0,
    location: "Unknown",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosPrivate.post(INSERT_URL,formValues);
        if (response.status === 200) {
          console.log("Form submitted successfully");
          onClose();
      } else {
        
        console.error("Form submission failed");
        navigate('/', { state: { from: location }, replace: true });
     
      }
   
    } catch (error) {
      if(error.response && error.response.status === 403) {
        //tokenCleanUp();
        navigate('/', { state: { from: location }, replace: true }); // Navigate to logout page on token expiration
      } else {
        console.error("An error occurred during form submission", error);
      }
    }
  };

  return (
    <div>
      {/* eslint-disable-next-line react/jsx-no-undef */}
      <UpgradedModal open={true} onClose={onClose}>
        <Container maxWidth="xs">
          <Box sx={{ bgcolor: "#fff", p: 4, borderRadius: 4 }}>
            <Typography variant="h5" gutterBottom>
              Add Doctor
            </Typography>
            <form onSubmit={handleSubmit}>
              <FormControl fullWidth margin="normal">
                <InputLabel htmlFor="doctorName">Doctor Name</InputLabel>
                <Input
                  id="doctorName"
                  name="doctorName"
                  value={formValues.doctorName}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl fullWidth margin="normal">
                <InputLabel htmlFor="doctorEmail">Doctor Email</InputLabel>
                <Input
                  id="doctorEmail"
                  name="doctorEmail"
                  value={formValues.doctorEmail}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl fullWidth margin="normal">
                <InputLabel htmlFor="doctorSpecialty">
                  Doctor Specialty
                </InputLabel>
                <Input
                  id="doctorSpecialty"
                  name="doctorSpecialty"
                  value={formValues.doctorSpecialty}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl fullWidth margin="normal">
                <InputLabel htmlFor="doctorNumber">Doctor Number</InputLabel>
                <Input
                  id="doctorNumber"
                  name="doctorNumber"
                  value={formValues.doctorNumber}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl fullWidth margin="dense">
                <InputLabel htmlFor="status">Status</InputLabel>
                <Input
                  id="status"
                  name="status"
                  value={formValues.status}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl fullWidth margin="dense">
                <InputLabel htmlFor="appointments">Appointments</InputLabel>
                <Input
                  id="appointments"
                  name="appointments"
                  type="number"
                  value={formValues.appointments}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl fullWidth margin="dense">
                <InputLabel htmlFor="location">Location</InputLabel>
                <Input
                  id="location"
                  name="location"
                  value={formValues.location}
                  onChange={handleInputChange}
                />
              </FormControl><br /><br />
              <FormControl fullWidth margin="dense">
                <Button type="submit" variant="contained" color="secondary">
                  Add
                </Button>
              </FormControl>

            </form>
          </Box>
        </Container>
      </UpgradedModal>
    </div>
  );
};
export default AddDoctorModal;

