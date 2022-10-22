import React, { useState } from 'react';
import Button from '../../../../ui-components/button/Button';
import { FiltersType } from '../../../../models/rovers';
import './Filters.css';
import { MANIFESTS_MOCK, ManifestType } from './Filters.mock';

const rovers = MANIFESTS_MOCK.map((rover) => rover.name);

interface SearchType {
  onFilters: (filters: FiltersType) => void;
}

const Search = ({ onFilters }: SearchType) => {
  const [rover, setRover] = useState<ManifestType>(MANIFESTS_MOCK[0]);
  const [camera, setCamera] = useState(rover.cameras[0]);
  const [sol, setSol] = useState(1);
  const [earthDate, setEarthDate] = useState(rover.max_date);
  const [disableSol, setDisableSol] = useState(true);

  const handleRoverChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const roverName = event.target.value;
    const selectedRover = MANIFESTS_MOCK.find(
      (rover) => rover.name === roverName,
    );
    selectedRover && setRover(selectedRover);
  };

  const handleCameraChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const cameraName = event.target.value;
    setCamera(cameraName);
  };

  const handleSolChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    if (!isNaN(+event.target.value)) setSol(+event.target.value);
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const date = event.target.value;

    setEarthDate(date);
  };

  const handleDisableSol = () => {
    setDisableSol((prev) => !prev);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const filter: FiltersType = {
      rover: rover.name,
      earth_date: earthDate,
    };

    if (camera !== 'All') filter.camera = camera;
    if (!disableSol) filter.sol = sol;

    onFilters(filter);
  };

  return (
    <form className="search-copntainer" onSubmit={handleSubmit}>
      <div>
        <p>Rover</p>
        <select value={rover.name} onChange={handleRoverChange}>
          {rovers.map((current) => {
            return (
              <option value={current} key={current}>
                {current}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <p>Camera:</p>
        <select value={camera} onChange={handleCameraChange}>
          {rover.cameras.map((current) => {
            return (
              <option value={current} key={current}>
                {current}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <div className="checkbox-container">
          <input
            type="checkbox"
            onChange={handleDisableSol}
            checked={!disableSol}
          />
          <p>Sol:</p>
        </div>
        <input
          disabled={disableSol}
          type="number"
          min={1}
          max={rover.max_sol}
          value={sol}
          onChange={handleSolChange}
        />
      </div>
      <div>
        <p>Date:</p>
        <input type="date" value={earthDate} onChange={handleDateChange} />
      </div>
      <Button type="submit">Search</Button>
    </form>
  );
};

export default Search;
