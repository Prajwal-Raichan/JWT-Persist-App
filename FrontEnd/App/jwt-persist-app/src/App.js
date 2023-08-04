import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PatientsManifest from "./Components/Shared/Patient/PatientsManifest";
import DoctorsManifest from "./Components/Shared/Doctor/DoctorsManifest";
import LoginPage from './Components/Common/LoginPage';
import UserRegistration from './Components/Common/UserRegistration'
import Admin from './Components/Shared/Admin';
import Home from './Components/Shared/Home';
import Settings from './Pages/Settings';
import ProtectedRoute from './Auth/ProtectedRoute';
import PersistLogin from './Auth/PersistLogin';
import useAuth from "./hooks/useAuth";
import { useStateAuthContext } from "./Contexts/ContextAuthProvider";
import AdminActions from './Components/Shared/Doctor/AdminActions';
import Missing from './Components/Common/Missing';
import Unauthorized from './Components/Common/Unauthorized';
import GetAllUsers from "./Components/Services/GetAllUsers";

const ROLES = {
  'admin':  'admin',
  'customer': 'customer',
}


function App() {
  
  const {auth}=useAuth();

  const { userRole } = useStateAuthContext();
 
  //console.log("AccessToken for Auth in Main App: " + auth?.accessToken);
  //console.log("UserRole in Main App: " + userRole);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<UserRegistration />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dd" element={<DoctorsManifest />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="*" element={<Missing />} />

          <Route element={<PersistLogin />}> 
          <Route path="/dashboard" element={<ProtectedRoute  allowedRoles={[ROLES.admin,ROLES.customer]}>
                                              <Settings />
                                            </ProtectedRoute>
                                           }>
          <Route path="doctors" element={<ProtectedRoute allowedRoles={[ROLES.admin]}>
                                              <DoctorsManifest />
                                            </ProtectedRoute>
                                        }/>
          <Route path="addDoctor" element={<ProtectedRoute allowedRoles={[ROLES.admin]}>
                                              <AdminActions />
                                            </ProtectedRoute>
                                            }/>
          <Route path="patients" element={<ProtectedRoute allowedRoles={[ROLES.admin]}>
                                              <PatientsManifest />
                                            </ProtectedRoute>
                                            }/>
          <Route path="getAllUsers" element={<ProtectedRoute allowedRoles={[ROLES.admin]}>
                                              <GetAllUsers />
                                            </ProtectedRoute>
                                            }/>                                
            <Route path="customers" element={<UserRegistration />} />                       
           </Route>
           </Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;

