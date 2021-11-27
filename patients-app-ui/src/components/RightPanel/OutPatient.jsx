import React from 'react';

const OutPatient = ({info}) => {
    return (
        <div className="out-patient">
            <table>
                <tbody>
                    <tr>
                        <td>First Name:</td>
                        <td>{info.first_name}</td>
                    </tr>
                    <tr>
                        <td>Last Name:</td>
                        <td>{info.last_name}</td>
                    </tr>
                    <tr>
                        <td>Country:</td>
                        <td>{info.country}</td>
                    </tr>
                    <tr>
                        <td>State:</td>
                        <td>{info.state}</td>
                    </tr>
                    <tr>
                        <td>Date of birth:</td>
                        <td>{info.date_birth}</td>
                    </tr>
            </tbody>
            </table>
        </div>
    );
};

export default OutPatient;