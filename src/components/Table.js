import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import CustomLoader from "../utils/CustomLoader";
import customStyles from "../utils/CustomStyles";

const Table = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [pending, setPending] = React.useState(true);
  const [rows, setRows] = React.useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:4000/LISTADO");
      setData(result.data);
    };

    fetchData();
  }, []);

  useEffect(() => {
		const timeout = setTimeout(() => {
			setRows(data);
			setPending(false);
		}, 2000);
		return () => clearTimeout(timeout);
	});

  const filteredData = data.filter(item => {
      if (item.TRABAJO != null)
        item.TRABAJO.toLowerCase().includes(search.toLowerCase());
    }
  );

  const handleSearch = e => setSearch(e.target.value);

  const columns = [
    {
      name: 'Actions',
      cell: row => (
        <button onClick={() => alert(`Editing ${row.CROQUIS}`)}>Edit</button>
      ),
      ignoreRowClick: true,
    },
    {
      name: 'CROQUIS',
      selector: row => row['CROQUIS'],
      sortable: true,
    },
    {
      name: 'PROYECTOS',
      selector: row => row['PROYECTOS'],
      sortable: true,
    },
    {
      name: 'TRABAJO',
      selector: row => row['TRABAJO'],
      sortable: true,
    },
    {
      name: 'MOTE',
      selector: row => row['Mote'],
      sortable: true,
    },
    {
      name: 'PROMOTOR',
      selector: row => row['Promotor'],
      sortable: true,
    },
    {
      name: 'SITUACION',
      selector: row => row['Situacion'],
      sortable: true,
    },
    {
      name: 'LOCALIDAD',
      selector: row => row['Localidad'],
      sortable: true,
    },
    {
      name: 'TELEFONO',
      selector: row => row['Telefono'],
      sortable: true,
    },
    
  ];

  const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

  
const paginationComponentOptions = {
  rowsPerPageText: 'Filas por página',
  rangeSeparatorText: 'de',
  selectAllRowsItem: true,
  selectAllRowsItemText: 'Todos',
};

  return (
    <div>
      <input 
        type="text"
        placeholder='Buscar...'
        value={search}
        onChange={handleSearch}
        />
    
    <DataTable
      title="Listado proyectos"
      columns={columns}
      data={data}
      progressPending={pending}
  	  progressComponent={<CustomLoader />}
      pagination
      paginationComponentOptions={paginationComponentOptions}
      
      responsive={true}
      bordered={true}
      expandableRows
      expandableRowsComponent={ExpandedComponent}
      customStyles={customStyles}
  		highlightOnHover
	  	pointerOnHover
      orderCellsTop={true}
      fixedHeader={true}
    />
    </div>
  );
};

export default Table;
