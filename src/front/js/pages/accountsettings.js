import React from "react";
import "../../styles/accountsettings.css";

export const AccountSettings = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="account-settings-title text-white text-center mb-5">Account Settings</h1>
                </div>
            </div>
            <div className="col-md-12">
                <fieldset disabled />
                <legend className="text-white mb-5">Update Account Settings</legend>
                <div className="mb-5">
                    <label for="disabledTextInput" className="form-label text-white">Account Email</label>
                    <input type="text" id="disabledTextInput" className="form-control" placeholder="Enter Account Email" />
                </div>
                <div className="mb-5">
                    <label for="inputPassword5" className="form-label text-white">Current Password</label>
                    <input type="password" id="inputPassword5" className="form-control" placeholder="**********" />
                </div>
                <div className="mb-5">
                    <label for="inputPassword5" className="form-label text-white">New Password</label>
                    <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" />
                    <div id="passwordHelpBlock" className="form-text ">
                        Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                    </div>
                </div>
                <div className="mb-5">
                    <button type="button" class="btn btn-success btn-lg">Update Password</button>
                </div>
                <div className="mb-5">
                    <legend className="text-white mb-5">Delete Your Account</legend>
                    <p className="text-white">We will miss you 😿</p>
                    <button type="button" class="btn btn-danger btn-lg">Delete Account</button>
                </div>
            </div>
        </div>
    );
};