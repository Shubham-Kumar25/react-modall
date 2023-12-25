// Dropdowns.js
import React from "react";
import Select from "react-select";

const generateDummyOptions = () => {
  const dummyOptions = [];
  for (let i = 1; i <= 4; i++) {
    dummyOptions.push({ value: `option${i}`, label: `Option ${i}` });
  }
  return dummyOptions;
};

const createDropdown = (label, defaultValue) => (
  <div key={label} className="p-4 rounded">
    <Select
      options={generateDummyOptions()}
      defaultValue={defaultValue}
      className="mt-1"
      styles={{
        control: (provided) => ({
          ...provided,
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          backgroundColor: "#F0F8FF",
        }),
        menu: (provided) => ({
          ...provided,
          backgroundColor: "#F0F8FF",
        }),
      }}
    />
  </div>
);

const options = [
  { value: "employee", label: "Employee" },
  { value: "branch", label: "Branch" },
  { value: "dept", label: "Dept/Site" },
  { value: "name", label: "Name" },
  { value: "email", label: "Email ID" },
  { value: "status", label: "Status" },
];

const defaultValues = options.map((option) => ({
  value: option.value,
  label: option.label,
}));

const Dropdowns = () => {
  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {options.map((option, index) =>
          createDropdown(option.label, defaultValues[index])
        )}
      </div>
    </div>
  );
};

export default Dropdowns;
