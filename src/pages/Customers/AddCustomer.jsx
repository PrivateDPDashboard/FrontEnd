import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Input,
  Button,
  Textarea,
  Checkbox,
  Select,
  Option,
} from "@material-tailwind/react";
import { useDropzone } from "react-dropzone";

function AddCustomer() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    country: "",
    category: "",
    numberOfUsers: "",
    budget: "",
    activationDate: "",
    expiryDate: "",
    notes: "",
    image: null,
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleDrop = (acceptedFiles) => {
    setFormData((prevState) => ({ ...prevState, image: acceptedFiles[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.termsAccepted) {
      alert("Please accept the terms and conditions to proceed.");
      return;
    }
    console.log("Form Data Submitted:", formData);
    // Perform further actions, e.g., sending data to an API
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
    accept: "image/*",
    maxFiles: 1,
  });

  return (
    <div className="mt-12 mb-8">
      <Card className="w-full p-8">
        <CardBody className="p-6">
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            {/* First Row: Company Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Company Name */}
              <Input
                type="text"
                label="Company Name"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
                size="lg"
                className="w-full"
              />
              {/* Contact Person */}
              <Input
                type="text"
                label="Contact Person Name"
                name="contactPerson"
                value={formData.contactPerson}
                onChange={handleChange}
                required
                size="lg"
                className="w-full"
              />
            </div>

            {/* Second Row: Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email */}
              <Input
                type="email"
                label="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                size="lg"
                className="w-full"
              />
              {/* Phone Number */}
              <Input
                type="tel"
                label="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                size="lg"
                className="w-full"
              />
            </div>

            {/* Third Row: Country and Category */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Country */}
              <Input
                type="text"
                label="Country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                size="lg"
                className="w-full"
              />
              {/* Customer Category */}
              <Select
                label="Customer Category"
                name="category"
                value={formData.category}
                onChange={(value) =>
                  setFormData((prevState) => ({
                    ...prevState,
                    category: value,
                  }))
                }
                required
              >
                <Option>Enterprise</Option>
                <Option>Small Business</Option>
                <Option>Individual</Option>
              </Select>
            </div>

            {/* Fourth Row: Number of Users and Budget */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Number of Users */}
              <Input
                type="number"
                label="Number of Users"
                name="numberOfUsers"
                value={formData.numberOfUsers}
                onChange={handleChange}
                required
                size="lg"
                className="w-full"
              />
              {/* Budget */}
              <Input
                type="text"
                label="Budget Allocation"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
                size="lg"
                className="w-full"
              />
            </div>

            {/* Fifth Row: Dates */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Activation Date */}
              <Input
                type="date"
                label="Activation Date"
                name="activationDate"
                value={formData.activationDate}
                onChange={handleChange}
                required
                size="lg"
                className="w-full"
              />
              {/* Expiry Date */}
              <Input
                type="date"
                label="Expiry Date"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                required
                size="lg"
                className="w-full"
              />
            </div>

            {/* Drag-and-Drop Image Upload */}
            <div
              {...getRootProps()}
              className={`flex justify-center items-center border-2 border-dashed rounded-lg p-6 text-center cursor-pointer ${
                isDragActive
                  ? "border-pink-500 bg-pink-50"
                  : "border-gray-300 bg-gray-50"
              }`}
            >
              <input {...getInputProps()} />
              {formData.image ? (
                <Typography variant="small" className="text-gray-700">
                  Uploaded: {formData.image.name}
                </Typography>
              ) : (
                <Typography variant="small" className="text-gray-500">
                  Drag & drop an image here, or click to upload
                </Typography>
              )}
            </div>

            {/* Notes */}
            <Textarea
              label="Additional Notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows={5}
              size="lg"
              className="w-full"
            />

            {/* Terms and Conditions */}
            <Checkbox
              label="I accept the terms and conditions"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              required
            />

            {/* Submit Button */}
            <Button
              type="submit"
              variant="gradient"
              color="pink"
              className="w-full"
            >
              Submit
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}

export default AddCustomer;
