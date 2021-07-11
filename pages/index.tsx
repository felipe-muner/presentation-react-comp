import Head from "next/head";
import SkeletonGrid from "../components/SkeletonGrid";
import { useEffect, useState } from "react";
import { getShortName, randomDate } from "../utils";
import styles from "../styles/Home.module.css";
type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: string;
  phone: string;
  website: object;
  company: object;
};

// export default function Home({ data }: { data: User[] }) {
export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [users, setUsers] = useState<User[]>([]);

  const getUsers = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data: User[] = await res.json();
    console.log(data);
    setUsers(data);
    setIsLoading(false);
  };

  useEffect(() => {
    // setTimeout(() => {
    getUsers();
    // }, 2000);
  }, []);

  const items = users.map((item) => {
    const newDate = randomDate(new Date(2021, 5, 5), new Date());
    console.log(newDate);
    return (
      <div key={item.id.toString()}>
        <div className={styles.card}>
          <div className={styles.row}>
            <div
              style={{ marginLeft: "11px", marginTop: "7px", fontSize: "14px" }}
            >
              {newDate.toUTCString()}
            </div>
          </div>
          <div className={styles.row} style={{ marginTop: "10px" }}>
            <div className={styles.circleName}>
              <span className={styles.shortName}>
                {getShortName(item.name)}
              </span>
            </div>
            <div
              style={{
                marginTop: "9px",
                fontSize: "18px",
              }}
            >
              {item.name}
            </div>
          </div>
          <div className={styles.row} style={{ marginTop: "10px" }}>
            <div>
              <i className={`fas fa-envelope ${styles.emailIcon}`}></i>
            </div>
            <div
              style={{ marginLeft: "11px", marginTop: "7px", fontSize: "14px" }}
            >
              {item.email}
            </div>
          </div>
        </div>
      </div>
    );
  });

  if (isLoading) return <SkeletonGrid />;

  return (
    <div>
      <Head>
        <title>Felipe Muner - Analysis</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <div className={styles.main}>
          {items}
          {items}
        </div>
      </div>
    </div>
  );
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data: User = await res.json();
//   console.log(data);

//   return {
//     props: {
//       data,
//     },
//   };
// };
