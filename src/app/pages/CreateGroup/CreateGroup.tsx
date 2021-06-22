import React, { useState } from 'react';
import BackButton from '../../components/BackButton/BackButton';
import Button from '../../components/Button/Button';
import UploadGroupImage from '../../components/Icons/UploadGroupImage';
import LabeledInput from '../../components/LabeledInput/LabeledInput';
import NavBar from '../../components/NavBar/NavBar';
import styles from './CreateGroup.module.css';
import { postGroup } from '../../utils/api';
import { Group } from '../../../types';

export default function CreateGroup(): JSX.Element {
  const [groupName, setGroupName] = useState('');
  const [sport, setSport] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [limit, setLimit] = useState(0);
  const [equipment, setEquipment] = useState('');
  const [description, setDescription] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const group: Group = {
      groupName,
      sport,
      date,
      time,
      location,
      limit,
      equipment,
      description,
    };
    console.log(group);
    await postGroup(group);
  }

  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <div className={styles.backButton}>
          <BackButton />
          <h1>Create Group</h1>
        </div>
        <button className={styles.uploadButton}>
          <UploadGroupImage />
          <p>Upload group image</p>
        </button>
      </header>
      <form onSubmit={handleSubmit} className={styles.form}>
        <LabeledInput
          variant="tertiary"
          placeholder="&nbsp;"
          label="Group name"
          type="text"
          value={groupName}
          onChange={setGroupName}
          required
        />
        <LabeledInput
          variant="tertiary"
          placeholder="&nbsp;"
          label="Sport"
          type="text"
          value={sport}
          onChange={setSport}
          required
        />
        <LabeledInput
          variant="tertiary"
          placeholder="&nbsp;"
          label="Date"
          type="text"
          value={date}
          onChange={setDate}
          required
        />
        <LabeledInput
          variant="tertiary"
          placeholder="&nbsp;"
          label="Time"
          type="text"
          value={time}
          onChange={setTime}
          required
        />
        <LabeledInput
          variant="tertiary"
          placeholder="&nbsp;"
          label="Location"
          type="text"
          value={location}
          onChange={setLocation}
          required
        />
        <LabeledInput
          variant="tertiary"
          placeholder="&nbsp;"
          label="Limit of participants"
          type="number"
          value={limit}
          onChange={(value) => setLimit(Number(value))}
          required
        />
        <LabeledInput
          variant="tertiary"
          placeholder="&nbsp;"
          label="Equipment"
          type="text"
          value={equipment}
          onChange={setEquipment}
          required
        />
        <LabeledInput
          variant="tertiary"
          placeholder="&nbsp;"
          label="Description"
          type="text"
          value={description}
          onChange={setDescription}
          required
        />
        <div className={styles.createGroupButton}>
          <Button variant="primary">Create group</Button>
        </div>
      </form>
      <footer className={styles.footer}>
        <NavBar />
      </footer>
    </div>
  );
}
