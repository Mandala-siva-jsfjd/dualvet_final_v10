import React, { useState } from 'react';
import Select from 'react-select';
import ItiReport from '../pages/Reports/ItiReport';
import IndustryRepost from '../pages/Reports/IndustryReport';
import IPTReport from '../pages/Reports/InplantTriningReport';

const Setting = () => {
  // Set the default selected option to ItiReport
  const [selectedOption, setSelectedOption] = useState({ value: 'itiReport', label: 'ITI Report' });

  const options = [
    { value: 'itiReport', label: 'ITI Report' },
    { value: 'industryRepost', label: 'Industry Repost' },
    { value: 'iptReport', label: 'IPT Report' },
  ];

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    console.log('Selected option:', selectedOption);
  };

  // Content to display based on selection
  const renderSelectedContent = () => {
    switch (selectedOption?.value) {
      case 'itiReport':
        return <ItiReport />;
      case 'industryRepost':
        return <IndustryRepost />;
      case 'iptReport':
        return <IPTReport />;
      default:
        return <div>Select an option to view content</div>;
    }
  };

  return (
    <div>
      <h2><center>Reports</center></h2><br />
  
      <Select
        id="dropdown"
        options={options}
        onChange={handleChange}
        value={selectedOption} // Ensure default selection is applied
        placeholder="Select an option"
        //isClearable={true}
      />

      {/* Display content based on selection */}
      <div style={{ marginTop: '10px' }}>
        {renderSelectedContent()}
      </div>
    </div>
  );
};

export default Setting;
