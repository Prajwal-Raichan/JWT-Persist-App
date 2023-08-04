import React, { useEffect, useState } from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';
import { customersData, customersGrid } from '../../data/dummy';
import { employeesData,employeesGrid } from '../../data/dummy';
import { patientsGrid } from '../../../Resources/Resources';
import axios from 'axios';

import { DashboardHeader } from '../Dashboard';

const PatientsManifest = () => {

    const selectionsettings = { persistSelection: true };
    const toolbarOptions = ['Delete', 'Search'];
    const editing = { allowDeleting: true, allowEditing: true };
    const [patientsData, setPatientsData] = useState([]);

    useEffect(() => {
        fetchPatientManifest();
    }, []);



    const fetchPatientManifest = () => {
        axios.get('http://localhost:4300/api/getPatientManifest')
            .then(response => {
                setPatientsData(response.data);
                console.log(response.data);
            })
            .catch(error => console.log('Error fetching patient data:', error));
    }


    return (

        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
            <DashboardHeader category="Page" title="Patients" />
            <GridComponent
                dataSource={employeesData}
                enableHover={false}
                allowPaging
                pageSettings={{ pageCount: 5 }}
                selectionSettings={selectionsettings}
                toolbar={toolbarOptions}
                editSettings={editing}
                allowSorting
            >
                <ColumnsDirective>

                    {employeesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
                </ColumnsDirective>
                <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
            </GridComponent>
        </div>

    )
}

export default PatientsManifest

