import React from 'react';
import { IconUser, IconCalendar } from '../components/Icons';

const ProfilePage: React.FC = () => {
  // Fix: Add onFocus and onBlur to InputField props to handle events for date inputs.
  const InputField: React.FC<{
    label: string;
    type: string;
    id: string;
    placeholder?: string;
    icon?: React.ReactNode;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  }> = ({ label, type, id, placeholder, icon, onFocus, onBlur }) => (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="mt-1 relative rounded-md shadow-sm">
        {icon && (
          <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
             {icon}
          </div>
        )}
        <input
          type={type}
          id={id}
          className={`block w-full border-gray-300 rounded-md focus:ring-[#800000] focus:border-[#800000] sm:text-sm ${icon ? 'pl-10' : 'px-3'}`}
          placeholder={placeholder}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-serif text-gray-800">My Profile</h1>
            <p className="mt-2 text-gray-500">Complete your profile to personalize your experience.</p>
          </div>

          <form onSubmit={e => e.preventDefault()} className="space-y-10">
            {/* Personal Details */}
            <div className="border-b border-gray-200 pb-8">
              <h2 className="text-2xl font-serif text-[#800000] mb-6">Personal Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField label="First Name" type="text" id="firstName" placeholder="Jane" />
                <InputField label="Last Name" type="text" id="lastName" placeholder="Doe" />
                <InputField label="Email Address" type="email" id="email" placeholder="jane.doe@example.com" />
                <InputField label="Phone Number" type="tel" id="phone" placeholder="+1 (555) 123-4567" />
                <InputField label="Date of Birth" type="text" onFocus={(e) => (e.target.type = 'date')} onBlur={(e) => (e.target.type = 'text')} id="dob" placeholder="Select your birth date" icon={<IconCalendar className="h-5 w-5 text-gray-400" />} />
                <InputField label="Anniversary Date" type="text" onFocus={(e) => (e.target.type = 'date')} onBlur={(e) => (e.target.type = 'text')} id="anniversary" placeholder="Select your anniversary" icon={<IconCalendar className="h-5 w-5 text-gray-400" />} />
              </div>
            </div>

            {/* Address Details */}
            <div className="border-b border-gray-200 pb-8">
              <h2 className="text-2xl font-serif text-[#800000] mb-6">Address Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                    <InputField label="Address Line 1" type="text" id="address1" placeholder="123 Jewel St" />
                </div>
                <div className="md:col-span-2">
                    <InputField label="Address Line 2" type="text" id="address2" placeholder="Apt 4B" />
                </div>
                <InputField label="City" type="text" id="city" placeholder="New York" />
                <InputField label="State / Province" type="text" id="state" placeholder="NY" />
                <InputField label="Zip / Postal Code" type="text" id="zip" placeholder="10001" />
                <InputField label="Country" type="text" id="country" placeholder="United States" />
              </div>
            </div>

            {/* Preferences */}
            <div>
              <h2 className="text-2xl font-serif text-[#800000] mb-6">Communication Preferences</h2>
              <div className="space-y-4">
                <label className="flex items-center">
                  <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-[#800000] focus:ring-[#800000]" />
                  <span className="ml-3 text-sm text-gray-600">Receive promotional emails and offers.</span>
                </label>
                 <label className="flex items-center">
                  <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-[#800000] focus:ring-[#800000]" />
                  <span className="ml-3 text-sm text-gray-600">Receive order updates via SMS.</span>
                </label>
              </div>
            </div>

            {/* Save Button */}
            <div className="pt-6 text-right">
              <button
                type="submit"
                className="inline-flex justify-center py-3 px-8 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#800000] hover:bg-[#660000] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#800000] transition-colors"
              >
                Save Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;