// Modal.js
import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";

const Modal = ({ isOpen, onClose, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-hidden bg-black bg-opacity-50">
      <div className="relative w-1/2 h-full p-6 overflow-y-scroll bg-white rounded-lg">
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-2xl text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            &#10006;
          </button>
        </div>
        <div className="mt-4">
          <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
          <hr className="my-4 border-t border-gray-300" />

          <div className="flex items-center space-x-4">
            <select className="p-2 border rounded">
              <option value="employee">Employee #</option>
            </select>
            <button className="px-4 py-2 text-white transition duration-300 ease-in-out bg-indigo-400 rounded hover:bg-indigo-600">
              Fetch
            </button>
          </div>

          <form className="mt-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-600">
                  Employee Name
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="Enter employee name"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-600">
                  Status
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="Enter status"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-600">
                  Branch
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="Enter branch"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-600">
                  Department (Dept)
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="Enter department"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-600">
                  Site
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="Enter site"
                />
              </div>
            </div>
          </form>

          <div className="mt-6">
            <div className="flex space-x-4">
              <button className="px-4 py-2 text-white transition duration-300 ease-in-out bg-indigo-400 rounded-full hover:bg-indigo-600">
                OPAD
              </button>
              <button className="px-4 py-2 text-gray-700 transition duration-300 ease-in-out bg-gray-300 rounded-full hover:bg-gray-400">
                O365
              </button>
              <button className="px-4 py-2 text-gray-700 transition duration-300 ease-in-out bg-gray-300 rounded-full hover:bg-gray-400">
                Applications
              </button>
            </div>
          </div>

          <div className="mt-6">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="w-1/2 p-2 border">OU</th>
                  <th className="w-1/6 p-2 border">Active</th>
                  <th className="w-1/6 p-2 border">Status</th>
                  <th className="w-1/6 p-2 border">
                    <button className="text-center">
                      <IoMdAddCircle size={20} />
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border"></td>
                  <td className="p-2 text-center border">
                    <button className="text-red-500 hover:text-red-700">
                      <MdDeleteForever size={25} />
                    </button>
                  </td>
                  <td className="p-2 text-center border">Inactive</td>
                  <td className="p-2 border"></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex justify-end mt-4">
            <button className="px-4 py-2 mr-2 text-white transition duration-300 ease-in-out bg-indigo-400 rounded-full hover:bg-indigo-600">
              Save
            </button>
            <button className="px-4 py-2 text-gray-500 transition duration-300 ease-in-out border border-gray-500 rounded-full hover:text-gray-700">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
