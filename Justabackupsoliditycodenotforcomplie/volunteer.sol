// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract VolunteerRegistration {
    struct DateTimeAvailability {
        string date;
        string time;
    }

    struct Volunteer {
        string displayName;
        string skills;
        string profileBio;
        string profilePictureHash;
        DateTimeAvailability[] availabilities;
    }

    mapping(address => Volunteer) private volunteers;
    mapping(address => bool) public isRegistered; // ✅ new: track if someone registered

    event VolunteerRegistered(address indexed volunteer);

    function registerVolunteer(
        string memory _displayName,
        string memory _skills,
        string memory _profileBio,
        string memory _profilePictureHash,
        string[] memory _dates,
        string[] memory _times
    ) public {
        require(_dates.length == _times.length, "Dates and times must match");

        Volunteer storage v = volunteers[msg.sender];
        v.displayName = _displayName;
        v.skills = _skills;
        v.profileBio = _profileBio;
        v.profilePictureHash = _profilePictureHash;

        delete v.availabilities; // Reset

        for (uint256 i = 0; i < _dates.length; i++) {
            v.availabilities.push(DateTimeAvailability(_dates[i], _times[i]));
        }

        isRegistered[msg.sender] = true; // ✅ Mark as registered
        emit VolunteerRegistered(msg.sender);
    }

    function getVolunteer(address _volunteer) public view returns (
        string memory displayName,
        string memory skills,
        string memory profileBio,
        string memory profilePictureHash,
        string[] memory dates,
        string[] memory times
    ) {
        require(isRegistered[_volunteer], "Volunteer not registered"); // ✅ Safety

        Volunteer storage v = volunteers[_volunteer];
        uint256 length = v.availabilities.length;
        dates = new string[](length);
        times = new string[](length);

        for (uint256 i = 0; i < length; i++) {
            dates[i] = v.availabilities[i].date;
            times[i] = v.availabilities[i].time;
        }

        return (v.displayName, v.skills, v.profileBio, v.profilePictureHash, dates, times);
    }
}
