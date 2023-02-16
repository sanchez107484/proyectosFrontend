import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import CustomSpinner from "../../utils/CustomSpinner";
import customStyles from "../../styles/CustomStyles";
import paginationComponentOptions from "../../utils/paginationComponentOptions";
import columns from "./data/columns";

const Table = () => {
  const [data, setData] = useState([]);
  const [pending, setPending] = React.useState(true);
  const [filteredData, setFilteredData] = useState(data);
  const [searchValue, setSearchValue] = useState("");
  const searchInputRef = useRef(null);
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:4000/LISTADO");
      setData(result.data);
    };
    console.log("LUISFER useEffect 1");
    fetchData();
  }, []);

  useEffect(() => {
    console.log("LUISFER useEffect 2",searchValue);
		const timeout = setTimeout(() => {
      if (searchValue === ""){
        setFilteredData(data);
      }
			setPending(false);
		}, 2000);
		return () => clearTimeout(timeout);
	});

  useEffect(() => {
    console.log("LUISFER useEffect 3");
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  const handleFilter = (value) => {
    console.log("LUISFER handleFilter");
    if (value !== "") {
      const filtered = data.filter((item) => {
        return Object.values(item).some((prop) => {
          if (prop !== null && prop !== undefined) {
            return prop.toString().toLowerCase().includes(value.toLowerCase());
          }
          return "";
        });
      });
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  };

  const handleSearch = (e) => {
    console.log("LUISFER handleSearch");
    const value = e.target.value;
    setSearchValue(value);
    handleFilter(value);
  };
  

  

/* const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>; 

expandableRows
          expandableRowsComponent={ExpandedComponent}

*/
  

  return (
    
      <div>
      
        <input
            type="text"
            ref={searchInputRef}
            value={searchValue}
            onChange={handleSearch}
            onKeyUp={handleSearch}
            placeholder="Search..."
          />
        
        <DataTable
          title="Listado proyectos"
          columns={columns}
          data={filteredData}
          progressPending={pending}
          progressComponent={<CustomSpinner />}
          pagination
          paginationComponentOptions={paginationComponentOptions}
          striped={true}
          responsive={true}
          bordered={true}
          customStyles={customStyles}
          highlightOnHover
          pointerOnHover
          fixedHeader
          fixedHeaderScrollHeight="800px"
        /> 
      
      </div>
      
      
  );
  
};

export default Table;
