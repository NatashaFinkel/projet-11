import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editNameMode, fetchProfile, cancelEditNameMode, saveNewUserName } from "../redux/profileSlice";
import Button from "../components/Button";
import Account from "../components/Account";

function ProfilePage() {
    const dispatch = useDispatch();
    const token = useSelector(state => state.authentication.token);
    const name = useSelector(state => state.profile.name);
    const isUserNameBeingEdited = useSelector(state => state.profile.isUserNameBeingEdited);

    const [newUserName, setNewUserName] = useState('');

    useEffect(() => {
        if (token) {
            dispatch(fetchProfile(token));
        }
    }, [dispatch, token]);

    const handleEditBtn = () => {
        dispatch(editNameMode());
    };

    const handleNameSave = () => {
        dispatch(saveNewUserName({ userName: newUserName, userId: name.id, token: token }))
            .then(() => dispatch(fetchProfile(token)))
            .then(() => dispatch(cancelEditNameMode()))
            .catch((error) => {
                console.error('Failed to save new userName : ', error);
            });
    };

    const handleCancelNameClick = () => {
        dispatch(cancelEditNameMode());
    };

    return (
        <main className="main bg-dark">
            <div className="editing-form-header ">
                {isUserNameBeingEdited ? (
                    <div className="edit-name-form">
                        <p className="edit-name-form-title">Edit user info</p>
                        <div>
                            <label htmlFor="user-name-input">User name:</label>
                            <input
                                type="text"
                                className="edit-name-input"
                                id="user-name-input"
                                name="userName"
                                autoComplete="off"
                                value={newUserName}
                                onChange={(e) => setNewUserName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="first-name-input">First name:</label>
                            <input
                                type="text"
                                className="edit-name-input"
                                id="first-name-input"
                                name="firstName"
                                value={name.firstName}
                                disabled
                            />
                        </div>
                        <div>
                            <label htmlFor="last-name-input">Last name:</label>
                            <input
                                type="text"
                                className="edit-name-input"
                                id="last-name-input"
                                name="lastName"
                                value={name.lastName}
                                disabled
                            />
                        </div>
                        <div className="btn-group">

                            <Button btnClassName="btn save-or-cancel-btn" btnOnClick={handleNameSave} btnTxt="Save" />

                            <Button btnClassName="btn save-or-cancel-btn" btnOnClick={handleCancelNameClick} btnTxt="Cancel" />

                        </div>
                    </div>
                ) : (
                    <div>
                        <h1>Welcome back <br />{name.firstName} {name.lastName}!</h1>
                        <Button btnClassName="btn" btnTxt="Edit Name" btnOnClick={handleEditBtn} />
                    </div>
                )}
            </div>
            <h2 className="sr-only">Accounts</h2>
            <Account title="Argent Bank Checking (x8349)" amount="$2,082.79" description="Available Balance" />
            <Account title="Argent Bank Savings (x6712)" amount="$10,928.42" description="Available Balance" />
            <Account title="Argent Bank Credit Card (x8349)" amount="$184.30" description="Current Balance" />
        </main>
    );
}

export default ProfilePage;