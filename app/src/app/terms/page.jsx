import React from 'react';

const TermsAndConditionsPage = () => {
  return (
    <div className=" text-gray-800 lg:pt-[0%] pt-[15%]  font-sans">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Terms and Conditions</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-md rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="mb-4">
              Welcome to our website. By accessing or using our website, you agree to be bound by these terms and conditions and our privacy policy.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Use of the Website</h2>
            <p className="mb-4">
              You may only use our website for lawful purposes and in accordance with these terms and conditions. You agree not to use the website in any way that may damage, disable, overburden, or impair it.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
            <p className="mb-4">
              All content on the website, including text, graphics, logos, and images, is the property of our company and is protected by copyright and other intellectual property laws.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
            <p className="mb-4">
              We shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or related to your use of the website.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
            <p className="mb-4">
              These terms and conditions shall be governed by and construed in accordance with the laws of [your jurisdiction].
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Changes to the Terms and Conditions</h2>
            <p className="mb-4">
              We reserve the right to modify these terms and conditions at any time. Your continued use of the website after any such changes constitutes your acceptance of the new terms and conditions.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions or concerns about these terms and conditions, please contact us at [your email or contact information].
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;