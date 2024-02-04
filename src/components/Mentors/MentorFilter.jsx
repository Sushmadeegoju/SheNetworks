import React from 'react'
import data from "../../mentorData.json"


const filters = {
    department: ['Engineering', 'Science', 'Business', 'Liberal Arts', 'Other'],
  };

const MentorFilter = () => {
    const [selectedFilters, setSelectedFilters] = useState({
        department: null,
      });

    //   const handleFilterChange = (filterType, value) => {
    //     setSelectedFilters((prevFilters) => ({
    //       ...prevFilters,
    //       [filterType]: value,
    //     }));
    //   };

    //   const filteredDepartments = data.filter((mentor) => {
    //     const isDepartmentMatch =
    //       !selectedFilters.mentor || mentor.department === filters.department;
    //     return isDepartmentMatch;
    //   });


      return (

        <h2>Departments</h2>
    //     <div className="mentor-page-container">
            
    //       {/* <div className="filters-container">
    //         <h2>Filters</h2>
    //         <div className="filter-section">
    //           <label>Department:</label>
    //           <select
    //             value={selectedFilters.department || ''}
    //             onChange={(e) => handleFilterChange('department', e.target.value)}
    //           >
    //             <option value="">All Departments</option>
    //             {sampleFilters.department.map((dept) => (
    //               <option key={dept} value={dept}>
    //                 {dept}
    //               </option>
    //             ))}
    //           </select>
    //         </div>
    //       </div>

    //       <div className='filtered-data'>
    //       {filteredDepartments.map((mentor) => (
    //             <div key={mentor.firstName}>{}</div>
    //             ))}
    //       </div> */}

          

    //       {/* <div className="filtered-data">
    //         {filteredDepartments.map((mentor) => (
    //             <div key={mentor.id}>{}</div>
    //             ))}
    //      </div> */}
    //     </div>
      );
}

export default MentorFilter
