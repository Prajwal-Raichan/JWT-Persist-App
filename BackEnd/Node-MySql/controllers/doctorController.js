const connection = require("../database/MySqlDB");

const addDoctor = (req, res) => {
  
  const { doctorName, doctorEmail, doctorSpecialty, doctorNumber, status, appointments, location } = req.body;

  const insertionQuery =
    "INSERT INTO DoctorsManifest (DoctorName, DoctorEmail, Speciality, DoctorNumber, Status, Appointments, Location) VALUES (?, ?, ?, ?, ?, ?, ?)";

  connection.query(
    insertionQuery,
    [doctorName, doctorEmail, doctorSpecialty, doctorNumber, status, appointments, location],
    (error, results) => {
      if (error) {
        console.error("Error adding doctor to the database:", error);
        return res.status(500).json({ error: "Failed to add doctor to the database" });
      }
      console.log("Doctor added successfully");
      return res.sendStatus(200);
    }
  );
};

const getDoctorsManifest = (req, res) => {
  const fetchQuery = "SELECT * FROM DoctorsManifest";

  connection.query(fetchQuery, (err, rows) => {
    if (err) {
      console.error("Error fetching doctors from the database:", err);
      return res.status(500).send("Internal Server Error");
    }

    const doctorsData = rows.map((row) => ({
      DoctorID: row.DoctorID,
      DoctorName: row.DoctorName,
      Speciality: row.Speciality,
      Status: row.Status,
      StatusBg: row.StatusBg,
      Appointments: row.Appointments,
    }));
    console.log(doctorsData);
    console.log("DoctorsManifest Data Sent");
    return res.send(doctorsData);
  });
};
  

const updateDoctor = (req, res) => {
  const { doctorID,status } = req.body;
  console.log('Recieved ID: '+doctorID);
  console.log('Recieved status: '+status);

  let bg = '';
  if (status === 'Active') {
    bg = '#0dde14';
  } else if (status === 'On-Leave') {
    bg = '#de0d0d';
  } else if (status === 'In-Session') {
    bg = '#f50aa2';
  } else if (status === 'Abscond') {
    bg = '#de790d';
  }

  const updateQuery = `UPDATE DoctorsManifest SET Status='${status}', StatusBg = '${bg}' WHERE DoctorID=${doctorID}`;

  connection.query(updateQuery, (err, result) => {
    if (err) {
      console.error('Error updating Doctor:', err);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Doctor updated successfully');
      res.status(200).send('Doctor updated successfully');
    }
  });
}


// ---- Doctor Delete End Point 
const deleteDoctor = async (req, res) => {
  const doctorID = req.params.id;
  console.log(doctorID);

  try {
    // Delete the doctor entry from the database
    const deletionQuery = 'DELETE FROM DoctorsManifest WHERE DoctorID = ?';

    await connection.query(deletionQuery, [doctorID], (error, result) => {
      if (error) {
        console.error('An error occurred while deleting Doctor', error);
        res.sendStatus(500);
      } else {
        console.log('Doctor Deleted Successfully');
        res.sendStatus(200);
      }
    });
  } catch (error) {
    console.error('An error occurred while deleting Doctor', error);
    res.sendStatus(500);
  }
};



module.exports = { 
  addDoctor, 
  getDoctorsManifest,
  updateDoctor,
  deleteDoctor 
};
