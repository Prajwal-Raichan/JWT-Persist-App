import avatar from './Images/avatar.jpg';
import avatar2 from './Images/avatar2.jpg';
import avatar3 from './Images/avatar3.png';
import avatar4 from './Images/avatar4.jpg';
import { AiOutlineCalendar} from "react-icons/ai";
import { FiShoppingBag} from "react-icons/fi";
import { IoMdContacts } from "react-icons/io";
import { RiContactsLine } from "react-icons/ri";





export const AdminLinks = [
    {
      title: "Dashboard",
      links: [
        {
          name: "Stats",
          icon: <FiShoppingBag />,
        },
      ],
    },
  
    {
      title: "Pages",
      links: [
        {
          path: "doctors",
          name: "doctors",
          icon: <IoMdContacts />,
        },
        {
          path: "patients",
          name: "patients",
          icon: <RiContactsLine />,
        },
      ],
    },
    {
      title: "Actions",
      links: [
        {
          path: "addDoctor",
          name: "Doctor CRUD",
          icon: <AiOutlineCalendar />,
        },
      ],
    },
  ];
  
  export const CustomerLinks = [
    {
      title: "Customer Dashboard",
      links: [
        {
          path: "getStats",
          name: "Stats",
          icon: <FiShoppingBag />,
        },
      ],
    },
  
    {
      title: "Pages",
      links: [
        {
          path: "check",
          name: "Random-1",
          icon: <RiContactsLine />,
        },
        {
          path: "check",
          name: "Random-2",
          icon: <FiShoppingBag />,
        },
        {
          path: "check",
          name: "Random-3",
          icon: <FiShoppingBag />,
        },
      ],
    },
  ];


const patientsGridImage = (props) => (
    <div className="image flex gap-4">
        {props.PatientImage ? (
            <img
                className="rounded-full w-10 h-10"
                src={`data:image/png;base64,${props.PatientImage}`}
                alt="patient"
            />
        ) : (
            <img
                className="rounded-full w-10 h-10"
                src={avatar}
                alt="patient"
            />
        )}
        <div>
            <p>{props.PatientName}</p>
            <p>{props.PatientEmail}</p>
        </div>
    </div>
);


const patientsGridStatus = (props) => (
    <div className="flex gap-2 justify-center items-center text-gray-700 capitalize">
        <p style={{ background: props.StatusBg }} className="rounded-full h-3 w-3" />
        <p>{props.Status}</p>
    </div>
);

const doctorGridStatus = (props) => (
    <div className="flex gap-2 justify-center items-center text-gray-700 capitalize">
        <p style={{ background: props.StatusBg }} className="rounded-full h-3 w-3" />
        <p>{props.Status}</p>
    </div>
);



export const doctorsGrid = [
    {
        field: 'DoctorName',
        headerText: 'Doctor Name',
        width: '0',
        format: 'text',
        textAlign: 'Center',
    },
    {
        field: 'Speciality',
        headerText: 'Speciality',
        width: '170',
        format: 'text',
        textAlign: 'Center',
    },
    {
        field: 'Appointments',
        headerText: 'Appointments',
        width: '120',
        format: 'N2',
        textAlign: 'Center',
    },
    {
        field: 'Status',
        headerText: 'Status',
        width: '120',
        format: 'text',
        textAlign: 'Center',
        template: doctorGridStatus,
    },
    {
        field: 'DoctorID',
        headerText: 'Doctor ID',
        width: '120',
        format: 'N2',
        textAlign: 'Center',
    },
];


export const patientsGrid = [
    { type: 'checkbox', width: '50' },
    {
        headerText: 'Patient Name',
        width: '150',
        template: patientsGridImage,
        textAlign: 'Center',
    },
    {
        field: 'PatientCase',
        headerText: 'Patient Case',
        width: '150',
        textAlign: 'Center',
    },
    {
        field: 'Status',
        headerText: 'Status',
        width: '130',
        format: 'text',
        textAlign: 'Center',
        template: patientsGridStatus,
    },
    {
        field: 'Appointments',
        headerText: 'Appointments',
        width: '100',
        format: 'N2',
        textAlign: 'Center',
    },
    {
        field: 'ScheduledAppointments',
        headerText: 'Scheduled Appointments',
        width: '150',
        format: 'yMd HH:mm',
        textAlign: 'Center',
    },
    {
        field: 'AppointmentsStatus',
        headerText: 'Appointments Status',
        width: '150',
        format: 'text',
        textAlign: 'Center',
        template: patientsGridStatus,
    },
    {
        field: 'Billed',
        headerText: 'Billed',
        width: '100',
        format: 'N2',
        textAlign: 'Center',
    },
    {
        field: 'Location',
        headerText: 'Location',
        width: '150',
        textAlign: 'Center',
    },
    {
        field: 'PatientID',
        headerText: 'Patient ID',
        width: '120',
        textAlign: 'Center',
    },
];

/* */
export const doctorsData = [
    {
        DoctorID: 1,
        DoctorName: 'Nancy Davolio',
        Speciality: 'Sales Representative',
        Department: '01/02/2021',
        Appointments: 'USA',
        ScheduledAppointments: 'Carson',
        AppointmentsStatus:
            avatar3,
    },
    {
        DoctorID: 2,
        DoctorName: 'Nasimiyu Danai',
        Speciality: 'Marketing Head',
        Department: '01/02/2021',
        Appointments: 'USA',
        ScheduledAppointments: 'Carson',
        AppointmentsStatus:
            avatar3,
    },
    {
        DoctorID: 3,
        DoctorName: 'Iulia Albu',
        Speciality: 'HR',
        Department: '01/02/2021',
        Appointments: 'USA',
        ScheduledAppointments: 'Carson',
        AppointmentsStatus:
            avatar4,
    },
    {
        DoctorID: 4,
        DoctorName: 'Siegbert Gottfried',
        Speciality: 'Marketing Head',
        Department: '01/02/2021',
        Appointments: 'USA',
        ScheduledAppointments: 'Carson',
        AppointmentsStatus:
            avatar2,
    },
    {
        DoctorID: 5,
        DoctorName: 'Omar Darobe',
        Speciality: 'HR',
        Department: '01/02/2021',
        Appointments: 'USA',
        ScheduledAppointments: 'Carson',
        AppointmentsStatus:
            avatar,
    },
    {
        DoctorID: 4,
        DoctorName: 'Penjani Inyene',
        Speciality: 'Marketing Head',
        Department: '01/02/2021',
        Appointments: 'USA',
        ScheduledAppointments: 'Carson',
        AppointmentsStatus:
            avatar,
    },
    {
        DoctorID: 5,
        DoctorName: 'Miron Vitold',
        Speciality: 'HR',
        Department: '01/02/2021',
        Appointments: 'USA',
        ScheduledAppointments: 'Carson',
        AppointmentsStatus:
            avatar2,
    },
    {
        DoctorID: 1,
        DoctorName: 'Nancy Davolio',
        Speciality: 'Sales Representative',
        Department: '01/02/2021',
        Appointments: 'USA',
        ScheduledAppointments: 'Carson',
        AppointmentsStatus:
            avatar2,

    },
    {
        DoctorID: 2,
        DoctorName: 'Nasimiyu Danai',
        Speciality: 'Marketing Head',
        Department: '01/02/2021',
        Appointments: 'USA',
        ScheduledAppointments: 'Carson',
        AppointmentsStatus:
            avatar3,
    },
    {
        DoctorID: 3,
        DoctorName: 'Iulia Albu',
        Speciality: 'HR',
        Department: '01/02/2021',
        Appointments: 'USA',
        ScheduledAppointments: 'Carson',
        AppointmentsStatus:
            avatar4,
    },
    {
        DoctorID: 4,
        DoctorName: 'Siegbert Gottfried',
        Speciality: 'Marketing Head',
        Department: '01/02/2021',
        Appointments: 'USA',
        ScheduledAppointments: 'Carson',
        AppointmentsStatus:
            avatar2,
    },
    {
        DoctorID: 5,
        DoctorName: 'Omar Darobe',
        Speciality: 'HR',
        Department: '01/02/2021',
        Appointments: 'USA',
        ScheduledAppointments: 'Carson',
        AppointmentsStatus:
            avatar,
    },
    {
        DoctorID: 4,
        DoctorName: 'Penjani Inyene',
        Speciality: 'Marketing Head',
        Department: '01/02/2021',
        Appointments: 'USA',
        ScheduledAppointments: 'Carson',
        AppointmentsStatus:
            avatar,
    },
    {
        DoctorID: 5,
        DoctorName: 'Miron Vitold',
        Speciality: 'HR',
        Department: '01/02/2021',
        Appointments: 'USA',
        ScheduledAppointments: 'Carson',
        AppointmentsStatus:
            avatar2,
    },
    {
        DoctorID: 1,
        DoctorName: 'Nancy Davolio',
        Speciality: 'Sales Representative',
        Department: '01/02/2021',
        Appointments: 'USA',
        ScheduledAppointments: 'Carson',
        AppointmentsStatus:
            avatar,
    },
    {
        DoctorID: 2,
        DoctorName: 'Nasimiyu Danai',
        Speciality: 'Marketing Head',
        Department: '01/02/2021',
        Appointments: 'USA',
        ScheduledAppointments: 'Carson',
        AppointmentsStatus:
            avatar3,
    },
    {
        DoctorID: 3,
        DoctorName: 'Iulia Albu',
        Speciality: 'HR',
        Department: '01/02/2021',
        Appointments: 'USA',
        ScheduledAppointments: 'Carson',
        AppointmentsStatus:
            avatar4,
    },
    {
        DoctorID: 4,
        DoctorName: 'Siegbert Gottfried',
        Speciality: 'Marketing Head',
        Department: '01/02/2021',
        Appointments: 'USA',
        ScheduledAppointments: 'Carson',
        AppointmentsStatus:
            avatar2,
    },
    {
        DoctorID: 5,
        DoctorName: 'Omar Darobe',
        Speciality: 'HR',
        Department: '01/02/2021',
        Appointments: 'USA',
        ScheduledAppointments: 'Carson',
        AppointmentsStatus:
            avatar,
    },
    {
        DoctorID: 4,
        DoctorName: 'Penjani Inyene',
        Speciality: 'Marketing Head',
        Department: '01/02/2021',
        Appointments: 'USA',
        ScheduledAppointments: 'Carson',
        AppointmentsStatus:
            avatar,
    },
    {
        DoctorID: 5,
        DoctorName: 'Miron Vitold',
        Speciality: 'HR',
        Department: '01/02/2021',
        Appointments: 'USA',
        ScheduledAppointments: 'Carson',
        AppointmentsStatus:
            avatar2,
    },
    {
        DoctorID: 1,
        DoctorName: 'Nancy Davolio',
        Speciality: 'Sales Representative',
        Department: '01/02/2021',
        Appointments: 'USA',
        ScheduledAppointments: 'Carson',
        AppointmentsStatus:
            avatar2,

    },
    {
        DoctorID: 2,
        DoctorName: 'Nasimiyu Danai',
        Speciality: 'Marketing Head',
        Department: '01/02/2021',
        Appointments: 'USA',
        ScheduledAppointments: 'Carson',
        AppointmentsStatus:
            avatar3,
    },
    {
        DoctorID: 3,
        DoctorName: 'Iulia Albu',
        Speciality: 'HR',
        Department: '01/02/2021',
        Appointments: 'USA',
        ScheduledAppointments: 'Carson',
        AppointmentsStatus:
            avatar4,
    },
    {
        DoctorID: 4,
        DoctorName: 'Siegbert Gottfried',
        Speciality: 'Marketing Head',
        Department: '01/02/2021',
        Appointments: 'USA',
        ScheduledAppointments: 'Carson',
        AppointmentsStatus:
            avatar2,
    },
    {
        DoctorID: 5,
        DoctorName: 'Omar Darobe',
        Speciality: 'HR',
        Department: '01/02/2021',
        Appointments: 'USA',
        ScheduledAppointments: 'Carson',
        AppointmentsStatus:
            avatar,
    },
    {
        DoctorID: 4,
        DoctorName: 'Penjani Inyene',
        Speciality: 'Marketing Head',
        Department: '01/02/2021',
        Appointments: 'USA',
        ScheduledAppointments: 'Carson',
        AppointmentsStatus:
            avatar,
    },
    {
        DoctorID: 5,
        DoctorName: 'Miron Vitold',
        Speciality: 'HR',
        Department: '01/02/2021',
        Appointments: 'USA',
        ScheduledAppointments: 'Carson',
        AppointmentsStatus:
            avatar2,
    },
    {
        DoctorID: 1,
        DoctorName: 'Nancy Davolio',
        Speciality: 'Sales Representative',
        Department: '01/02/2021',
        Appointments: 'USA',
        ScheduledAppointments: 'Carson',
        AppointmentsStatus:
            avatar2,

    },
    {
        DoctorID: 2,
        DoctorName: 'Nasimiyu Danai',
        Speciality: 'Marketing Head',
        Department: '01/02/2021',
        Appointments: 'USA',
        ScheduledAppointments: 'Carson',
        AppointmentsStatus:
            avatar3,
    },
    {
        DoctorID: 3,
        DoctorName: 'Iulia Albu',
        Speciality: 'HR',
        Department: '01/02/2021',
        Appointments: 'USA',
        ScheduledAppointments: 'Carson',
        AppointmentsStatus:
            avatar4,
    },
    {
        DoctorID: 4,
        DoctorName: 'Siegbert Gottfried',
        Speciality: 'Marketing Head',
        Department: '01/02/2021',
        Appointments: 'USA',
        ScheduledAppointments: 'Carson',
        AppointmentsStatus:
            avatar2,
    },
    {
        DoctorID: 5,
        DoctorName: 'Omar Darobe',
        Speciality: 'HR',
        Department: '01/02/2021',
        Appointments: 'USA',
        ScheduledAppointments: 'Carson',
        AppointmentsStatus:
            avatar,
    },
    {
        DoctorID: 4,
        DoctorName: 'Penjani Inyene',
        Speciality: 'Marketing Head',
        Department: '01/02/2021',
        Appointments: 'USA',
        ScheduledAppointments: 'Carson',
        AppointmentsStatus:
            avatar,
    },
    {
        DoctorID: 5,
        DoctorName: 'Miron Vitold',
        Speciality: 'HR',
        Department: '01/02/2021',
        Appointments: 'USA',
        ScheduledAppointments: 'Carson',
        AppointmentsStatus:
            avatar2,
    },
    {
        DoctorID: 1,
        DoctorName: 'Nancy Davolio',
        Speciality: 'Sales Representative',
        Department: '01/02/2021',
        Appointments: 'USA',
        ScheduledAppointments: 'Carson',
        AppointmentsStatus:
            avatar2,

    },
    {
        DoctorID: 2,
        DoctorName: 'Nasimiyu Danai',
        Speciality: 'Marketing Head',
        Department: '01/02/2021',
        Appointments: 'USA',
        ScheduledAppointments: 'Carson',
        AppointmentsStatus:
            avatar3,
    },
    {
        DoctorID: 3,
        DoctorName: 'Iulia Albu',
        Speciality: 'HR',
        Department: '01/02/2021',
        Appointments: 'USA',
        ScheduledAppointments: 'Carson',
        AppointmentsStatus:
            avatar4,
    },
    {
        DoctorID: 4,
        DoctorName: 'Siegbert Gottfried',
        Speciality: 'Marketing Head',
        Department: '01/02/2021',
        Appointments: 'USA',
        ScheduledAppointments: 'Carson',
        AppointmentsStatus:
            avatar2,
    },
    {
        DoctorID: 5,
        DoctorName: 'Omar Darobe',
        Speciality: 'HR',
        Department: '01/02/2021',
        Appointments: 'USA',
        ScheduledAppointments: 'Carson',
        AppointmentsStatus:
            avatar,
    },
    {
        DoctorID: 4,
        DoctorName: 'Penjani Inyene',
        Speciality: 'Marketing Head',
        Department: '01/02/2021',
        Appointments: 'USA',
        ScheduledAppointments: 'Carson',
        AppointmentsStatus:
            avatar,
    },
    {
        DoctorID: 5,
        DoctorName: 'Miron Vitold',
        Speciality: 'HR',
        Department: '01/02/2021',
        Appointments: 'USA',
        ScheduledAppointments: 'Carson',
        AppointmentsStatus:
            avatar2,
    },
    {
        DoctorID: 1,
        DoctorName: 'Nancy Davolio',
        Speciality: 'Sales Representative',
        Department: '01/02/2021',
        Appointments: 'USA',
        ScheduledAppointments: 'Carson',
        AppointmentsStatus:
            avatar2,

    },
    {
        DoctorID: 2,
        DoctorName: 'Nasimiyu Danai',
        Speciality: 'Marketing Head',
        Department: '01/02/2021',
        Appointments: 'USA',
        ScheduledAppointments: 'Carson',
        AppointmentsStatus:
            avatar3,
    },
    {
        DoctorID: 3,
        DoctorName: 'Iulia Albu',
        Speciality: 'HR',
        Department: '01/02/2021',
        Appointments: 'USA',
        ScheduledAppointments: 'Carson',
        AppointmentsStatus:
            avatar4,
    },
    {
        DoctorID: 4,
        DoctorName: 'Siegbert Gottfried',
        Speciality: 'Marketing Head',
        Department: '01/02/2021',
        Appointments: 'USA',
        ScheduledAppointments: 'Carson',
        AppointmentsStatus:
            avatar2,
    },
    {
        DoctorID: 5,
        DoctorName: 'Omar Darobe',
        Speciality: 'HR',
        Department: '01/02/2021',
        Appointments: 'USA',
        ScheduledAppointments: 'Carson',
        AppointmentsStatus:
            avatar,
    },
    {
        DoctorID: 4,
        DoctorName: 'Penjani Inyene',
        Speciality: 'Marketing Head',
        Department: '01/02/2021',
        Appointments: 'USA',
        ScheduledAppointments: 'Carson',
        AppointmentsStatus:
            avatar,
    },
    {
        DoctorID: 5,
        DoctorName: 'Miron Vitold',
        Speciality: 'HR',
        Department: '01/02/2021',
        Appointments: 'USA',
        ScheduledAppointments: 'Carson',
        AppointmentsStatus:
            avatar2,
    },
    {
        DoctorID: 1,
        DoctorName: 'Nancy Davolio',
        Speciality: 'Sales Representative',
        Department: '01/02/2021',
        Appointments: 'USA',
        ScheduledAppointments: 'Carson',
        AppointmentsStatus:
            avatar2,

    },
    {
        DoctorID: 2,
        DoctorName: 'Nasimiyu Danai',
        Speciality: 'Marketing Head',
        Department: '01/02/2021',
        Appointments: 'USA',
        ScheduledAppointments: 'Carson',
        AppointmentsStatus:
            avatar3,
    },
    {
        DoctorID: 3,
        DoctorName: 'Iulia Albu',
        Speciality: 'HR',
        Department: '01/02/2021',
        Appointments: 'USA',
        ScheduledAppointments: 'Carson',
        AppointmentsStatus:
            avatar4,
    },
    {
        DoctorID: 4,
        DoctorName: 'Siegbert Gottfried',
        Speciality: 'Marketing Head',
        Department: '01/02/2021',
        Appointments: 'USA',
        ScheduledAppointments: 'Carson',
        AppointmentsStatus:
            avatar2,
    },
    {
        DoctorID: 5,
        DoctorName: 'Omar Darobe',
        Speciality: 'HR',
        Department: '01/02/2021',
        Appointments: 'USA',
        ScheduledAppointments: 'Carson',
        AppointmentsStatus:
            avatar,
    },
    {
        DoctorID: 4,
        DoctorName: 'Penjani Inyene',
        Speciality: 'Marketing Head',
        Department: '01/02/2021',
        Appointments: 'USA',
        ScheduledAppointments: 'Carson',
        AppointmentsStatus:
            avatar,
    },
    {
        DoctorID: 5,
        DoctorName: 'Miron Vitold',
        Speciality: 'HR',
        Department: '01/02/2021',
        Appointments: 'USA',
        ScheduledAppointments: 'Carson',
        AppointmentsStatus:
            avatar2,
    },
    {
        DoctorID: 1,
        DoctorName: 'Nancy Davolio',
        Speciality: 'Sales Representative',
        Department: '01/02/2021',
        Appointments: 'USA',
        ScheduledAppointments: 'Carson',
        AppointmentsStatus:
            avatar2,

    },
    {
        DoctorID: 2,
        DoctorName: 'Nasimiyu Danai',
        Speciality: 'Marketing Head',
        Department: '01/02/2021',
        Appointments: 'USA',
        ScheduledAppointments: 'Carson',
        AppointmentsStatus:
            avatar3,
    },
    {
        DoctorID: 3,
        DoctorName: 'Iulia Albu',
        Speciality: 'HR',
        Department: '01/02/2021',
        Appointments: 'USA',
        ScheduledAppointments: 'Carson',
        AppointmentsStatus:
            avatar4,
    },
    {
        DoctorID: 4,
        DoctorName: 'Siegbert Gottfried',
        Speciality: 'Marketing Head',
        Department: '01/02/2021',
        Appointments: 'USA',
        ScheduledAppointments: 'Carson',
        AppointmentsStatus:
            avatar2,
    },
    {
        DoctorID: 5,
        DoctorName: 'Omar Darobe',
        Speciality: 'HR',
        Department: '01/02/2021',
        Appointments: 'USA',
        ScheduledAppointments: 'Carson',
        AppointmentsStatus:
            avatar,
    },
    {
        DoctorID: 4,
        DoctorName: 'Penjani Inyene',
        Speciality: 'Marketing Head',
        Department: '01/02/2021',
        Appointments: 'USA',
        ScheduledAppointments: 'Carson',
        AppointmentsStatus:
            avatar,
    },
    {
        DoctorID: 5,
        DoctorName: 'Miron Vitold',
        Speciality: 'HR',
        Department: '01/02/2021',
        Appointments: 'USA',
        ScheduledAppointments: 'Carson',
        AppointmentsStatus:
            avatar2,
    },
];



/*export const patientsData = [
    {
        PatientID: 1001,
        PatientName: 'Nirav Joshi',
        PatientEmail: 'nirav@gmail.com',
        PatientImage: avatar2,
        PatientCase: 'Hosting Press HTML',
        Status: 'Active',
        StatusBg: '#8BE78B',
        Appointments: '40',
        Billed: '400',
        Location: 'India',
    },
    {
        PatientID: 1002,

        PatientName: 'Sunil Joshi',
        PatientEmail: 'sunil@gmail.com',
        PatientCase: 'Elite Admin',
        Status: 'Active',
        PatientImage:
            avatar3,

        StatusBg: '#8BE78B',
        Appointments: '11',
        Billed: '$3.9k',
        Location: 'India',
    },
    {
        PatientID: 1003,

        PatientName: 'Andrew McDownland',
        PatientEmail: 'andrew@gmail.com',
        PatientCase: 'Real Homes WP Theme',
        Status: 'Pending',
        PatientImage:
            avatar4,
        StatusBg: '#FEC90F',
        Appointments: '19',
        Billed: '$24.5k',
        Location: 'USA',
    },
    {
        PatientID: 1004,

        PatientName: 'Christopher Jamil',
        PatientEmail: 'jamil@gmail.com',
        PatientCase: 'MedicalPro WP Theme',
        Status: 'Completed',
        PatientImage:
            avatar,
        StatusBg: '#8BE78B',
        Appointments: '34',
        Billed: '$16.5k',
        Location: 'USA',
    },
    {
        PatientID: 1005,

        PatientName: 'Michael',
        PatientEmail: 'michael@gmail.com',
        PatientCase: 'Weekly WP Theme',
        Status: 'Cancel',
        PatientImage:
            avatar2,
        StatusBg: 'red',
        Appointments: '34',
        Billed: '$16.5k',
        Location: 'USA',
    },
    {
        PatientID: 1006,
        PatientName: 'Nirav Joshi',
        PatientEmail: 'nirav@gmail.com',
        PatientImage:
            avatar2,
        PatientCase: 'Hosting Press HTML',
        Status: 'Active',
        StatusBg: '#8BE78B',
        Appointments: '40',
        Billed: '$2.4k',
        Location: 'India',
    },
    {
        PatientID: 1007,

        PatientName: 'Sunil Joshi',
        PatientEmail: 'sunil@gmail.com',
        PatientCase: 'Elite Admin',
        Status: 'Active',
        PatientImage:
            avatar3,

        StatusBg: '#8BE78B',
        Appointments: '11',
        Billed: '$3.9k',
        Location: 'India',
    },
    {
        PatientID: 1008,

        PatientName: 'Andrew McDownland',
        PatientEmail: 'andrew@gmail.com',
        PatientCase: 'Real Homes WP Theme',
        Status: 'Pending',
        PatientImage:
            avatar4,
        StatusBg: '#FEC90F',
        Appointments: '19',
        Billed: '$24.5k',
        Location: 'USA',
    },
    {
        PatientID: 1009,

        PatientName: 'Christopher Jamil',
        PatientEmail: 'jamil@gmail.com',
        PatientCase: 'MedicalPro WP Theme',
        Status: 'Completed',
        PatientImage:
            avatar,
        StatusBg: '#8BE78B',
        Appointments: '34',
        Billed: '$16.5k',
        Location: 'USA',
    },
    {
        PatientID: 1010,

        PatientName: 'Michael',
        PatientEmail: 'michael@gmail.com',
        PatientCase: 'Weekly WP Theme',
        Status: 'Cancel',
        PatientImage:
            avatar2,
        StatusBg: 'red',
        Appointments: '34',
        Billed: '$16.5k',
        Location: 'USA',
    },
    {
        PatientID: 1011,
        PatientName: 'Nirav Joshi',
        PatientEmail: 'nirav@gmail.com',
        PatientImage:
            avatar2,
        PatientCase: 'Hosting Press HTML',
        Status: 'Active',
        StatusBg: '#8BE78B',
        Appointments: '40',
        Billed: '$2.4k',
        Location: 'India',
    },
    {
        PatientID: 1012,

        PatientName: 'Sunil Joshi',
        PatientEmail: 'sunil@gmail.com',
        PatientCase: 'Elite Admin',
        Status: 'Active',
        PatientImage:
            avatar3,

        StatusBg: '#8BE78B',
        Appointments: '11',
        Billed: '$3.9k',
        Location: 'India',
    },
    {
        PatientID: 1013,

        PatientName: 'Andrew McDownland',
        PatientEmail: 'andrew@gmail.com',
        PatientCase: 'Real Homes WP Theme',
        Status: 'Pending',
        PatientImage:
            avatar4,
        StatusBg: '#FEC90F',
        Appointments: '19',
        Billed: '$24.5k',
        Location: 'USA',
    },
    {
        PatientID: 1014,

        PatientName: 'Christopher Jamil',
        PatientEmail: 'jamil@gmail.com',
        PatientCase: 'MedicalPro WP Theme',
        Status: 'Completed',
        PatientImage:
            avatar,
        StatusBg: '#8BE78B',
        Appointments: '34',
        Billed: '$16.5k',
        Location: 'USA',
    },
    {
        PatientID: 1015,

        PatientName: 'Michael',
        PatientEmail: 'michael@gmail.com',
        PatientCase: 'Weekly WP Theme',
        Status: 'Cancel',
        PatientImage:
            avatar2,
        StatusBg: 'red',
        Appointments: '34',
        Billed: '$16.5k',
        Location: 'USA',
    },
    {
        PatientID: 1016,
        PatientName: 'Nirav Joshi',
        PatientEmail: 'nirav@gmail.com',
        PatientImage:
            avatar2,
        PatientCase: 'Hosting Press HTML',
        Status: 'Active',
        StatusBg: '#8BE78B',
        Appointments: '40',
        Billed: '$2.4k',
        Location: 'India',
    },
    {
        PatientID: 1017,

        PatientName: 'Sunil Joshi',
        PatientEmail: 'sunil@gmail.com',
        PatientCase: 'Elite Admin',
        Status: 'Active',
        PatientImage:
            avatar3,

        StatusBg: '#8BE78B',
        Appointments: '11',
        Billed: '$3.9k',
        Location: 'India',
    },
    {
        PatientID: 1018,

        PatientName: 'Andrew McDownland',
        PatientEmail: 'andrew@gmail.com',
        PatientCase: 'Real Homes WP Theme',
        Status: 'Pending',
        PatientImage:
            avatar4,
        StatusBg: '#FEC90F',
        Appointments: '19',
        Billed: '$24.5k',
        Location: 'USA',
    },
    {
        PatientID: 1019,

        PatientName: 'Christopher Jamil',
        PatientEmail: 'jamil@gmail.com',
        PatientCase: 'MedicalPro WP Theme',
        Status: 'Completed',
        PatientImage:
            avatar,
        StatusBg: '#8BE78B',
        Appointments: '34',
        Billed: '$16.5k',
        Location: 'USA',
    },
    {
        PatientID: 1020,

        PatientName: 'Michael',
        PatientEmail: 'michael@gmail.com',
        PatientCase: 'Weekly WP Theme',
        Status: 'Cancel',
        PatientImage:
            avatar2,
        StatusBg: 'red',
        Appointments: '34',
        Billed: '$16.5k',
        Location: 'USA',
    },
    {
        PatientID: 1021,
        PatientName: 'Nirav Joshi',
        PatientEmail: 'nirav@gmail.com',
        PatientImage:
            avatar2,
        PatientCase: 'Hosting Press HTML',
        Status: 'Active',
        StatusBg: '#8BE78B',
        Appointments: '40',
        Billed: '$2.4k',
        Location: 'India',
    },
    {
        PatientID: 1022,

        PatientName: 'Sunil Joshi',
        PatientEmail: 'sunil@gmail.com',
        PatientCase: 'Elite Admin',
        Status: 'Active',
        PatientImage:
            avatar3,

        StatusBg: '#8BE78B',
        Appointments: '11',
        Billed: '$3.9k',
        Location: 'India',
    },
    {
        PatientID: 1023,

        PatientName: 'Andrew McDownland',
        PatientEmail: 'andrew@gmail.com',
        PatientCase: 'Real Homes WP Theme',
        Status: 'Pending',
        PatientImage:
            avatar4,
        StatusBg: '#FEC90F',
        Appointments: '19',
        Billed: '$24.5k',
        Location: 'USA',
    },
    {
        PatientID: 1024,

        PatientName: 'Christopher Jamil',
        PatientEmail: 'jamil@gmail.com',
        PatientCase: 'MedicalPro WP Theme',
        Status: 'Completed',
        PatientImage:
            avatar,
        StatusBg: '#8BE78B',
        Appointments: '34',
        Billed: '$16.5k',
        Location: 'USA',
    },
    {
        PatientID: 1025,

        PatientName: 'Michael',
        PatientEmail: 'michael@gmail.com',
        PatientCase: 'Weekly WP Theme',
        Status: 'Cancel',
        PatientImage:
            avatar2,
        StatusBg: 'red',
        Appointments: '34',
        Billed: '$16.5k',
        Location: 'USA',
    },
    {
        PatientID: 1026,
        PatientName: 'Nirav Joshi',
        PatientEmail: 'nirav@gmail.com',
        PatientImage:
            avatar2,
        PatientCase: 'Hosting Press HTML',
        Status: 'Active',
        StatusBg: '#8BE78B',
        Appointments: '40',
        Billed: '$2.4k',
        Location: 'India',
    },
    {
        PatientID: 1027,

        PatientName: 'Sunil Joshi',
        PatientEmail: 'sunil@gmail.com',
        PatientCase: 'Elite Admin',
        Status: 'Active',
        PatientImage:
            avatar3,

        StatusBg: '#8BE78B',
        Appointments: '11',
        Billed: '$3.9k',
        Location: 'India',
    },
    {
        PatientID: 1028,

        PatientName: 'Andrew McDownland',
        PatientEmail: 'andrew@gmail.com',
        PatientCase: 'Real Homes WP Theme',
        Status: 'Pending',
        PatientImage:
            avatar4,
        StatusBg: '#FEC90F',
        Appointments: '19',
        Billed: '$24.5k',
        Location: 'USA',
    },
    {
        PatientID: 1029,

        PatientName: 'Christopher Jamil',
        PatientEmail: 'jamil@gmail.com',
        PatientCase: 'MedicalPro WP Theme',
        Status: 'Completed',
        PatientImage:
            avatar,
        StatusBg: '#8BE78B',
        Appointments: '34',
        Billed: '$16.5k',
        Location: 'USA',
    },
    {
        PatientID: 1030,

        PatientName: 'Michael',
        PatientEmail: 'michael@gmail.com',
        PatientCase: 'Weekly WP Theme',
        Status: 'Cancel',
        PatientImage:
            avatar2,
        StatusBg: 'red',
        Appointments: '34',
        Billed: '$16.5k',
        Location: 'USA',
    },
    {
        PatientID: 1031,
        PatientName: 'Nirav Joshi',
        PatientEmail: 'nirav@gmail.com',
        PatientImage:
            avatar2,
        PatientCase: 'Hosting Press HTML',
        Status: 'Active',
        StatusBg: '#8BE78B',
        Appointments: '40',
        Billed: '$2.4k',
        Location: 'India',
    },
    {
        PatientID: 1032,

        PatientName: 'Sunil Joshi',
        PatientEmail: 'sunil@gmail.com',
        PatientCase: 'Elite Admin',
        Status: 'Active',
        PatientImage:
            avatar3,

        StatusBg: '#8BE78B',
        Appointments: '11',
        Billed: '$3.9k',
        Location: 'India',
    },
    {
        PatientID: 1033,

        PatientName: 'Andrew McDownland',
        PatientEmail: 'andrew@gmail.com',
        PatientCase: 'Real Homes WP Theme',
        Status: 'Pending',
        PatientImage:
            avatar4,
        StatusBg: '#FEC90F',
        Appointments: '19',
        Billed: '$24.5k',
        Location: 'USA',
    },
    {
        PatientID: 1034,

        PatientName: 'Christopher Jamil',
        PatientEmail: 'jamil@gmail.com',
        PatientCase: 'MedicalPro WP Theme',
        Status: 'Completed',
        PatientImage:
            avatar,
        StatusBg: '#8BE78B',
        Appointments: '34',
        Billed: '$16.5k',
        Location: 'USA',
    },
    {
        PatientID: 1035,

        PatientName: 'Michael',
        PatientEmail: 'michael@gmail.com',
        PatientCase: 'Weekly WP Theme',
        Status: 'Cancel',
        PatientImage:
            avatar2,
        StatusBg: 'red',
        Appointments: '34',
        Billed: '$16.5k',
        Location: 'USA',
    },
    {
        PatientID: 1036,
        PatientName: 'Nirav Joshi',
        PatientEmail: 'nirav@gmail.com',
        PatientImage:
            avatar2,
        PatientCase: 'Hosting Press HTML',
        Status: 'Active',
        StatusBg: '#8BE78B',
        Appointments: '40',
        Billed: '$2.4k',
        Location: 'India',
    },
    {
        PatientID: 1037,

        PatientName: 'Sunil Joshi',
        PatientEmail: 'sunil@gmail.com',
        PatientCase: 'Elite Admin',
        Status: 'Active',
        PatientImage:
            avatar3,

        StatusBg: '#8BE78B',
        Appointments: '11',
        Billed: '$3.9k',
        Location: 'India',
    },
    {
        PatientID: 1038,

        PatientName: 'Andrew McDownland',
        PatientEmail: 'andrew@gmail.com',
        PatientCase: 'Real Homes WP Theme',
        Status: 'Pending',
        PatientImage:
            avatar4,
        StatusBg: '#FEC90F',
        Appointments: '19',
        Billed: '$24.5k',
        Location: 'USA',
    },
    {
        PatientID: 1039,
        PatientName: 'Christopher Jamil',
        PatientEmail: 'jamil@gmail.com',
        PatientCase: 'MedicalPro WP Theme',
        Status: 'Completed',
        PatientImage:
            avatar,
        StatusBg: '#8BE78B',
        Appointments: '34',
        Billed: '$16.5k',
        Location: 'USA',
    },
    {
        PatientID: 1040,
        PatientName: 'Michael',
        PatientEmail: 'michael@gmail.com',
        PatientCase: 'Weekly WP Theme',
        Status: 'Cancel',
        PatientImage:
            avatar2,
        StatusBg: 'red',
        Appointments: '34',
        Billed: '$16.5k',
        Location: 'USA',
    },

]; */