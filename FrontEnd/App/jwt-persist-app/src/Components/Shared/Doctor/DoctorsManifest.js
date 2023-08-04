import React, { useEffect, useState } from 'react';
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Edit, Search, Page, Toolbar } from '@syncfusion/ej2-react-grids';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
import { useNavigate, useLocation } from 'react-router';
import { DashboardHeader } from '../Dashboard';
import { doctorsGrid } from '../../../Resources/Resources';
import axios from '../../../Api/axios'

const GET_URL = "/getDoctorsManifest";

const DoctorsManifest = () => {
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const location = useLocation();
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ['Delete', 'Search'];
  const editing = { allowDeleting: true, allowEditing: true };
  const [doctorsData, setDoctorsData] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const fetchDoctorsManifest = async () => {
      try {
        const response = await axiosPrivate.get(GET_URL);

        if (isMounted) {
          setDoctorsData(response.data);
          console.log(response.data);
        }
      } catch (error) {
        console.log('Error fetching patient data:', error);
        navigate('/', { state: { from: location }, replace: true });
      }
    };

    fetchDoctorsManifest();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <DashboardHeader category="Page" title="Doctors" />
      <GridComponent
        dataSource={doctorsData}
        allowPaging
        allowSorting
        pageSettings={{ pageCount: 5 }}
        editSettings={editing}
        selectionSettings={selectionsettings}
        toolbar={toolbarOptions}
        width="auto"
      >
        <ColumnsDirective>
          {doctorsGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Search, Edit, Page, Toolbar]} />
      </GridComponent>
    </div>
  );
};

export default DoctorsManifest;








