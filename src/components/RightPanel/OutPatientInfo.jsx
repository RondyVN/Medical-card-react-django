import React from 'react';

const OutPatientInfo = ({patientInfo}) => {
    return (
        <div className="out-patient">
            <table>
                <tbody>
                    <tr>
                        <td>First Name:</td>
                        <td>{patientInfo.first_name}</td>
                    </tr>
                    <tr>
                        <td>Last Name:</td>
                        <td>{patientInfo.last_name}</td>
                    </tr>
                    <tr>
                        <td>Country:</td>
                        <td>{patientInfo.country}</td>
                    </tr>
                    <tr>
                        <td>State:</td>
                        <td>{patientInfo.state}</td>
                    </tr>
                    <tr>
                        <td>Address</td>
                        <td>{patientInfo.address}</td>
                    </tr>
            </tbody>
            </table>
        </div>
    );
};

export default OutPatientInfo;