import { useFetchCountry } from "@/features/country/useFetchCountry";
import styles from "@/styles/Dashboard.module.css";
import React, { useState } from "react";

export default function Dashboard() {
  const [name, setName] = useState("");
  const { data, error } = useFetchCountry(name);

  const changeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <h1>Country</h1>
        <div className={styles.inputContainer}>
          <input
            type="text"
            placeholder="Type any country name"
            value={name}
            onChange={changeName}
          />
          <div className={styles.icon}>
            <svg
              width="23"
              height="23"
              viewBox="0 0 23 23"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8.875 0.75C11.0299 0.75 13.0965 1.60602 14.6202 3.12976C16.144 4.65349 17 6.72012 17 8.875C17 10.8875 16.2625 12.7375 15.05 14.1625L15.3875 14.5H16.375L22.625 20.75L20.75 22.625L14.5 16.375V15.3875L14.1625 15.05C12.6882 16.3085 10.8134 16.9999 8.875 17C6.72012 17 4.65349 16.144 3.12976 14.6202C1.60602 13.0965 0.75 11.0299 0.75 8.875C0.75 6.72012 1.60602 4.65349 3.12976 3.12976C4.65349 1.60602 6.72012 0.75 8.875 0.75ZM8.875 3.25C5.75 3.25 3.25 5.75 3.25 8.875C3.25 12 5.75 14.5 8.875 14.5C12 14.5 14.5 12 14.5 8.875C14.5 5.75 12 3.25 8.875 3.25Z" />
            </svg>
          </div>
          {name !== "" && (
            <div className={styles.listResult}>
              <ul>
                {error ? (
                  <li className={styles.notFound}>Data not found</li>
                ) : (
                  data.map((test, index) => (
                    <li key={index}>{test.name.common}</li>
                  ))
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
